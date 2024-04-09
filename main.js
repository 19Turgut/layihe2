let inputBox=document.querySelector('.input')
let listContainer=document.querySelector('.list-container')
let sortImage = document.querySelector('.sortimg');
let ul = document.querySelector('ul');
let c=true;
//addList
function addList(){
    if(inputBox.value===''){
        alert("deyer daxil et");

    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span')
        span.innerText="\u00d7"
        span.className="span"
        //span.style.backgroundColor="#833AE0"
        li.appendChild(span)
        
    }
    inputBox.value=""
}
listContainer.addEventListener("click",function(e){
   if( e.target.tagName==="LI"){
    //e.target.classList.toggle("checked");
   }
   else if( e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
   }
},false)

//enter

inputBox.addEventListener("keypress",function(e){
    if(e.key ==="Enter"){
        addList();
    }
});

//sort

function sortList(){
    const lis=Array.from(ul.querySelectorAll('li'));
    lis.sort((a,b)=>{
        const A=a.innerText.toLowerCase();
        const B=b.innerText.toLowerCase();
        return c ? A.localeCompare(B) : B.localeCompare(A);
    })
    ul.innerHTML='';
    lis.forEach(li=>ul.appendChild(li));
    c=!c;
    if(c){
        sortImage.src="/layihe2/img/sort.svg";
        sortImage.alt="sort";
        
    }else{
        sortImage.src="/layihe2/img/sort2.svg";
        sortImage.alt="sort2";
    }
}
sortImage.addEventListener('click', sortList);
sortImage.addEventListener('mouseout', () => {
    if (!c) {
        sortImage.src = "/layihe2/img/sort2.svg";
    } else {
        sortImage.src = "/layihe2/img/sort.svg";
    }
});

sortImage.addEventListener('mouseover', () => {
    if (!c) {
        sortImage.src = "/layihe2/img/sort2up.svg";
    } else {
        sortImage.src = "/layihe2/img/sortup.svg";
    }
});