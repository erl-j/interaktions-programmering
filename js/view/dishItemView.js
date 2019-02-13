class DishItemView {
    constructor(container, model,{name,image,id}) {
        this.container = container;
        this.model = model;

        this.container.innerHTML = `
        <div class="border border-dark">  
            <div id="dishCard" class="img-fluid"></div>
            <h6 id="dishName" class="text-center pt-2">

            </h6>
        </div>
        `;
        this.id=id;

        this.dishImage = container.querySelector("#dishCard");
        this.dishName = container.querySelector("#dishName");

        this.name=name;
        this.image=image;

        this.update();
    }

    update(){
        this.dishImage.innerHTML = "<img class=\"forceRatio\" src=\""+this.image + "\" value=\""+this.id+"\"/>";
        let dshName=this.name;
        let charLim=18;
        if(dshName.length>charLim){
            dshName=dshName.substring(0,charLim-3)+"...";
        }
        this.dishName.innerHTML = dshName;
        this.container.setAttribute("value",this.id);
    }

    hide() {
        this.container.style.display = "none";
    }

    show() {
        this.container.style.display = "initial";
    }




    // in lab 2, the Observer update method will come here
}