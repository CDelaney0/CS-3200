
var count=2;
function incrementCount(){
	count++;
}
function addTarget() {
	var Ntarget = document.createElement("button");
	var image = document.createElement("img");
	image.setAttribute("src","bulleye.jpg");
	Ntarget.setAttribute("id", "target"+count);
	incrementCount()
	Ntarget.setAttribute("onclick", "score(id)");
	Ntarget.innerHTML += '<img src="'+image.src+'" width="50" height="50"/>';
	document.body.appendChild(Ntarget)

}

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

function score(button){
	//relocate the target
	var x = Math.floor(Math.random()*window.innerHeight);
	var y = Math.floor(Math.random()*window.innerWidth);
	document.getElementById(button).style.top = x +'px';
	document.getElementById(button).style.left = y +'px';
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


//load the different table entries
window.onload = loadDeus();
window.onload = loadData();
window.onload = loadMechi();
window.onload = loadRobbie();
window.onload = loadRusty();

function loadDeus() {
	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("deus").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "deus_time.txt", true);
  xhttp.send(); 
}
function loadData() {
	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("data").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "data_time.txt", true);
  xhttp.send(); 
}
function loadMechi() {
	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("mechi").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "mechi_time.txt", true);
  xhttp.send(); 
}
function loadRobbie() {
	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("robbie").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "robbie_time.txt", true);
  xhttp.send(); 
}
function loadRusty() {
	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("rusty").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "rusty_time.txt", true);
  xhttp.send(); 
}
