const lightLogo = "./images/byui-logo-blue.webp";
const darkLogo = "./images/byui-logo-white.png";

let selectElem = document.getElementById('themeDropdown');
selectElem.addEventListener('change', function(){
    let themeValue = selectElem.value;
    console.log(themeValue);


    if(themeValue === 'dark'){
        document.body.style.backgroundColor = '#484848';
        document.body.style.color = 'white';
        document.getElementById('logo').src = darkLogo;
    }
    else if(themeValue === 'light'){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.getElementById('logo').src = lightLogo;
    }
});