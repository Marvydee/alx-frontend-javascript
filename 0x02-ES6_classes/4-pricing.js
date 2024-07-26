import Currency from './3-currency.js'

export default class Pricing{
	constructor(amount, currency){
		if (typeof amount !== 'number'){
			throw new TypeError('amount must be a number');
		}else if (!(currency instanceof Currency)){
			throw new TypeError('currency must be an instance of Currency');
		}
		this._amount = amount;
		this._currency = currency;
	}
	//Getter for amount
	get amount(){
		return this._amount;
	}
	//Setter for amount
	set amount(amount){
		if (typeof amount !== 'number'){
			throw new TypeError('amount must be a number');
		}
		this._amount = amount;
	}
	//Getter for currency
	get currency(){
		return this._currency;
	}
	//Setter for currency
	set currency(currency){
		if (!(currency instanceof Currency)){
			throw new TypeError('currency must be an instance of Currency');
		}
		this._currency = currency;
	}

	displayFullPrice(){
		return `${this._amount} ${this.currency.name} (${this.currency.code})`;
	}
	convertPrice(amount, conversionRate){
		if (typeof amount !== 'number'){
			throw new TypeError('amount should be a number');
		}else if (typeof concersionRate !== 'number'){
			throw new TypeError('conversionRate should be a number');
		}
		return amount * conversionRate;
	}
}
