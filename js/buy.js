var bigImg=document.querySelector('.bigImg');
var bigImgimg=document.querySelector('.bigImg img');
var pictureleft=document.querySelector('.pictureleft');
var piece=document.querySelector('.piece');
var picture=document.querySelector('.picture');
pictureleft.onmouseover=function(){
	bigImg.style.display='block';
	piece.style.display='block';
}
pictureleft.onmouseout=function(){
	bigImg.style.display='none';
	piece.style.display='none';
}
pictureleft.onmousemove=function(event){
	var oEvent=event || window.event;
	var scroll=document.body.scrollTop || document.documentElement.scrollTop;
	var x=oEvent.clientX-picture.offsetLeft-piece.offsetWidth/2;
	var y=oEvent.clientY-picture.offsetTop+scroll-piece.offsetHeight/2;
	piece.style.left=x+'px';
	piece.style.top=y+'px';
	if((x+piece.offsetWidth/2)<=piece.offsetWidth/2){
		piece.style.left=0+'px';
	}else if((x+piece.offsetWidth/2)>=bigImg.offsetWidth-piece.offsetWidth/2){
		piece.style.left=bigImg.offsetWidth-piece.offsetWidth+'px';
	}

	if((y+piece.offsetHeight/2)<=piece.offsetHeight/2){
		piece.style.top=0+'px';
	}else if((y+piece.offsetHeight/2)>=bigImg.offsetHeight-piece.offsetHeight/2){
		piece.style.top=bigImg.offsetHeight-piece.offsetHeight+'px';
	}
	bigImgimg.style.top=-piece.offsetTop*2.5+'px';
	bigImgimg.style.left=-piece.offsetLeft*2.5+'px';
}


var picturerightImg=document.querySelectorAll('.pictureright .img1');
var pictureleftImg=document.querySelector('.pictureleft img');
var bigImgimg=document.querySelector('.bigImg img');
for(var i=0;i<picturerightImg.length;i++){
	picturerightImg[i].index=i;
	picturerightImg[i].onclick=function(){
		var src=picturerightImg[this.index].src;
		pictureleftImg.src=src;
		bigImgimg.src=src;
	}
}
