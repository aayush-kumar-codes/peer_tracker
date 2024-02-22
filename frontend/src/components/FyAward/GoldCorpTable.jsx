import { useContext } from "react"
import { MyContext } from "../../context/AuthProvider"
import SkeletonTable from "../skelton/tableSkelton"

const GoldCorpTable = ({ tableData }) => {
    const { corpTableLoader } = useContext(MyContext)

    return (
        <div className="w-[50%]">
            {corpTableLoader ? <SkeletonTable qty={6} width={500} />
                :
                <table className="w-[100%] border-collapse border text-[14px]">
                    <thead className="bg-[#3A879E]  text-white">
                        <tr>
                            <th className="text-left pl-2 py-2">Newmont Goldcorp Calculation</th>
                            <th className="text-right pr-2 py-2">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData && tableData?.List?.map((ele, i) => {
                            if (ele.CalculationType === "Rank") {
                                return null;
                            }
                            const isBgColor = i === 1 || i === 3 || i === 6;
                            return (
                                <tr key={i} className={isBgColor ? "bg-[#E6F3F6] text-black" : "text-white"}>
                                    <td className="pl-2 py-1">{ele.CalculationType}</td>
                                    <td className="align-right text-right pr-2 py-1">{ele.CalculationValue}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}
        </div>
    )
}

export default GoldCorpTable
