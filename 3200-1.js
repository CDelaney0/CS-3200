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

function loadDeus(){
	fetch("deus.txt")
	if (this.responseText != undefined){
	then(document.getElementById("deus").innerHTML = this.responseText)
	} else{
		then(document.getElementById("deus").innerHTML = 10)
	}
}

function loadData(){
	fetch("data.txt")
	if (this.responseText != undefined){
	then(document.getElementById("data").innerHTML = this.responseText)
	} else{
		then(document.getElementById("data").innerHTML = 10)}
}

function loadMechi(){
	fetch("mechi.txt")
	if (this.responseText != undefined){
	then(document.getElementById("mechi").innerHTML = this.responseText)
	} else{
		then(document.getElementById("mechi").innerHTML = 10)}
}

function loadRobbie(){
	fetch("robbie.txt")
	if (this.responseText != undefined){
	then(document.getElementById("robbie").innerHTML = this.responseText)
	} else{
		then(document.getElementById("robbie").innerHTML = 10)}
}

function loadRusty(){
	fetch("rusty.txt")
	if (this.responseText != undefined){
	then(document.getElementById("rusty").innerHTML = this.responseText)
	} else{
		then(document.getElementById("rusty").innerHTML = 10)}
}
