let counter=0;
const getdata=()=>{
    console.log('getting data', counter++);
}

// Debouncing
let timer; // Timer to hold the setTimeout reference
const debounceDelay = 300;

const magic = () => {
    // Clear the existing timer
    clearTimeout(timer);

    // Set a new timer
    timer = setTimeout(() => {
        getdata(); // Call getdata after the delay
    }, debounceDelay);
};


//throttling
let lastExecuted = 0;
const debouncedelay = 300; 

const magic2 = () => {
    const currentTime = Date.now();
    
    
    if (currentTime - lastExecuted >= debouncedelay) {
        getdata();
        lastExecuted = currentTime; 
    }
};


