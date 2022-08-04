const container = document.querySelector('#container')

function addSquares(num) {
const squares = parseInt(num)
for (let i = 0; i < squares; i ++) {
    let row = document.createElement("div"); 
        row.className = "row";
        container.appendChild(row);
        
    for (let j=0; j < squares; j++) { 
   let box = document.createElement("div");
        box.className = "box";
        row.appendChild(box);
    }
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
    

document.addEventListener('DOMContentLoaded', addSquares(16), addGreen() )

function createNewBoard() {
   
    let boxAmnt = prompt("How many boxes would you like to make up the etch-a-sketch? Maximum number is 100");

    console.log("box amount", boxAmnt);
    let num = parseInt(boxAmnt)
    while (num > 100) 
        { boxAmnt = prompt("Please enter 100 or less");
            num = parseInt(boxAmnt);
        }
    container.innerHTML = "";
    addSquares(num)
    addGreen()
}  

// const button = document.querySelector('.button')
// button.addEventListener('click', createNewBoard())
