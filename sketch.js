const DEFAULT_SIZE = 16

const container = document.getElementsByClassName("container")[0];
const gridbutton = document.getElementById("grid-size-button");
const grid = document.getElementById('grid');
const clearBtn = document.getElementById('clearBtn')


let currentSize = DEFAULT_SIZE
let gridSize

clearBtn.onclick = () => reloadGrid();
gridbutton.addEventListener('click', setGrid);

function createGrid(size) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('square');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
      }
}

function setCurrentSize(newSize) {
    currentSize = newSize
  }

function reloadGrid() {
    clearGrid()
    createGrid(gridSize)
  }

function clearGrid() {
    grid.innerHTML = ''
}

  /*const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;
  const squareSize = Math.min(containerWidth, containerHeight) /  size ;*/


function changeColor() {
    this.style.setProperty('background-color', 'rgb(70, 70, 70)', 'important');
}

    /*div.addEventListener('mouseout', function() {
      this.style.removeProperty('background-color');
    });*/
  

function setGrid(){
    let newSize = prompt('Escribe  el numero de cuadros por lado (max100):');
    gridSize = newSize;
    gridSize = parseInt(gridSize);

    if (isNaN(newSize) | newSize < 0 | newSize > 100){
        alert('El valor debe ser un número entero positivo y menor a 100')
        gridSize = 16;
    }

    createGrid(gridSize);
}


createGrid(16);

