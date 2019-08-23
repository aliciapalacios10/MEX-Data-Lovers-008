const card = document.getElementById('content-card');
const selectType = document.getElementById("filter-type");
const selectProbability = document.getElementById('probability');
const selectWeaknesses = document.getElementById('weaknesses');
const curiousFactContainer = document.getElementById('curious-fact-container');

//LLAMDA A LA FUNCION IMPRIMIR DATA EN TARJETAS
const printData = (data) => {
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

  // LLAMANDO A LA FUNCION DE ESTADISTICA KM POR RECORRER
  const totalKmOfEgg = window.dataManager.computeStats(data);
  curiousFactContainer.innerHTML =
  `<br><p><strong>Dato Curioso</p></strong><br><p>Total de Km <br> por recorrer: <br><br>${totalKmOfEgg}</p>`
};

//LLAMADA A LA FUNCION FILTRAR POR TIPO
let filterType = (ev, data) => {
  const typeValue = ev.target.value; //Guardando el valor del selector de tipo
  let filterTypeSelect = data;
  if (typeValue === "all-types") {
    printData(POKEMON.pokemon);
  } else {
    filterTypeSelect = window.dataManager.filterByType(data, typeValue); //llamando la funcion desde el objeto global window para filtrar tipos
    printData(filterTypeSelect); // Reutilizando la funcion para imprimir por tipo sobre las tarjetas
  }
};

// LLAMADA A LA FUNCION ORDENAR POR PROBABILIDAD
let filterProbability = (ev, data) => {
  const probabilityValue = ev.target.value; //Guardando el valor del selector de probabilidad
  const probabilityOfFinding = 'spawn_chance'; //Guardando la probabilidad de encontrar
  if (probabilityValue === 'all-probabilities') {
    printData(data);
  } else {
    const filteredProbabilitySelect = window.dataManager.filterByProbabilities(data, probabilityOfFinding, probabilityValue);
    printData(filteredProbabilitySelect);
  }
};

//LLAMADA A LA FUNCION FILTRAR POR DEBILIDADES
let filterWeaknesses = (ev, data) => {
  const weaknessesValue = ev.target.value;
  let filterWeaknesSelect = data;
  if (weaknessesValue == "all-weaknesses") {
    filterWeaknesSelect = printData(filterWeaknesSelect);
  } else {
    filterWeaknesSelect = window.dataManager.filterByWeaknes(data, weaknessesValue);
    printData(filterWeaknesSelect);
  }
};

//FETCH PARA CONSUMIR DATA DEL JSON
fetch('./data/pokemon/pokemon.json')
  .then((response) => {
    return response.json();
  })
  .then(obj => {
    const data = obj.pokemon;
    selectType.addEventListener("change", (event) => filterType(event, data)); // El selector escucha el cambio y ejecuta el evento, este evento recibe como callback la funcion para cachar el valor y llama función para filtrar por tipo
    selectProbability.addEventListener("change", (event) => filterProbability(event, data));
    selectWeaknesses.addEventListener("change", (event) => filterWeaknesses(event, data));
    printData(data); //pinta toda la data.
  })
  .catch(() => console.error(err))