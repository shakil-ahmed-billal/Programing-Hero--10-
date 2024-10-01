/***
 * year will be e leap year if the is divisible by 4
 * 
 * 
 */

function isLeepYear (year){
    if (year % 4 === 0){
        return true;
    }
    else{
        return false ;
    }
}

const leepYear = isLeepYear(2024)
// console.log(leepYear);

/***
 * 1. those year that is not divaisble by 100 , if the year is divaisible by 4; then it will be a leap year ;
 * 
 * 2.if the year is devisble by 400 , then is the year is leapYear
 * 3 simple logic:
 * year will be a leap year if the year is divisible by 4
 */

function isLeapyear2(year){
    if(!year % 100 && year % 4 === 0){
        return true ;
    }
    else if(year % 100 && year % 400){
        return true ;
    }
    return false ;
}
const leapYear = isLeapyear2(2400)
console.log(leapYear);



