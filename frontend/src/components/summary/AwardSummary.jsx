import { Fragment, useContext, useState } from "react";
import { BsInfoLg } from "react-icons/bs"
import { Link } from "react-router-dom"
import { MyContext } from "../../context/AuthProvider";
import SkeletonCard from "../skelton";


const AwardSummary = ({ summaryData }) => {
    const { summaryLoading } = useContext(MyContext)
    const [inputData, setInputData] = useState("")
    const extraNode = true;


    return (
        <div className="w-[30%] text-center ">
            {summaryLoading ?
                <>
                    <SkeletonCard qty={1} extraNode={extraNode} />
                </>
                :
                summaryData && summaryData.List?.map((ele, i) => {
                    return (
                        <Fragment key={i}>
                            <Link to={`/${ele.AwardName.replace(/\s/g, "")}`} className="text-[#4D4F53] text-2xl flex items-center justify-center font-medium hover:text-blue-700">{ele.AwardName}<BsInfoLg size={30} color="#000" /></Link>
                            <div className=" border border-[#4DA8C3] bg-[#4DA8C3] text-white text-xl py-2 rounded-lg shadow-md shadow-gray-400 mt-2">
                                <p >TSR: {ele.ClientTSR}</p>
                                <p className=" text-lg">{ele.Percentile} Percentile</p>
                                <p >Payout : {ele.Payout}</p>
                                <p >{inputData && `*My Value: $ ${(inputData * ele.PayoutDecimal * ele.ClientTSRDecimal * 100).toFixed(2)}`}</p>
                            </div>
                            <div className="py-2">
                                <p className="text-[17px]">Target Shares :</p>
                                <input type="number" value={inputData} onChange={(e) => setInputData(e.target.value)} name="customInput0" min="0" placeholder="Input Target Shares" className="border border-gray-400  rounded-sm text-lg p-[2px] pl-1" />
                            </div>
                            <Link to={`/${ele.AwardName.replace(/\s/g, "")}`} className="text-lg text-blue-500 hover:text-blue-700">{ele.AwardName} Calculation Details</Link>
                        </Fragment>
                    )
                })
            }
        </div>

    )
}

export default AwardSummary
