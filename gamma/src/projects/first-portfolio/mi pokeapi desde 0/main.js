
const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");
const frasesOak = [
                    'Dr:Oak:¡Estas seguro?, Esta podria ser la decisión más importante de tu vida!',
                    'Dr.Oak:¡OOOHHH! Las leyendas sobre este pokemon son terrorificas!',
                    'Dr.Oak: ¿Estás seguro? Elige Rápido que se enfria la cena!'
                ];

let offset = 1
let limit = 7
console.log(window)
const item = document.querySelector('.lastpokemon')
const cartas = document.getElementById('cartas')
const anterior = document.getElementById("anterior")
const siguiente = document.getElementById("siguiente")

anterior.addEventListener("click",()=>{

    offset -= 8;
    if(offset != 1){
        console.log(offset)
      eliminarprimeros(cartas);
    }

    if(offset === -7) 
        offset = 1;
        fetchpokemons(offset, limit)
    }
    
        );

siguiente.addEventListener("click", ()=>{

    offset += 8; 
    eliminarprimeros(cartas)
    
    console.log(offset)
    fetchpokemons(offset , limit)

})

console.log(anterior)
button.addEventListener("click",(e)=>{
    e.preventDefault();

    while (pokemonContainer.firstChild) {
        pokemonContainer.removeChild(pokemonContainer.firstChild)
        
      }
      traerpokemon(input.value);

});

function traerpokemon(pokemon){

     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res)  =>   res.json())
    .catch(error => {
        const h2 = document.createElement("h2")
        h2.textContent = "Dr.Oak: ¡Este Pokemon no Existe en la Pokedex!"
        pokemonContainer.appendChild(h2)
        
    })

    .then((data) => { console.log(data)
      
        crearPokemon(data);
       
    });}
   


function crearPokemon(pokemon) {
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const div = document.createElement('div')
    div.classList.add('pikacontainer')
    
    const text = document.createElement("p")
    text.textContent = frasealeatoria(frasesOak)

    
    text.classList.add("texto")

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(text);
    console.log(div.lastChild)
    
    pokemonContainer.appendChild(div);
}

function frasealeatoria(frasesOak){
    
    return frasesOak[Math.floor(Math.random() * frasesOak.length)]
}

function fetchpokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res  =>   res.json())
    .then(data => {cartapokemon(data)})
}
    
    function fetchpokemons(offset , limit){
        for(let i = offset; i <= offset + limit; i++){
            fetchpokemon(i)
        }
    }

function cartapokemon(pokemon){
   
   const divcarta= document.getElementById('cartas')
   const carta = document.createElement('div')
   carta.classList.add('container-pokemon' , 'card')

    const imagen = document.createElement('img');
    imagen.src = pokemon.sprites.front_default

    carta.appendChild(imagen);

    const numeropokemon = document.createElement('p')
    numeropokemon.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
    
    const nombre = document.createElement('h2');
    nombre.classList.add('h2-nombre')
    nombre.textContent = pokemon.name

   
    carta.appendChild(nombre)
    
    carta.appendChild(numeropokemon)
    divcarta.appendChild(carta)

    
}

function eliminarprimeros (cartas){
    while(cartas.firstChild){
        cartas.removeChild(cartas.firstChild)
    }
}


fetchpokemons(offset, limit);