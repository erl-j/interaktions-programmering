class HomeView {
    constructor (container, model) {
	this.container=container;
	this.model=model;

	this.container.innerHTML=`
	<div id="homeView">
			<div style="margin-top: 25%">
				<p class="text-center">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
					type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
					Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
					of Lorem Ipsum.
				</p>
				<div class="text-center">
					<button id="createDinner" class="btn btn-secondary">Create Dinner</button>
				</div>
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
 
