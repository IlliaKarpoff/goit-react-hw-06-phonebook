(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__3udr1",input:"ContactForm_input__9lWuZ",button:"ContactForm_button__1oF5Y"}},15:function(t,e,n){t.exports={container:"App_container__1_Wp7"}},20:function(t,e,n){t.exports={nameText:"ContactList_nameText__31Dq7"}},21:function(t,e,n){t.exports={text:"Filter_text__2fiFR"}},32:function(t,e,n){"use strict";n.r(e);var c,a,r=n(1),o=n(0),i=n.n(o),u=n(6),s=n.n(u),l=n(2),j=n(8),b=n(4),d=n(9),O=n(3),m=[{id:"id-1",name:"Rosie Simpson",phone:"459-12-56"},{id:"id-2",name:"Hermione Kline",phone:"443-89-12"},{id:"id-3",name:"Eden Clements",phone:"645-17-79"},{id:"id-4",name:"Annie Copeland",phone:"227-91-26"}],f=n(34),h=Object(b.b)("contacts/delete"),p=Object(b.b)("contacts/changeFilter"),x=Object(b.b)("contacts/add",(function(t,e){return{payload:{id:Object(f.a)(),name:t,phone:e}}})),v=Object(b.c)(null!==(c=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==c?c:m,(a={},Object(d.a)(a,x,(function(t,e){var n=e.payload;return[].concat(Object(j.a)(t),[n])})),Object(d.a)(a,h,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),g=Object(b.c)("",Object(d.a)({},p,(function(t,e){return e.payload}))),_=Object(O.c)({contacts:v,filter:g}),F=n(19),y=n.n(F),C=[].concat(Object(j.a)(Object(b.d)()),[y.a]),N=Object(b.a)({reducer:_,middleware:C,devTools:!1}),w=n(15),S=n.n(w);function k(t){var e=t.children,n=t.title;return Object(r.jsxs)("section",{children:[n?Object(r.jsx)("h2",{children:n}):null,e]})}var J=n(16),T=n(10),D=n.n(T);function E(){var t=Object(o.useState)(""),e=Object(J.a)(t,2),n=e[0],c=e[1],a=Object(o.useState)(""),i=Object(J.a)(a,2),u=i[0],s=i[1],j=Object(l.d)((function(t){return t})).contacts,b=Object(l.c)(),d=function(t){t.preventDefault();if(function(t){return j.map((function(t){return t.name})).includes(t)}(n))return alert("".concat(n," is already in contacts"));!function(t,e){b(x(t,e))}(n,u),c(""),s("")};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("form",{className:D.a.form,onSubmit:function(t){return d(t)},children:[Object(r.jsx)("label",{id:"name",htmlFor:"name",children:"Name"}),Object(r.jsx)("input",{className:D.a.input,type:"text",name:"name",id:"name",value:n,onChange:function(t){return c(t.target.value)}}),Object(r.jsx)("label",{id:"phone",htmlFor:"phone",children:"Phone"}),Object(r.jsx)("input",{className:D.a.input,type:"tel",name:"phone",id:"phone",value:u,onChange:function(t){return s(t.target.value)}}),Object(r.jsx)("button",{type:"submit",disabled:!(n&&u),children:"add contact"})]})})}var I=n(20),L=n.n(I);function A(){var t=Object(l.d)((function(t){return t})),e=t.contacts,n=t.filter,c=Object(l.c)(),a=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("ul",{children:a.map((function(t){var e=t.id,n=t.name,a=t.phone;return Object(r.jsxs)("li",{children:[Object(r.jsxs)("p",{className:L.a.nameText,children:[n,": ",Object(r.jsx)("span",{children:a})]}),Object(r.jsx)("button",{type:"button",onClick:function(t){return function(t){return c(h(t))}(e)},children:"Delete"})]},e)}))})})}var P=n(21),R=n.n(P);function W(){var t=Object(l.d)((function(t){return t.filter})),e=Object(l.c)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("label",{className:R.a.text,name:"filter",htmlFor:"filter",value:t,children:"Find contacts by name"}),Object(r.jsx)("input",{value:t,type:"text",id:"filter",onChange:function(t){return e(p(t.target.value))}})]})}var q=Object(l.b)((function(t){return{contacts:t.contacts}}))((function(t){var e=t.contacts;return Object(o.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(e))}),[e]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k,{title:"Phonebook",className:S.a.container,children:Object(r.jsx)(E,{})}),e.length?Object(r.jsxs)(k,{title:"Contacts",className:S.a.container,children:[Object(r.jsx)(W,{}),Object(r.jsx)(A,{})]}):null]})}));s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(l.a,{store:N,children:Object(r.jsx)(q,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.0fe51e78.chunk.js.map