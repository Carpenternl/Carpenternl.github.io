import { MenuItem } from "./item.js";

export class MenuBar extends HTMLElement{
    static define(name='menu-bar'){customElements.define(name,MenuBar)}
    /** peforms a customElements.upgrade() on all elements */
    static upgrade(name='menu-bar'){
        document.querySelectorAll(name).forEach(e=>customElements.upgrade(e));
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'});

    }
    connectedCallback(){
        this.shadowRoot.innerHTML=`
        <link rel='stylesheet' href='./style.css'>
        <menu class='menu-bar'><slot>
        </slot></menu>`;


    }

    addItem(menuItemType,menuItem=MenuItem){
        menuItem[menuItemType]
    }   
}