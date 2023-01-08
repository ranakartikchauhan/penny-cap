const mongoose = require('mongoose')
const dividendSchema = new mongoose.Schema({
    DIVIDEND: {
        type: String,
        require: true
    },
    news: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: true
    },
    work: {
        type: String,
        require: true
    },
    about: {
        type: String,
        require: true
    },
   

})

const DefinationSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    explain: {
        type: String,
        require: true
    },
   
   
   

})


//
const AllindicesSchema = new mongoose.Schema({
    DIVIDEND: {
        type: String,
        require: true
    },
    news: {
        type: String,
        require: true
    },
    
   

})

//
const BonusSchema = new mongoose.Schema({
    DIVIDEND: {
        type: String,
        require: true
    },
    news: {
        type: String,
        require: true
    },
    
   

})
//
const BuybackSchema = new mongoose.Schema({
    DIVIDEND: {
        type: String,
        require: true
    },
    news: {
        type: String,
        require: true
    },
    
   

})

//Gainer
const GainerSchema = new mongoose.Schema({
    DIVIDEND: {
        type: String,
        require: true
    },
    news: {
        type: String,
        require: true
    },
    
   

})
//
const IporytSchema = new mongoose.Schema({
    DIVIDEND: {
        type: String,
        require: true
    },
    news: {
        type: String,
        require: true
    },
    
   

})

//
const LooserSchema = new mongoose.Schema({
    DIVIDEND: {
        type: String,
        require: true
    },
    news: {
        type: String,
        require: true
    },
    
   

})

//
const McxSchema = new mongoose.Schema({
    DIVIDEND: {
        type: String,
        require: true
    },
    news: {
        type: String,
        require: true
    },
    
   

})

//
const ScreenerSchema = new mongoose.Schema({
    DIVIDEND: {
        type: String,
        require: true
    },
    news: {
        type: String,
        require: true
    },
    
   

})

//
const SpilitSchema = new mongoose.Schema({
    DIVIDEND: {
        type: String,
        require: true
    },
    news: {
        type: String,
        require: true
    },
    
   

})

//
const RightissueSchema = new mongoose.Schema({
    DIVIDEND: {
        type: String,
        require: true
    },
    news: {
        type: String,
        require: true
    },
    
   

})



const Dividend = mongoose.model('dividend',dividendSchema);
const Allindices = mongoose.model('allindices',AllindicesSchema);
const Bonus = mongoose.model('bonus',BonusSchema);
const Buyback = mongoose.model('buyback',BuybackSchema);
const Gainer = mongoose.model('gainer',GainerSchema);
const Iporyt = mongoose.model('iporyt',IporytSchema);
const Looser = mongoose.model('looser',LooserSchema);
const Mcx = mongoose.model('mcx',McxSchema);
const Screener = mongoose.model('screener',ScreenerSchema);
const Spilit = mongoose.model('spilit',SpilitSchema);
const Rightissue = mongoose.model('rightissue',RightissueSchema);
const Defination = mongoose.model('defination',DefinationSchema);


module.exports = {Dividend,Allindices,Bonus,Buyback,Gainer,Iporyt,Looser,Mcx,Screener,Spilit,Rightissue,Defination} ;


