function powerExponent(base, exp){
    console.log(base, exp)
    let result =1;
    for(i=1; i <= exp; i++){
        result=result*base;
    }
    return result
}
console.log(powerExponent(4,3))