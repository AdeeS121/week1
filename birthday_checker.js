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
    

let name = 'Mike Jones';
let month = 2;
let day = 12;
let year = 1945;

let currentMonth = (new Date().getMonth() + 1);
let currentDay = new Date().getDate();
let bDay = new Date(year, month, day);

const getUserBirthDay = function() {

  birthMonth = bDay.getMonth();
  birthDay = bDay.getDate();
  birthYear = bDay.getFullYear()

if (name == ' ' && currentMonth == birthMonth && currentDay == birthDay) {
     return 'Happy Birthday!';
} else {
    return `Hi ${name}. Your birthday is ${birthMonth}-${birthDay}-${birthYear}.`;
}
};
console.log(getUserBirthDay())

    
