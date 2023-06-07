export class MainHtml extends HTMLElement{
    static get observedAttributes(){return['src']}
    attributeChangedCallback(attrName,oldV,newV){
        if(attrName=='src'){
            this.setSrcUrl(this.getUrl(newV));
        }
    }
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.links.forEach(a=>{
            console.log(a);
            a.addEventListener('click',this.clickE);
        });
    }
    get links(){
        return Array.from(document.querySelectorAll(`a[target='#${this.id}']`));
    }
    getUrl(v){return `./${v}.html`;}
    get url(){
        return ("./"+this.getAttribute('src')+".html");
    }
    clickE(e){
        e.preventDefault();
        let e_target = e.target;
        const ancherE = e_target instanceof HTMLAnchorElement?e_target:null;
        const targetIdSelector = ancherE.target;
        const target = document.querySelector(`${targetIdSelector}`);
        let targetHref = ancherE.getAttribute('href');
        targetHref = targetHref.replace(/\.href/,'');
        target.setAttribute('src',targetHref);
        return false;
    }
    setSrcUrl(srcUrl){
        console.log('URL',srcUrl);
        fetch(srcUrl).then(
            htmlFile=>htmlFile.text()
        ).then(htmlString=>{
            console.log(htmlString);
            const parcer = new DOMParser();
            return parcer.parseFromString(htmlString,"text/html");
        }).then(htmlDoc=>{
            return htmlDoc.querySelector('main,section,article');
        }).then(mainTemplate=>{
            console.log(mainTemplate);
            this.innerHTML=mainTemplate?.outerHTML??'ERR';
        });
    }
    connectedCallback(){
        console.log(this.url);
        this.shadowRoot.innerHTML=`<slot></slot>`;
        this.setSrcUrl(this.url);
    }
}