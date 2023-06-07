import { MenuItem } from "./item.js";

export class CheckboxItem extends MenuItem{
    constructor(){
        super();
    }
    connectedCallback(){
        this.setShadowRoot();
    }
    setShadowRoot(){
        this.shadowRoot.innerHTML=`
        <link rel='stylesheet' href='./style.css'>
        <li class='menu-item'>
            <slot name='input'>checkbox</slot>
            <slot name='label'>label</slot>
        </li>`;
    }

    renderHTML(){
        this.innerHTML=`
            <input slot='input' type='checkbox' value='${this.name}' value='${this.value}' id='${this.name}_${this.value}'>
            <label slot='label' for='${this.name}_${this.value}'>${this.label}</label>`;
    }

}