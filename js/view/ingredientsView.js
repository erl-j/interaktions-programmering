class IngredientsView {
    constructor(container, model) {

        this.container = container;
        this.model = model;

        this.container.innerHTML = `
        <div class="ml-2 mr-2">
            <h4>
            Ingredients for <span id="numberOfGuests"></span> people
            </h4>
            <table class="table border">
                <tbody id="ingredientEntries"></tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td id="totalCost"></td>
                    </tr>
                </tfoot>
            </table>
        </div>
        `;

        this.numberOfGuests = container.querySelector("#numberOfGuests");

        this.ingredientEntries = container.querySelector("#ingredientEntries");

        this.totalCost = container.querySelector("#totalCost");

        this.id = null;

        this.update();

    }

    set(id) {
        this.id = id;
        this.update();
    }

    update() {
        if (this.id != null) {
            let nGuests = this.model.getNumberOfGuests();
            this.numberOfGuests.innerHTML = nGuests;
            let dsh = this.model.getDish(this.id);
            this.ingredientEntries.innerHTML = (function () {
                let out = "";
                for (let i of dsh.ingredients) {
                    out += `
                <tr>
                    <td>` + i.quantity + `</td>
                    <td>` + i.unit + `</td>
                    <td>` + i.name + `</td>
                    <td>` + i.price * nGuests + `</td>
                </tr>              
                `;
                }
                return out;
            })();

            this.totalCost.innerHTML = this.model.getDishPrice(this.id);
        }
    }

    hide() {
        this.container.style.display = "none";
    }

    show() {
        this.container.style.display = "initial";
    }

    // in lab 2, the Observer update method will come here
}