function randomSort() {
    return Math.random() - 0.5;
}
let arr = [1, 2, 3, 4, 5];
arr.sort(randomSort);
alert( arr );