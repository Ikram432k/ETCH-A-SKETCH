//creates a button
const btn = document.createElement('button');
btn.setAttribute('id','change-size');
btn.className = "btn";
btn.innerText = "Change-Size";
document.body.appendChild(btn); 


//creates the grid
function grid(gvalue){
    n = gvalue*gvalue;
    const a = document.createElement('div');
    a.setAttribute('id','container');
    a.setAttribute('style','grid-template-columns: repeat(' + gvalue + ', 1fr)');

    document.body.appendChild(a);

    for(i=1;i<=n;i++){
        var box = document.createElement('div');
        box.className = "box";
        document.getElementById('container').appendChild(box);
    
    
    } 

    gridBox=document.querySelectorAll(".box");
    gridBox.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.background='black';
          });
    });
}
//clears the grid
function cleargrid(){
    const clear = document.getElementById('container');
    clear.parentNode.removeChild(clear);
}
//change the size of the grid
function change()
{ 
    var n1=prompt("Enter New Size 1 to 100");
    if(n1!==null){
    n1=parseInt(n1);
    if(n1>100||1>n1||Number.isNaN(n1)){
        alert("Enter the valid number");
        change();
    }
    else{
        cleargrid();
        grid(n1);
    }
}
    else{
       return;
    }  
    
}

const Button=document.getElementById("change-size");
Button.addEventListener('click',change);

window.onload = grid(gvalue=16);

