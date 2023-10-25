// primitive data types means ham data ko kaise memory me kaise rakha jata h or value ko kaise access krte hai 
 
//7 Types : String, number, boolean , null, undefined , symbol, BigInt





// const score = 100
// const scoreValue = 100.32
// const isLoggedIn = true
// const outSidetemp = null
// let userName = ""
// let Useremail;  

// symbol data types bhale hi value same ho but variable different rhega to vo output nahi dega. means false ans dega. 

const id = Symbol ('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // answer got false bcoz variable is different than value. 

const bigNumber = 123654789121236541121222n

console.log(bigNumber);


// (Reference)  Non-Primitive Data types :- every non-primitive data types have return type is object.
 
// // Array, => array return types is object 
// objects, => object return types is object 
// function => function return types is function. 

const heroes = ["irfan", "aayan", "noman"]
let myObj = {
  name : "alfiya",
  age : 23
}

const myFunction = function()
{
  console.log("hello world");
}

console.log(typeof myFunction);