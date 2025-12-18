function findDuplicate(num){
    console.log(num)
    for(let i=0; i<num.length; i++){
        if(num.indexOf(num[i]) !== i){
            console.log("findI:",i)
            console.log("findNum[i]:",num[i])
            console.log("findDuplicate:",num[i])
        }
    }
}

console.log(findDuplicate([1,2,2,3,4,5,5,4]))