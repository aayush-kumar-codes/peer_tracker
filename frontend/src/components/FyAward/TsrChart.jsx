import { useEffect, useState } from "react"
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const TsrChart = ({ tsrChartYear }) => {
  const [labels, setLabels] = useState([])
  const [dataSets, setDataSets] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchChartData = (tsrChartYear) => {
    const daysGap = 49;
    const today = new Date();
    const nextTwoYears = new Date(today.getFullYear() + 2, today.getMonth(), today.getDate());

    const dateLabels = tsrChartYear?.List?.[0]?.DataPoints?.map(ele => {
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

    const colors = ["#F01B0C", "#0BB30B", "#990c9c", "#081078", "#cc5608"]
    const chartDatasets = tsrChartYear && tsrChartYear.List.map((item, index) => ({
      label: item.Name,
      data: item.DataPoints.map((dataPoint) => (dataPoint.y * 100).toFixed(2)),
      borderColor: colors[index % colors.length],
      backgroundColor: colors[index % colors.length],
      pointRadius: 0,
    }))
    setDataSets(chartDatasets)
    setLoading(false)
  }

  useEffect(() => {
    if (tsrChartYear) {
      fetchChartData(tsrChartYear)
    }
  }, [tsrChartYear])




  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "TSRs (%)",
        fonstsize: 20,
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
        min: Math.floor(Math.min(...dataSets.flatMap(dataset => dataset.data))),
        max: Math.ceil(Math.max(...dataSets.flatMap(dataset => dataset.data))),
        ticks: {
          callback: function (value) {
            return Math.round(value) + "%";
          },
        },
      },
    }
  }

  const data = {
    labels: labels,
    datasets: dataSets,
  }


  return (
    <>
      {
        loading ? (
          <div className="mt-[80px]">
            <p className="text-white">Loading TSR History....</p>
          </div >
        ) : (

          <div className=" bg-[#E6F3F6] py-3 px-4 rounded-xl">
            <Line data={data} options={options} />
          </div>
        )}
    </>
  )
}

export default TsrChart
