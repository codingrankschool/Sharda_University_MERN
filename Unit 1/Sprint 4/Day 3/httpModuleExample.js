const http = require('http')


const server = http.createServer((req, res)=>{

    //req, and res both are object

    if(req.url=="/"){
        res.setHeader('content-type', "application/json")
        res.write(JSON.stringify({name:"Rakesh"}))
        res.end()
    }
    else if(req.url == "/students" && req.method == "POST"){
        res.end("Student Page")
    }
    else if(req.url == "/about"){
        res.end("About Page")
    }else{
        res.statusCode = 404
        res.end("Page Not Found")
    }

})


server.listen(8000, ()=>{
    console.log("Server is running on port: 8000")
})