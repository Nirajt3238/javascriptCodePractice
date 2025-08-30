function largestNumber(num){
    let bigNumber = num[0]
    for(let i =1; i<num.length; i++){
        if(num[i]> bigNumber){
            bigNumber = num[i]
        }

    }
    return bigNumber;
}

console.log(largestNumber([5,633,603,8,33]))