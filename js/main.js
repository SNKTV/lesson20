// Завдання 1

let a = prompt('Введіть число а', '');
let b = prompt('Введіть число b', '');

function maxNumber(a, b){
    if (+a > +b){
        return `Число ${a} більше`;
    } else if(+b > +a){
        return `Число ${b} більше`;
    }
    return `Число ${+a} дорівнює числу ${+b}`;
}

alert(maxNumber(a, b));

//Завдання 2

function revers(number) {

    number = prompt('Введіть число', '');

    if (number) {
        alert(`${-number}`)
    } else {
        alert(`${+number}`)
    }
}
revers()

// Завдання 3

let number = prompt('Введіть число', '');
let count = prompt('Введіть кількість додавань', '');

function three(number, count){
    return number + 3 * count;  
}

alert(three(+number, +count));

// Завдання 4

let metric = prompt('Введіть показник (\'m\' чи \'cm\')', '');
let km = prompt('Скільки кілометрів?', '');

function KmToM(m){
    return `${km} кілометрів є ${km * 1000} m`;
}

function KmToCm(cm){
    return `${km} кілометрів є ${km * 100000} cm`;
}

function getMetric(metric){
    if(metric === 'm'){
        return KmToM();
    } else if(metric === 'cm'){
        return KmToCm();
    }
    return `Ви ввели невірний показник`;
}

alert(getMetric(metric, km, KmToM, KmToCm));