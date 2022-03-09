const $ = (el, option = true) => option ? document.querySelector(el) : document.querySelectorAll(el);
const inputItem = (txt) => $(".gameBoard .item", false)[count].innerText = txt;

const keyArr = []; 
let count = -1;
const onWindowKeyDown = ({key}) => {
    count++;
    if(count < 30){
        if(key.match(/[^0-9`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/) && key.length === 1  &&  key !== ' '){
            inputItem(key.toUpperCase());
            return;
        }
        count--;
    }    
};

const onItemClick = (e) => {
    count++;
    if(count < 30){
        inputItem(e.target.innerText);
    }
};

window.addEventListener("keydown", onWindowKeyDown);
$(".item", false).forEach(e => e.addEventListener("click", onItemClick));


