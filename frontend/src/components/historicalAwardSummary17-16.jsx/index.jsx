import {useContext,useState } from 'react'
import { BsInfoLg } from 'react-icons/bs'
import { MyContext } from '../../context/AuthProvider';
import SkeletonCard from '../skelton';

const HistoricalAwardsSummarySeventeenToSixteen = ({ historicalData }) => {
    const { historicalLoading } = useContext(MyContext)
    const [inputData, setInputData] = useState("")


    return (
        <>
            {historicalLoading ?
               <SkeletonCard qty={1}/>
                :
                historicalData && historicalData.List && historicalData.List.length > 0 && (
                    <>
                        <p className="text-[#4D4F53] text-2xl flex items-center justify-center font-medium">{historicalData.List[0].AwardName}<BsInfoLg size={30} color="#000" /></p>
                        <div className=" border border-[#4DA8C3] bg-[#4DA8C3] text-white text-xl py-3  rounded-lg shadow-md mt-2 shadow-gray-400">
                            {historicalData.List[0] && (
                                <div>
                                    <p className="text-3xl">{historicalData.List[0].ClientName}</p>
                                    <p className="text-3xl">TSR: {historicalData.List[0].ClientTSR}</p>
                                    <p className="flex items-center justify-center gap-2">Peer Group Rank: {historicalData.List[0].ClientRank} out of 11</p>
                                    <p>(Payout: {historicalData.List[0].Payout})</p>
                                    <p>(Market Payout Factor Payout: {historicalData.OverallPayout})</p>
                                    <p className="text-2xl">Overall Payout: {historicalData.OverallPayout}</p>
                                    <p>{inputData && `*My Value: $ ${(inputData * historicalData.List[0].PayoutDecimal * historicalData.List[0].ClientTSRDecimal * 100).toFixed(2)}`}</p>
                                </div>
                            )}
                        </div>
                        <div className="py-2">
                            <p className="text-[17px]">Target Shares :</p>
                            <input
                                type="number"
                                value={inputData}
                                onChange={(e) => setInputData(e.target.value)}
                                name="customInput0"
                                min="0"
                                placeholder="Input Target Shares"
                                className="border border-gray-400 rounded-sm text-lg p-[2px] pl-1"
                            />
                        </div>
                    </>
                )
            }
        </>
    )
}

export default HistoricalAwardsSummarySeventeenToSixteen
