const container = document.querySelector('#container')
for (i = 0; i < 16; i ++) {
    let row = document.createElement("div"); 
        row.className = "row";
        container.appendChild(row);
        
    for (j=0; j <16; j++) { 
   let box = document.createElement("div");
        box.className = "box";
        row.appendChild(box);
    }
}

const button = document.querySelector('button')
button.addEventListener('click', createNewBoard())

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('mouseover', event => {
      item.className = "green";
      console.log("fired")
    })
  })

function createNewBoard() {
    let boxAmnt = prompt("How many boxes would you like to make up the etch-a-sketch?")

    for (i = 0; i < boxAmnt.length; i ++) {
        let row = document.createElement("div"); 
            row.className = "row";
            container.appendChild(row);
            
        for (j=0; boxAmnt.length; j++) { 
       let box = document.createElement("div");
            box.className = "box";
            row.appendChild(box);
        }
    }
}  