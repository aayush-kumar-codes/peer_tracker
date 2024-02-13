import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"


const MyContext = createContext();

const ContextProvider = ({ children }) => {
    const [summaryLoading, SetSummaryLoading] = useState(true)
    const [historicalLoading, SetHistoricalLoading] = useState(true)
    const [corpTableLoader, setCorpTableLoader] = useState(true)
    const [minerTableLoader, setMinerTableLoader] = useState(true)
    const [tsrChartYear2023, setTsrChartYear2023] = useState("")
    const [tsrChartYear2022, setTsrChartYear2022] = useState("")
    const [tsrChartYear2021, setTsrChartYear2021] = useState("")

    const [PayoutChartYear2023, setPayoutChartYear2023] = useState("")
    const [PayoutChartYear2022, setPayoutChartYear2022] = useState("")
    const [PayoutChartYear2021, setPayoutChartYear2021] = useState("")

    const [tsrBarChartYear2023, setTsrBarChartYear2023] = useState("")
    const [tsrBarChartYear2022, setTsrBarChartYear2022] = useState("")
    const [tsrBarChartYear2021, setTsrBarChartYear2021] = useState("")


    const [summaryDataYear2023, setSummaryDataYear2023] = useState("")
    const [summaryDataYear2022, setSummaryDataYear2022] = useState("")
    const [summaryDataYear2021, setSummaryDataYear2021] = useState("")



    const [historicalDataYear2020, setHistoricalDataYear2020] = useState("")
    const [historicalDataYear2019, setHistoricalDataYear2019] = useState("")
    const [historicalDataYear2018, setHistoricalDataYear2018] = useState("")
    const [historicalDataYear2017, setHistoricalDataYear2017] = useState("")
    const [historicalDataYear2016, setHistoricalDataYear2016] = useState("")


    const [historicalTSRTableData2020, setHistoricalTSRTableData2020] = useState("")
    const [historicalTSRTableData2019, setHistoricalTSRTableData2019] = useState("")
    const [historicalTSRTableData2018, setHistoricalTSRTableData2018] = useState("")

    const [goldCorpTableData2023, setGoldCorpTableData2023] = useState("")
    const [goldCorpTableData2022, setGoldCorpTableData2022] = useState("")
    const [goldCorpTableData2021, setGoldCorpTableData2021] = useState("")


    const [goldMinerTableData2023, setGoldMinerTableData2023] = useState("")
    const [goldMinerTableData2022, setGoldMinerTableData2022] = useState("")
    const [goldMinerTableData2021, setGoldMinerTableData2021] = useState("")

    const id = [4386, 4092, 3714,]
    const HistoricalDataid = [3366, 3004, 2515, 2607, 2665]
    const HistoricalTSRTableDataid = [3366, 3004, 2515]




    const fetchSummaryData = async (id) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/summary/`, { id })
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        let data = id.map(async (val) => (
            await fetchSummaryData(val)
        ))
        Promise.all(data).then((values) => {
            setSummaryDataYear2023(values[0])
            setSummaryDataYear2022(values[1])
            setSummaryDataYear2021(values[2])
            SetSummaryLoading(false)
        });
    }, [])


    const GoldCorpTableData = async (id) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/summary_calculated/`, { id })
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        let data = id.map(async (val) => (
            await GoldCorpTableData(val)
        ))
        Promise.all(data).then((values) => {
            setGoldCorpTableData2023(values[0])
            setGoldCorpTableData2022(values[1])
            setGoldCorpTableData2021(values[2])
            setCorpTableLoader(false)
        });
    }, [])



    const GoldMinerTableData = async (id) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/cal_bend_value/`, { id })
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        let data = id.map(async (val) => (
            await GoldMinerTableData(val)
        ))
        Promise.all(data).then((values) => {
            setGoldMinerTableData2023(values[0])
            setGoldMinerTableData2022(values[1])
            setGoldMinerTableData2021(values[2])
            setMinerTableLoader(false)
        });
    }, [])




    const fetchTsrChartData = async (id) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/histo_tsr/`, { id })
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        let data = id.map(async (val) => (
            await fetchTsrChartData(val)
        ))
        Promise.all(data).then((values) => {
            setTsrChartYear2023(values[0])
            setTsrChartYear2022(values[1])
            setTsrChartYear2021(values[2])
        });
    }, [])



    const fetchPayoutChartData = async (id) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/payout/`, { id })
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        let data = id.map(async (val) => (
            await fetchPayoutChartData(val)
        ))
        Promise.all(data).then((values) => {
            setPayoutChartYear2023(values[0])
            setPayoutChartYear2022(values[1])
            setPayoutChartYear2021(values[2])
        });
    }, [])




    const TSRBarChartData = async (id) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/tsr/`, { id })
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        let data = id.map(async (val) => (
            await TSRBarChartData(val)
        ))
        Promise.all(data).then((values) => {
            setTsrBarChartYear2023(values[0])
            setTsrBarChartYear2022(values[1])
            setTsrBarChartYear2021(values[2])
        });
    }, [])





    const fetchHistoricalData = async (id) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/summary/`, { id })
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        let data = HistoricalDataid.map(async (val) => (
            await fetchHistoricalData(val)
        ))
        Promise.all(data).then((values) => {
            setHistoricalDataYear2020(values[0])
            setHistoricalDataYear2019(values[1])
            setHistoricalDataYear2018(values[2])
            setHistoricalDataYear2017(values[3])
            setHistoricalDataYear2016(values[4])
            SetHistoricalLoading(false)
        });
    }, [])




    const HistoricalTSRTableData = async (id) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/tsr/`, { id })
            return response.data;
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        let data = HistoricalTSRTableDataid.map(async (val) => (
            await HistoricalTSRTableData(val)
        ))
        Promise.all(data).then((values) => {
            setHistoricalTSRTableData2020(values[0])
            setHistoricalTSRTableData2019(values[1])
            setHistoricalTSRTableData2018(values[2])
        });
    }, [])



  




    return (
        <MyContext.Provider
            value={{

                tsrChartYear2023,
                tsrChartYear2022,
                tsrChartYear2021,

                PayoutChartYear2023,
                PayoutChartYear2022,
                PayoutChartYear2021,

                tsrBarChartYear2023,
                tsrBarChartYear2022,
                tsrBarChartYear2021,

                summaryDataYear2023,
                summaryDataYear2022,
                summaryDataYear2021,
                summaryLoading,

                historicalDataYear2020,
                historicalDataYear2019,
                historicalDataYear2018,
                historicalDataYear2017,
                historicalDataYear2016,
                historicalLoading,

                historicalTSRTableData2020,
                historicalTSRTableData2019,
                historicalTSRTableData2018,

                goldCorpTableData2023,
                goldCorpTableData2022,
                goldCorpTableData2021,
                corpTableLoader,

                goldMinerTableData2023,
                goldMinerTableData2022,
                goldMinerTableData2021,
                minerTableLoader,
            }}
        >
            {children}
        </MyContext.Provider>

    )
}

export { MyContext, ContextProvider }; 
