class DinnerModel {
	constructor() {
		//this.dishes = dishesConst; // to be replaced in lab 3

		//TODO Lab 1 implement the data structure that will hold number of guest
		// and selected dishes for the dinner menu
		this.nGuests = 2;
		this.menu = {
			'starter': null,
			'main dish': null,
			'dessert': null
		};

		this.dishCache = [];

		this.observers = [];
	}

	request(queryStr) {
		let base_url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/";
		let url = base_url + queryStr;
		console.log(url);
		return fetch(url, {
				headers: {
					'X-Mashape-Key': API_KEY
				}
			})
			.then(response => response.json());
	}


	searchCache(id) {
		return this.dishCache.find(element => element.id == id);
	}

	setNumberOfGuests(num) {
		//TODO Lab 1
		this.nGuests = num;
		this.notifyObservers();
	}

	getNumberOfGuests() {
		//TODO Lab 1
		return this.nGuests;
	}

	//Returns the dish that is on the menu for selected type 
	getSelectedDish(type) {
		//TODO Lab 1
		let dshId = this.menu[type];
		return getDish(dshId);
	}

	//Returns all the dishes on the menu.
	getFullMenu() {
		//TODO Lab 1
		let out = [];
		for (let d in this.menu) {
			if (this.menu.hasOwnProperty(d) && this.menu[d] != null) {

				out.push(this.getDish(this.menu[d]));
			}
		}
		return out;
	}

	getIngredients(id) {
		return this.getDish(id).then(results => {
			let nServings = results.servings;
			results.extendedIngredients.forEach(ing => ing.amount *= this.nGuests / nServings);
			return results.extendedIngredients;
		});
	}

	//Returns all ingredients for all the dishes on the menu.
	getAllIngredients() {
		//TODO Lab 1
		let ingredients = [];
		
		for (let d in this.menu) {
			if (this.menu.hasOwnProperty(d) && this.menu[d] != null) {
				let dshId = this.menu[d];
				let dsh = this.getDish(dshId);
				for (let i of dsh['ingredients']) {
					ingredients.push(i);
				}
			}
		}
		return ingredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	getTotalMenuPrice() {
		//TODO Lab 1
		let price = 0;
		let ingredients = this.getAllIngredients();;
		for (let i of ingredients) {
			price += i.price;
		}

		return price * this.nGuests;
	}

	//function that returns a dish of specific ID
	getDish(id) {
		console.log(this.dishCache);
		let dsh = this.searchCache(id);
		// if (dsh) {
		// 	console.log("found " + id + " in cache!");
		// 	return new Promise(()=>dsh);
		// } else {
			//console.log("Did not find " + id + " in cache!");
			let queryStr = "recipes/" + id + "/information";
			return this.request(queryStr)
				.then(d => {
					this.dishCache.push(d);
					return d;
				});
		
		//}
	}


	//Returns the sum of the price of all ingredients of a dish
	getDishPrice(id) {
		return this.getIngredients(id).then(ings => ings.length);
	}
	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	addDishToMenu(id) {
		//TODO Lab 1 
		let dish = this.getDish(id);
		let dishType = dish.type;
		this.menu[dishType] = id;
		this.notifyObservers();
	}

	//Removes dish from menu
	removeDishFromMenu(id) {
		//TODO Lab 1
		for (let i in this.menu) {
			if (this.menu[i] == id) {
				this.menu[i] = null;
				break; //Stop this loop, we found it!
			}
		}
		this.notifyObservers();
	}

	getAllDishes(type, filter) {
		let queryStr = "recipes/search?";
		if (type) {
			queryStr += "type=" + type;
		}
		if (filter) {
			if (type) {
				queryStr += "&";
			}
			queryStr += "query=''" + filter;
		}
		return this.request(queryStr)
			.then(data => {
				data.results.forEach(dsh => dsh.image = "https://spoonacular.com/recipeImages/" + dsh.image);
				return data.results;
			})
	}

	addObserver(obs) {
		this.observers.push(obs)
	}

	notifyObservers() {
		for (let o of this.observers) {
			o.update();
		}

	}
}