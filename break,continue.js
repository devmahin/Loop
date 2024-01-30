// for(let i=0; i<= 30; i++){
//     console.log(i)
//     if(i >= 5){
//         break;
//     }
// }


// let num = 40;
// while(num > 10){
//     console.log(num)
//     if(num < 20){
//         break
//     }
//     num--;
// }



// continue
for(let i = 0; i < 30; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i)
}

let vis = 0;
while(vis < 50){
    vis++;
    if(vis % 5 !== 0){
        continue;
    }
    console.log(vis)
} 