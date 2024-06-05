const Student = require('./student.model');

const addStudent = async (req,res)=>{
    const {name,enrollment} = req.body

    try {
        const existingStudent = await Student.findOne({enrollment})

        if(existingStudent){
            res.status(400).json({message:"student allreay exist"})
        }

        var newStudent = await Student({
            name,
            enrollment
        })

        newStudent.save();
        res.status(202).json({newStudent});
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

module.exports = { addStudent }