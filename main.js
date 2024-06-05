const express = require('express')
const app = express()

const PORT = process.env.PORT | 8000

app.get("/", (req, res)=>{
    return res.json({
    message: "Message receieved from Node Server."
    })
})
app.get("/number/", (req, res)=>{
    return res.json({
    message: "Message receieved from Node Server.",
    number: 65
    })
})
app.get("/health/", (req, res)=>{
    return res.json({
    message: "Everything looks good ??.."
    })
})

app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))
