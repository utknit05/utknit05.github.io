var color1 = document.querySelector("[name='color1']");
var color2 = document.querySelector("[name='color2']");
var body = document.querySelector("body");
var sp1 = document.querySelector("#c1");
var sp2 = document.querySelector("#c2");

function iniBg(){
	var c1 = genHexValue();
	var c2 = genHexValue();
	body.style.background =  "linear-gradient(to right,"
	+ c1 
	+ ", "
	+ c2
	+ ")";
    
  sp1.innerHTML = c1;
	sp1.style.backgroundColor = c1;
  sp2.innerHTML = c2;	
	sp2.style.backgroundColor = c2;
  color1.value = c1;
  color2.value = c2;
}

iniBg();


function setColor(){
body.style.background = "linear-gradient(to right,"
	+ color1.value 
	+ ", "
	+ color2.value
	+ ")";

	sp1.innerHTML = color1.value;
	sp1.style.backgroundColor = color1.value;
    sp2.innerHTML = color2.value;	
	sp2.style.backgroundColor = color2.value;
}


color1.addEventListener("input" , setColor);

color2.addEventListener("input" , setColor);

function genHexValue(){
	var c = "#";
	for(i=1;i<7;i++){
		c += genRanVariable();
	}
	return c;
}

function genRanVariable(){
   var v = (Math.floor(Math.random() * 16));

   if(v>9){
     switch (v){
      case 10:
        v = "a";
        break;
      case 11:
        v = "b";
        break;
      case 12:
        v = "c";
        break;
      case 13:
        v = "d";
        break;
      case 14:
        v = "e";
        break;
      case 15:
        v = "f";
        break;
     }
   }
  return v;
}