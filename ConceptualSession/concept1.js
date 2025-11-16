//Big O(1)
function bigoOne(arr) {
    return arr[2]
}

console.log(bigoOne(["A", "V", "D"]));


//Big O(n)
function bigoN(arr) {
    for (let i of arr) {
        console.log(i);
    }
}

bigoN(["A", "V", "D"])

//Big o(n^2)
function bigoNSquare(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j])
        }
    }
}

bigoNSquare(["A", "V", "D"])


//Big o(logn)
function targetNumber(n) {
    while (n > 1) {
        console.log(n);
        n = Math.floor(n / 2)
    }
}

targetNumber(16);