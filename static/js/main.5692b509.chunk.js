(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(7),o=n.n(i),s=(n(12),n(3)),a=n(4),u=n(6),l=n(5),h=n(0),j=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={users:[]},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://randomuser.me/api/?results=50").then((function(t){if(t.ok)return t.json();throw new Error("Request failed.")})).then((function(e){t.setState({users:e.results})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this.state.users.map((function(t,e){return Object(h.jsx)(d,{name:"".concat(t.name.first," ").concat(t.name.last),email:t.email},t.login.md5)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"My users list:"}),Object(h.jsx)("button",{onClick:function(){return window.location.reload()},children:"reload"}),t]})}}]),n}(c.a.Component),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{style:{borderStyle:"dotted"},children:[Object(h.jsx)("h3",{children:this.props.name}),Object(h.jsx)("p",{children:this.props.email})]})}}]),n}(c.a.Component),b=j,p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),i(t),o(t)}))};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.5692b509.chunk.js.map