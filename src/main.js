const data = window.POKEMON.pokemon; //Traer la data
//console.log(window.POKEMON.pokemon[1]);
const card = document.getElementById('pokemon-card')


const printData = ()=>{ //Imprimir la data
let str = ''
    data.forEach(element => {
        console.log(element)
         str += `<div class="card"><p>${element.name}</p>
         <img src="${element.img}"></img>
         <p>${element.type[0]}</p>

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


