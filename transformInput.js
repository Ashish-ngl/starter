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

const inputJson = {
    "status": true,
    "statusCode": null,
    "statusMessage": null,
    "response": [
        {
            "categoryCode": "CAT1",
            "categoryName": "Category 1",
            "count": 1
        },
        {
            "categoryCode": "CAT2",
            "categoryName": "Category 2",
            "count": 5
        },
        {
            "categoryCode": "CAT3",
            "categoryName": "Category 3",
            "count": 3
        },
        {
            "categoryCode": "CAT4",
            "categoryName": "Category 4",
            "count": 7
        },
        {
            "categoryCode": "CAT5",
            "categoryName": "Category 5",
            "count": 2
        },
        {
            "categoryCode": "CAT6",
            "categoryName": "Category 6",
            "count": 8
        }
    ]
};

function change(input) {

    const categories = input.response.map(item => item.categoryCode);
    const data = input.response.map(item => item.count);


    //ya destructure
    return {
        title: {
            text: "Category"
        },
        series: [
            {
                name: "Filings",
                data: data,
                group: "apexcharts-axis-0"
            }
        ],
        xaxis: {
            categories: categories,
            stepSize: 1,
            convertedCatToNumeric: false
        }
    };
}

const outputJson = change(inputJson);
console.log(JSON.stringify(outputJson, null, 2));
