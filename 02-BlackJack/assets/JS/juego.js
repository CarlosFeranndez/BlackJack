
/**
 *  * 2C = Two of Clubs 
 *  * 2D = Two of Diamonds 
 *  * 2H = Two of Hearts 
 *  * 2S = Two of Spades 
 */

//Esta funcion crea una nueva bajara (Deck)
let deck         = [];
const tipos      = [ 'C', 'D', 'H', 'S'];
const especiales = [ 'A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//REFERENCIAS HTML 

const btnPedir = document.querySelector( '#btnPedir' );

const divCartasJugador = document.querySelector( '#jugador-cartas' );
const puntosHTML  = document.querySelectorAll( 'small' );


const crearDeck = () => {

    for ( let i = 2; i <= 10; i++ ) {
        for ( let tipo of tipos ) {
            deck.push ( i + tipo );
        }
        
    }

    for ( let tipo of tipos ) {
        for ( let esp of especiales ) {
            deck.push ( esp + tipo );
        }
    }
    // console.log ( deck );
    deck = _.shuffle ( deck );
    console.log ( deck );
    return deck;

}

crearDeck ();

//Esta funcion me permite toma una carta


const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop (); //Solucion al problema planteado ya que el pop va a remover el ultimo elemento del areglo 
    return carta;

}

// pedirCarta();

const valorCarta = ( carta ) => {

    const valor = carta.substring ( 0, carta.length - 1);
    return ( isNaN ( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1; 
        

    //VAMOS A SIMPLIFICAR TODO ESTE CODIGO AUN MAS, ARRIBA

    // let puntos = 0; 
    // //2 = 2, 10 = 10, 3 = 3
    // if ( isNaN ( valor ) ) {  

    //  puntos = ( valor === 'A' ) ? 11 : 10;     

    // }  else {
        
    //     puntos = valor * 1;
    // }

    // console.log ( puntos );

}

//EVENTOS 

btnPedir.addEventListener( 'click', () => {

    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta (carta);
    puntosHTML[0].innerText = puntosJugador;

    //<img class="carta" src="assets/cartas/2C.png">

    const imgCarta = document.createElement('img');
    // imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.src = `assets/cartas/${carta}.png`;
    divCartasJugador.append(imgCarta);
    
    });

    






