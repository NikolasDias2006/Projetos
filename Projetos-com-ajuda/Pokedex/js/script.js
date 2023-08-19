const pokemoname = document.querySelector(".pokemon_name")
const pokemonumber = document.querySelector(".pokemon_number")
const pokemonimagem = document.querySelector(".pokemon_imagem")
const pokemonform = document.querySelector(".form")
const pokemonsearch = document.querySelector(".input_search")

 /* async sicroniza com await para que o programa so seja executado ser onde está o await retornar um valor. */

  /*funcao*/
const fetchpokemon = async (pokemon) => {
    /*pegar os dados*/
    const Apiresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    /*Geralmente os que estao com await sao dados que demora para carregar,e entao é nercessario para carregar de uma vez*/

    const data = await Apiresponse.json(); /* Carregar todos os dados / extraindo os dados */

    return data;
}

const renderpokemon = async (pokemon) => {
    const data = await fetchpokemon(pokemon);  
    
    pokemoname.innerHTML = data.name;
    pokemonumber.innerHTML = data.id;

    pokemonimagem.src = data.sprites.versions['generation-v']['black-white'].animated.front_default;
    
}
/*Quando enviar o formulario,irá executar o seguinte comando: */

pokemonform.addEventListener("submit",function (evento) {
    /* o valor que irá digitar */
    search = pokemonsearch.value..toLowerCase()
    /*para impedir a execuçao inicial dele,ou seja ao apertar para pesquisar nao enviar na hora ate que der enter*/

    evento.preventDefault();
    renderpokemon(search)
})

/*Parei na parte 42:30*/