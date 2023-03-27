const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

const VehicleModel = require("../model/vehicleModel")



router.use(express.json())

//get all vehicles details

router.get("/vehicles", async(req , res)=>{

    try{
        const allVehicles = await VehicleModel.find()
        res.status(200).json(allVehicles)
        console.log('working')

    }
    catch(err){
        res.status(500).json({
            error:err
        })
    }
  

})

router.post("/addvehicle", async(req,res) => {
    try{ 
        
           const newvehicle = await VehicleModel.create(req.body)
           return res.json(newvehicle)

    }

    catch(err){
        return res.status(500).json({
            error:err.name
        })
    }

})


//delete a vehicle
 
// router.delete("/:name",async(req,res)=>{
//     const name = req.params

//     const deleteVehicle = await VehicleModel.find
     

    
// })

//TjdCy9FZCvWg53VG


module.exports = router