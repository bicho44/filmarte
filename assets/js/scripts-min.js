+function($){"use strict";function t(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}$.fn.emulateTransitionEnd=function(t){var e=!1,i=this;$(this).one("bsTransitionEnd",function(){e=!0});var n=function(){e||$(i).trigger($.support.transition.end)};return setTimeout(n,t),this},$(function(){$.support.transition=t(),$.support.transition&&($.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(t){return $(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),n=i.data("bs.carousel"),s=$.extend({},e.DEFAULTS,i.data(),"object"==typeof t&&t),a="string"==typeof t?t:s.slide;n||i.data("bs.carousel",n=new e(this,s)),"number"==typeof t?n.to(t):a?n[a]():s.interval&&n.pause().cycle()})}var e=function(t,e){this.$element=$(t).on("keydown.bs.carousel",$.proxy(this.keydown,this)),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter.bs.carousel",$.proxy(this.pause,this)).on("mouseleave.bs.carousel",$.proxy(this.cycle,this))};e.VERSION="3.2.0",e.TRANSITION_DURATION=600,e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},e.prototype.keydown=function(t){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()},e.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval)),this},e.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},e.prototype.getItemForDirection=function(t,e){var i="prev"==t?-1:1,n=this.getItemIndex(e),s=(n+i)%this.$items.length;return this.$items.eq(s)},e.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));return t>this.$items.length-1||0>t?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",this.$items.eq(t))},e.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&$.support.transition&&(this.$element.trigger($.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){return this.sliding?void 0:this.slide("next")},e.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},e.prototype.slide=function(t,i){var n=this.$element.find(".item.active"),s=i||this.getItemForDirection(t,n),a=this.interval,o="next"==t?"left":"right",r="next"==t?"first":"last",l=this;if(!s.length){if(!this.options.wrap)return;s=this.$element.find(".item")[r]()}if(s.hasClass("active"))return this.sliding=!1;var d=s[0],h=$.Event("slide.bs.carousel",{relatedTarget:d,direction:o});if(this.$element.trigger(h),!h.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var c=$(this.$indicators.children()[this.getItemIndex(s)]);c&&c.addClass("active")}var p=$.Event("slid.bs.carousel",{relatedTarget:d,direction:o});return $.support.transition&&this.$element.hasClass("slide")?(s.addClass(t),s[0].offsetWidth,n.addClass(o),s.addClass(o),n.one("bsTransitionEnd",function(){s.removeClass([t,o].join(" ")).addClass("active"),n.removeClass(["active",o].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(p)},0)}).emulateTransitionEnd(e.TRANSITION_DURATION)):(n.removeClass("active"),s.addClass("active"),this.sliding=!1,this.$element.trigger(p)),a&&this.cycle(),this}};var i=$.fn.carousel;$.fn.carousel=t,$.fn.carousel.Constructor=e,$.fn.carousel.noConflict=function(){return $.fn.carousel=i,this},$(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(e){var i,n=$(this),s=$(n.attr("data-target")||(i=n.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""));if(s.hasClass("carousel")){var a=$.extend({},s.data(),n.data()),o=n.attr("data-slide-to");o&&(a.interval=!1),t.call(s,a),o&&s.data("bs.carousel").to(o),e.preventDefault()}}),$(window).on("load",function(){$('[data-ride="carousel"]').each(function(){var e=$(this);t.call(e,e.data())})})}(jQuery),+function($){"use strict";function t(t){return this.each(function(){var i=$(this),n=i.data("bs.collapse"),s=$.extend({},e.DEFAULTS,i.data(),"object"==typeof t&&t);!n&&s.toggle&&"show"==t&&(s.toggle=!1),n||i.data("bs.collapse",n=new e(this,s)),"string"==typeof t&&n[t]()})}var e=function(t,i){this.$element=$(t),this.options=$.extend({},e.DEFAULTS,i),this.transitioning=null,this.options.parent&&(this.$parent=$(this.options.parent)),this.options.toggle&&this.toggle()};e.VERSION="3.2.0",e.TRANSITION_DURATION=350,e.DEFAULTS={toggle:!0},e.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var i=$.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){var n=this.$parent&&this.$parent.find("> .panel > .in");if(n&&n.length){var s=n.data("bs.collapse");if(s&&s.transitioning)return;t.call(n,"hide"),s||n.data("bs.collapse",null)}var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0),this.transitioning=1;var o=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!$.support.transition)return o.call(this);var r=$.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",$.proxy(o,this)).emulateTransitionEnd(e.TRANSITION_DURATION)[a](this.$element[0][r])}}},e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=$.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in"),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return $.support.transition?void this.$element[i](0).one("bsTransitionEnd",$.proxy(n,this)).emulateTransitionEnd(e.TRANSITION_DURATION):n.call(this)}}},e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var i=$.fn.collapse;$.fn.collapse=t,$.fn.collapse.Constructor=e,$.fn.collapse.noConflict=function(){return $.fn.collapse=i,this},$(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(e){var i,n=$(this),s=n.attr("data-target")||e.preventDefault()||(i=n.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),a=$(s),o=a.data("bs.collapse"),r=o?"toggle":n.data(),l=n.attr("data-parent"),d=l&&$(l);o&&o.transitioning||(d&&d.find('[data-toggle="collapse"][data-parent="'+l+'"]').not(n).addClass("collapsed"),n.toggleClass("collapsed",a.hasClass("in"))),t.call(a,r)})}(jQuery),+function($){"use strict";function t(t){t&&3===t.which||($(n).remove(),$(s).each(function(){var i=$(this),n=e(i),s={relatedTarget:this};n.hasClass("open")&&(n.trigger(t=$.Event("hide.bs.dropdown",s)),t.isDefaultPrevented()||(i.attr("aria-expanded","false"),n.removeClass("open").trigger("hidden.bs.dropdown",s)))}))}function e(t){var e=t.attr("data-target");e||(e=t.attr("href"),e=e&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i=e&&$(e);return i&&i.length?i:t.parent()}function i(t){return this.each(function(){var e=$(this),i=e.data("bs.dropdown");i||e.data("bs.dropdown",i=new a(this)),"string"==typeof t&&i[t].call(e)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',a=function(t){$(t).on("click.bs.dropdown",this.toggle)};a.VERSION="3.2.0",a.prototype.toggle=function(i){var n=$(this);if(!n.is(".disabled, :disabled")){var s=e(n),a=s.hasClass("open");if(t(),!a){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click",t);var o={relatedTarget:this};if(s.trigger(i=$.Event("show.bs.dropdown",o)),i.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger("shown.bs.dropdown",o)}return!1}},a.prototype.keydown=function(t){if(/(38|40|27)/.test(t.keyCode)){var i=$(this);if(t.preventDefault(),t.stopPropagation(),!i.is(".disabled, :disabled")){var n=e(i),a=n.hasClass("open");if(!a||a&&27==t.keyCode)return 27==t.which&&n.find(s).trigger("focus"),i.trigger("click");var o=" li:not(.divider):visible a",r=n.find('[role="menu"]'+o+', [role="listbox"]'+o);if(r.length){var l=r.index(r.filter(":focus"));38==t.keyCode&&l>0&&l--,40==t.keyCode&&l<r.length-1&&l++,~l||(l=0),r.eq(l).trigger("focus")}}}};var o=$.fn.dropdown;$.fn.dropdown=i,$.fn.dropdown.Constructor=a,$.fn.dropdown.noConflict=function(){return $.fn.dropdown=o,this},$(document).on("click.bs.dropdown.data-api",t).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,a.prototype.toggle).on("keydown.bs.dropdown.data-api",s+', [role="menu"], [role="listbox"]',a.prototype.keydown)}(jQuery);