function secondLargest(num){
    console.log(num)
    let newNum = num.sort((a,b)=>a-b)
    console.log("sortedArray", newNum)
    let Sorted = newNum[newNum.length-2]
    console.log("second largest",Sorted)
}

console.log(secondLargest([1,4,3,44,54,32]))