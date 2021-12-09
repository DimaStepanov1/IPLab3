let obj = {
    className: 'open menu menu'
};
function  removeClass(obj, cls) {
    let key = "className";
    let splitedStr = obj[key].split(' ');
    let resultStr = '';
    for (let i = 0; i < splitedStr.length; i++) {
        if (splitedStr[i] != cls) {
            resultStr += splitedStr[i] + ' ';
        }
    }
    obj[key] = resultStr.substring(0, resultStr.length - 1);
}
removeClass(obj, 'menu');
alert( obj.className );