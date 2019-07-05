const data = window.POKEMON.pokemon;
const card = document.getElementById('content-card');
const selectType = document.getElementById("filter-type");
const selectProbability = document.getElementById('probability');
const selectWeaknesses = document.getElementById('weaknesses');


// for(let j=0;j<data.name.lenght;j++){

//     console.log(data[j].name);
// }

console.log(data   );


//FUNCION PARA IMPRIMIR DATA EN TARJETAS
const printData = (data)=>{ 
    // console.log(data)
let str = ''
    data.forEach(element => { //Ejecuta la funcion una vez por cada elemento
         str += `<div class="card">
         <div class="card-image"><img src="${element.img}"></img></div>
         <div class="card-text">
         <p>${element.name}</p>
         <p>Probabilidad: ${element.spawn_chance} </p>
         <p>${element.num}</p>
         <p> Tipo: ${element.type[0]} , ${element.type[1]}</p>
          
         </div>
         </div>`

    });
    card.innerHTML = str;
};

//FUNCION PARA FILTRAR
let filterType = (ev) => {
    const typeValue = ev.target.value; //Guardando el valor del selector de tipo
    let filterType= data;
    if (typeValue==="all-types"){
        filterType= printData(filterType);
        // console.log(data);
    }
    else { 
     filterType = window.dataManager.filterByType(data,typeValue); //llamando la funcion desde el objeto global window para filtrar tipos
    printData(filterType); // Reutilizando la funcion para imprimir por tipo sobre las tarjetas
    }
};

selectType.addEventListener("change",filterType); // Dandole evento change al selector 

//FUNCION PARA FILTRA LA PROBABILIDAD DE MAYOR A MENOR
let filterProbability = (ev)=>{
    const probabilityValue = ev.target.value;
    const filterProbability = window.dataManager.filterMayor(data,probabilityValue);
    console.log(filterProbability)
        printData(filterProbability);

}
selectProbability.addEventListener("change",filterProbability);

//console.log(selectProbability);

//FUNCIÓN PARA FILTRAR POR DEBILIDADES

let filterWeaknesses =(ev)=>{
    const weaknessesValue = ev.target.value;
    let filterWeaknes= data;
    if(weaknessesValue=="all-weaknesses"){
        filterWeaknes= printData(filterWeaknes);
    }

    else{
    filterWeaknesses = window.dataManager.filterByWeaknes(data,weaknessesValue);
    console.log(weaknessesValue);
        printData(filterWeaknesses);
}
}
selectWeaknesses.addEventListener("change",filterWeaknesses);


printData(data);





//FUNCION PRUEBA PARA FILTRAR
// const grassPokemon= data.filter(function(element){
//     console.log(element.type);
//     return (element.type[0]=='Grass');
//  });
// console.log(grassPokemon);

    

//PRUEBA PARA PINTAR DATA EN HTML
// for(let i =0; i<POKEMON.pokemon.length;i++){ 
// let cards = `<div id="pokemon-card" class="pokemon-card" >
//     <img src="${element.image}"></img>
//     <p>${element.num}</p>
//     <p>${element.name}</p>
//     <p>Tipo: ${element.type}</p>
//     <p>Dulces para evolucionar ${element.candy_count}</p> </div>`;

//     printCards.insertAsJacentHTML('afterbegin',cards)
//     return print;

//     const root = document.getElementById('pokemon-card');
//     cards += root.insertAdjacentHTML('afterbegin', cards);
// }  

