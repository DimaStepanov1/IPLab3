function reverseSort(arr) {
    arr.sort(compare);
}
function compare(a, b) {
    if (a < b)
        return 1;
    if (a > b)
        return  -1;
}
let arr = [5, 2, 1, -10, 8];
reverseSort( arr );
alert( arr );