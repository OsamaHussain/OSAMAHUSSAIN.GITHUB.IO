// let plan1 = {
// 	name: 'Basic',
// 	price: 3.99,
// 	space: 100,
// 	transfer: 1000,
// 	pages: 10,
// 	discountMonths: [6, 7],
// 	calcAnnual: function (percentIfDisc) {
// 		let bestPrice = this.price;
// 		let currDate = new Date();
// 		let thisMo = currDate.getMonth();
// 		for (let i = 0; i < this.discountMonths.length; i++) {
// 			if (this.discountMonths[i] === thisMo) {
// 				bestPrice = bestPrice * percentIfDisc;
// 				break;
// 			}
// 		}
// 		return bestPrice * 12;
// 	},
// };
// let plan2 = {
// 	name: 'Professional',
// 	price: 5.99,
// 	space: 500,
// 	transfer: 5000,
// 	pages: 50,
// 	discountMonths: [6, 7, 11],
// };
// let plan3 = {
// 	name: 'Ultimate',
// 	price: 9.99,
// 	space: 2000,
// 	transfer: 20000,
// 	pages: 500,
// 	discountMonths: [6, 7],
// };

// console.log(calcAnnual());

// let plan1 = {
// 	name: 'Basic',
// 	price: 3.99,
// 	space: 100,
// 	transfer: 1000,
// 	pages: 10,
// 	discountMonths: [6, 7],
// };

function Plan(name, price, space, transfer, pages, discountMonths) {
	this.name = name;
	this.price = price;
	this.space = space;
	this.transfer = transfer;
	this.pages = pages;
	this.discountMonths = discountMonths;
	this.calcAnnual = function (percentIfDisc) {
		let bestPrice = this.price;
		let currDate = new Date();
		let thisMo = currDate.getMonth();
		for (let i = 0; i < this.discountMonths.length; i++) {
			if (this.discountMonths[i] === thisMo) {
				bestPrice = bestPrice * percentIfDisc;
				break;
			}
		}
		return bestPrice * 12;
	};
}

const getMethods = (obj) => {
	let properties = new Set();
	let currentObj = obj;
	do {
		Object.getOwnPropertyNames(currentObj).map((item) => properties.add(item));
	} while ((currentObj = Object.getPrototypeOf(currentObj)));
	return [...properties.keys()].filter(
		(item) => typeof obj[item] === 'function'
	);
};

// let plan1 = new Plan('Basic', 3.99, 100, 1000, 10, [6, 7]);
// let plan2 = new Plan('Professional', 5.99, 500, 5000, 50, [6, 7, 11]);
// let plan3 = new Plan('Ultimate', 9.99, 2000, 20000, 500, [6, 7]);
// console.log(plan1, plan2, plan3);

console.log(getMethods(Date.prototype));
console.log(Date.toString());
