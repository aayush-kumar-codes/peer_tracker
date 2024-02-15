import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import { useEffect, useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)


const PayoutChart = ({ payoutChartYear }) => {
    const [labels, setLabels] = useState([]);
    const [dataSets, setDataSets] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchChartData = (payoutChartYear) => {
        const daysGap = 49;
        const today = new Date();
        const nextTwoYears = new Date(today.getFullYear() + 2, today.getMonth(), today.getDate());
    
        const dateLabels = payoutChartYear?.List?.[0]?.DataPoints?.map(ele => {
          const date = new Date(ele.x);
          return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
        });
    
        const nextTwoYearsLabels = [];
        let currentDate = new Date(dateLabels[dateLabels.length - 1]);
    
        while (currentDate < nextTwoYears) {
          currentDate.setDate(currentDate.getDate() + daysGap);
          nextTwoYearsLabels.push(`${(currentDate.getMonth() + 1)}/${currentDate.getDate()}/${currentDate.getFullYear()}`);
        }
    
        const allDataLabels = dateLabels ? [...dateLabels, ...nextTwoYearsLabels] : nextTwoYearsLabels;
        setLabels(allDataLabels);

        const colors = ["#CC2A36", "#33BEFF"]
        const chartDatasets = payoutChartYear && payoutChartYear.List.map((item, index) => ({
            label: item.Name,
            data: item.DataPoints.map((dataPoint) => dataPoint.y),
            borderColor: colors[index % colors.length],
            backgroundColor: colors[index % colors.length],
            pointRadius: 0,
        }))
        setDataSets(chartDatasets)
        setLoading(false)
    }

    useEffect(() => {
        if (payoutChartYear) {
            fetchChartData(payoutChartYear)
        }
    }, [payoutChartYear])


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Payout as a Percent of Target (%)",
            },
        },
        scales: {
            x: {
                ticks: {
                    maxRotation: 45,
                    minRotation: 45,
                },
            },
            y: {
                min: 0,
                max: 2,
                ticks: {
                    callback: function (value) {
                        return Math.round(value * 100) + "%";
                    },
                },
            },
        },
    };

    const data = {
        labels: labels,
        datasets: dataSets,
    };

    return (
        <>
            {loading ?
                <div>
                    <p>Loading Payout History....</p>
                </div>
                : <div className=" bg-white py-3 px-4">
                    <Line data={data} options={options} />
                </div>}
        </>
    )
}

export default PayoutChart