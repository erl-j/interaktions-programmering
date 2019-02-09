class DishDetailsView {
	constructor(container, model) {

		this.container = container;
		this.model = model;
		
		this.dinnerSummary=new DinnerSummaryView(container.querySelector("#dinnerSummaryView"),model);



	}

	// in lab 2, the Observer update method will come here
}