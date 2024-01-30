// for (let i = 0; i < 60; i++) {
//     console.log("I will invest at least 6 hrs every single day for next 60 days!");
// }



// Subtask-1:
// Find all the odd numbers from 61 to 100.


// odd num
// for(let i = 61; i<= 100; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
//     i++;
// }



// Subtask-2:
// Find all the even numbers from 78 to 98.

// even num
// for(let i = 78; i<= 98; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
//     i++;
// }






// Subtask-1:

// Display sum of all the odd numbers from 91 to 129.
// let total = 0;

// for(let i = 91; i <= 129; i++){
//     if(i % 2 === 1){
//         console.log(i)
//         total += i;
//         console.log("check",total)
//     }
// }
// console.log("Total",total)


/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
// for(let i = 91; i <= 129; i++){
//     if(i % 2 === 0){
//         console.log(i)
//         total += i;
//         console.log("check",total)
//     }
// }
// console.log("Total",total)


/***

Generate a multiplication table for number 9

 */

// let table = 10;
// for(let i = 0; i<=10; i++ ){
//     let mul = i + " X " + table +" : " 
//     let result = parseInt(i * table);
//     console.log(mul + result)
// }


// Implement a countdown timer that counts down from 81 to 65.
// for(let i = 81; i >= 65; i--){
//     console.log(i)
// }

















//================================================================== while loop 
// let day = 0;
// while(day <= 60){
//     console.log("6 hrs every single day for next 60 days")
//     console.log(day)
//     day++;
// }


// Subtask-1:
// Find all the odd numbers from 61 to 100.

// let odd = 61;
// while(odd <= 100){
//     // console.log(odd)
//     if(odd % 2 !== 0){
//         console.log(odd)
//     }
//     odd++;
// }



// Subtask-2:
// Find all the even numbers from 78 to 98.
// let even = 78;
// while(even <= 98){
//     // console.log(even)
//     if(even % 2 === 0){
//         console.log(even)
//     }
//     even++
// }


// Subtask-1:

// Display sum of all the odd numbers from 81 to 131.

// let sumOdd = 81;
// let totalOdd = 0;

// while(sumOdd <= 131){
//     // console.log(sumOdd)
//     if(sumOdd % 2 ===1 ){
//         console.log("Odd number " +totalOdd)
//         totalOdd += sumOdd;
//     }
//     sumOdd++;
// }
// console.log(totalOdd)



















// Subtask-2:

// Display sum of all the even numbers from 206 to 311.

//  */

// let sumOdd = 206;
// let totalOdd = 0;

// while(sumOdd <= 311){
//     // console.log(sumOdd)
//     if(sumOdd % 2 !==1 ){
//         console.log("Even number " +sumOdd)
//         totalOdd += sumOdd;
//     }
//     sumOdd++;
// }
// console.log(totalOdd)





// As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

// let Ersa = 0;
// while(Ersa <= 10){
//     console.log( Ersa + " X " + 5 + " = " + Ersa * 5)
//     Ersa++;
// }



// Implement a countdown timer that counts down from 21 to 15.
let count = 21;

while (count >= 15) {
    console.log(count);
    count--;
}