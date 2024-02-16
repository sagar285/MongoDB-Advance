const express =require("express")
const app = express();
const usermodel =require("./connection")
app.use(express.json());


// post request to send data in database
app.post("/register",async(req,res)=>{
    const {name}=req.body;
    const data = await usermodel.create({name:name})
    res.send(data);
})

// get request to get data from database
app.get("/getuserdata",async(req,res)=>{
    const userdata = await  usermodel.find();
    return res.status(200).send(userdata); 
}) 

app.get("/getuserdatabyid/:id",async(req,res)=>{
    const {id}=req.params;
    const userdata = await usermodel.findById(id)
    return res.status(200).send(userdata)
})
app.get("/getsingleuserdata",async(req,res)=>{
    const {name}=req.body;
    const userdata = await usermodel.findOne({name:name})
    return res.status(200).send(userdata)
})

app.put("/updateuserdata/:id",async(req,res)=>{
    try {
    const {id} =req.params;
    const {email,password}=req.body;
    const data = await usermodel.findByIdAndUpdate({_id:id},{email,password},{new:true})
    return res.status(200).send(data)
} catch (error) {
        return res.status(500).send(error.message);
}
})
app.put("/updateuserdata",async(req,res)=>{
    try {

    const {email,password,id}=req.body;
    const data = await usermodel.findByIdAndUpdate({_id:id},{email,password},{new:true})
    return res.status(200).send(data)
} catch (error) {
        return res.status(500).send(error.message);
}
})
app.put("/updateuserdatabyname",async(req,res)=>{
    try {

    const {email,password,name}=req.body;
    const data = await usermodel.findOneAndUpdate({name:name},{email,password},{new:true})
    return res.status(200).send(data)
} catch (error) {
        return res.status(500).send(error.message);
}
})




app.listen(4000,()=>{
    console.log("server listening on port no 4000")
})