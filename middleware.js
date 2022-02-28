let day = new Date().getDay() 
let hours = new Date().getHours() 



const  HNO = (req,res,next)=>{
day>0 && day<6 && hours>8 && hours<18 ?next()
    :res.send(`<h1 style='color:red;text-align:center;'>Our service is opened from Monday-Friday ,OH : 9am-17am <h1/>`)
}

module.exports = HNO