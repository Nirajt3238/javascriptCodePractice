let arr =[1,2,3,5]
count =10
output=[]

for(let i=1; i<=count; i++){
    !arr.includes(i)? output.push(i) : ""
}
console.log(output)