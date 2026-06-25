const http = require('http')
const fs = require('fs')


//Student Registration System


const server = http.createServer((req, res)=>{

    res.setHeader('content-type', "application/json")
    if(req.url == "/students" && req.method == "GET"){

        fs.readFile('student.json', 'utf-8', (err, data)=>{
            let students = JSON.parse(data)

            let response = {
                status: true,
                msg: "Student Detials fetched Successfully",
                students: students
            }

            res.statusCode = 200

            return res.end(JSON.stringify(response))
        })
    }
    else if(req.url == "/students" && req.method == "POST"){

        try {

            let body = ""

        req.on('data', (chunk)=>{
            body += chunk
        })

        req.on('end', ()=>{
            let student = JSON.parse(body)

            fs.readFile('student.json', 'utf-8', (err, data)=>{
                let students = JSON.parse(data)

                students.push(student)

                fs.writeFile('student.json', JSON.stringify(students, null, 2), (err)=>{
                    return res.end(JSON.stringify({msg:"Student has added successfully", student: student}))
                })
            })
        })
            
        } catch (error) {
            console.log(error)
        }

    }
    else{
        res.statusCode = 404
        return res.end("Invalid Request")
    }


})


server.listen(8082, ()=>{
    console.log("Server is running on port: http://localhost:8082")
})