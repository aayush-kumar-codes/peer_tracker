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
    const chartDatasets = tsrChartYear && tsrChartYear.List.map((item, index) => ({
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
    if(tsrChartYear){
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
        min: (() => {
          switch (tsrChartYear.PlanId) {
            case 4386:
              return -0.3
            case 4092:
              return -0.4
            case 3714:
              return -0.6
          }
        })(),
        max: (() => {
          switch (tsrChartYear.PlanId) {
            case 4386:
              return 0.3
            case 4092:
              return 1.2
            case 3714:
              return 1
          }
        })(),
        ticks: {
          callback: function (value) {
            return Math.round(value * 100) + "%"
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
          <div>
            <p>Loading TSR History....</p>
          </div >
        ) : (
          <div className=" bg-white py-3 px-4">
            <Line data={data} options={options} />
          </div>
        )}
    </>
  )
}

export default TsrChart
