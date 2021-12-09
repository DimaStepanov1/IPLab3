function arraySort(arr) {
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let arrSorted = arraySort( arr );
alert( arrSorted );
alert( arr );