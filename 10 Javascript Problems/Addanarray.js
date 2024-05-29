// Adding arrays
//indices start at 0
//length starts at 1
const array = [1, 2, 3, 4, 5, 6]

function addArray(arr) {

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }

    return total;
}

console.log(addArray(array))