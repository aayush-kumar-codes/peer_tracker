import axios from "axios";
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


const PayoutChart = ({payoutChartYear}) => {
    const [labels, setLabels] = useState([]);
    const [dataSets, setDataSets] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchPayoutChartData = (payoutChartYear) => {
        const currentDate = new Date()
        const lastYearDate = new Date(currentDate)
        lastYearDate.setFullYear(lastYearDate.getFullYear() - 1)
        const dateLabels = []
        for (
            let date = new Date(lastYearDate);
            date <= currentDate;
            date.setDate(date.getDate() + 1)
        ) {
            dateLabels.push(date.toLocaleDateString("en-US"))
        }
        setLabels(dateLabels)

        const colors = ["#CC2A36", "#4F372D", "#00A0B0", "#EB6841", "#EDC951"]
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
            fetchPayoutChartData(payoutChartYear)
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