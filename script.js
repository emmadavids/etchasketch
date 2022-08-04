const container = document.querySelector('#container')
for (let i = 0; i < 16; i ++) {
    let row = document.createElement("div"); 
        row.className = "row";
        container.appendChild(row);
        
    for (let j=0; j <16; j++) { 
   let box = document.createElement("div");
        box.className = "box";
        row.appendChild(box);
    }
}

function addGreen() {
    document.querySelectorAll('.box').forEach(item => {
        item.addEventListener('mouseover', event => {
          item.className = "green";
          console.log("fired")
        })
      })
    }
    

document.addEventListener('DOMContentLoaded', addGreen() )

function createNewBoard() {
    let boxAmnt = prompt("How many boxes would you like to make up the etch-a-sketch?");
    console.log("box amount", boxAmnt);
    const num = parseInt()
    container.innerHTML = "";
    for (let i = 0; i < boxAmnt; i ++) {
        let row = document.createElement("div"); 
            row.className = "row";
            container.appendChild(row);
            
        for (let j=0; j < boxAmnt; j++) { 
       let box = document.createElement("div");
            box.className = "box";
            row.appendChild(box);
        }
    }
    addGreen()
}  

// const button = document.querySelector('.button')
// button.addEventListener('click', createNewBoard())
