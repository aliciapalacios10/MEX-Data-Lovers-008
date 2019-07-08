const data = window.POKEMON.pokemon;
const card = document.getElementById('content-card');
const selectType = document.getElementById("filter-type");
const selectProbability = document.getElementById('probability');
const selectWeaknesses = document.getElementById('weaknesses');
// let allData = data;

//FUNCION PARA IMPRIMIR DATA EN TARJETAS
const printData = (data)=>{
   // console.log(data)
let str = ''
   data.forEach(element => { //Ejecuta la funcion una vez por cada elemento
        str += `<div class="card col-3">
        <div class="card-image"><img src="${element.img}"></img></div>
        <div class="card-text">
        <p><strong>${element.name}</strong></p>
        <p>Probabilidad: ${element.spawn_chance} </p>
        <p>${element.num}</p>
        <p> Tipo: ${element.type[0]} , ${element.type[1]}</p>        
        </div>
        </div>`    
    });
   card.innerHTML = str;

};

//FUNCION PARA FILTRAR POR TIPO
let filterType = (ev) => {
<<<<<<< HEAD
    const typeValue = ev.target.value; //Guardando el valor del selector de tipo
    let filterTypeSelect= data;
    console.log(data)
    if (typeValue==="all-types"){
        printData(POKEMON.pokemon);
        console.log(filterTypeSelect);
    }
    else { 
     filterTypeSelect = window.dataManager.filterByType(data,typeValue); //llamando la funcion desde el objeto global window para filtrar tipos
    printData(filterTypeSelect); // Reutilizando la funcion para imprimir por tipo sobre las tarjetas
    }
=======
   const typeValue = ev.target.value; //Guardando el valor del selector de tipo
   let filterTypeSelect= data;
   console.log(data)
   if (typeValue==="all-types"){
       printData(POKEMON.pokemon);
       console.log(filterTypeSelect);
   }
   else {
    filterTypeSelect = window.dataManager.filterByType(data,typeValue); //llamando la funcion desde el objeto global window para filtrar tipos
   printData(filterTypeSelect); // Reutilizando la funcion para imprimir por tipo sobre las tarjetas
   }
>>>>>>> 1527e503a9235c7d8fb75290bb8cdf14a00e49f8
};
selectType.addEventListener("change",filterType); // Dandole evento change al selector//FUNCION PARA FILTRA LA PROBABILIDAD DE MAYOR A MENOR
let filterProbability = (ev)=>{
   const probabilityValue = ev.target.value;//Guardando el valor del selector de probabilidad
   let filterProbabilitySelect = data;    if (probabilityValue === 'all-probabilities'){
       filterProbabilitySelect = printData(filterProbabilitySelect);
       console.log(probabilityValue);
   }
   else{
   filterProbabilitySelect = window.dataManager.filterByProbabilities(data,probabilityValue);
   printData(filterProbabilitySelect);
   }
}
selectProbability.addEventListener("change",filterProbability);//console.log(selectProbability);//FUNCIÓN PARA FILTRAR POR DEBILIDADESlet filterWeaknesses =(ev)=>{
let filterWeaknesses =(ev)=>{  
const weaknessesValue = ev.target.value;
   let filterWeaknesSelect= data;
   if(weaknessesValue=="all-weaknesses"){
       filterWeaknesSelect= printData(filterWeaknesSelect);
   }
   else{
   filterWeaknessesSelect = window.dataManager.filterByWeaknes(data,weaknessesValue);
   console.log(weaknessesValue);
       printData(filterWeaknessesSelect);
    }
}
selectWeaknesses.addEventListener("change",filterWeaknesses);printData(data);



printData(data);//pinta toda la data.

//FUNCION PRUEBA PARA FILTRAR
// const grassPokemon= data.filter(function(element){
//     console.log(element.type);
//     return (element.type[0]=='Grass');
//  });
// console.log(grassPokemon);//PRUEBA PARA PINTAR DATA EN HTML
// for(let i =0; i<POKEMON.pokemon.length;i++){
// let cards = `<div id="pokemon-card" class="pokemon-card" >
//     <img src="${element.image}"></img>
//     <p>${element.num}</p>
//     <p>${element.name}</p>
//     <p>Tipo: ${element.type}</p>
//     <p>Dulces para evolucionar ${element.candy_count}</p> </div>`;//     printCards.insertAsJacentHTML('afterbegin',cards)
//     return print;//     const root = document.getElementById('pokemon-card');
//     cards += root.insertAdjacentHTML('afterbegin', cards);
// }