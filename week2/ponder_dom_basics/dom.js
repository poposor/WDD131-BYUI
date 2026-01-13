
let htmlText = [];
let cssText = [];
let jsText = [];
const topic = document.getElementById('topics');
let htmlH1 = topic.children[0];
htmlH1.classList.add('html');
let htmlP = topic.children[1];
htmlP.classList.add('html');
let cssH1 = topic.children[2];
cssH1.classList.add('css');
let cssP = topic.children[3];
cssP.classList.add('css');
let jsH1 = topic.children[4];
jsH1.classList.add('js');
let jsP = topic.children[5];
jsP.classList.add('js');

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    let el = document.getElementById('title');

    if(codeValue === 'html'){
        let htmls = document.getElementsByClassName('html');
        for(let i = 0; i < htmls.length; i++){
            htmlText[i] = htmls[i].innerText;
            console.log(htmlText);
            htmls[i].innerText = "";
        }
        
        el.innerText = "CSS, and JS";
    } else if(htmlText.length > 0){
        let htmls = document.getElementsByClassName('html');
        for(let i = 0; i < htmls.length; i++){
            htmls[i].innerText = htmlText[i];
        }
    } 
    
    if(codeValue === 'css'){
        let csss = document.getElementsByClassName('css');
        for(let i = 0; i < csss.length; i++){
            cssText[i] = csss[i].innerText;
            console.log(cssText);
            csss[i].innerText = "";
        }

        el.innerText = "HTML, and JS";
    } else if(cssText.length > 0){
        let csss = document.getElementsByClassName('css');
        for(let i = 0; i < csss.length; i++){
            csss[i].innerText = cssText[i];
        }
    }
    
    
    if(codeValue === 'js'){
        let jss = document.getElementsByClassName('js');
        for(let i = 0; i < jss.length; i++){
            jsText[i] = jss[i].innerText;
            console.log(jsText);
            jss[i].innerText = "";
        }

        el.innerText = "HTML, CSS";
    } else if(jsText.length > 0){
        let jss = document.getElementsByClassName('js');
        for(let i = 0; i < jss.length; i++){
            jss[i].innerText = jsText[i];
        }
    }
});
                