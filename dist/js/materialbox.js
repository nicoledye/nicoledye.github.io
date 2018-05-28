"use strict";var _createClass=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),_get=function t(e,i,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,i);if(void 0===o){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}!function(s,a){var e={inDuration:275,outDuration:200,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Materialbox=i).options=s.extend({},n.defaults,e),i.overlayActive=!1,i.doneAnimating=!0,i.placeholder=s("<div></div>").addClass("material-placeholder"),i.originalWidth=0,i.originalHeight=0,i.originInlineStyles=i.$el.attr("style"),i.caption=i.el.getAttribute("data-caption")||"",i.$el.before(i.placeholder),i.placeholder.append(i.$el),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Materialbox=void 0}},{key:"_setupEventHandlers",value:function(){this._handleMaterialboxClickBound=this._handleMaterialboxClick.bind(this),this.el.addEventListener("click",this._handleMaterialboxClickBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleMaterialboxClickBound)}},{key:"_handleMaterialboxClick",value:function(t){!1===this.doneAnimating||this.overlayActive&&this.doneAnimating?this.close():this.open()}},{key:"_handleWindowScroll",value:function(){this.overlayActive&&this.close()}},{key:"_handleWindowResize",value:function(){this.overlayActive&&this.close()}},{key:"_handleWindowEscape",value:function(t){27===t.keyCode&&this.doneAnimating&&this.overlayActive&&this.close()}},{key:"_makeAncestorsOverflowVisible",value:function(){this.ancestorsChanged=s();for(var t=this.placeholder[0].parentNode;null!==t&&!s(t).is(document);){var e=s(t);"visible"!==e.css("overflow")&&(e.css("overflow","visible"),void 0===this.ancestorsChanged?this.ancestorsChanged=e:this.ancestorsChanged=this.ancestorsChanged.add(e)),t=t.parentNode}}},{key:"_animateImageIn",value:function(){var t=this,e={targets:this.el,height:[this.originalHeight,this.newHeight],width:[this.originalWidth,this.newWidth],left:M.getDocumentScrollLeft()+this.windowWidth/2-this.placeholder.offset().left-this.newWidth/2,top:M.getDocumentScrollTop()+this.windowHeight/2-this.placeholder.offset().top-this.newHeight/2,duration:this.options.inDuration,easing:"easeOutQuad",complete:function(){t.doneAnimating=!0,"function"==typeof t.options.onOpenEnd&&t.options.onOpenEnd.call(t,t.el)}};this.maxWidth=this.$el.css("max-width"),this.maxHeight=this.$el.css("max-height"),"none"!==this.maxWidth&&(e.maxWidth=this.newWidth),"none"!==this.maxHeight&&(e.maxHeight=this.newHeight),a(e)}},{key:"_animateImageOut",value:function(){var t=this,e={targets:this.el,width:this.originalWidth,height:this.originalHeight,left:0,top:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){t.placeholder.css({height:"",width:"",position:"",top:"",left:""}),t.attrWidth&&t.$el.attr("width",t.attrWidth),t.attrHeight&&t.$el.attr("height",t.attrHeight),t.$el.removeAttr("style"),t.$el.attr("style",t.originInlineStyles),t.$el.removeClass("active"),t.doneAnimating=!0,t.ancestorsChanged.length&&t.ancestorsChanged.css("overflow",""),"function"==typeof t.options.onCloseEnd&&t.options.onCloseEnd.call(t,t.el)}};a(e)}},{key:"_updateVars",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.caption=this.el.getAttribute("data-caption")||""}},{key:"open",value:function(){var t=this;this._updateVars(),this.originalWidth=this.el.getBoundingClientRect().width,this.originalHeight=this.el.getBoundingClientRect().height,this.doneAnimating=!1,this.$el.addClass("active"),this.overlayActive=!0,"function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this.placeholder.css({width:this.placeholder[0].getBoundingClientRect().width+"px",height:this.placeholder[0].getBoundingClientRect().height+"px",position:"relative",top:0,left:0}),this._makeAncestorsOverflowVisible(),this.$el.css({position:"absolute","z-index":1e3,"will-change":"left, top, width, height"}),this.attrWidth=this.$el.attr("width"),this.attrHeight=this.$el.attr("height"),this.attrWidth&&(this.$el.css("width",this.attrWidth+"px"),this.$el.removeAttr("width")),this.attrHeight&&(this.$el.css("width",this.attrHeight+"px"),this.$el.removeAttr("height")),this.$overlay=s('<div id="materialbox-overlay"></div>').css({opacity:0}).one("click",function(){t.doneAnimating&&t.close()}),this.$el.before(this.$overlay);var e=this.$overlay[0].getBoundingClientRect();this.$overlay.css({width:this.windowWidth+"px",height:this.windowHeight+"px",left:-1*e.left+"px",top:-1*e.top+"px"}),a.remove(this.el),a.remove(this.$overlay[0]),a({targets:this.$overlay[0],opacity:1,duration:this.options.inDuration,easing:"easeOutQuad"}),""!==this.caption&&(this.$photocaption&&a.remove(this.$photoCaption[0]),this.$photoCaption=s('<div class="materialbox-caption"></div>'),this.$photoCaption.text(this.caption),s("body").append(this.$photoCaption),this.$photoCaption.css({display:"inline"}),a({targets:this.$photoCaption[0],opacity:1,duration:this.options.inDuration,easing:"easeOutQuad"}));var i=0,n=this.originalWidth/this.windowWidth,o=this.originalHeight/this.windowHeight;this.newWidth=0,this.newHeight=0,o<n?(i=this.originalHeight/this.originalWidth,this.newWidth=.9*this.windowWidth,this.newHeight=.9*this.windowWidth*i):(i=this.originalWidth/this.originalHeight,this.newWidth=.9*this.windowHeight*i,this.newHeight=.9*this.windowHeight),this._animateImageIn(),this._handleWindowScrollBound=this._handleWindowScroll.bind(this),this._handleWindowResizeBound=this._handleWindowResize.bind(this),this._handleWindowEscapeBound=this._handleWindowEscape.bind(this),window.addEventListener("scroll",this._handleWindowScrollBound),window.addEventListener("resize",this._handleWindowResizeBound),window.addEventListener("keyup",this._handleWindowEscapeBound)}},{key:"close",value:function(){var t=this;this._updateVars(),this.doneAnimating=!1,"function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),a.remove(this.el),a.remove(this.$overlay[0]),""!==this.caption&&a.remove(this.$photoCaption[0]),window.removeEventListener("scroll",this._handleWindowScrollBound),window.removeEventListener("resize",this._handleWindowResizeBound),window.removeEventListener("keyup",this._handleWindowEscapeBound),a({targets:this.$overlay[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){t.overlayActive=!1,t.$overlay.remove()}}),this._animateImageOut(),""!==this.caption&&a({targets:this.$photoCaption[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){t.$photoCaption.remove()}})}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Materialbox}},{key:"defaults",get:function(){return e}}]),n}();M.Materialbox=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"materialbox","M_Materialbox")}(cash,M.anime);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsYm94LmpzIl0sIm5hbWVzIjpbIiQiLCJhbmltIiwiX2RlZmF1bHRzIiwiaW5EdXJhdGlvbiIsIm91dER1cmF0aW9uIiwib25PcGVuU3RhcnQiLCJvbk9wZW5FbmQiLCJvbkNsb3NlU3RhcnQiLCJvbkNsb3NlRW5kIiwiX0NvbXBvbmVudCIsIk1hdGVyaWFsYm94IiwiZWwiLCJvcHRpb25zIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIl90aGlzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfX3Byb3RvX18iLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNhbGwiLCJNX01hdGVyaWFsYm94IiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJvdmVybGF5QWN0aXZlIiwiZG9uZUFuaW1hdGluZyIsInBsYWNlaG9sZGVyIiwiYWRkQ2xhc3MiLCJvcmlnaW5hbFdpZHRoIiwib3JpZ2luYWxIZWlnaHQiLCJvcmlnaW5JbmxpbmVTdHlsZXMiLCIkZWwiLCJhdHRyIiwiY2FwdGlvbiIsImdldEF0dHJpYnV0ZSIsImJlZm9yZSIsImFwcGVuZCIsIl9zZXR1cEV2ZW50SGFuZGxlcnMiLCJfaW5oZXJpdHMiLCJDb21wb25lbnQiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl9yZW1vdmVFdmVudEhhbmRsZXJzIiwidW5kZWZpbmVkIiwiX2hhbmRsZU1hdGVyaWFsYm94Q2xpY2tCb3VuZCIsIl9oYW5kbGVNYXRlcmlhbGJveENsaWNrIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwib3BlbiIsImNsb3NlIiwia2V5Q29kZSIsImFuY2VzdG9yc0NoYW5nZWQiLCJhbmNlc3RvciIsInBhcmVudE5vZGUiLCJpcyIsImRvY3VtZW50IiwiY3VyciIsImNzcyIsImFkZCIsIl90aGlzMiIsImFuaW1PcHRpb25zIiwidGFyZ2V0cyIsImhlaWdodCIsIm5ld0hlaWdodCIsIndpZHRoIiwibmV3V2lkdGgiLCJsZWZ0IiwiTSIsIndpbmRvd1dpZHRoIiwib2Zmc2V0IiwidG9wIiwid2luZG93SGVpZ2h0IiwiZHVyYXRpb24iLCJjb21wbGV0ZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiX3RoaXMzIiwiZWFzaW5nIiwicG9zaXRpb24iLCJhdHRyV2lkdGgiLCJhdHRySGVpZ2h0IiwicmVtb3ZlQXR0ciIsInJlbW92ZUNsYXNzIiwibGVuZ3RoIiwiaW5uZXJXaWR0aCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiX3RoaXM0IiwiX3VwZGF0ZVZhcnMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJfbWFrZUFuY2VzdG9yc092ZXJmbG93VmlzaWJsZSIsInotaW5kZXgiLCJ3aWxsLWNoYW5nZSIsIiRvdmVybGF5Iiwib3BhY2l0eSIsIm9uZSIsIm92ZXJsYXlPZmZzZXQiLCJyZW1vdmUiLCIkcGhvdG9DYXB0aW9uIiwidGV4dCIsImRpc3BsYXkiLCJyYXRpbyIsIndpZHRoUGVyY2VudCIsImhlaWdodFBlcmNlbnQiLCJfYW5pbWF0ZUltYWdlSW4iLCJfaGFuZGxlV2luZG93U2Nyb2xsQm91bmQiLCJfaGFuZGxlV2luZG93U2Nyb2xsIiwiX2hhbmRsZVdpbmRvd1Jlc2l6ZUJvdW5kIiwiX2hhbmRsZVdpbmRvd1Jlc2l6ZSIsIl9oYW5kbGVXaW5kb3dFc2NhcGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX2hhbmRsZVdpbmRvd0VzY2FwZUJvdW5kIiwiX3RoaXM1IiwiX2FuaW1hdGVJbWFnZU91dCIsIl9nZXQiLCJlbHMiLCJqcXVlcnkiLCJnZXQiXSwibWFwcGluZ3MiOiI0bkNBQUMsU0FBVUEsRUFBR0MsR0FHWixJQUFJQyxFQUFZLENBQ2RDLFdBQVksSUFDWkMsWUFBYSxJQUNiQyxZQUFhLEtBQ2JDLFVBQVcsS0FDWEMsYUFBYyxLQUNkQyxXQUFZLE1BTFpMLEVBSmdCLFNBQUFNLEdBdUJoQixTQUFBQyxFQUFZQyxFQUFJQyxHQUFTQyxnQkFBQUMsS0FBQUosR0FBQSxJQUFBSyxFQUFBQywyQkFBQUYsTUFBQUosRUFBQU8sV0FBQUMsT0FBQUMs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S0FBQXFHLG1CQXdDc0IsS0FBakJyRyxLQUFLbUIsU0FDUGhDLEVBQUssQ0FDSDhELFFBQVNqRCxLQUFLc0YsY0FBYyxHQTFhbEJKLFFBQUEsRUFBQXRCLFNBQUE1RCxLQUFBRixRQUFBUixZQUFBMkUsT0FBQSxjQXFZUkosU0FBQSxXQTBDQXVDLEVBQUtkLGNBQWNELGVBL2FYLENBQUEsQ0FBQTFELElBQUEsT0FBQUMsTUFBQSxTQTRDVGQsRUFBQUEsR0FDTCxPQUFBd0YsS0FBQTFHLEVBQUFPLFdBQUFDLE9BQUFDLGVBQUFULEdBQUEsT0FBQUksTUFBQU0sS0FBQU4sS0FBS2UsS0FBTHdGLEVBQUF6RyxLQTdDYyxDQUFBNkIsSUFBQSxjQUFBQyxNQUFBLFNBbURkL0IsR0FFQSxPQWVnQkEsRUFBRzJHLE9BQVMzRyxFQUFHLEdBQUtBLEdBZi9CMEIsZ0JBckRTLENBQUFJLElBQUEsV0FBQThFLElBQUEsV0F5Q2QsT0FBSy9GLE1BekNTZCxFQUFBLEdBNFliMkQsRUFBQTNELFlBQUFBLEVBRURULEVBQUFBLGNBQ0FBLEVBQUFBLHdCQUFpQjhGLEVBQWpCLGNBQUEsaUJBL1lMLENBa1pPOUYsS0FBQUEsRUFBQUEiLCJmaWxlIjoibWF0ZXJpYWxib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCQsIGFuaW0pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGxldCBfZGVmYXVsdHMgPSB7XG4gICAgaW5EdXJhdGlvbjogMjc1LFxuICAgIG91dER1cmF0aW9uOiAyMDAsXG4gICAgb25PcGVuU3RhcnQ6IG51bGwsXG4gICAgb25PcGVuRW5kOiBudWxsLFxuICAgIG9uQ2xvc2VTdGFydDogbnVsbCxcbiAgICBvbkNsb3NlRW5kOiBudWxsXG4gIH07XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cbiAgY2xhc3MgTWF0ZXJpYWxib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBNYXRlcmlhbGJveCBpbnN0YW5jZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG5cbiAgICAgIHN1cGVyKE1hdGVyaWFsYm94LCBlbCwgb3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuZWwuTV9NYXRlcmlhbGJveCA9IHRoaXM7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIG1vZGFsXG4gICAgICAgKiBAbWVtYmVyIE1hdGVyaWFsYm94I29wdGlvbnNcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IFtpbkR1cmF0aW9uPTI3NV0gLSBMZW5ndGggaW4gbXMgb2YgZW50ZXIgdHJhbnNpdGlvblxuICAgICAgICogQHByb3Age051bWJlcn0gW291dER1cmF0aW9uPTIwMF0gLSBMZW5ndGggaW4gbXMgb2YgZXhpdCB0cmFuc2l0aW9uXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uT3BlblN0YXJ0IC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIGJlZm9yZSBtYXRlcmlhbGJveCBpcyBvcGVuZWRcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25PcGVuRW5kIC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIGFmdGVyIG1hdGVyaWFsYm94IGlzIG9wZW5lZFxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbkNsb3NlU3RhcnQgLSBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgYmVmb3JlIG1hdGVyaWFsYm94IGlzIGNsb3NlZFxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbkNsb3NlRW5kIC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIGFmdGVyIG1hdGVyaWFsYm94IGlzIGNsb3NlZFxuICAgICAgICovXG4gICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTWF0ZXJpYWxib3guZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICB0aGlzLm92ZXJsYXlBY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZG9uZUFuaW1hdGluZyA9IHRydWU7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gJCgnPGRpdj48L2Rpdj4nKS5hZGRDbGFzcygnbWF0ZXJpYWwtcGxhY2Vob2xkZXInKTtcbiAgICAgIHRoaXMub3JpZ2luYWxXaWR0aCA9IDA7XG4gICAgICB0aGlzLm9yaWdpbmFsSGVpZ2h0ID0gMDtcbiAgICAgIHRoaXMub3JpZ2luSW5saW5lU3R5bGVzID0gdGhpcy4kZWwuYXR0cignc3R5bGUnKTtcbiAgICAgIHRoaXMuY2FwdGlvbiA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNhcHRpb24nKSB8fCBcIlwiO1xuXG4gICAgICAvLyBXcmFwXG4gICAgICB0aGlzLiRlbC5iZWZvcmUodGhpcy5wbGFjZWhvbGRlcik7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyLmFwcGVuZCh0aGlzLiRlbCk7XG5cbiAgICAgIHRoaXMuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgZGVmYXVsdHMoKSB7XG4gICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIHN1cGVyLmluaXQodGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgIGxldCBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgcmV0dXJuIGRvbUVsZW0uTV9NYXRlcmlhbGJveDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZWFyZG93biBjb21wb25lbnRcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgdGhpcy5lbC5NX01hdGVyaWFsYm94ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIEV2ZW50IEhhbmRsZXJzXG4gICAgICovXG4gICAgX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgIHRoaXMuX2hhbmRsZU1hdGVyaWFsYm94Q2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZU1hdGVyaWFsYm94Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVNYXRlcmlhbGJveENsaWNrQm91bmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBFdmVudCBIYW5kbGVyc1xuICAgICAqL1xuICAgIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU1hdGVyaWFsYm94Q2xpY2tCb3VuZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIE1hdGVyaWFsYm94IENsaWNrXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIF9oYW5kbGVNYXRlcmlhbGJveENsaWNrKGUpIHtcbiAgICAgIC8vIElmIGFscmVhZHkgbW9kYWwsIHJldHVybiB0byBvcmlnaW5hbFxuICAgICAgaWYgKHRoaXMuZG9uZUFuaW1hdGluZyA9PT0gZmFsc2UgfHxcbiAgICAgICAgICAodGhpcy5vdmVybGF5QWN0aXZlICYmIHRoaXMuZG9uZUFuaW1hdGluZykpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIFdpbmRvdyBTY3JvbGxcbiAgICAgKi9cbiAgICBfaGFuZGxlV2luZG93U2Nyb2xsKCkge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheUFjdGl2ZSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIFdpbmRvdyBSZXNpemVcbiAgICAgKi9cbiAgICBfaGFuZGxlV2luZG93UmVzaXplKCkge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheUFjdGl2ZSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIFdpbmRvdyBSZXNpemVcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgX2hhbmRsZVdpbmRvd0VzY2FwZShlKSB7XG4gICAgICAvLyBFU0Mga2V5XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAyNyAmJlxuICAgICAgICAgIHRoaXMuZG9uZUFuaW1hdGluZyAmJlxuICAgICAgICAgIHRoaXMub3ZlcmxheUFjdGl2ZSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBhbmNlc3RvcnMgd2l0aCBvdmVyZmxvdzogaGlkZGVuOyBhbmQgbWFrZSB2aXNpYmxlXG4gICAgICovXG4gICAgX21ha2VBbmNlc3RvcnNPdmVyZmxvd1Zpc2libGUoKSB7XG4gICAgICB0aGlzLmFuY2VzdG9yc0NoYW5nZWQgPSAkKCk7XG4gICAgICBsZXQgYW5jZXN0b3IgPSB0aGlzLnBsYWNlaG9sZGVyWzBdLnBhcmVudE5vZGU7XG4gICAgICB3aGlsZSAoYW5jZXN0b3IgIT09IG51bGwgJiYgISQoYW5jZXN0b3IpLmlzKGRvY3VtZW50KSkge1xuICAgICAgICBsZXQgY3VyciA9ICQoYW5jZXN0b3IpO1xuICAgICAgICBpZiAoY3Vyci5jc3MoJ292ZXJmbG93JykgIT09ICd2aXNpYmxlJykge1xuICAgICAgICAgIGN1cnIuY3NzKCdvdmVyZmxvdycsICd2aXNpYmxlJyk7XG4gICAgICAgICAgaWYgKHRoaXMuYW5jZXN0b3JzQ2hhbmdlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFuY2VzdG9yc0NoYW5nZWQgPSBjdXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYW5jZXN0b3JzQ2hhbmdlZCA9IHRoaXMuYW5jZXN0b3JzQ2hhbmdlZC5hZGQoY3Vycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFuY2VzdG9yID0gYW5jZXN0b3IucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbmltYXRlIGltYWdlIGluXG4gICAgICovXG4gICAgX2FuaW1hdGVJbWFnZUluKCkge1xuICAgICAgbGV0IGFuaW1PcHRpb25zID0ge1xuICAgICAgICB0YXJnZXRzOiB0aGlzLmVsLFxuICAgICAgICBoZWlnaHQ6IFt0aGlzLm9yaWdpbmFsSGVpZ2h0LCB0aGlzLm5ld0hlaWdodF0sXG4gICAgICAgIHdpZHRoOiBbdGhpcy5vcmlnaW5hbFdpZHRoLCB0aGlzLm5ld1dpZHRoXSxcbiAgICAgICAgbGVmdDogTS5nZXREb2N1bWVudFNjcm9sbExlZnQoKSArIHRoaXMud2luZG93V2lkdGgvMiAtIHRoaXMucGxhY2Vob2xkZXIub2Zmc2V0KCkubGVmdCAtIHRoaXMubmV3V2lkdGgvMixcbiAgICAgICAgdG9wOiBNLmdldERvY3VtZW50U2Nyb2xsVG9wKCkgKyB0aGlzLndpbmRvd0hlaWdodC8yIC0gdGhpcy5wbGFjZWhvbGRlci5vZmZzZXQoKS50b3AgLSB0aGlzLm5ld0hlaWdodC8yLFxuICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmluRHVyYXRpb24sXG4gICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRvbmVBbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgLy8gb25PcGVuRW5kIGNhbGxiYWNrXG4gICAgICAgICAgaWYgKHR5cGVvZih0aGlzLm9wdGlvbnMub25PcGVuRW5kKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uT3BlbkVuZC5jYWxsKHRoaXMsIHRoaXMuZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gT3ZlcnJpZGUgbWF4LXdpZHRoIG9yIG1heC1oZWlnaHQgaWYgbmVlZGVkXG4gICAgICB0aGlzLm1heFdpZHRoID0gdGhpcy4kZWwuY3NzKCdtYXgtd2lkdGgnKTtcbiAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdGhpcy4kZWwuY3NzKCdtYXgtaGVpZ2h0Jyk7XG4gICAgICBpZiAodGhpcy5tYXhXaWR0aCAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGFuaW1PcHRpb25zLm1heFdpZHRoID0gdGhpcy5uZXdXaWR0aDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1heEhlaWdodCAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGFuaW1PcHRpb25zLm1heEhlaWdodCA9IHRoaXMubmV3SGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBhbmltKGFuaW1PcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbmltYXRlIGltYWdlIG91dFxuICAgICAqL1xuICAgIF9hbmltYXRlSW1hZ2VPdXQoKSB7XG4gICAgICBsZXQgYW5pbU9wdGlvbnMgPSB7XG4gICAgICAgIHRhcmdldHM6IHRoaXMuZWwsXG4gICAgICAgIHdpZHRoOiB0aGlzLm9yaWdpbmFsV2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5vcmlnaW5hbEhlaWdodCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLFxuICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlci5jc3Moe1xuICAgICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgICAgIHRvcDogJycsXG4gICAgICAgICAgICBsZWZ0OiAnJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gUmV2ZXJ0IHRvIHdpZHRoIG9yIGhlaWdodCBhdHRyaWJ1dGVcbiAgICAgICAgICBpZiAodGhpcy5hdHRyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmF0dHIoJ3dpZHRoJywgdGhpcy5hdHRyV2lkdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5hdHRySGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5hdHRyKCdoZWlnaHQnLCB0aGlzLmF0dHJIZWlnaHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuJGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgdGhpcy4kZWwuYXR0cignc3R5bGUnLCB0aGlzLm9yaWdpbklubGluZVN0eWxlcyk7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgY2xhc3NcbiAgICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgdGhpcy5kb25lQW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgIC8vIFJlbW92ZSBvdmVyZmxvdyBvdmVycmlkZXMgb24gYW5jZXN0b3JzXG4gICAgICAgICAgaWYgKHRoaXMuYW5jZXN0b3JzQ2hhbmdlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYW5jZXN0b3JzQ2hhbmdlZC5jc3MoJ292ZXJmbG93JywgJycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIG9uQ2xvc2VFbmQgY2FsbGJhY2tcbiAgICAgICAgICBpZiAodHlwZW9mKHRoaXMub3B0aW9ucy5vbkNsb3NlRW5kKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xvc2VFbmQuY2FsbCh0aGlzLCB0aGlzLmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGFuaW0oYW5pbU9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBvcGVuIGFuZCBjbG9zZSB2YXJzXG4gICAgICovXG4gICAgX3VwZGF0ZVZhcnMoKSB7XG4gICAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB0aGlzLndpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIHRoaXMuY2FwdGlvbiA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNhcHRpb24nKSB8fCBcIlwiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9wZW4gTWF0ZXJpYWxib3hcbiAgICAgKi9cbiAgICBvcGVuKCkge1xuICAgICAgdGhpcy5fdXBkYXRlVmFycygpO1xuICAgICAgdGhpcy5vcmlnaW5hbFdpZHRoID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgIHRoaXMub3JpZ2luYWxIZWlnaHQgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgICAgLy8gU2V0IHN0YXRlc1xuICAgICAgdGhpcy5kb25lQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLiRlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB0aGlzLm92ZXJsYXlBY3RpdmUgPSB0cnVlO1xuXG4gICAgICAvLyBvbk9wZW5TdGFydCBjYWxsYmFja1xuICAgICAgaWYgKHR5cGVvZih0aGlzLm9wdGlvbnMub25PcGVuU3RhcnQpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5vbk9wZW5TdGFydC5jYWxsKHRoaXMsIHRoaXMuZWwpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXQgcG9zaXRpb25pbmcgZm9yIHBsYWNlaG9sZGVyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyLmNzcyh7XG4gICAgICAgIHdpZHRoOiB0aGlzLnBsYWNlaG9sZGVyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4JyxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnBsYWNlaG9sZGVyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICdweCcsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9tYWtlQW5jZXN0b3JzT3ZlcmZsb3dWaXNpYmxlKCk7XG5cbiAgICAgIC8vIFNldCBjc3Mgb24gb3JpZ2luXG4gICAgICB0aGlzLiRlbC5jc3Moe1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgJ3otaW5kZXgnOiAxMDAwLFxuICAgICAgICAnd2lsbC1jaGFuZ2UnOiAnbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0J1xuICAgICAgfSk7XG5cbiAgICAgIC8vIENoYW5nZSBmcm9tIHdpZHRoIG9yIGhlaWdodCBhdHRyaWJ1dGUgdG8gY3NzXG4gICAgICB0aGlzLmF0dHJXaWR0aCA9IHRoaXMuJGVsLmF0dHIoJ3dpZHRoJyk7XG4gICAgICB0aGlzLmF0dHJIZWlnaHQgPSB0aGlzLiRlbC5hdHRyKCdoZWlnaHQnKTtcbiAgICAgIGlmICh0aGlzLmF0dHJXaWR0aCkge1xuICAgICAgICB0aGlzLiRlbC5jc3MoJ3dpZHRoJywgdGhpcy5hdHRyV2lkdGggKyAncHgnKTtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQXR0cignd2lkdGgnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmF0dHJIZWlnaHQpIHtcbiAgICAgICAgdGhpcy4kZWwuY3NzKCd3aWR0aCcsIHRoaXMuYXR0ckhlaWdodCArICdweCcpO1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVBdHRyKCdoZWlnaHQnKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIG92ZXJsYXlcbiAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCc8ZGl2IGlkPVwibWF0ZXJpYWxib3gtb3ZlcmxheVwiPjwvZGl2PicpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSlcbiAgICAgICAgLm9uZSgnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuZG9uZUFuaW1hdGluZykge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIFB1dCBiZWZvcmUgaW4gb3JpZ2luIGltYWdlIHRvIHByZXNlcnZlIHotaW5kZXggbGF5ZXJpbmcuXG4gICAgICB0aGlzLiRlbC5iZWZvcmUodGhpcy4kb3ZlcmxheSk7XG5cbiAgICAgIC8vIFNldCBkaW1lbnNpb25zIGlmIG5lZWRlZFxuICAgICAgbGV0IG92ZXJsYXlPZmZzZXQgPSB0aGlzLiRvdmVybGF5WzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy4kb3ZlcmxheS5jc3Moe1xuICAgICAgICB3aWR0aDogdGhpcy53aW5kb3dXaWR0aCArICdweCcsXG4gICAgICAgIGhlaWdodDogdGhpcy53aW5kb3dIZWlnaHQgKyAncHgnLFxuICAgICAgICBsZWZ0OiAtMSAqIG92ZXJsYXlPZmZzZXQubGVmdCArICdweCcsXG4gICAgICAgIHRvcDogLTEgKiBvdmVybGF5T2Zmc2V0LnRvcCArICdweCdcbiAgICAgIH0pO1xuXG4gICAgICBhbmltLnJlbW92ZSh0aGlzLmVsKTtcbiAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuJG92ZXJsYXlbMF0pO1xuXG4gICAgICAvLyBBbmltYXRlIE92ZXJsYXlcbiAgICAgIGFuaW0oe1xuICAgICAgICB0YXJnZXRzOiB0aGlzLiRvdmVybGF5WzBdLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmluRHVyYXRpb24sXG4gICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBhbmQgYW5pbWF0ZSBjYXB0aW9uIGlmIGl0IGV4aXN0c1xuICAgICAgaWYgKHRoaXMuY2FwdGlvbiAhPT0gXCJcIikge1xuICAgICAgICBpZiAodGhpcy4kcGhvdG9jYXB0aW9uKSB7XG4gICAgICAgICAgYW5pbS5yZW1vdmUodGhpcy4kcGhvdG9DYXB0aW9uWzBdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRwaG90b0NhcHRpb24gPSAkKCc8ZGl2IGNsYXNzPVwibWF0ZXJpYWxib3gtY2FwdGlvblwiPjwvZGl2PicpO1xuICAgICAgICB0aGlzLiRwaG90b0NhcHRpb24udGV4dCh0aGlzLmNhcHRpb24pO1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKHRoaXMuJHBob3RvQ2FwdGlvbik7XG4gICAgICAgIHRoaXMuJHBob3RvQ2FwdGlvbi5jc3MoeyBcImRpc3BsYXlcIjogXCJpbmxpbmVcIiB9KTtcblxuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLiRwaG90b0NhcHRpb25bMF0sXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmluRHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXNpemUgSW1hZ2VcbiAgICAgIGxldCByYXRpbyA9IDA7XG4gICAgICBsZXQgd2lkdGhQZXJjZW50ID0gdGhpcy5vcmlnaW5hbFdpZHRoIC8gdGhpcy53aW5kb3dXaWR0aDtcbiAgICAgIGxldCBoZWlnaHRQZXJjZW50ID0gdGhpcy5vcmlnaW5hbEhlaWdodCAvIHRoaXMud2luZG93SGVpZ2h0O1xuICAgICAgdGhpcy5uZXdXaWR0aCA9IDA7XG4gICAgICB0aGlzLm5ld0hlaWdodCA9IDA7XG5cbiAgICAgIGlmICh3aWR0aFBlcmNlbnQgPiBoZWlnaHRQZXJjZW50KSB7XG4gICAgICAgIHJhdGlvID0gdGhpcy5vcmlnaW5hbEhlaWdodCAvIHRoaXMub3JpZ2luYWxXaWR0aDtcbiAgICAgICAgdGhpcy5uZXdXaWR0aCA9IHRoaXMud2luZG93V2lkdGggKiAwLjk7XG4gICAgICAgIHRoaXMubmV3SGVpZ2h0ID0gdGhpcy53aW5kb3dXaWR0aCAqIDAuOSAqIHJhdGlvO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJhdGlvID0gdGhpcy5vcmlnaW5hbFdpZHRoIC8gdGhpcy5vcmlnaW5hbEhlaWdodDtcbiAgICAgICAgdGhpcy5uZXdXaWR0aCA9IHRoaXMud2luZG93SGVpZ2h0ICogMC45ICogcmF0aW87XG4gICAgICAgIHRoaXMubmV3SGVpZ2h0ID0gdGhpcy53aW5kb3dIZWlnaHQgKiAwLjk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2FuaW1hdGVJbWFnZUluKCk7XG5cbiAgICAgIC8vIEhhbmRsZSBFeGl0IHRyaWdnZXJzXG4gICAgICB0aGlzLl9oYW5kbGVXaW5kb3dTY3JvbGxCb3VuZCA9IHRoaXMuX2hhbmRsZVdpbmRvd1Njcm9sbC5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5faGFuZGxlV2luZG93UmVzaXplQm91bmQgPSB0aGlzLl9oYW5kbGVXaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuX2hhbmRsZVdpbmRvd0VzY2FwZUJvdW5kID0gdGhpcy5faGFuZGxlV2luZG93RXNjYXBlLmJpbmQodGhpcyk7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9oYW5kbGVXaW5kb3dTY3JvbGxCb3VuZCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlV2luZG93UmVzaXplQm91bmQpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faGFuZGxlV2luZG93RXNjYXBlQm91bmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb3NlIE1hdGVyaWFsYm94XG4gICAgICovXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLl91cGRhdGVWYXJzKCk7XG4gICAgICB0aGlzLmRvbmVBbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgLy8gb25DbG9zZVN0YXJ0IGNhbGxiYWNrXG4gICAgICBpZiAodHlwZW9mKHRoaXMub3B0aW9ucy5vbkNsb3NlU3RhcnQpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5vbkNsb3NlU3RhcnQuY2FsbCh0aGlzLCB0aGlzLmVsKTtcbiAgICAgIH1cblxuICAgICAgYW5pbS5yZW1vdmUodGhpcy5lbCk7XG4gICAgICBhbmltLnJlbW92ZSh0aGlzLiRvdmVybGF5WzBdKTtcblxuICAgICAgaWYgKHRoaXMuY2FwdGlvbiAhPT0gXCJcIikge1xuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLiRwaG90b0NhcHRpb25bMF0pO1xuICAgICAgfVxuXG4gICAgICAvLyBkaXNhYmxlIGV4aXQgaGFuZGxlcnNcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9oYW5kbGVXaW5kb3dTY3JvbGxCb3VuZCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlV2luZG93UmVzaXplQm91bmQpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faGFuZGxlV2luZG93RXNjYXBlQm91bmQpO1xuXG4gICAgICBhbmltKHtcbiAgICAgICAgdGFyZ2V0czogdGhpcy4kb3ZlcmxheVswXSxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5vdXREdXJhdGlvbixcbiAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMub3ZlcmxheUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuJG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9hbmltYXRlSW1hZ2VPdXQoKTtcblxuICAgICAgLy8gUmVtb3ZlIENhcHRpb24gKyByZXNldCBjc3Mgc2V0dGluZ3Mgb24gaW1hZ2VcbiAgICAgIGlmICh0aGlzLmNhcHRpb24gIT09IFwiXCIpIHtcbiAgICAgICAgYW5pbSh7XG4gICAgICAgICAgdGFyZ2V0czogdGhpcy4kcGhvdG9DYXB0aW9uWzBdLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5vdXREdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHBob3RvQ2FwdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIE0uTWF0ZXJpYWxib3ggPSBNYXRlcmlhbGJveDtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKE1hdGVyaWFsYm94LCAnbWF0ZXJpYWxib3gnLCAnTV9NYXRlcmlhbGJveCcpO1xuICB9XG5cbn0oY2FzaCwgTS5hbmltZSkpO1xuIl19
