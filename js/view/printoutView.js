class PrintoutView {
    constructor(container, model) {
        this.container = container;
        this.model = model;

        this.container.innerHTML = `
        <div id="dishList">
        
        </div>
        `;

        this.dishList = this.container.querySelector("#dishList");

        this.update();
    }

    update() {

        this.dishList.innerHTML = (() => {
            let out = "";
            let fullMenu = this.model.getFullMenu();
            for (let dsh of fullMenu) {
                    out += `
                    <div>
                        <img class="forceRatio" src="` + dsh.image + `"></img>
                        <div>
                            <h4>` + dsh.title + `</h4>
                            <p>` + dsh.instructions + `</p>
                        </div>
                        <div>
                            <h4>Preparation</h4>
                            <p>` + dsh.instructions + `</p>
                        </div>
                    </div>
                    `;
            }
            return out;
        })();
        console.log(this.dishList.innerHTML);
    }

    hide() {
        this.container.style.display = "none";
    }

    show() {
        this.container.style.display = "initial";
    }


}