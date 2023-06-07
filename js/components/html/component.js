export class HtmlComponent extends HTMLElement{
    constructor(){
        super();
        if(this.#attachShadow!==false){
            this.attachShadow({mode:'open'});
        }

    }
}