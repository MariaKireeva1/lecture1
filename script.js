let arr = [];
let arrLength;
arrLength = prompt('Write the length of array');

while (arrLength == null || arrLength > 10 || arrLength < 2) {
    if (arrLength <= -2 && arrLength >= -10) {
        arrLength = Math.abs(arrLength);
        break;
    }

    arrLength = prompt('Write the length of array again');
}

if (!((arrLength ^ 0) === arrLength)) {
    arrLength = Math.round(arrLength);
}
arr.length = arrLength;

for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(Math.random()*10);;
}
console.log(arr);
let sum = 1;
for (let el of arr) {
    sum = sum * el;
}
console.log(sum);
