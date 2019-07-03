const data = window.POKEMON.pokemon;
const card = document.getElementById('content-card');
const buttonSelectType = document.getElementById("filter-type");
// const buttonSelectProbability =

//FUNCION PARA IMPRIMIR DATA EN TARJETAS
const printData = (data)=>{ 
let str = ''
    data.forEach(element => { //Ejecuta la funcion una vez por cada elemento
         str += `<div class="card">
         <div class="card-image"><img src="${element.img}"></img></div>
         <div class="card-text">
         <p>${element.name}</p>
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
    const filterType = window.dataManager.filterByType(data,typeValue); //llamando la funcion desde el objeto global window para filtrar tipos
    printData(filterType); // Reutilizando la funcion para imprimir por tipo sobre las tarjetas
};

buttonSelectType.addEventListener("change",filterType); // Dandole evento change al selector 



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

