(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(30).concat([function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(24),a=c.n(s),n=c(5),r=c(3),i=c(4),o=c(1),l=c.n(o),d=c(8),u=c.n(d),j=c(7);function b(e,t){var c=Object(o.useState)((function(){var c=localStorage.getItem(e);if(!c)return t;try{return JSON.parse(c)}catch(s){return localStorage.removeItem(e),t}})),s=Object(i.a)(c,2),a=s[0],n=s[1];return[a,function(t){localStorage.setItem(e,JSON.stringify(t)),n(t)}]}var p=c(0),_=l.a.createContext({favourites:[],setFavourites:function(){}}),m=function(e){var t=e.children,c=b("favourites",[]),s=Object(i.a)(c,2),a=s[0],n=s[1];return Object(p.jsx)(_.Provider,{value:{favourites:a,setFavourites:function(e){var t=a.some((function(t){return t.itemId===e.itemId}));n(t?Object(j.a)(a).filter((function(t){return t.itemId!==e.itemId})):[].concat(Object(j.a)(a),[e]))}},children:t})};function h(){return Object(o.useContext)(_)}var O,x=c(18);!function(e){e[e.inc=0]="inc",e[e.desc=1]="desc"}(O||(O={}));var f=l.a.createContext({cart:[],addToCart:function(){},removeFromCart:function(){},changeQuantity:function(){}}),v=function(e){var t=e.children,c=b("cart",[]),s=Object(i.a)(c,2),a=s[0],n=s[1],r=function(e,t){var c=a.map((function(c){if(c.product.itemId===e)switch(t){case O.inc:return Object(x.a)(Object(x.a)({},c),{},{quantity:c.quantity+1});case O.desc:return Object(x.a)(Object(x.a)({},c),{},{quantity:c.quantity-1});default:return c}return c}));n(c)};return Object(p.jsx)(f.Provider,{value:{cart:a,addToCart:function(e){a.some((function(t){return t.product.itemId===e.itemId}))?r(e.itemId,O.inc):n([].concat(Object(j.a)(a),[{id:a.length+1,quantity:1,product:e}]))},removeFromCart:function(e){return n(a.filter((function(t){return t.product.itemId!==e})))},changeQuantity:r},children:t})};function g(){return Object(o.useContext)(f)}c(30);var N,y=function(){return Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)(n.b,{to:"/",className:"logo__link",children:Object(p.jsx)("img",{src:"./img/logo.svg",className:"logo__image",alt:"Logo"})})})};!function(e){e.phones="/phones",e.tablets="/tablets",e.accessories="/accessories",e.favorites="/favorites"}(N||(N={}));c(32);var k=Object.values(N).map((function(e){return e.toString()})),C=function(e){var t=e.isActive;return u()("header__link",{"header__link--active":t})},S=function(){var e=h().favourites,t=g().cart,c=Object(o.useState)(""),s=Object(i.a)(c,2),a=s[0],l=s[1],d=Object(r.m)().pathname,j=Object(n.d)(),b=Object(i.a)(j,2),_=b[0],m=b[1];Object(o.useEffect)((function(){var e=_.get("query")||"";l(e)}),[d]);var O=function(){l("");var e=new URLSearchParams(_);e.delete("query"),m(e)};return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsxs)("nav",{className:"header__nav",children:[Object(p.jsx)("div",{className:"header__logo",children:Object(p.jsx)(y,{})}),"/cart"!==d&&Object(p.jsxs)("ul",{className:"header__nav_menu",children:[Object(p.jsx)("li",{children:Object(p.jsx)(n.c,{to:"/",className:C,children:Object(p.jsx)("span",{className:"header__nav_link",children:"home"})})}),Object(p.jsx)("li",{children:Object(p.jsx)(n.c,{to:"/phones",className:C,end:!0,children:Object(p.jsx)("span",{className:"header__nav_link",children:"phones"})})}),Object(p.jsx)("li",{children:Object(p.jsx)(n.c,{to:"/tablets",className:C,end:!0,children:Object(p.jsx)("span",{className:"header__nav_link",children:"tablets"})})}),Object(p.jsx)("li",{children:Object(p.jsx)(n.c,{to:"/accessories",className:C,end:!0,children:Object(p.jsx)("span",{className:"header__nav_link",children:"accessories"})})})]})]}),Object(p.jsxs)("div",{className:"header__search-icons",children:[k.includes(d)&&Object(p.jsxs)("div",{className:"header__search",children:[Object(p.jsx)("input",{type:"text",placeholder:"Search in ".concat(d.slice(1),"..."),className:"header__search-input",value:a,onChange:function(e){if(e.target.value){l(e.target.value);var t=new URLSearchParams(_);t.set("query",e.target.value),m(t)}else O()}}),Object(p.jsx)("button",{type:"button",className:u()("header__search-button",{"header__search-button--clear":!!a}),"aria-label":"search button","data-cy":"searchDelete",onClick:O})]}),"/cart"!==d&&Object(p.jsx)(n.c,{to:"/favorites",className:C,children:Object(p.jsx)("span",{className:u()("header__icons header__icons--favorites",{"header__icons--zero":0!==e.length}),"data-content":e.length})}),Object(p.jsx)(n.c,{to:"/cart",className:C,children:Object(p.jsx)("span",{className:u()("header__icons header__icons--cart",{"header__icons--zero":0!==t.length}),"data-content":t.length})})]})]})},w=(c(33),function(){return Object(p.jsxs)("footer",{className:"footer",children:[Object(p.jsx)(y,{}),Object(p.jsxs)("div",{className:"footer__nav",children:[Object(p.jsx)(n.b,{to:"https://github.com/vlkzmn",className:"footer__link",target:"_blanc",children:"Github"}),Object(p.jsx)(n.b,{to:"contacts",className:"footer__link",children:"Contacts"})]}),Object(p.jsx)("button",{type:"button",className:"footer__up-arrow",onClick:function(){return window.scrollTo(0,0)},children:"Back to top"})]})}),P=(c(34),function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(S,{}),Object(p.jsx)("main",{className:"App__main",children:Object(p.jsx)(r.a,{})}),Object(p.jsx)(w,{})]})});function I(e){return fetch("https://mate-academy.github.io/react_phone-catalog/_new"+e).then((function(e){if(!e.ok)throw new Error("".concat(e.status," ").concat(e.statusText));return e.json()}))}function q(e){return I("/products.json").then((function(t){return e?Object(j.a)(t).filter((function(t){return t.category===e})):t}))}c(35);var L,A,E=function(){return Object(p.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(p.jsx)("div",{className:"Loader__content"})})},F=(c(36),1040),T=["./img/banner/banner-phones.png","./img/banner/banner-tablets.png","./img/banner/banner-accessories.png"],M=function(){var e=Object(o.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],a=function(){s(c<=-2080?0:function(e){return e-F})};return Object(o.useEffect)((function(){var e=setInterval(a,5e3);return function(){return clearTimeout(e)}}),[c]),Object(p.jsxs)("div",{className:"banner-slider",children:[Object(p.jsx)("button",{type:"button",className:"banner-slider__button banner-slider__button--left","aria-label":"Move left slider",onClick:function(){s(c>=0?-2080:function(e){return e+F})}}),Object(p.jsx)("div",{className:"banner-slider__body",children:Object(p.jsx)("ul",{className:"banner-slider__list",style:{transform:"translateX(".concat(c,"px)")},children:T.map((function(e,t){return Object(p.jsx)("li",{children:Object(p.jsx)("img",{src:e,className:"banner-slider__image",alt:"banner ".concat(t)})},e)}))})}),Object(p.jsx)("button",{type:"button",className:"banner-slider__button banner-slider__button--right","aria-label":"Move right slider",onClick:a}),Object(p.jsx)("div",{className:"banner-slider__dots",children:T.map((function(e,t){var a=-1040*t;return Object(p.jsx)("button",{type:"button",className:u()("banner-slider__dot-item",{"banner-slider__dot-item--active":a===c}),"aria-label":"choose banner ".concat(t),onClick:function(){return s(a)}},e)}))})]})},B=(c(37),function(e){var t=e.width,c=e.height,s=e.product,a=g(),n=a.cart,r=a.addToCart,i=a.removeFromCart,o=h(),l=o.favourites,d=o.setFavourites,j=n.some((function(e){return e.product.itemId===(null===s||void 0===s?void 0:s.itemId)})),b=l.some((function(e){return e.itemId===(null===s||void 0===s?void 0:s.itemId)}));return Object(p.jsxs)("div",{className:"add-to-buttons",children:[s?Object(p.jsx)("button",{type:"button",className:u()("add-to-buttons__cart",{"add-to-buttons__cart--added":j}),style:{width:t,height:c},onClick:function(){!j&&s&&r(s),j&&s&&i(s.itemId)},children:j?"Added to cart":"Add to cart"}):Object(p.jsx)("button",{type:"button",className:"add-to-buttons__cart add-to-buttons__cart--disable",style:{width:t,height:c},children:"Not available"}),Object(p.jsx)("button",{type:"button",className:u()("add-to-buttons__favourites",{"add-to-buttons__favourites--selected":b}),style:{width:c,height:c},"aria-label":"add to favourites","data-cy":"addToFavorite",onClick:function(){s&&d(s)}})]})}),R=(c(38),function(e){var t=e.product;return Object(p.jsxs)("div",{className:"product-card",children:[Object(p.jsxs)(n.b,{to:"/".concat(t.category,"/").concat(t.itemId),"data-cy":"cardsContainer",children:[Object(p.jsx)("div",{className:"product-card__image-box",children:Object(p.jsx)("img",{src:"./".concat(t.image),className:"product-card__image",alt:t.name})}),Object(p.jsx)("h3",{className:"product-card__title",children:t.name}),Object(p.jsxs)("div",{className:"product-card__price-box",children:[Object(p.jsx)("div",{className:"product-card__price",children:"$".concat(t.price)}),t.price!==t.fullPrice&&Object(p.jsx)("div",{className:"product-card__full-price",children:"$".concat(t.fullPrice)})]}),Object(p.jsx)("div",{className:"product-card__line"}),Object(p.jsxs)("div",{className:"product-card__features",children:[Object(p.jsxs)("div",{className:"product-card__feature",children:["Screen",Object(p.jsx)("span",{className:"product-card__feature-value",children:t.screen})]}),Object(p.jsxs)("div",{className:"product-card__feature",children:["Capacity",Object(p.jsx)("span",{className:"product-card__feature-value",children:t.capacity})]}),Object(p.jsxs)("div",{className:"product-card__feature",children:["Ram",Object(p.jsx)("span",{className:"product-card__feature-value",children:t.ram})]})]})]}),Object(p.jsx)("div",{className:"product-card__buttons",children:Object(p.jsx)(B,{width:178,height:40,product:t})})]})}),z=(c(39),function(e){var t=e.products,c=e.title,s=Object(o.useState)(0),a=Object(i.a)(s,2),n=a[0],r=a[1],l=-(288*(t.length-4)-16);return Object(p.jsxs)("div",{className:"products-slider",children:[Object(p.jsxs)("div",{className:"products-slider__header",children:[Object(p.jsx)("h2",{className:"products-slider__title",children:c}),Object(p.jsxs)("div",{className:"products-slider__buttons",children:[Object(p.jsx)("button",{type:"button",className:u()("products-slider__button products-slider__button--left",{" products-slider__button--disabled":n>=0}),"aria-label":"move left",onClick:function(){r((function(e){return e+288}))},disabled:n>=0}),Object(p.jsx)("button",{type:"button",className:u()("products-slider__button products-slider__button--right",{" products-slider__button--disabled":n<=l}),"aria-label":"move right",onClick:function(){r((function(e){return e-288}))},disabled:n<=l})]})]}),Object(p.jsx)("div",{className:"products-slider__product-cards",style:{transform:"translateX(".concat(n,"px)")},children:t.map((function(e){return Object(p.jsx)("div",{className:"products-slider__product-card",children:Object(p.jsx)(R,{product:e})},e.id)}))})]})}),$=(c(40),function(e){var t=e.products;function c(e){return t.reduce((function(t,c){return c.category===e?t+1:t}),0)}var s=c("phones"),a=c("tablets"),r=c("accessories");return Object(p.jsxs)("div",{className:"shop-by-category",children:[Object(p.jsx)("h2",{className:"shop-by-category__title",children:"Shop by category"}),Object(p.jsxs)("div",{className:"shop-by-category__content",children:[Object(p.jsxs)(n.b,{to:"/phones",className:"shop-by-category__category","data-cy":"categoryLinksContainer",children:[Object(p.jsx)("div",{className:"shop-by-category__image-box shop-by-category__image-box--phones",children:Object(p.jsx)("img",{className:"shop-by-category__image shop-by-category__image--phones",src:"./img/category/category-phones.png",alt:"Mobile phones"})}),Object(p.jsx)("h3",{className:"shop-by-category__name",children:"Mobile phones"}),Object(p.jsx)("div",{className:"shop-by-category__product-count",children:"".concat(s," models")})]}),Object(p.jsxs)(n.b,{to:"/tablets",className:"shop-by-category__category","data-cy":"categoryLinksContainer",children:[Object(p.jsx)("div",{className:" shop-by-category__image-box shop-by-category__image-box--tablets ",children:Object(p.jsx)("img",{className:"shop-by-category__image shop-by-category__image--tablets",src:"./img/category/category-tablets.png",alt:"Mobile phones"})}),Object(p.jsx)("h3",{className:"shop-by-category__name",children:"Tablets"}),Object(p.jsx)("div",{className:"shop-by-category__product-count",children:"".concat(a," models")})]}),Object(p.jsxs)(n.b,{to:"/accessories",className:"shop-by-category__category","data-cy":"categoryLinksContainer",children:[Object(p.jsx)("div",{className:" shop-by-category__image-box shop-by-category__image-box--accessories ",children:Object(p.jsx)("img",{className:"shop-by-category__image shop-by-category__image--accessories",src:"./img/category/category-accessories.png",alt:"Mobile phones"})}),Object(p.jsx)("h3",{className:"shop-by-category__name",children:"Accessories"}),Object(p.jsx)("div",{className:"shop-by-category__product-count",children:"".concat(r," models")})]})]})]})}),U=(c(41),function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!0),n=Object(i.a)(a,2),r=n[0],l=n[1];Object(o.useEffect)((function(){q().then(s).finally((function(){return l(!1)}))}),[]);var d=Object(j.a)(c).filter((function(e){return e.fullPrice!==e.price})).sort((function(e,t){return t.fullPrice-t.price-(e.fullPrice-e.price)})).splice(0,20),u=Object(j.a)(c).filter((function(e){return 2019===e.year})).sort((function(e,t){return t.price-e.price}));return Object(p.jsxs)("div",{className:"home-page",children:[Object(p.jsx)("div",{className:"home-page__banner-slider",children:Object(p.jsx)(M,{})}),r?Object(p.jsx)(E,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"home-page__hot-price",children:Object(p.jsx)(z,{products:d,title:"Hot prices"})}),Object(p.jsx)("div",{className:"home-page__shop-by-category",children:Object(p.jsx)($,{products:c})}),Object(p.jsx)("div",{className:"home-page__brand-new-models",children:Object(p.jsx)(z,{products:u,title:"Brand new models"})})]})]})}),D=(c(42),function(){var e=Object(r.m)().pathname.split("/").filter((function(e){return""!==e}));return Object(p.jsxs)("div",{className:"bread-crumbs",children:[Object(p.jsx)(n.b,{to:"/",className:"bread-crumbs__home"}),e.map((function(t,c){var s=t[0].toUpperCase()+t.slice(1);return e.length!==c+1?Object(p.jsx)(n.b,{to:"/".concat(t),className:"bread-crumbs__item bread-crumbs__item--link",children:s},t):Object(p.jsx)("span",{className:"bread-crumbs__item bread-crumbs__item--text",children:s},t)}))]})});c(43);!function(e){e.p4="4",e.p8="8",e.p16="16",e.all="All"}(L||(L={})),function(e){e.page="page",e.perPage="perPage",e.sortBy="sortBy",e.query="query"}(A||(A={}));var J=function(e){var t=e.title,c=e.values,s=e.sortKey,a=e.onPageChange,r=e.startValue,l=Object(o.useState)(!1),d=Object(i.a)(l,2),j=d[0],b=d[1],_=Object(n.d)(),m=Object(i.a)(_,1)[0],h=m.get(s),O=m.get(A.page),x=Object(o.useState)(),f=Object(i.a)(x,2),v=f[0],g=f[1],N=Object(o.useRef)(null);function y(e){var t=new URLSearchParams(m);return(O&&h!==e||e!==L.all&&s===A.perPage)&&t.set(A.page,"1"),e===L.all?(t.set(s,e),t.delete(A.page)):t.set(s,e),t.toString()}return Object(o.useEffect)((function(){g(r?h||r:h||c[0])}),[h]),Object(o.useEffect)((function(){var e=function(e){N.current&&!N.current.contains(e.target)&&e.clientX<document.documentElement.offsetWidth&&b(!1)};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}),[]),Object(p.jsxs)("div",{className:"drop-down",children:[Object(p.jsx)("span",{className:"drop-down__title",children:t}),Object(p.jsxs)("div",{ref:N,children:[Object(p.jsx)("button",{type:"button",className:u()("drop-down__button",{"drop-down__button--active":j}),onClick:function(){return b((function(e){return!e}))},children:v}),j&&Object(p.jsx)("ul",{className:"drop-down__list",children:c.map((function(e){return Object(p.jsx)("li",{className:"drop-down__item",children:Object(p.jsx)(n.b,{className:"drop-down__item-link",to:{search:y(e)},onClick:function(){return function(e){g(e),b(!1),a&&a(1)}(e)},children:e})},e)}))})]})]})};c(44);var Q,K=function(e){var t=e.totalProducts,c=e.perPage,s=e.currentPage,a=e.onPageChange,r=Object(n.d)(),o=Object(i.a)(r,1)[0],l=function(e,t){for(var c=[],s=e;s<=t;s+=1)c.push(s);return c}(1,Math.ceil(t/c));function d(e){var t=new URLSearchParams(o);return t.set("page",e.toString()),t.toString()}return Object(p.jsxs)("ul",{className:"pagination","data-cy":"pagination",children:[Object(p.jsx)("li",{children:Object(p.jsx)(n.b,{className:u()("pagination__link pagination__link--left",{"pagination__link--disabled":1===s}),to:{search:d(s-1)},onClick:function(){return a(s-1)}})}),l.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(n.b,{className:u()("pagination__link",{"pagination__link--active":s===e}),to:{search:d(e)},onClick:function(){return a(e)},children:e})},e)})),Object(p.jsx)("li",{children:Object(p.jsx)(n.b,{className:u()("pagination__link pagination__link--right",{"pagination__link--disabled":s===l.length}),to:{search:d(s+1)},onClick:function(){return a(s+1)}})})]})};!function(e){e.new="Newest",e.az="Alphabetically",e.cost="Cheapest"}(Q||(Q={}));c(45);var X=function(e){var t,c=e.title,s=e.products,a=Object(n.d)(),r=Object(i.a)(a,1)[0],l=c!==N.favorites?r.get(A.sortBy)||Q.new:"default",d=Object(o.useState)([]),u=Object(i.a)(d,2),b=u[0],_=u[1],m=r.get(A.perPage)||L.p8;m!==L.all&&"Favourites"!==c||(m="0");var h=r.get(A.page)||"1",O=Object(o.useState)(+h),x=Object(i.a)(O,2),f=x[0],v=x[1],g=null===(t=r.get(A.query))||void 0===t?void 0:t.toLowerCase().trim(),y=g?Object(j.a)(b).filter((function(e){return e.name.toLowerCase().includes(g)})):Object(j.a)(b),k=y.length,C=1!==f?(f-1)*+m:0,S=f*+m>k||"0"===m?k:f*+m;return Object(o.useEffect)((function(){switch(l){case Q.new:_(Object(j.a)(s).sort((function(e,t){return+t.year-+e.year})));break;case Q.cost:_(Object(j.a)(s).sort((function(e,t){return+e.price-+t.price})));break;case Q.az:_(Object(j.a)(s).sort((function(e,t){return e.name.localeCompare(t.name)})));break;default:_(s)}}),[l,s]),Object(p.jsxs)("div",{className:"product-list",children:[Object(p.jsx)("div",{className:"product-list__bread-crumbs",children:Object(p.jsx)(D,{})}),Object(p.jsx)("h1",{className:"product-list__title",children:c}),Object(p.jsx)("div",{className:"product-list__product-count",children:"".concat(k," models")}),!b.length&&Object(p.jsx)("div",{className:"product-list__no-search-result",children:"".concat(c," not found")}),!k&&!!g&&!!b.length&&Object(p.jsx)("div",{className:"product-list__search-result",children:'No search results by query - " '.concat(g,' "')}),!!k&&Object(p.jsxs)(p.Fragment,{children:["Favourites"!==c&&Object(p.jsxs)("div",{className:"product-list__sorting",children:[Object(p.jsx)(J,{title:"Sort by",values:Object.values(Q),sortKey:A.sortBy}),Object(p.jsx)(J,{title:"Items on page",values:Object.values(L),sortKey:A.perPage,onPageChange:function(e){return v(e)},startValue:L.p8})]}),!!k&&!!g&&Object(p.jsx)("div",{className:"product-list__search-result",children:'Search results by query - " '.concat(g,' "')}),Object(p.jsx)("div",{className:"product-list__products",children:y.slice(C,S).map((function(e){return Object(p.jsx)("div",{className:"product-list__product-card",children:Object(p.jsx)(R,{product:e})},e.id)}))}),"0"!==m&&Object(p.jsx)("div",{className:"product-list__pagination",children:Object(p.jsx)(K,{totalProducts:k,perPage:+m,currentPage:+f,onPageChange:function(e){return v(e)}})})]})]})},H=(c(46),function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!0),n=Object(i.a)(a,2),r=n[0],l=n[1];return Object(o.useEffect)((function(){q("phones").then(s).finally((function(){return l(!1)}))}),[]),Object(p.jsx)("div",{className:"phones-page",children:r?Object(p.jsx)(E,{}):Object(p.jsx)(X,{title:"Mobile phones",products:c,"data-cy":"productList"})})}),V=(c(47),function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!0),n=Object(i.a)(a,2),r=n[0],l=n[1];return Object(o.useEffect)((function(){q("tablets").then(s).finally((function(){return l(!1)}))}),[]),Object(p.jsx)("div",{className:"tablets-page",children:r?Object(p.jsx)(E,{}):Object(p.jsx)(X,{title:"Tablets",products:c,"data-cy":"productList"})})}),W=(c(48),function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(!0),n=Object(i.a)(a,2),r=n[0],l=n[1];return Object(o.useEffect)((function(){q("accessories").then(s).finally((function(){return l(!1)}))}),[]),Object(p.jsx)("div",{className:"accessories-page",children:r?Object(p.jsx)(E,{}):Object(p.jsx)(X,{title:"Accessories",products:c,"data-cy":"productList"})})}),Y=(c(49),function(){return Object(p.jsx)("button",{type:"button",className:"back-button",onClick:function(){return window.history.back()},children:"Back"})}),G=(c(50),function(){var e=Object(r.q)().itemId,t=Object(o.useState)(!0),c=Object(i.a)(t,2),s=c[0],a=c[1],n=Object(o.useState)(""),l=Object(i.a)(n,2),d=l[0],b=l[1],_=Object(o.useState)(null),m=Object(i.a)(_,2),h=m[0],O=m[1],x=Object(o.useState)(""),f=Object(i.a)(x,2),v=f[0],g=f[1],N=Object(o.useState)([]),y=Object(i.a)(N,2),k=y[0],C=y[1],S=k.find((function(e){return e.itemId===(null===h||void 0===h?void 0:h.id)}));return Object(o.useEffect)((function(){window.scrollTo(0,0),q().then(C),I("/products/".concat(e,".json")).then((function(e){O(e),g(e.images[0])})).catch((function(){return b("Phone was not found")})).finally((function(){return a(!1)}))}),[e]),Object(p.jsxs)("div",{className:"product",children:[s&&Object(p.jsx)(E,{}),null===h||s?Object(p.jsx)("div",{className:"product__not-found",children:d}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"product__bread-crumbs","data-cy":"breadCrumbs",children:Object(p.jsx)(D,{})}),Object(p.jsx)("div",{className:"product__back-link","data-cy":"backButton",children:Object(p.jsx)(Y,{})}),Object(p.jsx)("h1",{className:"product__title",children:h.name}),Object(p.jsxs)("div",{className:"product__main",children:[Object(p.jsxs)("div",{className:"product__images",children:[Object(p.jsx)("div",{className:"product__images-list",children:h.images.map((function(e){return Object(p.jsx)("button",{className:u()("product__image-box",{"product__image-box--active":e===v}),type:"button",onClick:function(){return g(e)},children:Object(p.jsx)("img",{className:"product__image",src:e,alt:h.name})},e)}))}),Object(p.jsx)("div",{children:Object(p.jsx)("img",{className:"product__image-main",src:v,alt:h.name})})]}),Object(p.jsxs)("div",{className:"product__details",children:[Object(p.jsxs)("div",{className:"product__colors",children:[Object(p.jsx)("div",{className:"product__details-title",children:"Available colors"}),Object(p.jsx)("div",{className:"product__details-items",children:h.colorsAvailable.map((function(e){return Object(p.jsx)("button",{type:"button",className:"product__colors-item","aria-label":"color",children:Object(p.jsx)("div",{className:"product__color",style:{backgroundColor:e}})},e)}))})]}),Object(p.jsxs)("div",{className:"product__capacity",children:[Object(p.jsx)("div",{className:"product__details-title",children:"Select capacity"}),Object(p.jsx)("div",{className:"product__details-items",children:h.capacityAvailable.map((function(e){return Object(p.jsx)("button",{type:"button",className:u()("product__capacity-item",{"product__capacity-item--selected":e===h.capacity}),"aria-label":"capacity",children:e},e)}))})]}),Object(p.jsxs)("div",{className:"product__price",children:[Object(p.jsx)("span",{className:"product__price-discount",children:"$".concat(h.priceDiscount)}),Object(p.jsx)("span",{className:"product__price-regular",children:"$".concat(h.priceRegular)})]}),Object(p.jsx)("div",{className:"product__buttons",children:Object(p.jsx)(B,{width:263,height:48,product:S})}),Object(p.jsxs)("div",{className:"product__info-box",children:[Object(p.jsxs)("div",{className:"product__info",children:[Object(p.jsx)("span",{className:"product__details-text",children:"Screen"}),Object(p.jsx)("span",{className:"product__info-value",children:h.screen})]}),Object(p.jsxs)("div",{className:"product__info",children:[Object(p.jsx)("span",{className:"product__details-text",children:"Resolution"}),Object(p.jsx)("span",{className:"product__info-value",children:h.resolution})]}),Object(p.jsxs)("div",{className:"product__info",children:[Object(p.jsx)("span",{className:"product__details-text",children:"Processor"}),Object(p.jsx)("span",{className:"product__info-value",children:h.processor})]}),Object(p.jsxs)("div",{className:"product__info",children:[Object(p.jsx)("span",{className:"product__details-text",children:"RAM"}),Object(p.jsx)("span",{className:"product__info-value",children:h.ram})]})]})]})]}),Object(p.jsxs)("div",{className:"product__description",children:[Object(p.jsxs)("section",{className:"product__about","data-cy":"productDescription",children:[Object(p.jsx)("h2",{className:"product__description-title",children:"About"}),h.description.map((function(e){return Object(p.jsxs)("div",{className:"product__paragraph",children:[Object(p.jsx)("h3",{className:"product__paragraph-title",children:e.title}),e.text.map((function(e){return Object(p.jsx)("p",{className:"product__paragraph-text",children:e},e)}))]},e.title)}))]}),Object(p.jsxs)("section",{className:"product__specification",children:[Object(p.jsx)("h2",{className:"product__description-title",children:"Tech specs"}),Object(p.jsxs)("div",{className:"product__specs-box",children:[Object(p.jsxs)("div",{className:"product__specs",children:[Object(p.jsx)("span",{className:"product__specs-text",children:"Screen"}),Object(p.jsx)("span",{className:"product__specs-value",children:h.screen})]}),Object(p.jsxs)("div",{className:"product__specs",children:[Object(p.jsx)("span",{className:"product__specs-text",children:"Resolution"}),Object(p.jsx)("span",{className:"product__specs-value",children:h.resolution})]}),Object(p.jsxs)("div",{className:"product__specs",children:[Object(p.jsx)("span",{className:"product__specs-text",children:"Processor"}),Object(p.jsx)("span",{className:"product__specs-value",children:h.processor})]}),Object(p.jsxs)("div",{className:"product__specs",children:[Object(p.jsx)("span",{className:"product__specs-text",children:"RAM"}),Object(p.jsx)("span",{className:"product__specs-value",children:h.ram})]}),Object(p.jsxs)("div",{className:"product__specs",children:[Object(p.jsx)("span",{className:"product__specs-text",children:"Built in memory"}),Object(p.jsx)("span",{className:"product__specs-value",children:h.capacity})]}),Object(p.jsxs)("div",{className:"product__specs",children:[Object(p.jsx)("span",{className:"product__specs-text",children:"Camera"}),Object(p.jsx)("span",{className:"product__specs-value",children:h.camera})]}),Object(p.jsxs)("div",{className:"product__specs",children:[Object(p.jsx)("span",{className:"product__specs-text",children:"Zoom"}),Object(p.jsx)("span",{className:"product__specs-value",children:h.zoom})]}),Object(p.jsxs)("div",{className:"product__specs",children:[Object(p.jsx)("span",{className:"product__specs-text",children:"Cell"}),Object(p.jsx)("span",{className:"product__specs-value",children:h.cell.join(", ")})]})]})]})]}),Object(p.jsx)("div",{className:"product__also-like",children:Object(p.jsx)(z,{products:function(){var e=Math.floor(Math.random()*(k.length-10));return Object(j.a)(k).splice(e,10)}(),title:"You may also like"})})]})]})}),Z=(c(51),function(e){var t=e.cart,c=t.product,s=t.quantity,a=g(),r=a.removeFromCart,i=a.changeQuantity;return Object(p.jsxs)("div",{className:"product-in-cart",children:[Object(p.jsxs)("div",{className:"product-in-cart__left",children:[Object(p.jsx)("button",{type:"button",className:"product-in-cart__remove","aria-label":"remove button","data-cy":"cartDeleteButton",onClick:function(){return r(c.itemId)}}),Object(p.jsxs)(n.b,{to:c.itemId,className:"product-in-cart__link",children:[Object(p.jsx)("img",{src:c.image,alt:c.name,className:"product-in-cart__img"}),Object(p.jsx)("h2",{className:"product-in-cart__title",children:c.name})]})]}),Object(p.jsxs)("div",{className:"product-in-cart__right",children:[Object(p.jsxs)("div",{className:"product-in-cart__quantity-box",children:[Object(p.jsx)("button",{type:"button",className:u()("product-in-cart__icon product-in-cart__icon--desc",{"product-in-cart__icon--disable":1===s}),"aria-label":"desc button",onClick:function(){return i(c.itemId,O.desc)}}),Object(p.jsx)("div",{className:"product-in-cart__quantity","data-cy":"productQauntity",children:s}),Object(p.jsx)("button",{type:"button",className:u()("product-in-cart__icon product-in-cart__icon--inc",{"product-in-cart__icon--disable":s>=10}),"aria-label":"inc button",onClick:function(){return i(c.itemId,O.inc)}})]}),Object(p.jsx)("div",{className:"product-in-cart__price",children:"$".concat(c.price)})]})]})}),ee=(c(52),function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1],a=g().cart,n=a.reduce((function(e,t){return e+t.product.price*t.quantity}),0),r=a.reduce((function(e,t){return e+t.quantity}),0);return Object(p.jsxs)("div",{className:"cart-page",children:[Object(p.jsx)("div",{className:"cart-page__back-link",children:Object(p.jsx)(Y,{})}),Object(p.jsx)("h1",{className:"cart-page__title",children:"Cart"}),Object(p.jsx)("div",{className:"cart-page__content",children:0!==a.length?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"cart-page__products",children:a.map((function(e){return Object(p.jsx)(Z,{cart:e},e.id)}))}),Object(p.jsxs)("div",{className:"cart-page__checkout",children:[Object(p.jsx)("div",{className:"cart-page__total",children:"$".concat(n)}),Object(p.jsx)("div",{className:"cart-page__total-items",children:"Total for ".concat(r," items")}),Object(p.jsx)("button",{type:"button",className:"cart-page__button",onClick:function(){s(!0);var e=setTimeout((function(){return s(!1)}),5e3);return function(){return clearTimeout(e)}},children:"Checkout"}),c&&Object(p.jsx)("div",{className:"cart-page__message",children:"We are sorry, but this feature is not implemented yet"})]})]}):"Your cart is empty"})]})}),te=(c(53),function(){var e=h().favourites;return Object(p.jsx)("div",{className:"favorites",children:Object(p.jsx)(X,{title:"Favourites",products:e})})}),ce=(c(54),function(){return Object(p.jsxs)("div",{className:"contacts",children:[Object(p.jsx)("div",{className:"contacts__bread-crumbs",children:Object(p.jsx)(D,{})}),Object(p.jsx)("h1",{className:"contacts__title",children:"Contacts"}),Object(p.jsx)("a",{href:"mailto:vlkzmn@gmail.com",className:"contacts__link",children:"vlkzmn@gmail.com"})]})}),se=(c(55),function(){return Object(p.jsxs)("div",{className:"not-found-page",children:[Object(p.jsx)("h1",{className:"not-found-page__title",children:"Page not found"}),Object(p.jsx)(n.b,{to:"/",className:"not-found-page__link",children:"to Home Page"})]})}),ae=function(){return Object(p.jsx)(n.a,{children:Object(p.jsx)(r.d,{children:Object(p.jsxs)(r.b,{path:"/",element:Object(p.jsx)(P,{}),children:[Object(p.jsx)(r.b,{index:!0,element:Object(p.jsx)(U,{})}),Object(p.jsx)(r.b,{path:"phones",element:Object(p.jsx)(H,{})}),Object(p.jsx)(r.b,{path:"tablets",element:Object(p.jsx)(V,{})}),Object(p.jsx)(r.b,{path:"accessories",element:Object(p.jsx)(W,{})}),Object(p.jsx)(r.b,{path:":category/:itemId",element:Object(p.jsx)(G,{})}),Object(p.jsx)(r.b,{path:"cart",element:Object(p.jsx)(ee,{})}),Object(p.jsx)(r.b,{path:"favorites",element:Object(p.jsx)(te,{})}),Object(p.jsx)(r.b,{path:"contacts",element:Object(p.jsx)(ce,{})}),Object(p.jsx)(r.b,{path:"*",element:Object(p.jsx)(se,{})})]})})})};c(56);a.a.render(Object(p.jsx)(v,{children:Object(p.jsx)(m,{children:Object(p.jsx)(ae,{})})}),document.getElementById("root"))}]),[[57,1,2]]]);
//# sourceMappingURL=main.0473b55e.chunk.js.map