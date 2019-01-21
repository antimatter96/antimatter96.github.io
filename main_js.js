var displaceHeader = (function() {
	var target;	
	var limit;
	var flag = false;
	function popp() {
		if(window.scrollY >= limit && !flag) {
			target.classList.add("displaced");
			bo = flag;
		}
		else if(window.scrollY <= limit) {
			bo = false;
			target.classList.remove("displaced");
		}
	}
	return {
		init:function(item) {
			target = document.getElementById(item);
			limit = target.offsetHeight;
			window.addEventListener("scroll", popp);
		}
	};
})();

var correctPadding = (function() {
	var target;
	var nuisance;
	var possibletargets;	
	function func(e) {
		e.preventDefault();
		target.checked = false;
		var whereTo = document.getElementById(this.attributes.href.value.split('#')[1]);
		window.scroll(0, whereTo.offsetTop - nuisance);
	}
	return {
		init:function(item, item2) {
			target = document.getElementById(item);
			nuisance = document.getElementById(item2).offsetHeight;
			possibletargets = document.getElementsByTagName('a');
			for(var i=0;i<possibletargets.length;i++) {
				if(possibletargets[i].attributes.href.value[0] == '#') {
					possibletargets[i].addEventListener("click", func);
				}
			}
		}
	};
})();
