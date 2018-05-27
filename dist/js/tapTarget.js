"use strict";var _createClass=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),_get=function t(e,i,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,i);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,i,n)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(n):void 0};function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}!function(D){var e={onOpen:void 0,onClose:void 0},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_TapTarget=i).options=D.extend({},n.defaults,e),i.isOpen=!1,i.$origin=D("#"+i.$el.attr("data-target")),i._setup(),i._calculatePositioning(),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.TapTarget=void 0}},{key:"_setupEventHandlers",value:function(){this._handleDocumentClickBound=this._handleDocumentClick.bind(this),this._handleTargetClickBound=this._handleTargetClick.bind(this),this._handleOriginClickBound=this._handleOriginClick.bind(this),this.el.addEventListener("click",this._handleTargetClickBound),this.originEl.addEventListener("click",this._handleOriginClickBound);var t=M.throttle(this._handleResize,200);this._handleThrottledResizeBound=t.bind(this),window.addEventListener("resize",this._handleThrottledResizeBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleTargetClickBound),this.originEl.removeEventListener("click",this._handleOriginClickBound),window.removeEventListener("resize",this._handleThrottledResizeBound)}},{key:"_handleTargetClick",value:function(t){this.open()}},{key:"_handleOriginClick",value:function(t){this.close()}},{key:"_handleResize",value:function(t){this._calculatePositioning()}},{key:"_handleDocumentClick",value:function(t){D(t.target).closest(".tap-target-wrapper").length||(this.close(),t.preventDefault(),t.stopPropagation())}},{key:"_setup",value:function(){this.wrapper=this.$el.parent()[0],this.waveEl=D(this.wrapper).find(".tap-target-wave")[0],this.originEl=D(this.wrapper).find(".tap-target-origin")[0],this.contentEl=this.$el.find(".tap-target-content")[0],D(this.wrapper).hasClass(".tap-target-wrapper")||(this.wrapper=document.createElement("div"),this.wrapper.classList.add("tap-target-wrapper"),this.$el.before(D(this.wrapper)),this.wrapper.append(this.el)),this.contentEl||(this.contentEl=document.createElement("div"),this.contentEl.classList.add("tap-target-content"),this.$el.append(this.contentEl)),this.waveEl||(this.waveEl=document.createElement("div"),this.waveEl.classList.add("tap-target-wave"),this.originEl||(this.originEl=this.$origin.clone(!0,!0),this.originEl.addClass("tap-target-origin"),this.originEl.removeAttr("id"),this.originEl.removeAttr("style"),this.originEl=this.originEl[0],this.waveEl.append(this.originEl)),this.wrapper.append(this.waveEl))}},{key:"_calculatePositioning",value:function(){var t="fixed"===this.$origin.css("position");if(!t)for(var e=this.$origin.parents(),i=0;i<e.length&&!(t="fixed"==D(e[i]).css("position"));i++);var n=this.$origin.outerWidth(),o=this.$origin.outerHeight(),r=t?this.$origin.offset().top-M.getDocumentScrollTop():this.$origin.offset().top,s=t?this.$origin.offset().left-M.getDocumentScrollLeft():this.$origin.offset().left,a=window.innerWidth,l=window.innerHeight,h=a/2,c=l/2,p=s<=h,u=h<s,d=r<=c,g=c<r,f=.25*a<=s&&s<=.75*a,v=this.$el.outerWidth(),_=this.$el.outerHeight(),E=r+o/2-_/2,w=s+n/2-v/2,y=t?"fixed":"absolute",k=f?v:v/2+n,m=_/2,b=d?_/2:0,C=p&&!f?v/2-n:0,O=n,T=g?"bottom":"top",x=2*n,$=x,L=_/2-$/2,B=v/2-x/2,j={};j.top=d?E+"px":"",j.right=u?a-w-v+"px":"",j.bottom=g?l-E-_+"px":"",j.left=p?w+"px":"",j.position=y,D(this.wrapper).css(j),D(this.contentEl).css({width:k+"px",height:m+"px",top:b+"px",right:"0px",bottom:"0px",left:C+"px",padding:O+"px",verticalAlign:T}),D(this.waveEl).css({top:L+"px",left:B+"px",width:x+"px",height:$+"px"})}},{key:"open",value:function(){this.isOpen||("function"==typeof this.options.onOpen&&this.options.onOpen.call(this,this.$origin[0]),this.isOpen=!0,this.wrapper.classList.add("open"),document.body.addEventListener("click",this._handleDocumentClickBound,!0),document.body.addEventListener("touchend",this._handleDocumentClickBound))}},{key:"close",value:function(){this.isOpen&&("function"==typeof this.options.onClose&&this.options.onClose.call(this,this.$origin[0]),this.isOpen=!1,this.wrapper.classList.remove("open"),document.body.removeEventListener("click",this._handleDocumentClickBound,!0),document.body.removeEventListener("touchend",this._handleDocumentClickBound))}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_TapTarget}},{key:"defaults",get:function(){return e}}]),n}();M.TapTarget=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"tapTarget","M_TapTarget")}(cash);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhcFRhcmdldC5qcyJdLCJuYW1lcyI6WyIkIiwiX2RlZmF1bHRzIiwib25PcGVuIiwidW5kZWZpbmVkIiwib25DbG9zZSIsIlRhcFRhcmdldCIsIl9Db21wb25lbnQiLCJlbCIsIm9wdGlvbnMiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiX3RoaXMiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9fcHJvdG9fXyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiY2FsbCIsIk1fVGFwVGFyZ2V0IiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJpc09wZW4iLCIkb3JpZ2luIiwiJGVsIiwiYXR0ciIsIl9zZXR1cCIsIl9jYWxjdWxhdGVQb3NpdGlvbmluZyIsIl9zZXR1cEV2ZW50SGFuZGxlcnMiLCJfaW5oZXJpdHMiLCJDb21wb25lbnQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9yZW1vdmVFdmVudEhhbmRsZXJzIiwiX2hhbmRsZURvY3VtZW50Q2xpY2tCb3VuZCIsIl9oYW5kbGVEb2N1bWVudENsaWNrIiwiYmluZCIsIl9oYW5kbGVUYXJnZXRDbGlja0JvdW5kIiwiX2hhbmRsZVRhcmdldENsaWNrIiwiX2hhbmRsZU9yaWdpbkNsaWNrQm91bmQiLCJfaGFuZGxlT3JpZ2luQ2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwib3JpZ2luRWwiLCJ0aHJvdHRsZWRSZXNpemUiLCJfaGFuZGxlUmVzaXplIiwiX2hhbmRsZVRocm90dGxlZFJlc2l6ZUJvdW5kIiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJvcGVuIiwiY2xvc2UiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ3cmFwcGVyIiwid2F2ZUVsIiwiZmluZCIsImNvbnRlbnRFbCIsImhhc0NsYXNzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYmVmb3JlIiwiYXBwZW5kIiwicmVtb3ZlQXR0ciIsImlzRml4ZWQiLCJjc3MiLCJwYXJlbnRzIiwiaSIsIm9yaWdpbldpZHRoIiwib3V0ZXJXaWR0aCIsIm9yaWdpbkhlaWdodCIsIm9yaWdpblRvcCIsIm9mZnNldCIsInRvcCIsIk0iLCJnZXREb2N1bWVudFNjcm9sbFRvcCIsIm9yaWdpbkxlZnQiLCJsZWZ0IiwiZ2V0RG9jdW1lbnRTY3JvbGxMZWZ0Iiwid2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjZW50ZXJYIiwiY2VudGVyWSIsImlzTGVmdCIsImlzUmlnaHQiLCJpc1RvcCIsImlzQm90dG9tIiwiaXNDZW50ZXJYIiwidGFwVGFyZ2V0V2lkdGgiLCJ0YXBUYXJnZXRIZWlnaHQiLCJvdXRlckhlaWdodCIsInRhcFRhcmdldFRvcCIsInRhcFRhcmdldExlZnQiLCJ0YXBUYXJnZXRUZXh0V2lkdGgiLCJ0YXBUYXJnZXRUZXh0SGVpZ2h0IiwidGFwVGFyZ2V0VGV4dFRvcCIsInRhcFRhcmdldFRleHRMZWZ0IiwidGFwVGFyZ2V0VGV4dFBhZGRpbmciLCJ0YXBUYXJnZXRUZXh0QWxpZ24iLCJ0YXBUYXJnZXRXYXZlV2lkdGgiLCJ0YXBUYXJnZXRXYXZlSGVpZ2h0IiwidGFwVGFyZ2V0V2F2ZVRvcCIsInRhcFRhcmdldFdhdmVMZWZ0IiwidGFwVGFyZ2V0V3JhcHBlckNzc09iaiIsInBvc2l0aW9uIiwidGFwVGFyZ2V0UG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwicGFkZGluZyIsInRhcFRhcmdldFRleHRCb3R0b20iLCJ2ZXJ0aWNhbEFsaWduIiwidGFwVGFyZ2V0VGV4dFJpZ2h0IiwicmVtb3ZlIiwiYm9keSIsIl9nZXQiLCJlbHMiLCJnZXQiLCJqUXVlcnlMb2FkZWQiLCJpbml0aWFsaXplSnF1ZXJ5V3JhcHBlciIsImNhc2giXSwibWFwcGluZ3MiOiI0bkNBQUMsU0FBVUEsR0FHVCxJQUFJQyxFQUFZLENBQ2RDLFlB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Q3lIIiwiZmlsZSI6InRhcFRhcmdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgbGV0IF9kZWZhdWx0cyA9IHtcbiAgICBvbk9wZW46IHVuZGVmaW5lZCxcbiAgICBvbkNsb3NlOiB1bmRlZmluZWQsXG4gIH07XG5cblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuICBjbGFzcyBUYXBUYXJnZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBUYXBUYXJnZXQgaW5zdGFuY2VcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgICAgc3VwZXIoVGFwVGFyZ2V0LCBlbCwgb3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuZWwuTV9UYXBUYXJnZXQgPSB0aGlzO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBzZWxlY3RcbiAgICAgICAqIEBtZW1iZXIgVGFwVGFyZ2V0I29wdGlvbnNcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25PcGVuIC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gZmVhdHVyZSBkaXNjb3ZlcnkgaXMgb3BlbmVkXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uQ2xvc2UgLSBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBmZWF0dXJlIGRpc2NvdmVyeSBpcyBjbG9zZWRcbiAgICAgICAqL1xuICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIFRhcFRhcmdldC5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgIC8vIHNldHVwXG4gICAgICB0aGlzLiRvcmlnaW4gPSAkKCcjJyArIHRoaXMuJGVsLmF0dHIoJ2RhdGEtdGFyZ2V0JykpO1xuICAgICAgdGhpcy5fc2V0dXAoKTtcblxuICAgICAgdGhpcy5fY2FsY3VsYXRlUG9zaXRpb25pbmcoKTtcbiAgICAgIHRoaXMuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHN1cGVyLmluaXQodGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgIGxldCBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgcmV0dXJuIGRvbUVsZW0uTV9UYXBUYXJnZXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIHRoaXMuZWwuVGFwVGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIEV2ZW50IEhhbmRsZXJzXG4gICAgICovXG4gICAgX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuX2hhbmRsZVRhcmdldENsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVUYXJnZXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5faGFuZGxlT3JpZ2luQ2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZU9yaWdpbkNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVUYXJnZXRDbGlja0JvdW5kKTtcbiAgICAgIHRoaXMub3JpZ2luRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVPcmlnaW5DbGlja0JvdW5kKTtcblxuICAgICAgLy8gUmVzaXplXG4gICAgICBsZXQgdGhyb3R0bGVkUmVzaXplID0gTS50aHJvdHRsZSh0aGlzLl9oYW5kbGVSZXNpemUsIDIwMCk7XG4gICAgICB0aGlzLl9oYW5kbGVUaHJvdHRsZWRSZXNpemVCb3VuZCA9IHRocm90dGxlZFJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlVGhyb3R0bGVkUmVzaXplQm91bmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBFdmVudCBIYW5kbGVyc1xuICAgICAqL1xuICAgIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZVRhcmdldENsaWNrQm91bmQpO1xuICAgICAgdGhpcy5vcmlnaW5FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU9yaWdpbkNsaWNrQm91bmQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVRocm90dGxlZFJlc2l6ZUJvdW5kKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgVGFyZ2V0IENsaWNrXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIF9oYW5kbGVUYXJnZXRDbGljayhlKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgT3JpZ2luIENsaWNrXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIF9oYW5kbGVPcmlnaW5DbGljayhlKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIFJlc2l6ZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBfaGFuZGxlUmVzaXplKGUpIHtcbiAgICAgIHRoaXMuX2NhbGN1bGF0ZVBvc2l0aW9uaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIFJlc2l6ZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBfaGFuZGxlRG9jdW1lbnRDbGljayhlKSB7XG4gICAgICBpZiAoISQoZS50YXJnZXQpLmNsb3Nlc3QoJy50YXAtdGFyZ2V0LXdyYXBwZXInKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgVGFwIFRhcmdldFxuICAgICAqL1xuICAgIF9zZXR1cCgpIHtcbiAgICAgIC8vIENyZWF0aW5nIHRhcCB0YXJnZXRcbiAgICAgIHRoaXMud3JhcHBlciA9IHRoaXMuJGVsLnBhcmVudCgpWzBdO1xuICAgICAgdGhpcy53YXZlRWwgPSAkKHRoaXMud3JhcHBlcikuZmluZCgnLnRhcC10YXJnZXQtd2F2ZScpWzBdO1xuICAgICAgdGhpcy5vcmlnaW5FbCA9ICQodGhpcy53cmFwcGVyKS5maW5kKCcudGFwLXRhcmdldC1vcmlnaW4nKVswXTtcbiAgICAgIHRoaXMuY29udGVudEVsID0gdGhpcy4kZWwuZmluZCgnLnRhcC10YXJnZXQtY29udGVudCcpWzBdO1xuXG4gICAgICAvLyBDcmVhdGluZyB3cmFwcGVyXG4gICAgICBpZiAoISQodGhpcy53cmFwcGVyKS5oYXNDbGFzcygnLnRhcC10YXJnZXQtd3JhcHBlcicpKSB7XG4gICAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFwLXRhcmdldC13cmFwcGVyJyk7XG4gICAgICAgIHRoaXMuJGVsLmJlZm9yZSgkKHRoaXMud3JhcHBlcikpO1xuICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kKHRoaXMuZWwpO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGluZyBjb250ZW50XG4gICAgICBpZiAoIXRoaXMuY29udGVudEVsKSB7XG4gICAgICAgIHRoaXMuY29udGVudEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY29udGVudEVsLmNsYXNzTGlzdC5hZGQoJ3RhcC10YXJnZXQtY29udGVudCcpO1xuICAgICAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy5jb250ZW50RWwpO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGluZyBmb3JlZ3JvdW5kIHdhdmVcbiAgICAgIGlmICghdGhpcy53YXZlRWwpIHtcbiAgICAgICAgdGhpcy53YXZlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy53YXZlRWwuY2xhc3NMaXN0LmFkZCgndGFwLXRhcmdldC13YXZlJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRpbmcgb3JpZ2luXG4gICAgICAgIGlmICghdGhpcy5vcmlnaW5FbCkge1xuICAgICAgICAgIHRoaXMub3JpZ2luRWwgPSB0aGlzLiRvcmlnaW4uY2xvbmUodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5vcmlnaW5FbC5hZGRDbGFzcygndGFwLXRhcmdldC1vcmlnaW4nKTtcbiAgICAgICAgICB0aGlzLm9yaWdpbkVsLnJlbW92ZUF0dHIoJ2lkJyk7XG4gICAgICAgICAgdGhpcy5vcmlnaW5FbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgIHRoaXMub3JpZ2luRWwgPSB0aGlzLm9yaWdpbkVsWzBdO1xuICAgICAgICAgIHRoaXMud2F2ZUVsLmFwcGVuZCh0aGlzLm9yaWdpbkVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmQodGhpcy53YXZlRWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBwb3NpdGlvbmluZ1xuICAgICAqL1xuICAgIF9jYWxjdWxhdGVQb3NpdGlvbmluZygpIHtcbiAgICAgIC8vIEVsZW1lbnQgb3IgcGFyZW50IGlzIGZpeGVkIHBvc2l0aW9uP1xuICAgICAgbGV0IGlzRml4ZWQgPSB0aGlzLiRvcmlnaW4uY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnO1xuICAgICAgaWYgKCFpc0ZpeGVkKSB7XG4gICAgICAgIGxldCBwYXJlbnRzID0gdGhpcy4kb3JpZ2luLnBhcmVudHMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaXNGaXhlZCA9ICQocGFyZW50c1tpXSkuY3NzKCdwb3NpdGlvbicpID09ICdmaXhlZCc7XG4gICAgICAgICAgaWYgKGlzRml4ZWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDYWxjdWxhdGluZyBvcmlnaW5cbiAgICAgIGxldCBvcmlnaW5XaWR0aCA9IHRoaXMuJG9yaWdpbi5vdXRlcldpZHRoKCk7XG4gICAgICBsZXQgb3JpZ2luSGVpZ2h0ID0gdGhpcy4kb3JpZ2luLm91dGVySGVpZ2h0KCk7XG4gICAgICBsZXQgb3JpZ2luVG9wID0gaXNGaXhlZCA/IHRoaXMuJG9yaWdpbi5vZmZzZXQoKS50b3AgLSBNLmdldERvY3VtZW50U2Nyb2xsVG9wKCkgOiB0aGlzLiRvcmlnaW4ub2Zmc2V0KCkudG9wO1xuICAgICAgbGV0IG9yaWdpbkxlZnQgPSBpc0ZpeGVkID8gdGhpcy4kb3JpZ2luLm9mZnNldCgpLmxlZnQgLSBNLmdldERvY3VtZW50U2Nyb2xsTGVmdCgpIDogdGhpcy4kb3JpZ2luLm9mZnNldCgpLmxlZnQ7XG5cbiAgICAgIC8vIENhbGN1bGF0aW5nIHNjcmVlblxuICAgICAgbGV0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBsZXQgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgbGV0IGNlbnRlclggPSB3aW5kb3dXaWR0aCAvIDI7XG4gICAgICBsZXQgY2VudGVyWSA9IHdpbmRvd0hlaWdodCAvIDI7XG4gICAgICBsZXQgaXNMZWZ0ID0gb3JpZ2luTGVmdCA8PSBjZW50ZXJYO1xuICAgICAgbGV0IGlzUmlnaHQgPSBvcmlnaW5MZWZ0ID4gY2VudGVyWDtcbiAgICAgIGxldCBpc1RvcCA9IG9yaWdpblRvcCA8PSBjZW50ZXJZO1xuICAgICAgbGV0IGlzQm90dG9tID0gb3JpZ2luVG9wID4gY2VudGVyWTtcbiAgICAgIGxldCBpc0NlbnRlclggPSBvcmlnaW5MZWZ0ID49IHdpbmRvd1dpZHRoICogMC4yNSAmJiBvcmlnaW5MZWZ0IDw9IHdpbmRvd1dpZHRoICogMC43NTtcblxuICAgICAgLy8gQ2FsY3VsYXRpbmcgdGFwIHRhcmdldFxuICAgICAgbGV0IHRhcFRhcmdldFdpZHRoID0gdGhpcy4kZWwub3V0ZXJXaWR0aCgpO1xuICAgICAgbGV0IHRhcFRhcmdldEhlaWdodCA9IHRoaXMuJGVsLm91dGVySGVpZ2h0KCk7XG4gICAgICBsZXQgdGFwVGFyZ2V0VG9wID0gb3JpZ2luVG9wICsgb3JpZ2luSGVpZ2h0IC8gMiAtIHRhcFRhcmdldEhlaWdodCAvIDI7XG4gICAgICBsZXQgdGFwVGFyZ2V0TGVmdCA9IG9yaWdpbkxlZnQgKyBvcmlnaW5XaWR0aCAvIDIgLSB0YXBUYXJnZXRXaWR0aCAvIDI7XG4gICAgICBsZXQgdGFwVGFyZ2V0UG9zaXRpb24gPSBpc0ZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSc7XG5cbiAgICAgIC8vIENhbGN1bGF0aW5nIGNvbnRlbnRcbiAgICAgIGxldCB0YXBUYXJnZXRUZXh0V2lkdGggPSBpc0NlbnRlclggPyB0YXBUYXJnZXRXaWR0aCA6IHRhcFRhcmdldFdpZHRoIC8gMiArIG9yaWdpbldpZHRoO1xuICAgICAgbGV0IHRhcFRhcmdldFRleHRIZWlnaHQgPSB0YXBUYXJnZXRIZWlnaHQgLyAyO1xuICAgICAgbGV0IHRhcFRhcmdldFRleHRUb3AgPSBpc1RvcCA/IHRhcFRhcmdldEhlaWdodCAvIDIgOiAwO1xuICAgICAgbGV0IHRhcFRhcmdldFRleHRCb3R0b20gPSAwO1xuICAgICAgbGV0IHRhcFRhcmdldFRleHRMZWZ0ID0gaXNMZWZ0ICYmICFpc0NlbnRlclggPyB0YXBUYXJnZXRXaWR0aCAvIDIgLSBvcmlnaW5XaWR0aCA6IDA7XG4gICAgICBsZXQgdGFwVGFyZ2V0VGV4dFJpZ2h0ID0gMDtcbiAgICAgIGxldCB0YXBUYXJnZXRUZXh0UGFkZGluZyA9IG9yaWdpbldpZHRoO1xuICAgICAgbGV0IHRhcFRhcmdldFRleHRBbGlnbiA9IGlzQm90dG9tID8gJ2JvdHRvbScgOiAndG9wJztcblxuICAgICAgLy8gQ2FsY3VsYXRpbmcgd2F2ZVxuICAgICAgbGV0IHRhcFRhcmdldFdhdmVXaWR0aCA9IG9yaWdpbldpZHRoID4gb3JpZ2luSGVpZ2h0ID8gb3JpZ2luV2lkdGggKiAyIDogb3JpZ2luV2lkdGggKiAyO1xuICAgICAgbGV0IHRhcFRhcmdldFdhdmVIZWlnaHQgPSB0YXBUYXJnZXRXYXZlV2lkdGg7XG4gICAgICBsZXQgdGFwVGFyZ2V0V2F2ZVRvcCA9IHRhcFRhcmdldEhlaWdodCAvIDIgLSB0YXBUYXJnZXRXYXZlSGVpZ2h0IC8gMjtcbiAgICAgIGxldCB0YXBUYXJnZXRXYXZlTGVmdCA9IHRhcFRhcmdldFdpZHRoIC8gMiAtIHRhcFRhcmdldFdhdmVXaWR0aCAvIDI7XG5cbiAgICAgIC8vIFNldHRpbmcgdGFwIHRhcmdldFxuICAgICAgbGV0IHRhcFRhcmdldFdyYXBwZXJDc3NPYmogPSB7fTtcbiAgICAgIHRhcFRhcmdldFdyYXBwZXJDc3NPYmoudG9wID0gaXNUb3AgPyB0YXBUYXJnZXRUb3AgKyAncHgnIDogJyc7XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLnJpZ2h0ID0gaXNSaWdodCA/ICh3aW5kb3dXaWR0aCAtIHRhcFRhcmdldExlZnQgLSB0YXBUYXJnZXRXaWR0aCkgKyAncHgnIDogJyc7XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLmJvdHRvbSA9IGlzQm90dG9tID8gKHdpbmRvd0hlaWdodCAtIHRhcFRhcmdldFRvcCAtIHRhcFRhcmdldEhlaWdodCkgKyAncHgnIDogJyc7XG4gICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLmxlZnQgPSBpc0xlZnQgPyB0YXBUYXJnZXRMZWZ0ICsgJ3B4JyA6ICcnO1xuICAgICAgdGFwVGFyZ2V0V3JhcHBlckNzc09iai5wb3NpdGlvbiA9IHRhcFRhcmdldFBvc2l0aW9uO1xuICAgICAgJCh0aGlzLndyYXBwZXIpLmNzcyh0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqKTtcblxuICAgICAgLy8gU2V0dGluZyBjb250ZW50XG4gICAgICAkKHRoaXMuY29udGVudEVsKS5jc3Moe1xuICAgICAgICB3aWR0aDogdGFwVGFyZ2V0VGV4dFdpZHRoICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiB0YXBUYXJnZXRUZXh0SGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgdG9wOiB0YXBUYXJnZXRUZXh0VG9wICsgJ3B4JyxcbiAgICAgICAgcmlnaHQ6IHRhcFRhcmdldFRleHRSaWdodCArICdweCcsXG4gICAgICAgIGJvdHRvbTogdGFwVGFyZ2V0VGV4dEJvdHRvbSArICdweCcsXG4gICAgICAgIGxlZnQ6IHRhcFRhcmdldFRleHRMZWZ0ICsgJ3B4JyxcbiAgICAgICAgcGFkZGluZzogdGFwVGFyZ2V0VGV4dFBhZGRpbmcgKyAncHgnLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiB0YXBUYXJnZXRUZXh0QWxpZ25cbiAgICAgIH0pO1xuXG4gICAgICAvLyBTZXR0aW5nIHdhdmVcbiAgICAgICQodGhpcy53YXZlRWwpLmNzcyh7XG4gICAgICAgIHRvcDogdGFwVGFyZ2V0V2F2ZVRvcCArICdweCcsXG4gICAgICAgIGxlZnQ6IHRhcFRhcmdldFdhdmVMZWZ0ICsgJ3B4JyxcbiAgICAgICAgd2lkdGg6IHRhcFRhcmdldFdhdmVXaWR0aCArICdweCcsXG4gICAgICAgIGhlaWdodDogdGFwVGFyZ2V0V2F2ZUhlaWdodCArICdweCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW4gVGFwVGFyZ2V0XG4gICAgICovXG4gICAgb3BlbigpIHtcbiAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIG9uT3BlbiBjYWxsYmFja1xuICAgICAgaWYgKHR5cGVvZiAodGhpcy5vcHRpb25zLm9uT3BlbikgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLm9uT3Blbi5jYWxsKHRoaXMsIHRoaXMuJG9yaWdpblswXSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrQm91bmQsIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tCb3VuZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgVGFwIFRhcmdldFxuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIG9uQ2xvc2UgY2FsbGJhY2tcbiAgICAgIGlmICh0eXBlb2YgKHRoaXMub3B0aW9ucy5vbkNsb3NlKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLm9wdGlvbnMub25DbG9zZS5jYWxsKHRoaXMsIHRoaXMuJG9yaWdpblswXSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlRG9jdW1lbnRDbGlja0JvdW5kLCB0cnVlKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrQm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIE0uVGFwVGFyZ2V0ID0gVGFwVGFyZ2V0O1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoVGFwVGFyZ2V0LCAndGFwVGFyZ2V0JywgJ01fVGFwVGFyZ2V0Jyk7XG4gIH1cblxufShjYXNoKSk7XG4iXX0=