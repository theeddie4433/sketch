const div = document.createElement('div');
const container = document.getElementsByClassName("container")[0];


function grid(){
    for (let i = 0; i < 16*16; i++){
    container.appendChild(div.cloneNode());
    }
}

grid();
