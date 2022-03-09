const $ = (el) => document.querySelectorAll(el);

const keyArr = []; 
let count = -1;
const onWindowKeyDown = (e) => {
    count++;
    if(count < 30){
        const regex = /[^0-9]/;
        console.log(e.key.match(/^[a-zA-Z]/))
        // const keyInput = e.key.match(/[^0-9]/);
        // $(".gameBoard .item")[count].innerText = keyInput.toUpperCase();
    }    
};

window.addEventListener("keydown", onWindowKeyDown);
