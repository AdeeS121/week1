const name = "Bill"
const month = 4;
const date = 18;
const year = 2021

let today = new Date();
let isBirthDay = new Date(year, month -1, date) 
const getUserBirthDay = function() {

if (mane = 'Bill' && (today.getMonth() + 1) == isBirthDay.getMonth() + 1 && today.getDate() == isBirthDay.getDate()) {
 console.log('Happy Birthday!')
} else {
    console.log(`Hi ${name}. Your birthday is ${isBirthDay}`)
}
};

console.log(getUserBirthDay())
    





