class DishDetailsView {
    constructor(container, model) {

        this.id = null;

        this.container = container;
        this.model = model;

        this.container.innerHTML = `
        <div class="ml-2 mr-2">
            <h4 id="dishTitle"></h4>
            <p>
                <div id="dishImage" class="floatRight"></div>
                <span id="dishDescription"></span>
            </p>
                <button id="addButton" class="btn btn-secondary">add to menu</button>
                <button id="backButton" class="btn btn-secondary">back to search</button>
        </div>
        `;

        this.dishTitle = container.querySelector("#dishTitle");

        this.dishImage = container.querySelector("#dishImage");

        this.dishDescription = container.querySelector("#dishDescription");

        this.addButton = container.querySelector("#addButton");

        this.backButton = container.querySelector("#backButton");
    }

    hide() {
        this.container.style.display = "none";
    }

    show() {
        this.container.style.display = "initial";
    }

    set(id) {
        this.id = id;
        this.update();
    }

    update() {
        this.dishTitle.innerHTML="Loading...";
        this.dishDescription.innerHTML="Loading...";
        if (this.id != null) {
            this.model.getDish(this.id).then(dsh => {
                this.dishTitle.innerHTML = dsh.title;
                this.dishImage.innerHTML = "<img class='forceRatio' src=\"" + dsh.image + "\"/>";
                this.dishDescription.innerHTML = dsh.instructions;
            }).catch(error=>this.dishTitle.innerHTML="COULDN'T REACH API")
        }
    }

    // in lab 2, the Observer update method will come here
}

class DishDetailsViewController {
    constructor(view, model, gsc) {
        view.backButton.addEventListener("click", () => gsc.showSelectDishScreen());
        view.addButton.addEventListener("click", () => {
            model.addDishToMenu(view.id).then(gsc.showSelectDishScreen());
            
        });
    }

}