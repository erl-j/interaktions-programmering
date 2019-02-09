window.onload= function() {
	//We instantiate our model
	const model = new DinnerModel();
	
	// And create the instance of ExampleView
	const selectDish = new SelectDishView(document.querySelector("#selectDishView"),model);

	//const dinnerSummaryView= new DinnerSummaryView(document.querySelector("#dinnerSummaryView"),model);

	const dishItemView= new DishItemView(document.querySelector("#dishItemView"),model);
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * query for elements in the whole document.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */


};
