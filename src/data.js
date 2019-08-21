// Funcion global
window.dataManager = {
  // Funcion pura para filtrar tipo
  filterByType: (data, typeValue) => { //Creando el objeto para filtrar
    let filterType = data.filter(element => element.type.find((type) => type == typeValue));
    return filterType;
  },

  //Función pura para filtrar por Debilidades
  filterByWeaknes: (data, weaknessValue) => {
    let filterWeaknesses = data.filter(element => element.weaknesses.find((weaknesses) => weaknesses == weaknessValue));
    return filterWeaknesses;
  },

  //Funcion pura para filtrar probabilidad de mayor a menor.
  filterByProbabilities: (data, probabilityOfFinding, filterProbability) => {
    // console.log(filterProbability)
    let result = data.sort((a, b) => {
      if (filterProbability == 'mayor-probability') {
        if (a[probabilityOfFinding] < b[probabilityOfFinding]) {
          return 1;
        }
        if (a[probabilityOfFinding] > b[probabilityOfFinding]) {
          return -1;
        }
        return 0;
      } else if (filterProbability == 'menor-probability') {
        if (a[probabilityOfFinding] > b[probabilityOfFinding]) {
          return 1;
        }
        if (a[probabilityOfFinding] < b[probabilityOfFinding]) {
          return -1;
        }
        return 0;
      }
    });
    return result;
  },

  computeStats: (data) => {
    let totalKmOfEgg = 0; //Contador que guarda lo km 
    data.forEach(element => { //Ejecuta la funcion una vez por cada elemento
      // totalKmOfEgg += parseFloat(element.egg)
      const km = element.egg.substr(0, 2);
      if (km !== 'No' && km !== 'Om') {
        const kmEgg = parseInt(km);
        totalKmOfEgg += kmEgg;
      }
    });
    return totalKmOfEgg;
  }
};
