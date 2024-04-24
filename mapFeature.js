// const number = [1,2,3,4,5];

// const squares = number.map(square);
// console.log(squares);

// function square(element){
//     return Math.pow(element,2)
// }

//Strings
// const students = ["Yujin ho","Jiwoo","Kayden","Levi"];

// const capStud = students.map(upperCase);

// console.log(capStud);

// function upperCase(element){
//     return element.toUpperCase()
// }


//Dates

// const dates = ["2024-1-10","2023-3-12","2016-6-17","2009-12-30"];

// const formatedDates = dates.map(formatDate);

// console.log(formatedDates);



// function formatDate(element){
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}}`
// }

// const filter = dates.filter(value => 
//    parseInt(value.split("-")[0])>=2010 && parseInt(value.split("-")[0])<=2023
// )

// console.log(filter)



// function getHumanReadbleResponse(response) {
//   if(response.data.hasSucceeded){
//     return "Success "+response.message;
//   }

//   return "OOPs"
// }

// const apiResponse =  {
//     data : {
//         hasSucceeded :true,
//         message : "Got it"
//     },
// };
// console.log(getHumanReadbleResponse(apiResponse));
