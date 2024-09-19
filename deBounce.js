let counter=0;
const getdata=()=>{
    console.log('getting data', counter++);
}

// const magic=function(fn,delay){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         timer=setTimeout(()=>{
//             getdata() 
//         },delay);
//     }
// }
// const betterFunction= magic(getdata,300);

// let counter = 0;
let lastExecuted = 0;
const debounceDelay = 300; 

const magic = () => {
    const currentTime = Date.now();
    
    
    if (currentTime - lastExecuted >= debounceDelay) {
        getdata();
        lastExecuted = currentTime; 
    }
};