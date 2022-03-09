const $ = (el, option = true) => option ? document.querySelector(el) : document.querySelectorAll(el);
const writingItemText = (txt) => $(".gameBoard .item", false)[count].innerText = txt;
const fiveTextComfirm = () => count % 5 ? alert("5글자를 입력해주세요") : false ;

const keyArr = []; 
let count = -1;
const onWindowKeyDown = ({key}) => {
    if(key === 'Backspace' && count !== -1 && count < 30){
        writingItemText('');
        count--;
        return;
    }
    
    if(count < 29){
        count++;
        console.log(count)
        if(key === 'Enter'){
            fiveTextComfirm();
            count--;
            return
        }
        if(key.match(/[^0-9`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/) && key.length === 1  &&  key !== ' '){
            writingItemText(key.toUpperCase());
            return;
        }
        count--;
    }    
};

const onItemClick = ({target}) => {
    if(count < 30){
        count++;
        if(target.innerText === 'ENTER'){
            fiveTextComfirm();
            return;
        }
        
        if(target.innerText === '' && count > 0){
            count--;
            writingItemText('');
            count--;
            return;
        }
        writingItemText(target.innerText);
    }
};

window.addEventListener("keydown", onWindowKeyDown);
$(".item", false).forEach(e => e.addEventListener("click", onItemClick));


