(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){"use strict";n.r(e);var c=n(4),a=n.n(c),b=n(3),s=n(1),i=n(0),o=function(t){var e=t.tabs,n=t.onTabSelected,c=t.selectedTabId;return Object(i.jsxs)(i.Fragment,{children:[e.map((function(t){return Object(i.jsx)("button",{type:"button",onClick:function(){n(t)},children:t.title})})),Object(i.jsx)("div",{children:c})]})},r=(n(10),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),d=function(){var t=Object(s.useState)(r[0].content),e=Object(b.a)(t,2),n=e[0],c=e[1],a=Object(s.useState)("Tab 1"),d=Object(b.a)(a,2),j=d[0],l=d[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("h1",{children:["Selected tab is\xa0",j]}),Object(i.jsx)(o,{tabs:r,onTabSelected:function(t){c(t.content),l(t.title)},selectedTabId:n})]})};a.a.render(Object(i.jsx)(d,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.65bb1ab6.chunk.js.map