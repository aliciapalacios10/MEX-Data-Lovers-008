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

describe('dataManager',()=>{

  it('Deberia ser un objeto',()=>{
    expect(typeof window.dataManager).toBe('object');
  });

    //TEST PARA LA FUNCIÓN 'FILTRAR POR TIPO'
  describe('filterByType',()=>{ // describe contiene funciones para ser testeadas.
    it('is a function',()=>{//it contiene enunciado en caso de que el test sea correcto o incorrecto
      expect(typeof window.dataManager.filterByType).toBe('function');// expect contiene el test.
    });

    it('Returns " nombre de los pokemones de tipo Hielo"',()=>{
      expect(window.dataManager.filterByType(window.POKEMON.pokemon.name,"Ice").toBe('Dewgong','Cloyster','Jynx','Lapras','Articuno'));
      
    });

  });
    //TEST PARA LA FUNCIÓN 'FILTRAR POR PROBABILIDAD'
  describe('filterByWeaknes',()=>{ // describe contiene funciones para ser testeadas.
    it('is a function',()=>{//it contiene enunciado en caso de que el test sea correcto o incorrecto
      expect(typeof window.dataManager.filterByWeaknes).toBe('function');// expect contiene el test.
    });

    it('Returns "pokemones con debilidad Dragon"',()=>{
      expect(window.dataManager.filterByWeaknes(window.POKEMON.pokemon,"Dragon").toBe());
    });

  });
    //TEST PARA LA FUNCIÓN 'FILTRAR POR PROBABILIDAD'
  describe('filterByProbabilities',()=>{ // describe contiene funciones para ser testeadas.
    it('is a function',()=>{//it contiene enunciado en caso de que el test sea correcto o incorrecto
      expect(typeof window.dataManager.filterByProbabilities).toBe('function');// expect contiene el test.
    });

    it('Returns "pokemones con la mayor probabilidad de ser encontrados"',()=>{
      expect(window.dataManager.filterByProbabilities(window.POKEMON.pokemon,"mayor-probability").toBe("algo"));
    });

  });

  


//   describe('dataManager.filterByType', ()=>{

//     it('Deberia ser una función',()=> {
//       expect(typeof window.dataManager.filterByType).toBe('function');

//     it('Debería retornar los pokemones de tipo Fuego',()=>{
//       expect(window.dataManager.filterByType(data,"Fire")).toBe('Ejemplo');
//     });

//   });
// });


// describe('dataManager.filterByProbabilities', ()=>{

//   it('Deberia ser una función',()=> {
//     expect(typeof window.dataManager.filterByProbabilities).toBe('function');

//   it('Debería retornar  los pokemones de mayor probabilidad ',()=>{
//     expect(window.dataManager.filterByProbabilities(data,"mayor-probability")).toBe('Ejemplo');
//   });

// });
// });

// describe('dataManager.filterByWeaknes', ()=>{

//   it('Deberia ser una función',()=> {
//     expect(typeof window.dataManager.filterByWeaknes).toBe('function');

//   it('Debería retornar pokemones con Debilidad Hielo',()=>{
//     expect(window.dataManager.filterByWeaknes(,"Ice")).toBe('Ejemplo');
//   });

//  });
// });

});

//EJEMPLO
// describe('example', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

//Error test 
