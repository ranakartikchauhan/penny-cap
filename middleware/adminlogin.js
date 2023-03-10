const jwt= require("jsonwebtoken");
const User = require('../model/admindata');


const AdminLogin = async (req,res,next)=>{
   try{
    console.log("autn is called");
    const token = req.cookies.jwtoken;
   
    const verifyToken = jwt.verify(token,process.env.SECRET_KEY);
    const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});

    if(!rootUser){ throw new  Error('User not Found')};
    req.token = token;
    req.rootUser= rootUser;
    req.UserID = rootUser._id;
    next();

   }
   catch (err){
       res.status(401).send('unAuthorizes:NO token provied');
       console.log(err)

   }


}

module.exports = AdminLogin;