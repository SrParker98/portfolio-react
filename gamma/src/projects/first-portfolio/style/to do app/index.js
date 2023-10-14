/*User story: I can add a new task
User story: I can complete a task -- completada
User story: I can toggle between All, Active and Completed
User story: I can remove one or all tasks under the Completed tab
User story (optional): Store the data in local storage that when I refresh the page I can still see my progress
*/
const input = document.getElementById("tarea");
const Btn = document.getElementById("añadir");
const ul = document.querySelector(".lista");

console.log("Hola, bienvenido a mi app to do, si estás leyendo esto seguramente seas empresa o frontend, así que, Mandame un mail y colaboremos en algun proyecto! sergixu26@gmail.com")

Btn.addEventListener('click', (e) => {
    e.preventDefault();

    const texto = input.value
    
     
    
    if(texto !== ""){
        
        const li = document.createElement("li");
        const p = document.createElement("p");
        
        p.textContent = input.value

        ul.appendChild(li);
        li.appendChild(p);
        li.appendChild(eliminar());    
        li.appendChild(completada());
             
         } 
    }
   );

   function eliminar(){
    const crearboton = document.createElement("button");
    crearboton.className = "eliminar"
    crearboton.textContent = "X"

    crearboton.addEventListener("click",(e)=>{
        const item = e.target.parentElement;
        
        ul.removeChild(item);

        const items = document.querySelector("li")

    });
    return crearboton;
   }
  

   function completada(){
    const crearboton = document.createElement("button");
    crearboton.className = "completada"
    crearboton.textContent = "completada"

    crearboton.addEventListener("click",(e)=>{
        const item = e.target.parentElement;
        const items = document.querySelector("li")
        const completadas = document.querySelector(".completadas")
        

        crearboton.addEventListener("click",(e)=>{

          
            ul.removeChild(item)
            completadas.appendChild(item)
            item.removeChild(crearboton)
            item.lastChild.remove()
            

        })

    });
    return crearboton;
   }
  
   
   