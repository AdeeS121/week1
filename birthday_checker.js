
const fullName = 'Mike Jones'
const birthMonth = 2;
const birthDay = 12;
const birthYear = '1945'


const getUserBirthDay = function(birthMonth, birthDay, birthYear){
    if(birthMonth === 2 && birthDay === 4 && birthYear === '1990'){
        return 'Happy Birthday!'
}   else {
    return `Hi ${fullName}. Your birthday is ${birthMonth}-${birthDay}-${birthYear}.`
}
}
console.log(getUserBirthDay(birthMonth, birthDay, birthYear))

