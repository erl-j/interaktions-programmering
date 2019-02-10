class DinnerOverviewView {
   constructor(container, model) {
      this.container = container;
      this.model = model;

      this.container.innerHTML = `
      <div class="topBar">
					<div>
						<h2 class="floatLeft marg">
							My dinner:
							<span id="numberOfGuests"></span>
							people
						</h2>
						
					</div>

					<button id="backButton" class="btn btn-secondary marg">Go back</button>
		</div>
		<div id="menuGallery"></div>
		<div>
			<button class="btn btn-secondary">Print full recipe</button>
		</div>
      `;

      this.backButton=this.container.querySelector("#backButton");
      this.numberOfGuests = this.container.querySelector("#numberOfGuests");
      this.menuGallery = this.container.querySelector("#menuGallery");

      this.update();
   }

   update(){
      this.numberOfGuests.innerHTML = this.model.getNumberOfGuests();

      this.dishItemViews = [];
      let fullMenu = this.model.getFullMenu();
      this.menuGallery.innerHTML="";

      let i = 0;
      for (let d of fullMenu) {
         let id = d.id;
         this.menuGallery.innerHTML += ("<div class=\"imageBox\" id=\"dishItem" + i + "\"></div>");
         this.dishItemViews.push(new DishItemView(this.container.querySelector("#dishItem" + i), this.model, id));
         i++;
      }
   }

   hide() {
      this.container.style.display = "none";
   }

   show() {
      this.container.style.display = "initial";
   }

}

class DinnerOverviewViewController{
   constructor(view,model,gsc){
      view.backButton.addEventListener("click",()=>gsc.showSelectDishScreen());

   }
}