// alert("Hi there!");
function myAlert(){
    alert("Im Clicked");

}

const spans = document.querySelectorAll("#play span"); 

console.log(spans); 

for(const mySpan of spans){
   // mySpan.addEventListener("click",myAlert);
   
   mySpan.addEventListener("click",function(ev){
        // alert(mySpan.dataset.actor);
        highlightActor(mySpan.dataset.actor);
   });

}

//anonymous function: implies singularity, lack of confusion. 
//named: two of them exist 


/*
for (let i = 0; i < actors.length; i++){
    actors[i].style.backgroundColor = "yellow";
}
*/ 
// function highlight(el){
//    el.style.backgroundColor='yellow';
// }

function highlightActor (actor){

    for(const mySpan of spans){

        if (actor == mySpan.dataset.actor){//current actor, highlight
            mySpan.style.backgroundColor='yellow';

        }else{//other actor, background white 
            mySpan.style.backgroundColor='white';

        }
    }


} 

function highlight (el){

    if(el.style.backgroundColor == 'yellow'){
        el.style.backgroundColor='white';
    }else{
        el.style.backgroundColor='yellow';
    }


} 