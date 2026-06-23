//var/let/const - to declare/create variable
//var - already know about this

//Note: var having global scope and function scope

//let/const:


// {
//     console.log("I'm inside block")
//     var name = "Rakesh"
//     console.log(name) //Rakesh
// }

// console.log("I'm outside block")
// console.log(name) //Rakesh


// for(var i=1;i<=10;i++){

// }

// console.log(i)//11


// function fun(){
//     var name = "Rakesh"
//     console.log(name)
// }


// console.log(name)


//let/const

//Note: let/const both having block scope and they're not accessible outside the block.


//let name = "Chintu" //global scope


// function func(){
//     console.log(name)
// }

// {
//     const age = 45
//     console.log(name)
// }

// console.log(age) //ReferenceError

// func();


// for(let i=1;i<=10;i++){

// }

// console.log(i)


// let name = "Deepak"
// name = "Rakesh" //TypeError

//Note: variable declared or initiliazed using let and var can also re-iniliazed but variable declared or initialized with const can't re-initialized.


//const name // it will give error therefore it is important to initialize the value at the time of declaration.

const name = "Deepak" // Correct


