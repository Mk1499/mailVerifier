const express = require('express');
const userRouter = express.Router();
const codeGenerator = require('../service/generateCode');
const sendMail = require('../service/sendEmail');
const Verify = require('../models/verify.model');

userRouter.get('/', (req, res) => {
    res.send('Hello World!')
})

userRouter.post('/sendCode', (req, res) => {
    let {
        email
    } = req.body;
    let code = codeGenerator();
    let verify = new Verify({
        code,
        email
    })

    verify.save((err, doc) => {
        if (err) {
            res.status(400).send({ message: 'Cannot Add Verifiy Record ', err })
        } else {
            sendMail(email, code);
            res.status(200).json({ code })
        }
    })
})

userRouter.post('/verify',(req,res)=>{
    let {
        email, 
        code
    } = req.body;
    Verify.findOne({email,code}).then((doc)=>{
        console.log("DOC : ", doc);
        if (doc){
            res.status(200).json({message:"email verified"})
        } else {
            res.status(400).json({message:"email not verified"})
        }
    }).catch(err => {
        console.log("ERR : ", err);
    })
})

userRouter.post('/sendEmail', (req, res) => {
    let {
        email , 
        code
    } = req.body;
    let verify = new Verify({
        code,
        email
    })

    verify.save((err, doc) => {
        if (err) {
            res.status(400).send({ message: 'Cannot Add Verifiy Record ', err })
        } else {
            sendMail(email, code);
            res.status(200).json({ code })
        }
    })
})


module.exports = userRouter;