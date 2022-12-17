const mongoose = require('mongoose')

const jobDetail = new mongoose.Schema({
    company : {type:String} ,
    city:{type:String} ,
    location:{type:String},
    role:{type:String},
    level:{type:String} ,
    position:{type:String},
    language:{type:String},
    contract:{type:String}

},{
    timestamps:true
})

module.exports = mongoose.model('jobDetails' , jobDetail)
