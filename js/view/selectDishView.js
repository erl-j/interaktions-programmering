class SelectDishView {
	constructor(container, model) {
		this.container = container;
		this.model = model;

		this.container.innerHTML = `

			<div class="stayHigh ">
				<div class="pb-1 ml-2 border-bottom ">
					<h4>Find a dish</h4>
					<div class="input-group">
						<input id="searchTerms" placeholder="Enter key words"></input>
						<select id="dropdown" class="btn btn-outline-dark">
							<option value="">all</option>
							<option value="starter">starter</option>
							<option value="main course">main course</option>
							<option value="dessert">dessert</option>
							<option value="side dish">side dish</option>
							<option value="appetizer">appetizer</option>
							<option value="salad">salad</option>
							<option value="bread">bread</option>
							<option value="breakfast">breakfast</option>
							<option value="soup">soup</option>
							<option value="beverage">beverage</option>
							<option value="sauce">sauce</option>
							<option value="drink">drink</option>	
					  </select> 
					</div>
				</div>
				<div class="scrollable" id="gallery"></div>
			</div>
		`;

		//this.dropdown = container.querySelector("#dropdown");
		this.searchButton = container.querySelector("#searchButton");
		this.searchTerms = container.querySelector("#searchTerms");
		this.dropdown=container.querySelector("#dropdown");

		this.gallery = container.querySelector("#gallery");
		this.galleryDishes = [];
	}

	update() {
		this.dishItemViews = [];
		this.gallery.innerHTML = "";
		let i = 0;
		for (let d of this.galleryDishes) {
			this.gallery.innerHTML += ("<div class=\"imageBox\" id=\"dishItem" + i + "\" value=" + d.id + "></div>");
			this.dishItemViews.push(new DishItemView(this.container.querySelector("#dishItem" + i), this.model, {name:d.title,image:d.image,id:d.id}));
			i++;
		}
	}

	setGallery(dishes) {
		this.galleryDishes = dishes;
		this.update();
	}

	hide() {
		this.container.style.display = "none";
	}

	show() {
		this.container.style.display = "initial";
	}
}

class SelectDishViewController {
	constructor(view, model, gsc) {
		var searchAction = () => {
			view.gallery.innerHTML="<h3>loading dishes...</h3>";
			model.getAllDishes(view.dropdown.value,view.searchTerms.value)
			.then(dishes=>view.setGallery(dishes)
			.catch(error=>console.log("ERROR IN SELECT DISH"))
		);
		}

		view.gallery.addEventListener("load",searchAction());

		view.container.addEventListener("keypress",
			(e) => {
				if(e.keyCode==13){
					searchAction();
				}
			});
		
		view.dropdown.addEventListener("change",searchAction);

		let findElementValue=function(element,depth){
			let value = element.getAttribute("value");
				if(depth==0){
					return undefined;
				}
				if(value){
					return value;
				}
				else{
					return findElementValue(element.parentElement,depth-1);
				}

		}

		view.gallery.addEventListener('click', function (event) {
				let imId=findElementValue(event.target,3);
				if(imId){
					gsc.showDishDetailsScreen(imId);
				}		
			
		});

	}
}