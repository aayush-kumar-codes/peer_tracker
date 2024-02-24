import { useContext} from "react";
import { MyContext } from "../../context/AuthProvider";
import TsrChart from "../../components/FyAward/TsrChart";
import TsrBarChart from '../../components/FyAward/TsrBarChart';
import PayoutChart from '../../components/FyAward/PayoutChart';
import GoldCorpTable from '../../components/FyAward/GoldCorpTable';
import GoldMinerTable from '../../components/FyAward/GoldMinerTable';
import AwardHeader from "../../components/FyAward/AwardHeader";
import DownloadPeerTsrFileData from "../../components/FyAward/DownloadPeerTsrFileData";
import DownloadTsrFileData from "../../components/FyAward/DownloadTsrFileData";
import DownloadHistoTsrFileData from "../../components/FyAward/DownloadHistoTsrFileData";



const FY2022Award = () => {
  const {
    tsrChartYear2022,
    PayoutChartYear2022,
    tsrBarChartYear2022,
    goldCorpTableData2022,
    goldMinerTableData2022,
    summaryDataYear2022,
    downloadTsrFile2022,
    downloadPeerTsrFile2022,
    downloadHistoTsrFile2022
  } = useContext(MyContext);



  return (
    <div className='p-5 max-w-6xl mx-auto'>
      <AwardHeader year={summaryDataYear2022} />
      <div className="flex justify-between  mt-8 gap-8 px-7 ">
        <GoldCorpTable tableData={goldCorpTableData2022} />
        <GoldMinerTable tableData={goldMinerTableData2022} calData={goldCorpTableData2022} />
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <DownloadTsrFileData TSRFileYear={downloadTsrFile2022} />
        <DownloadPeerTsrFileData PeerTsrFileYear={downloadPeerTsrFile2022}/>
       <DownloadHistoTsrFileData HistoTsrFileYear={downloadHistoTsrFile2022}/>
      </div>
      <div className=" mt-8">
        <TsrChart tsrChartYear={tsrChartYear2022} />
      </div>
      <div className=" mt-8">
        <PayoutChart payoutChartYear={PayoutChartYear2022} />

      </div>
      <div className=" mt-8">
        <TsrBarChart tsrBarChartYear={tsrBarChartYear2022} />
      </div>
    </div>
  )
}

export default FY2022Award
