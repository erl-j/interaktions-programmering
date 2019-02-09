class DishItemView {
    constructor(container, model,id) {
        this.container = container;
        this.model = model;

        this.container.innerHTML = `
        
        <div class>
            
            <div id="dishCard" class="img-fluid"></div>

            <span id="dishName"></span>

        </div>
            
  
        `;

        this.dishImage = container.querySelector("#dishCard");
        this.dishName = container.querySelector("#dishName");

        let dsh = this.model.getDish(id);
        let dshName = dsh.name;
        let imStr = dsh.image;
        this.dishImage.innerHTML="<img src=\"images/"+imStr+"\"/>";
        this.dishName.innerHTML=dshName;
    
    }




    // in lab 2, the Observer update method will come here
}