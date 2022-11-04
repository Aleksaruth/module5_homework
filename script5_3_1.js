let value_digit = prompt('Введите число')

digit = +value_digit

if ((typeof(digit) == 'number') && (!isNaN(digit))){
    if (digit % 2 == 0) {
        console.log(digit + " - Число четное");
    } else {
        console.log(digit + " - Число нечетное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}




