
const JobDetail = require('../models/jobDetail.model')

const jobPost = async (req , res)=>{
    try{
        const JobPost = await JobDetail.create(req.body);
        return res.send(JobPost)
    }catch(e){
        return res.status(500).send(e.message)
    }
}

const getJobPost = async (req , res)=>{
    let limit = +req.query.limit
    let page = +req.query.page
    try{
        if(!page){
            page = 1
            limit = 10

        }
        else{
            limit = page * 10
        }

        // console.log(page , limit)
        let JobPost = await JobDetail.find().limit(limit)
        if(req.query.filter != undefined){
            console.log(req.query)
            JobPost = await JobDetail.find({role:req.query.filter}).limit(limit)

        }
        if(req.query.sort != undefined){
            if(req.query.sort == 'asec'){
                JobPost = await JobDetail.find().sort({createdAt : 1}).limit(limit)

            }else if(req.query.sort == 'dec'){
                JobPost = await JobDetail.find().sort({createdAt : -1}).limit(limit)

            }

        }
        if(req.query.q != undefined){
            JobPost = await JobDetail.find({language:req.query.q})
        }
        return res.send(JobPost)
    }catch(e){
        return res.status(500)
    }
}



module.exports = {jobPost , getJobPost}