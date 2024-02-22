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
                            <Link to={`/${ele.AwardName.replace(/\s/g, "")}`} className="text-white text-2xl flex items-center justify-center font-medium hover:text-[#E61B22]">{ele.AwardName}<BsInfoLg size={30} color="#fff" /></Link>
                            <div className=" border border-gray-400 bg-[#3a879e] text-white text-xl py-2 rounded-lg mt-2">
                                <p >TSR: {ele.ClientTSR}</p>
                                <p className=" text-lg">{ele.Percentile} Percentile</p>
                                <p >Payout : {ele.Payout}</p>
                                <p >{inputData && `*My Value: $ ${(inputData * ele.PayoutDecimal * ele.ClientTSRDecimal * 100).toFixed(2)}`}</p>
                            </div>
                            <div className="py-2">
                                <p className="text-[17px] text-white">Target Shares :</p>
                                <input type="number" value={inputData} onChange={(e) => setInputData(e.target.value)} name="customInput0" min="0" placeholder="Input Target Shares" className="border border-gray-400  rounded-md bg-gray-200 text-lg p-[2px] pl-1 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />
                            </div>
                            <Link to={`/${ele.AwardName.replace(/\s/g, "")}`} className="text-lg text-[#fff] hover:text-[#E61B22]">{ele.AwardName} Calculation Details</Link>
                        </Fragment>
                    )
                })
            }
        </div>

    )
}

export default AwardSummary
