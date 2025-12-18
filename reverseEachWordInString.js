let str= "my name is niraj tiwari"
let res= str.split(" ").map((word)=>{
    return word.split("").reverse().join("")
}).reverse().join(" ")
console.log("reverse:", res)