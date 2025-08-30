function leapYear(year){

    console.log("leapYear" , year)
    if(year % 4 == 0){
        result = true
    }
    else{
        result = false
    }
    return result
}

console.log(leapYear(2024))