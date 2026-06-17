//Without Object:


//Application - Bank - Account Service

//Account: Object


//Behavior: Functions:

// function depositMoney(accountNumber, amount){

// }

// function withdrawalMoney(accountNumber, amount){

// }

// function checkBalance(accountNumber, amount){

// }

// function checkLoanEligibility(accountNumber, amount){
//     return true
// }

//state: Properties:
// var accountHolderName = "Dinesh"
// var avaiableBalance = 23987.56
// var loanEligibility = false
// var accountType = "Saving"
// var accountNumber = "12345678"


//Object: it can store above state and behavior inside a single object in form of key-value pair.



//Declaraction of object:

// var account = {}

// //Inilialiation(storing key-value pair) in object
// //1. using dot notation(.), 2. using square bracket notation

// //using dot notation
// account.accountHolderName = "Dinesh"
// account.avaiableBalance = 23452.32

// console.log(account)

// //2. using square bracket notation

// account["accountNumber"] = "12345678"
// account["accountType"] = "saving account"

// console.log(account)


//Note: object is collection of enteries
//one entry = one key-value pair


//Inialization at the time of declaration:

var student = {
    name: "Rajni",
    degree: "btech",
    address: "Agra",
    isStrongInMernStack: true,
    skills: ["HTML", "CSS", "JS"],
    age: 18
}


//How to access value from object: using keyName
//1. dot notation, 2. square bracket notation


//1. dot notation
// console.log(student.name)
// console.log(student.isStrongInMernStack ? "Yes" :"No")


//2. using square bracket notation

// console.log(student["address"])

// console.log(student)


// More deeper in object:


// var mobile = {

//     //state/properties
//     brandName: "samsung",
//     model: "S26 Ultra",
//     lauchYear: "2026",
//     price: 99999.99,

//     //Behaviors/functions

//     clickPhotos:function(){
//         console.log("Photo is being clicked.")
//         console.log("It has finally clicked now.")
//         return "Photo Function"
//     },

//     call:function(){
//         console.log("Its calling someone")
//     },

//     printAbout:function(){
//         console.log(this.brandName)
//         console.log(this.model)
//         console.log(this.lauchYear)
//         console.log(this.price)
//     }


// }

// console.log(mobile.brandName)
// console.log(mobile.lauchYear)
// console.log(mobile)

// console.log(mobile.clickPhotos())

// mobile.printAbout()


//Student Task: Create a student object with name, age, address, email, skills and create methods like printSkiils, printAddres, printEligibleForVote


// var student = {
//     name: "Rakesh",
//     age: 21,
//     address:"Noida",
//     email:"rakesh@gmail.com",
//     skills: ["HTML", "CSS", "JS"],


//     printSkills:function(){
//         console.log(this.skills)
//     },
//     printAddress:function(){
//         console.log(this.address)
//     },
//     printEligibleForVote:function(){
//         if(this.age >=18){
//             console.log("Eligible for vote")
//         }else{
//             console.log("Not Eligible for vote")
//         }
//     }
// }


var employee = {
    name:"Kunal Sharma",
    department:"IT",
    salary: 120000.00,
    designation:"Software Engineer",
    address:{
        city:"Noida",
        state:"Uttar Pradesh",
        pincode:"201301"
    },
    specialization:["Backend using Java", "Spring Security", "AWS", "Microservices"]
}

// console.log(employee.address.city)
// console.log(employee.address)


//Loop through object:
//using for in loop:

//for in loop: array - indexes
//for in loop: string - indexes
//for in object: object - keys

// for(var key in employee){
//     console.log(key, employee[key]);
// }


//Obejct inbuilt methods:

// var employeeKeys = Object.keys(employee)
// console.log(employeeKeys)

// var employeeValues = Object.values(employee);
// console.log(employeeValues)

// var employeeEnteries = Object.entries(employee)
// console.log(employeeEnteries)


//Object - Array of objects

var students = []

var student1 = {
    name: "Dinesh",
    age: 23,
    isDegreeHaving:true,
    isJob:false
}

students.push(student1)

var student2 = {
    name: "Rohit",
    age: 20,
    isDegreeHaving:true,
    isJob:false
}

students.push(student2)

console.log(students)


for(var i=0;i<students.length;i++){
    console.log(students[i].name)
}


//Student Task: Create Employee arrays - and keep three employee where each employee is having name, age, address
