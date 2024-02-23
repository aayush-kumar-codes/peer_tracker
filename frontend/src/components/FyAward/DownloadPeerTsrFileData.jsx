import React, { useContext, useEffect, useState } from 'react'
import { convertToJsonAndDownloadExcel } from '../../utils/downloadFile';
import { MyContext } from '../../context/AuthProvider';
import { MdFileDownload } from 'react-icons/md';

const DownloadPeerTsrFileData = ({ PeerTsrFileYear }) => {
    const [fileData, setFileData] = useState([])
    const { downloadPeerTsrBtnStatus } = useContext(MyContext)

    const fetchTsrFileData = async (PeerTsrFileYear) => {
        try {
            const data = await PeerTsrFileYear;
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
        fetchTsrFileData(PeerTsrFileYear)
    }, [PeerTsrFileYear])

    return (
        <>
            <button
                disabled={downloadPeerTsrBtnStatus}
                onClick={() => convertToJsonAndDownloadExcel(fileData.length > 0 && fileData)}
                className={`bg-[#3A879E] text-white py-2 px-3 rounded-md font-bold flex items-center gap-1 hover:bg-[#396b9a]
                ${downloadPeerTsrBtnStatus ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                title={downloadPeerTsrBtnStatus ? "Please wait..." : ""}
            >
                <span className="ml-2">Peer TSRs</span>
                {!downloadPeerTsrBtnStatus && <MdFileDownload />}
            </button>
        </>
    )
}

export default DownloadPeerTsrFileData
