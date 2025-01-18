const express = require("express");
const Todo = require("../model/Todo");
const router = express.Router();
router.get("/",async(req,res)=>{
    const todos = await Todo.find();
    res.render("index",{todos});
})
router.post("/add",async(req,res)=>{
    const {title} = req.body;
    await Todo.create({title});
    res.redirect("/");
})
router.get("/edit/:id",async(req,res)=>{
    const todo = await Todo.findById(req.params.id);
    res.render("edit",{todo});
})
router.post("/edit/:id", async (req,res) => {
    const { title } = req.body;
    await Todo.findByIdAndUpdate(req.params.id,{ title });
    res.redirect('/');
});
router.post("/delete/:id",async(req,res)=>{
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect('/');
})
module.exports = router;