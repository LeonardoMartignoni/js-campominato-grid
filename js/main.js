// Prendo la #grid nell'HTML
const gridElement = document.getElementById('grid');

// Inizializzo una variabile con la dimensione della griglia
const gridDimension = 64;

generateGrid(gridElement);

// Creo una funzione per generare una griglia
function generateGrid(grid) {

    // Creo un <div> con classe .square
    const createDiv = document.createElement('div');
    createDiv.classList.add('square');
    grid.append(createDiv);
}

// Aggiungo a <div> la classe .square
// Posiziono il div.square dentro #grid