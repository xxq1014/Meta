var login=document.querySelector('.user .login');
var reg=document.querySelector('.user .reg');
var loginfirst=document.querySelector('.loginfirst');
var registeredOne=document.querySelector('.registeredOne');
var registeredTwo=document.querySelector('.registeredTwo');

var loginbottom=document.querySelector('.registeredOne .loginbottom a');
var create=document.querySelector('.registeredOne .submit');
var registered=document.querySelector('.loginfirst .loginbottom');
var box=document.querySelectorAll('.box');
for(var i=0;i<box.length;i++){
	box[i].onclick=function(event){
		var oEvent=event || window.event;
		oEvent.cancelBubble=true;
	}
}
login.onclick=function(event){
	var oEvent=event || window.event;
	oEvent.cancelBubble=true;
	loginfirst.style.display='block';
	registeredOne.style.display='none';
	registeredTwo.style.display='none';
}
reg.onclick=function(event){
	var oEvent=event || window.event;
	oEvent.cancelBubble=true;
	loginfirst.style.display='none';
	registeredOne.style.display='block';
	registeredTwo.style.display='none';
}
loginbottom.onclick=function(event){
	var oEvent=event || window.event;
	oEvent.cancelBubble=true;
	loginfirst.style.display='block';
	registeredOne.style.display='none';
	registeredTwo.style.display='none';
}
create.onclick=function(event){
	var oEvent=event || window.event;
	oEvent.cancelBubble=true;
	loginfirst.style.display='none';
	registeredOne.style.display='none';
	registeredTwo.style.display='block';
}
registered.onclick=function(event){
	var oEvent=event || window.event;
	oEvent.cancelBubble=true;
	loginfirst.style.display='none';
	registeredOne.style.display='block';
	registeredTwo.style.display='none';
}
function none(){
	var loginfirst=document.querySelector('.loginfirst');
	var registeredOne=document.querySelector('.registeredOne');
	var registeredTwo=document.querySelector('.registeredTwo');
	loginfirst.style.display='none';
	registeredOne.style.display='none';
	registeredTwo.style.display='none';
}
loginfirst.onclick=function(){
	none();
}
registeredOne.onclick=function(){
	none();
}
registeredTwo.onclick=function(){
	none();
}