const express = require("express");
const app = express();


app.set('vuew engine', ejs);
app.use(express.static(_dirname+"/public"));
app.use(methodOverride('_method'));

app.get("/", (req, res)=>{
    res.render("landing");
})