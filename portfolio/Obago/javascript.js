const slideNav1 = document.getElementById("slideNav1");
const slideNav2 = document.getElementById("slideNav2");
const slideNav3 = document.getElementById("slideNav3");
const slideNav4 = document.getElementById("slideNav4");
const slideNav5 = document.getElementById("slideNav5");
const slideNav6 = document.getElementById("slideNav6");
const slideNav7 = document.getElementById("slideNav7");
const slideNav8 = document.getElementById("slideNav8");
const slideNav9 = document.getElementById("slideNav9");
const slideNav = document.querySelectorAll(".slideNav");
const sectionH1 = document.querySelector("section h1");

function consoleWara(e){
    slideNav1.style.opacity="0.1";
    slideNav2.style.opacity="0.1";
    slideNav3.style.opacity="0.1";
    slideNav4.style.opacity="0.1";
    slideNav5.style.opacity="0.1";
    slideNav6.style.opacity="0.1";
    slideNav7.style.opacity="0.1";
    slideNav8.style.opacity="0.1";
    slideNav9.style.opacity="0.1";
    e.target.style.opacity="1";

    if(e.target.id==="slideNav1"){
        sectionH1.innerHTML ="ALEM MAR";
    } else if(e.target.id==="slideNav2"){
        sectionH1.innerHTML ="CASTELO DE NATA";
    }else if(e.target.id==="slideNav3"){
        sectionH1.innerHTML ="BOOKWORM";
    }else if(e.target.id==="slideNav4"){
        sectionH1.innerHTML ="JFR";
    }else if(e.target.id==="slideNav5"){
        sectionH1.innerHTML ="RODDING SHOP";
    }else if(e.target.id==="slideNav6"){
        sectionH1.innerHTML ="O BAGO";
    }else if(e.target.id==="slideNav7"){
        sectionH1.innerHTML ="BUILDINGME";
    } else if(e.target.id==="slideNav8"){
        sectionH1.innerHTML ="ETSY, AMAZON & KDP";
    } else if(e.target.id==="slideNav9"){
        sectionH1.innerHTML ="OTHER";
    }
    else {
        return 0
    }
}
slideNav1.addEventListener("click", consoleWara);
slideNav2.addEventListener("click", consoleWara);
slideNav3.addEventListener("click", consoleWara);
slideNav4.addEventListener("click", consoleWara);
slideNav5.addEventListener("click", consoleWara);
slideNav6.addEventListener("click", consoleWara);
slideNav7.addEventListener("click", consoleWara);
slideNav8.addEventListener("click", consoleWara);
slideNav9.addEventListener("click", consoleWara);