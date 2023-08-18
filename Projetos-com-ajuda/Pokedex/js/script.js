pokemoname = document.querySelector(".pokemon_name")
pokemonumber = document.querySelector(".pokemon_number")
pokemonimagem = document.querySelector(".pokemon_imagem")

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

renderpokemon('3')

/*Parei na parte 42:30*/