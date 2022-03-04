const $ = (el) => document.querySelectorAll(el);

const keyArr = []; 
let count = -1;
const onWindowKeyDown = (e) => {
    count++;
    console.log($(".gameBoard .item")[count]);
    $(".gameBoard .item")[count].innerText = e.key
    
};

window.addEventListener("keydown", onWindowKeyDown);
