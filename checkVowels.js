function checkVowels(str){
    console.log(str)
    let vowels="aeiou";
    let vowelCount = 0;
    for(let i =0; i <= str.length; i++)
    {
        if(vowels.includes(str[i])){
            vowelCount++;
        }
        // console.log(str[i])
    }
    return vowelCount
}
console.log(checkVowels("hello is world"))