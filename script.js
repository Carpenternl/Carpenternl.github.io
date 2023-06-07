
import { MainHtml } from "./js/components/MainHtml.js";
export const x=(()=>{
    
    customElements.define('main-html',MainHtml);
    document.querySelectorAll('main-html').forEach(e=>customElements.upgrade(e));

    const menuItems = document.querySelectorAll(`menu-item`);
    if(menuItems.length>0){
        import(`./js/components/menu/item.js`).then(impObj=>{
            customElements.define('menu-item',impObj.MenuItem);
        })
        menuItems.forEach(item=>customElements.upgrade(item));
    }
    const bars = document.querySelectorAll('menu-bar');
    if(bars.length>0){
        import(`./js/components/menu/bar.js`).then(barImport=>{
            barImport.MenuBar.define();
            barImport.MenuBar.upgrade();
        });
    }
})()