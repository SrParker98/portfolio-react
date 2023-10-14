const items = document.querySelector('.ul-menu')
const burgermenu = document.querySelector('.burger-menu')

const activarmenu =  ()=>{
   burgermenu.addEventListener("click",()=>{
    
    items.classList.toggle('active')}
    

   );}


activarmenu()


items.addEventListener("click",()=>{

    activarmenu();
})
