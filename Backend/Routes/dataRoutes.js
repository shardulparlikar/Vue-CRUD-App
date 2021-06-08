const { json } = require("express");
const express = require("express");
const Data = require("../models/userData");
const router = express.Router();

router.get("/", async (req, res) => {
  const allData = await Data.find();
  res.json(allData);
});

//post data
router.post("/newData", async (req, res) => {
  const newData = new Data(req.body);
  const savedData = await newData.save();
  res.json(savedData);
});

//find data by id
router.get("/get/:id", async (req, res) => {
  const getData = await Data.findById({ _id: req.params.id });
  res.json(getData);
});

// delete data

router.delete('/delete/:id',async(req,res)=>{
    const id = req.params.id
    const dataToBeDeleted = await Data.findByIdAndDelete(id)
    res.send(dataToBeDeleted)

})

router.patch("/update/:id",async (req,res) => {
  try{
    const id =req.params.id
    const update =req.body
    const option ={new : true ,upsert:true}

    const result = await Data.findByIdAndUpdate(id,update,option)
    res.send(result);
    console.log(result)
  }catch(err){
    res.json(err.message)
  }
});


// router.patch("/update/:id",async(req,res)=>{
//     const result = await Data.findByIdAndUpdate(req.params.id, req.body ,{new : true, upsert:true})
//     console.log(req.params.id)
//     console.log(req.body)
//     console.log(result)
//     res.send(result)
// })

module.exports = router
