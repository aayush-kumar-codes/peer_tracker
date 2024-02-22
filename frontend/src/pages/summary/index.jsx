import { useContext } from "react"
import AwardSummary from "../../components/summary/AwardSummary"
import { MyContext } from "../../context/AuthProvider"

const Summary = () => {
  const { summaryDataYear2023, summaryDataYear2022, summaryDataYear2021 } = useContext(MyContext)

  return (
    <div className="px-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center py-8">
        <div className="text-3xl text-white">
          {summaryDataYear2023?.List?.map((ele, i) => <p key={i}>Calculations as of {ele.DisplayDateString}</p>)}
        </div>
      </div>
      <div className="flex justify-between w-[100%] px-4">
        <AwardSummary summaryData={summaryDataYear2023} />
        <AwardSummary summaryData={summaryDataYear2022} />
        <AwardSummary summaryData={summaryDataYear2021} />
      </div>
      {/* <div className="text-center">
        <p className="italic font-medium text-[17px]">*Calculations based on a closing stock price of $33.65.</p>
      </div> */}
    </div>
  )
}

export default Summary
