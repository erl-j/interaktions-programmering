class DishDetailsView {
	constructor(container, model) {

		this.container = container;
		this.model = model;

        this.dishTitle=container.querySelector("#dishTitle");

        this.dishImage=container.querySelector("#dishImage");

        this.dishDescription=container.querySelector("#dishDescription");

        this.update("1");
    }
    
    update(id){

        let dsh=this.model.getDish(id);
    
        this.dishTitle.innerHTML=dsh.name;

        this.dishImage.innerHTML="<img src=\"images/"+dsh.image+"\"/>";

        this.dishDescription.innerHTML=dsh.description;
    }

	// in lab 2, the Observer update method will come here
}