const sideMenu=document.querySelector('#sideMenu')
const navBar=document.querySelector('nav');
const navLinks=document.querySelector('nav ul');

function openMenu(){
    sideMenu.style.transform='translateX(-16rem)'
}
function closeMenu(){
    sideMenu.style.transform='translateX(16rem)'
}

window.addEventListener('scroll',()=>{
    if(scrollY>50){
        navBar.classList.add('bg-gray','bg-opacity-50','backdrop-blur-lg','shadow-sm');
        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50')
    }else{
        navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
        navLinks.classList.add('bg-tranparent','bg-opacity-50')
    }
})

const theme=document.querySelector('#mode');
const body=document.body;
const navUL=document.querySelector('#navUl')

theme.addEventListener('click',()=>{
    body.classList.toggle('bg-[#112D5A]');
    body.classList.toggle('text-white');
    
    if(theme.classList.contains('fa-moon')){
        theme.classList.remove('fa-moon');
        theme.classList.add('fa-sun');
    }else{
        theme.classList.remove('fa-sun');
        theme.classList.add('fa-moon')
    }
    
})
const welcomeText=document.querySelector("#welcome_text")
function glichEffect(){


    gsap.to("#welcome_text", {
        duration: 0.1,
        x: () => (Math.random() - 0.5) * 4,
        y: () => (Math.random() - 0.5) * 4,
        rotation: () => (Math.random() - 0.5) * 10,
        textShadow: () => `${Math.random() * 5}px ${Math.random() * 5}px red, ${Math.random() * -5}px ${Math.random() * -5}px blue`,
        repeat: -1,
        yoyo: true,
        ease:"power1.inOut"
      });
}
glichEffect();
 
welcomeText.addEventListener('mouseenter',()=>glichEffect());
welcomeText.addEventListener('mouseleave',()=>gsap.killTweenOf(text))
