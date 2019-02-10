class IngredientsView {
	constructor(container, model) {

		this.container = container;
        this.model = model;
        
        this.container.innerHTML=`
        <div class="panel panel_default">
            <div class="panel-body">
                Ingredients for <span id="numberOfGuests"></span> people
                <table class="table table-dark">
                    <tbody id="ingredientEntries"></tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>SEK</td>
                            <td id="totalCost"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        `;

        this.numberOfGuests=container.querySelector("#numberOfGuests");

        this.ingredientEntries=container.querySelector("#ingredientEntries");

        this.totalCost=container.querySelector("#totalCost");

        this.update();
    }
    
    update(){
        let id=1;
        let nGuests=this.model.getNumberOfGuests();
        this.numberOfGuests.innerHTML=nGuests;
        let dsh=this.model.getDish(id);
        this.ingredientEntries.innerHTML=(function()
        {
            let out="";
            for(let i of dsh.ingredients){
                out+=`
                <tr>
                    <td>`+i.quantity+`</td>
                    <td>`+i.unit+`</td>
                    <td>`+i.name+`</td>
                    <td>SEK</td>
                    <td>`+i.price*nGuests+`</td>
                </tr>              
                `;
            }
            return out;
        })();

        this.totalCost.innerHTML=this.model.getDishPrice(id);
    }

    hide() {
        this.container.style.display = "none";
     }
  
     show() {
        this.container.style.display = "initial";
     }

	// in lab 2, the Observer update method will come here
}