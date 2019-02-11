class DinnerSummaryView {
	constructor(container, model) {
		this.container = container;
		this.model = model;

		this.container.innerHTML = `
		<div class="ml-2">
			<h4>My dinner</h4>
				<h6 class="btn"> 
					People:
					<span id="numberOfGuests"></span>
				</h6>
				<div class="btn-group">
					<button id="minusGuest" class="btn btn-outline-dark btn-sm">-</span></button>
					<button id="plusGuest" class="btn btn-outline-dark btn-sm">+</span></button>
				</div>
		</div>
		<table class="table">
			<thead class="thead-dark">
				<tr>
					<th scope="col">Dish name</th>
					<th scope="col">Cost</th>
				</tr>
			</thead>
			<tbody id="dishList"></tbody>
			<tfoot>
				<tr>
					<td></td>
					<td id="totalCost"></td>

				</tr>
			</tfoot>
		</table>
		<button id="confirmDinner" class="btn btn-outline-dark btn-block">Confirm Dinner</button>`;

		this.numberOfGuests = container.querySelector("#numberOfGuests");
		this.totalCost = container.querySelector("#totalCost");
		this.plusButton = container.querySelector("#plusGuest");
		this.minusButton = container.querySelector("#minusGuest");
		this.confirmDinnerButton = container.querySelector("#confirmDinner");
		this.dishList = container.querySelector("#dishList");

		this.update();
	}

	update() {
		this.numberOfGuests.innerHTML = this.model.getNumberOfGuests();
		this.totalCost.innerHTML = this.model.getTotalMenuPrice();

		this.dishList.innerHTML = (
			function (model) {
				let out = "";
				let fullMenu = model.getFullMenu();
				for (let d of fullMenu) {
					out += "<tr><td>" + d['name'] + "</td><td>" + model.getDishPrice(d["id"]) + "</td></tr>";
				}
				return out;

			})(this.model);;
	}

	hide() {
		this.container.style.display = "none";
	}

	show() {
		this.container.style.display = "initial";
	}

}

class DinnerSummaryViewController {
	constructor(view, model, gsc) {
		view.plusButton.addEventListener("click",
			() => model.setNumberOfGuests(model.getNumberOfGuests() + 1));

		view.minusButton.addEventListener("click",
			() => model.setNumberOfGuests(model.getNumberOfGuests() - 1));

		view.confirmDinnerButton.addEventListener("click",
			() => gsc.showDinnerOverviewScreen());
	}
}