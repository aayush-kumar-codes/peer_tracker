import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/AuthProvider";
import TsrChart from "../../components/FyAward/TsrChart";
import TsrBarChart from '../../components/FyAward/TsrBarChart';
import PayoutChart from '../../components/FyAward/PayoutChart';
import GoldCorpTable from '../../components/FyAward/GoldCorpTable';
import GoldMinerTable from '../../components/FyAward/GoldMinerTable';
import AwardHeader from '../../components/FyAward/AwardHeader';
import DownloadTsrFileData from "../../components/FyAward/DownloadTsrFileData";
import DownloadPeerTsrFileData from "../../components/FyAward/DownloadPeerTsrFileData";
import DownloadHistoTsrFileData from "../../components/FyAward/DownloadHistoTsrFileData";


const FY2021Award = () => {
  const {
    tsrChartYear2021,
    PayoutChartYear2021,
    tsrBarChartYear2021,
    goldCorpTableData2021,
    goldMinerTableData2021,
    summaryDataYear2021,
    downloadTsrFile2021,
    downloadPeerTsrFile2021,
    downloadHistoTsrFile2021
  } = useContext(MyContext);

  return (
    <div className='p-5 max-w-6xl mx-auto'>
      <AwardHeader year={summaryDataYear2021} />
      <div className="flex justify-between w-[100%] mt-8 gap-8 px-7">
        <GoldCorpTable tableData={goldCorpTableData2021} />
        <GoldMinerTable tableData={goldMinerTableData2021} calData={goldCorpTableData2021} />
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <DownloadTsrFileData TSRFileYear={downloadTsrFile2021} />
        <DownloadPeerTsrFileData PeerTsrFileYear={downloadPeerTsrFile2021} />
        <DownloadHistoTsrFileData HistoTsrFileYear={downloadHistoTsrFile2021} />
      </div>
      <div className=" mt-8">
        <TsrChart tsrChartYear={tsrChartYear2021} />
      </div>
      <div className=" mt-8">
        <PayoutChart payoutChartYear={PayoutChartYear2021} />
      </div>
      <div className=" mt-8">
        <TsrBarChart tsrBarChartYear={tsrBarChartYear2021} />
      </div>
    </div>
  )
}

export default FY2021Award


