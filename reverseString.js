function reverseString(str){
    // let rev = str.split("").reverse().join("")
    // console.log("rev",rev)
    let result ="";
    for(let i = str.length-1; i>=0; i--)
    {
        result += str[i];
    }
    return result

}

console.log(reverseString("khushboo"))