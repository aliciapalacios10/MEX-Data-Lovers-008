const data = window.POKEMON.pokemon; //Traer la data solo el arreglo
//console.log(window.POKEMON.pokemon[1]);
const card = document.getElementById('content-card')


const printData = ()=>{ //Imprimir la data
let str = ''
    data.forEach(element => {
        // console.log(element)
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

    // const grassPokemon= data.filter(function(element){
    //     console.log(element.type);
    //     return (element.type[0]=='Grass');
    //  });
    // console.log(grassPokemon);





    let typePrueba = "Rock";
    let typePoke= '';
    // const typePokemon = data.filter(function(element){
    //     for(let i=0;i<element.type.length;i++){
    //         if(typePrueba== 'Grass'){
    //            return(element.type[0]=='Grass');
    //              }

    //         else if(typePrueba=="Rock"){
    //             return(element.type[0]=="Rock");

    //         }
    //         }
    //      }
    // );

    const typePokemon = data.filter(element => element.type[0] == "Rock")
    console.log(typePokemon)
    

    console.log(typePokemon);

//PRUEBA JALAR VALOR DEL SELECT CON CHANGE

// const selectType= document.querySelector('.filter-type');

// selectType.addEventListener("change",(event)=>{
//     let resultType= document.querySelector('.resultado');

//     resultType.textContent= `El tipo es: ${event.target.value}`;
    
// })


const selectType = ()=>{

alert(document.getElementById('filter-type').value);


}








  

    

    // for(let i =0; i<POKEMON.pokemon.length;i++){ 
    // let cards = `<div id="pokemon-card" class="pokemon-card" >
    //     <img src="${element.image}"></img>
    //     <p>${element.num}</p>
    //     <p>${element.name}</p>
    //     <p>Tipo: ${element.type}</p>
    //     <p>Dulces para evolucionar ${element.candy_count}</p> </div>`;

    //     //printCards.insertAsJacentHTML('afterbegin',cards)
    //     //return print;

    //     const root = document.getElementById('pokemon-card');
    //     cards += root.insertAdjacentHTML('afterbegin', cards);
    // }  
};

printData()

