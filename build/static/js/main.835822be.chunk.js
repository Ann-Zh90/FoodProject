(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__82hqD",total:"Cart_total__173Xd",actions:"Cart_actions__XdFPQ","button--alt":"Cart_button--alt__3wvAM",button:"Cart_button__KyXwv"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__T5DwZ",summary:"CartItem_summary__1V3k7",price:"CartItem_price__3JAN6",amount:"CartItem_amount__3ArGu",actions:"CartItem_actions__EYUk6"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3MnZ4",icon:"HeaderCartButton_icon__4DZSK",badge:"HeaderCartButton_badge__4GPwj",bump:"HeaderCartButton_bump__28Ui9"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__2CZU6",modal:"Modal_modal__1hVMF","slide-down":"Modal_slide-down__vs0K8"}},function(e,t,n){e.exports={meal:"MealItem_meal__3UHAF",description:"MealItem_description__30tIO",price:"MealItem_price__LxPZX"}},function(e,t,n){e.exports={header:"Header_header__3i8Ly","main-image":"Header_main-image__FUW4n"}},,,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__3ALbU","meals-appear":"AvailableMeals_meals-appear__8th8l"}},function(e,t,n){e.exports={card:"Card_card__34xLs"}},function(e,t,n){e.exports={form:"MealItemForm_form__1RGHE"}},function(e,t,n){e.exports={input:"Input_input__eY-f-"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1T57Q"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(3)),r=n(1),s=n.n(r),o=n(2),l=n(4),d=n.n(l),u=n(8),m=n.n(u),j=n(10),b=n.n(j),O=n(0),x=function(e){return Object(O.jsx)("div",{className:b.a.backdrop,onClick:e.onClose})},h=function(e){return Object(O.jsx)("div",{className:b.a.modal,children:Object(O.jsx)("div",{className:b.a.content,children:e.children})})},p=document.getElementById("overlays"),_=function(e){return Object(O.jsxs)(s.a.Fragment,{children:[m.a.createPortal(Object(O.jsx)(x,{onClose:e.onClose}),p),m.a.createPortal(Object(O.jsx)(h,{children:e.children}),p)]})},f=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),v=n(5),C=n.n(v),A=function(e){var t="$".concat(e.price.toFixed(2));return Object(O.jsxs)("li",{className:C.a["cart-item"],children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("div",{className:C.a.summary,children:[Object(O.jsx)("span",{className:C.a.price,children:t}),Object(O.jsxs)("span",{className:C.a.amount,children:["x ",e.amount]})]})]}),Object(O.jsxs)("div",{className:C.a.actions,children:[Object(O.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(O.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},g=function(e){var t=Object(r.useContext)(f),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(o.a)(Object(o.a)({},e),{},{amount:1}))},s=Object(O.jsx)("ul",{className:d.a["cart-items"],children:t.items.map((function(e){return Object(O.jsx)(A,{price:e.price,amount:e.amount,name:e.name,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)})}))});return Object(O.jsxs)(_,{onClose:e.onClose,children:[s,Object(O.jsxs)("div",{className:d.a.total,children:[Object(O.jsx)("span",{children:"Total Amout"}),Object(O.jsx)("span",{children:n})]}),Object(O.jsxs)("div",{className:d.a.actions,children:[Object(O.jsx)("button",{className:d.a["button-alt"],onClick:e.onClose,children:"Close"}),a&&Object(O.jsx)("button",{className:d.a.button,children:"Order"})]})]})},N=n.p+"static/media/meals.2971f633.jpg",y=n(12),I=n.n(y),w=function(){return Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(O.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},M=n(7),k=n.n(M),H=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(f).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(k.a.button," ").concat(a?k.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){return c(!1)}),300);return function(){clearInterval(e)}}}),[s]),Object(O.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(O.jsx)("span",{className:k.a.icon,children:Object(O.jsx)(w,{})}),Object(O.jsx)("span",{children:"Your Cart"}),Object(O.jsx)("span",{className:k.a.badge,children:o})]})},F=function(e){return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsxs)("header",{className:I.a.header,children:[Object(O.jsx)("h1",{children:"ReactMeals"}),Object(O.jsx)(H,{onClick:e.onShowCart})]}),Object(O.jsx)("div",{className:I.a["main-image"],children:Object(O.jsx)("img",{src:N,alt:"A table full of delicious food!"})})]})},B=n(16),D=n.n(B),S=n(17),R=n.n(S),E=function(e){return Object(O.jsx)("div",{className:R.a.card,children:e.children})},P=n(11),T=n.n(P),U=n(18),Z=n.n(U),z=n(19),G=n.n(z),L=s.a.forwardRef((function(e,t){return Object(O.jsxs)("div",{className:G.a.input,children:[Object(O.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(O.jsx)("input",Object(o.a)(Object(o.a)({},e.input),{},{ref:t}))]})})),V=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(O.jsxs)("form",{className:Z.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length&&a<1&&a>5?c(!1):e.onAddToCart(a)},children:[Object(O.jsx)(L,{label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"},ref:s}),Object(O.jsx)("button",{children:"+ Add"}),!a&&Object(O.jsx)("p",{children:"Please enter a valid amount(1-5)."})]})},X=function(e){var t=Object(r.useContext)(f),n="$".concat(e.price.toFixed(2));return Object(O.jsxs)("li",{className:T.a.meal,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.name}),Object(O.jsx)("div",{className:T.a.description,children:e.description}),Object(O.jsx)("div",{className:T.a.price,children:n})]}),Object(O.jsx)("div",{children:Object(O.jsx)(V,{id:e.id,onAddToCart:function(n){t.addItem({name:e.name,amount:n,price:e.price,id:e.id})}})})]},e.id)},Y=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],J=function(){var e=Y.map((function(e){return Object(O.jsx)(X,{name:e.name,description:e.description,price:e.price,id:e.id},e.id)}));return Object(O.jsx)("section",{className:D.a.meals,children:Object(O.jsx)(E,{children:Object(O.jsx)("ul",{children:e})})})},K=n(20),$=n.n(K),q=function(){return Object(O.jsxs)("section",{className:$.a.summary,children:[Object(O.jsx)("h2",{children:"Delicious food, Delivered To You"}),Object(O.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(O.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},Q=function(){return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(q,{}),Object(O.jsx)(J,{})]})},W=n(13),ee="REMOVE",te={items:[],totalAmount:0},ne=function(e,t){switch(t.type){case"ADD":var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(o.a)(Object(o.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(W.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a};case ee:var s,l=e.items.findIndex((function(e){return e.id===t.id})),d=e.items[l],u=e.totalAmount-d.price;if(1===d.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(o.a)(Object(o.a)({},d),{},{amount:d.amount-1});(s=Object(W.a)(e.items))[l]=m}return Object(o.a)(Object(o.a)({},e),{},{items:s,totalAmount:u});default:return e}},ae=function(e){var t=Object(r.useReducer)(ne,te),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:ee,id:e})}};return Object(O.jsx)(f.Provider,{value:s,children:e.children})};var ce=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)(ae,{children:[n&&Object(O.jsx)(g,{onClose:function(){a(!1)}}),Object(O.jsx)(F,{onShowCart:function(){a(!0)}}),Object(O.jsx)("main",{children:Object(O.jsx)(Q,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(ce,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.835822be.chunk.js.map