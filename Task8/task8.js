let vasya = { name: "Вася", age: 23 };
let masha = { name: "Маша", age: 18 };
let vovochka = { name: "Вовочка", age: 6 };
let people = [ vasya , masha , vovochka ];
function Sort(arr) {
    arr.sort(compare);
}
function compare(a, b) {
    if (a.age > b.age)
        return 1;
    if (a.age < b.age)
        return  -1;
}
Sort(people);
alert(people[0].age);