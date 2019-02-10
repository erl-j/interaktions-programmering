class GSC{
	constructor(model){
		this.model=model;

		this.homeView = new HomeView(document.querySelector("#homeView"),this.model);

		this.dinnerSummaryView = new DinnerSummaryView(document.querySelector("#dinnerSummaryView"),this.model);
		this.model.addObserver(this.dinnerSummaryView);

		this.dishDetailsView = new DishDetailsView(document.querySelector("#dishDetailsView"),this.model);

		this.ingredientsView = new IngredientsView(document.querySelector("#ingredientsView"),this.model);
		this.model.addObserver(this.ingredientsView);

		this.selectDishView= new SelectDishView(document.querySelector("#selectDishView"),this.model);
		this.model.addObserver(this.selectDishView);

		this.dinnerOverviewView = new DinnerOverviewView(document.querySelector("#dinnerOverviewView"),this.model);
		this.model.addObserver(this.dinnerOverviewView);
	}

	initalizeControllers(){
		this.dinnerSummaryViewController=new DinnerSummaryViewController(this.dinnerSummaryView,this.model,this);
		this.homeViewController=new HomeViewController(this.homeView,this.model,this);
		this.selectDishViewController=new SelectDishViewController(this.selectDishView,this.model,this);
		this.dishDetailsViewController=new DishDetailsViewController(this.dishDetailsView,this.model,this);
		this.dinnerOverviewViewController=new DinnerOverviewViewController(this.dinnerOverviewView,this.model,this);
	}

	hideAllViews(){
		this.homeView.hide();
		this.dinnerSummaryView.hide();
		this.ingredientsView.hide();
		this.selectDishView.hide();
		this.dishDetailsView.hide();
		this.dinnerOverviewView.hide();
	}

	showHomeScreen(){
		this.hideAllViews();
		this.homeView.show();
	}
	
	showSelectDishScreen(){
		this.hideAllViews();
		this.dinnerSummaryView.show();
		this.selectDishView.show();
	}

	showDishDetailsScreen(id){
		this.dishDetailsView.set(id);
		this.ingredientsView.set(id);
		this.hideAllViews();
		this.dinnerSummaryView.show();
		this.dishDetailsView.show();
		this.ingredientsView.show();
	}

	showDinnerOverviewScreen(){
		this.hideAllViews();
		this.dinnerOverviewView.show();
	}
}


window.onload= function() {

	model=new DinnerModel();

	const gsc=new GSC(model);
	gsc.initalizeControllers();
	gsc.showHomeScreen();

};









