class DishItemView {
    constructor(container, model,{name,image}) {
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

        this.name=name;
        this.image=image;

        this.update();
    }

    update(){
        this.dishImage.innerHTML = "<img class=\"forceRatio\" src=\""+this.image + "\"/>";
        let dshName=this.name;
        let charLim=18;
        if(dshName.length>charLim){
            dshName=dshName.substring(0,charLim-3)+"...";
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