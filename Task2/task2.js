function camelize(str) {
    if (str === "") {
        return 0;
    }
    else {
        let arr = str.split('-');
        for (let i = 1; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        str = arr.join('');
        alert(str);
    }
}
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");