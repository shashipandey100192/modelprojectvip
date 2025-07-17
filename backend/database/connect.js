const mongoose = require('mongoose');
const dburl = process.env.DATABASE;

const mydatabase = mongoose.connect(dburl).then(()=>{
    console.log("db connected successfully");
})

module.exports = mydatabase;