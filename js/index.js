
	var img=document.querySelectorAll('.tab img');
	var dot=document.querySelectorAll('.tab ol li');
	for(var i=0;i<dot.length;i++){
		dot[i].index=i;
		dot[i].onclick=function(){
			for(var i=0;i<dot.length;i++){
				img[i].className='';
				dot[i].id='';
			}
			img[this.index].className='active';
			dot[this.index].id='active';
		}
	}
