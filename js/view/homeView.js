class HomeView {
    constructor (container, model) {
	this.container=container;
	this.model=model;

	this.container.innerHTML=`
	<div id="homeView">
			<div class="description text-center">
				<h3>
				The dinner hour is a sacred, happy time when everyone should be together and relaxed. 
				</h3>

				<button id="createDinner" class="btn btn-outline-dark">Create Dinner</button>
				
			</div>
		</div>
	`;

	this.createDinnerButton = container.querySelector("#createDinner");
	}
	
	hide(){
		this.container.style.display="none";
	}

	show(){
		this.container.style.display="initial";
	}
    // in lab 2, the Observer update method will come here
}

class HomeViewController{
	constructor(view,model,gsc){
		view.createDinnerButton.addEventListener("click", 
		() => gsc.showSelectDishScreen() );
	}
}
 
