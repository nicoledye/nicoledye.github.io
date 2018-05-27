"use strict";var _createClass=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),_get=function e(t,i,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,i);if(void 0===o){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,i,n)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(n):void 0};function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(d){var t={classes:"",dropdownOptions:{}},e=function(e){function n(e,t){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,e,t));return i.$el.hasClass("browser-default")?_possibleConstructorReturn(i):((i.el.M_FormSelect=i).options=d.extend({},n.defaults,t),i.isMultiple=i.$el.prop("multiple"),i.el.tabIndex=-1,i._keysSelected={},i._valueDict={},i._setupDropdown(),i._setupEventHandlers(),i)}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this._removeDropdown(),this.el.M_FormSelect=void 0}},{key:"_setupEventHandlers",value:function(){var t=this;this._handleSelectChangeBound=this._handleSelectChange.bind(this),this._handleOptionClickBound=this._handleOptionClick.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),d(this.dropdownOptions).find("li:not(.optgroup)").each(function(e){e.addEventListener("click",t._handleOptionClickBound)}),this.el.addEventListener("change",this._handleSelectChangeBound),this.input.addEventListener("click",this._handleInputClickBound)}},{key:"_removeEventHandlers",value:function(){var t=this;d(this.dropdownOptions).find("li:not(.optgroup)").each(function(e){e.removeEventListener("click",t._handleOptionClickBound)}),this.el.removeEventListener("change",this._handleSelectChangeBound),this.input.removeEventListener("click",this._handleInputClickBound)}},{key:"_handleSelectChange",value:function(e){this._setValueToInput()}},{key:"_handleOptionClick",value:function(e){e.preventDefault();var t=d(e.target).closest("li")[0],i=t.id;if(!d(t).hasClass("disabled")&&!d(t).hasClass("optgroup")&&i.length){var n=!0;if(this.isMultiple){var o=d(this.dropdownOptions).find("li.disabled.selected");o.length&&(o.removeClass("selected"),o.find('input[type="checkbox"]').prop("checked",!1),this._toggleEntryFromArray(o[0].id));var s=d(t).find('input[type="checkbox"]');s.prop("checked",!s.prop("checked")),n=this._toggleEntryFromArray(i)}else d(this.dropdownOptions).find("li").removeClass("active"),d(t).toggleClass("active"),this.input.value=t.textContent;this._activateOption(d(this.dropdownOptions),t),d(this._valueDict[i].el).prop("selected",n),this.$el.trigger("change")}e.stopPropagation()}},{key:"_handleInputClick",value:function(){this.dropdown&&this.dropdown.isOpen&&(this._setValueToInput(),this._setSelectedStates())}},{key:"_setupDropdown",value:function(){var n=this;this.wrapper=document.createElement("div"),d(this.wrapper).addClass("select-wrapper "+this.options.classes),this.$el.before(d(this.wrapper)),this.wrapper.appendChild(this.el),this.el.disabled&&this.wrapper.classList.add("disabled"),this.$selectOptions=this.$el.children("option, optgroup"),this.dropdownOptions=document.createElement("ul"),this.dropdownOptions.id="select-options-"+M.guid(),d(this.dropdownOptions).addClass("dropdown-content select-dropdown "+(this.isMultiple?"multiple-select-dropdown":"")),this.$selectOptions.length&&this.$selectOptions.each(function(e){if(d(e).is("option")){var t=void 0;t=n.isMultiple?n._appendOptionWithIcon(n.$el,e,"multiple"):n._appendOptionWithIcon(n.$el,e),n._addOptionToValueDict(e,t)}else if(d(e).is("optgroup")){var i=d(e).children("option");d(n.dropdownOptions).append(d('<li class="optgroup"><span>'+e.getAttribute("label")+"</span></li>")[0]),i.each(function(e){var t=n._appendOptionWithIcon(n.$el,e,"optgroup-option");n._addOptionToValueDict(e,t)})}}),this.$el.after(this.dropdownOptions),this.input=document.createElement("input"),d(this.input).addClass("select-dropdown dropdown-trigger"),this.input.setAttribute("type","text"),this.input.setAttribute("readonly","true"),this.input.setAttribute("data-target",this.dropdownOptions.id),this.el.disabled&&d(this.input).prop("disabled","true"),this.$el.before(this.input),this._setValueToInput();var e=d('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');if(this.$el.before(e[0]),!this.el.disabled){var t=d.extend({},this.options.dropdownOptions);t.onOpenEnd=function(e){var t=d(n.dropdownOptions).find(".selected").first();if(n.dropdown.isScrollable&&t.length){var i=t[0].getBoundingClientRect().top-n.dropdownOptions.getBoundingClientRect().top;i-=n.dropdownOptions.clientHeight/2,n.dropdownOptions.scrollTop=i}},this.isMultiple&&(t.closeOnClick=!1),this.dropdown=M.Dropdown.init(this.input,t)}this._setSelectedStates()}},{key:"_addOptionToValueDict",value:function(e,t){var i=Object.keys(this._valueDict).length,n=this.dropdownOptions.id+i,o={};t.id=n,o.el=e,o.optionEl=t,this._valueDict[n]=o}},{key:"_removeDropdown",value:function(){d(this.wrapper).find(".caret").remove(),d(this.input).remove(),d(this.dropdownOptions).remove(),d(this.wrapper).before(this.$el),d(this.wrapper).remove()}},{key:"_appendOptionWithIcon",value:function(e,t,i){var n=t.disabled?"disabled ":"",o="optgroup-option"===i?"optgroup-option ":"",s=this.isMultiple?'<label><input type="checkbox"'+n+'"/><span>'+t.innerHTML+"</span></label>":t.innerHTML,l=d("<li></li>"),r=d("<span></span>");r.html(s),l.addClass(n+" "+o),l.append(r);var p=t.getAttribute("data-icon");t.getAttribute("class");if(p){var a=d('<img alt="" src="'+p+'">');l.prepend(a)}return d(this.dropdownOptions).append(l[0]),l[0]}},{key:"_toggleEntryFromArray",value:function(e){var t=!this._keysSelected.hasOwnProperty(e);return t?this._keysSelected[e]=!0:delete this._keysSelected[e],d(this._valueDict[e].optionEl).toggleClass("active"),d(this._valueDict[e].el).prop("selected",t),t}},{key:"_setValueToInput",value:function(){var i="";if(this.$el.find("option").each(function(e){if(d(e).prop("selected")){var t=d(e).text();i+=""===i?t:", "+t}}),""===i){var e=this.$el.find("option:disabled").eq(0);e.length&&(i=e.text())}this.input.value=i}},{key:"_setSelectedStates",value:function(){for(var e in this._keysSelected={},this._valueDict){var t=this._valueDict[e];d(t.el).prop("selected")?(d(t.optionEl).find('input[type="checkbox"]').prop("checked",!0),this._activateOption(d(this.dropdownOptions),d(t.optionEl)),this._keysSelected[e]=!0):(d(t.optionEl).find('input[type="checkbox"]').prop("checked",!1),d(t.optionEl).removeClass("selected"))}}},{key:"_activateOption",value:function(e,t){t&&(this.isMultiple||e.find("li.selected").removeClass("selected"),d(t).addClass("selected"))}},{key:"getSelectedValues",value:function(){var e=[];for(var t in this._keysSelected)e.push(this._valueDict[t].el.value);return e}}],[{key:"init",value:function(e,t){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,e,t)}},{key:"getInstance",value:function(e){return(e.jquery?e[0]:e).M_FormSelect}},{key:"defaults",get:function(){return t}}]),n}();M.FormSelect=e,M.jQueryLoaded&&M.initializeJqueryWrapper(e,"formSelect","M_FormSelect")}(cash);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyIkIiwiX2RlZmF1bHRzIiwiY2xhc3NlcyIsImRyb3Bkb3duT3B0aW9ucyIsIkZvcm1TZWxlY3QiLCJfQ29tcG9uZW50IiwiZWwiLCJvcHRpb25zIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIl90aGlzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfX3Byb3RvX18iLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNhbGwiLCIkZWwiLCJoYXNDbGFzcyIsIk1fRm9ybVNlbGVjdCIsImV4dGVuZCIsImRlZmF1bHRzIiwiaXNNdWx0aXBsZSIsInByb3AiLCJ0YWJJbmRleCIsIl9rZXlzU2VsZWN0ZWQiLCJfdmFsdWVEaWN0IiwiX3NldHVwRHJvcGRvd24iLCJfc2V0dXBFdmVudEhhbmRsZXJzIiwiX2luaGVyaXRzIiwiQ29tcG9uZW50IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfcmVtb3ZlRXZlbnRIYW5kbGVycyIsIl9yZW1vdmVEcm9wZG93biIsInVuZGVmaW5lZCIsIl90aGlzMiIsIl9oYW5kbGVTZWxlY3RDaGFuZ2VCb3VuZCIsIl9oYW5kbGVTZWxlY3RDaGFuZ2UiLCJiaW5kIiwiX2hhbmRsZU9wdGlvbkNsaWNrQm91bmQiLCJfaGFuZGxlT3B0aW9uQ2xpY2siLCJfaGFuZGxlSW5wdXRDbGlja0JvdW5kIiwiX2hhbmRsZUlucHV0Q2xpY2siLCJmaW5kIiwiZWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfdGhpczMiLCJlIiwiX3NldFZhbHVlVG9JbnB1dCIsInByZXZlbnREZWZhdWx0Iiwib3B0aW9uIiwidGFyZ2V0IiwiY2xvc2VzdCIsImlkIiwibGVuZ3RoIiwic2VsZWN0ZWQiLCJwbGFjZWhvbGRlck9wdGlvbiIsInJlbW92ZUNsYXNzIiwiX3RvZ2dsZUVudHJ5RnJvbUFycmF5IiwiY2hlY2tib3giLCJfYWN0aXZhdGVPcHRpb24iLCJ0cmlnZ2VyIiwic3RvcFByb3BhZ2F0aW9uIiwiZHJvcGRvd24iLCJfc2V0U2VsZWN0ZWRTdGF0ZXMiLCJ3cmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsImFkZENsYXNzIiwiYmVmb3JlIiwiZGlzYWJsZWQiLCJjbGFzc0xpc3QiLCJhZGQiLCIkc2VsZWN0T3B0aW9ucyIsImNoaWxkcmVuIiwiZG9jdW1lbnQiLCJNIiwiZ3VpZCIsImlzIiwib3B0aW9uRWwiLCJfdGhpczQiLCJfYXBwZW5kT3B0aW9uV2l0aEljb24iLCJzZWxlY3RPcHRpb25zIiwiYXBwZW5kIiwiZ2V0QXR0cmlidXRlIiwiX2FkZE9wdGlvblRvVmFsdWVEaWN0IiwiYWZ0ZXIiLCJzZXRBdHRyaWJ1dGUiLCJkcm9wZG93bkljb24iLCJvbk9wZW5FbmQiLCJzZWxlY3RlZE9wdGlvbiIsImZpcnN0Iiwic2Nyb2xsT2Zmc2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiY2xpZW50SGVpZ2h0IiwiRHJvcGRvd24iLCJpbml0IiwiaW5kZXgiLCJrZXlzIiwib2JqIiwicmVtb3ZlIiwic2VsZWN0IiwidHlwZSIsImRpc2FibGVkQ2xhc3MiLCJvcHRncm91cENsYXNzIiwiaW5uZXJIVE1MIiwibGlFbCIsInNwYW5FbCIsImljb25VcmwiLCJpbWdFbCIsInByZXBlbmQiLCJub3RBZGRlZCIsImhhc093blByb3BlcnR5IiwidGV4dCIsImZpcnN0RGlzYWJsZWQiLCJlcSIsIm5ld09wdGlvbiIsImNvbGxlY3Rpb24iLCJzZWxlY3RlZFZhbHVlcyIsInB1c2giLCJlbHMiLCJfZ2V0IiwianF1ZXJ5IiwiZ2V0IiwialF1ZXJ5TG9hZGVkIiwiaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIiLCJjYXNoIl0sIm1hcHBpbmdzIjoiNG5DQUFDLFNBQVVBLEdBR1QsSUFBSUMsRUFBWSxDQUNkQyxRQUFTLEdBQ1RDLGdCQUFpQixJQUpuQkMsRUFEWSxTQUFBQyxHQVNaLFNBQUFELEVBQUFFLEVBQUFDLEdBQUFDLGdCQUFBQyxLQUFBTCxHQUFBLElBQUFNLEVBQUFDLDJCQUFBRixNQUFBTCxFQUFBUSxXQUFBQyxPQUFBQyxlQUFBVixJQUFBVyxLQUFBTixLQVlVTCxFQUFZRSxFQUFJQyxJQUd0QixPQUFJRyxFQUFLTSxJQUFJQyxTQUFTLG1CQVhwQmIsMkJBQUFBLEtBQ0pNLEVBQUFKLEdBQUFZLGFBQUFSLEdBTUFILFFBQUFQLEVBQUFtQixPQUFnQlosR0FBQUEsRUFBU2EsU0FBQWIsR0FnQnZCRyxFQUFLVyxXQUFhWCxFQUFLTSxJQUFJTSxLQUFLLFlBR2hDWixFQUFLSixHQUFHaUIsVUFBWSxFQWZwQmIsRUFBSWMsY0FBU1AsR0FDWFAsRUFBQWUsV0FBQSxHQUNEZixFQUFBZ0IsaUJBRURoQixFQUFBaUIsc0JBbkJKakIsR0FUWSxPQUFBa0IsVUFBQXhCLEVBQ1p5QixXQURZQyxhQUFBMUIsRUFBQSxDQUFBLENBQUEyQixJQUFBLFVBQUFDLE1BQUEsV0FtRVJ2QixLQUFLd0IsdUJBSlB4QixLQUFBeUIsa0JBTUV6QixLQUFLSCxHQUFHWSxrQkFBZWlCLElBckVmLENBQUFKLElBQUEsc0JBQUFDLE1BQUEsV0FzRVQsSUFBQUksRUFBQTNCLEtBTUNBLEtBQUs0Qix5QkFBMkI1QixLQUFLNkIsb0JBQW9CQyxLQUFLOUIsTUFKaEVBLEtBQUErQix3QkFBQS9CLEtBQUFnQyxtQkFBQUYsS0FBQTlCLE1BTUVBLEtBQUtpQyx1QkFBeUJqQyxLQUFLa0Msa0JBQWtCSixLQUFLOUIsTUFFMURULEVBQUVTLEtBQUtOLGlCQUFpQnlDLEtBQUsscUJBQXFCQyxLQUFLLFNBQUN2QyxHQWhGaERBLEVBQUF3QyxpQkFBQSxRQUFBVixFQUFBSSwyQkFBQS9CLEtBQUFILEdBQUF3QyxpQkFBQSxTQUFBckMsS0EyRVk0QiwwQkFBQTVCLEtBQUFzQyxNQUFBRCxpQkFBQSxRQUFBckMsS0FBQWlDLDBCQTNFWixDQUFBWCxJQUFBLHVCQUFBQyxNQUFBLFdBZ0ZEN0IsSUFBQUEsRUFBQUEsS0FDTEcsRUFBQUEsS0FBR3dDLGlCQUFpQkYsS0FBQSxxQkFBY0osS0FBQUEsU0FBQUEsR0FDbkNsQyxFQUZEMEMsb0JBQUEsUUFBQUMsRUFBQVQsMkJBSUEvQixLQUFBSCxHQUFLeUMsb0JBQU1ELFNBQVhyQyxLQUFxQzRCLDBCQUN0QzVCLEtBQUFzQyxNQUFBQyxvQkFBQSxRQUFBdkMsS0FBQWlDLDBCQXJGUyxDQUFBWCxJQUFBLHNCQUFBQyxNQUFBLFNBQUFrQixHQUFBekMsS0FBQTBDLHFCQUFBLENBQUFwQixJQUFBLHFCQUFBQyxNQUFBLFNBK0ZHZ0IsR0FDWkUsRUFBQUUsaUJBZ0JDLElBQUlDLEVBQVNyRCxFQUFFa0QsRUFBRUksUUFBUUMsUUFBUSxNQUFNLEdBZHpDeEIsRUFBQXNCLEVBQUFHLEdBZ0JFLElBQUt4RCxFQUFFcUQsR0FBUXBDLFNBQVMsY0FBZ0JqQixFQUFFcUQsR0FBUXBDLFNBQVMsYUFBZWMsRUFBSTBCLE9BQVEsQ0FDcEYsSUFBSUMsR0FBVyxFQUVmLEdBQUlqRCxLQUFLWSxXQUFZLENBckhmLElBQUFzQyxFQUFBM0QsRUFBQVMsS0FBQU4saUJBQUF5QyxLQUFBLHdCQUFBZSxFQUFBRixTQXVHUkUsRUFBQUMsWUFBQSxZQUNERCxFQUFBZixLQUFBLDBCQUFBdEIsS0FBQSxXQUFBLEdBbUJPYixLQUFLb0Qsc0JBQXNCRixFQUFrQixHQUFHSCxLQUdsRCxJQUFJTSxFQUFXOUQsRUFBRXFELEdBQVFULEtBQUssMEJBQzlCa0IsRUFBU3hDLEtBQUssV0FBWXdDLEVBQVN4QyxLQUFLLFlBQ3hDb0MsRUFBV2pELEtBQUtvRCxzQkFBc0I5QixRQWhJbEMvQixFQUFBUyxLQUFBTixpQkFBQXlDLEtBQUEsTUE4R1lnQixZQUFBLFVBQ2xCUixFQUFBQSxHQUFBQSxZQUFGLFVBQ0EzQyxLQUFJNEMsTUFBU3JELE1BQUlzRCxFQUFRQyxZQUd2QjlDLEtBQUFzRCxnQkFBQS9ELEVBQUFTLEtBQUFOLGlCQUFBa0QsR0FzQkFyRCxFQUFFUyxLQUFLZ0IsV0FBV00sR0FBS3pCLElBQUlnQixLQUFLLFdBQVlvQyxHQXBCNUNqRCxLQUFBTyxJQUFJZ0QsUUFBSzNDLFVBR1A2QixFQUFBZSxvQkF4SEksQ0FBQWxDLElBQUEsb0JBQUFDLE1BQUEsV0ErSEo4QixLQUFBQSxVQUFjckQsS0FBQXlELFNBQVlKLFNBQzFCSixLQUFBQSxtQkFFRGpELEtBYkQwRCx3QkFySE0sQ0FBQXBDLElBQUEsaUJBQUFDLE1BQUEsV0F5SUNQLElBQUFBLEVBQUFBLEtBQ1BoQixLQUFBMkQsUUFBU0osU0FBUUssY0FBakIsT0FDRHJFLEVBQUFTLEtBQUEyRCxTQUFBRSxTQUFBLGtCQUFBN0QsS0FBQUYsUUFBQUwsU0FxQkRPLEtBQUtPLElBQUl1RCxPQUFPdkUsRUFBRVMsS0FBSzJELFVBbkJ2QmxCLEtBQUVlLFFBQUFBLFlBQUZ4RCxLQUFBSCxJQXNCSUcsS0FBS0gsR0FBR2tFLFVBbkJkL0QsS0FBQTJELFFBQUFLLFVBQUFDLElBQUEsWUFoSlVqRSxLQUFBa0UsZUFBQWxFLEtBQUFPLElBQUE0RCxTQUFBLG9CQUFBbkUsS0FBQU4sZ0JBQUEwRSxTQUFBUixjQUFBLE1BQUE1RCxLQUFBTixnQkFBQXFELEdBQUEsa0JBbUpVc0IsRUFBQUMsT0FDbEIvRSxFQUFBUyxLQUFJTixpQkFBaUJtRSxTQUFLSixxQ0FBaUJ6RCxLQUFBWSxXQUFBLDJCQUFBLEtBRzFDWixLQUFBa0UsZUFBQWxCLFFBQ0ZoRCxLQUFBa0UsZUFBQTlCLEtBQUEsU0FBQXZDLEdBd0JLLEdBQUlOLEVBQUVNLEdBQUkwRSxHQUFHLFVBQVcsQ0FFdEIsSUFBSUMsT0FBQUEsRUFFRkEsRUFERUMsRUFBSzdELFdBQ0k2RCxFQUFLQyxzQkFBc0JELEVBQUtsRSxJQUFLVixFQUFJLFlBcExwRDRFLEVBQUFDLHNCQTZKT0QsRUFBQWxFLElBQUFWLEdBQ2Y0RSxFQUFLZCxzQkFBbUJDLEVBQUFBLFFBRWZFLEdBQUFBLEVBQVRqRSxHQUFrQjBFLEdBQUEsWUFBbEIsQ0E4Qk0sSUFBSUksRUFBZ0JwRixFQUFFTSxHQUFJc0UsU0FBUyxVQTNCckM1RSxFQUFBa0YsRUFBQS9FLGlCQUFrQmtGLE9BQUFyRixFQUFBLDhCQUFBTSxFQUFBZ0YsYUFBQSxTQUFBLGdCQUFBLElBRXJCRixFQUFBdkMsS0FBQSxTQUFBdkMsR0E2Qk8sSUFBSTJFLEVBQVdDLEVBQUtDLHNCQUFzQkQsRUFBS2xFLElBQUtWLEVBQUksbUJBM0JoRTRFLEVBQUFLLHNCQUFBakYsRUFBQTJFLFFBTUF4RSxLQUFBTyxJQUFBd0UsTUFBQS9FLEtBQUFOLGlCQUdJTSxLQUFBc0MsTUFBTXpDLFNBQU8rRCxjQUFXLFNBQ3RCckUsRUFBQVMsS0FBQXNDLE9BQUF1QixTQUFBLG9DQUNBN0QsS0FBQXNDLE1BQUEwQyxhQUFJUixPQUFKLFFBQ0F4RSxLQUFBc0MsTUFBQTBDLGFBQVNwRSxXQUFZLFFBQ25CNEQsS0FBQUEsTUFBQUEsYUFBVyxjQUFLRSxLQUFBQSxnQkFBTDNCLElBRVovQyxLQUhESCxHQUFBa0UsVUFJRVMsRUFBQUEsS0FBQUEsT0FBQUEsS0FBVyxXQUFLRSxRQUdsQjFFLEtBQUFPLElBQUF1RCxPQUFLZ0IsS0FBQUEsT0FFTjlFLEtBQUEwQyxtQkFHQ25ELElBQUFBLEVBQU9HLEVBQUFBLDBLQUlMLEdBdUJSTSxLQUFLTyxJQUFJdUQsT0FBT21CLEVBQWEsS0F2QnJCakYsS0FBQUgsR0FBQWtFLFNBQUtlLENBQ04sSUFBQXBGLEVBSERILEVBQUFtQixPQUFBLEdBQUFWLEtBQUFGLFFBQUFKLGlCQU1MQSxFQUFBd0YsVUFBQSxTQUFBckYsR0EyQkcsSUFBSXNGLEVBQWlCNUYsRUFBRWtGLEVBQUsvRSxpQkFBaUJ5QyxLQUFLLGFBQWFpRCxRQXpCbkUsR0FBSzdFLEVBQUl3RSxTQUFXckYsY0FBcEJ5RixFQUFBbkMsT0FBQSxDQTJCTSxJQUFJcUMsRUFBZUYsRUFBZSxHQUFHRyx3QkFBd0JDLElBQU1kLEVBQUsvRSxnQkFBZ0I0Rix3QkFBd0JDLElBekJ0SEYsR0FBQVosRUFBQS9FLGdCQUFBOEYsYUFBQSxFQUNBZixFQUFLbkMsZ0JBQWlCc0IsVUFBY3lCLElBSXBDckYsS0FBS3NDLGFBQ0w1QyxFQUFZcUUsY0FBVSxHQUVyQi9ELEtBQUF5RCxTQUFBWSxFQUFBb0IsU0FBQUMsS0FBQTFGLEtBQUFzQyxNQUFBNUMsR0E4QkRNLEtBQUswRCx1QkFqUEcsQ0FBQXBDLElBQUEsd0JBQUFDLE1BQUEsU0F5UFkxQixFQUFJMkUsR0F6QnRCLElBQUFtQixFQUFBdkYsT0FBQXdGLEtBQUE1RixLQUFBZ0IsWUFBQWdDLE9BQ0F0RCxFQUFBQSxLQUFBQSxnQkFBQXFELEdBQTRCNEMsRUFDMUJFLEVBQUlWLEdBQ0pYLEVBQUF6QixHQUFJekIsRUFFRitELEVBQUFBLEdBQUFBLEVBQ0FRLEVBQUFyQixTQUFLOUUsRUFDTk0sS0FBQWdCLFdBQUFNLEdBQUF1RSxJQXZPRyxDQUFBdkUsSUFBQSxrQkFBQUMsTUFBQSxXQThPUGhDLEVBQUFTLEtBQUEyRCxTQUFBeEIsS0FBQSxVQUFBMkQsU0EyQkR2RyxFQUFFUyxLQUFLc0MsT0FBT3dELFNBekJkdkcsRUFBQVMsS0FBQU4saUJBQUFvRyxTQUNBdkcsRUFBQVMsS0FBSzBELFNBQUFBLE9BQUFBLEtBQUxuRCxLQUNEaEIsRUFBQVMsS0FBQTJELFNBQUFtQyxXQWxQUyxDQUFBeEUsSUFBQSx3QkFBQUMsTUFBQSxTQUFBd0UsRUFBQW5ELEVBQUFvRCxHQTJQUixJQUFBQyxFQUFldkcsRUFBQUEsU0FBcUJpRyxZQUFwQyxHQUNBTyxFQUFBLG9CQUFBRixFQUFBLG1CQUFBLEdBQ0F4QixFQUFBeEUsS0FBQVksV0FBQSxnQ0FBQXFGLEVBQUEsWUFBQXJELEVBQUF1RCxVQUFBLGtCQUFBdkQsRUFBQXVELFVBOEJJQyxFQUFPN0csRUFBRSxhQTVCYnNHLEVBQUF0RyxFQUFBLGlCQUNBc0csRUFBSXJCLEtBQUFBLEdBQ0o0QixFQUFBdkMsU0FBQW9DLEVBQUEsSUFBQUMsR0FDREUsRUFBQXhCLE9BQUF5QixHQWdDQyxJQUFJQyxFQUFVMUQsRUFBT2lDLGFBQWEsYUFDcEJqQyxFQUFPaUMsYUFBYSxTQUNsQyxHQUFNeUIsRUFBUyxDQXBTUCxJQUFBQyxFQUFBaEgsRUFBQSxvQkFBQStHLEVBQUEsTUFBQUYsRUFBQUksUUFBQUQsR0EyUVJoSCxPQURBQSxFQUFBQSxLQUFFRyxpQkFBRmtGLE9BQXdCa0IsRUFBeEIsSUFDRU0sRUFBS3pDLEtBM1FDLENBQUFyQyxJQUFBLHdCQUFBQyxNQUFBLFNBbVRZRCxHQUNwQixJQUFJbUYsR0FBWXpHLEtBQUtlLGNBQWMyRixlQUFlcEYsR0F2QmxEK0UsT0F3QklJLEVBQ0Z6RyxLQUFLZSxjQUFjTyxJQUFPLFNBdFRwQnRCLEtBQUFlLGNBQUFPLEdBd1JSL0IsRUFBQVMsS0FBSWlHLFdBQUFBLEdBQWlCckQsVUFBT21CLFlBQVksVUFHeEN4RSxFQUFBUyxLQUFJb0csV0FBUzlFLEdBQUF6QixJQUFiZ0IsS0FBQSxXQUFBNEYsR0FFQUosSUE3UlEsQ0FBQS9FLElBQUEsbUJBQUFDLE1BQUEsV0FvU1IsSUFBQUEsRUFBTStFLEdBVVIsR0FUUUMsS0FBVWhHLElBQUE0QixLQUFBLFVBRWZDLEtBQUEsU0FBQXZDLEdBb0NDLEdBQUlOLEVBQUVNLEdBQUlnQixLQUFLLFlBQWEsQ0FsQzlCLElBQUE4RixFQUFBcEgsRUFBQU0sR0FBQThHLE9BQ09qSCxHQUFBQSxLQUFMNkIsRUFBc0JxRCxFQUF4QixLQUFBK0IsS0FJRixLQUFBcEYsRUFBQSxDQW9DSSxJQUFJcUYsRUFBZ0I1RyxLQUFLTyxJQUFJNEIsS0FBSyxtQkFBbUIwRSxHQUFHLEdBQ3BERCxFQUFjNUQsU0FDaEJ6QixFQUFRcUYsRUFBY0QsUUFwVmxCM0csS0FBQXNDLE1BQUFmLE1BQUFBLElBQUEsQ0FBQUQsSUFBQSxxQkFBQUMsTUFBQSxXQTJUUmhDLElBQUUsSUFBS3lCLEtBRk5oQixLQUFBZSxjQUFBLEdBRU1DLEtBQVdNLFdBQWxCLENBdUNFLElBQUlzQixFQUFTNUMsS0FBS2dCLFdBQVdNLEdBckMvQi9CLEVBQUFxRCxFQUFBL0MsSUFBQWdCLEtBQUEsYUFDRXRCLEVBQUFxRCxFQUFLNUIsVUFBTG1CLEtBQUYsMEJBQUF0QixLQUFBLFdBQUEsR0F1Q0liLEtBQUtzRCxnQkFBZ0IvRCxFQUFFUyxLQUFLTixpQkFBa0JILEVBQUVxRCxFQUFPNEIsV0FyQzNEeEUsS0FBT3lHLGNBQVBuRixJQUFBLElBR0YvQixFQUFBcUQsRUFBQTRCLFVBQUFyQyxLQUFBLDBCQUFBdEIsS0FBQSxXQUFBLEdBdUNNdEIsRUFBRXFELEVBQU80QixVQUFVckIsWUFBWSxnQkExVzNCLENBQUE3QixJQUFBLGtCQUFBQyxNQUFBLFNBMlVJVixFQUFLaUcsR0FDYkEsSUFDQXZGLEtBQUFBLFlBQ0R3RixFQUFBNUUsS0FBQSxlQUFBZ0IsWUFBQSxZQUdDNUIsRUFBVXVGLEdBQ1JGLFNBQUFBLGVBbFZFLENBQUF0RixJQUFBLG9CQUFBQyxNQUFBLFdBMlZWLElBQUF5RixFQUFBLEdBMENFLElBQUssSUFBSTFGLEtBQU90QixLQUFLZSxjQUNuQmlHLEVBQWVDLEtBQUtqSCxLQUFLZ0IsV0FBV00sR0FBS3pCLEdBQUcwQixPQXRZdEMsT0FBQXlGLEtBQUEsQ0FBQSxDQUFBMUYsSUFBQSxPQUFBQyxNQUFBLFNBbURFMkYsRUFBS3BILEdBZmYsT0FBQXFILEtBQUF4SCxFQUFBUSxXQUFBQyxPQUFBQyxlQUFBVixHQUFBLE9BQUFLLE1BQUFNLEtBQUFOLEtBQUFBLEtBQWtCa0gsRUFBU3JHLEtBcENuQixDQUFBUyxJQUFBLGNBQUFDLE1BQUEsU0EwQ0hOLEdBRUwsT0FlZ0JwQixFQUFHdUgsT0FBU3ZILEVBQUcsR0FBS0EsR0FmL0JxQixlQTVDRyxDQUFBSSxJQUFBLFdBQUErRixJQUFBLFdBZ0RSLE9BQU83SCxNQWhEQ0csRUFBQSxHQTRZWjBFLEVBQUUxRSxXQUFhQSxFQTFDVDBFLEVBQUFpRCxjQUNBakQsRUFBQWtELHdCQUFpQjFHLEVBQWIsYUFBK0IsZ0JBblcxQyxDQXFXUzJHIiwiZmlsZSI6InNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgbGV0IF9kZWZhdWx0cyA9IHtcbiAgICBjbGFzc2VzOiAnJyxcbiAgICBkcm9wZG93bk9wdGlvbnM6IHt9XG4gIH07XG5cblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuICBjbGFzcyBGb3JtU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgRm9ybVNlbGVjdCBpbnN0YW5jZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGVsLCBvcHRpb25zKSB7XG4gICAgICBzdXBlcihGb3JtU2VsZWN0LCBlbCwgb3B0aW9ucyk7XG5cbiAgICAgIC8vIERvbid0IGluaXQgaWYgYnJvd3NlciBkZWZhdWx0IHZlcnNpb25cbiAgICAgIGlmICh0aGlzLiRlbC5oYXNDbGFzcygnYnJvd3Nlci1kZWZhdWx0JykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmVsLk1fRm9ybVNlbGVjdCA9IHRoaXM7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIHNlbGVjdFxuICAgICAgICogQG1lbWJlciBGb3JtU2VsZWN0I29wdGlvbnNcbiAgICAgICAqL1xuICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIEZvcm1TZWxlY3QuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICB0aGlzLmlzTXVsdGlwbGUgPSB0aGlzLiRlbC5wcm9wKCdtdWx0aXBsZScpO1xuXG4gICAgICAvLyBTZXR1cFxuICAgICAgdGhpcy5lbC50YWJJbmRleCA9IC0xO1xuICAgICAgdGhpcy5fa2V5c1NlbGVjdGVkID0ge307XG4gICAgICB0aGlzLl92YWx1ZURpY3QgPSB7fTsgLy8gTWFwcyBrZXkgdG8gb3JpZ2luYWwgYW5kIGdlbmVyYXRlZCBvcHRpb24gZWxlbWVudC5cbiAgICAgIHRoaXMuX3NldHVwRHJvcGRvd24oKTtcblxuICAgICAgdGhpcy5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBkZWZhdWx0cygpIHtcbiAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gc3VwZXIuaW5pdCh0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgbGV0IGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICByZXR1cm4gZG9tRWxlbS5NX0Zvcm1TZWxlY3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIHRoaXMuX3JlbW92ZURyb3Bkb3duKCk7XG4gICAgICB0aGlzLmVsLk1fRm9ybVNlbGVjdCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAqL1xuICAgIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICB0aGlzLl9oYW5kbGVTZWxlY3RDaGFuZ2VCb3VuZCA9IHRoaXMuX2hhbmRsZVNlbGVjdENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5faGFuZGxlT3B0aW9uQ2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZU9wdGlvbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLl9oYW5kbGVJbnB1dENsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVJbnB1dENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICQodGhpcy5kcm9wZG93bk9wdGlvbnMpLmZpbmQoJ2xpOm5vdCgub3B0Z3JvdXApJykuZWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVPcHRpb25DbGlja0JvdW5kKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9oYW5kbGVTZWxlY3RDaGFuZ2VCb3VuZCk7XG4gICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlSW5wdXRDbGlja0JvdW5kKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgRXZlbnQgSGFuZGxlcnNcbiAgICAgKi9cbiAgICBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICQodGhpcy5kcm9wZG93bk9wdGlvbnMpLmZpbmQoJ2xpOm5vdCgub3B0Z3JvdXApJykuZWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVPcHRpb25DbGlja0JvdW5kKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9oYW5kbGVTZWxlY3RDaGFuZ2VCb3VuZCk7XG4gICAgICB0aGlzLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlSW5wdXRDbGlja0JvdW5kKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgU2VsZWN0IENoYW5nZVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBfaGFuZGxlU2VsZWN0Q2hhbmdlKGUpIHtcbiAgICAgIHRoaXMuX3NldFZhbHVlVG9JbnB1dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBPcHRpb24gQ2xpY2tcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgX2hhbmRsZU9wdGlvbkNsaWNrKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxldCBvcHRpb24gPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaScpWzBdO1xuICAgICAgbGV0IGtleSA9IG9wdGlvbi5pZDtcbiAgICAgIGlmICghJChvcHRpb24pLmhhc0NsYXNzKCdkaXNhYmxlZCcpICYmICEkKG9wdGlvbikuaGFzQ2xhc3MoJ29wdGdyb3VwJykgJiYga2V5Lmxlbmd0aCkge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgICAvLyBEZXNlbGVjdCBwbGFjZWhvbGRlciBvcHRpb24gaWYgc3RpbGwgc2VsZWN0ZWQuXG4gICAgICAgICAgbGV0IHBsYWNlaG9sZGVyT3B0aW9uID0gJCh0aGlzLmRyb3Bkb3duT3B0aW9ucykuZmluZCgnbGkuZGlzYWJsZWQuc2VsZWN0ZWQnKTtcbiAgICAgICAgICBpZiAocGxhY2Vob2xkZXJPcHRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlck9wdGlvbi5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLl90b2dnbGVFbnRyeUZyb21BcnJheShwbGFjZWhvbGRlck9wdGlvblswXS5pZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGNoZWNrYm94ID0gJChvcHRpb24pLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuICAgICAgICAgIGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCAhY2hlY2tib3gucHJvcCgnY2hlY2tlZCcpKTtcbiAgICAgICAgICBzZWxlY3RlZCA9IHRoaXMuX3RvZ2dsZUVudHJ5RnJvbUFycmF5KGtleSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKHRoaXMuZHJvcGRvd25PcHRpb25zKS5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAkKG9wdGlvbikudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBvcHRpb24udGV4dENvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hY3RpdmF0ZU9wdGlvbigkKHRoaXMuZHJvcGRvd25PcHRpb25zKSwgb3B0aW9uKTtcbiAgICAgICAgJCh0aGlzLl92YWx1ZURpY3Rba2V5XS5lbCkucHJvcCgnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgICAgIHRoaXMuJGVsLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgfVxuXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBJbnB1dCBDbGlja1xuICAgICAqL1xuICAgIF9oYW5kbGVJbnB1dENsaWNrKCkge1xuICAgICAgaWYgKHRoaXMuZHJvcGRvd24gJiYgdGhpcy5kcm9wZG93bi5pc09wZW4pIHtcbiAgICAgICAgdGhpcy5fc2V0VmFsdWVUb0lucHV0KCk7XG4gICAgICAgIHRoaXMuX3NldFNlbGVjdGVkU3RhdGVzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0dXAgZHJvcGRvd25cbiAgICAgKi9cbiAgICBfc2V0dXBEcm9wZG93bigpIHtcbiAgICAgIHRoaXMud3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgJCh0aGlzLndyYXBwZXIpLmFkZENsYXNzKCdzZWxlY3Qtd3JhcHBlcicgKyAnICcgKyB0aGlzLm9wdGlvbnMuY2xhc3Nlcyk7XG4gICAgICB0aGlzLiRlbC5iZWZvcmUoJCh0aGlzLndyYXBwZXIpKTtcbiAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblxuICAgICAgaWYgKHRoaXMuZWwuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBkcm9wZG93blxuICAgICAgdGhpcy4kc2VsZWN0T3B0aW9ucyA9IHRoaXMuJGVsLmNoaWxkcmVuKCdvcHRpb24sIG9wdGdyb3VwJyk7XG4gICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucy5pZCA9IGBzZWxlY3Qtb3B0aW9ucy0ke00uZ3VpZCgpfWA7XG4gICAgICAkKHRoaXMuZHJvcGRvd25PcHRpb25zKS5hZGRDbGFzcygnZHJvcGRvd24tY29udGVudCBzZWxlY3QtZHJvcGRvd24gJyArICh0aGlzLmlzTXVsdGlwbGUgPyAnbXVsdGlwbGUtc2VsZWN0LWRyb3Bkb3duJyA6ICcnKSk7XG5cbiAgICAgIC8vIENyZWF0ZSBkcm9wZG93biBzdHJ1Y3R1cmUuXG4gICAgICBpZiAodGhpcy4kc2VsZWN0T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy4kc2VsZWN0T3B0aW9ucy5lYWNoKChlbCkgPT4ge1xuICAgICAgICAgIGlmICgkKGVsKS5pcygnb3B0aW9uJykpIHtcbiAgICAgICAgICAgIC8vIERpcmVjdCBkZXNjZW5kYW50IG9wdGlvbi5cbiAgICAgICAgICAgIGxldCBvcHRpb25FbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgb3B0aW9uRWwgPSB0aGlzLl9hcHBlbmRPcHRpb25XaXRoSWNvbih0aGlzLiRlbCwgZWwsICdtdWx0aXBsZScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvcHRpb25FbCA9IHRoaXMuX2FwcGVuZE9wdGlvbldpdGhJY29uKHRoaXMuJGVsLCBlbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2FkZE9wdGlvblRvVmFsdWVEaWN0KGVsLCBvcHRpb25FbCk7XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKCQoZWwpLmlzKCdvcHRncm91cCcpKSB7XG4gICAgICAgICAgICAvLyBPcHRncm91cC5cbiAgICAgICAgICAgIGxldCBzZWxlY3RPcHRpb25zID0gJChlbCkuY2hpbGRyZW4oJ29wdGlvbicpO1xuICAgICAgICAgICAgJCh0aGlzLmRyb3Bkb3duT3B0aW9ucykuYXBwZW5kKCQoJzxsaSBjbGFzcz1cIm9wdGdyb3VwXCI+PHNwYW4+JyArIGVsLmdldEF0dHJpYnV0ZSgnbGFiZWwnKSArICc8L3NwYW4+PC9saT4nKVswXSk7XG5cbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMuZWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgbGV0IG9wdGlvbkVsID0gdGhpcy5fYXBwZW5kT3B0aW9uV2l0aEljb24odGhpcy4kZWwsIGVsLCAnb3B0Z3JvdXAtb3B0aW9uJyk7XG4gICAgICAgICAgICAgIHRoaXMuX2FkZE9wdGlvblRvVmFsdWVEaWN0KGVsLCBvcHRpb25FbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbC5hZnRlcih0aGlzLmRyb3Bkb3duT3B0aW9ucyk7XG5cbiAgICAgIC8vIEFkZCBpbnB1dCBkcm9wZG93blxuICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAkKHRoaXMuaW5wdXQpLmFkZENsYXNzKCdzZWxlY3QtZHJvcGRvd24gZHJvcGRvd24tdHJpZ2dlcicpO1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKTtcbiAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsIHRoaXMuZHJvcGRvd25PcHRpb25zLmlkKTtcbiAgICAgIGlmICh0aGlzLmVsLmRpc2FibGVkKSB7XG4gICAgICAgICQodGhpcy5pbnB1dCkucHJvcCgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbC5iZWZvcmUodGhpcy5pbnB1dCk7XG4gICAgICB0aGlzLl9zZXRWYWx1ZVRvSW5wdXQoKTtcblxuICAgICAgLy8gQWRkIGNhcmV0XG4gICAgICBsZXQgZHJvcGRvd25JY29uID0gJCgnPHN2ZyBjbGFzcz1cImNhcmV0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTcgMTBsNSA1IDUtNXpcIi8+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48L3N2Zz4nKTtcbiAgICAgIHRoaXMuJGVsLmJlZm9yZShkcm9wZG93bkljb25bMF0pO1xuXG4gICAgICAvLyBJbml0aWFsaXplIGRyb3Bkb3duXG4gICAgICBpZiAoIXRoaXMuZWwuZGlzYWJsZWQpIHtcbiAgICAgICAgbGV0IGRyb3Bkb3duT3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMuZHJvcGRvd25PcHRpb25zKTtcblxuICAgICAgICAvLyBBZGQgY2FsbGJhY2sgZm9yIGNlbnRlcmluZyBzZWxlY3RlZCBvcHRpb24gd2hlbiBkcm9wZG93biBjb250ZW50IGlzIHNjcm9sbGFibGVcbiAgICAgICAgZHJvcGRvd25PcHRpb25zLm9uT3BlbkVuZCA9IChlbCkgPT4ge1xuICAgICAgICAgIGxldCBzZWxlY3RlZE9wdGlvbiA9ICQodGhpcy5kcm9wZG93bk9wdGlvbnMpLmZpbmQoJy5zZWxlY3RlZCcpLmZpcnN0KCk7XG4gICAgICAgICAgaWYgKHRoaXMuZHJvcGRvd24uaXNTY3JvbGxhYmxlICYmIHNlbGVjdGVkT3B0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHNjcm9sbE9mZnNldCA9IHNlbGVjdGVkT3B0aW9uWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRoaXMuZHJvcGRvd25PcHRpb25zLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDsgLy8gc2Nyb2xsIHRvIHNlbGVjdGVkIG9wdGlvblxuICAgICAgICAgICAgc2Nyb2xsT2Zmc2V0IC09IHRoaXMuZHJvcGRvd25PcHRpb25zLmNsaWVudEhlaWdodCAvIDI7IC8vIGNlbnRlciBpbiBkcm9wZG93blxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuc2Nyb2xsVG9wID0gc2Nyb2xsT2Zmc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgICAgZHJvcGRvd25PcHRpb25zLmNsb3NlT25DbGljayA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcGRvd24gPSBNLkRyb3Bkb3duLmluaXQodGhpcy5pbnB1dCwgZHJvcGRvd25PcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGluaXRpYWwgc2VsZWN0aW9uc1xuICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRTdGF0ZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgb3B0aW9uIHRvIHZhbHVlIGRpY3RcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsICBvcmlnaW5hbCBvcHRpb24gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gb3B0aW9uRWwgIGdlbmVyYXRlZCBvcHRpb24gZWxlbWVudFxuICAgICAqL1xuICAgIF9hZGRPcHRpb25Ub1ZhbHVlRGljdChlbCwgb3B0aW9uRWwpIHtcbiAgICAgIGxldCBpbmRleCA9IE9iamVjdC5rZXlzKHRoaXMuX3ZhbHVlRGljdCkubGVuZ3RoO1xuICAgICAgbGV0IGtleSA9IHRoaXMuZHJvcGRvd25PcHRpb25zLmlkICsgaW5kZXg7XG4gICAgICBsZXQgb2JqID0ge307XG4gICAgICBvcHRpb25FbC5pZCA9IGtleTtcblxuICAgICAgb2JqLmVsID0gZWw7XG4gICAgICBvYmoub3B0aW9uRWwgPSBvcHRpb25FbDtcbiAgICAgIHRoaXMuX3ZhbHVlRGljdFtrZXldID0gb2JqO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBkcm9wZG93blxuICAgICAqL1xuICAgIF9yZW1vdmVEcm9wZG93bigpIHtcbiAgICAgICQodGhpcy53cmFwcGVyKS5maW5kKCcuY2FyZXQnKS5yZW1vdmUoKTtcbiAgICAgICQodGhpcy5pbnB1dCkucmVtb3ZlKCk7XG4gICAgICAkKHRoaXMuZHJvcGRvd25PcHRpb25zKS5yZW1vdmUoKTtcbiAgICAgICQodGhpcy53cmFwcGVyKS5iZWZvcmUodGhpcy4kZWwpO1xuICAgICAgJCh0aGlzLndyYXBwZXIpLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHVwIGRyb3Bkb3duXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBzZWxlY3QgIHNlbGVjdCBlbGVtZW50XG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBvcHRpb24gIG9wdGlvbiBlbGVtZW50IGZyb20gc2VsZWN0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSAgb3B0aW9uIGVsZW1lbnQgYWRkZWRcbiAgICAgKi9cbiAgICBfYXBwZW5kT3B0aW9uV2l0aEljb24oc2VsZWN0LCBvcHRpb24sIHR5cGUpIHtcbiAgICAgIC8vIEFkZCBkaXNhYmxlZCBhdHRyIGlmIGRpc2FibGVkXG4gICAgICBsZXQgZGlzYWJsZWRDbGFzcyA9IChvcHRpb24uZGlzYWJsZWQpID8gJ2Rpc2FibGVkICcgOiAnJztcbiAgICAgIGxldCBvcHRncm91cENsYXNzID0gKHR5cGUgPT09ICdvcHRncm91cC1vcHRpb24nKSA/ICdvcHRncm91cC1vcHRpb24gJyA6ICcnO1xuICAgICAgbGV0IG11bHRpcGxlQ2hlY2tib3ggPSB0aGlzLmlzTXVsdGlwbGUgPyBgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiR7ZGlzYWJsZWRDbGFzc31cIi8+PHNwYW4+JHtvcHRpb24uaW5uZXJIVE1MfTwvc3Bhbj48L2xhYmVsPmAgOiBvcHRpb24uaW5uZXJIVE1MO1xuICAgICAgbGV0IGxpRWwgPSAkKCc8bGk+PC9saT4nKTtcbiAgICAgIGxldCBzcGFuRWwgPSAkKCc8c3Bhbj48L3NwYW4+Jyk7XG4gICAgICBzcGFuRWwuaHRtbChtdWx0aXBsZUNoZWNrYm94KTtcbiAgICAgIGxpRWwuYWRkQ2xhc3MoYCR7ZGlzYWJsZWRDbGFzc30gJHtvcHRncm91cENsYXNzfWApO1xuICAgICAgbGlFbC5hcHBlbmQoc3BhbkVsKTtcblxuICAgICAgLy8gYWRkIGljb25zXG4gICAgICBsZXQgaWNvblVybCA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpO1xuICAgICAgbGV0IGNsYXNzZXMgPSBvcHRpb24uZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgaWYgKCEhaWNvblVybCkge1xuICAgICAgICBsZXQgaW1nRWwgPSAkKCc8aW1nIGFsdD1cIlwiIHNyYz1cIicgKyBpY29uVXJsICsgJ1wiPicpO1xuICAgICAgICBsaUVsLnByZXBlbmQoaW1nRWwpO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBmb3IgbXVsdGlwbGUgdHlwZS5cbiAgICAgICQodGhpcy5kcm9wZG93bk9wdGlvbnMpLmFwcGVuZChsaUVsWzBdKTtcbiAgICAgIHJldHVybiBsaUVsWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBlbnRyeSBmcm9tIG9wdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgIE9wdGlvbiBrZXlcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAgaWYgZW50cnkgd2FzIGFkZGVkIG9yIHJlbW92ZWRcbiAgICAgKi9cbiAgICBfdG9nZ2xlRW50cnlGcm9tQXJyYXkoa2V5KSB7XG4gICAgICBsZXQgbm90QWRkZWQgPSAhdGhpcy5fa2V5c1NlbGVjdGVkLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICBpZiAobm90QWRkZWQpIHtcbiAgICAgICAgdGhpcy5fa2V5c1NlbGVjdGVkW2tleV0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2tleXNTZWxlY3RlZFtrZXldO1xuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX3ZhbHVlRGljdFtrZXldLm9wdGlvbkVsKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgIC8vIHVzZSBub3RBZGRlZCBpbnN0ZWFkIG9mIHRydWUgKHRvIGRldGVjdCBpZiB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkIG9yIG5vdClcbiAgICAgICQodGhpcy5fdmFsdWVEaWN0W2tleV0uZWwpLnByb3AoJ3NlbGVjdGVkJywgbm90QWRkZWQpO1xuXG4gICAgICByZXR1cm4gbm90QWRkZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHZhbHVlIHRvIGlucHV0XG4gICAgICovXG4gICAgX3NldFZhbHVlVG9JbnB1dCgpIHtcbiAgICAgIGxldCB2YWx1ZSA9ICcnO1xuICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLiRlbC5maW5kKCdvcHRpb24nKTtcblxuICAgICAgb3B0aW9ucy5lYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoJChlbCkucHJvcCgnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgIGxldCB0ZXh0ID0gJChlbCkudGV4dCgpO1xuICAgICAgICAgIHZhbHVlID09PSAnJyA/IHZhbHVlICs9IHRleHQgOiB2YWx1ZSArPSAnLCAnICsgdGV4dDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgbGV0IGZpcnN0RGlzYWJsZWQgPSB0aGlzLiRlbC5maW5kKCdvcHRpb246ZGlzYWJsZWQnKS5lcSgwKTtcbiAgICAgICAgaWYgKGZpcnN0RGlzYWJsZWQubGVuZ3RoKSB7XG4gICAgICAgICAgdmFsdWUgPSBmaXJzdERpc2FibGVkLnRleHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHNlbGVjdGVkIHN0YXRlIG9mIGRyb3Bkb3duIHRvbyBtYXRjaCBhY3R1YWwgc2VsZWN0IGVsZW1lbnRcbiAgICAgKi9cbiAgICBfc2V0U2VsZWN0ZWRTdGF0ZXMoKSB7XG4gICAgICB0aGlzLl9rZXlzU2VsZWN0ZWQgPSB7fTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3ZhbHVlRGljdCkge1xuICAgICAgICBsZXQgb3B0aW9uID0gdGhpcy5fdmFsdWVEaWN0W2tleV07XG4gICAgICAgIGlmICgkKG9wdGlvbi5lbCkucHJvcCgnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICQob3B0aW9uLm9wdGlvbkVsKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcbiAgICAgICAgICB0aGlzLl9hY3RpdmF0ZU9wdGlvbigkKHRoaXMuZHJvcGRvd25PcHRpb25zKSwgJChvcHRpb24ub3B0aW9uRWwpKTtcbiAgICAgICAgICB0aGlzLl9rZXlzU2VsZWN0ZWRba2V5XSA9IHRydWU7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKG9wdGlvbi5vcHRpb25FbCkuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xuICAgICAgICAgICQob3B0aW9uLm9wdGlvbkVsKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2Ugb3B0aW9uIGFzIHNlbGVjdGVkIGFuZCBzY3JvbGwgdG8gc2VsZWN0ZWQgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gY29sbGVjdGlvbiAgU2VsZWN0IG9wdGlvbnMgalF1ZXJ5IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5ld09wdGlvbiAgZWxlbWVudCBvZiB0aGUgbmV3IG9wdGlvblxuICAgICAqL1xuICAgIF9hY3RpdmF0ZU9wdGlvbihjb2xsZWN0aW9uLCBuZXdPcHRpb24pIHtcbiAgICAgIGlmIChuZXdPcHRpb24pIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgICBjb2xsZWN0aW9uLmZpbmQoJ2xpLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgb3B0aW9uID0gJChuZXdPcHRpb24pO1xuICAgICAgICBvcHRpb24uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IFNlbGVjdGVkIFZhbHVlc1xuICAgICAqIEByZXR1cm4ge0FycmF5fSAgQXJyYXkgb2Ygc2VsZWN0ZWQgdmFsdWVzXG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRWYWx1ZXMoKSB7XG4gICAgICBsZXQgc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9rZXlzU2VsZWN0ZWQpIHtcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZXMucHVzaCh0aGlzLl92YWx1ZURpY3Rba2V5XS5lbC52YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZXM7XG4gICAgfVxuICB9XG5cbiAgTS5Gb3JtU2VsZWN0ID0gRm9ybVNlbGVjdDtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKEZvcm1TZWxlY3QsICdmb3JtU2VsZWN0JywgJ01fRm9ybVNlbGVjdCcpO1xuICB9XG59KGNhc2gpKTtcbiJdfQ==