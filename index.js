// console.log(5);
// const years=[2002,1982,6725];
// const age=[];

// for(let i =0;i<years.length;i++){
//     age[i]=10000-years[i];
// }
// console.log(age);
// console.log(Boolean(-49));
'use strict';

// const secretNumber=Math.trunc(Math.random() *20)+1;
// document.querySelector('.check').addEventListener('click',
//     function(){
//         const guess=document.querySelector('.guess').value;

//         if(!guess){
//             document.querySelector('.message').textContent= 'Invalid number';
//         }
        
//     }
// )
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// const Julia=[3,5,2,12,7];
// const kate=[4,1,15,8,3];

// const checkdogs=function(dogsJulia,dogsKate){
//     const newJulia=dogsJulia.slice(1,3);
//     const newDogs=newJulia.concat(dogsKate);

//     newDogs.forEach(element => {
//        console.log( element>2||'bachha h');
    
//     });
// }
// checkdogs(Julia,kate);


// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// const a=[5, 2, 4, 1, 15, 8, 3]
// // TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge=function(ages){
// const humanAge= ages.map( val => val<=2 ? 2*val : 16+val*4)
// .filter(val => val>=18)
// .reduce((acc,val,i,arr) => acc+val /arr.length,0) ;


//     return humanAge;
//   };

// console.log(calcAverageHumanAge(a));

//  const Person= function(name,dob){
//     // console.log(this);
//     this.fname=name;
//     this.year=dob;
//     // onsole.log(this);
//  }
//  const ashish=(new Person('ashish',2002));
// //  console.log(new Person('aashu',2002));
// //  console.log(typeof Person);
// // console.log(Person.prototype)

// Person.prototype.calcAge=function(){
//     console.log(2037-this.year);
// }
//  ashish.calcAge();
// console.log(ashish)


// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

// const Car= function(make,speed){
//     this.make=make;
//     this.speed=speed;
// }

// Car.prototype.accelerate= function(){
//     this.speed+=10;
//     console.log(this.speed);
// }
// const toyota=new Car(1947,240);
// const fortuner=new Car(1990,220);


// toyota.accelerate();
// toyota.accelerate();
// toyota.accelerate();

// const getdata= function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`)  //returns promise
//     .then(response => {
//         response.json()
//         return 25;
//     } 
//     )   //convert into json but this also rteurns a promise
//     .then(data => console.log(data));
// };
// getdata('portugal')

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
// The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// const whereAmI=function(lat,lng){
//     fetch(`https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
//     .then(response =>{
//         console.log(response);
//         if(!response.ok) throw new Error(`sahi cordinates daal ...Error code: ${response.status}`) //rejecting the promise
//         return response.json()
// })
//     .then(data =>{
//         console.log(data);
//     // .then(response => console.log(response))
//      console.log(`you are in ${data.city} , ${data.countryName}`);
//     })
//     .catch(err => {
//         console.error(err.message); //catching the uncaught promise (msg=sahi coordinate daal)
// });  
// }
// whereAmI(52.508,56666);


// PART 1
// 1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
// If this part is too tricky for you, just watch the first part of the solution.

// const wait=function(seconds){
//     return new Promise(function(resolve){
//         setTimeout(resolve,seconds*1000)
//     });
// };
// const imgElement=document.querySelector('.images');

// const createImage=function(imgPath){
//     return new Promise(
//         function(resolve,reject){
//             const img= document.createElement('img');
//             img.src=imgPath;
//             img.addEventListener('load', function(){
//                 imgElement.append(img);
//                 resolve(img);
//             })
//             img.addEventListener('error', function(){
//                 reject(new Error('Img not found'));
//             })
//         }
//     )
// }
// createImage().then(img => console.log('abc')).catch(err => console.error(err));

// PART 2
// 2. Comsume the promise using .then and also add an error handler;
// 3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
// 4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
// 5. After the second image has loaded, pause execution for 2 seconds again;
// 6. After the 2 seconds have passed, hide the current image 

let db;
const request = indexedDB.open("AshishDB", 1);//Opens (or creates) database 
request.onerror = (event) => {
    console.error("Database error:", event.target.errorCode);
};

// The result property of the event contains the database instance, which is assigned to the db variable for further operations.
request.onsuccess = (event) => {
    db = event.target.result;
    console.log("Database opened successfully");
   
    // calling the methods after sucessful opening of db
   
    //addUser({ id: 1, name: "Ashish Raj", age: 22 });
    // addUser({ id: 2, name: "Ayush Raj", age: 23 }); 
    //  getUser(1);
    // updateUser({ id: 1, name: "Ashish", age: 21 });
    // deleteUser(2);
    // getUserByName("Ayush Raj");
};

request.onupgradeneeded = (event) => {
    const db = event.target.result;

// creating schema 
    const objectStore = db.createObjectStore("users", { keyPath: "id" });//keypath means primary key
    objectStore.createIndex("username", "name", { unique: false });
    console.log("Object store and index created");
};

//add

function addUser(user) {
    const transaction = db.transaction(["users"], "readwrite");  //Creates a new transaction for the "users" object store
    const objectStore = transaction.objectStore("users"); //Accesses the "users" object store within the transaction.
    
    const request = objectStore.add(user);
    request.onsuccess = () => {
        console.log("User added:", user);
    };

    request.onerror = () => {
        console.error("Error adding user:", request.error);
    };
}

//retrieve
function getUser(id) {
    const transaction = db.transaction(["users"]); //Creates a new transaction for the "users" object store in read-only mode (default).
    const objectStore = transaction.objectStore("users");

    const request = objectStore.get(id);
    request.onsuccess = () => {
        if (request.result) {
            console.log("User retrieved:", request.result);
        } else {
            console.log("User not found");
        }
    };

    request.onerror = () => {
        console.error("Error retrieving user:", request.error);
    };
}


//update
function updateUser(user) {
    const transaction = db.transaction(["users"], "readwrite");
    const objectStore = transaction.objectStore("users");

    const request = objectStore.put(user);
    request.onsuccess = () => {
        console.log("User updated:", user);
    };

    request.onerror = () => {
        console.error("Error updating user:", request.error);
    };
}


//delete
function deleteUser(id) {
    const transaction = db.transaction(["users"], "readwrite");
    const objectStore = transaction.objectStore("users");

    const request = objectStore.delete(id);
    request.onsuccess = () => {
        console.log("User deleted:", id);
    };

    request.onerror = () => {
        console.error("Error deleting user:", request.error);
    };
}


//index retrieval

function getUserByName(naam) {
    const transaction = db.transaction(["users"]);
    const objectStore = transaction.objectStore("users");
    const index = objectStore.index("username");

    const request = index.get(naam);
    request.onsuccess = () => {
        if (request.result) {
            console.log("User retrieved by username:", request.result);
        } else {
            console.log("User not found");
        }
    };

    request.onerror = () => {
        console.error("Error retrieving user by username:", request.error);
    };
}




