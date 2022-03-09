const $ = (el) => document.querySelectorAll(el);

const keyArr = []; 
let count = -1;
const onWindowKeyDown = ({key}) => {
    count++;
    if(count < 30){
        if(key.match(/[^0-9`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/) && key.length === 1  &&  key !== ' '){
            $(".gameBoard .item")[count].innerText = key.toUpperCase();
            return;
        }
        count--;
    }    
};

window.addEventListener("keydown", onWindowKeyDown);
