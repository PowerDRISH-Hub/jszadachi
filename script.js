// console.log(1 == 1);
// console.log(1 === 1);
// console.log(1 != "1");
// console.log(2 >= 2);



// if (false) {
//     console.log("правда");
// } else {
//     console.log("ложь");
// }



// var hello = prompt("Введите привет")
// if (hello == "привет") {
//     console.log("правда");
// } else {
//     console.log("ложь");
// }

// if (num === 3) {
//     console.log("значение и тип равны");
// } else if (num == 3) {
//     console.log("значения равны, а тип данных не совпадает");
// } else{
//     console.log("Ошибка");
// }

// if (num == 5) {
//     console.log(num + " равен 5");
// } else if (num > 5) {
//     console.log(num + " Больше пяти");
// } else if (num < 5) {
//     console.log(num + " Меньше пяти");
// } else{
//     console.log("Ошибка");
// }
// if (true && true) {
//     console.log("условие правда");

// }else{
//     console.log("одно из условий ложь");
// }
// if (true || false) {
//     console.log("условие правда");

// }else{
//     console.log("одно из условий ложь");
// }

// console.log(!isNaN("235"));
// console.log(isNaN("adafff"));

// var a = +prompt("Введите число первое")
// var b = +prompt("Введите число второе")
// if (a > b && !isNaN(a) && !isNaN(b)) {
//     console.log(a + " больше " + b);

// } else if (a < b && !isNaN(a) && !isNaN(b)) {
//     console.log(a + " меньше " + b);

// } else if (a == b && !isNaN(a) && !isNaN(b)) {
//     console.log(a + " равны " + b);
// } else {
//     if (isNaN(a) && isNaN(b)) {
//         console.log("оба значения не числа");
//     } else if (isNaN(a)) {
//         console.log("Первое значение не число");
//     } else if (isNaN(b)) {
//         console.log("Второе значение не число");
//     }



// var num = +prompt("Введите цифру от 1 до 7")
// if (num == 1) {
//     console.log("Понедельник");
// } else if (num == 2) {
//     console.log("Вторник");
// } else if (num == 3) {
//     console.log("Среда");
// } else if (num == 4) {
//     console.log("Четверг");
// } else if (num == 5) {
//     console.log("Пятница");
// } else if (num == 6) {
//     console.log("Суббота");
// } else if (num == 7) {
//     console.log("Воскресенье");
// } else if (num > 7 || num < 1)
//         console.log("Ошибка");
// 




// var num = +prompt("Угадай число от 0 до 100")
// var zch = (99)

// if (num > zch) {
//     console.log("Число меньше");
// } else if (num < zch) {
//     console.log("Число больше");
// } else if (num == zch) {
//     console.log("Молодец, Ты угадал!");

// }

var color = prompt("Введите цвет")
if (color == "зелёный" || color == "зеленый") {
    console.log("едь мага ");
} else if (color == "жёлтый" || color == 'желтый') {
    console.log("Э мага жди");
} else {
    console.log("э мага стой");
}