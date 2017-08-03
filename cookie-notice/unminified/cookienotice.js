/*
 * cookienotice
 * @copyright (c) Heini Fagerlund 2017
 * @version 1.0.0
 */

/*
* 
* Usage:
* CookieNotice.init({btnDataAttrValue:'hideCookieNotice', hideNoticeAnimClass: 'hide', hiddenNoticeClass: 'hidden'});
* 
**/
var CookieNotice = (function () {

    var datajs = function (selector) {
        return document.querySelectorAll('[data-js=' + selector + ']');
    };

    var main = function (options) {
        var elem = datajs(options.btnDataAttrValue);
        var hideNotice = function () {
	        this.parentNode.setAttribute("class", options.hideNoticeAnimClass);
	        if (typeof(Storage) !== "undefined") {
                localStorage.showNotice = 0;
            }
        };
        for (var i = 0; i < elem.length; i++) {
            var self = elem[i];
            if(localStorage.showNotice == 0) {
               self.parentNode.setAttribute("class", options.hiddenNoticeClass); 
            }
            self.onclick = hideNotice;
        }
    };

    return {
        init: main
    };

})();
