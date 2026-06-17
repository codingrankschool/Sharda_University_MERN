// Higher Order Function: Its all about function


//How to create function:

//Normal:

function functionName(){
        //code to execute

}

//Anonymous Function(function expression): a function without name


// var sayHello = function(){
//                console.log("I'm anonymous function(function without name)")
//             }

// sayHello()


//Higher Order Function: A function which can accept another function as an argument or can also return another function - such function is known as higher order function.


// function capitalNameGiver(nameGiver){

//     var name = nameGiver()
    
//     return function(){
//         return name.toUpperCase()
//     }

// }

// function nameAssigner(){
//     return "Simran"
// }

// var finalNameFun = capitalNameGiver(nameAssigner)
// console.log(finalNameFun())


// function printStudents(studentsGiver){

//     var studentArray = studentsGiver()

//     for(var index in studentArray){
//         console.log(studentArray[index].name)
//     }

// }


// function listOfStudent(){
//     return [{name: "Rakesh"}, {name:"Dinesh"}, {name:"Chinki"}]
// }


// printStudents(listOfStudent)


//The function you're sending in uncalled situation to calling function is known as callback fucntion


// function printStudents(studentsGiver){

//     var studentArray = studentsGiver()

//     for(var index in studentArray){
//         console.log(studentArray[index].name)
//     }

// }


// var listOfStudent = function(){
//     return [{name: "Rakesh"}, {name:"Dinesh"}, {name:"Chinki"}]
// }


// //printStudents(listOfStudent)

// printStudents(listOfStudent)


/*
There are following inbuilt javascript higher order functions:
1. forEach(callback)
2. map(callback)
3. filter(callback)
4. reduce(callback)
5. find(callback)
6. some(callback)
7. every(callback)
8. sort(callback)
others

Note: all above inbuilt functions are belonged to array.
*/


//1. forEach(callback) - iteratte through each element of the array and return nothing.


//var numbers = [1,2,3,4,5,6]

//1. loop
// for(var index in numbers){
//     console.log(numbers[index])
// }

//2. forEach(callback)

// var printArrayElement = function(element){
//     console.log(element**2)
// }

// //numbers.forEach(printArrayElement)

// numbers.forEach(function(element){
//     console.log(element**2)
// })


//2. map(callback) - It transforms the array element and return new array.

//Note: map alwalys returns array of same size.


var numbers = [1,2,3,4,5,6]

// var squareElement = function(num){
//     return num**2
// }

// var newArray = numbers.map(squareElement)
// console.log(newArray)


// var names = ["Deepak", "Kunal", "Suresh", "Harednra"]


// var namesInSmall = names.map(function(name){
//     return name.toLocaleLowerCase()
// })

// console.log(namesInSmall)


// var booleanArray = [true, false, false ,true]

// var meaningfulArray = booleanArray.map(function(value){
//     return value?"Yes":"No"
// })

// console.log(meaningfulArray)


//3. filter(callback) - it filters the element from the array and return new filtered array.

// var booleanArray = [true, false, false ,true]

// var newArrayWithTrueValue = booleanArray.filter(function(value){
//     if(value){
//         return value
//     }
// })

// console.log(newArrayWithTrueValue)


//4. reduce: it reduces the array to single value
//genear use: for finding total, average, other cases


// var nums = [1,2,3,4,5]

// var sum = nums.reduce(function(total, currentValue){
//     return total + currentValue
// }, 0)

// console.log(sum)


// var product = nums.reduce(function(total, currentValue){
//     return total * currentValue
// }, 1)

// console.log(product)


// var names = ["Apple", "Banana", "Papaya", "Pineapple"]

// var result = names.reduce(function(bag, element){
//     return bag + element+" "
// }, "")

// console.log(result)


//Reduce - [1,2,3,4,5] --- one

// var nums = [1,2,3,4,5]

// var total = nums.reduce(function(sum, item){
//     return sum + item
// }, 0)

// console.log(total)


//Stuent Task: Given below array:
/*

var numbers = [1,2,3,4,5]

Task 1: convert these number to square //map
Task 2: filter even number //filter
Task 3: print all even numbers //forEach
Task 4: find sum of even numbers //reduce


*/

// var numbers = [1,2,3,4,5]
// var squareArray = numbers.map(function(ele){
//     return ele**2
// })

// console.log(squareArray) // [1,4,9,16,25]

// var squareEvenNumber = squareArray.filter(function(ele){
//     if(ele%2==0){
//         return ele
//     }
// })

// console.log(squareEvenNumber) // [4, 16]

// squareEvenNumber.forEach(function(ele){
//     console.log(ele)
// })

// //4
// //16


// var total = squareEvenNumber.reduce(function(sum, ele){return sum+ele}, 0)
// console.log(total) //20



// var numbers = [1,2,3,4,5]

// var total = numbers.map(function(ele){
//     return ele**2
// }).filter(function(ele){
//     if(ele%2==0)
//         return ele
// }).reduce(function(total, ele){
//     return total + ele
// }, 0)

// console.log(total)


// console.log(numbers.map(function(ele){
//     return ele**2
// }).filter(function(ele){
//     if(ele%2==0)
//         return ele
// }).reduce(function(total, ele){
//     return total + ele
// }, 0))


var numbers = [1,3,3,1,5]

// console.log(numbers.some(function(ele){
//     return ele%2==0
// }))

// console.log(numbers.every(function(ele){
//     return ele%2!=0
// }))


// console.log(numbers.find(function(ele){
//     return ele%2!=0
// }))














