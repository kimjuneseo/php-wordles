const $ = (el, option = true) => option ? document.querySelector(el) : document.querySelectorAll(el);
const writingItemText = (txt) => $(".gameBoard .item", false)[count].innerText = txt;
const fiveTextComfirm = () => count % 5 === 0 ?  true : alert("5글자를 입력해주세요");
   
const keyArr = []; 
let count = 0;
let lineCount = 1;

const itemListener = (txt, target, state = true) => {
    if(state ? txt === 'Backspace' : target.classList.contains("Backspace") && count !== 0){
        count--;
        writingItemText('');
        return;
    }
    
    if(txt.toUpperCase() === 'ENTER' ){
        if(fiveTextComfirm()){
            lineCount++
        }
        return;
    }

    if( count < lineCount * 5  ){
        if(txt.match(/[^0-9`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/) && txt.length === 1  &&  txt !== ' '){
            keyArr.push(txt.toUpperCase());
            writingItemText(txt.toUpperCase());
            count++;
            return;
        }
    }     

}
const onWindowKeyDown = ({key}) => {
    itemListener(key);
};

const onItemClick = ({target}) => {
    itemListener(target.innerText, target, false)
};

window.addEventListener("keydown", onWindowKeyDown);
$(".keyBoard .item", false).forEach(e => e.addEventListener("click", onItemClick));


