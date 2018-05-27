"use strict";var _createClass=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),_get=function e(t,i,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,i);if(void 0===o){var l=Object.getPrototypeOf(t);return null===l?void 0:e(l,i,n)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(n):void 0};function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(a,r){var t={accordion:!0,onOpenStart:void 0,onOpenEnd:void 0,onCloseStart:void 0,onCloseEnd:void 0,inDuration:300,outDuration:300},e=function(e){function o(e,t){_classCallCheck(this,o);var i=_possibleConstructorReturn(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,o,e,t));(i.el.M_Collapsible=i).options=a.extend({},o.defaults,t),i.$headers=i.$el.children("li").children(".collapsible-header"),i.$headers.attr("tabindex",0),i._setupEventHandlers();var n=i.$el.children("li.active").children(".collapsible-body");return i.options.accordion?n.first().css("display","block"):n.css("display","block"),i}return _inherits(o,Component),_createClass(o,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Collapsible=void 0}},{key:"_setupEventHandlers",value:function(){var t=this;this._handleCollapsibleClickBound=this._handleCollapsibleClick.bind(this),this._handleCollapsibleKeydownBound=this._handleCollapsibleKeydown.bind(this),this.el.addEventListener("click",this._handleCollapsibleClickBound),this.$headers.each(function(e){e.addEventListener("keydown",t._handleCollapsibleKeydownBound)})}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleCollapsibleClickBound)}},{key:"_handleCollapsibleClick",value:function(e){var t=a(e.target).closest(".collapsible-header");if(e.target&&t.length){var i=t.closest(".collapsible");if(i[0]===this.el){var n=t.closest("li"),o=i.children("li"),l=n[0].classList.contains("active"),s=o.index(n);l?this.close(s):this.open(s)}}}},{key:"_handleCollapsibleKeydown",value:function(e){13===e.keyCode&&this._handleCollapsibleClickBound(e)}},{key:"_animateIn",value:function(e){var t=this,i=this.$el.children("li").eq(e);if(i.length){var n=i.children(".collapsible-body");r.remove(n[0]),n.css({display:"block",overflow:"hidden",height:0,paddingTop:"",paddingBottom:""});var o=n.css("padding-top"),l=n.css("padding-bottom"),s=n[0].scrollHeight;n.css({paddingTop:0,paddingBottom:0}),r({targets:n[0],height:s,paddingTop:o,paddingBottom:l,duration:this.options.inDuration,easing:"easeInOutCubic",complete:function(e){n.css({overflow:"",paddingTop:"",paddingBottom:"",height:""}),"function"==typeof t.options.onOpenEnd&&t.options.onOpenEnd.call(t,i[0])}})}}},{key:"_animateOut",value:function(e){var t=this,i=this.$el.children("li").eq(e);if(i.length){var n=i.children(".collapsible-body");r.remove(n[0]),n.css("overflow","hidden"),r({targets:n[0],height:0,paddingTop:0,paddingBottom:0,duration:this.options.outDuration,easing:"easeInOutCubic",complete:function(){n.css({height:"",overflow:"",padding:"",display:""}),"function"==typeof t.options.onCloseEnd&&t.options.onCloseEnd.call(t,i[0])}})}}},{key:"open",value:function(e){var i=this,t=this.$el.children("li").eq(e);if(t.length&&!t[0].classList.contains("active")){if("function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,t[0]),this.options.accordion){var n=this.$el.children("li");this.$el.children("li.active").each(function(e){var t=n.index(a(e));i.close(t)})}t[0].classList.add("active"),this._animateIn(e)}}},{key:"close",value:function(e){var t=this.$el.children("li").eq(e);t.length&&t[0].classList.contains("active")&&("function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,t[0]),t[0].classList.remove("active"),this._animateOut(e))}}],[{key:"init",value:function(e,t){return _get(o.__proto__||Object.getPrototypeOf(o),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){return(e.jquery?e[0]:e).M_Collapsible}},{key:"defaults",get:function(){return t}}]),o}();M.Collapsible=e,M.jQueryLoaded&&M.initializeJqueryWrapper(e,"collapsible","M_Collapsible")}(cash,M.anime);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxhcHNpYmxlLmpzIl0sIm5hbWVzIjpbIiQiLCJhbmltIiwiX2RlZmF1bHRzIiwiYWNjb3JkaW9uIiwib25PcGVuU3RhcnQiLCJ1bmRlZmluZWQiLCJvbk9wZW5FbmQiLCJvbkNsb3NlU3RhcnQiLCJvbkNsb3NlRW5kIiwiaW5EdXJhdGlvbiIsIm91dER1cmF0aW9uIiwiX0NvbXBvbmVudCIsIkNvbGxhcHNpYmxlIiwiZWwiLCJvcHRpb25zIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIl90aGlzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfX3Byb3RvX18iLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNhbGwiLCJNX0NvbGxhcHNpYmxlIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCIkaGVhZGVycyIsImNoaWxkcmVuIiwiYXR0ciIsIl9zZXR1cEV2ZW50SGFuZGxlcnMiLCIkYWN0aXZlQm9kaWVzIiwiJGVsIiwiZmlyc3QiLCJjc3MiLCJfaW5oZXJpdHMiLCJDb21wb25lbnQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9yZW1vdmVFdmVudEhhbmRsZXJzIiwiX2hhbmRsZUNvbGxhcHNpYmxlQ2xpY2tCb3VuZCIsIl9oYW5kbGVDb2xsYXBzaWJsZUNsaWNrIiwiYmluZCIsIl9oYW5kbGVDb2xsYXBzaWJsZUtleWRvd25Cb3VuZCIsIl9oYW5kbGVDb2xsYXBzaWJsZUtleWRvd24iLCJhZGRFdmVudExpc3RlbmVyIiwiZWFjaCIsImhlYWRlciIsIl90aGlzMiIsImUiLCIkaGVhZGVyIiwidGFyZ2V0IiwiY2xvc2VzdCIsImxlbmd0aCIsIiRjb2xsYXBzaWJsZSIsIiRjb2xsYXBzaWJsZUxpIiwiJGNvbGxhcHNpYmxlTGlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImluZGV4IiwiaXNBY3RpdmUiLCJjbG9zZSIsIm9wZW4iLCJrZXlDb2RlIiwiX3RoaXMzIiwiZXEiLCIkYm9keSIsInJlbW92ZSIsImRpc3BsYXkiLCJvdmVyZmxvdyIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicFRvcCIsInBCb3R0b20iLCJmaW5hbEhlaWdodCIsInNjcm9sbEhlaWdodCIsInRhcmdldHMiLCJkdXJhdGlvbiIsImVhc2luZyIsImNvbXBsZXRlIiwicGFkZGluZyIsIl90aGlzNCIsImNvbnRhaW5zIiwiX3RoaXM1IiwiYWRkIiwiX2FuaW1hdGVJbiIsIl9hbmltYXRlT3V0IiwiX2dldCIsImVscyIsImpxdWVyeSIsImdldCIsIk0iLCJqUXVlcnlMb2FkZWQiLCIkYWN0aXZlTGlzIiwiY2FzaCIsImFuaW1lIl0sIm1hcHBpbmdzIjoiNG5DQUFDLFNBQVVBLEVBQUdDLEdBR1osSUFBSUMsRUFBWSxDQUNkQyxXQUFXLEVBQ1hDLGlCQUFhQyxFQUNiQyxlQUFXRCxFQUNYRSxrQkFBY0YsRUFDZEcsZ0JBQVlILEVBQ1pJLFdBQVksSUFDWkMsWUFBYSxLQUpiSixFQU5nQixTQUFBSyxHQWNsQixTQUFBQyxFQUFBQyxFQUFBQyxHQUFBQyxnQkFBQUMsS0FBQUosR0FBQSxJQUFBSyxFQUFBQywyQkFBQUYsTUFBQUosRUFBQU8sV0FBQUMsT0FBQUMsZUFBQVQsSUFBQVUsS0FBQU4sS0FZVUosRUFBYUMsRUFBSUMsS0FFdkJHLEVBQUtKLEdBQUdVLGNBQVJOLEdBYUtILFFBQVVkLEVBQUV3QixPQUFPLEdBQUlaLEVBQVlhLFNBQVVYLEdBYmxERyxFQUFBUyxTQUFRSCxFQUFBQSxJQUFSSSxTQUFBLE1BQUFBLFNBQUEsdUJBaUJBVixFQUFLUyxTQUFTRSxLQUFLLFdBQVksR0FFL0JYLEVBQUtZLHNCQUdMLElBQUlDLEVBQWdCYixFQUFLYyxJQUFJSixTQUFTLGFBQWFBLFNBQVMscUJBcENoRSxPQXFDUVYsRUFBS0gsUUFBUVgsVUFDZjJCLEVBQWNFLFFBQVFDLElBQUksVUFBVyxTQUdyQ0gsRUFBY0csSUFBSSxVQUFXLFNBekNuQ2hCLEVBZGtCLE9BQUFpQixVQUFBdEIsRUFHRnVCLFdBSEVDLGFBQUF4QixF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QyxPQUFBQyxlQUFBVCxHQUFBLE9BQUFJLE1BQUFNLEtBQUFOLEtBQWtCQSxLQUFNeUUsRUFBSzNFLEtBaEVmLENBQUF1QixJQUFBLGNBQUFDLE1BQUEsU0FzRFB6QixHQUNMaUIsT0FET2pCLEVBQUE2RSxPQUFBN0UsRUFBQSxHQUFBQSxHQUNQaUIsZ0JBdkRZLENBQUFPLElBQUEsV0FBQXNELElBQUEsV0E0Q2QsT0FBS2pFLE1BNUNTZCxFQUFBLEdBeU9aZ0YsRUFBQWhGLFlBQUlBLEVBRUZnRixFQUFBQyxjQUNBQyxFQUFBQSx3QkFBZ0JsRixFQUFRLGNBQUEsaUJBNU9qQyxDQStPVW1GLEtBQUFILEVBQUFJIiwiZmlsZSI6ImNvbGxhcHNpYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkLCBhbmltKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBsZXQgX2RlZmF1bHRzID0ge1xuICAgIGFjY29yZGlvbjogdHJ1ZSxcbiAgICBvbk9wZW5TdGFydDogdW5kZWZpbmVkLFxuICAgIG9uT3BlbkVuZDogdW5kZWZpbmVkLFxuICAgIG9uQ2xvc2VTdGFydDogdW5kZWZpbmVkLFxuICAgIG9uQ2xvc2VFbmQ6IHVuZGVmaW5lZCxcbiAgICBpbkR1cmF0aW9uOiAzMDAsXG4gICAgb3V0RHVyYXRpb246IDMwMFxuICB9O1xuXG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cbiAgY2xhc3MgQ29sbGFwc2libGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBDb2xsYXBzaWJsZSBpbnN0YW5jZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgICBzdXBlcihDb2xsYXBzaWJsZSwgZWwsIG9wdGlvbnMpO1xuXG4gICAgICB0aGlzLmVsLk1fQ29sbGFwc2libGUgPSB0aGlzO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBjb2xsYXBzaWJsZVxuICAgICAgICogQG1lbWJlciBDb2xsYXBzaWJsZSNvcHRpb25zXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gW2FjY29yZGlvbj1mYWxzZV0gLSBUeXBlIG9mIHRoZSBjb2xsYXBzaWJsZVxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbk9wZW5TdGFydCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBiZWZvcmUgY29sbGFwc2libGUgaXMgb3BlbmVkXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uT3BlbkVuZCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBhZnRlciBjb2xsYXBzaWJsZSBpcyBvcGVuZWRcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25DbG9zZVN0YXJ0IC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIGJlZm9yZSBjb2xsYXBzaWJsZSBpcyBjbG9zZWRcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25DbG9zZUVuZCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBhZnRlciBjb2xsYXBzaWJsZSBpcyBjbG9zZWRcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IGluRHVyYXRpb24gLSBUcmFuc2l0aW9uIGluIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IG91dER1cmF0aW9uIC0gVHJhbnNpdGlvbiBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMuXG4gICAgICAgKi9cbiAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBDb2xsYXBzaWJsZS5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIC8vIFNldHVwIHRhYiBpbmRpY2VzXG4gICAgICB0aGlzLiRoZWFkZXJzID0gdGhpcy4kZWwuY2hpbGRyZW4oJ2xpJykuY2hpbGRyZW4oJy5jb2xsYXBzaWJsZS1oZWFkZXInKTtcbiAgICAgIHRoaXMuJGhlYWRlcnMuYXR0cigndGFiaW5kZXgnLCAwKTtcblxuICAgICAgdGhpcy5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG5cbiAgICAgIC8vIE9wZW4gZmlyc3QgYWN0aXZlXG4gICAgICBsZXQgJGFjdGl2ZUJvZGllcyA9IHRoaXMuJGVsLmNoaWxkcmVuKCdsaS5hY3RpdmUnKS5jaGlsZHJlbignLmNvbGxhcHNpYmxlLWJvZHknKTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uKSB7IC8vIEhhbmRsZSBBY2NvcmRpb25cbiAgICAgICAgJGFjdGl2ZUJvZGllcy5maXJzdCgpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgICB9IGVsc2UgeyAvLyBIYW5kbGUgRXhwYW5kYWJsZXNcbiAgICAgICAgJGFjdGl2ZUJvZGllcy5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRzKCkge1xuICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBzdXBlci5pbml0KHRoaXMsIGVscywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IEluc3RhbmNlXG4gICAgICovXG4gICAgc3RhdGljIGdldEluc3RhbmNlKGVsKSB7XG4gICAgICBsZXQgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgIHJldHVybiBkb21FbGVtLk1fQ29sbGFwc2libGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIHRoaXMuZWwuTV9Db2xsYXBzaWJsZSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAqL1xuICAgIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICB0aGlzLl9oYW5kbGVDb2xsYXBzaWJsZUNsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVDb2xsYXBzaWJsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLl9oYW5kbGVDb2xsYXBzaWJsZUtleWRvd25Cb3VuZCA9IHRoaXMuX2hhbmRsZUNvbGxhcHNpYmxlS2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNvbGxhcHNpYmxlQ2xpY2tCb3VuZCk7XG4gICAgICB0aGlzLiRoZWFkZXJzLmVhY2goKGhlYWRlcikgPT4ge1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUNvbGxhcHNpYmxlS2V5ZG93bkJvdW5kKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBFdmVudCBIYW5kbGVyc1xuICAgICAqL1xuICAgIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNvbGxhcHNpYmxlQ2xpY2tCb3VuZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIENvbGxhcHNpYmxlIENsaWNrXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIF9oYW5kbGVDb2xsYXBzaWJsZUNsaWNrKGUpIHtcbiAgICAgIGxldCAkaGVhZGVyID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmNvbGxhcHNpYmxlLWhlYWRlcicpO1xuICAgICAgaWYgKGUudGFyZ2V0ICYmICRoZWFkZXIubGVuZ3RoKSB7XG4gICAgICAgIGxldCAkY29sbGFwc2libGUgPSAkaGVhZGVyLmNsb3Nlc3QoJy5jb2xsYXBzaWJsZScpO1xuICAgICAgICBpZiAoJGNvbGxhcHNpYmxlWzBdID09PSB0aGlzLmVsKSB7XG4gICAgICAgICAgbGV0ICRjb2xsYXBzaWJsZUxpID0gJGhlYWRlci5jbG9zZXN0KCdsaScpO1xuICAgICAgICAgIGxldCAkY29sbGFwc2libGVMaXMgPSAkY29sbGFwc2libGUuY2hpbGRyZW4oJ2xpJyk7XG4gICAgICAgICAgbGV0IGlzQWN0aXZlID0gJGNvbGxhcHNpYmxlTGlbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKTtcbiAgICAgICAgICBsZXQgaW5kZXggPSAkY29sbGFwc2libGVMaXMuaW5kZXgoJGNvbGxhcHNpYmxlTGkpO1xuXG4gICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKGluZGV4KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcGVuKGluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgQ29sbGFwc2libGUgS2V5ZG93blxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBfaGFuZGxlQ29sbGFwc2libGVLZXlkb3duKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNvbGxhcHNpYmxlQ2xpY2tCb3VuZChlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbmltYXRlIGluIGNvbGxhcHNpYmxlIHNsaWRlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gMHRoIGluZGV4IG9mIHNsaWRlXG4gICAgICovXG4gICAgX2FuaW1hdGVJbihpbmRleCkge1xuICAgICAgbGV0ICRjb2xsYXBzaWJsZUxpID0gdGhpcy4kZWwuY2hpbGRyZW4oJ2xpJykuZXEoaW5kZXgpO1xuICAgICAgaWYgKCRjb2xsYXBzaWJsZUxpLmxlbmd0aCkge1xuICAgICAgICBsZXQgJGJvZHkgPSAkY29sbGFwc2libGVMaS5jaGlsZHJlbignLmNvbGxhcHNpYmxlLWJvZHknKTtcblxuICAgICAgICBhbmltLnJlbW92ZSgkYm9keVswXSk7XG4gICAgICAgICRib2R5LmNzcyh7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgIHBhZGRpbmdUb3A6ICcnLFxuICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwVG9wID0gJGJvZHkuY3NzKCdwYWRkaW5nLXRvcCcpO1xuICAgICAgICBsZXQgcEJvdHRvbSA9ICRib2R5LmNzcygncGFkZGluZy1ib3R0b20nKTtcbiAgICAgICAgbGV0IGZpbmFsSGVpZ2h0ID0gJGJvZHlbMF0uc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAkYm9keS5jc3Moe1xuICAgICAgICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogMFxuICAgICAgICB9KTtcblxuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiAkYm9keVswXSxcbiAgICAgICAgICBoZWlnaHQ6IGZpbmFsSGVpZ2h0LFxuICAgICAgICAgIHBhZGRpbmdUb3A6IHBUb3AsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogcEJvdHRvbSxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmluRHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0Q3ViaWMnLFxuICAgICAgICAgIGNvbXBsZXRlOiAoYW5pbSkgPT4ge1xuICAgICAgICAgICAgJGJvZHkuY3NzKHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAgICAgICBwYWRkaW5nVG9wOiAnJyxcbiAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJycsXG4gICAgICAgICAgICAgIGhlaWdodDogJydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBvbk9wZW5FbmQgY2FsbGJhY2tcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMub3B0aW9ucy5vbk9wZW5FbmQpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbk9wZW5FbmQuY2FsbCh0aGlzLCAkY29sbGFwc2libGVMaVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbmltYXRlIG91dCBjb2xsYXBzaWJsZSBzbGlkZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIDB0aCBpbmRleCBvZiBzbGlkZSB0byBvcGVuXG4gICAgICovXG4gICAgX2FuaW1hdGVPdXQoaW5kZXgpIHtcbiAgICAgIGxldCAkY29sbGFwc2libGVMaSA9IHRoaXMuJGVsLmNoaWxkcmVuKCdsaScpLmVxKGluZGV4KTtcbiAgICAgIGlmICgkY29sbGFwc2libGVMaS5sZW5ndGgpIHtcbiAgICAgICAgbGV0ICRib2R5ID0gJGNvbGxhcHNpYmxlTGkuY2hpbGRyZW4oJy5jb2xsYXBzaWJsZS1ib2R5Jyk7XG4gICAgICAgIGFuaW0ucmVtb3ZlKCRib2R5WzBdKTtcbiAgICAgICAgJGJvZHkuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgYW5pbSh7XG4gICAgICAgICAgdGFyZ2V0czogJGJvZHlbMF0sXG4gICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dEN1YmljJyxcbiAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgJGJvZHkuY3NzKHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiAnJyxcbiAgICAgICAgICAgICAgZGlzcGxheTogJydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBvbkNsb3NlRW5kIGNhbGxiYWNrXG4gICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLm9wdGlvbnMub25DbG9zZUVuZCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xvc2VFbmQuY2FsbCh0aGlzLCAkY29sbGFwc2libGVMaVswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcGVuIENvbGxhcHNpYmxlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gMHRoIGluZGV4IG9mIHNsaWRlXG4gICAgICovXG4gICAgb3BlbihpbmRleCkge1xuICAgICAgbGV0ICRjb2xsYXBzaWJsZUxpID0gdGhpcy4kZWwuY2hpbGRyZW4oJ2xpJykuZXEoaW5kZXgpO1xuICAgICAgaWYgKCRjb2xsYXBzaWJsZUxpLmxlbmd0aCAmJiAhJGNvbGxhcHNpYmxlTGlbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuXG4gICAgICAgIC8vIG9uT3BlblN0YXJ0IGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMub3B0aW9ucy5vbk9wZW5TdGFydCkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25PcGVuU3RhcnQuY2FsbCh0aGlzLCAkY29sbGFwc2libGVMaVswXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgYWNjb3JkaW9uIGJlaGF2aW9yXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uKSB7XG4gICAgICAgICAgbGV0ICRjb2xsYXBzaWJsZUxpcyA9IHRoaXMuJGVsLmNoaWxkcmVuKCdsaScpO1xuICAgICAgICAgIGxldCAkYWN0aXZlTGlzID0gdGhpcy4kZWwuY2hpbGRyZW4oJ2xpLmFjdGl2ZScpO1xuICAgICAgICAgICRhY3RpdmVMaXMuZWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9ICRjb2xsYXBzaWJsZUxpcy5pbmRleCgkKGVsKSk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKGluZGV4KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuaW1hdGUgaW5cbiAgICAgICAgJGNvbGxhcHNpYmxlTGlbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGVJbihpbmRleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2UgQ29sbGFwc2libGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggLSAwdGggaW5kZXggb2Ygc2xpZGVcbiAgICAgKi9cbiAgICBjbG9zZShpbmRleCkge1xuICAgICAgbGV0ICRjb2xsYXBzaWJsZUxpID0gdGhpcy4kZWwuY2hpbGRyZW4oJ2xpJykuZXEoaW5kZXgpO1xuICAgICAgaWYgKCRjb2xsYXBzaWJsZUxpLmxlbmd0aCAmJiAkY29sbGFwc2libGVMaVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG5cbiAgICAgICAgLy8gb25DbG9zZVN0YXJ0IGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMub3B0aW9ucy5vbkNsb3NlU3RhcnQpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xvc2VTdGFydC5jYWxsKHRoaXMsICRjb2xsYXBzaWJsZUxpWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuaW1hdGUgb3V0XG4gICAgICAgICRjb2xsYXBzaWJsZUxpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLl9hbmltYXRlT3V0KGluZGV4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBNLkNvbGxhcHNpYmxlID0gQ29sbGFwc2libGU7XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihDb2xsYXBzaWJsZSwgJ2NvbGxhcHNpYmxlJywgJ01fQ29sbGFwc2libGUnKTtcbiAgfVxuXG59KGNhc2gsIE0uYW5pbWUpKTtcbiJdfQ==