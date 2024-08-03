const container=document.querySelector('#container');
container.style.backgroundColor='red';
let size;


function createGrid(size){
    container.innerHTML='';
    for(let i=0;i<size*size;i++){
        const div = document.createElement('div');
        div.classList.add('grid-square');
        div.style.width=`${500/size}px`;
        div.style.height=`${500/size}px`;
        container.appendChild(div);
    }
    

}

createGrid(5);

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    color='#';
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}


console.log(getRandomColor());
container.addEventListener('mouseover',(e)=>{
    let item = e.target;
   if(item.classList.contains('grid-square')){
    item.style.backgroundColor=getRandomColor();
   }

    
})

const resetButton = document.querySelector('#resetButton');


resetButton.addEventListener('click',()=>{
    size=prompt("enter the grid size");
    size = parseInt(size);
    console.log(size);
    if(size>100){
        prompt("enter a grid size below 100 :D");
    }
    else{
    createGrid(size);}
})








































// function createGrid(size){
//     container.innerHTML='';
//     for(let i=0;i<size*size;i++){
//         const div = document.createElement('div');
//         div.classList.add('grid-square');
//         div.style.height= `${600/size}px`;
//         div.style.width= `${600/size}px`;
//         div.style.backgroundColor= 'yellow';
//         container.appendChild(div);
//         console.log("grid created");

//     }


// }
// createGrid(5);

// container.addEventListener('mouseover',(e)=>{
//     if(e.target.classList.contains('grid-square')){
//         e.target.style.backgroundColor='grey';
//     }
    

// })


// resetButton.addEventListener('click',(e)=>{
//     let size = prompt("Enter the new grid size (Below 100 :D)");
//     size=parseInt(size);
//     if(size<=100){
//         createGrid(size);
//     }
//     else{
//         prompt("Enter a size below 100")
//     }
// })

