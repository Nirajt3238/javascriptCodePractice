function generateTable(tabl, end){
    console.log(tabl, end)
    for(i=1; i<=end; i++){
        console.log(i * tabl)
    }
}

console.log(generateTable(4,10))