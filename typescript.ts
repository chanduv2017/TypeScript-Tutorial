//the purpose of typescript is make things strict and find compile time errors

// const x:number =101;
// console.log(x);

//arguments can be number, string,boolean,null,undefined, any
//"any" means any type of varible

// function sum(a:number,b:number):number{
//   return a+b;
// }
//type inference :figuring out return type based on input type

// function isLegal(age:number){
//   if(age>18){
//     return true;
//   }
//   return false;
// }

// let x=isLegal(18)
// let x:boolean=isLegal(18)

//tsconfig.json target varibale is used to compile the ts code to js in different versions

//organise code
//src folder to maintain ts files
//dist or build folder to place ts to js compiled/transpiled files

//"rootDir" - where to check for ts files are located
//"outDir"- where to place ts to js compiled files

//"outDir":"./dist"

//tsc -b to build js file

// touch .gitignore
// place files which should be ignored

// const greet = (name: string) => `Hello, ${name}!`;

//"removeComments" change it to false to keep the comments in js file

// function callAfter1s(cb:()=>void){
//   setTimeout(cb,1000)
// }
//cb:()=>void represents type as function ,expects no arguments and returns void/nothing

// interface User {
// 	firstName: string;
// 	lastName: string;
// 	email: string;
// 	age: number;
//   hobbies?:string; //represents optional
// }
// const usery = {
// 	firstName: "chandu",
// 	lastName: "vattem",
// 	email: "email@gmail.com",
// 	age: 21,
// }

// function isLegal(user: User) {
//   if (user.age > 18) {
//       return true
//   } else {
//       return false;
//   }
// }
// isLegal(usery);
// isLegal({
//   firstName:"chandu",
//   lastName:"vattem",
//   email:"something@gmail.com",
//   age:21
// })

// ---------

// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

// class Employee implements Person {
//   name: string;
//   age: number;

//   constructor(n: string, a: number) {
//       this.name = n;
//       this.age = a;
//   }

//   greet(phrase: string) {
//       console.log(`${phrase} ${this.name}`);
//   }
// }

// const e=new Employee("chandu",21);
// console.log(e.name);

// -----

// types

// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }

// interface User1 {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }

//type cannot be used to implement classes but interface can

//types are useful when
//union
//if we want to to pass an arugument that is either a string or a number

// function greet(id:(string| number)){
//   console.log(id);
// }

// type greetArg= string|number | boolean
// function greet1(id:greetArg){
//   console.log(id);
// }

// greet(1);
// greet("111");

//intersection
//What if you want to create a type that has every property of multiple types/ interfaces
// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Manager = {
//   name: string;
//   department: string;
// };//can be type or interface

// type TeamLead = Employee & Manager; // Employee | Manager;

// const teamLead: TeamLead = {
//   name: "chandu",
//   startDate: new Date(),
//   department: "Software developer"
// };

//arrays in ts

// function maxValue(arr: number[]) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > max) {
//           max = arr[i]
//       }
//   }
//   return max;
// }
// type maxarg=number[];
// console.log(maxValue([1, 2, 3]));

// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }

// function filteredUsers(users: User[]) {
//     return users.filter(x => x.age >= 18);
// }

// console.log(filteredUsers([{
//     firstName: "peter",
//     lastName: "parker",
//     age: 16
// }, {
//     firstName: "chandler",
//     lastName: "bing",
//     age: 21
// }, ]));

//Enums(Enumerations)
//used to define set of named constants

// type keyInput= "left" | "right" | "up" | "down"

// function doSomething(keyPressed:keyInput){
//     if(keyPressed=="up"){

//     }//....
// }
// doSomething("left")

//or

// enum Direction{
//     Up, // 0
//     Down, // 1
//     Left, // 2
//     Right // 3
//     //assigned after conversion to js
// }

// enum Direction {
//     Up = 1,
//     Down, // becomes 2 by default
//     Left, // becomes 3
//     Right // becomes 4
// }

// enum Direction {
//     Up = "UP",
//     Down = "Down",
//     Left = "Left",
//     Right = 'Right'
// } // should give values to all

// function doSomething(keyPressed:Direction){
//     if(keyPressed==Direction.Up){

//     }//.....
// }
// doSomething(Direction.Down)

// import express from 'express';
// const app=express()
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/", (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })

//Generics
// Generics enable you to create components that work with any data type while still providing compile-time type safety.

//1
// function identity(arg: string | number) {
//   return arg;
// }

// let output1 = identity("myString");
// let output2 = identity(100);
//2
// function identity<T>(arg: T): T {
//   return arg;
// }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);

// function getFirstElement<T>(arr: T[]) {
//   return arr[0];
// }

// const el = getFirstElement(["peter", "chandler"]);
// const el = getFirstElement<string>(["peter", "chandler"]);
// const el = getFirstElement([1, 2]);
// const el = getFirstElement([true, "chandler"]);
// console.log(el.toLowerCase())
// interface User{
//   name:string;
// }
// const el = getFirstElement<User>([{name:"chandra"}]);

//import and export modules
// const express=require("express")
// import express from "express" //preferred
//export const a=1; //preferred
// module.exports= {
//   a=1
// }
// if default keyword is used , no need to destructure the components while importing and can be named anything while importing

//math.ts
// export function add(x: number, y: number): number {
//     return x + y;
// }

//main.ts
// import { add } from "./math"

// add(1, 2)

//calculator.ts
// export default class Calculator {
//   add(x: number, y: number): number {
//       return x + y;
//   }
// }
// export function subtract(x: number, y: number): number {
//     return x - y;
// }

//main.ts
// import Calculator,{subtract} from './Calculator';
// subtract(1,2);
// const calc = new Calculator();
// console.log(calc.add(10, 5));
