(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,n,t){e.exports=t(30)},27:function(e,n,t){},29:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(3),i=t.n(a),c=t(6),s=t(1),l=t(2),u={searchField:""},d={isPending:!1,robots:[],error:""},h=(t(26),t(15)),f=(t(27),t(28),t(4)),b=t(5),p=t(8),g=t(7),m=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))},v=function(e){var n=e.robots;return o.a.createElement("div",null,n.map((function(e,t){return o.a.createElement(m,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},E=function(e){e.searchfield;var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Seacrh Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},w=function(e){return o.a.createElement("div",{style:{overflow:"scroll",height:"800px"}},e.children)},O=function(e){Object(p.a)(t,e);var n=Object(g.a)(t);function t(){return Object(f.a)(this,t),n.apply(this,arguments)}return Object(b.a)(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return o.a.createElement("h1",{className:"f1"},"RoboFriends")}}]),t}(o.a.Component),R=(t(29),{onSearchChange:function(e){return{type:"CHANGE_SEARCH_FIELD",payload:e.target.value}},onRequestRobots:function(){return function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})})).catch((function(n){return e({type:"REQUEST_ROBOTS_FAILED"})}))}}}),y=function(e){Object(p.a)(t,e);var n=Object(g.a)(t);function t(){return Object(f.a)(this,t),n.apply(this,arguments)}return Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,a=e.isPending,i=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a?o.a.createElement("h1",{className:"tc"},"Loading"):o.a.createElement("div",{className:"tc"},o.a.createElement(O,null),o.a.createElement(E,{searchChange:t}),o.a.createElement(w,null,o.a.createElement(v,{robots:i})))}}]),t}(r.Component),S=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),R)(y),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"CHANGE_SEARCH_FIELD":return Object(l.a)({},e,{searchField:r});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"REQUEST_ROBOTS_PENDING":return Object(l.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(l.a)({},e,{robots:r,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object(l.a)({},e,{error:r,isPending:!1});default:return e}}}),_=Object(s.d)(k,Object(s.a)(h.a));i.a.render(o.a.createElement(c.a,{store:_},o.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");C?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(n,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.43d6e8b7.chunk.js.map