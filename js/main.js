// Prendo la #grid nell'HTML
const gridElement = document.getElementById('grid');

// Inizializzo una variabile con la dimensione della griglia
const gridDimension = 100;

generateGrid(gridElement, gridDimension);

// Creo una funzione per generare una griglia
function generateGrid(grid, dimension) {

    let squareGrid;

    // Creo un ciclo che si ripete per la dimensione della griglia, così da metterci gli square
    for (let i = 0; i < dimension; i++) {

        // Creo un <div> con classe .square
        squareGrid = document.createElement('div');
        squareGrid.classList.add('square');
        squareGrid.innerHTML = i + 1;

        // Inserisco il <div> appena creato nella griglia
        grid.append(squareGrid);
    }

    squareGrid.addEventListener('click', function () {
        this.classList.toggle('active');
    })

}