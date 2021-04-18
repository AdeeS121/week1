// const name = "Bill"
// const month = 3;
// const date = 18;
// const year = 1962;

// let today = new Date();
// let isBirthDay = new Date(year, month -1, date);
// const getUserBirthDay = function() {

// if (mane = 'Bill' && (today.getMonth() + 1) == isBirthDay.getMonth() + 1 && today.getDate() == isBirthDay.getDate()) {
//  console.log('Happy Birthday!');
// } else {
//     console.log(`Hi ${name}. Your birthday is ${isBirthDay.getMonth() + 1 }-${isBirthDay.getDate()}-${isBirthDay.getFullYear()}.`);
// }
// };

// console.log(getUserBirthDay())
    

let name = "Bill"
let month = 4;
let day = 18;
let year = 1962;


const getUserBirthDay = function() {
let today = new Date();
let bDay = new Date(year, month -1, day);
    month = bDay.getMonth() + 1;
    day = bDay.getDate()
    year = bDay.getFullYear()

 console.log('Happy Birthday!');
} else {
    console.log(`Hi ${name}. Your birthday is ${month}-${day}-${year}.`);
}


};
console.log(getUserBirthDay())

    
