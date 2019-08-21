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
require('../src/data/pokemon/pokemon.js');//la Data

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
},{
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
    "id": 3,
    "num": "003",
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "height": "2.01 m",
    "weight": "100.0 kg",
    "candy": "Bulbasaur Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.017,
    "avg_spawns": 1.7,
    "spawn_time": "11:30",
    "multipliers": null,
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "prev_evolution": [{
      "num": "001",
      "name": "Bulbasaur"
    }, {
      "num": "002",
      "name": "Ivysaur"
    }]
  }];

//-------------------------------------------------------------
describe('dataManager',()=>{

  it('Deberia ser un objeto',()=>{
    expect(typeof window.dataManager).toBe('object');
  });

    //TEST PARA LA FUNCIÓN 'FILTRAR POR TIPO'
  describe('filterByType',()=>{ // describe contiene funciones para ser testeadas.
    it('is a function',()=>{//it contiene enunciado en caso de que el test sea correcto o incorrecto
      expect(typeof window.dataManager.filterByType).toBe('function');// expect contiene el test.
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
        },{
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




    //TEST PARA LA FUNCIÓN 'FILTRAR POR PROBABILIDAD'
  describe('filterByWeaknes',()=>{ // describe contiene funciones para ser testeadas.
    it('is a function',()=>{//it contiene enunciado en caso de que el test sea correcto o incorrecto
      expect(typeof window.dataManager.filterByWeaknes).toBe('function');// expect contiene el test.
    });
  });

    //TEST PARA LA FUNCIÓN 'ESTADISTICAS DE KM POR RECORRER'
  describe('computeStats',()=>{ // describe contiene funciones para ser testeadas.
    it('is a function',()=>{//it contiene enunciado en caso de que el test sea correcto o incorrecto
      expect(typeof window.dataManager.computeStats).toBe('function');// expect contiene el test.
    });
  });
  //