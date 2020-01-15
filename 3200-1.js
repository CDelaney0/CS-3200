var start = Date.now();
function DisplayName(){
	//replace the name with player chosen name
	var name =document.getElementById("name").value;
    document.getElementById("playername").innerHTML = name;
	//remove the player name box
	var e1 = document.getElementById("name");
	var e2 = document.getElementById("namesubmit");
	e1.parentNode.removeChild(e1);
	e2.parentNode.removeChild(e2);
	
	
};
var object = document.getElementById("target");
object.onclick=function(){
	//relocate the target
	var x = Math.floor(Math.random()*window.innerHeight);
	var y = Math.floor(Math.random()*window.innerWidth);
	object.style.top = x +'px';
	object.style.left = y +'px';
	//determine how long it took the player and update player times where appropriate
	var lap = Date.now() - start;
	start = Date.now();
	document.getElementById("playercurrentscore").innerHTML = lap;
	var best = document.getElementById("playerbestscore").innerHTML;
	//if new lap is faster then old best update it
	if (best > lap){
		document.getElementById("playerbestscore").innerHTML = lap;
		}
};
