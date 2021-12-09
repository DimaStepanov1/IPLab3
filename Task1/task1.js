function  addClass(obj, cls) {
    let key = "className";
    if (!obj[key].includes(cls.trim() + " "))
    {
        obj[key] += " " + cls;
        obj[key] = obj[key].replace(/ +/g, ' ').trim();
    }
}
addClass(obj, 'new ');
addClass(obj, ' open');
addClass(obj, 'me');
alert( obj.className );