import React, { useContext, useEffect } from 'react'
import { MyContext } from '../../context/AuthProvider';
import SkeletonTable from '../skelton/tableSkelton';
import "./GoldMiner.css"
import { Link } from 'react-router-dom';


const GoldMinerTable = ({ tableData, calData }) => {
    const { minerTableLoader } = useContext(MyContext)

    return (
        <div className="w-[50%]">
            {minerTableLoader ? <SkeletonTable qty={7} /> : <table className="w-[100%] border-collapse border text-[14px]">
                <thead className="bg-[#4DA8C3]  text-white">
                    <tr>
                        <th className="text-left pl-2 py-1 font-[600]">VanEck Vectors Gold Miners ETF (GDX)</th>
                        <th className="text-right pr-2 py-1 font-[600]">Result</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData && tableData?.List?.map((ele) => ele.SubPlanList?.map((elem, i) => {
                        const isBgColor = i % 2 !== 0;
                        return (
                            <tr key={i} className={isBgColor ? "bg-[#E6F3F6]" : ""}>
                                <td className="pl-2 py-1">{(elem.PayoutBasis * 100).toFixed(0)}th Percentile</td>
                                <td className="align-right text-right pr-2 py-1">{((elem.TSR) * 100).toFixed(1) + "%"}</td>
                            </tr>
                        )
                    }))}
                </tbody>
            </table>}

            <div className='text-center py-4 font-[500] text-gray-600 flex items-center justify-center'>
                {calData && calData.List && calData?.List.length > 0 && (
                    <>
                        <div className='flex gap-1'>
                            <span>TSR</span>
                            <span>=</span>
                            <Link to="#" className='text-[#337AB7]'>{calData.List[3].CalculationValue}</Link>
                            <span>=</span>
                        </div>
                        <div className="fraction">
                            <span className="fup">
                                <span>{calData.List[1].CalculationValue}</span>
                                <span className='mx-1'>−</span>
                                <span>{calData.List[0].CalculationValue}</span>
                            </span>
                            <span className="fdn">{calData.List[0].CalculationValue}</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default GoldMinerTable
