window.X=function(){function t(){}function e(){}function n(n){var o=new t;return"string"==typeof n?o.$=document.querySelector(n):o.$=n,null!=o.$&&void 0==o.on?o.__proto__=new e:o=void 0,o}function o(n){if(/^\#j-x-/.test(n)){var o=new t;return o.$=document.createElement("div"),o.$.id=n.replace(/^\#/,""),o.__proto__=new e,o}}function a(t){t.preventDefault()}e.prototype.html=function(t){return this.$.innerHTML=t,this},e.prototype.append=function(){return c.$.insertBefore(this.$,null),this},e.prototype.remove=function(){return c.$.removeChild(this.$),this},e.prototype.addClass=function(t){return t&&this.$.classList.add(t),this},e.prototype.hasClass=function(t){return!!t&&this.$.classList.contains(t)},e.prototype.on=function(t,e){return this.$.addEventListener(t,e),this},e.prototype.off=function(t,e){return this.$.removeEventListener(t,e),this},e.prototype.find=function(n){var o=new t;return o.$=this.$.querySelector(n),null!=o.$&&void 0==o.on?o.__proto__=new e:o=void 0,o},e.prototype.touchend=function(t){return this.on("touchstart",i.touchends).on("touchmove",i.touchends).on("touchend",i.touchends),this.$.__proto__.touchendCB=t,this};var c=n("body"),i={touchends:function(t){"touchstart"==t.type?i.touchendXY=i.touchendXY2=[t.changedTouches[0].pageX,t.changedTouches[0].pageY]:"touchmove"==t.type?i.touchendXY2=[t.changedTouches[0].pageX,t.changedTouches[0].pageY]:void 0!=this.touchendCB&&Math.abs(i.touchendXY[0]-i.touchendXY2[0])<5&&Math.abs(i.touchendXY[1]-i.touchendXY2[1])<5&&this.touchendCB.apply(this,[t])},alertBtnClick:function(){var t=void 0;n(this).hasClass("x-y")?"function"==typeof i.alertcbY&&(t=i.alertcbY):"function"==typeof i.alertcbN&&(t=i.alertcbN),r.removeAlert(t)}},r={loading:function(){var t=n("#j-x-loading");t&&r.removeLoading(),t=o("#j-x-loading").html("<span><i></i><i></i></span>").append().on("touchstart",a)},toast:function(t,e,a){var c=n("#j-x-toast");c&&(clearTimeout(i.t),c.remove(),a&&a()),e=e?e:2e3,c=o("#j-x-toast").html("<p>"+t+"</p>").append(),clearTimeout(i.t2),clearTimeout(i.t3),i.t2=setTimeout(function(){c.addClass("j-x-show")},0),i.t3=setTimeout(function(){r.removeToast(a)},e)},alert:function(t){void 0!=t&&"object"!=typeof t&&(t={txt:t}),t["class"]=t["class"]?t["class"]:"",t.txt=t.txt||t.text,t.btnY=t.btnY?t.btnY:t.btn?t.btn:"确定",i.alertcbN=t.callbackN?t.callbackN:void 0,i.alertcbY=t.callbackY?t.callbackY:t.callback?t.callback:void 0;var e=n("#j-x-alert");e&&(clearTimeout(i.t4),e.off("touchstart",a).remove());var c="<div class='x-inalert'><div class='p'><p>"+t.txt+"</p></div>";c+="<div class='x-btns'>",t.btnN&&(c+="<a href='javascript:;' class='x-btn x-n'>"+t.btnN+"</a>"),c+="<a href='javascript:;' class='x-btn x-y'>"+t.btnY+"</a>",c+="</div></div>",e=o("#j-x-alert").addClass(t["class"]).html(c).append().on("touchstart",a),setTimeout(function(){e.addClass("j-x-show")},0),t.btnN&&e.find(".x-inalert .x-btns .x-n").touchend(i.alertBtnClick),e.find(".x-inalert .x-btns .x-y").touchend(i.alertBtnClick)},removeAlert:function(t){var e=n("#j-x-alert");e&&(e.addClass("j-x-hide"),clearTimeout(i.t4),i.t4=setTimeout(function(){e.off("touchstart",a).remove(),t&&t()},150))},removeLoading:function(){var t=n("#j-x-loading");t&&t.off("touchstart",a).remove()},removeToast:function(t){var e=n("#j-x-toast");e&&(e.addClass("j-x-hide"),clearTimeout(i.t),i.t=setTimeout(function(){e.remove(),t&&t()},150))}};return r}();