function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

let strings = ["C++", "C#", "C++", "C#",
    "C", "C++", "JavaScript", "C++", "JavaScript"];

alert( unique(strings) );