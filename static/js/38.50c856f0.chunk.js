(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[38],{4600:function(n,e,r){"use strict";r.d(e,{g:function(){return d}});var t,i,a=r(168),s=r(2554),c=r(225),o=(0,s.F4)(t||(t=(0,a.Z)(["\n  0%, 100% {\n    opacity: 0\n  }\n  50% {\n    opacity: 1;\n  }\n\n"]))),u=c.Z.div(i||(i=(0,a.Z)(["\n  font-weight: 700;\n  color: ",";\n  text-align: center;\n  opacity: 1;\n  animation: "," 2s infinite;\n"])),(function(n){return n.theme.colors.accent}),o),p=r(184),d=function(){return(0,p.jsx)(u,{children:"Loading..."})}},4139:function(n,e,r){"use strict";r.d(e,{Gf:function(){return f},SH:function(){return h},e2:function(){return v},en:function(){return x},pM:function(){return g},vJ:function(){return l}});var t,i,a,s,c,o,u=r(168),p=r(225),d=r(1087),f=p.Z.section(t||(t=(0,u.Z)(["\n  padding-top: 30px;\n"]))),l=p.Z.div(i||(i=(0,u.Z)(["\n  display: flex;\n  gap: 30px;\n  padding-bottom: 30px;\n"]))),h=p.Z.div(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  & h1 {\n    font-size: 28px;\n    color: ",";\n  }\n  & h2 {\n    font-size: 22px;\n    color: #666;\n  }\n"])),(function(n){return n.theme.colors.accent})),v=p.Z.nav(s||(s=(0,u.Z)(["\n  padding: 20px 0;\n  border-bottom: 1px solid #d2d2d2;\n  border-top: 1px solid #d2d2d2;\n  & > h3 {\n    margin-bottom: 10px;\n  }\n"]))),x=(0,p.Z)(d.rU)(c||(c=(0,u.Z)(["\n  &::before {\n    content: '\u2190';\n    margin-right: 8px;\n  }\n"],["\n  &::before {\n    content: '\\u2190';\n    margin-right: 8px;\n  }\n"]))),g=p.Z.span(o||(o=(0,u.Z)(["\n  font-weight: 700;\n  color: ",";\n"])),(function(n){var e=n.ratingColor;return e<40?"orangered":e>=40&&e<70?"#F6BA6F":e>=70?"green":void 0}))},7739:function(n,e,r){"use strict";r.d(e,{ET:function(){return i},Jh:function(){return t},lK:function(){return a}});var t=Object.freeze({sm:"16px",md:"24px",lg:"32px"}),i=Object.freeze({empty:"This field is required and cannot be empty",msg:"Oops something going wrong! Try again later!"}),a={style:{background:"#FA9884",color:"#fff"}}},2038:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return g}});var t=r(4165),i=r(5861),a=r(9439),s=r(4600),c=r(1087),o=r(2007),u=r.n(o),p=r(4139),d=r(184),f=function(n){var e=n.movie,r=n.isFetch;if(Object.keys(e).length){var t=e.poster_path,i=e.release_date,a=e.original_title,o=e.overview,u=e.genres,f=e.vote_average,l=new Date(i).getFullYear(),h=Math.ceil(10*f),v=t?"https://image.tmdb.org/t/p/w400/".concat(t):"https://via.placeholder.com/400x600.png?text=Poster+Not+Available";return(0,d.jsx)(d.Fragment,{children:r?(0,d.jsx)(s.g,{}):(0,d.jsxs)(p.Gf,{children:[(0,d.jsxs)(p.vJ,{children:[(0,d.jsx)("img",{src:v,alt:a,width:400,height:600}),(0,d.jsxs)(p.SH,{children:[(0,d.jsxs)("div",{children:[(0,d.jsxs)("h1",{children:[a,"(",l,")"]}),(0,d.jsxs)("p",{children:["User score:"," ",(0,d.jsxs)(p.pM,{ratingColor:h,children:[h,"%"]})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:o})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("p",{children:u.map((function(n){return n.name})).join(", ")})]})]})]}),(0,d.jsxs)(p.e2,{children:[(0,d.jsx)("h3",{children:"Additional info"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"cast",children:"Actors"})}),(0,d.jsx)("li",{children:(0,d.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]})]})]})})}};f.propType={movie:u().shape({poster_path:u().string.isRequired,release_date:u().string.isRequired,original_title:u().string.isRequired,overview:u().string.isRequired,genres:u().number.isRequired,vote_average:u().string.isRequired}).isRequired,isFetch:u().bool.isRequired};var l=r(7739),h=r(2791),v=r(7689),x=r(4390),g=function(){var n,e,r=(0,v.UO)().movieId,c=(0,h.useState)({}),o=(0,a.Z)(c,2),u=o[0],g=o[1],m=(0,h.useState)(!1),Z=(0,a.Z)(m,2),j=Z[0],y=Z[1],b=(0,h.useState)(!1),w=(0,a.Z)(b,2),k=w[0],_=w[1],T=(0,v.TH)(),R=(0,h.useRef)(null!==(n=null===(e=T.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/").current;return(0,h.useEffect)((function(){var n=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,_(!0),n.next=4,(0,x.Mc)(e);case 4:r=n.sent,g(r),_(!1),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),y(!0),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();n(r)}),[r]),(0,d.jsx)(d.Fragment,{children:j?(0,d.jsx)("div",{children:l.ET.msg}):k?(0,d.jsx)(s.g,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(p.en,{to:R,children:"Go back"}),(0,d.jsx)(f,{movie:u,isFetch:k}),(0,d.jsx)(h.Suspense,{fallback:(0,d.jsx)(s.g,{}),children:(0,d.jsx)(v.j3,{})})]})})}},4390:function(n,e,r){"use strict";r.d(e,{Mc:function(){return o},Uw:function(){return u},mv:function(){return d},oT:function(){return c},uV:function(){return p}});var t=r(4165),i=r(5861),a=r(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="28027c59bdca8e7ee28a28ecaf4d25ca",c=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i,c;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={params:{api_key:s,page:e}},n.next=3,(0,a.Z)("/trending/movie/day",r);case 3:return i=n.sent,c=i.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i,c;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={params:{api_key:s}},n.next=3,(0,a.Z)("/movie/".concat(e),r);case 3:return i=n.sent,c=i.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i,c;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={params:{api_key:s}},n.next=3,(0,a.Z)("/movie/".concat(e,"/reviews"),r);case 3:return i=n.sent,c=i.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i,c;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={params:{api_key:s}},n.next=3,(0,a.Z)("/movie/".concat(e,"/credits"),r);case 3:return i=n.sent,c=i.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e){var r,i,c;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={params:{api_key:s,query:e}},n.next=3,(0,a.Z)("/search/movie",r);case 3:return i=n.sent,c=i.data,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},888:function(n,e,r){"use strict";var t=r(9047);function i(){}function a(){}a.resetWarningCache=i,n.exports=function(){function n(n,e,r,i,a,s){if(s!==t){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var r={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:i};return r.PropTypes=r,r}},2007:function(n,e,r){n.exports=r(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=38.50c856f0.chunk.js.map