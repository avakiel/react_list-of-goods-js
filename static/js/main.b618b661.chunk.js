(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n=s(6),o=s.n(n),c=s(7),r=s(1),i=s(8),l=s(3),a=(s(13),s(14),s(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u="length",d="alphabet",j="reverse";function v(){var e=Object(l.useState)({reverse:"",sortField:"",visibleGoods:[].concat(b)}),t=Object(i.a)(e,2),s=t[0],n=t[1];return Object(a.jsxs)("div",{className:"section content",children:[Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{onClick:function(){var e=[].concat(b).sort((function(e,t){return e.localeCompare(t)}));s.reverse===j&&e.reverse(),n((function(t){return Object(r.a)(Object(r.a)({},t),{},{sortField:d,visibleGoods:e})}))},type:"button",className:"button is-info ".concat(s.sortField!==d?"is-light":""),children:"Sort alphabetically"}),Object(a.jsx)("button",{onClick:function(){var e=[].concat(b).sort((function(e,t){return e.length-t.length}));s.reverse===j&&e.reverse(),n((function(t){return Object(r.a)(Object(r.a)({},t),{},{sortField:u,visibleGoods:e})}))},type:"button",className:"button is-success ".concat(s.sortField!==u?"is-light":""),children:"Sort by length"}),Object(a.jsx)("button",{onClick:function(){n((function(e){return Object(r.a)(Object(r.a)({},e),{},{reverse:e.reverse===j?"":j,visibleGoods:Object(c.a)(e.visibleGoods).reverse()})}))},type:"button",className:"button is-warning ".concat(s.reverse!==j?"is-light":""),children:"Reverse"}),""!==s.sortField||""!==s.reverse?Object(a.jsx)("button",{onClick:function(){n({reverse:"",sortField:"",visibleGoods:[].concat(b)})},type:"button",className:"button is-danger is-light",children:"Reset"}):null]}),Object(a.jsx)("ul",{children:s.visibleGoods.map((function(e){return Object(a.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})}o.a.render(Object(a.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b618b661.chunk.js.map