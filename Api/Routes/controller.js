const express = require('express');
const router = express.Router();
const xlsx = require('xlsx');
 var data;
router.get('/',(req, res, next) =>{
    getData();
    res.status(200).json({
        message:"inside Controller",
        data: data[0]["LTP \r\n"]
    });
});

router.get('/:id',(req, res, next) =>{
    getData();
    res.status(200).json({
        message:"inside with id",
        data : data[0]
    });
});
function getData(){
    var ws = xlsx.readFile('./data.xlsx');
    var wb = ws.Sheets["MW-NIFTY-50-21-Nov-2020"];
    data = xlsx.utils.sheet_to_json(wb);
}
module.exports = router;