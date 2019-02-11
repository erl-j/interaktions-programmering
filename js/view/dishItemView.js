class DishItemView {
    constructor(container, model,id) {
        this.container = container;
        this.model = model;

        this.container.innerHTML = `
        <div class="border border-dark">
            
            <div id="dishCard" class="img-fluid"></div>

            <h6 class="text-center pt-2">
                <span  id="dishName"></span>
            </h6>

        </div>
        `;

        this.dishImage = container.querySelector("#dishCard");
        this.dishName = container.querySelector("#dishName");

        this.id=id;

        this.update();
    }

    update(){
        let dsh = this.model.getDish(this.id);
        let dshName = dsh.name;
        let imStr = dsh.image;
        this.dishImage.innerHTML = "<img src=\"images/" + imStr + "\"/>";
        if(dshName.length>17){
            dshName=dshName.substring(0,13)+"...";
        }
        this.dishName.innerHTML = dshName;
    }

    hide() {
        this.container.style.display = "none";
    }

    show() {
        this.container.style.display = "initial";
    }




    // in lab 2, the Observer update method will come here
}