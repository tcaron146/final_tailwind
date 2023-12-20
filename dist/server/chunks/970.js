exports.id=970,exports.ids=[970],exports.modules={2254:(e,t,n)=>{e.exports=n(4767)},2569:(e,t,n)=>{"use strict";n.d(t,{Cp:()=>s,Rp:()=>i});var r=n(2727),a=n(3729);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function u(e,t,n,r){return new(n||(n=Promise))(function(a,u){function o(e){try{s(r.next(e))}catch(e){u(e)}}function i(e){try{s(r.throw(e))}catch(e){u(e)}}function s(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,i)}s((r=r.apply(e,t||[])).next())})}function o(e,t){var n,r,a,u,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(n)throw TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&u[0]?r.return:u[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,u[1])).done)return a;switch(r=0,a&&(u=[2&u[0],a.value]),u[0]){case 0:case 1:a=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,r=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!a||u[1]>a[0]&&u[1]<a[3])){o.label=u[1];break}if(6===u[0]&&o.label<a[1]){o.label=a[1],a=u;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(u);break}a[2]&&o.ops.pop(),o.trys.pop();continue}u=t.call(e,o)}catch(e){u=[6,e],r=0}finally{n=a=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var i=function(e,t){var n=(0,a.useState)(),i=n[0],s=n[1],c=(0,a.useState)(),l=c[0],f=c[1],p=(0,a.useState)(!1),b=p[0],v=p[1];return[(0,a.useCallback)(function(n,a){return u(void 0,void 0,void 0,function(){var u;return o(this,function(o){switch(o.label){case 0:v(!0),s(void 0),o.label=1;case 1:return o.trys.push([1,5,6,7]),[4,(0,r.Xb)(e,n,a)];case 2:if(u=o.sent(),!(t&&t.sendEmailVerification&&u.user))return[3,4];return[4,(0,r.w$)(u.user,t.emailVerificationOptions)];case 3:o.sent(),o.label=4;case 4:return f(u),[2,u];case 5:return s(o.sent()),[3,7];case 6:return v(!1),[7];case 7:return[2]}})})},[e,t]),l,b,i]},s=function(e){var t=(0,a.useState)(),n=t[0],i=t[1],s=(0,a.useState)(),c=s[0],l=s[1],f=(0,a.useState)(!1),p=f[0],b=f[1];return[(0,a.useCallback)(function(t,n){return u(void 0,void 0,void 0,function(){var a;return o(this,function(u){switch(u.label){case 0:b(!0),i(void 0),u.label=1;case 1:return u.trys.push([1,3,4,5]),[4,(0,r.e5)(e,t,n)];case 2:return l(a=u.sent()),[2,a];case 3:return i(u.sent()),[3,5];case 4:return b(!1),[7];case 5:return[2]}})})},[e]),c,p,n]}}};