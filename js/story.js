var ul=document.querySelector('.shuffling ul');
var div=document.querySelector('.shuffling div')
ul.innerHTML=ul.innerHTML+ul.innerHTML;
var li=ul.children;
ul.style.width=3668+"px";
function move(){

	if(ul.offsetLeft<=-ul.offsetWidth/2){
		ul.style.left=0;
	}else{
		ul.style.left=ul.offsetLeft-2+'px';
	}
}
var timer=setInterval(move,30);
div.onmouseover=function(){
	clearInterval(timer);
}
div.onmouseout=function(){
	timer=setInterval(move,30);
}