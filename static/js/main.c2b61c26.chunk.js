(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{36:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(19),s=c.n(a),i=c(5),d=c(0);var l=function(){return Object(d.jsx)("header",{className:"jumbotron bg-dark",children:Object(d.jsxs)("div",{className:"container text-white",children:[Object(d.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(d.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})},b=c(2),o=c.n(b),u=c(4),j=c(6),h=c(3),m=c(21),p=["cards"],O="/thinkful-flashcards",x=new Headers;function f(e){e.cards;return Object(m.a)(e,p)}function v(e,t,c){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(o.a.mark((function e(t,c,r){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((n=e.sent).status<200||n.status>399)){e.next=6;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 6:if(204!==n.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,n.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(r));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function N(e){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(O,"/decks?_embed=cards"),e.next=3,v(c,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(o.a.mark((function e(t,c){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/decks"),n={method:"POST",headers:x,body:JSON.stringify(f(t)),signal:c},e.next=4,v(r,n,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(o.a.mark((function e(t,c){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/decks/").concat(t,"?_embed=cards"),e.next=3,v(r,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(u.a)(o.a.mark((function e(t,c){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/decks/").concat(t.id,"?_embed=cards"),n={method:"PUT",headers:x,body:JSON.stringify(f(t)),signal:c},e.next=4,v(r,n,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(o.a.mark((function e(t,c){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/decks/").concat(t),n={method:"DELETE",signal:c},e.next=4,v(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t,c){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(o.a.mark((function e(t,c,r){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(O,"/cards"),c.deckId=Number(t),a={method:"POST",headers:x,body:JSON.stringify(c),signal:r},e.next=5,v(n,a,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(o.a.mark((function e(t,c){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/cards/").concat(t),e.next=3,v(r,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(o.a.mark((function e(t,c){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/cards/").concat(t.id),n={method:"PUT",headers:x,body:JSON.stringify(t)},e.next=4,v(r,n,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return B.apply(this,arguments)}function B(){return(B=Object(u.a)(o.a.mark((function e(t,c){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/cards/").concat(t),n={method:"DELETE",signal:c},e.next=4,v(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}x.append("Content-Type","application/json");var _=function(e){var t=e.name,c=e.description,r=e.deckId,n=e.onDelete,a=e.deckLength,s=void 0===a?0:a,i="".concat(s," ").concat(1===s?"card":"cards");return Object(d.jsx)("li",{className:"card list-group-item",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(d.jsx)("h4",{className:"card-title",children:t}),Object(d.jsx)("h6",{className:"card-subtitle text-muted",children:i})]}),Object(d.jsx)("p",{className:"card-text",children:c}),Object(d.jsxs)("div",{className:"float-left",children:[Object(d.jsxs)(h.b,{to:"/decks/".concat(r),className:"btn-lg btn-secondary m-1",children:[Object(d.jsx)("i",{className:"bi bi-eye"})," ","View"]}),Object(d.jsxs)(h.b,{to:"/decks/".concat(r,"/study"),className:"btn-lg btn-primary m-1",children:[Object(d.jsx)("i",{className:"bi bi-book-half"})," ","Study"]})]}),Object(d.jsx)("button",{onClick:function(){return n(r)},className:"btn-lg btn-danger float-right",children:Object(d.jsx)("i",{className:"bi bi-trash"})})]})},r)},U=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!0),s=Object(j.a)(a,2),l=s[0],b=s[1],m=Object(i.f)();Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N();case 3:t=e.sent,n(t),b(!1),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),b(!1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var p=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Delete this deck?")){e.next=5;break}return e.next=3,H(t);case 3:n((function(e){return e.filter((function(e){return e.id!==t}))})),m.push("/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsxs)(h.b,{to:"/decks/new",className:"btn btn-secondary",children:[Object(d.jsx)("i",{className:"bi bi-plus-lg"})," "," ","Create Deck"]}),l?Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"Loading...."})}):Object(d.jsx)("ul",{className:"list-group mt-1 p-0",children:c.length>0?c.map((function(e){return Object(d.jsx)(_,{name:e.name,description:e.description,deckId:e.id,onDelete:p,deckLength:e.cards.length},"".concat(e.name).concat(e.id))})).sort((function(e,t){return e.id-t.id})):Object(d.jsx)("li",{className:"card",children:"There are currently no decks available. How about we create one?"})})]})},M=c(12),R=c(8),V=function(e){var t=e.submitHandler,c=e.changeHandler,r=e.deck,n=Object(i.f)(),a=Object(i.g)().deckId;return Object(d.jsxs)("form",{onSubmit:function(e){return t(e,r)},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"deck-form-name",children:"Name"}),Object(d.jsx)("input",{id:"name",type:"text",className:"form-control",placeholder:"Deck Name",value:r.name,onChange:c})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"deck-form-description",children:"Description"}),Object(d.jsx)("textarea",{id:"description",type:"text",className:"form-control",placeholder:"Brief description of the deck",value:r.description,rows:"5",onChange:c})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){a?n.push("/decks/".concat(a)):n.push("/")},className:"btn btn-secondary mr-2",children:"Cancel"}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})]})},Y=function(){var e=Object(i.f)(),t=Object(r.useState)(Object(R.a)({},{name:"",description:""})),c=Object(j.a)(t,2),n=c[0],a=c[1];function s(){return(s=Object(u.a)(o.a.mark((function t(c){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c.preventDefault(),""!==n.name.trim()&&""!==n.description.trim()){t.next=4;break}return alert("Please enter a valid name and description for your deck"),t.abrupt("return",null);case 4:return t.prev=4,t.next=7,y(n);case 7:r=t.sent,e.push("/decks/".concat(r.id)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(4),alert("Sorry, something went wrong when we tried to create a new deck.  Please try again"),e.push("/");case 15:case"end":return t.stop()}}),t,null,[[4,11]])})))).apply(this,arguments)}return Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{className:"breadcrumb",children:[Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsxs)(h.b,{to:"/",children:[Object(d.jsx)("i",{className:"bi bi-house-door-fill"})," ","Home"]})},"home-link"),Object(d.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create Deck"},"create-deck-link")]})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Create Deck"}),Object(d.jsx)(V,{submitHandler:function(e){return s.apply(this,arguments)},changeHandler:function(e){var t=e.target;a(Object(R.a)(Object(R.a)({},n),{},Object(M.a)({},t.id,t.value)))},deck:n})]})]})},q=function(){var e=Object(i.f)(),t=Object(i.g)().deckId,c=Object(r.useState)(Object(R.a)({},{id:"",name:"",description:""})),n=Object(j.a)(c,2),a=n[0],s=n[1];Object(r.useEffect)((function(){function c(){return(c=Object(u.a)(o.a.mark((function c(){var r;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,S(t);case 3:return r=c.sent,c.next=6,s(r);case 6:c.next=12;break;case 8:c.prev=8,c.t0=c.catch(0),alert("Sorry, something went wrong"),e.push("/");case 12:case"end":return c.stop()}}),c,null,[[0,8]])})))).apply(this,arguments)}!function(){c.apply(this,arguments)}()}),[t,e]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{className:"breadcrumb",children:[Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)(h.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)(h.b,{to:"/decks/".concat(t),children:a.name})}),Object(d.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit Deck"})]})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Edit Deck"}),Object(d.jsx)(V,{deck:a,changeHandler:function(e){s(Object(R.a)(Object(R.a)({},a),{},Object(M.a)({},e.target.id,e.target.value)))},submitHandler:function(c,r){if(c.preventDefault(),""===a.name.trim()||""===a.description.trim())return alert("Please enter a valid name and description for your deck"),null;!function(e,t){I.apply(this,arguments)}(r),s(r),e.push("/decks/".concat(t))}})]})]})},z=function(e){var t=e.card,c=e.flipCard,r=e.frontSide,n=e.nextCard,a=e.cardIndex,s=e.deckLength;return Object(d.jsxs)("div",{className:"card p-3",children:[Object(d.jsxs)("h5",{className:"card-title",children:["Card ",a," of ",s]}),Object(d.jsx)("div",{className:"card-text",children:r?t.front:t.back}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"btn btn-secondary m-1",onClick:c,children:"Flip"}),!r&&Object(d.jsx)("button",{className:"btn btn-primary m-1",onClick:n,children:"Next"})]})]})},G=function(){var e=Object(i.g)().deckId,t=Object(i.f)(),c=Object(r.useState)(!0),n=Object(j.a)(c,2),a=n[0],s=n[1],l=Object(r.useState)(Object(R.a)({},{name:"",cards:[]})),b=Object(j.a)(l,2),m=b[0],p=b[1],O=Object(r.useState)(0),x=Object(j.a)(O,2),f=x[0],v=x[1];Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:c=t.sent,p(c);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);return m?Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{className:"breadcrumb",children:[Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsxs)(h.b,{to:"/",children:[Object(d.jsx)("i",{className:"bi bi-house-door-fill"})," ","Home"]})},"home-link"),Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)(h.b,{to:"/decks/".concat(e),children:m.name})},"deck-link"),Object(d.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Study"},"study-link")]})}),Object(d.jsxs)("h1",{children:["Study: ",m.name]}),m.cards.length>2?Object(d.jsx)("div",{children:Object(d.jsx)(z,{card:m.cards[f],cardIndex:f+1,deckLength:m.cards.length,frontSide:a,flipCard:function(){s(!a)},nextCard:function(){var e=m.cards.length;f+2<=e?(v(f+1),s(!0)):window.confirm("Restart Cards? Click 'cancel' to return to the homepage")?(v(0),s(!0)):t.push("/")}})}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Not enough cards."}),Object(d.jsxs)("p",{children:["You need at least 3 cards to study. There"," ",1===m.cards.length?"is":"are"," currently"," ",m.cards.length," card",0===m.cards.length||m.cards.length>1?"s":""," ","in this deck"]}),Object(d.jsxs)(h.b,{to:"/decks/".concat(e,"/cards/new"),className:"btn-lg btn-primary m-1",children:[Object(d.jsx)("i",{className:"bi bi-plus-lg"})," ","Add Card"]})]})]}):Object(d.jsx)("p",{children:"Loading..."})},K=function(e){var t=e.card,c=e.submitHandler,r=e.changeHandler,n=Object(i.f)(),a=Object(i.g)().deckId;return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:c,children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"front",children:"Front"}),Object(d.jsx)("textarea",{type:"text",className:"form-control",id:"front",placeholder:"Add the front of the card",onChange:r,value:t.front})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"back",children:"Back"}),Object(d.jsx)("textarea",{type:"text",className:"form-control",id:"back",placeholder:"Add the back of the card",onChange:r,value:t.back})]}),Object(d.jsx)("button",{onClick:function(){return n.push("/decks/".concat(a))},className:"btn-lg btn-secondary m-1",children:t.id?"Cancel":"Done"}),Object(d.jsx)("button",{type:"submit",className:"btn-lg btn-primary m-1",children:t.id?"Submit":"Save"})]})})},Q=function(){var e=Object(i.f)(),t=Object(i.g)(),c=t.deckId,n=t.cardId,a={id:c,name:"",description:""},s={id:n,deckId:c,front:"",back:""},l=Object(r.useState)(s),b=Object(j.a)(l,2),m=b[0],p=b[1],O=Object(r.useState)(a),x=Object(j.a)(O,2),f=x[0],v=x[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F(n);case 3:return t=e.sent,p(t),e.next=7,S(c);case 7:r=e.sent,v(r),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,c]);var k=function(){var t=Object(u.a)(o.a.mark((function t(r){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),""!==m.front.trim()&&""!==m.back.trim()){t.next=4;break}return alert("Please enter a valid front and back for your card."),t.abrupt("return");case 4:L(m),e.push("/decks/".concat(c));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{className:"breadcrumb",children:[Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)(h.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)(h.b,{to:"/decks/".concat(c),children:f.name})}),Object(d.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit Card"})]})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Edit Card"}),Object(d.jsx)(K,{card:m,submitHandler:k,changeHandler:function(e){var t=e.target;p(Object(R.a)(Object(R.a)({},m),{},Object(M.a)({},t.id,t.value)))}})]})]})},W=function(){var e=Object(i.f)(),t=Object(i.g)().deckId,c={id:null,front:"",back:"",deckId:t},n=Object(r.useState)(Object(R.a)({},c)),a=Object(j.a)(n,2),s=a[0],l=a[1],b=Object(r.useState)(""),m=Object(j.a)(b,2),p=m[0],O=m[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:c=e.sent,O(c.name);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);var x=function(){var c=Object(u.a)(o.a.mark((function c(r){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(r.preventDefault(),""!==s.front.trim()&&""!==s.back.trim()){c.next=4;break}return alert("Please enter a valid front and back for your card."),c.abrupt("return");case 4:return c.next=6,E(t,s);case 6:e.push("/decks/".concat(t));case 7:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{className:"breadcrumb",children:[Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)(h.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsx)(h.b,{to:"/decks/".concat(t),children:p})}),Object(d.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Add Card"})]})}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{children:[p,": Add Card"]}),Object(d.jsx)(K,{card:s,changeHandler:function(e){var t=e.target;l(Object(R.a)(Object(R.a)({},s),{},Object(M.a)({},t.id,t.value)))},submitHandler:x})]})]})},X=function(e){var t=e.card,c=e.deleteHandler,r=t.front,n=t.back,a=t.deckId,s=t.id,i=a&&s?"/decks/".concat(a,"/cards/").concat(s,"/edit"):a?"/decks/".concat(a):"/";return Object(d.jsx)("li",{className:"list-group-item",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"d-flex flex-row p-2 card-body",children:[Object(d.jsxs)("p",{className:"mr-2 card-text col-6",children:[" ",r]}),Object(d.jsxs)("p",{className:"ml-2 col-6 card-text",children:[n," "]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return c(s)},className:"btn btn-danger float-right m-1",children:Object(d.jsx)("i",{className:"bi bi-trash"})}),Object(d.jsxs)(h.b,{to:i,className:"btn btn-secondary float-right m-1",children:[Object(d.jsx)("i",{className:"bi bi-pencil-fill"})," ","Edit"]})]})]})},"".concat(s).concat(a))},Z=function(e){var t,c=e.cards,r=void 0===c?[]:c,n=Object(i.g)().deckId,a=Object(i.f)(),s=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Do you want to delete this card?")){e.next=4;break}return e.next=3,J(t);case 3:a.go("/decks/".concat(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return t=0===r.length?Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:"There are no cards in this deck. Please add some cards"})}):r.map((function(e){return Object(d.jsx)(X,{card:e,deleteHandler:s},"".concat(e.id).concat(e.deckId))})),Object(d.jsx)("ul",{className:"list-group",children:t})},$=function(){var e=Object(i.g)().deckId,t=Object(i.f)(),c=Object(r.useState)({}),n=Object(j.a)(c,2),a=n[0],s=n[1],l=a.name,b=a.description;Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:c=t.sent,s(c);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var m=function(){var e=Object(u.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.confirm("Delete this deck?")&&(H(c),t.push("/"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)("nav",{"aria-label":"breadcrumb",children:Object(d.jsxs)("ol",{className:"breadcrumb",children:[Object(d.jsx)("li",{className:"breadcrumb-item",children:Object(d.jsxs)(h.b,{to:"/",children:[Object(d.jsx)("i",{className:"bi bi-house-door-fill"})," ","Home"]})},"home-link"),Object(d.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:l},"create-deck-link")]})}),Object(d.jsxs)("div",{className:"d-flex flex-column",children:[Object(d.jsx)("h3",{children:l}),Object(d.jsx)("p",{children:b}),Object(d.jsxs)("div",{className:"flex-row button-ctr",children:[Object(d.jsxs)("div",{className:"float-left",children:[Object(d.jsxs)(h.b,{to:"/decks/".concat(e,"/edit"),className:"btn-lg btn-secondary mr-1 mt-1",children:[Object(d.jsx)("i",{className:"bi bi-eye"})," ","Edit"]}),Object(d.jsxs)(h.b,{to:"/decks/".concat(e,"/study"),className:"btn-lg btn-primary m-1",children:[Object(d.jsx)("i",{className:"bi bi-book-half"})," ","Study"]}),Object(d.jsxs)(h.b,{to:"/decks/".concat(e,"/cards/new"),className:"btn-lg btn-primary m-1",children:[Object(d.jsx)("i",{className:"bi bi-plus-lg"})," ","Add Card"]})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"btn-lg btn-danger float-right",onClick:function(){return m(e)},children:Object(d.jsx)("i",{className:"bi bi-trash"})})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Cards"}),Object(d.jsx)(Z,{cards:a.cards})]})]})]})};var ee=function(){return Object(d.jsx)("div",{className:"NotFound",children:Object(d.jsx)("h1",{children:"Not Found"})})},te=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",children:Object(d.jsx)(U,{})}),Object(d.jsx)(i.a,{path:"/decks/:deckId/cards/:cardId/edit",children:Object(d.jsx)(Q,{})}),Object(d.jsx)(i.a,{path:"/decks/:deckId/cards/new",children:Object(d.jsx)(W,{})}),Object(d.jsx)(i.a,{path:"/decks/:deckId/study",children:Object(d.jsx)(G,{})}),Object(d.jsx)(i.a,{path:"/decks/new",children:Object(d.jsx)(Y,{})}),Object(d.jsx)(i.a,{path:"/decks/:deckId/edit",children:Object(d.jsx)(q,{})}),Object(d.jsx)(i.a,{path:"/decks/:deckId",children:Object(d.jsx)($,{})}),Object(d.jsx)(i.a,{children:Object(d.jsx)(ee,{})})]})})};var ce=function(){return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(l,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",children:Object(d.jsx)(te,{})}),Object(d.jsx)(i.a,{children:Object(d.jsx)(ee,{})})]})})]})};var re=function(){return Object(d.jsx)("div",{className:"app-routes",children:Object(d.jsx)(i.c,{children:Object(d.jsx)(i.a,{path:"/",children:Object(d.jsx)(ce,{})})})})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(h.a,{basename:"/thinkful-flashcards",children:Object(d.jsx)(re,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.c2b61c26.chunk.js.map