// var string = "Welcome to this Javascript Guide!";

// function reverseBySeparator(string, separator) {
//     return string.split(separator)
//     .reverse()
//     .join(separator);
//   }
// var reverseEntireSentence = reverseBySeparator(string, "");
// var reverseEachWord=reverseBySeparator(reverseEntireSentence," ");
// console.log(reverseEachWord);


// const arr=[1,2,3];
// console.log(Math.max(arr));


// const urls = [
//     'https://api-bdc.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381',
//     'https://api-bdc.net/data/reverse-geocode-client?latitude=19.037&longitude=72.873',
//     'https://api-bdc.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381'
//   ];
  
//   async function fetchData() {
//     try {
//       const fetchPromises = urls.map(url => fetch(url));
  
//       //or/////
//     //   const fetchPromises = []; // Create an empty array for promises

//     // for (const url of urls) {
//     //   fetchPromises.push(fetch(url));
//     ///////////
//       const responses = await Promise.all(fetchPromises);
  
//       const dataPromises = responses.map(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       });
  
//       const data = await Promise.all(dataPromises);
//       console.log(data);
//     } catch (error) {
//       console.error('Kuchh gadbad ho gya', error);
//     }
//   }
//   fetchData();
  



// let genericPromise = new Promise((resolve, reject) => {
//     if (1 === 1) {
//       resolve()
//     } else {
//       reject()
//     }
//   }).then(res=>console.log(res));
  


// const a3 = new Promise(resolve => {
//     resolve("Resolved Immediately")
//   })
//   console.log(a3);
//   a3.then(res => console.log(res)
//   )



// const data = [
//     { name: 'Charlie', age: 35 },
//     { name: 'Diana', age: 30 }
// ];
// console.log(data.map(({name})=>name))
// console.log(data.map(({ name,age}) => ({name,age})));



const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Destructuring
const { name, ...age } = person;

console.log(name); 
console.log(age);  
