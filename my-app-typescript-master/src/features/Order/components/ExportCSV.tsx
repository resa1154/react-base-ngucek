import React from "react"
import { Button } from "semantic-ui-react"
import * as XLSX from 'xlsx';

const ExportCSV = () =>{
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData:any, fileName:any) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        // FileSaver.saveAs(data, fileName + fileExtension);
    }

    return(
        <Button></Button>
    )
}

export default ExportCSV