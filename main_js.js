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
					temp[i].addEventListener('click',scroller);
				}
			}
		}
	}
})();
