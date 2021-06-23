var numSquares=6;
var pickedColor;
var colors=[];
var squares=document.querySelectorAll(".square");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
  setSquares();
  reset();
}
 
 function setupModeButtons(){
 	for(var i=0;i<modeButtons.length;i++){
 		modeButtons[i].addEventListener("click",function(){
 			modeButtons[0].classList.remove("selected");
 			modeButtons[1].classList.remove("selected");
 			this.classList.add("selected");
 			if(this.textContent==="Easy"){
 				numSquares=3;
 			}
 			else{
 				numSquares=6;
 			}
 			reset();
 		});
 	}
 }
    function setSquares(){

        for(var i=0;i<squares.length;i++){
          squares[i].addEventListener("click",function(){
          var clickedColor=this.style.background;
          if(clickedColor===pickedColor){
              messagedisplay.textContent="correct!"
              resetButton.textContent="play Again!";
              changeColors(clickedColor);
              h1.style.background=clickedColor;
          }
          else{
            this.style.background="#232323";
           }
        })
    }
}
    function changeColors(color){
      for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
      }
    }
   function reset(){
       colors=generateRandomColors(numSquares);
       pickedColor=colors[Math.floor(Math.random()*colors.length)];
       resetButton.textContent="New Colors";
       messagedisplay.textContent="";
       for(var i=0;i<squares.length;i++){
        if(colors[i]){
          squares[i].style.display="block";
          squares[i].style.background=colors[i];
          }
          else{
            squares[i].style.display="none";
          }
          h1.style.background="steelblue";
       }
       resetButton.addEventListener("click",function(){
        reset();
       })
   }
      function generateRandomColors(num){
      var arr=[];
      for(var i=0;i<num;i++){
        arr.push(randomColor());
      }
      return arr;
    }
       function randomColor(){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        //rgb(125,125,125)
        return "rgb("+r+", "+g+", "+b+")";
       }