const $ = (el) => document.querySelectorAll(el);

const keyArr = []; 
let count = -1;
const onWindowKeyDown = (e) => {
    count++;
    if(count < 30){
        const regex = /[^0-9]/;
        const keyInput = e.key;
        console.log(keyInput == regex)
        $(".gameBoard .item")[count].innerText = keyInput.toUpperCase();
    }    
};

window.addEventListener("keydown", onWindowKeyDown);
