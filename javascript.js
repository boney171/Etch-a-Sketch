//This function is to toogle the true or false value of a button when get clicked on
function toggle( value) {
    return !value;
}

//This function is to set up the grid box
const container = document.querySelector('.draw');


function makeRows(rows,columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for(let c = 0; c < (rows * columns); c++){
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid';
    };
};

makeRows(20,20);

let eraser_on = false;
let rainbow_on = false;
const colors = ['rgb(155, 102, 102', 'rgb(243, 104, 213', 'rgb(134, 111, 251)', 'rgb(90, 191, 242)', 'rgb(105, 242, 483)',  'rgb(232, 251, 137)', 'rgb(255, 211, 137)', 'rgb(249, 122, 118)' ];

//This function is to toggle the counter of eraser to true and false when get clicked on
const eraser = document.querySelector('.eraser');
    eraser.addEventListener('click',() =>{
        eraser_on = toggle(eraser_on);
    })
//This function is to toggle the counter of rainbow button to true and false when get clicked on
const rainbow = document.querySelector('.rainbow');
    rainbow.addEventListener('click',() =>{
        rainbow_on = toggle(rainbow_on);
    })
//This function is to set up the key event for each grid box when get clicked on
const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) =>{

        grid.addEventListener('click', () =>{
            if(rainbow_on == true){
                if(eraser_on == true){
                    grid.style.backgroundColor = 'white';
                } else{
                    grid.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                }
            }else {
                if(eraser_on == false){
                    grid.style.backgroundColor = 'black';
                }else {
                    grid.style.backgroundColor = 'white';
                }
            }
        });

    });

    const reset = document.querySelector('.clear');
    reset.addEventListener('click', ()=>{
        window.location.reload();
    });


