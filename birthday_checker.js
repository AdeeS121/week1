
const name = 'Mike Jones'
const birthMonth = 2;
const birthDay = 12;
const birthYear = '1945'


const getUserBirthDay = function(name, birthMonth, birthDay, birthYear){
    if(birthMonth === 2 && birthDay === 4 && birthYear === '1990'){
        return 'Happy Birthday!'
} else {
    return `Hi ${name}. Your birthday is ${birthMonth}-${birthDay}-${birthYear}.`
}
}
console.log(getUserBirthDay(name, birthMonth, birthDay, birthYear))

