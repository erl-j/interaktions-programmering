class DinnerSummaryView {
   constructor(container, model) {
      this.container = container;
      this.model = model;

   

      this.container.innerHTML=`<h3>My dinner</h3>
		<div class="frm-group">
			People:
			<span id="numberOfGuests"></span>
			<div class="btn-group">
				<button id="minusGuest" class="btn"><small><span class="glyphicon glyphicon-minus"></span></button>
				<button id="plusGuest" class="btn"><span class="glyphicon glyphicon-plus"></span></button>
			</div>
		</div>
		<table class="table table-dark">
			<thead>
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
		<button id="confirmDinner" class="btn">Confirm Dinner</button>`;

      this.numberOfGuests = container.querySelector("#numberOfGuests");
      this.numberOfGuests.innerHTML = this.model.getNumberOfGuests();

      this.totalCost = container.querySelector("#totalCost");
      this.totalCost.innerHTML = this.model.getTotalMenuPrice();

      this.plusButton = container.querySelector("#plusGuest");
      this.minusButton = container.querySelector("#minusGuest");

      this.confirmDinnerButton = container.querySelector("#confirmDinner");



      this.dishList = container.querySelector("#dishList");

      let dishListHtml = (
         function () {
            let out = "";
            let fullMenu=model.getFullMenu();
            for(let d of fullMenu) {
               out += "<tr><td>" + d['name'] + "</td><td>" + model.getDishPrice(d["id"]) + "</td></tr>";
            }
            return out;

         })();


      this.dishList.innerHTML = dishListHtml;


   }

}