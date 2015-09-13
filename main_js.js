var smoothscroller = (function(){
	function scroller(e){
		e.preventDefault();
		target = (document.getElementById(this.getAttribute('href').split('#')[1])).offsetTop;
		var myinterval;
		function scroll() {
			if (window.scrollY >=target) {
				clearInterval(myinterval);
			} 
			else {
				window.scrollTo(window.scrollX, window.scrollY + 10);
			}
        }
		myinterval = setInterval(scroll,1);
	}
	return{
		init:function(){
			var temp = document.getElementsByTagName('a');
			for( var i =0 ; i<temp.length ; i++ ){
				if(temp[i].getAttribute('href')[0]==="#"){
					if(temp[i].getAttribute('href')=="#nav"||temp[i].getAttribute('href')=="#"){
						continue;
					}
					temp[i].addEventListener('click',scroller);
				}
			}
		}
	}
})();

var menutoggle = (function(){
	var menu;
	var cross;
	function func(){
		cross.addEventListener('click',function(){
			menu.style.zIndex="2";
			cross.style.zIndex="1";
		});
		menu.addEventListener('click',function(){
			cross.style.zIndex="2";
			menu.style.zIndex="1";
		});
	}
	return{
		init:function(){
			menu=document.getElementById('menu');	
			cross=document.getElementById('cross');
			func();
		}
	}
})();


