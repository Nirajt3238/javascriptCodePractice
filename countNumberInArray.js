function countNumberInArray(num){
    console.log(num)
    let freq={};
    num.forEach(element => {
        freq[element] = (freq[element] || 0) +1
    });
    return freq
}
console.log(countNumberInArray([1,1,2,2,3,5,5,5,3,8]))