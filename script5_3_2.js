let x = 1;

if (typeof x === 'number'){
    console.log(x + ' это число')
} else if (typeof x === 'string'){
    console.log(x + ' это строка')
} else if (typeof x === 'boolean'){
    console.log(x + ' это логический тип')
}else console.log('Тип не определен')

