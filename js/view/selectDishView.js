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
					</div>
				</div>
				<div class="scrollable" id="gallery"></div>
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

		view.gallery.addEventListener("load",searchAction());

		// view.searchButton.addEventListener("click",
		// 	() => searchAction());

		 view.searchTerms.addEventListener("keypress",
		 	() => searchAction());

		// view.container.addEventListener("keypress",
		// 	(e) => {
		// 		if(e.keyCode==13){
		// 			searchAction();
		// 		}
		// 	});

		view.gallery.addEventListener('click', function (event) {
			if (event.target.tagName == "IMG") {
				let imId = event.target.parentElement.parentElement.parentElement.getAttribute("value");
				gsc.showDishDetailsScreen(imId);
			}
		});

	}
}