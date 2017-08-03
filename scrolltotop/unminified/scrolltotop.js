/*
 * scrolltotop
 * original script by Marco Del Corno [http://thewebthought.blogspot.com/2012/06/javascript-smooth-scroll-to-top-of-page.html]
 * modified by Heini Fagerlund
 * @version 1.0.0
 */

/*
* 
* Usage:
* ScrollToTop.init({linkDataAttrValue:'scrollToTop'}); 
* 
* 
**/
var ScrollToTop = (function () {

    var main = function (options) {
        var timeOut;
        var scrollToTop = function() { 
	  if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout(scrollToTop,10);
	  }
	  else clearTimeout(timeOut); 
        };
        var scrollTop = document.querySelector('[data-js=' + options.linkDataAttrValue + ']');
	scrollTop.onclick = function(e){
		e.preventDefault();
		scrollToTop();
	}
    };

    return {
        init: main
    };

})();

