import { useContext } from "react";
import { MyContext } from "../../context/AuthProvider";
import TsrChart from "../../components/FyAward/TsrChart";
import TsrBarChart from '../../components/FyAward/TsrBarChart';
import PayoutChart from '../../components/FyAward/PayoutChart';
import GoldCorpTable from '../../components/FyAward/GoldCorpTable';
import GoldMinerTable from '../../components/FyAward/GoldMinerTable';
import AwardHeader from "../../components/FyAward/AwardHeader";
import { buttonData } from "../../utils/buttonData";


const FY2022Award = () => {
  const { tsrChartYear2022,
    PayoutChartYear2022,
    tsrBarChartYear2022,
    goldCorpTableData2022,
    goldMinerTableData2022,
    summaryDataYear2022 } = useContext(MyContext);

  return (
    <div className='p-5'>
      <AwardHeader year={summaryDataYear2022} />
      <div className="flex justify-between w-[100%] mt-8 gap-8 px-7 ">
        <GoldCorpTable tableData={goldCorpTableData2022} />
        <GoldMinerTable tableData={goldMinerTableData2022} calData={goldCorpTableData2022} />
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        {buttonData.map(ele => <button key={ele.id} className="bg-[#4DA8C3]  text-white py-2 px-3 rounded-md font-bold">{ele.value}</button>)}
      </div>
      <div className=" mt-8 border border-gray-300">
        <TsrChart tsrChartYear={tsrChartYear2022} />
      </div>
      <div className=" mt-8 border border-gray-300">
        <PayoutChart payoutChartYear={PayoutChartYear2022} />

      </div>
      <div className=" mt-8 border border-gray-300">
        <TsrBarChart tsrBarChartYear={tsrBarChartYear2022} />
      </div>
    </div>
  )
}

export default FY2022Award
