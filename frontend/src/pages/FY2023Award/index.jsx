import { useContext} from "react";
import { MyContext } from "../../context/AuthProvider";
import TsrChart from "../../components/FyAward/TsrChart";
import PayoutChart from "../../components/FyAward/PayoutChart";
import TsrBarChart from "../../components/FyAward/TsrBarChart";
import GoldCorpTable from "../../components/FyAward/GoldCorpTable";
import GoldMinerTable from "../../components/FyAward/GoldMinerTable";
import AwardHeader from "../../components/FyAward/AwardHeader";
import DownloadHistoTsrFileData from "../../components/FyAward/DownloadHistoTsrFileData";
import DownloadPeerTsrFileData from "../../components/FyAward/DownloadPeerTsrFileData";
import DownloadTsrFileData from "../../components/FyAward/DownloadTsrFileData";

const FY2023Award = () => {
    const {
        tsrChartYear2023,
        PayoutChartYear2023,
        tsrBarChartYear2023,
        goldCorpTableData2023,
        goldMinerTableData2023,
        summaryDataYear2023,
        downloadTsrFile2023,
        downloadPeerTsrFile2023,
        downloadHistoTsrFile2023
    } = useContext(MyContext);

    return (
        <div className='p-5 max-w-6xl mx-auto'>
            <AwardHeader year={summaryDataYear2023} />
            <div className="flex justify-between w-[100%] mt-8 gap-8 px-7 ">
                <GoldCorpTable tableData={goldCorpTableData2023} />
                <GoldMinerTable tableData={goldMinerTableData2023} calData={goldCorpTableData2023} />
            </div>
            <div className="flex items-center justify-center gap-4 mt-8">
                <DownloadTsrFileData TSRFileYear={downloadTsrFile2023} />
                <DownloadPeerTsrFileData PeerTsrFileYear={downloadPeerTsrFile2023} />
                <DownloadHistoTsrFileData HistoTsrFileYear={downloadHistoTsrFile2023} />
            </div>
            <div className=" mt-8">
                <TsrChart tsrChartYear={tsrChartYear2023} />
            </div>
            <div className=" mt-8">
                <PayoutChart payoutChartYear={PayoutChartYear2023} />
            </div>
            <div className=" mt-8">
                <TsrBarChart tsrBarChartYear={tsrBarChartYear2023} />
            </div>
        </div>
    )
}

export default FY2023Award
