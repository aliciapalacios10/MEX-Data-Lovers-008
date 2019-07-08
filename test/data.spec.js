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
      assert.equal(dataManager.filterByType(parametro1, parametro2))
    })

  })
});


describe('dataManager.filterByProbabilities', ()=>{

  it('Deberia ser una función',()=> {
    assert.equal(typeof dataManager.filterByProbabilities, 'function');

  it('Debería retornar "No se todavía" para "No los se" con  ',()=>{
    assert.equal(dataManager.filterByProbabilities(parametro1, parametro2))
  })

})
});

describe('dataManager.filterByWeaknes', ()=>{

  it('Deberia ser una función',()=> {
    assert.equal(typeof dataManager.filterByWeaknes, 'function');

  it('Debería retornar "No se todavía" para "No los se" con  ',()=>{
    assert.equal(dataManager.filterByWeaknes(parametro1, parametro2))
  })

})
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

describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
    
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',() =>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG" );
   });
    //   Hacker edition
    
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(
        cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz'), 'hijklmnopqrstuvwxyzabcdefg' );
    });
    
    // Hacker edition
    
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    
    // it('debería retornar " !@" para " !@"', () => {
    //   assert.equal(cipher.encode(33, ' !@'), ' !@');
    // });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',() =>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ" );
   });
    //
    // Hacker edition
    //
    // Si decides agregar soporte para minúsculas, escribe el test correspondiente.
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(
        cipher.encode(33, 'hijklmnopqrstuvwxyzabcdefg'), 'abcdefghijklmnopqrstuvwxyz' );
    });

    //
    // Hacker edition
    //
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    // //
    // it('debería retornar " !@" para " !@"', () => {
    //   assert.equal(cipher.decode(33, ' !@'), ' !@');
    // });
  });

});