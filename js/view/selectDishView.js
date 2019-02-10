class SelectDishView {
	constructor(container, model) {
		this.container = container;
		this.model = model;

		this.container.innerHTML = `<div>
		<div class="topBar">
			<h3>Find a dish</h3>
			<input class="marg" id="searchTerms" value="Enter key words"></input>
				<div class="btn-group dropdown marg" id="dropdown">
				</div>
				<button id="searchButton" class="btn btn-secondary">Search</button>
			</div>
			<div id="gallery">
			</div>
		</div>	
		`;

		//this.dropdown = container.querySelector("#dropdown");
		this.searchButton = container.querySelector("#searchButton");
		this.searchTerms = container.querySelector("#searchTerms");

		this.gallery = container.querySelector("#gallery");
		this.galleryDishes = [];
	}

	update() {
		this.dishItemViews = [];
		this.gallery.innerHTML = "";
		let i = 0;
		for (let d of this.galleryDishes) {
			this.gallery.innerHTML += ("<div class=\"imageBox\" id=\"dishItem" + i + "\" value=" + d.id + "></div>");
			this.dishItemViews.push(new DishItemView(this.container.querySelector("#dishItem" + i), this.model, d.id));
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
			view.setGallery(model.searchDishes(view.searchTerms.value));
		};

		view.searchButton.addEventListener("click",
			() => searchAction());

		view.container.addEventListener("keypress",
			(e) => {
				if(e.keyCode==13){
					searchAction();
				}
			});

		view.gallery.addEventListener('click', function (event) {
			if (event.target.tagName == "IMG") {
				let imId = event.target.parentElement.parentElement.parentElement.getAttribute("value");
				gsc.showDishDetailsScreen(imId);
			}
		});

	}
}