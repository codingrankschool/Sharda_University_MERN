//To Use module:
//1. using CJS - Recommened
//2. using ESM

//Inbuilt Modules of Nodejs:
/*
1. fs - fs
2. os
3. url
4. path
5. crypto
6. http
others
*/


const fs = require('node:fs')


// fs.writeFile('notes.txt', "Welcome to File" ,(err)=>{
//     try {
//         console.log("File has created")
//     } catch (error) {
//         console.log(error.message)
//     }
// })


// fs.writeFileSync('student.json', "Student json file")
// console.log("File has created")


// fs.readFile('student.json', "utf-8" ,(err, data)=>{
//     if(err){
//         console.log("Something went wrong while reading the file")
//         return
//     }

//     let obj = JSON.parse(data)
//     console.log(obj)
// })

//fs.writeFileSync("data.txt", "Hell Students");
fs.appendFileSync("data.txt", "\nWelcome To MERN");


