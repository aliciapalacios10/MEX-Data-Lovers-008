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

describe('dataManager',()=>{

  it('Deberia ser un objeto',()=>{
    assert.equal(typeof dataManager, 'object');
  });

  describe('dataManager.filterByType', ()=>{

    it('Deberia ser una función',()=> {
      assert.equal(typeof dataManager.filterByType, 'function');

    it('Debería retornar "No se todavía" para "No los se" con  ',()=>{
      assert.equal(dataManager.filterByType(parametro1, parametro2));
    });

  });
});


describe('dataManager.filterByProbabilities', ()=>{

  it('Deberia ser una función',()=> {
    assert.equal(typeof dataManager.filterByProbabilities, 'function');

  it('Debería retornar "No se todavía" para "No los se" con  ',()=>{
    assert.equal(dataManager.filterByProbabilities(parametro1, parametro2));
  });

});
});

describe('dataManager.filterByWeaknes', ()=>{

  it('Deberia ser una función',()=> {
    assert.equal(typeof dataManager.filterByWeaknes, 'function');

  it('Debería retornar "No se todavía" para "No los se" con  ',()=>{
    assert.equal(dataManager.filterByWeaknes(parametro1, parametro2));
  });

 });
});

});


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});



//EJEMPLO

