import { Fragment } from "react";

const HistoricalTSRTable = ({ tableDataShow }) => {
    console.log(tableDataShow, "@#################3");
    return (
        <>
            <table className="w-[100%] table-auto border-collapse border">
                <thead className="bg-[#4DA8C3]  text-white">
                    <tr>
                        <th className="text-left py-1 pl-2">Peer Name</th>
                        <th className="text-right py-1 pr-2">TSR</th>
                    </tr>
                </thead>
                <tbody>
                    {tableDataShow && tableDataShow?.List?.map((elem) => elem?.TSRs?.map((ele, i) => {
                          const backgroundColor = ele.PeerName === "Newmont" ? "#73E11B" : "transparent";
                        return (
                            <tr key={i} style={{backgroundColor}}>
                                <td className='pl-2 text-left py-1'>{ele.PeerName}</td>
                                <td className="align-right py-1 text-right pr-2">{((ele.TSR) * 100).toFixed(2) + "%"}</td>
                            </tr>
                        )
                    })
                    )}
                </tbody>
            </table>
        </>
    )
}

export default HistoricalTSRTable
