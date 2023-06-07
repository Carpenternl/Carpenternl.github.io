export class Component{
    static #LIST=[
        {
            tag:'checkbox-item',
            class:'CheckboxItem',
            file:'./components/menu/CheckboxItem.js',
        },
        {
            tag:'radio-item',
            class:'RadioItem',
            file:'./components/menu/RadioItem.js'
        },
        // {
        //     tag:'main-html',
        //     class:'DocumentMain',
        //     file:'./components/'
        // }

    ];
    static {
        this.#LIST.forEach(element => {
            if(document.querySelectorAll(element.tag).length>0){
                import(element.file).then(im=>{
                    customElements.define(element.tag,element.class);
                });
            }
        });
    }
}