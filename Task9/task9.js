let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    let text = list;
    while(text) {
        console.log(text.value);
        text = text.next;
    }
}
console.log('1.\n');
printList(list);

function printListRec(list) {
    console.log(list.value);
    if(list.next) {
        printListRec(list.next);
    }
}
console.log('2.\n');
printListRec(list);

function printReverseListRec(list) {
    if(list.next) {
        printReverseListRec(list.next);
    }
    return console.log(list.value);
}
console.log('3.\n');
printReverseListRec(list);

function printReverseList(list) {
    let text = list, arr = [];
    while(text) {
        arr.push(text.value);
        text = text.next;
    }
    for (let i = arr.length-1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
console.log('4.\n');
printReverseList(list);