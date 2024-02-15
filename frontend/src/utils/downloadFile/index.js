import * as XLSX from 'xlsx';

export const convertToJsonAndDownloadExcel = (fileData) => {
    try {
        if (!Array.isArray(fileData) || fileData.length === 0) {
            console.error('No data to export or invalid data format.');
            return;
        }

        const values = fileData.map(obj => Object.values(obj));
        const worksheet = XLSX.utils.aoa_to_sheet(values);

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

        const excelBuffer = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });

        const fileName = 'fileData.xlsx';
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error converting to Excel:', error);
    }
};
