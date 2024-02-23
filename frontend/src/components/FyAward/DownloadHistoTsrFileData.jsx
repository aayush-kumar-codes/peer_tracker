import React, { useContext, useEffect, useState } from 'react'
import { convertToJsonAndDownloadExcel } from '../../utils/downloadFile';
import { MyContext } from '../../context/AuthProvider';
import { MdFileDownload } from 'react-icons/md';

const DownloadHistoTsrFileData = ({ HistoTsrFileYear }) => {
    const [fileData, setFileData] = useState([])
    const { downloadHistoTsrBtnStatus } = useContext(MyContext)

    const fetchTsrFileData = async (HistoTsrFileYear) => {
        try {
            const data = await HistoTsrFileYear;
            const jsonData = JSON.parse(data.length > 0 && data).map(obj => {
                if (typeof obj['Unnamed: 1'] === 'number') obj['Unnamed: 1'] = `$ ${obj['Unnamed: 1'].toFixed(2)}`;
                if (typeof obj['Unnamed: 4'] === 'number') obj['Unnamed: 4'] = `$ ${obj['Unnamed: 4'].toFixed(2)}`;
                if (typeof obj['Unnamed: 7'] === 'number') obj['Unnamed: 7'] = `$ ${obj['Unnamed: 7'].toFixed(2)}`;
                return obj;
            });
            setFileData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchTsrFileData(HistoTsrFileYear)
    }, [HistoTsrFileYear])

    return (
        <>
            <button
                disabled={downloadHistoTsrBtnStatus}
                onClick={() => convertToJsonAndDownloadExcel(fileData.length > 0 && fileData)}
                className={`bg-[#3A879E] text-white py-2 px-3 rounded-md font-bold flex items-center gap-1 hover:bg-[#396b9a]
                ${downloadHistoTsrBtnStatus ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                title={downloadHistoTsrBtnStatus ? "Please wait..." : ""}
            >
                <span className="ml-2">Historical TSR</span>
                {!downloadHistoTsrBtnStatus && <MdFileDownload />}
            </button>
        </>
    )
}

export default DownloadHistoTsrFileData
