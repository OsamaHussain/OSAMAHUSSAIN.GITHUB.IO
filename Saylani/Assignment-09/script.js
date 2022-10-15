const income = document.getElementById('income');
const incomeDescription = document.getElementById('incomedescription');
const incomeBtn = document.getElementById('incomeBtn');
const incomeDisplay = document.getElementById('incomedisplay');
const incomeDisplay2 = document.getElementById('incomedisplay2');
const expense = document.getElementById('expense');
const expenseDescription = document.getElementById('expensedescription');
const expenseBtn = document.getElementById('expenseBtn');
const expenseDisplay = document.getElementById('expensedisplay');
const expenseDisplay2 = document.getElementById('expensedisplay2');
const balance = document.getElementById('balance');
const username = document.getElementById('username');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const changename = document.getElementById('changename');

/***********************************************************************************
 * ================================== Question 1 ===================================
 * Create a class called PersonAccount. It has firstname, lastname, incomes,
 * expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome,
 * addExpense and accountBalance methods. Incomes is an array of objects income and
 * its description and expenses is also an array of objects having expense and its
 * description.
 */
class PersonAccount {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.incomes = [];
		this.expenses = [];
	}
	totalIncome() {
		let res = 0;
		for (let i = 0; i < this.incomes.length; i++) {
			res += this.incomes[i].income;
		}
		return res;
	}
	totalExpense() {
		let res = 0;
		for (let i = 0; i < this.expenses.length; i++) {
			res += +this.expenses[i].expense;
		}
		return res;
	}
	accountInfo() {
		return this.firstName + ' ' + this.lastName;
	}
	addIncome(inc, desc) {
		this.incomes.push({
			income: inc,
			description: desc,
		});
	}
	addExpense(exp, desc) {
		this.expenses.push({
			expense: exp,
			description: desc,
		});
	}
	accountBalance() {
		return this.totalIncome() - this.totalExpense();
	}
}
let inc = new PersonAccount('Osama', 'Hussain');

incomeBtn.addEventListener('click', () => {
	inc.addIncome(Number(income.value), incomeDescription.value);
	income.value = '';
});
expenseBtn.addEventListener('click', () => {
	inc.addExpense(Number(expense.value), expenseDescription.value);
	expense.value = '';
});
changename.addEventListener('click', () => {
	inc.firstName = firstname.value === '' ? inc.firstName : firstname.value;
	inc.lastName = lastname.value === '' ? inc.lastName : lastname.value;
	firstname.value = '';
	lastname.value = '';
});

setInterval(() => {
	username.value = inc.accountInfo();
	balance.value = inc.accountBalance();
	incomeDisplay.value = inc.totalIncome();
	incomeDisplay2.value = inc.totalIncome();
	expenseDisplay.value = inc.totalExpense();
	expenseDisplay2.value = inc.totalExpense();
}, 1000);

/***********************************************************************************
 * ================================== Question 2 ===================================
 * Create an Automobile class. The class will have name, model, color, type properties
 *  and create different methods e.g openOrCloseDoor() logs doors are opened or closed,
 *  start() logs car is ready for drive.
 */

class Automobile {
	constructor(type, name, model, color, maxSpeed) {
		this.type = type;
		this.name = name;
		this.model = model;
		this.color = color;
		this.maxSpeed = maxSpeed;
	}

	isDoorClose = false;
	openOrCloseDoor() {
		if (this.isDoorClose) {
			console.log('Doors are Closed!.. Ready');
		} else {
			console.log('Doors are Opened!.. Please close it...');
		}
	}

	open() {
		console.log('Opening Car Doors!...');
		this.isDoorClose = false;
	}

	close() {
		console.log('Closing Car Doors!...');
		this.isDoorClose = true;
	}

	start(type, name, model) {
		console.log(`${type}: ${name} (${model}) is ready to Drive!...`);
	}

	go() {
		if (this.isDoorClose) {
			this.start(this.type, this.name, this.model);
		}
	}
}

/***********************************************************************************
 * ================================== Question 3 ===================================
 * Create Car, Bus and Truck child class from the Automobile Class.
 */
class Car extends Automobile {
	constructor(type, name, model, color, maxSpeed, price) {
		super(type, name, model, color, maxSpeed);
		this.price = price;
	}

	getPrice() {
		console.log(`Price of ${this.type} is ${this.price}`);
	}
}
class Bus extends Automobile {
	constructor(type, name, model, color, maxSpeed, price, area) {
		super(type, name, model, color, maxSpeed);
		this.price = price;
		this.area = area;
	}

	getPrice() {
		console.log(`Price of ${this.type}:${this.name} is ${this.price}`);
	}

	getArea() {
		console.log(`Area of ${this.type}:${this.name} is ${this.area}`);
	}
}
class Truck extends Automobile {
	constructor(type, name, model, color, maxSpeed, price, usage) {
		super(type, name, model, color, maxSpeed);
		this.price = price;
		this.usage = usage;
	}

	getPrice() {
		console.log(`Price of ${this.type} is ${this.price}`);
	}

	getUsage() {
		console.log(`Usage of ${this.type}:${this.name} is ${this.usage}`);
	}
}

console.log('================= CAR ================');
const car = new Car('Car', 'Fx', '2013', 'Black', '240km/hr', '400000');
car.getPrice();
car.close();
car.openOrCloseDoor();
car.go();

console.log('================= BUS ===============');
const bus = new Bus(
	'Bus',
	'Coaster',
	2009,
	'White',
	'130km/hr',
	'700000',
	'Karachi to Lahore'
);
bus.getPrice();
bus.getArea();
bus.close();
bus.openOrCloseDoor();
bus.go();

console.log('================= Truck ===============');
const truck = new Truck(
	'Truck',
	'Tanker',
	1998,
	'Blue',
	'90km/hr',
	'550000',
	'Water Delivery'
);
truck.getPrice();
truck.getUsage();
truck.close();
truck.openOrCloseDoor();
truck.go();
