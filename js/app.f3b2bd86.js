(function(t){function n(n){for(var a,o,c=n[0],s=n[1],l=n[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);v&&v(n);while(f.length)f.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],a=!0,o=1;o<e.length;o++){var c=e[o];0!==i[c]&&(a=!1)}a&&(r.splice(n--,1),t=s(s.s=e[0]))}return t}var a={},o={app:0},i={app:0},r=[];function c(t){return s.p+"js/"+({portfolio:"portfolio"}[t]||t)+"."+{portfolio:"cdcabfcc"}[t]+".js"}function s(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.e=function(t){var n=[],e={portfolio:1};o[t]?n.push(o[t]):0!==o[t]&&e[t]&&n.push(o[t]=new Promise((function(n,e){for(var a="css/"+({portfolio:"portfolio"}[t]||t)+"."+{portfolio:"60cc27e9"}[t]+".css",i=s.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],u=l.getAttribute("data-href");if(u===a||u===i)return n()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=n,v.onerror=function(n){var a=n&&n.target&&n.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[t],v.parentNode.removeChild(v),e(r)},v.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(v)})).then((function(){o[t]=0})));var a=i[t];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,e){a=i[t]=[n,e]}));n.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var f=new Error;l=function(n){u.onerror=u.onload=null,clearTimeout(v);var e=i[t];if(0!==e){if(e){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,e[1](f)}i[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},s.m=t,s.c=a,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)s.d(e,a,function(n){return t[n]}.bind(null,a));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var v=u;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"2b6c":function(t,n,e){"use strict";e("f43d")},"367c":function(t,n,e){"use strict";e("90c7")},"4f87":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),o=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("navigation-component"),n("contact-component"),n("router-view"),n("footer-component")],1)},i=[],r=function(){var t=this,n=t._self._c;return n("div",{staticClass:"navigation"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.navActive,expression:"navActive"}],staticClass:"navigation__checkbox",attrs:{type:"checkbox",id:"nav_toggle"},domProps:{checked:Array.isArray(t.navActive)?t._i(t.navActive,null)>-1:t.navActive},on:{change:function(n){var e=t.navActive,a=n.target,o=!!a.checked;if(Array.isArray(e)){var i=null,r=t._i(e,i);a.checked?r<0&&(t.navActive=e.concat([i])):r>-1&&(t.navActive=e.slice(0,r).concat(e.slice(r+1)))}else t.navActive=o}}}),t._m(0),n("nav",{staticClass:"navigation__nav"},[n("ul",{staticClass:"navigation__list"},[n("li",{staticClass:"navigation__item",on:{click:function(n){t.navActive=!1}}},[n("router-link",{staticClass:"navigation__link",attrs:{to:"/about"}},[n("span",[t._v("About")])])],1),n("li",{staticClass:"navigation__item",on:{click:function(n){t.navActive=!1}}},[n("router-link",{staticClass:"navigation__link",attrs:{to:"/portfolio"}},[n("span",[t._v("Portfolio")])])],1),n("li",{staticClass:"navigation__item",on:{click:function(n){t.navActive=!1}}},[n("router-link",{staticClass:"navigation__link",attrs:{to:"/certifications"}},[n("span",[t._v("Certifications")])])],1)])])])},c=[function(){var t=this,n=t._self._c;return n("label",{staticClass:"navigation__button",attrs:{for:"nav_toggle"}},[n("div",{staticClass:"navigation__line"}),n("div",{staticClass:"navigation__line"}),n("div",{staticClass:"navigation__line"})])}],s={data:function(){return{navActive:!1}}},l=s,u=(e("b593"),e("2877")),f=Object(u["a"])(l,r,c,!1,null,null,null),v=f.exports,p=function(){var t=this,n=t._self._c;return n("div",{staticClass:"contact"},[n("ul",{staticClass:"contact__list"},[n("li",{staticClass:"contact__item"},[n("a",{staticClass:"contact__link contact__link--linkedin",attrs:{href:"https://www.linkedin.com/in/hovik-hovakimyan-47b245252/",target:"_blank"}},[n("span",{staticClass:"contact__label"},[t._v("Linkedin")]),n("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)]),n("li",{staticClass:"contact__item"},[n("a",{staticClass:"contact__link contact__link--github",attrs:{href:"https://github.com/hovikhovakimyan",target:"_blank"}},[n("span",{staticClass:"contact__label"},[t._v("Github")]),n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),n("li",{staticClass:"contact__item"},[n("a",{staticClass:"contact__link contact__link--email",attrs:{href:"mailto:hovikhovakimyan7@gmail.com",target:"_blank"}},[n("span",{staticClass:"contact__label"},[t._v("Email")]),n("font-awesome-icon",{attrs:{icon:["far","envelope"]}})],1)]),n("li",{staticClass:"contact__item"},[n("a",{staticClass:"contact__link contact__link--resume",attrs:{href:"https://docs.google.com/document/d/1q9t286OKb1h16Y7fJkbWRVpnNZu34OqLGt93l7ZVX6E/edit?usp=sharing",target:"_blank"}},[n("span",{staticClass:"contact__label"},[t._v("Resume")]),n("font-awesome-icon",{attrs:{icon:["fas","portrait"]}})],1)])])])},_=[],d={},m=d,h=(e("fd0c"),Object(u["a"])(m,p,_,!1,null,null,null)),g=h.exports,b=function(){var t=this;t._self._c;return t._m(0)},k=[function(){var t=this,n=t._self._c;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"footer__item"},[n("div",{staticClass:"footer__contact"},[t._v("Email: "),n("a",{staticClass:"footer__link",attrs:{href:"mailto:hovikhovakimyan7@gmail.com"}},[t._v("hovikhovakimyan7@gmail.com")])])])])}],C={},y=C,w=(e("367c"),Object(u["a"])(y,b,k,!1,null,null,null)),A=w.exports,O={components:{NavigationComponent:v,ContactComponent:g,FooterComponent:A}},j=O,x=(e("2b6c"),Object(u["a"])(j,o,i,!1,null,null,null)),E=x.exports,P=(e("4f87"),e("8c4f"));a["a"].use(P["a"]);var S=new P["a"]({routes:[{path:"/",redirect:"/about"},{path:"/about",name:"about",component:function(){return e.e("portfolio").then(e.bind(null,"f820"))}},{path:"/portfolio",name:"portfolio",component:function(){return e.e("portfolio").then(e.bind(null,"c9e5"))}},{path:"/certifications",name:"certifications",component:function(){return e.e("portfolio").then(e.bind(null,"268e"))}}]}),N=e("ecee"),T=e("c074"),L=e("f2d1"),q=e("b702"),M=e("ad3d");N["c"].add(T["c"],T["b"],L["b"],L["c"],q["a"],T["d"],T["e"],L["d"],L["a"],T["a"]),a["a"].component("font-awesome-icon",M["a"]),a["a"].config.productionTip=!1,new a["a"]({router:S,render:function(t){return t(E)}}).$mount("#app")},"837d":function(t,n,e){},"90c7":function(t,n,e){},b593:function(t,n,e){"use strict";e("e703")},e703:function(t,n,e){},f43d:function(t,n,e){},fd0c:function(t,n,e){"use strict";e("837d")}});
//# sourceMappingURL=app.f3b2bd86.js.map