const $ = (el, option = true) => option ? document.querySelector(el) : document.querySelectorAll(el);
const writingItemText = (txt) => $(".gameBoard .item", false)[count].innerText = txt;
const fiveTextComfirm = () => count % 5 === 0 ? true : alert("5글자를 입력해주세요")  ;

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
        if(key === 'Enter'){

            if(fiveTextComfirm()){
                keyArr.forEach((e, idx) => {
                
                    // idx % 5 === 0 ? console.log(keyArr.slice(idx/5,idx/5*5)) : false;
                    console.log(count);
                    count % 5 === 0 ? console.log(keyArr.slice(count/4,count/5*5)) : false;
        
                
                })
            }
            count--;
            return
        }
        if(key.match(/[^0-9`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/) && key.length === 1  &&  key !== ' '){
            keyArr.push(key.toUpperCase());
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
            count--;
            fiveTextComfirm();
            return;
        }
        
        if(target.innerText === '' && count > 0){
            count--;
            writingItemText('');
            count--;
            return;
        }
        keyArr.push(target.innerText);
        writingItemText(target.innerText);
    }
};

window.addEventListener("keydown", onWindowKeyDown);
$(".keyBoard .item", false).forEach(e => e.addEventListener("click", onItemClick));


