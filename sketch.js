const DEFAULT_SIZE = 16
const DEFAULT_COLOR = 'rgb(70, 70, 70)'
const DEFAULT_MODE = 'color'

const container = document.getElementsByClassName("container")[0];
const grid = document.getElementById('grid');
const clearBtn = document.getElementById('clearBtn')
const colorPicker = document.getElementById('colorPicker')
const colorBtn = document.getElementById('colorBtn')
const rainbowBtn = document.getElementById('rainbowBtn')
const eraserBtn = document.getElementById('eraserBtn')
const sizeValue = document.getElementById('sizeValue')
const sizeSlider = document.getElementById('sizeSlider')


let currentSize = DEFAULT_SIZE
let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE

function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
}

function setCurrentColor(e) {
    currentColor = e
}

clearBtn.onclick = () => reloadGrid();
colorPicker.oninput = (e) => setCurrentColor(e.target.value)
colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
eraserBtn.onclick = () => setCurrentMode('eraser')
clearBtn.onclick = () => reloadGrid()
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeSize(e.target.value)

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//Function to create grid:

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

function activateButton(newMode) {
    if (currentMode === 'rainbow') {
      rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
      colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraserBtn.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
      rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
      colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active')
    }
  }

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if(currentMode == 'color'){
        e.target.style.backgroundColor = currentColor
    } else if(currentMode == 'eraser') {
        e.target.style.backgroundColor = 'white'  
    }else if(currentMode == 'rainbow'){
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
}
//Function show the grid size

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
  }

// Grid size functions:

function setGrid(){
    sizeSlider.addEventListener(InputEvent, value)
    let newSize = prompt('Escribe  el numero de cuadros por lado (max100):');
    newSize = parseInt(newSize);

    if (isNaN(newSize) | newSize < 0 | newSize > 100){
        alert('El valor debe ser un número entero positivo y menor a 100')
        currentSize = DEFAULT_SIZE
    }

    setCurrentSize(newSize);
    createGrid(newSize);
}

function clearGrid() {
    grid.innerHTML = ''
}

function setCurrentSize(newSize) {
    currentSize = newSize
}

function changeSize(value){
    setCurrentSize(value);
    reloadGrid();
} 

function reloadGrid() {
    clearGrid()
    createGrid(currentSize)
  }


createGrid(16);

