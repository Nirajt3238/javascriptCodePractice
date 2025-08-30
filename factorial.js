function factorial(inputNumber){
    let result=1;
    for (let i = 1 ; i<= inputNumber; i++)
    {
        console.log(i)
        // result= result * i;
        result *=i
    }
    return result
}

console.log("factorial of number :->>", factorial(4))