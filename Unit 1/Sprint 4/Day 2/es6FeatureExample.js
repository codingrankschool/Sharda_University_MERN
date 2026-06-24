//1. let/const - already discussed
//2. arrow function


// function hello(){
//     console.log("Hello Everyone!")
// }`


// let hello = function(){
//     console.log("Hello Everyone!")
// }


// let arrowFunction = ()=>{
//     console.log("Hello Everyone!")
// }

// arrowFunction()


// let add = (a, b)=> a + b 


// console.log(add(34, 45))

// let greeting = ()=>"Hello Everyone!"

// console.log(greeting())

// let name = "Ashok"

// let student = {
//     name:"Deepak",
//     age: 23,


//     print: ()=>{
//         console.log(this.name)//undefined.
//     }
// }

// student.print()


// let arr = [{name: "Deepak"}, {name:"Chinki"}]

// let namesInUpperCase = arr.map((obj)=>{

//     obj.name  = obj.name.toUpperCase()
//     return obj

// })

// console.log(namesInUpperCase)


//3. for of


// let names = ["Ashok", "Rahul", "Chinki"]

// for(let name of names){
//     console.log(name)
// }

// let str = "hello"

// for(let char of str){
//     console.log(char)
// }


//4. Destructuring - It extracts the value or properties from array and object


// let array = [45, 34, 23, 12]

// // let [a, b, c, d] = array

// // console.log(a, b, c, d)

// // let [a, b] = array
// let [a,,, b] = array


// console.log(a, b)


// let student = {
//     name:"Rohan",
//     age: 23,
//     address: {
//         city:"Noida",
//         state:"UP",
//         pincode:"201301"
//     }
// }

// let {name:studentName, age, address:{city, pincode, state}} = student


// console.log(studentName, age, city, state, pincode)



// function printStudent({name, age, address:{city, state}}){
//     //const {name, age} = obj;
//     console.log(name)
//     console.log(age)
//     console.log(city)
//     console.log(state)

// }

// printStudent(student)

//5. Spread Operator - it is used to expand the value of object and array


// let array1 = [1,2,3,4,5]

// let newArray = [...array1] //shallow copy

// let array2 = [6, 7, 8, 9, 10]

// let final = [...array1, ...array2]

// console.log(final)


// let student = {
//     name:"Rohan",
//     age: 23,
//     address: {
//         city:"Noida",
//         state:"UP",
//         pincode:"201301"
//     }
// }

// let obj = {...student}

// student = {...student, name:"Ashok"}

// console.log(student)


//7. rest operator(...rest) : it collects the rest element to array or object


// let array = [6, 7, 8, 9, 10]

// let [first, second, ...ashok] = array

// console.log(first, second, ashok)



// let student = {
//     name:"Rohan",
//     age: 23,
//     address: {
//         city:"Noida",
//         state:"UP",
//         pincode:"201301"
//     }
// }

// let {name, age, ...other} = student
// console.log(name, age, other)



// function welcome(studentName="Student"){
//     console.log(`Welcome ${studentName}`)
// }

// welcome("Ashok")
// welcome()
// welcome("Simran")



//9. object oriented programming.


class Student{
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city
    }

    print(){
        console.log(this.name)
    }
}

let student = new Student("Ashok", 23, "Noida")
console.log(student)

student.print()


class Animal{

}

class Cat extends Animal{
    
}

