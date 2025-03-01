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


 



document.addEventListener("DOMContentLoaded",function(){
    let ProgressText=document.querySelector('#progress-text');
    let progressCircle=document.querySelector("#progress-circle");
    let content=document.querySelector("#content");
    let loadingScreen=document.querySelector("#loadingScreen");
    let text=document.querySelector('.text')
    let progress=0;
    let interval=setInterval(()=>{
        progress+=1;
        ProgressText.innerHTML=progress+"%";
        progressCircle.style.strokeDashoffset=502-(502*progress)/100;
        if(progress>=30){
            let yelloIntesnity=Math.min((progress-30)*3,255);
            loadingScreen.style.background=`linear-gradient(to bottom,rgb(255,${yelloIntesnity},0),#f8f8f8)`;
            text.innerHTML="Just Reaching.........."
        }

    
        if(progress>=100){
            clearInterval(interval);
            loadingScreen.style.display='none';
            content.style.display="block";
        }
    },50)
})
