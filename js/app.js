window.onload= function() {
	//We instantiate our model
	const model = new DinnerModel();
	
	try{
		const homeView = new HomeView(document.querySelector("#homeView"),model);
	}
	catch(error){
		//console.error(error);
	}

	try{
		const dinnerSummaryView = new DinnerSummaryView(document.querySelector("#dinnerSummaryView"),model);
	}
	catch(error){
	//	console.error(error);
	}

	try{
		const dishDetailsView = new DishDetailsView(document.querySelector("#dishDetailsView"),model);
	}
	catch(error){
		console.error(error);
	}

	try{
		const ingredientsView = new IngredientsView(document.querySelector("#ingredientsView"),model);
	}
	catch(error){
		console.error(error);
	}

	try{
		const selectDishView= new SelectDishView(document.querySelector("#selectDishView"),model);
	}
	catch(error){
	//	console.error(error);
	}

	try{
		const dinnerOverviewView = new DinnerOverviewView(document.querySelector("#dinnerOverviewView"),model);
	}
	catch(error){
	//	console.error(error);
	}


	//const exampleView = new ExampleView(document.querySelector("#exampleView"),model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * query for elements in the whole document.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

};
