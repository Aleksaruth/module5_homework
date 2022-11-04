// let arr = [1, 4, 5, 4];
// let x = false; 

// for (let i = 1; i < arr.length; i++) {
	// if (arr[0] !== arr[1]){
	// x = true; break};
// };
// console.log(x);


const arr = [1, 1, 2, 3];
let isEqual = true;
const reference = arr[0];

for (let item of arr) {
	if (item !== reference) {
		isEqual = false;
	}else {
		isEqual = true;
	}
}

console.log(isEqual)