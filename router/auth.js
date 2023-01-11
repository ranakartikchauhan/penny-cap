const express = require('express');
const puppeteer= require('puppeteer')
const router = express.Router();
const bodyParser = require('body-parser')
const path = require('path')
const bcrypt = require('bcryptjs')
const multer = require('multer')
const User = require("../model/userSchema");
const Account = require("../model/account");
const cookies = require("cookie-parser");




const aunthenticate = require("../middleware/authenticate");
const { Dividend, Allindices, Bonus, Buyback, Gainer, Iporyt, Looser, Mcx, Screener, Spilit, Rightissue, Defination } = require("../model/allSchema");

router.use(cookies());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

var upload = multer({ storage: storage })

// router.get("/", (req, res) => {
    

//     res.sendFile(__dirname+'/views/index.html' )
//     console.log(__dirname)

// })
router.get("/newsapi", async (req, res) => {

    try {
        const A = await User.find({})
        res.json(A)

    }
    catch {
        console.log("news api not working")
    }

})

router.get('/stockprice',async(req,res)=>{
    res.send("hello")
 
})
router.post('/uploadblog', async (req, res) => {


    try {

        const user = new User({ heading: req.body.heading, news: req.body.news, photo: req.body.myFile });


        const userRegister = await user.save();
        res.status(201).json({ message: "uploaded succesfully" });

    }
    catch (err) {
        console.log(err)
    }
})

router.get('/news', async (req, res) => {
    const mypost = req.query._id

    try {
        if (mypost) {
            const A = await User.find({ _id: mypost })
            res.json(A)

        }
        else {
            console.log("not found")
            res.send("not found")
        }

    }
    catch {
        console.log("HY from there")
    }
})

router.post('/senddata', upload.single('myFile'), async (req, res, next) => {




    try {

        const user = new User({ heading: req.body.heading, news: req.body.news, photo: req.file.path });


        const userRegister = await user.save();
        res.status(201).json({ message: "uploaded succesfully" });

    }
    catch (err) {
        console.log(err)
    }








})

//Dividend Data
router.get('/dividend', async (req, res) => {


    try {
        {
            const A = await Dividend.find({ Dividend })
            res.json(A)

        }


    }
    catch {
        console.log("HY from there")
    }
})

//
router.get('/allindices', async (req, res) => {


    try {
        {
            const A = await Allindices.find({})
            res.json(A)

        }


    }
    catch {
        console.log("HY from there")
    }
})

//
router.get('/bonus', async (req, res) => {


    try {
        {
            const A = await Bonus.find({})
            res.json(A)

        }


    }
    catch {
        console.log("HY from there")
    }
})
//
router.get('/buyback', async (req, res) => {


    try {
        {
            const A = await Buyback.find({})
            res.json(A)

        }


    }
    catch {
        console.log("HY from there")
    }
})
//
router.get('/gainer', async (req, res) => {


    try {
        {
            const A = await Gainer.find({})
            res.json(A)

        }


    }
    catch {
        console.log("HY from there")
    }
})
//
router.get('/ipo', async (req, res) => {


    try {
        {
            const A = await Iporyt.find({})
            res.json(A)

        }


    }
    catch {
        console.log("HY from there")
    }
})

//
router.get('/mcx', async (req, res) => {


    try {
        {
            const A = await Mcx.find({})
            res.json(A)

        }


    }
    catch {
        console.log("HY from there")
    }
})

//
router.get('/screener', async (req, res) => {


    try {
        {
            const A = await Screener.find({})
            res.json(A)

        }


    }
    catch {
        console.log("HY from there")
    }
})

//
router.get('/spilit', async (req, res) => {


    try {
        {
            const A = await Spilit.find({})
            res.json(A)

        }


    }
    catch {
        console.log("HY from there")
    }
})

//
router.get('/looser', async (req, res) => {


    try {
        {
            const A = await Looser.find({})
            res.json(A)

        }


    }
    catch {
        console.log("HY from there")
    }
})

//
router.get('/rightissue', async (req, res) => {


    try {
        {
            const A = await Rightissue.find({})
            res.json(A)

        }


    }
    catch {
        console.log("HY from there")
    }
})

router.get('/getdefination', async (req, res) => {


    try {
        {
            const A = await Defination.find({})
            res.json(A)

        }


    }
    catch {
        console.log("HY from there")
    }
})



router.post('/uploaddefi', async (req, res) => {




    try {

        const defination = new Defination({ title: req.body.title, explain: req.body.defination, });


        const userRegister = await defination.save();
        res.status(201).json({ message: "uploaded succesfully" });

    }
    catch (err) {
        console.log(err)
    }
})

//query in defi
router.get('/defination', async (req, res) => {
    const mydef = req.query._id

    try {
        if (mydef) {
            const A = await Defination.find({ _id: mydef })
            res.json(A)


        }
        else {
            console.log("not found")
            res.send("not found")
        }

    }
    catch {
        console.log("HY from there")
    }
})

//for registration 
router.post('/postdemoaccount', async (req, res) => {


    try {

        const user = new Account({
            name: req.body.name, email: req.body.email, password: req.body.password, democurrency: 1000,
            balences: [{ fund: 1000 }]
        });


        const userRegister = await user.save();
        res.status(201).json({ message: "uploaded succesfully" });

    }
    catch (err) {
        console.log(err)
    }
})

//for Login

//login route
router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "plz filed the data" })
        }
        const userLogin = await Account.findOne({ email: email });
        if (userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password)
            token = await userLogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 22592000000),
                httpOnly: true
            });
            if (!isMatch) {
                res.status(400).json({ error: "USer error " })
            }
            else {
                res.json({ message: "user sign in succesfully" })
            }
        }
        else {
            res.status(400).json({ error: "USer error" })
        }
    }
    catch (err) {
        console.log(err)
    }
})


//portfolio
router.get("/portfolio", aunthenticate, (req, res) => {


    res.send(req.rootUser);
})

//buyed

router.post('/buyed', aunthenticate, async (req, res) => {

   
    try {
        const { stockname, price, quantity, totalprice } = req.body;

        console.log(req.body)
        const update = await Account.findByIdAndUpdate(req.rootUser.id, {

            $inc: {

                democurrency: -totalprice
            },


            $push: {
                "balences": {
                    stockname: stockname, price: price, quantity: quantity, totalprice: totalprice,
                }
            }

        })
        console.log(update.fund)
        if (update) {
            console.log(update)
            res.json({ message: "updated successfully" })
        }
        else {
            console.log("Here Im error")
        }

    }
    catch (err) {
        console.log("hello im error")
        console.log(err)
    }


})

//selling route

router.post('/sell', aunthenticate, async (req, res) => {

    console.log("im caledi gdgdg")
    try {
        const { id, newprice, stockname } = req.body;

        console.log(req.body)

        const updat = await Account.findByIdAndUpdate(req.rootUser.id, {
            // {req.rootUser.id: req.body.id}
            $pull: {
                balences: {
                    _id: req.body.id
                }
            },
            $inc: {
                democurrency: req.body.sellprice
            }

        }

        )


    }
    catch (err) {
        console.log("hello im error")
        console.log(err)
    }
})


//
router.get("/portfolio", aunthenticate, async (req, res) => {
    res.send(req.rootUser);
    const Buyed = await Account.findOne({ email: email });
})

//
router.get("/investstock", aunthenticate, async (req, res) => {
    res.send(req.rootUser);
    res.status(200)
    // Data = await Account.findOne({});
})





router.get("/logout",async(req,res)=>{
    res.clearCookie('jwtoken');

    res.status(200).send("USER Logout")
    console.log("Log OUT")
})

module.exports = router;