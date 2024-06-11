const express = require("express");
const app = express();

const PORT=(process.env.PORT || 8000);

app.get('/', (req,res)=>{
    return res.json({message:"Hello we are using docker for the first time"});
})
app.listen(PORT, ()=>{
    console.log(`Server started on the PORT: ${PORT}`);
})
