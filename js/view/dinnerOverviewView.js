class DinnerOverviewView {
   constructor(container, model) {
      this.container = container;
      this.model = model;

      this.numberOfGuests = container.querySelector("#numberOfGuests");
      this.numberOfGuests.innerHTML = this.model.getNumberOfGuests();

      this.menuGallery=this.container.querySelector("#menuGallery");
      
      this.dishItemViews=[];

      let fullMenu=model.getFullMenu();
      let i=0;
      for(let d of fullMenu){
         let id=d.id;
         this.menuGallery.innerHTML+=("<div class=\"imageBox\" id=\"dishItem"+i+"\"></div>");
         this.dishItemViews.push(new DishItemView(this.container.querySelector("#dishItem"+i),model,id));
         i++;
      }


      // this.menuGallery.innerHTML=(
      //    function (){
      //       let out="";
      //       let fullMenu=model.getFullMenu();
      //       for(let d of fullMenu){
               
      //          let imStr=d.image;
      //          out+="<img class=\"imageBox\" src=\"images/"+imStr+"\"/>"; 
      //       }
      //       return out;

      //    })();

   }

}