import { useContext } from "react";
import { MyContext } from "../../context/AuthProvider";
import SkeletonTable from "../skelton/tableSkelton";

const HistoricalTSRTable = ({ tableDataShow }) => {
    const { historicalTableLoading } = useContext(MyContext)
    return (
        <>
            {historicalTableLoading ? <SkeletonTable qty={8} width={300} />
                :
                <table className="w-[100%] table-auto border-collapse border text-[14px] mt-3">
                    <thead className="bg-[#4DA8C3]  text-white">
                        <tr>
                            <th className="text-left py-2 pl-1">Peer Name</th>
                            <th className="text-right py-2 pr-1">TSR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableDataShow && tableDataShow?.List?.map((elem) => elem?.TSRs?.map((ele, i) => {
                            const isBgColor = i % 2 !== 0
                            // const backgroundColor = ele.PeerName === "Newmont" ? "#73E11B" : backgroundColor1;

                            return (
                                <tr key={i} className={isBgColor ? "bg-[#E6F3F6] text-black" : "bg-[#393d47] text-white"}>
                                    <td className='pl-1 text-left py-1 '>{ele.PeerName}</td>
                                    <td className="align-right py-1 text-right pr-1">{((ele.TSR) * 100).toFixed(2) + "%"}</td>
                                </tr>
                            )
                        })
                        )}
                    </tbody>
                </table>}
        </>
    )
}

export default HistoricalTSRTable
