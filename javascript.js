let container = document.querySelector('.container');

function makeGrid() {
    for(let i = 0; i < 16*16; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.addEventListener("pointerover", addColor);
        container.appendChild(cell);
    }   
}

makeGrid();

function addColor(e) {
    e.target.style = `background-color: black;`;
}

const reset = document.querySelector('.reset');

function clearGrid() {
    container.innerHTML = '';

    makeGrid();
}

reset.addEventListener("click", clearGrid);