
export class MenuItem extends HTMLElement{
    static{
        import('./CheckboxItem.js').then(dim=>{
            customElements.define('checkbox-item',dim.CheckboxItem);
        });
        import('./RadioItem.js').then(dim=>{
            customElements.define('radio-item',dim.RadioItem);
        });
    }
    /** returns  */
    static Item(){
        return MenuItem;
    }
    static Checkbox(){

        return CheckboxItem;
    }
    static RadioItem(){
        return RadioItem;
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'});

    }
    connectedCallback(){
        this.shadowRoot.innerHTML=`<slot></slot>`;
        this.renderHTML();

    }
    get name(){return this.getAttribute('name')??this.closest('[name]')?.getAttribute('name')}
    get value(){return this.getAttribute('value')??this.closest('[value]')?.getAttribute('value')}
    get label(){return this.getAttribute('label')??this.closest('[label]')?.getAttribute('label')}
    
    renderHTML(){
        this.shadowRoot.innerHTML=`
        <link rel='stylesheet' href='./style.css'>
        <li class='menu-item'>
            <button class='button'><slot></slot></button>
        </li>`;
    }
}