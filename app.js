const express = require("express")
const app = express()

const mongoose = require("mongoose")
const Routes = require("./routes/post_get_route")
const cors = require("cors")
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect("mongodb+srv://usk3210:TjdCy9FZCvWg53VG@cluster0.xpa5btz.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(()=>console.log("db connected"))






app.use(Routes)


app.listen(8080,()=>{
    console.log("server starte at 8080 port")
})

