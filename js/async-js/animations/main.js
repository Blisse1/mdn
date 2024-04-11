const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// promise chaining version
// const alice = alice1.animate(aliceTumbling, aliceTiming).finished;

// alice
//     .then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
//     .then(() => alice3.animate(aliceTumbling, aliceTiming))
//     .catch((err) => {
//         console.log(err)
//     })

// callback version
// function animate1(callback){
//     const a1 = alice1.animate(aliceTumbling, aliceTiming).finished;
//     callback(a1)
// }

// function animate2(callback){
//     const a2 = alice2.animate(aliceTumbling, aliceTiming).finished;
//     callback(a2)
// }

// function animate3(callback){
//     const a3 = alice3.animate(aliceTumbling, aliceTiming);
//     callback(a3);
// }

// function doAnimation(){
//     animate1(() => {
//         setTimeout(() => {
//             animate2(() => {
//                 setTimeout(() => {
//                     animate3(() => {
//                     });
//                 }, 2000)
//             });    
//         }, 2000)
//     })
// }

// doAnimation();

// async await version
async function animate() {
    try{
         await alice1.animate(aliceTumbling, aliceTiming).finished;
         await alice2.animate(aliceTumbling, aliceTiming).finished;
         alice3.animate(aliceTumbling, aliceTiming);
    }catch(err){
       console.log(err);
    }
}

animate();
