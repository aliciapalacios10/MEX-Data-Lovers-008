// Funcion global
window.dataManager = {
// Funcion pura para filtrar tipo
  filterByType: (data,typeValue) => { //Creando el objeto para filtrar 
    let filterType = data.filter(element =>  element.type.find ((type) => type == typeValue));
    // let filterType = data.filter((element, index, data) => element.type[0] && element.type[1] == typeValue)
    //console.log (filterType);
    return filterType;
  },

  //Función pura para filtrar por Debilidades
  filterByWeaknes: (data,weaknessValue)=>{
    let filterWeaknesses = data.filter (element => element.weaknesses.find((weaknesses)=>weaknesses==weaknessValue));
    
    return filterWeaknesses;
  
  },
  //Funcion pura para filtrar probabilidad de mayor a menor.
    filterMayor: (data,filterProbability)=>{
      // console.log(filterProbability)
      let result = data.sort((a,b) => {
        if(filterProbability== 'mayor-probability'){
        if(a.spawn_chance < b.spawn_chance){
          return 1;
        }
        if(a.spawn_chance > b.spawn_chance){
          return -1;
        }
        return 0
      }
      else if (filterProbability== 'menor-probability'){
        if(a.spawn_chance > b.spawn_chance){
          return 1;
        }

        if(a.spawn_chance < b.spawn_chance){
          return -1;
        }
         return 0
      }

      return result;
      // console.log(a.spawn_chance, b.spawn_chance);

      })
    
      // let filterMayorProbability = data.sort(a,b )
    return result

    }


};
