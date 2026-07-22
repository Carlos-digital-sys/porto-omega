/*=========================================
PORTO ÔMEGA
EVILÁSIO PRODUTOS NATURAIS
=========================================*/

const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-mobile");

menuButton.addEventListener("click",()=>{

    menu.classList.toggle("active");

    if(menu.classList.contains("active")){

        menuButton.innerHTML='<i class="fas fa-times"></i>';

    }else{

        menuButton.innerHTML='<i class="fas fa-bars"></i>';

    }

});

/*=========================================
FECHAR MENU AO CLICAR
=========================================*/

document.querySelectorAll(".menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");

        menuButton.innerHTML='<i class="fas fa-bars"></i>';

    });

});

/*=========================================
HEADER
=========================================*/

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.boxShadow="0 10px 35px rgba(0,0,0,.08)";
        header.style.background="rgba(255,255,255,.98)";

    }else{

        header.style.boxShadow="none";
        header.style.background="rgba(255,255,255,.95)";

    }

});

/*=========================================
BOTÃO VOLTAR TOPO
=========================================*/

const scrollButton=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollButton.classList.add("show");

    }else{

        scrollButton.classList.remove("show");

    }

});

scrollButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/*=========================================
ANIMAÇÃO AO ROLAR
=========================================*/

const elements=document.querySelectorAll(

".benefit-card,.product-image,.product-content,.gel-image,.gel-content,.video-card,.number-item,.reseller-item,.contact-section"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.15

});

elements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(45px)";

el.style.transition=".8s";

observer.observe(el);

});

/*=========================================
SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=========================================
CARREGAMENTO
=========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

/*=========================================
EFEITO HOVER PRODUTOS
=========================================*/

document.querySelectorAll(".product-image img,.gel-image img").forEach(img=>{

img.addEventListener("mousemove",(e)=>{

const x=e.offsetX;
const y=e.offsetY;

img.style.transform=`perspective(900px)
rotateY(${(x-150)/30}deg)
rotateX(${-(y-150)/30}deg)
scale(1.04)`;

});

img.addEventListener("mouseleave",()=>{

img.style.transform="perspective(900px) rotateY(0) rotateX(0) scale(1)";

});

});

/*=========================================
FINAL
=========================================*/

console.log("Porto Ômega carregado com sucesso.");