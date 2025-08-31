function findIndices(arr, target) {
    console.log(arr)
    console.log(target)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return {
                    numbers: [arr[i], arr[j]],
                    indices: [
                        [i],
                        [j]
                    ]
                }
            }
        }
    }
    return null;
}
const arr = [6, 5, 9, 55, 8, 33];
const target = 17;
console.log(findIndices(arr, target))