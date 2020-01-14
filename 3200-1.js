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
	var x = Math.floor(Math.random()*300);
	var y = Math.floor(Math.random()*300);
	object.style.top = x +'px';
	object.style.top = y +'px';
};
