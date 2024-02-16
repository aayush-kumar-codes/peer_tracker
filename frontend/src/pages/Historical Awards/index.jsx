import { useContext} from "react";
import NewmontLogo from "../../assets/NewmontLogo.png";
import HistoricalAwardsSummarySeventeenToSixteen from "../../components/historicalAwardSummary17-16.jsx/index.jsx";
import HistoricalAwardsSummaryTwentyToEighteen from "../../components/historicalAwardSummary20-18.jsx";
import { MyContext } from "../../context/AuthProvider.jsx";


const HistoricalAwards = () => {
    const {
        historicalDataYear2020,
        historicalDataYear2019,
        historicalDataYear2018,
        historicalDataYear2017,
        historicalDataYear2016,
        summaryDataYear2023,
    } = useContext(MyContext)


    const DataYearWise = [
        { id: 3366, year: historicalDataYear2020 },
        { id: 3004, year: historicalDataYear2019 },
        { id: 2515, year: historicalDataYear2018 },
    ]



    return (
        <div className="px-8">
            <div className="flex justify-between items-center py-8">
                <div className="text-3xl">
                    {summaryDataYear2023?.List?.map((ele, i) => <p key={i}>Calculations as of {ele.DisplayDateString}</p>)}
                </div>
                {/* <div>
                    <img src={NewmontLogo} alt="NewmontLogo" />
                </div> */}
            </div> 
            <div className="flex justify-between w-[100%] px-4">
                {DataYearWise.map((ele) => {
                    return (
                        <div key={ele.id} className="w-[33.33%] text-center mx-4">
                            <HistoricalAwardsSummaryTwentyToEighteen
                                historicalData={ele.year}
                            />
                        </div>
                    )
                })}
            </div>
            <div className="flex w-[100%] px-4 py-10 gap-14">
                <div className="w-[30%] text-center">
                    <HistoricalAwardsSummarySeventeenToSixteen historicalData={historicalDataYear2017} />
                </div>
                <div className="w-[30%] text-center">
                    <HistoricalAwardsSummarySeventeenToSixteen historicalData={historicalDataYear2016} />
                </div>
            </div>
        </div>
    );
};

export default HistoricalAwards;
