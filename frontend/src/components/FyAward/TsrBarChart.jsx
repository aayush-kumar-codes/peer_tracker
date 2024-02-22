import { useEffect, useState } from 'react';
import {
    BarChart,
    Bar,
    Cell,
    YAxis,
    Tooltip,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';


const TsrBarChart = ({ tsrBarChartYear }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchTsrBarChartData = (tsrBarChartYear) => {
        const chartData = tsrBarChartYear && tsrBarChartYear.List.flatMap(item =>
            item.TSRs.filter(dataPoint => dataPoint.TSR !== "").map(dataPoint => ({
                name: dataPoint.PeerName,
                TSR: (dataPoint.TSR * 100).toFixed(2),
                color: dataPoint.color,
            }))
        );

        setData(chartData);
        setLoading(false)
    };
    useEffect(() => {
        if (tsrBarChartYear) {
            fetchTsrBarChartData(tsrBarChartYear)
        }
    }, [tsrBarChartYear]);

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip bg-black text-white p-1 rounded-lg">
                    <p>{`${payload[0].payload.name}`}</p>
                    <p>{`${payload[0].value}%`}</p>
                </div>
            );
        }
        return null;
    };
 
    return (
        <>
            {loading ?
                <div><p>Loading Peer History....</p></div>
                : <div className='h-[450px] p-4 bg-[#E6F3F6] rounded-xl'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 20,
                                bottom: 10,
                            }}
                        >
                            <YAxis domain={[
                                Math.floor(Math.min(...data.map(entry => parseFloat(entry.TSR)))),
                                Math.ceil(Math.max(...data.map(entry => parseFloat(entry.TSR))))
                            ]}
                                tickCount={"12"}
                                tickFormatter={tick => `${tick}%`} />
                            <Tooltip content={<CustomTooltip />} />
                            <ReferenceLine y={0} stroke="gray" />
                            <Bar dataKey="TSR">
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>}
        </>
    );
};

export default TsrBarChart