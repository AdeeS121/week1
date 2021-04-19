const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name: ', function(name) {
    rl.question('What is your birth month: ', function(birthMonth) {
      rl.question('What is your birth day: ', function(birthDay) { 
        rl.question('What is your birth year: ', function(birthYear){
          let today = new Date();
          let currentMonth = today.getMonth() + 1;
          let currentDay = today.getDate();
           if (currentMonth == birthMonth && currentDay == birthDay) {
             console.log('Happy Birthday!') 
           } else {
             console.log(`Hi ${name}. Your birthday is ${birthMonth}-${birthDay}-${birthYear}`)
           }
            rl.close();
        }); 
      })
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});




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
    

// let name = 'Mike Jones';
// let month = 2;
// let day = 12;
// let year = 1945;

// let currentMonth = (new Date().getMonth() + 1);
// let currentDay = new Date().getDate();
// let bDay = new Date(year, month, day);

// const getUserBirthDay = function() {

//   birthMonth = bDay.getMonth();
//   birthDay = bDay.getDate();
//   birthYear = bDay.getFullYear()

// if (name == ' ' && currentMonth == birthMonth && currentDay == birthDay) {
//      return 'Happy Birthday!';
// } else {
//     return `Hi ${name}. Your birthday is ${birthMonth}-${birthDay}-${birthYear}.`;
// }
// };
// console.log(getUserBirthDay())

    
