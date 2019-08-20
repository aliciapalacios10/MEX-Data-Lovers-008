const data = window.POKEMON.pokemon;
const card = document.getElementById('content-card');
const selectType = document.getElementById("filter-type");
const selectProbability = document.getElementById('probability');
const selectWeaknesses = document.getElementById('weaknesses');
const curiousFactContainer = document.getElementById('curious-fact-container');

//FUNCION PARA IMPRIMIR DATA EN TARJETAS
const printData = (data)=>{
    let str = '';
    data.forEach(element => { //Ejecuta la funcion una vez por cada elemento    
    str += `<div class="card col-3">
    <img src="${element.img}" width=100% >
    <p><strong>${element.name}</strong></p>
    <p>${element.num}</p>
    <p>Probabilidad: ${element.spawn_chance} % </p>
    <p> Tipo: ${element.type[0]} , ${element.type[1]}</p>        
    </div>`;   
});
    card.innerHTML = str;
    window.dataManager.computeStats(data);
};

//FUNCION PARA FILTRAR POR TIPO
let filterType = (ev) => {
   const typeValue = ev.target.value; //Guardando el valor del selector de tipo
   let filterTypeSelect= data;
   //console.log(data);
   if (typeValue==="all-types"){
       printData(POKEMON.pokemon);
       //console.log(filterTypeSelect);
   }
   else {
    filterTypeSelect = window.dataManager.filterByType(data,typeValue); //llamando la funcion desde el objeto global window para filtrar tipos
   printData(filterTypeSelect); // Reutilizando la funcion para imprimir por tipo sobre las tarjetas
   }
};
selectType.addEventListener("change",filterType); // Dandole evento change al selector//FUNCION PARA FILTRA LA PROBABILIDAD DE MAYOR A MENOR
let filterProbability = (ev)=>{
   const probabilityValue = ev.target.value;//Guardando el valor del selector de probabilidad
   const probabilityOfFinding = 'spawn_chance';//Guardando la probabilidad de encontrar
   console.log(probabilityValue);
   console.log(probabilityOfFinding);
   if (probabilityValue === 'all-probabilities'){
       printData(data);
       //console.log(probabilityValue);
   } else{
    const filteredProbabilitySelect = window.dataManager.filterByProbabilities(data, probabilityOfFinding, probabilityValue);
    console.log(filteredProbabilitySelect);
    printData(filteredProbabilitySelect);
   }
};
selectProbability.addEventListener("change",filterProbability);//console.log(selectProbability);//FUNCIÓN PARA FILTRAR POR DEBILIDADESlet filterWeaknesses =(ev)=>{
let filterWeaknesses =(ev)=>{  
const weaknessesValue = ev.target.value;
   let filterWeaknesSelect= data;
   if(weaknessesValue=="all-weaknesses"){
       filterWeaknesSelect= printData(filterWeaknesSelect);
   }
   else{
   filterWeaknessesSelect = window.dataManager.filterByWeaknes(data,weaknessesValue);
   //console.log(weaknessesValue);
       printData(filterWeaknessesSelect);
    }
};
selectWeaknesses.addEventListener("change",filterWeaknesses);

printData(data);//pinta toda la data.
console.log(window.dataManager.computeStats(data));
