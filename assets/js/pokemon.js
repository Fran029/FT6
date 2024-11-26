let pokemon1 =

[
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
]

let pokemonM = pokemon1.map(nombre => nombre.toUpperCase());
console.log(pokemonM);

let pokemon= [

    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]

let pokemonFuego = pokemon.filter(pokemon => pokemon.tipo === "Fuego");
console.log(pokemonFuego);