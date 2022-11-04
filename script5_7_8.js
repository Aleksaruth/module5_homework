let myMap = new Map ();
myMap.set('Ученик 1', 'Иван');
myMap.set('Ученик 2', 'Петр');
myMap.set('Ученик 3', 'Сергей');
myMap.set('Ученик 4', 'Екатерина');
myMap.set('Ученик 5', 'Дарья');

console.log(myMap.keys());
console.log(myMap.values());


myMap.forEach((value, key) => {
    console.log(`Ключ - ${key}, значение - ${value}`);  //Ключ — Х, значение — Y
});
