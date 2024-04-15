const User = require('../models/Users')
const Order = require('../models/Orders')
const {body, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = "MynameisLokeshBoddupelly@"




const createUser =

   [
    body('email').isEmail(),
    body('password',).isLength({min :5}),
    body('name').isLength({min:5})
  
    ,async (req , res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        let salt = await bcrypt.genSalt(10)
        let securePassword = await bcrypt.hash(req.body.password,salt)
        
        try {
            await User.create({
                name: req.body.name,
                password: securePassword,
                email: req.body.email,
                location: req.body.location
    
            })
          
            res.json({success:true})
            
        } catch (error) {
            console.log(error)
            res.json({success:false})
         
        }
    }
];

const loginUser =

   [
    body('email').isEmail(),
    body('password',).isLength({min :5})
   
  
    ,async (req , res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        let email =req.body.email
        
        try {
            let userData = await User.findOne({email})
            if(!userData){
                return res.status(400).json({errors: "USer doesnot exist"});
            }

            let passwordCompare = await bcrypt.compare(req.body.password ,userData.password)
            if(!passwordCompare ){
                return res.status(400).json({errors: "Enter the correct password"});
            }
            const data ={
                user:{
                    id:userData.id
                }
            }
            let authToken = jwt.sign(data,secret)
            return res.json({success:true,authToken:authToken})


            
        } catch (error) {
            console.log(error)
            res.json({success:false})
         
        }
    }
];



const displayData = async (req,res)=>{
    try {
        res.send([global.food_items,global.foodcategory ]) 
      
    } catch (error) {
        console.error(error.message)
        res.send("Server error")
    }
}


const foodData = async (req,res)=>{
    try {

        res.send([global.foodData, global.foodCategory])
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")

    }
}
const orderData = async (req,res)=>{
    let data = req.body.order_data
    await data.splice(0,0,{Order_date:req.body.order_date})
    console.log("1231242343242354",req.body.email)

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await Order.findOne({ 'email': req.body.email })    
    console.log(eId)
    if (eId===null) {
        try {
            console.log(data)
            console.log("1231242343242354",req.body.email)
            await Order.create({
                email: req.body.email,
                order_data:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            // res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
}

const myOrderData = async (req,res)=>{
    try {
        console.log(req.body.email)
        let eId = await Order.findOne({ 'email': req.body.email })
        //console.log(eId)
        res.json({orderData:eId})
    } catch (error) {
        res.send("Error",error.message)
    }
    

}

module.exports = { createUser , loginUser , displayData ,foodData, orderData, myOrderData}