// for(i=0; i<=30; i++){
//     if(i % 2 === 1){
//         console.log(i)
//     }
// }

// console.log("=================")
// for(i=0; i<=30; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }




// for(let i=0; i<20; i++){
//     if(i%5 === 0 && i%3 === 0){
//         console.log(i)
//     }
// }

// for(let i=0; i <= 30; i++){
//     if(i % 4 === 1){
//         console.log(i)
//     }
// }





// total increment
let total = 0;
for(let i= 0; i<= 30; i++){
    if(i % 3 === 1){
        console.log(i)
        total += i;
        console.log("check",total)
    }
}
console.log("Total", total)