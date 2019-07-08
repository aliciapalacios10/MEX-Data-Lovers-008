// Funcion global
window.dataManager = {
// Funcion pura para filtrar tipo
  filterByType: (data,typeValue) => { //Creando el objeto para filtrar 
    let filterType = data.filter(element =>  element.type.find ((type) => type == typeValue));
    // let filterType = data.filter((element, index, data) => element.type[0] && element.type[1] == typeValue)
    //console.log (filterType);
    return filterType;
  },
  
};
