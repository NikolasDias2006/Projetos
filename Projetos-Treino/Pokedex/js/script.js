const pokemoname = document.querySelector(".pokemon_name")
const pokemonumber = document.querySelector(".pokemon_number")
const pokemonimagem = document.querySelector(".pokemon_imagem")
const pokemonform = document.querySelector(".form")
const pokemonsearch = document.querySelector(".input_search")

const prev = document.querySelector('.btn-prev')
const next = document.querySelector('.btn-next')

let searchpokemon = 150

 /* async sicroniza com await para que o programa so seja executado ser onde está o await retornar um valor. */

  /*funcao*/
const fetchpokemon = async (pokemon) => {
    
    pokemoname.innerHTML = 'loading.....';

    /*pegar os dados*/
    const Apiresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    pokemoname.innerHTML = '';
    pokemonumber.innerHTML = '';

    if(Apiresponse.status == 200) {
    /*Geralmente os que estao com await sao dados que demora para carregar,e entao é nercessario para carregar de uma vez*/

    const data = await Apiresponse.json(); /* Carregar todos os dados / extraindo os dados */
    searchpokemon = data.id
    return data;
    } else {
        pokemonimagem.src = 'https://i.pinimg.com/originals/f6/8c/0e/f68c0eacc02886c44f1c5be8f3098f0c.png'

        pokemonumber.style.color = "black";
        pokemoname.innerHTML = '';
        pokemonumber.innerHTML = 'Not Found !';
        
    }
}

const renderpokemon = async (pokemon) => {
    const data = await fetchpokemon(pokemon);  
    
    pokemoname.innerHTML = data.name;
    pokemonumber.innerHTML = data.id;

    pokemonimagem.src = data.sprites.versions['generation-v']['black-white'].animated.front_default;

    pokemonsearch.value = '';
     /*ja deixará pronto para escrever ao se executado*/
    focus()
}
/*Quando enviar o formulario,irá executar o seguinte comando: */

pokemonform.addEventListener("submit",function (evento) {
    /* o valor que irá digitar */
    search = pokemonsearch.value.toLowerCase()
    /*para impedir da tela recarregar*/

    evento.preventDefault();
    renderpokemon(search)

})

/* prev button */
prev.addEventListener("click",function(prev) {
  /* o minimo para da prev é ate 1, menor que isso nao irá fucionar */
    if(searchpokemon > 1) {
    searchpokemon -= 1
    renderpokemon(searchpokemon)
   }
})

/* next buttom */
next.addEventListener("click",function(next) {
  searchpokemon +=1
  renderpokemon(searchpokemon)
})

/* para aparecer na tela inicial */
renderpokemon(searchpokemon)