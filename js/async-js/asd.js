function doStep1(init, callback){
    const result = init + 1;
    callback(result);
}
function doStep2(init, callback){
    const result = init + 2;
    callback(result);
}

function doOperation() {
    doStep1(0, (result1) => {
        doStep2(result1, (result2) =>{
            console.log(`${result2}`) ;
        }) 
    }) 
}

doOperation();
