//IIFE function to getAll() & add()
let pokemonRepository = (function () {
    let pokemonList = [
      {
        name: 'Balbasaur',
        height: 0.7,
        types: ['grass','poison'],
      },
      {
        name: 'Ivysaur',
        height: 1,
        types: ['grass','poison'],
      },
      {
        name: 'Venusaur',
        height: 2,
        types: ['grass','poison'],
      },
      {
        name: 'Charmander',
        height: 0.6,
        types: ['fire'],
      },
      {
        name: 'Charmeleon',
        height: 1.1,
        types: ['fire'],
      },
      {
        name: 'Charizard',
        height: 1.7,
        types: ['fire','flying'],
      },
      {
        name: 'Squirtle',
        height: 0.5,
        types: ['water'],
      },
      {
        name: 'Wartortle',
        height: 1,
        types: ['water'],
      },
      {
        name: 'Blastoise',
        height: 1.6,
        types: ['water'],
      },
];

  function add(pokemon) {
    pokemonList.push(pokemon);
  };

  function getAll() {
        return pokemonList;
    };

  function showDetails (pokemon){
    console.log (pokemon)
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector (".pokemon-list");
    let listpokemon = document.createElement ("li");
    let button = document.createElement ("button");
    button.innerText = pokemon.name;
    button.classList.add ("button-class");
    listpokemon.appendChild (button);
    pokemonList.appendChild (listpokemon);
    button.addEventListener('click', function (event) {
      showDetails (pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();
//for loop that iterates over each item in pokemonList!

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
