function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,r,a,i,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,a=r;return o=r=void 0,c=t,i=e.apply(a,n)}function S(e){return c=e,f=setTimeout(O,t),l?y(e):i}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=a}function O(){var e=g();if(T(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?d(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&o?y(e):(o=r=void 0,i)}function j(){var e=g(),n=T(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),i}return t=b(t)||0,p(n)&&(l=!!n.leading,a=(s="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},j.flush=function(){return void 0===f?i:h(g())},j}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})},console.log("Hello MENTOR, and thanks for watching!");const y=document.querySelector(".feedback-form");y.addEventListener("input",e(t)((function({target:e}){S[e.name]=e.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500));const S=localStorage.getItem("feedback-form-state")?JSON.parse(localStorage.getItem("feedback-form-state")):{};y.addEventListener("submit",(function(e){e.preventDefault();const t=e.currentTarget.elements.email.value,n=e.currentTarget.elements.message.value;if(""===t||""===n)return alert("Всі поля мають бути заповнені!!!");console.log("getLocalKey",JSON.parse(localStorage.getItem("feedback-form-state"))),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);t.email&&(y.elements.email.value=t.email),t.message&&(y.elements.message.value=t.message)}}();
//# sourceMappingURL=03-feedback.a3b932b4.js.map
