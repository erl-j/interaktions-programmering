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

    }

    set(id) {
        this.id = id;
        this.update();
    }

    update() {
        this.ingredientEntries.innerHTML = "";
        if (this.id) {
            let nGuests = this.model.getNumberOfGuests();
            this.model.getIngredients(this.id)
                .then(ings => {
                    this.totalCost.innerHTML = ings.length;
                    ings.forEach(i => {
                        console.log(i.name);
                        this.ingredientEntries.innerHTML += `<tr>
                    <td>` + i.amount.toFixed(2) + `</td>
                    <td>` + i.unit + `</td>
                    <td>` + i.name + `</td>
                    <td>` + 1 * nGuests + `</td>
                </tr>`;
                    })
                });
            this.numberOfGuests.innerHTML = nGuests;
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