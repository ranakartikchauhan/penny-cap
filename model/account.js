const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt =require('jsonwebtoken')
const userSchema = new mongoose.Schema({
   
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    },
    democurrency: {
        type: Number,
        require: true
    },
    tokens:[{
        token:{
            type:String,
            require:true
        }
    }],
    balences:[{

        stockname:{
            type:String,
            require:true
        },
        price:{
            type:Number,
            require:true
        },
        quantity:{
            type:Number,
            require:true
        },
        totalprice:{
            type:Number,
            require:true
        },
        fund:{
            type:Number,
            require:true
        },
        portfoliovalue:{
            type:Number,
            require:true
        },
      
        investamount:{
            type:Number,
            require:true
        },
        currentvalue:{
            type:Number,
            require:true
        }

    }]

})


//

userSchema.pre('save',async function(next){
    
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
       
        console.log("hii from inside");

    }
    next();
});
//generate token
userSchema.methods.generateAuthToken = async function(){
    try{

        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token;
    }
    catch(err){
     console.log(err);
    }
}



const Account = mongoose.model('ACCOUNT', userSchema);
module.exports = Account;


