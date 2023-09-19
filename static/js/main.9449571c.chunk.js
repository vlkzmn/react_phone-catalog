(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(29).concat([function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(24),a=c.n(s),n=c(5),r=c(3),i=c(4),o=c(1),l=c.n(o),d=c(8),u=c.n(d),j=(c(29),c(30),c(0)),b=function(){return Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)(n.b,{to:"/",className:"logo__link",children:Object(j.jsx)("img",{src:"./img/logo.svg",className:"logo__image",alt:"Logo"})})})},_=c(7);function p(e,t){var c=Object(o.useState)((function(){var c=localStorage.getItem(e);if(null===c)return t;try{return JSON.parse(c)}catch(s){return localStorage.removeItem(e),t}})),s=Object(i.a)(c,2),a=s[0],n=s[1];return[a,function(t){localStorage.setItem(e,JSON.stringify(t)),n(t)}]}var m=l.a.createContext({favourites:[],setFavourites:function(){}}),h=function(e){var t=e.children,c=p("favourites",[]),s=Object(i.a)(c,2),a=s[0],n=s[1];return Object(j.jsx)(m.Provider,{value:{favourites:a,setFavourites:function(e){var t=a.some((function(t){return t.itemId===e.itemId}));n(t?Object(_.a)(a).filter((function(t){return t.itemId!==e.itemId})):[].concat(Object(_.a)(a),[e]))}},children:t})};function O(){return Object(o.useContext)(m)}var x,f=c(18);!function(e){e[e.inc=0]="inc",e[e.desc=1]="desc"}(x||(x={}));var v=l.a.createContext({cart:[],addToCart:function(){},removeFromCart:function(){},changeQuantity:function(){}}),N=function(e){var t=e.children,c=p("cart",[]),s=Object(i.a)(c,2),a=s[0],n=s[1],r=function(e,t){var c=a.map((function(c){if(c.product.itemId===e)switch(t){case x.inc:return Object(f.a)(Object(f.a)({},c),{},{quantity:c.quantity+1});case x.desc:return Object(f.a)(Object(f.a)({},c),{},{quantity:c.quantity-1});default:return c}return c}));n(c)};return Object(j.jsx)(v.Provider,{value:{cart:a,addToCart:function(e){a.some((function(t){return t.product.itemId===e.itemId}))?r(e.itemId,x.inc):n([].concat(Object(_.a)(a),[{id:a.length+1,quantity:1,product:e}]))},removeFromCart:function(e){return n(a.filter((function(t){return t.product.itemId!==e})))},changeQuantity:r},children:t})};function g(){return Object(o.useContext)(v)}var y=["/phones","/tablets","/accessories","/favorites"],k=function(e){var t=e.isActive;return u()("header__link",{"header__link--active":t})},C=function(){var e=O().favourites,t=g().cart,c=Object(o.useState)(""),s=Object(i.a)(c,2),a=s[0],l=s[1],d=Object(r.m)().pathname,_=Object(n.d)(),p=Object(i.a)(_,2),m=p[0],h=p[1];Object(o.useEffect)((function(){var e=m.get("query")||"";l(e)}),[d]);var x=function(){l("");var e=new URLSearchParams(m);e.delete("query"),h(e)};return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("nav",{className:"header__nav",children:[Object(j.jsx)("div",{className:"header__logo",children:Object(j.jsx)(b,{})}),Object(j.jsxs)("ul",{className:"header__nav_menu",children:[Object(j.jsx)("li",{children:Object(j.jsx)(n.c,{to:"/",className:k,children:Object(j.jsx)("span",{className:"header__nav_link",children:"home"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(n.c,{to:"/phones",className:k,end:!0,children:Object(j.jsx)("span",{className:"header__nav_link",children:"phones"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(n.c,{to:"/tablets",className:k,end:!0,children:Object(j.jsx)("span",{className:"header__nav_link",children:"tablets"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(n.c,{to:"/accessories",className:k,end:!0,children:Object(j.jsx)("span",{className:"header__nav_link",children:"accessories"})})})]})]}),Object(j.jsxs)("div",{className:"header__search-icons",children:[y.includes(d)&&Object(j.jsxs)("div",{className:"header__search",children:[Object(j.jsx)("input",{type:"text",placeholder:"Search in ".concat(d.slice(1),"..."),className:"header__search-input",value:a,onChange:function(e){if(e.target.value){l(e.target.value);var t=new URLSearchParams(m);t.set("query",e.target.value),h(t)}else x()}}),Object(j.jsx)("button",{type:"button",className:u()("header__search-button",{"header__search-button--clear":!!a}),"aria-label":"search button","data-cy":"searchDelete",onClick:x})]}),Object(j.jsx)(n.c,{to:"/favorites",className:k,children:Object(j.jsx)("span",{className:u()("header__icons header__icons--favorites",{"header__icons--zero":0!==e.length}),"data-content":e.length})}),Object(j.jsx)(n.c,{to:"/cart",className:k,children:Object(j.jsx)("span",{className:u()("header__icons header__icons--cart",{"header__icons--zero":0!==t.length}),"data-content":t.length})})]})]})},S=(c(33),function(){return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"footer__nav",children:[Object(j.jsx)(n.b,{to:"https://github.com/vlkzmn",className:"footer__link",target:"_blanc",children:"Github"}),Object(j.jsx)(n.b,{to:"contacts",className:"footer__link",children:"Contacts"})]}),Object(j.jsx)("button",{type:"button",className:"footer__up-arrow",onClick:function(){return window.scrollTo(0,0)},children:"Back to top"})]})}),w=(c(34),function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(C,{}),Object(j.jsx)("main",{className:"App__main",children:Object(j.jsx)(r.a,{})}),Object(j.jsx)(S,{})]})});function P(e){return fetch("https://vlkzmn.github.io/react_phone-catalog/_new"+e).then((function(e){if(!e.ok)throw new Error("".concat(e.status," ").concat(e.statusText));return e.json()}))}function I(e){return P("/products.json").then((function(t){return e?Object(_.a)(t).filter((function(t){return t.category===e})):t}))}c(35);var A=function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})},q=(c(36),["./img/banner/banner-phones.png","./img/banner/banner-tablets.png","./img/banner/banner-accessories.png"]),L=function(){var e=Object(o.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],a=function(){s(c<=-2080?0:function(e){return e-1040})};return Object(o.useEffect)((function(){var e=setInterval(a,5e3);return function(){return clearTimeout(e)}}),[c]),Object(j.jsxs)("div",{className:"banner-slider",children:[Object(j.jsx)("button",{type:"button",className:"banner-slider__button banner-slider__button--left","aria-label":"Move left slider",onClick:function(){s(c>=0?-2080:function(e){return e+1040})}}),Object(j.jsx)("div",{className:"banner-slider__body",children:Object(j.jsx)("ul",{className:"banner-slider__list",style:{transform:"translateX(".concat(c,"px)")},children:q.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsx)("img",{src:e,className:"banner-slider__image",alt:"banner ".concat(t)})},e)}))})}),Object(j.jsx)("button",{type:"button",className:"banner-slider__button banner-slider__button--right","aria-label":"Move right slider",onClick:a}),Object(j.jsx)("div",{className:"banner-slider__dots",children:q.map((function(e,t){var a=-1040*t;return Object(j.jsx)("button",{type:"button",className:u()("banner-slider__dot-item",{"banner-slider__dot-item--active":a===c}),"aria-label":"choose banner ".concat(t),onClick:function(){return s(a)}},e)}))})]})},F=(c(37),function(e){var t=e.width,c=e.height,s=e.product,a=g(),n=a.cart,r=a.addToCart,i=a.removeFromCart,o=O(),l=o.favourites,d=o.setFavourites,b=n.some((function(e){return e.product.itemId===(null===s||void 0===s?void 0:s.itemId)})),_=l.some((function(e){return e.itemId===(null===s||void 0===s?void 0:s.itemId)}));return Object(j.jsxs)("div",{className:"add-to-buttons",children:[s?Object(j.jsx)("button",{type:"button",className:u()("add-to-buttons__cart",{"add-to-buttons__cart--added":b}),style:{width:t,height:c},onClick:function(){!b&&s&&r(s),b&&s&&i(s.itemId)},children:b?"Added to cart":"Add to cart"}):Object(j.jsx)("button",{type:"button",className:"add-to-buttons__cart add-to-buttons__cart--disable",style:{width:t,height:c},children:"Not available"}),Object(j.jsx)("button",{type:"button",className:u()("add-to-buttons__favourites",{"add-to-buttons__favourites--selected":_}),style:{width:c,height:c},"aria-label":"add to favourites","data-cy":"addToFavorite",onClick:function(){s&&d(s)}})]})}),E=(c(38),function(e){var t=e.product;return Object(j.jsxs)("div",{className:"product-card",children:[Object(j.jsxs)(n.b,{to:"/".concat(t.category,"/").concat(t.itemId),"data-cy":"cardsContainer",children:[Object(j.jsx)("div",{className:"product-card__image-box",children:Object(j.jsx)("img",{src:"./".concat(t.image),className:"product-card__image",alt:t.name})}),Object(j.jsx)("h3",{className:"product-card__title",children:t.name}),Object(j.jsxs)("div",{className:"product-card__price-box",children:[Object(j.jsx)("div",{className:"product-card__price",children:"$".concat(t.price)}),t.price!==t.fullPrice&&Object(j.jsx)("div",{className:"product-card__full-price",children:"$".concat(t.fullPrice)})]}),Object(j.jsx)("div",{className:"product-card__line"}),Object(j.jsxs)("div",{className:"product-card__features",children:[Object(j.jsxs)("div",{className:"product-card__feature",children:["Screen",Object(j.jsx)("span",{className:"product-card__feature-value",children:t.screen})]}),Object(j.jsxs)("div",{className:"product-card__feature",children:["Capacity",Object(j.jsx)("span",{className:"product-card__feature-value",children:t.capacity})]}),Object(j.jsxs)("div",{className:"product-card__feature",children:["Ram",Object(j.jsx)("span",{className:"product-card__feature-value",children:t.ram})]})]})]}),Object(j.jsx)("div",{className:"product-card__buttons",children:Object(j.jsx)(F,{width:178,height:40,product:t})})]})}),T=(c(39),function(e){var t=e.products,c=e.title,s=Object(o.useState)(0),a=Object(i.a)(s,2),n=a[0],r=a[1],l=-(288*(t.length-4)-16);return Object(j.jsxs)("div",{className:"products-slider",children:[Object(j.jsxs)("div",{className:"products-slider__header",children:[Object(j.jsx)("h2",{className:"products-slider__title",children:c}),Object(j.jsxs)("div",{className:"products-slider__buttons",children:[Object(j.jsx)("button",{type:"button",className:u()("products-slider__button products-slider__button--left",{" products-slider__button--disabled":n>=0}),"aria-label":"move left",onClick:function(){r((function(e){return e+288}))},disabled:n>=0}),Object(j.jsx)("button",{type:"button",className:u()("products-slider__button products-slider__button--right",{" products-slider__button--disabled":n<=l}),"aria-label":"move right",onClick:function(){r((function(e){return e-288}))},disabled:n<=l})]})]}),Object(j.jsx)("div",{className:"products-slider__product-cards",style:{transform:"translateX(".concat(n,"px)")},children:t.map((function(e){return Object(j.jsx)("div",{className:"products-slider__product-card",children:Object(j.jsx)(E,{product:e})},e.id)}))})]})}),M=(c(40),function(e){var t=e.products;function c(e){return t.reduce((function(t,c){return c.category===e?t+1:t}),0)}var s=c("phones"),a=c("tablets"),r=c("accessories");return Object(j.jsxs)("div",{className:"shop-by-category",children:[Object(j.jsx)("h2",{className:"shop-by-category__title",children:"Shop by category"}),Object(j.jsxs)("div",{className:"shop-by-category__content",children:[Object(j.jsxs)(n.b,{to:"/phones",className:"shop-by-category__category","data-cy":"categoryLinksContainer",children:[Object(j.jsx)("div",{className:"shop-by-category__image-box shop-by-category__image-box--phones",children:Object(j.jsx)("img",{className:"shop-by-category__image shop-by-category__image--phones",src:"./img/category/category-phones.png",alt:"Mobile phones"})}),Object(j.jsx)("h3",{className:"shop-by-category__name",children:"Mobile phones"}),Object(j.jsx)("div",{className:"shop-by-category__product-count",children:"".concat(s," models")})]}),Object(j.jsxs)(n.b,{to:"/tablets",className:"shop-by-category__category","data-cy":"categoryLinksContainer",children:[Object(j.jsx)("div",{className:" shop-by-category__image-box shop-by-category__image-box--tablets ",children:Object(j.jsx)("img",{className:"shop-by-category__image shop-by-category__image--tablets",src:"./img/category/category-tablets.png",alt:"Mobile phones"})}),Object(j.jsx)("h3",{className:"shop-by-category__name",children:"Tablets"}),Object(j.jsx)("div",{className:"shop-by-category__product-count",children:"".concat(a," models")})]}),Object(j.jsxs)(n.b,{to:"/accessories",className:"shop-by-category__category","data-cy":"categoryLinksContainer",children:[Object(j.jsx)("div",{className:" shop-by-category__image-box shop-by-category__image-box--accessories ",children:Object(j.jsx)("img",{className:"shop-by-category__image shop-by-category__image--accessories",src:"./img/category/category-accessories.png",alt:"Mobile phones"})}),Object(j.jsx)("h3",{className:"shop-by-category__name",children:"Accessories"}),Object(j.jsx)("div",{className:"shop-by-category__product-count",children:"".concat(r," models")})]})]})]})}),R=(c(41),function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!0),n=Object(i.a)(a,2),r=n[0],l=n[1];Object(o.useEffect)((function(){I().then(s).finally((function(){return l(!1)}))}),[]);var d=Object(_.a)(c).filter((function(e){return e.fullPrice!==e.price})).sort((function(e,t){return t.fullPrice-t.price-(e.fullPrice-e.price)})).splice(0,20),u=Object(_.a)(c).filter((function(e){return e.fullPrice===e.price})).sort((function(e,t){return t.price-e.price}));return Object(j.jsxs)("div",{className:"home-page",children:[Object(j.jsx)("div",{className:"home-page__banner-slider",children:Object(j.jsx)(L,{})}),r?Object(j.jsx)(A,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"home-page__hot-price",children:Object(j.jsx)(T,{products:d,title:"Hot prices"})}),Object(j.jsx)("div",{className:"home-page__shop-by-category",children:Object(j.jsx)(M,{products:c})}),Object(j.jsx)("div",{className:"home-page__brand-new-models",children:Object(j.jsx)(T,{products:u,title:"Brand new models"})})]})]})}),B=(c(42),function(){var e=Object(r.m)().pathname.split("/").filter((function(e){return""!==e}));return Object(j.jsxs)("div",{className:"bread-crumbs",children:[Object(j.jsx)(n.b,{to:"/",className:"bread-crumbs__home"}),e.map((function(t,c){var s=t[0].toUpperCase()+t.slice(1);return e.length!==c+1?Object(j.jsx)(n.b,{to:"/".concat(t),className:"bread-crumbs__item bread-crumbs__item--link",children:s},t):Object(j.jsx)("span",{className:"bread-crumbs__item bread-crumbs__item--text",children:s},t)}))]})}),z=(c(43),function(e){var t=e.title,c=e.values,s=e.sortKey,a=e.onPageChange,r=Object(o.useState)(!1),l=Object(i.a)(r,2),d=l[0],b=l[1],_=Object(n.d)(),p=Object(i.a)(_,1)[0],m=p.get(s),h=p.get("page"),O=Object(o.useState)(m||c[0]),x=Object(i.a)(O,2),f=x[0],v=x[1],N=Object(o.useRef)(null);function g(e){var t=new URLSearchParams(p);return(h&&m!==e||"All"!==e&&"perPage"===s)&&t.set("page","1"),"All"!==e?t.set(s,e):(t.delete(s),t.delete("page")),t.toString()}return Object(o.useEffect)((function(){var e=function(e){N.current&&!N.current.contains(e.target)&&e.clientX<document.documentElement.offsetWidth&&b(!1)};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}),[]),Object(j.jsxs)("div",{className:"drop-down",children:[Object(j.jsx)("span",{className:"drop-down__title",children:t}),Object(j.jsxs)("div",{ref:N,children:[Object(j.jsx)("button",{type:"button",className:u()("drop-down__button",{"drop-down__button--active":d}),onClick:function(){return b((function(e){return!e}))},children:f}),d&&Object(j.jsx)("ul",{className:"drop-down__list",children:c.map((function(e){return Object(j.jsx)("li",{className:"drop-down__item",children:Object(j.jsx)(n.b,{className:"drop-down__item-link",to:{search:g(e)},onClick:function(){return function(e){v(e),b(!1),a&&a(1)}(e)},children:e})},e)}))})]})]})});c(44);var $=function(e){var t=e.totalProducts,c=e.perPage,s=e.currentPage,a=e.onPageChange,r=Object(n.d)(),o=Object(i.a)(r,1)[0],l=function(e,t){for(var c=[],s=e;s<=t;s+=1)c.push(s);return c}(1,Math.ceil(t/c));function d(e){var t=new URLSearchParams(o);return t.set("page",e.toString()),t.toString()}return Object(j.jsxs)("ul",{className:"pagination","data-cy":"pagination",children:[Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{className:u()("pagination__link pagination__link--left",{"pagination__link--disabled":1===s}),to:{search:d(s-1)},onClick:function(){return a(s-1)}})}),l.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{className:u()("pagination__link",{"pagination__link--active":s===e}),to:{search:d(e)},onClick:function(){return a(e)},children:e})},e)})),Object(j.jsx)("li",{children:Object(j.jsx)(n.b,{className:u()("pagination__link pagination__link--right",{"pagination__link--disabled":s===l.length}),to:{search:d(s+1)},onClick:function(){return a(s+1)}})})]})},U=(c(45),"sortBy"),D=["Newest","Alphabetically","Cheapest"],J="perPage",Q=["All","4","8","16"],K=function(e){var t,c=e.title,s=e.products,a=Object(n.d)(),r=Object(i.a)(a,1)[0],l="Favourites"!==c?r.get(U)||"Newest":"default",d=Object(o.useState)([]),u=Object(i.a)(d,2),b=u[0],p=u[1],m=r.get(J)||!1,h=r.get("page")||"1",O=Object(o.useState)(+h),x=Object(i.a)(O,2),f=x[0],v=x[1],N=null===(t=r.get("query"))||void 0===t?void 0:t.toLowerCase().trim(),g=N?Object(_.a)(b).filter((function(e){return e.name.toLowerCase().includes(N)})):Object(_.a)(b),y=g.length,k=1!==f?(f-1)*+m:0,C=f*+m>y||!m?y:f*+m;return Object(o.useEffect)((function(){switch(l){case"Newest":p(Object(_.a)(s).sort((function(e,t){return+t.year-+e.year})));break;case"Cheapest":p(Object(_.a)(s).sort((function(e,t){return+e.price-+t.price})));break;case"Alphabetically":p(Object(_.a)(s).sort((function(e,t){return e.name.localeCompare(t.name)})));break;default:p(s)}}),[l,s]),Object(j.jsxs)("div",{className:"product-list",children:[Object(j.jsx)("div",{className:"product-list__bread-crumbs",children:Object(j.jsx)(B,{})}),Object(j.jsx)("h1",{className:"product-list__title",children:c}),Object(j.jsx)("div",{className:"product-list__product-count",children:"".concat(y," models")}),!b.length&&Object(j.jsx)("div",{className:"product-list__no-search-result",children:"".concat(c," not found")}),!y&&!!N&&!!b.length&&Object(j.jsx)("div",{className:"product-list__search-result",children:'No search results by query - " '.concat(N,' "')}),!!y&&Object(j.jsxs)(j.Fragment,{children:["Favourites"!==c&&Object(j.jsxs)("div",{className:"product-list__sorting",children:[Object(j.jsx)(z,{title:"Sort by",values:D,sortKey:U}),Object(j.jsx)(z,{title:"Items on page",values:Q,sortKey:J,onPageChange:function(e){return v(e)}})]}),!!y&&!!N&&Object(j.jsx)("div",{className:"product-list__search-result",children:'Search results by query - " '.concat(N,' "')}),Object(j.jsx)("div",{className:"product-list__products",children:g.slice(k,C).map((function(e){return Object(j.jsx)("div",{className:"product-list__product-card",children:Object(j.jsx)(E,{product:e})},e.id)}))}),!!m&&Object(j.jsx)("div",{className:"product-list__pagination",children:Object(j.jsx)($,{totalProducts:y,perPage:+m,currentPage:+f,onPageChange:function(e){return v(e)}})})]})]})},X=(c(46),function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!0),n=Object(i.a)(a,2),r=n[0],l=n[1];return Object(o.useEffect)((function(){I("phones").then(s).finally((function(){return l(!1)}))}),[]),Object(j.jsx)("div",{className:"phones-page",children:r?Object(j.jsx)(A,{}):Object(j.jsx)(K,{title:"Mobile phones",products:c,"data-cy":"productList"})})}),H=(c(47),function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!0),n=Object(i.a)(a,2),r=n[0],l=n[1];return Object(o.useEffect)((function(){I("tablets").then(s).finally((function(){return l(!1)}))}),[]),Object(j.jsx)("div",{className:"tablets-page",children:r?Object(j.jsx)(A,{}):Object(j.jsx)(K,{title:"Tablets",products:c,"data-cy":"productList"})})}),W=(c(48),function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!0),n=Object(i.a)(a,2),r=n[0],l=n[1];return Object(o.useEffect)((function(){I("accessories").then(s).finally((function(){return l(!1)}))}),[]),Object(j.jsx)("div",{className:"accessories-page",children:r?Object(j.jsx)(A,{}):Object(j.jsx)(K,{title:"Accessories",products:c,"data-cy":"productList"})})}),Y=(c(49),c(50),function(){return Object(j.jsx)("button",{type:"button",className:"back-button",onClick:function(){return window.history.back()},children:"Back"})}),G=function(){var e=Object(r.q)().itemId,t=Object(o.useState)(!0),c=Object(i.a)(t,2),s=c[0],a=c[1],n=Object(o.useState)(""),l=Object(i.a)(n,2),d=l[0],b=l[1],p=Object(o.useState)(null),m=Object(i.a)(p,2),h=m[0],O=m[1],x=Object(o.useState)(""),f=Object(i.a)(x,2),v=f[0],N=f[1],g=Object(o.useState)([]),y=Object(i.a)(g,2),k=y[0],C=y[1],S=k.find((function(e){return e.itemId===(null===h||void 0===h?void 0:h.id)}));return Object(o.useEffect)((function(){P("/products/".concat(e,".json")).then((function(e){O(e),N(e.images[0])})).catch((function(){return b("Phone was not found")})),I().then(C).finally((function(){return a(!1)}))}),[e]),Object(j.jsxs)("div",{className:"product",children:[s&&Object(j.jsx)(A,{}),null===h||s?Object(j.jsx)("div",{className:"product__not-found",children:d}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"product__bread-crumbs","data-cy":"breadCrumbs",children:Object(j.jsx)(B,{})}),Object(j.jsx)("div",{className:"product__back-link","data-cy":"backButton",children:Object(j.jsx)(Y,{})}),Object(j.jsx)("h1",{className:"product__title",children:h.name}),Object(j.jsxs)("div",{className:"product__main",children:[Object(j.jsxs)("div",{className:"product__images",children:[Object(j.jsx)("div",{className:"product__images-list",children:h.images.map((function(e){return Object(j.jsx)("button",{className:u()("product__image-box",{"product__image-box--active":e===v}),type:"button",onClick:function(){return N(e)},children:Object(j.jsx)("img",{className:"product__image",src:e,alt:h.name})},e)}))}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"product__image-main",src:v,alt:h.name})})]}),Object(j.jsxs)("div",{className:"product__details",children:[Object(j.jsxs)("div",{className:"product__colors",children:[Object(j.jsx)("div",{className:"product__details-title",children:"Available colors"}),Object(j.jsx)("div",{className:"product__details-items",children:h.colorsAvailable.map((function(e){return Object(j.jsx)("button",{type:"button",className:"product__colors-item","aria-label":"color",children:Object(j.jsx)("div",{className:"product__color",style:{backgroundColor:e}})},e)}))})]}),Object(j.jsxs)("div",{className:"product__capacity",children:[Object(j.jsx)("div",{className:"product__details-title",children:"Select capacity"}),Object(j.jsx)("div",{className:"product__details-items",children:h.capacityAvailable.map((function(e){return Object(j.jsx)("button",{type:"button",className:u()("product__capacity-item",{"product__capacity-item--selected":e===h.capacity}),"aria-label":"capacity",children:e},e)}))})]}),Object(j.jsxs)("div",{className:"product__price",children:[Object(j.jsx)("span",{className:"product__price-discount",children:"$".concat(h.priceDiscount)}),Object(j.jsx)("span",{className:"product__price-regular",children:"$".concat(h.priceRegular)})]}),Object(j.jsx)("div",{className:"product__buttons",children:Object(j.jsx)(F,{width:263,height:48,product:S})}),Object(j.jsxs)("div",{className:"product__info-box",children:[Object(j.jsxs)("div",{className:"product__info",children:[Object(j.jsx)("span",{className:"product__details-text",children:"Screen"}),Object(j.jsx)("span",{className:"product__info-value",children:h.screen})]}),Object(j.jsxs)("div",{className:"product__info",children:[Object(j.jsx)("span",{className:"product__details-text",children:"Resolution"}),Object(j.jsx)("span",{className:"product__info-value",children:h.resolution})]}),Object(j.jsxs)("div",{className:"product__info",children:[Object(j.jsx)("span",{className:"product__details-text",children:"Processor"}),Object(j.jsx)("span",{className:"product__info-value",children:h.processor})]}),Object(j.jsxs)("div",{className:"product__info",children:[Object(j.jsx)("span",{className:"product__details-text",children:"RAM"}),Object(j.jsx)("span",{className:"product__info-value",children:h.ram})]})]})]})]}),Object(j.jsxs)("div",{className:"product__description",children:[Object(j.jsxs)("section",{className:"product__about","data-cy":"productDescription",children:[Object(j.jsx)("h2",{className:"product__description-title",children:"About"}),h.description.map((function(e){return Object(j.jsxs)("div",{className:"product__paragraph",children:[Object(j.jsx)("h3",{className:"product__paragraph-title",children:e.title}),e.text.map((function(e){return Object(j.jsx)("p",{className:"product__paragraph-text",children:e},e)}))]},e.title)}))]}),Object(j.jsxs)("section",{className:"product__specification",children:[Object(j.jsx)("h2",{className:"product__description-title",children:"Tech specs"}),Object(j.jsxs)("div",{className:"product__specs-box",children:[Object(j.jsxs)("div",{className:"product__specs",children:[Object(j.jsx)("span",{className:"product__specs-text",children:"Screen"}),Object(j.jsx)("span",{className:"product__specs-value",children:h.screen})]}),Object(j.jsxs)("div",{className:"product__specs",children:[Object(j.jsx)("span",{className:"product__specs-text",children:"Resolution"}),Object(j.jsx)("span",{className:"product__specs-value",children:h.resolution})]}),Object(j.jsxs)("div",{className:"product__specs",children:[Object(j.jsx)("span",{className:"product__specs-text",children:"Processor"}),Object(j.jsx)("span",{className:"product__specs-value",children:h.processor})]}),Object(j.jsxs)("div",{className:"product__specs",children:[Object(j.jsx)("span",{className:"product__specs-text",children:"RAM"}),Object(j.jsx)("span",{className:"product__specs-value",children:h.ram})]}),Object(j.jsxs)("div",{className:"product__specs",children:[Object(j.jsx)("span",{className:"product__specs-text",children:"Built in memory"}),Object(j.jsx)("span",{className:"product__specs-value",children:h.capacity})]}),Object(j.jsxs)("div",{className:"product__specs",children:[Object(j.jsx)("span",{className:"product__specs-text",children:"Camera"}),Object(j.jsx)("span",{className:"product__specs-value",children:h.camera})]}),Object(j.jsxs)("div",{className:"product__specs",children:[Object(j.jsx)("span",{className:"product__specs-text",children:"Zoom"}),Object(j.jsx)("span",{className:"product__specs-value",children:h.zoom})]}),Object(j.jsxs)("div",{className:"product__specs",children:[Object(j.jsx)("span",{className:"product__specs-text",children:"Cell"}),Object(j.jsx)("span",{className:"product__specs-value",children:h.cell.join(", ")})]})]})]})]}),Object(j.jsx)("div",{className:"product__also-like",children:Object(j.jsx)(T,{products:function(){var e=Math.floor(Math.random()*(k.length-10));return Object(_.a)(k).splice(e,10)}(),title:"You may also like"})})]})]})},Z=(c(51),function(e){var t=e.cart,c=t.product,s=t.quantity,a=g(),r=a.removeFromCart,i=a.changeQuantity;return Object(j.jsxs)("div",{className:"product-in-cart",children:[Object(j.jsxs)("div",{className:"product-in-cart__left",children:[Object(j.jsx)("button",{type:"button",className:"product-in-cart__remove","aria-label":"remove button","data-cy":"cartDeleteButton",onClick:function(){return r(c.itemId)}}),Object(j.jsxs)(n.b,{to:c.itemId,className:"product-in-cart__link",children:[Object(j.jsx)("img",{src:c.image,alt:c.name,className:"product-in-cart__img"}),Object(j.jsx)("h2",{className:"product-in-cart__title",children:c.name})]})]}),Object(j.jsxs)("div",{className:"product-in-cart__right",children:[Object(j.jsxs)("div",{className:"product-in-cart__quantity-box",children:[Object(j.jsx)("button",{type:"button",className:u()("product-in-cart__icon product-in-cart__icon--desc",{"product-in-cart__icon--disable":1===s}),"aria-label":"desc button",onClick:function(){return i(c.itemId,x.desc)}}),Object(j.jsx)("div",{className:"product-in-cart__quantity","data-cy":"productQauntity",children:s}),Object(j.jsx)("button",{type:"button",className:u()("product-in-cart__icon product-in-cart__icon--inc",{"product-in-cart__icon--disable":s>=10}),"aria-label":"inc button",onClick:function(){return i(c.itemId,x.inc)}})]}),Object(j.jsx)("div",{className:"product-in-cart__price",children:"$".concat(c.price)})]})]})}),V=(c(52),function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1],a=g().cart,n=a.reduce((function(e,t){return e+t.product.price*t.quantity}),0),r=a.reduce((function(e,t){return e+t.quantity}),0);return Object(j.jsxs)("div",{className:"cart-page",children:[Object(j.jsx)("div",{className:"cart-page__back-link",children:Object(j.jsx)(Y,{})}),Object(j.jsx)("h1",{className:"cart-page__title",children:"Cart"}),Object(j.jsx)("div",{className:"cart-page__content",children:0!==a.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"cart-page__products",children:a.map((function(e){return Object(j.jsx)(Z,{cart:e},e.id)}))}),Object(j.jsxs)("div",{className:"cart-page__checkout",children:[Object(j.jsx)("div",{className:"cart-page__total",children:"$".concat(n)}),Object(j.jsx)("div",{className:"cart-page__total-items",children:"Total for ".concat(r," items")}),Object(j.jsx)("button",{type:"button",className:"cart-page__button",onClick:function(){s(!0);var e=setTimeout((function(){return s(!1)}),5e3);return function(){return clearTimeout(e)}},children:"Checkout"}),c&&Object(j.jsx)("div",{className:"cart-page__message",children:"We are sorry, but this feature is not implemented yet"})]})]}):"Your cart is empty"})]})}),ee=(c(53),function(){var e=O().favourites;return Object(j.jsx)("div",{className:"favorites",children:Object(j.jsx)(K,{title:"Favourites",products:e})})}),te=(c(54),function(){return Object(j.jsxs)("div",{className:"contacts",children:[Object(j.jsx)("div",{className:"contacts__bread-crumbs",children:Object(j.jsx)(B,{})}),Object(j.jsx)("h1",{className:"contacts__title",children:"Contacts"}),Object(j.jsx)("a",{href:"mailto:vlkzmn@gmail.com",className:"contacts__link",children:"vlkzmn@gmail.com"})]})}),ce=(c(55),function(){return Object(j.jsxs)("div",{className:"not-found-page",children:[Object(j.jsx)("h1",{className:"not-found-page__title",children:"Page not found"}),Object(j.jsx)(n.b,{to:"/",className:"not-found-page__link",children:"to Home Page"})]})}),se=function(){return Object(j.jsx)(n.a,{children:Object(j.jsx)(r.d,{children:Object(j.jsxs)(r.b,{path:"/",element:Object(j.jsx)(w,{}),children:[Object(j.jsx)(r.b,{index:!0,element:Object(j.jsx)(R,{})}),Object(j.jsx)(r.b,{path:"phones",element:Object(j.jsx)(X,{})}),Object(j.jsx)(r.b,{path:"tablets",element:Object(j.jsx)(H,{})}),Object(j.jsx)(r.b,{path:"accessories",element:Object(j.jsx)(W,{})}),Object(j.jsx)(r.b,{path:":category/:itemId",element:Object(j.jsx)(G,{})}),Object(j.jsx)(r.b,{path:"cart",element:Object(j.jsx)(V,{})}),Object(j.jsx)(r.b,{path:"favorites",element:Object(j.jsx)(ee,{})}),Object(j.jsx)(r.b,{path:"contacts",element:Object(j.jsx)(te,{})}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)(ce,{})})]})})})};c(56);a.a.render(Object(j.jsx)(N,{children:Object(j.jsx)(h,{children:Object(j.jsx)(se,{})})}),document.getElementById("root"))}]),[[57,1,2]]]);
//# sourceMappingURL=main.9449571c.chunk.js.map