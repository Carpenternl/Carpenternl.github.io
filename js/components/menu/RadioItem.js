import { MenuItem } from "./item.js";

export class RadioItem extends MenuItem{
    constructor(){
        super();

    }
    connectedCallback(){
        this.shadowRoot.innerHTML=`
        <li style='display:block'>
            <slot name='input'>
                <input type='radio' name='${this.name}' value='${this.value}' id='${this.name}_${this.value}'>
            </slot>
            <slot name='label'>
                <label for='${this.name}_${this.value}' >${this.label}</label>
            </slot>
        </li>
        `;
    }
    get type(){return this.getAttribute('type')}
    renderHTML(){
        this.innerHTML=`
                <input slot='input' type='radio' name='${this.name}' value='${this.value}' id='${this.name}_${this.value}'>
                <label slot='label' for='${this.name}_${this.value}' >${this.label}</label>`;
    }

}