///alert("connected");




///restart

 var restart = document.querySelector("#b");


/////Squares
var Squares = document.querySelectorAll("td");

///clear all squares
function clear(){
for(i=0 ; i < Squares.length ; i++)
{
    Squares[i].innerText="";
}
}

restart.addEventListener("click",clear);


///check the square markers

function ticTacToe(){
    if(this.textContent === ""){
        this.textContent = "X";
    }
    else if(this.textContent === "X") {
        this.innerText = "O";
    }
    else{
        this.textContent ="";
    }
}





///event listeners
for(var i=0 ; i < Squares.length ; i++){
Squares[i].addEventListener("click",ticTacToe)

}
///


function darkMode(){
    var element = document.body;
    var square = document.querySelectorAll("td");
    
    element.classList.toggle("darkMode");
    for(j=0 ; j < square.length ; j++){
    square[j].classList.toggle("tddark");
    }
}