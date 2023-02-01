// Prendo la #grid nell'HTML
const gridElement = document.getElementById('grid');

// Inizializzo una variabile con la dimensione della griglia
const gridDimension = 100;

generateGrid(gridElement, gridDimension);

// Creo una funzione per generare una griglia
function generateGrid(grid, dimension) {

    // Creo un ciclo che si ripete per la dimensione della griglia, così da metterci gli square
    for (let i = 0; i < dimension; i++) {

        // Creo un <div> con classe .square
        const createDiv = document.createElement('div');
        createDiv.classList.add('square');
        createDiv.innerHTML = i + 1;

        // Inserisco il <div> appena creato nella griglia
        grid.append(createDiv);
    }

}

// Aggiungo a <div> la classe .square
// Posiziono il div.square dentro #grid