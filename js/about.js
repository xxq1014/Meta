window.onload=function(){
	var nav=document.querySelector('.bigbox .nav');
	window.onscroll=function(event){
		var scrolltop=document.body.scrollTop || document.documentElement.scrollTop;
		if(scrolltop>=275){
			nav.className='navfixed';
		}else{
			nav.className='nav';
		}
	}
	var team=document.querySelector('.team');
	var design=document.querySelector('.design');
	var media=document.querySelector('.media');
	var contact=document.querySelector('.contact');
	var timer=null;
	team.onclick=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			var nowTop=document.body.scrollTop || document.documentElement.scrollTop;
			var speed=(1735-nowTop)/5;
			if(speed>0){
				speed=Math.floor(speed);
			}else{
				speed=Math.ceil(speed);
			}
			if(speed==0){
				clearInterval(timer);
			}
			document.body.scrollTop=document.documentElement.scrollTop=nowTop+speed;
		},30);
	}

	design.onclick=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			var nowTop=document.body.scrollTop || document.documentElement.scrollTop;
			var speed=(2845-nowTop)/5;
			if(speed>0){
				speed=Math.floor(speed);
			}else{
				speed=Math.ceil(speed);
			}
			if(speed==0){
				clearInterval(timer);
			}
			console.log(speed,nowTop);
			document.body.scrollTop=document.documentElement.scrollTop=nowTop+speed;
		},30);
	}

	media.onclick=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			var nowTop=document.body.scrollTop || document.documentElement.scrollTop;
			var speed=(4285-nowTop)/5;
			if(speed>0){
				speed=Math.floor(speed);
			}else{
				speed=Math.ceil(speed);
			}
			if(speed==0){
				clearInterval(timer);
			}
			console.log(speed,nowTop);
			document.body.scrollTop=document.documentElement.scrollTop=nowTop+speed;
		},30);
	}


	contact.onclick=function(){
		clearInterval(timer);
		timer=setInterval(function(){
			var nowTop=document.body.scrollTop || document.documentElement.scrollTop;
			var speed=(5165-nowTop)/5;
			if(speed>0){
				speed=Math.floor(speed);
			}else{
				speed=Math.ceil(speed);
			}
			if(speed==0){
				clearInterval(timer);
			}
			console.log(speed,nowTop);
			document.body.scrollTop=document.documentElement.scrollTop=nowTop+speed;
		},30);
	}
	
}