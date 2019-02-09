class SelectDishView {
	constructor(container, model) {



		this.container = container;
		this.model = model;
		
		this.dinnerSummary=new DinnerSummaryView(container.querySelector("#dinnerSummaryView"),model);

		this.dropdownEntries = container.querySelector("#dropdownEntries");
		this.searchButton = container.querySelector("#executeSearch");

	}

	// in lab 2, the Observer update method will come here
}