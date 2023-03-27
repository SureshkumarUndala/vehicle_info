const mongoose = require("mongoose")

const VehicleSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true

    },
    country:{
        type: String,
        required:true

    }, 
    type:{

        type: String,
        required:true
    }
})

const VehicleModel = mongoose.model("VehicleModel", VehicleSchema)
module.exports = VehicleModel