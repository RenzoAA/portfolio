export default function navBar(menuBtn){
    const d = document;
    const btnMenu = document.querySelector(menuBtn),
        menu = document.getElementById('menu');
    d.addEventListener('click',e=>{
        if(e.target.matches(menuBtn)||e.target.matches(`${menuBtn} *`)){
            menu.classList.toggle('menu-active')
        }
    })
}