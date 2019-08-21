// require('../src/data.js');

// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

require('../src/data.js');
require('../src/data/pokemon/pokemon.js'); //la Data

//MOCKS PARA TESTEAR
const mock = [{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.71 m",
  "weight": "6.9 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.69,
  "avg_spawns": 69,
  "spawn_time": "20:00",
  "multipliers": [1.58],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "next_evolution": [{
    "num": "002",
    "name": "Ivysaur"
  }, {
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.99 m",
  "weight": "13.0 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.042,
  "avg_spawns": 4.2,
  "spawn_time": "07:00",
  "multipliers": [
    1.2,
    1.6
  ],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }],
  "next_evolution": [{
    "num": "003",
    "name": "Venusaur"
  }]
}];

const mock2 = [{
  "id": 7,
  "num": "007",
  "name": "Squirtle",
  "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
  "type": [
    "Water"
  ],
  "height": "0.51 m",
  "weight": "9.0 kg",
  "candy": "Squirtle Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.58,
  "avg_spawns": 58,
  "spawn_time": "04:25",
  "multipliers": [2.1],
  "weaknesses": [
    "Electric",
    "Grass"
  ],
  "next_evolution": [{
    "num": "008",
    "name": "Wartortle"
  }, {
    "num": "009",
    "name": "Blastoise"
  }]
}];

describe('dataManager', () => {

  it('Deberia ser un objeto', () => {
    expect(typeof window.dataManager).toBe('object');
  });
});

//TEST PARA LA FUNCIÓN 'FILTRAR POR TIPO'
describe('filterByType', () => { // describe contiene funciones para ser testeadas.
  it('is a function', () => { //it contiene enunciado en caso de que el test sea correcto o incorrecto
    expect(typeof window.dataManager.filterByType).toBe('function'); // expect contiene el test.
  });

  it('Returns "Array"', () => {
    expect(window.dataManager.filterByType(mock, "Grass")).toEqual(
      [{
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.71 m",
        "weight": "6.9 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.69,
        "avg_spawns": 69,
        "spawn_time": "20:00",
        "multipliers": [1.58],
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ],
        "next_evolution": [{
          "num": "002",
          "name": "Ivysaur"
        }, {
          "num": "003",
          "name": "Venusaur"
        }]
      }, {
        "id": 2,
        "num": "002",
        "name": "Ivysaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.99 m",
        "weight": "13.0 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.042,
        "avg_spawns": 4.2,
        "spawn_time": "07:00",
        "multipliers": [
          1.2,
          1.6
        ],
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ],
        "prev_evolution": [{
          "num": "001",
          "name": "Bulbasaur"
        }],
        "next_evolution": [{
          "num": "003",
          "name": "Venusaur"
        }]
      }]
    );
  });
});


//TEST PARA LA FUNCIÓN 'FILTRAR POR DEBILIDADES'
describe('filterByWeaknes', () => { // describe contiene funciones para ser testeadas.
  it('is a function', () => { //it contiene enunciado en caso de que el test sea correcto o incorrecto
    expect(typeof window.dataManager.filterByWeaknes).toBe('function'); // expect contiene el test.
  });
  it('Returns "Array"', () => {
    expect(window.dataManager.filterByWeaknes(mock, "Fire")).toEqual(
      [{
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.71 m",
        "weight": "6.9 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.69,
        "avg_spawns": 69,
        "spawn_time": "20:00",
        "multipliers": [1.58],
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ],
        "next_evolution": [{
          "num": "002",
          "name": "Ivysaur"
        }, {
          "num": "003",
          "name": "Venusaur"
        }]
      }, {
        "id": 2,
        "num": "002",
        "name": "Ivysaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.99 m",
        "weight": "13.0 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.042,
        "avg_spawns": 4.2,
        "spawn_time": "07:00",
        "multipliers": [
          1.2,
          1.6
        ],
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ],
        "prev_evolution": [{
          "num": "001",
          "name": "Bulbasaur"
        }],
        "next_evolution": [{
          "num": "003",
          "name": "Venusaur"
        }]
      }]
    );
  });
});


//   //TEST PARA LA FUNCIÓN 'ORDENAR POR PROBABILIDAD DE MAYOR A MENOR'
describe('filterByProbabilities',()=>{ // describe contiene funciones para ser testeadas.
  it('is a function',()=>{//it contiene enunciado en caso de que el test sea correcto o incorrecto
    expect(typeof window.dataManager.filterByProbabilities).toBe('function');// expect contiene el test.
  });
  it('Returns "Array"', () => {
    expect(window.dataManager.filterByProbabilities(mock, "spawn_chance", "mayor-probability")).toEqual(
      [{
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.71 m",
        "weight": "6.9 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.69,
        "avg_spawns": 69,
        "spawn_time": "20:00",
        "multipliers": [1.58],
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ],
        "next_evolution": [{
          "num": "002",
          "name": "Ivysaur"
        }, {
          "num": "003",
          "name": "Venusaur"
        }]
      }, {
        "id": 2,
        "num": "002",
        "name": "Ivysaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.99 m",
        "weight": "13.0 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.042,
        "avg_spawns": 4.2,
        "spawn_time": "07:00",
        "multipliers": [
          1.2,
          1.6
        ],
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ],
        "prev_evolution": [{
          "num": "001",
          "name": "Bulbasaur"
        }],
        "next_evolution": [{
          "num": "003",
          "name": "Venusaur"
        }]
      }]
    );
  });
});


//TEST PARA LA FUNCIÓN 'ESTADISTICAS DE KM POR RECORRER'
describe('computeStats', () => { // describe contiene funciones para ser testeadas.
  it('is a function', () => { //it contiene enunciado en caso de que el test sea correcto o incorrecto
    expect(typeof window.dataManager.computeStats).toBe('function'); // expect contiene el test.
  });
  it('Returns "Array"', () => {
    expect(window.dataManager.computeStats(mock2)).toEqual(
        2
    );
  });
});