import { BsInfoLg } from 'react-icons/bs'
import { CgAddR } from 'react-icons/cg'
import { Fragment, useContext, useState } from 'react';
import { MyContext } from '../../context/AuthProvider';
import SkeletonCard from '../skelton';
import HistoricalTSRTable from '../historicalTSRTable.jsx';
import { CgRemoveR } from "react-icons/cg";
import SkeletonTable from '../skelton/tableSkelton/index.jsx';

const HistoricalAwardsSummaryTwentyToEighteen = ({ historicalData }) => {
  const {
    historicalLoading,
    historicalTSRTableData2020,
    historicalTSRTableData2019,
    historicalTSRTableData2018
  } = useContext(MyContext)

  const [inputData, setInputData] = useState("")
  const [tableDataShow, setTableDataShow] = useState(false)
  const [accorId, setAccorId] = useState(null)
  const iconClass = " bg-violet-500 shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 cursor-pointer rounded-md"
  const handleAccor = (id) => {
    if (accorId === id) {
      setTableDataShow(!tableDataShow)
    } else {
      setAccorId(id)
      setTableDataShow(true)
    }
  }

  return (
    <>
      {historicalLoading ?
        <>
          <SkeletonCard qty={1} />
        </>
        :
        historicalData && historicalData.List?.map((ele, i) => {
          return (
            <Fragment key={i}>
              <p className="text-2xl flex items-center justify-center font-medium text-white">{ele.AwardName}<BsInfoLg size={30} color="#fff" /></p>
              <div className=" border border-gray-400 bg-[#3a879e] text-white text-xl py-2 rounded-lg">
                <p>TSR: {ele.ClientTSR}</p>
                <p className=" text-lg">{ele.Percentile} Percentile</p>
                <p className="flex items-center justify-center gap-2">Rank: #1.80 out of 7
                  {tableDataShow ?
                    (<CgRemoveR size={26} className={iconClass} onClick={() => handleAccor(historicalData.PlanId)} />) : (<CgAddR className={iconClass} size={26} onClick={() => handleAccor(historicalData.PlanId)} />)}</p>
                <p>Payout: {ele.Payout}</p>
                <p >{inputData && `*My Value: $ ${(inputData * ele.PayoutDecimal * ele.ClientTSRDecimal * 100).toFixed(2)}`}</p>
              </div>
              <div className="py-2">
                <p className="text-[17px] text-white">Target Shares :</p>
                <input type="number" value={inputData} onChange={(e) => setInputData(e.target.value)} name="customInput0" min="0" placeholder="Input Target Shares" className="border border-gray-400  rounded-md bg-gray-200 text-lg p-[2px] pl-1 [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none" />
              </div>
            </Fragment>
          )
        })
      }
      {tableDataShow && (
        <>
          {accorId === 3366 && <HistoricalTSRTable tableDataShow={historicalTSRTableData2020} />}
          {accorId === 3004 && <HistoricalTSRTable tableDataShow={historicalTSRTableData2019} />}
          {accorId === 2515 && <HistoricalTSRTable tableDataShow={historicalTSRTableData2018} />}
        </>
      )}
    </>
  )
}

export default HistoricalAwardsSummaryTwentyToEighteen
