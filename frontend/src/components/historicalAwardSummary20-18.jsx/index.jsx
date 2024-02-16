import { BsInfoLg } from 'react-icons/bs'
import { CgAddR } from 'react-icons/cg'
import { Fragment, useContext, useState } from 'react';
import { MyContext } from '../../context/AuthProvider';
import SkeletonCard from '../skelton';
import HistoricalTSRTable from '../historicalTSRTable.jsx';

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
        <SkeletonCard qty={1} />
        :
        historicalData && historicalData.List?.map((ele, i) => {
          return (
            <Fragment key={i}>
              <p className="text-[#4D4F53] text-2xl flex items-center justify-center font-medium">{ele.AwardName}<BsInfoLg size={30} color="#000" /></p>
              <div className=" border border-[#4DA8C3] bg-[#4DA8C3] text-white text-xl py-2  rounded-lg shadow-md mt-2 shadow-gray-400">
                <p>TSR: {ele.ClientTSR}</p>
                <p className=" text-lg">{ele.Percentile} Percentile</p>
                <p className="flex items-center justify-center gap-2">Rank: #1.80 out of 7<CgAddR class=" bg-violet-500 shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 cursor-pointer rounded-md" size={26} onClick={() => handleAccor(historicalData.PlanId)} /></p>
                <p>Payout: {ele.Payout}</p>
                <p >{inputData && `*My Value: $ ${(inputData * ele.PayoutDecimal * ele.ClientTSRDecimal * 100).toFixed(2)}`}</p>
              </div>
              <div className="py-2">
                <p className="text-[17px]">Target Shares :</p>
                <input type="number" value={inputData} onChange={(e) => setInputData(e.target.value)} name="customInput0" min="0" placeholder="Input Target Shares" className="border border-gray-400  rounded-sm text-lg p-[2px] pl-1" />
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
