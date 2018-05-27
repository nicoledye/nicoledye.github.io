"use strict";var _createClass=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),_get=function e(t,n,i){null===t&&(t=Function.prototype);var l=Object.getOwnPropertyDescriptor(t,n);if(void 0===l){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,n,i)}if("value"in l)return l.value;var o=l.get;return void 0!==o?o.call(i):void 0};function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(s,o){var t={throttle:100,scrollOffset:200,activeClass:"active",getActiveElement:function(e){return'a[href="#'+e+'"]'}},e=function(e){function _(e,t){_classCallCheck(this,_);var n=_possibleConstructorReturn(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,_,e,t));return(n.el.M_ScrollSpy=n).options=s.extend({},_.defaults,t),_._elements.push(n),_._count++,_._increment++,n.tickId=-1,n.id=_._increment,n._setupEventHandlers(),n._handleWindowScroll(),n}return _inherits(_,Component),_createClass(_,[{key:"destroy",value:function(){_._elements.splice(_._elements.indexOf(this),1),_._elementsInView.splice(_._elementsInView.indexOf(this),1),_._visibleElements.splice(_._visibleElements.indexOf(this.$el),1),_._count--,this._removeEventHandlers(),s(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass),this.el.M_ScrollSpy=void 0}},{key:"_setupEventHandlers",value:function(){var e=M.throttle(this._handleWindowScroll,200);this._handleThrottledResizeBound=e.bind(this),this._handleWindowScrollBound=this._handleWindowScroll.bind(this),1===_._count&&(window.addEventListener("scroll",this._handleWindowScrollBound),window.addEventListener("resize",this._handleThrottledResizeBound),document.body.addEventListener("click",this._handleTriggerClick))}},{key:"_removeEventHandlers",value:function(){0===_._count&&(window.removeEventListener("scroll",this._handleWindowScrollBound),window.removeEventListener("resize",this._handleThrottledResizeBound),document.body.removeEventListener("click",this._handleTriggerClick))}},{key:"_handleTriggerClick",value:function(e){for(var t=s(e.target),n=_._elements.length-1;0<=n;n--){var i=_._elements[n];if(t.is('a[href="#'+i.$el.attr("id")+'"]')){e.preventDefault();var l=i.$el.offset().top+1;o({targets:[document.documentElement,document.body],scrollTop:l-i.options.scrollOffset,duration:400,easing:"easeOutCubic"});break}}}},{key:"_handleWindowScroll",value:function(){_._ticks++;for(var e=M.getDocumentScrollTop(),t=M.getDocumentScrollLeft(),n=t+window.innerWidth,i=e+window.innerHeight,l=_._findElements(e,n,i,t),s=0;s<l.length;s++){var o=l[s];o.tickId<0&&o._enter(),o.tickId=_._ticks}for(var r=0;r<_._elementsInView.length;r++){var c=_._elementsInView[r],a=c.tickId;0<=a&&a!==_._ticks&&(c._exit(),c.tickId=-1)}_._elementsInView=l}},{key:"_enter",value:function(){(_._visibleElements=_._visibleElements.filter(function(e){return 0!=e.height()}))[0]?(s(this.options.getActiveElement(_._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),_._visibleElements[0][0].M_ScrollSpy&&this.id<_._visibleElements[0][0].M_ScrollSpy.id?_._visibleElements.unshift(this.$el):_._visibleElements.push(this.$el)):_._visibleElements.push(this.$el),s(this.options.getActiveElement(_._visibleElements[0].attr("id"))).addClass(this.options.activeClass)}},{key:"_exit",value:function(){var t=this;(_._visibleElements=_._visibleElements.filter(function(e){return 0!=e.height()}))[0]&&(s(this.options.getActiveElement(_._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),(_._visibleElements=_._visibleElements.filter(function(e){return e.attr("id")!=t.$el.attr("id")}))[0]&&s(this.options.getActiveElement(_._visibleElements[0].attr("id"))).addClass(this.options.activeClass))}}],[{key:"init",value:function(e,t){return _get(_.__proto__||Object.getPrototypeOf(_),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){return(e.jquery?e[0]:e).M_ScrollSpy}},{key:"_findElements",value:function(e,t,n,i){for(var l=[],s=0;s<_._elements.length;s++){var o=_._elements[s],r=e+o.options.scrollOffset||200;if(0<o.$el.height()){var c=o.$el.offset().top,a=o.$el.offset().left,u=a+o.$el.width(),d=c+o.$el.height();!(t<a||u<i||n<c||d<r)&&l.push(o)}}return l}},{key:"defaults",get:function(){return t}}]),_}();e._elements=[],e._elementsInView=[],e._visibleElements=[],e._count=0,e._increment=0,e._ticks=0,M.ScrollSpy=e,M.jQueryLoaded&&M.initializeJqueryWrapper(e,"scrollSpy","M_ScrollSpy")}(cash,M.anime);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbHNweS5qcyJdLCJuYW1lcyI6WyIkIiwiYW5pbSIsIl9kZWZhdWx0cyIsInRocm90dGxlIiwic2Nyb2xsT2Zmc2V0IiwiYWN0aXZlQ2xhc3MiLCJnZXRBY3RpdmVFbGVtZW50IiwiaWQiLCJfQ29tcG9uZW50IiwiU2Nyb2xsU3B5IiwiZWwiLCJvcHRpb25zIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIl90aGlzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfX3Byb3RvX18iLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNhbGwiLCJNX1Njcm9sbFNweSIsImV4dGVuZCIsImRlZmF1bHRzIiwiX2VsZW1lbnRzIiwicHVzaCIsIl9jb3VudCIsIl9pbmNyZW1lbnQiLCJ0aWNrSWQiLCJfc2V0dXBFdmVudEhhbmRsZXJzIiwiX2hhbmRsZVdpbmRvd1Njcm9sbCIsIl9pbmhlcml0cyIsIkNvbXBvbmVudCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwic3BsaWNlIiwiaW5kZXhPZiIsIl9lbGVtZW50c0luVmlldyIsIl92aXNpYmxlRWxlbWVudHMiLCIkZWwiLCJfcmVtb3ZlRXZlbnRIYW5kbGVycyIsImF0dHIiLCJyZW1vdmVDbGFzcyIsInRocm90dGxlZFJlc2l6ZSIsIk0iLCJfaGFuZGxlVGhyb3R0bGVkUmVzaXplQm91bmQiLCJiaW5kIiwiX2hhbmRsZVdpbmRvd1Njcm9sbEJvdW5kIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRvY3VtZW50IiwiYm9keSIsIl9oYW5kbGVUcmlnZ2VyQ2xpY2siLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsIiR0cmlnZ2VyIiwibGVuZ3RoIiwiaSIsInByZXZlbnREZWZhdWx0Iiwib2Zmc2V0Iiwic2Nyb2xsc3B5IiwidG9wIiwidGFyZ2V0cyIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImR1cmF0aW9uIiwiZWFzaW5nIiwibGVmdCIsImdldERvY3VtZW50U2Nyb2xsTGVmdCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiaW50ZXJzZWN0aW9ucyIsIl9maW5kRWxlbWVudHMiLCJfZW50ZXIiLCJfdGlja3MiLCJsYXN0VGljayIsImZpbHRlciIsInVuc2hpZnQiLCJhZGRDbGFzcyIsImhlaWdodCIsIl90aGlzMiIsImVscyIsIl9nZXQiLCJjdXJyVG9wIiwiZWxMZWZ0IiwiZWxSaWdodCIsIndpZHRoIiwiZWxCb3R0b20iLCJlbFRvcCIsImhpdHMiLCJnZXQiLCJqUXVlcnlMb2FkZWQiLCJpbml0aWFsaXplSnF1ZXJ5V3JhcHBlciIsImNhc2giLCJhbmltZSJdLCJtYXBwaW5ncyI6IjRuQ0FBQSxTQUFXQSxFQUFHQyxHQUdaLElBQUlDLEVBQVksQ0FDZEMsU0FBVSxJQUNWQyxhQUFjLElBQ2RDLFlBQWEsU0FDYkMsaUJBQWtCLFNBQVVDLEdBQzFCLE1BQU8sWUFBY0EsRUFBSyxPQUo1QkosRUFKZ0IsU0FBQUssR0F1QmhCLFNBQUFDLEVBQVlDLEVBQUlDLEdBQVNDLGdCQUFBQyxLQUFBSixHQUFBLElBQUFLLEVBQUFDLDJCQUFBRixNQUFBSixFQUFBTyxXQUFBQyxPQUFBQyxlQUFBVCxJQUFBVSxLQUFBTixLQVgzQkosRUFBQUMsRUFBQUMsSUFXMkIsT0FHdkJHLEVBQUtKLEdBQUdVLFlBQVJOLEdBVUtILFFBQVVYLEVBQUVxQixPQUFPLEdBQUlaLEVBQVVhLFNBQVVYLEdBYnpCRixFQUFBYyxVQUFBQyxLQUFBVixHQWlCdkJMLEVBQVVnQixTQWpCYWhCLEVBQUFpQixhQW1CdkJaLEVBQUthLFFBQVUsRUFoQmZiLEVBQUFQLEdBQVFhLEVBQVJNLFdBa0JBWixFQUFLYyxzQkFoQkxkLEVBQUFlLHNCQUx1QmYsRUF2QlQsT0FBQWdCLFVBQUFyQixFQUdGc0IsV0FIRUMsYUFBQXZCLEVBQUEsQ0FBQSxDQUFBd0IsSUFBQSxVQUFBQyxNQUFBLFdBb0VkekIsRUFBVWMsVUFBVVksT0FBTzFCLEVBQVVjLFVBQVVhLFFBQVF2QixNQUFP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SUFBQSxnQkFBQUMsTUFBQSxTQTRKVjJCLEVBQUFRLEVBQUFFLEVBQUFKLEdBRUFQLElBREFBLElBQUFBLEVBQUFBLEdBQ0FBLEVBQUFBLEVBQUFBLEVBQVVqQyxFQUFWSixVQUFBaUMsT0FBQUMsSUFBQSxDQUNELElBQUFHLEVBQUFuRCxFQUFBYyxVQUFBa0MsR0FDRjRCLEVBQUF4QixFQUFBRCxFQUFBakQsUUFBQVAsY0FBQSxJQUVELEdBQUEsRUFBQXdELEVBQUFyQixJQUFBMEMsU0FBQSxDQUNBeEUsSUFBQUEsRUFBVTRCLEVBQUFBLElBQWtCb0MsU0FBQUEsSUFDN0JhLEVBQUExQixFQUFBckIsSUFBQW9CLFNBQUFRLEtBbUJPb0IsRUFBVUQsRUFBUzFCLEVBQVVyQixJQUFJaUQsUUFqQnpDQyxFQUFBQyxFQUFBOUIsRUFBQXJCLElBQUEwQyxXQW9CbUNaLEVBQVRpQixHQUNsQkMsRUFBVXBCLEdBQ0ZJLEVBQVJtQixHQUNBRCxFQUFXSixJQUdYTSxFQUFLbkUsS0FBS29DLElBUWhCbkQsT0FBQUEsSUF4TWMsQ0FBQXdCLElBQUEsV0FBQTJELElBQUEsV0FpRGQsT0FBTzFGLE1BakRPTyxFQUFBLEdBaVBsQkEsRUFBVWMsVUFBWSxHQXBMbEJkLEVBQUE0QixnQkFBZWpCLEdBb0hiWCxFQUFBNkIsaUJBQWdCN0IsR0FJZEEsRUFBQWdCLE9BRUU4RCxFQVNBSSxFQUFBQSxXQUFVL0IsRUFoTUZuRCxFQUFBbUUsT0FBQSxFQWlEZGhDLEVBQUFuQyxVQUFPUCxFQWpETzBDLEVBQUFpRCxjQXVSaEJqRCxFQUFFa0Qsd0JBQXdCckYsRUFBVyxZQUFhLGVBdlJ0RCxDQTBSR3NGLEtBQU1uRCxFQUFFb0QiLCJmaWxlIjoic2Nyb2xsc3B5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkLCBhbmltKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBsZXQgX2RlZmF1bHRzID0ge1xuICAgIHRocm90dGxlOiAxMDAsXG4gICAgc2Nyb2xsT2Zmc2V0OiAyMDAsIC8vIG9mZnNldCAtIDIwMCBhbGxvd3MgZWxlbWVudHMgbmVhciBib3R0b20gb2YgcGFnZSB0byBzY3JvbGxcbiAgICBhY3RpdmVDbGFzczogJ2FjdGl2ZScsXG4gICAgZ2V0QWN0aXZlRWxlbWVudDogZnVuY3Rpb24gKGlkKSB7XG4gICAgICByZXR1cm4gJ2FbaHJlZj1cIiMnICsgaWQgKyAnXCJdJztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cbiAgY2xhc3MgU2Nyb2xsU3B5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgU2Nyb2xsU3B5IGluc3RhbmNlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZWwsIG9wdGlvbnMpIHtcbiAgICAgIHN1cGVyKFNjcm9sbFNweSwgZWwsIG9wdGlvbnMpO1xuXG4gICAgICB0aGlzLmVsLk1fU2Nyb2xsU3B5ID0gdGhpcztcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgbW9kYWxcbiAgICAgICAqIEBtZW1iZXIgTW9kYWwjb3B0aW9uc1xuICAgICAgICogQHByb3Age051bWJlcn0gW3Rocm90dGxlPTEwMF0gLSBUaHJvdHRsZSBvZiBzY3JvbGwgaGFuZGxlclxuICAgICAgICogQHByb3Age051bWJlcn0gW3Njcm9sbE9mZnNldD0yMDBdIC0gT2Zmc2V0IGZvciBjZW50ZXJpbmcgZWxlbWVudCB3aGVuIHNjcm9sbGVkIHRvXG4gICAgICAgKiBAcHJvcCB7U3RyaW5nfSBbYWN0aXZlQ2xhc3M9J2FjdGl2ZSddIC0gQ2xhc3MgYXBwbGllZCB0byBhY3RpdmUgZWxlbWVudHNcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gW2dldEFjdGl2ZUVsZW1lbnRdIC0gVXNlZCB0byBmaW5kIGFjdGl2ZSBlbGVtZW50XG4gICAgICAgKi9cbiAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBTY3JvbGxTcHkuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBzZXR1cFxuICAgICAgU2Nyb2xsU3B5Ll9lbGVtZW50cy5wdXNoKHRoaXMpO1xuICAgICAgU2Nyb2xsU3B5Ll9jb3VudCsrO1xuICAgICAgU2Nyb2xsU3B5Ll9pbmNyZW1lbnQrKztcbiAgICAgIHRoaXMudGlja0lkID0gLTE7XG4gICAgICB0aGlzLmlkID0gU2Nyb2xsU3B5Ll9pbmNyZW1lbnQ7XG4gICAgICB0aGlzLl9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIHRoaXMuX2hhbmRsZVdpbmRvd1Njcm9sbCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHN1cGVyLmluaXQodGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgIGxldCBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgcmV0dXJuIGRvbUVsZW0uTV9TY3JvbGxTcHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIFNjcm9sbFNweS5fZWxlbWVudHMuc3BsaWNlKFNjcm9sbFNweS5fZWxlbWVudHMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgICBTY3JvbGxTcHkuX2VsZW1lbnRzSW5WaWV3LnNwbGljZShTY3JvbGxTcHkuX2VsZW1lbnRzSW5WaWV3LmluZGV4T2YodGhpcyksIDEpO1xuICAgICAgU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHMuc3BsaWNlKFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzLmluZGV4T2YodGhpcy4kZWwpLCAxKTtcbiAgICAgIFNjcm9sbFNweS5fY291bnQtLTtcbiAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICQodGhpcy5vcHRpb25zLmdldEFjdGl2ZUVsZW1lbnQodGhpcy4kZWwuYXR0cignaWQnKSkpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICB0aGlzLmVsLk1fU2Nyb2xsU3B5ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIEV2ZW50IEhhbmRsZXJzXG4gICAgICovXG4gICAgX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgIGxldCB0aHJvdHRsZWRSZXNpemUgPSBNLnRocm90dGxlKHRoaXMuX2hhbmRsZVdpbmRvd1Njcm9sbCwgMjAwKTtcbiAgICAgIHRoaXMuX2hhbmRsZVRocm90dGxlZFJlc2l6ZUJvdW5kID0gdGhyb3R0bGVkUmVzaXplLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLl9oYW5kbGVXaW5kb3dTY3JvbGxCb3VuZCA9IHRoaXMuX2hhbmRsZVdpbmRvd1Njcm9sbC5iaW5kKHRoaXMpO1xuICAgICAgaWYgKFNjcm9sbFNweS5fY291bnQgPT09IDEpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2hhbmRsZVdpbmRvd1Njcm9sbEJvdW5kKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVRocm90dGxlZFJlc2l6ZUJvdW5kKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZVRyaWdnZXJDbGljayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICovXG4gICAgX3JlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICBpZiAoU2Nyb2xsU3B5Ll9jb3VudCA9PT0gMCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5faGFuZGxlV2luZG93U2Nyb2xsQm91bmQpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlVGhyb3R0bGVkUmVzaXplQm91bmQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlVHJpZ2dlckNsaWNrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgVHJpZ2dlciBDbGlja1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBfaGFuZGxlVHJpZ2dlckNsaWNrKGUpIHtcbiAgICAgIGxldCAkdHJpZ2dlciA9ICQoZS50YXJnZXQpO1xuICAgICAgZm9yIChsZXQgaSA9IFNjcm9sbFNweS5fZWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgbGV0IHNjcm9sbHNweSA9IFNjcm9sbFNweS5fZWxlbWVudHNbaV07XG4gICAgICAgIGlmICgkdHJpZ2dlci5pcygnYVtocmVmPVwiIycgKyBzY3JvbGxzcHkuJGVsLmF0dHIoJ2lkJykgKyAnXCJdJykpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgbGV0IG9mZnNldCA9IHNjcm9sbHNweS4kZWwub2Zmc2V0KCkudG9wICsgMTtcblxuICAgICAgICAgIGFuaW0oe1xuICAgICAgICAgICAgdGFyZ2V0czogW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sXG4gICAgICAgICAgICBzY3JvbGxUb3A6IG9mZnNldCAtIHNjcm9sbHNweS5vcHRpb25zLnNjcm9sbE9mZnNldCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgV2luZG93IFNjcm9sbFxuICAgICAqL1xuICAgIF9oYW5kbGVXaW5kb3dTY3JvbGwoKSB7XG4gICAgICAvLyB1bmlxdWUgdGljayBpZFxuICAgICAgU2Nyb2xsU3B5Ll90aWNrcysrO1xuXG4gICAgICAvLyB2aWV3cG9ydCByZWN0YW5nbGVcbiAgICAgIGxldCB0b3AgPSBNLmdldERvY3VtZW50U2Nyb2xsVG9wKCksXG4gICAgICAgIGxlZnQgPSBNLmdldERvY3VtZW50U2Nyb2xsTGVmdCgpLFxuICAgICAgICByaWdodCA9IGxlZnQgKyB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgYm90dG9tID0gdG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggZWxlbWVudHMgYXJlIGluIHZpZXdcbiAgICAgIGxldCBpbnRlcnNlY3Rpb25zID0gU2Nyb2xsU3B5Ll9maW5kRWxlbWVudHModG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW50ZXJzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2Nyb2xsc3B5ID0gaW50ZXJzZWN0aW9uc1tpXTtcbiAgICAgICAgbGV0IGxhc3RUaWNrID0gc2Nyb2xsc3B5LnRpY2tJZDtcbiAgICAgICAgaWYgKGxhc3RUaWNrIDwgMCkge1xuICAgICAgICAgIC8vIGVudGVyZWQgaW50byB2aWV3XG4gICAgICAgICAgc2Nyb2xsc3B5Ll9lbnRlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHRpY2sgaWRcbiAgICAgICAgc2Nyb2xsc3B5LnRpY2tJZCA9IFNjcm9sbFNweS5fdGlja3M7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU2Nyb2xsU3B5Ll9lbGVtZW50c0luVmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2Nyb2xsc3B5ID0gU2Nyb2xsU3B5Ll9lbGVtZW50c0luVmlld1tpXTtcbiAgICAgICAgbGV0IGxhc3RUaWNrID0gc2Nyb2xsc3B5LnRpY2tJZDtcbiAgICAgICAgaWYgKGxhc3RUaWNrID49IDAgJiYgbGFzdFRpY2sgIT09IFNjcm9sbFNweS5fdGlja3MpIHtcbiAgICAgICAgICAvLyBleGl0ZWQgZnJvbSB2aWV3XG4gICAgICAgICAgc2Nyb2xsc3B5Ll9leGl0KCk7XG4gICAgICAgICAgc2Nyb2xsc3B5LnRpY2tJZCA9IC0xO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHJlbWVtYmVyIGVsZW1lbnRzIGluIHZpZXcgZm9yIG5leHQgdGlja1xuICAgICAgU2Nyb2xsU3B5Ll9lbGVtZW50c0luVmlldyA9IGludGVyc2VjdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBlbGVtZW50cyB0aGF0IGFyZSB3aXRoaW4gdGhlIGJvdW5kYXJ5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRvcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByaWdodFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b21cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbGVmdFxuICAgICAqIEByZXR1cm4ge0FycmF5LjxTY3JvbGxTcHk+fSAgIEEgY29sbGVjdGlvbiBvZiBlbGVtZW50c1xuICAgICAqL1xuICAgIHN0YXRpYyBfZmluZEVsZW1lbnRzKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkge1xuICAgICAgbGV0IGhpdHMgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU2Nyb2xsU3B5Ll9lbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2Nyb2xsc3B5ID0gU2Nyb2xsU3B5Ll9lbGVtZW50c1tpXTtcbiAgICAgICAgbGV0IGN1cnJUb3AgPSB0b3AgKyBzY3JvbGxzcHkub3B0aW9ucy5zY3JvbGxPZmZzZXQgfHwgMjAwO1xuXG4gICAgICAgIGlmIChzY3JvbGxzcHkuJGVsLmhlaWdodCgpID4gMCkge1xuICAgICAgICAgIGxldCBlbFRvcCA9IHNjcm9sbHNweS4kZWwub2Zmc2V0KCkudG9wLFxuICAgICAgICAgICAgZWxMZWZ0ID0gc2Nyb2xsc3B5LiRlbC5vZmZzZXQoKS5sZWZ0LFxuICAgICAgICAgICAgZWxSaWdodCA9IGVsTGVmdCArIHNjcm9sbHNweS4kZWwud2lkdGgoKSxcbiAgICAgICAgICAgIGVsQm90dG9tID0gZWxUb3AgKyBzY3JvbGxzcHkuJGVsLmhlaWdodCgpO1xuXG4gICAgICAgICAgbGV0IGlzSW50ZXJzZWN0ID0gIShlbExlZnQgPiByaWdodCB8fFxuICAgICAgICAgICAgZWxSaWdodCA8IGxlZnQgfHxcbiAgICAgICAgICAgIGVsVG9wID4gYm90dG9tIHx8XG4gICAgICAgICAgICBlbEJvdHRvbSA8IGN1cnJUb3ApO1xuXG4gICAgICAgICAgaWYgKGlzSW50ZXJzZWN0KSB7XG4gICAgICAgICAgICBoaXRzLnB1c2goc2Nyb2xsc3B5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBoaXRzO1xuICAgIH1cblxuICAgIF9lbnRlcigpIHtcbiAgICAgIFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzID0gU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuaGVpZ2h0KCkgIT0gMDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHNbMF0pIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZ2V0QWN0aXZlRWxlbWVudChTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50c1swXS5hdHRyKCdpZCcpKSkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgaWYgKFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzWzBdWzBdLk1fU2Nyb2xsU3B5ICYmIHRoaXMuaWQgPCBTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50c1swXVswXS5NX1Njcm9sbFNweS5pZCkge1xuICAgICAgICAgIFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzLnVuc2hpZnQodGhpcy4kZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzLnB1c2godGhpcy4kZWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50cy5wdXNoKHRoaXMuJGVsKTtcbiAgICAgIH1cblxuICAgICAgJCh0aGlzLm9wdGlvbnMuZ2V0QWN0aXZlRWxlbWVudChTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50c1swXS5hdHRyKCdpZCcpKSkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICB9XG5cbiAgICBfZXhpdCgpIHtcbiAgICAgIFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzID0gU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuaGVpZ2h0KCkgIT0gMDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHNbMF0pIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZ2V0QWN0aXZlRWxlbWVudChTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50c1swXS5hdHRyKCdpZCcpKSkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcblxuICAgICAgICBTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50cyA9IFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzLmZpbHRlcigoZWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gZWwuYXR0cignaWQnKSAhPSB0aGlzLiRlbC5hdHRyKCdpZCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzWzBdKSB7IC8vIENoZWNrIGlmIGVtcHR5XG4gICAgICAgICAgJCh0aGlzLm9wdGlvbnMuZ2V0QWN0aXZlRWxlbWVudChTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50c1swXS5hdHRyKCdpZCcpKSkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBTY3JvbGxTcHlcbiAgICogQHR5cGUge0FycmF5LjxTY3JvbGxTcHk+fVxuICAgKi9cbiAgU2Nyb2xsU3B5Ll9lbGVtZW50cyA9IFtdO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBTY3JvbGxTcHlcbiAgICogQHR5cGUge0FycmF5LjxTY3JvbGxTcHk+fVxuICAgKi9cbiAgU2Nyb2xsU3B5Ll9lbGVtZW50c0luVmlldyA9IFtdO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBTY3JvbGxTcHlcbiAgICogQHR5cGUge0FycmF5LjxjYXNoPn1cbiAgICovXG4gIFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzID0gW107XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIFNjcm9sbFNweVxuICAgKi9cbiAgU2Nyb2xsU3B5Ll9jb3VudCA9IDA7XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIFNjcm9sbFNweVxuICAgKi9cbiAgU2Nyb2xsU3B5Ll9pbmNyZW1lbnQgPSAwO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBTY3JvbGxTcHlcbiAgICovXG4gIFNjcm9sbFNweS5fdGlja3MgPSAwO1xuXG5cbiAgTS5TY3JvbGxTcHkgPSBTY3JvbGxTcHk7XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihTY3JvbGxTcHksICdzY3JvbGxTcHknLCAnTV9TY3JvbGxTcHknKTtcbiAgfVxuXG59KShjYXNoLCBNLmFuaW1lKTtcbiJdfQ==
