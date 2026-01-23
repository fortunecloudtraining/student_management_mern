const Course = require("../models/Course");

exports.createCourse = async (req,res) =>{
    try{
         const course = await Course.create(req.body);
     res.status(200).json({message:"Couers Created Successfully",course});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Server error"});
    }
   
};
exports.getCourses = async (req,res)=>{
    res.json(await Course.find());
}