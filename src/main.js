const data = window.POKEMON.pokemon; //Traer la data
//console.log(window.POKEMON.pokemon[1]);
const card = document.getElementById('content-card')


const printData = ()=>{ //Imprimir la data
let str = ''
    data.forEach(element => {
        console.log(element)
         str += `<div class="card">
         <div class="card-image"><img src="${element.img}"></img></div>
         <div class="card-text">
         <p>${element.name}</p>
         <p>${element.num}</p>
         <p>${element.type[0]}</p>
         </div>
         </div>`

    });
    card.innerHTML = str

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

