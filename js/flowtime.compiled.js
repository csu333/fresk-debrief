/*
 Flowtime.js
 http://marcolago.com/flowtime-js/
 MIT licensed

 Copyright (C) 2012-now Marco Lago, http://marcolago.com
*/
var Flowtime=function(){function ib(a){if(ia){if("A"===a.target.nodeName||"A"===a.target.parentNode.nodeName){var c=a.target.getAttribute("href")||a.target.parentNode.getAttribute("href");if("#"===c){a.preventDefault();return}c&&(a.target.blur(),"#"==c.substr(0,1)&&(a.preventDefault(),c=g.setPage(c),A(c,!0,!0)))}if(v){for(c=a.target;c&&!Brav1Toolbox.hasClass(c,"ft-page");)c=c.parentNode;Brav1Toolbox.hasClass(c,"ft-page")&&(a.preventDefault(),A(c,null,!0))}Brav1Toolbox.hasClass(a.target,"ft-page-thumb")&&
(a.preventDefault(),c=Number(N(a.target.getAttribute("data-section"))),a=Number(N(a.target.getAttribute("data-page"))),H(c,a))}}function Pb(a){ja=!1;a=a.state?a.state.token.replace("#/",""):document.location.hash.replace("#/","");a=g.setPage(a);A(a,!1)}function jb(a,c){if(ja||c)a=document.location.hash.replace("#/",""),a=g.setPage(a),A(a,!1)}function Da(a){P=Q=0;a=Ea(a);kb=a.clientX;lb=a.clientY;a=q.style[R];var c=a.indexOf("translateX(")+11;c=a.substring(c,a.indexOf(")",c));-1!=c.indexOf("%")?(c=
c.replace("%",""),parseInt(c)):-1!=c.indexOf("px")&&parseInt(c.replace("px",""));c=a.indexOf("translateY(")+11;a=a.substring(c,a.indexOf(")",c));-1!=a.indexOf("%")?(a=a.replace("%",""),parseInt(a)):-1!=a.indexOf("px")&&parseInt(a.replace("px",""));mb&&Brav1Toolbox.addListener(q,"mousemove",Fa,!1)}function Fa(a){a.preventDefault();a=Ea(a);Q=a.clientX-kb;P=a.clientY-lb}function Ga(a){if(ka&&(Math.abs(Q)>=la||Math.abs(P)>=la))if(Ea(a),nb=Math.abs(Q)>=Math.abs(P)?"x":"y","x"==nb&&Math.abs(Q)>=la){if(0<
Q){!0===w?K():S(void 0,!1);return}if(0>Q){!0===w?I():T(void 0,!1);return}}else{if(0<P&&Math.abs(P)>=la){!0===w?S(void 0,!1):K();return}if(0>P){!0===w?T(void 0,!1):I();return}}Brav1Toolbox.removeListener(q,"mousemove",Fa)}function Ea(a){a.touches&&(a=a.touches[0]);return a}function Qb(){clearTimeout(ob);Ha=!1}function pb(a){var c=a.getAttribute("data-id");a=a.getAttribute("data-prog");var k="";null!==c?k=c.replace(/__/,""):null!==a&&(k=a.replace(/__/,""));return k}function qb(a){return"__"!=a.substr(0,
2)?"__"+a:a}function N(a){return"__"==a.substr(0,2)?a.replace(/__/,""):a}function A(a,c,k,p){c=!1===c?c:!0;a||(a=null!==g.getCurrentPage()?g.getCurrentPage():document.querySelector(".ft-page"),c=!0);!1===p?rb():!0===ma&&Ia();var x=a,B=g.getPageIndex(x);if(!0===L){p=x.x;var u=x.y}else!0===w?(u=B.section,p=B.page):(p=B.section,u=B.page);if(!0===ba){x=x.parentNode;B=q;var E=x;!0===w&&(B=x,E=q);sb?(B.style[R]=L?"translateX("+-p+"px)":"translateX("+100*-p+"%)",E.style[R]=L?"translateY("+-u+"px)":"translateY("+
100*-u+"%)"):(B.style.left=L?p+"px":100*-p+"%",E.style.top=L?u+"px":100*-u+"%")}else sb?q.style[R]=L?"translateX("+-p+"px) translateY("+-u+"px)":"translateX("+100*-p+"%) translateY("+100*-u+"%)":L?(q.style.top=-u+"px",q.style.left=-p+"px"):(q.style.top=100*-u+"%",q.style.left=100*-p+"%");window.scrollTo(0,0);!0===ma&&Ia(!0);if(tb)for(p=g.getPageIndex(a),u=g.getParallaxElements(),x=0;x<u.length;x++)if(B=u[x],void 0!==B)for(E=0;E<B.length;E++){var U=B[E];if(void 0!==U)for(var V=0;V<U.length;V++){var O=
U[V],W=0,X=0;p.section<x?W=O.pX:p.section>x&&(W=-O.pX);p.page<E?X=O.pY:p.page>E&&(X=-O.pY);var C="%";ub&&(C="px");O.style[R]=!0===w?"translateX("+X+C+") translateY("+W+C+")":"translateX("+W+C+") translateY("+X+C+")"}}v&&na(!1,!1);p=g.getHash(a);!0===k&&g.updateFragments();k=g.getPageIndex(a);if(F.section!=k.section||F.page!=k.page)if(!0===oa&&null!==vb&&!1!==c&&-1===g.getCurrentFragmentIndex()){c={token:p};wb="#/"+p;try{window.history.pushState(c,null,wb)}catch(n){}}else!0===oa&&(document.location.hash=
"/"+p);c=Rb;u=g.getCurrentPage().getAttribute("data-title");if(null===u)for(p=p.split("/"),u=0;u<p.length;u++)c+=" | "+p[u];else null!==g.getCurrentSection().getAttribute("data-title")&&(c+=" | "+g.getCurrentSection().getAttribute("data-title")),c+=" | "+u;document.title=c;ca[k.section]=k.page;F.section===k.section&&F.page!==k.page&&(Ja=k.page);xb();F=k;g.switchActivePage(a,!0);pa&&qa()}function xb(){if(!1!==Ka){var a=g.getPageIndex();a={section:g.getCurrentSection(),page:g.getCurrentPage(),sectionIndex:a.section,
pageIndex:a.page,pastSectionIndex:F.section,pastPageIndex:F.page,prevSection:g.hasPrevSection(),nextSection:g.hasNextSection(),prevPage:g.hasPrevPage(),nextPage:g.hasNextPage(),fragment:g.getCurrentFragment(),fragmentIndex:g.getCurrentFragmentIndex(),isOverview:v,progress:g.getProgress(),total:g.getPagesTotalLength(),isLoopable:J,clickerMode:ra,isAutoplay:sa};Brav1Toolbox.dispatchEvent("flowtimenavigation",a);null!==La&&La(a)}else Ka=!0}function Ma(){y&&y.parentNode.removeChild(y);var a=document.createDocumentFragment();
y=document.createElement("div");y.className="ft-default-progress"+(!0===w?" ft-cross":"");a.appendChild(y);for(a=0;a<g.getSectionsLength();a++){var c=document.createElement("div");c.setAttribute("data-section","__"+a);c.className="ft-section-thumb";Brav1Toolbox.addClass(c,"thumb-section-"+a);for(var k=g.getPages(a),p=0;p<k.length;p++){var x=document.createElement("div");x.className="ft-page-thumb";x.setAttribute("data-section","__"+a);x.setAttribute("data-page","__"+p);Brav1Toolbox.addClass(x,"thumb-page-"+
p);c.appendChild(x)}y.appendChild(c)}ta.appendChild(y);qa()}function qa(){if(null!==y)for(var a=y.querySelectorAll(".ft-page-thumb"),c=0;c<a.length;c++){var k=a[c],p=Number(N(k.getAttribute("data-section")));k=Number(N(k.getAttribute("data-page")));p==g.getPageIndex().section&&k==g.getPageIndex().page?Brav1Toolbox.addClass(a[c],"actual"):Brav1Toolbox.removeClass(a[c],"actual")}}function na(a,c){v?(v=!1,Brav1Toolbox.removeClass(ta,"ft-overview"),g.hideFragments(),!0===(!1===c?!1:!0)&&(!0===a?A(yb):
A())):(yb=g.getCurrentPage(),da())}function da(){v=!0;Brav1Toolbox.addClass(ta,"ft-overview");g.showFragments();if(!1===Z){if(!0===w){var a=100/g.getSectionsLength();var c=100/g.getPagesLength()}else c=100/g.getSectionsLength(),a=100/g.getPagesLength();scale=.9*Math.min(c,a);c=(100-g.getSectionsLength()*scale)/2;a=(100-g.getPagesLength()*scale)/2;q.style[R]="translate("+c+"%, "+a+"%) scale("+scale/100+", "+scale/100+")"}else{scale=22;c=g.getPageIndex();if(!0===w){a=50-scale*c.section-scale/2;var k=
50-scale*c.page-scale/2}else k=50-scale*c.section-scale/2,a=50-scale*c.page-scale/2;q.style[R]="translate("+k+"%, "+a+"%) scale("+scale/100+", "+scale/100+")"}xb()}function Na(){sa=!0;clearTimeout(ua);Oa=Date.now();ua=setTimeout(function(){I(zb);Na()},Pa-va);va=0}function Qa(){pa&&null===y&&Ma();0<document.location.hash.length?(rb(!0),jb(null,!0)):0<Qa.arguments.length?H.apply(this,Qa.arguments):(H(0,0),qa())}function rb(a){ma=!0;q.style[Brav1Toolbox.getPrefixed("transition-duration")]="0ms";!0===
a&&setTimeout(Ia,G)}function Ia(a){ma=!1;!0===a?setTimeout(function(){q.style[Brav1Toolbox.getPrefixed("transition-duration")]=""+G/1E3+"s"},G):q.style[Brav1Toolbox.getPrefixed("transition-duration")]=""+G/1E3+"s"}function T(a,c){!0===Ra&&(a=null!==a?a:ea,!0===c&&(a=!ea),a=g.getNextSection(a,Sa),void 0!==a?A(a):v&&Z&&da())}function S(a,c){!0===Ta&&(a=null!==a?a:ea,!0===c&&(a=!ea),a=g.getPrevSection(a,Sa),void 0!==a?A(a):v&&Z&&da())}function I(a){!0===wa&&(a=g.getNextPage(a),!1!==a&&(void 0!==a?A(a):
v&&Z&&da()))}function K(a){!0===xa&&(a=g.getPrevPage(a),!1!==a&&(void 0!==a?A(a):v&&Z&&da()))}function H(){var a=H.arguments;if(0<a.length){if(1==a.length)if("Object"===Brav1Toolbox.typeOf(a[0])){var c=a[0];var k=c.section;c=c.page;if(null!==k&&void 0!==k&&(k=document.querySelector(".ft-section[data-id="+qb(k)+"]"),null!==c&&void 0!==c&&(k=k.querySelector(".ft-page[data-id="+qb(c)+"]"),null!==k))){A(k);return}}else void 0!==a[0].nodeName&&A(a[0],null,!0);if("Number"===Brav1Toolbox.typeOf(a[0])||0===
a[0])k=g.getPageByIndex(a[1],a[0]),A(k)}}function Ab(){H(0,0)}function Bb(){var a=g.getSectionsLength()-1;H(a,g.getPages(a).length-1)}function Cb(){if(!0===xa){var a=g.getPageIndex();H(a.section,0)}}function Db(){if(!0===wa){var a=g.getPageIndex();H(a.section,g.getPages(a.section).length-1)}}function Eb(a){fa=!0===a?!0:!1}function Fb(a){G=a;q.style[Brav1Toolbox.getPrefixed("transition-duration")]=""+G+"ms"}var Ua=!1;if("ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)Ua=
!0;var vb=window.history.pushState,q=document.querySelector(".flowtime"),Sb=q.parentNode;document.querySelector("html");var ta=document.querySelector("body"),ja=!1,wb="",F={section:0,page:0},Rb=document.title,yb,y=null,Va=0,v=!1,Z=!1,Sa=!1,fa=!0,ya=!1,L=!1,J=!1,pa=!1,ra=!1,ub=!1,Wa=50,Gb=50,tb=null!==document.querySelector(".parallax"),mb=!1,za=!0,Hb=!0,Aa=!0,ka=!0,ia=!0,Ta=!0,Ra=!0,xa=!0,wa=!0,Ha=!1,ob=0,Xa=2E3,Ka=!0,ma=!1,G=500,w=Brav1Toolbox.hasClass(q,"ft-cross"),R=Brav1Toolbox.getPrefixed("transform"),
sb=Brav1Toolbox.testCSS("transform"),Ya=!0,oa=!0,Za=0,$a=0,Ib=0,Jb=0,ea=!1,ab=!1,Kb=!1,bb=!1,cb=!1,ba=Brav1Toolbox.hasClass(q,"ft-scroll-the-section"),ca=[],Ja=0,La=null;(function(){var a=Brav1Toolbox.getCSSValue(q,"transitionDuration"),c=parseFloat(a);a=a.replace(""+c,"");!isNaN(c)&&0<c&&("s"===a?G=1E3*c:"ms"===a&&(G=c));Fb(G);Xa=4*G})();var Ba=!0;try{var db=document.querySelector("html").className.toLowerCase();if(-1!=db.indexOf("ie7")||-1!=db.indexOf("ie8")||-1!=db.indexOf("lt-ie9"))Ba=!1}catch(a){Ba=
!1}Ba&&Brav1Toolbox.addClass(Sb,"ft-absolute-nav");window.onload=function(){g.updateOffsets()};var g=function(){function a(){n=[];Y=[];aa=document.querySelectorAll(".ft-fragment");r=[];C=q.querySelectorAll(".flowtime > .ft-section");Ca=q.querySelectorAll(".flowtime .ft-page");for(var b=0;b<C.length;b++){var h=[];r[b]=[];z[b]=[];Va+=1;var d=C[b];d.getAttribute("data-id")?d.setAttribute("data-id","__"+N(d.getAttribute("data-id"))):d.setAttribute("data-id","__"+Va);d.getAttribute("data-prog")?d.setAttribute("data-prog",
"__"+N(d.getAttribute("data-prog"))):d.setAttribute("data-prog","__"+Va);d.index=b;pages=d.querySelectorAll(".ft-page");Lb+=pages.length;eb=Math.max(eb,pages.length);for(d=0;d<pages.length;d++){var l=pages[d];l.getAttribute("data-id")?l.setAttribute("data-id","__"+N(l.getAttribute("data-id"))):l.setAttribute("data-id","__"+(d+1));l.getAttribute("data-prog")?l.setAttribute("data-prog","__"+N(l.getAttribute("data-prog"))):l.setAttribute("data-prog","__"+(d+1));l.index=d;if(!l.getAttribute("data-title")){var t=
l.querySelector("h1");null!==t&&""!==t.textContent.lenght&&l.setAttribute("data-title",t.textContent)}var M=l;t=b;var D=d;if(tb&&(void 0===Y[t]&&(Y[t]=[]),void 0===Y[t][D]&&(Y[t][D]=[]),M=M.querySelectorAll(".parallax"),0<M.length))for(var fb=0;fb<M.length;fb++){var ha=M[fb],Mb=Wa,gb=Gb;if(null!==ha.getAttribute("data-parallax")){var hb=ha.getAttribute("data-parallax").split(",");Mb=gb=hb[0];1<hb.length&&(gb=hb[1])}ha.pX=Mb;ha.pY=gb;Y[t][D].push(ha)}h.push(l);l=l.querySelectorAll(".ft-fragment");
r[b][d]=l;z[b][d]=-1}n.push(h)}Nb=C.length;window.scrollTo(0,0);c()}function c(){Za=q.offsetLeft;$a=q.offsetTop;for(var b=0;b<Ca.length;b++){var h=Ca[b],d=h.offsetParent;0===b&&(Ib=h.offsetLeft-Za,Jb=h.offsetTop-$a);!0===w?(h.x=h.offsetLeft-(Za+Ib),h.y=d.offsetTop):(h.x=d.offsetLeft,h.y=h.offsetTop-($a+Jb))}}function k(b,h){var d=!0===v?!1:b;if(!0===h&&0<r[e][m].length&&0<=z[e][m]&&!0!==d&&!1===v)!0===r[e][m][z[e][m]].classList.contains("revealed-once")?(z[e][m]=-1,k(b,h)):E(e,m);else{b=0;if(!0===
d&&0<=e-1)b=0;else if(!0!==d||!0===fa||0>e-1)b=m;d=Math.max(e-1,0);e=!0===J&&d===e?n.length-1:d;v||(!0===bb&&0<=ca[e]&&(b=ca[e]),!0===cb&&(b=Ja));return p(n[e],b)}return B(n[e][m])}function p(b,h){var d=b[h];if(void 0===d)if(!0===Kb)d=b[0],h=0;else for(var l=h;0<=l;l--)if(void 0!==b[l]){d=b[l];h=l;break}m=h;v||U();return B(d)}function x(b){if(0<r[e][m].length&&0<=z[e][m]&&!0!==b&&!1===v)!0===r[e][m][z[e][m]].classList.contains("revealed-once")?(z[e][m]=-1,x(b)):E(e,m);else if(0===m){if(!1===Ya)return!1;
void 0!==n[e-1]?(--e,m=!0===ab?0:n[e].length-1):void 0===n[e-1]&&!0===J&&(e=n.length-1,m=!0===ab?0:n[e].length-1)}else m=Math.max(m-1,0);return B(n[e][m])}function B(b){if(!0===v)X(b);else return b}function u(b,h,d){void 0!==d?z[b][h]=d:d=z[b][h]+=1;for(var l=r[b][h][d],t=0;t<=d;t++)Brav1Toolbox.addClass(r[b][h][t],"revealed"),Brav1Toolbox.removeClass(r[b][h][t],"actual"),!0===ya&&Brav1Toolbox.addClass(r[b][h][t],"revealed-once");Brav1Toolbox.addClass(l,"actual")}function E(b,h,d){void 0!==d?z[b][h]=
d:d=z[b][h];for(var l=0;l<r[b][h].length;l++)l>=d&&(Brav1Toolbox.removeClass(r[b][h][l],"revealed"),Brav1Toolbox.removeClass(r[b][h][l],"revealed-temp")),Brav1Toolbox.removeClass(r[b][h][l],"actual");--d;0<=d&&Brav1Toolbox.addClass(r[b][h][d],"actual");z[b][h]=d}function U(){for(var b=0;b<r.length;b++)for(var h=r[b],d=0;d<h.length;d++){var l=h[d];if(0<l.length)if(b>e)for(f=l.length-1;0<=f;f--)E(b,d,f);else if(b<e)for(f=0;f<l.length;f++)u(b,d,f);else if(b==e)if(d>m)for(f=l.length-1;0<=f;f--)E(b,d,
f);else if(d<m)for(f=0;f<l.length;f++)u(b,d,f);else if(d==m){if(!0===fa&&(F.section>g.getPageIndex().section||F.page>g.getPageIndex().page))for(f=0;f<l.length;f++)u(b,d,f);else for(f=l.length-1;0<=f;f--)E(b,d,f);!1===fa?z[b][d]=-1:F.section>g.getPageIndex().section||F.page>g.getPageIndex().page?z[b][d]=l.length-1:z[b][d]=-1}}}function V(b){var h=e,d=m;void 0!==b&&(h=b.parentNode.index,d=b.index);return{section:h,page:d}}function O(){return n[e][m]}function W(){return z[e][m]}function X(b,h){for(var d=
b.parentNode.index,l=0;l<n.length;l++)for(var t=n[l],M=0;M<t.length;M++){var D=t[M];Brav1Toolbox.removeClass(D,"past-section");Brav1Toolbox.removeClass(D,"future-section");Brav1Toolbox.removeClass(D,"past-page");Brav1Toolbox.removeClass(D,"future-page");D!==b&&(Brav1Toolbox.removeClass(D,"hilite"),!1===v&&D!==O()&&Brav1Toolbox.removeClass(D,"actual"),l<d?Brav1Toolbox.addClass(D,"past-section"):l>d&&Brav1Toolbox.addClass(D,"future-section"),D.index<b.index?Brav1Toolbox.addClass(D,"past-page"):D.index>
b.index&&Brav1Toolbox.addClass(D,"future-page"))}Brav1Toolbox.addClass(b,"hilite");h&&Brav1Toolbox.addClass(b,"actual");Ob=b}var C,n,Ca,aa,r,z=[],Y=[],Nb=0,eb=0,Lb=0,e=0,m=0,Ob;a();return{update:a,updateFragments:U,showFragments:function(){for(var b=0;b<aa.length;b++)Brav1Toolbox.addClass(aa[b],"revealed-temp"),aa[b].onceRevealed=!0},hideFragments:function(){for(var b=0;b<aa.length;b++)Brav1Toolbox.removeClass(aa[b],"revealed-temp")},getSection:function(b){return e},getPage:function(b){return m},
getSections:function(){return C},getPages:function(b){return n[b]},getAllPages:function(){return Ca},getNextSection:function(b,h){b=!0===v?!1:b;var d=void 0;h=!0===h&&0<r[e][m].length&&z[e][m]<r[e][m].length-1&&!0!==b&&!1===v;if(!0===ya){for(var l=d=0;l<r[e][m].length;l++)!0===r[e][m][l].classList.contains("revealed-once")&&(d+=1);d>=r[e][m].length&&(h=!1)}if(h)u(e,m,d);else{d=0;if(!0===b&&e+1<=n.length-1)d=0;else if(!0!==b||!0===fa||e+1>n.length-1)d=m;b=Math.min(e+1,n.length-1);e=!0===J&&b===e?0:
b;v||(!0===bb&&void 0!==ca[e]&&(d=ca[e]),!0===cb&&(d=Ja));return p(n[e],d)}return B(n[e][m])},getPrevSection:k,getNextPage:function(b){var h=void 0;b=0<r[e][m].length&&z[e][m]<r[e][m].length-1&&!0!==b&&!1===v;if(!0===ya){for(var d=h=0;d<r[e][m].length;d++)!0===r[e][m][d].classList.contains("revealed-once")&&(h+=1);h>=r[e][m].length&&(b=!1)}if(b)u(e,m,h);else if(void 0===n[e][m+1]){if(!1===Ya)return!1;void 0!==n[e+1]?(e+=1,m=0):void 0===n[e+1]&&!0===J&&(m=e=0)}else m=Math.min(m+1,n[e].length-1);return B(n[e][m])},
getPrevPage:x,getSectionLength:function(b){return n[b].length},getSectionsLength:function(){return Nb},getPagesLength:function(){return eb},getPagesTotalLength:function(){return Lb},getPageIndex:V,getSectionByIndex:function(b){return C[b]},getPageByIndex:function(b,h){return n[h][b]},getCurrentSection:function(){return C[e]},getCurrentPage:O,getPrevSectionObject:function(){var b=e-1;0>b&&(b=!0===J?n.length-1:null);return null===b?null:C[b]},getPrevPageObject:function(){var b=m-1;return 0>b?0===e&&
J?(b=n.length-1,n[b][n[b].length-1]):0<e?n[e-1][n[e-1].length-1]:null:n[e][b]},getNextSectionObject:function(){var b=e+1;b>n.length-1&&(b=!0===J?0:null);return null===b?null:C[b]},getNextPageObject:function(){var b=m+1;return b>n[e].length-1?e===n.length-1&&J?n[0][0]:e<n.length-1?n[e+1][0]:null:n[e][b]},getCurrentFragment:function(){return r[e][m][W()]},getCurrentFragmentIndex:W,getProgress:function(){if(0===e&&0===m)return 0;for(var b=0,h=0;h<e;h++)b+=n[h].length;return b+=n[e][m].index+1},getHash:function(b){b&&
(m=V(b).page,e=V(b).section);b=""+pb(C[e]);0<n[e].length&&(b+="/"+pb(n[e][m]));return b},setPage:function(b){a:{if(0<b.length&&(b=b.replace("#/","").split("/"),0<b.length)){var h=document.querySelectorAll(".ft-section[data-prog=__"+b[0]+"]"),d=document.querySelectorAll(".ft-section[data-id=__"+b[0]+"]");h=0<h.length?h:d;var l=d=null;if(null!==h){for(var t=0;t<h.length&&(l=h[t],1<b.length&&(d=l.querySelector(".ft-page[data-prog=__"+b[1]+"]")||l.querySelector(".ft-page[data-id=__"+b[1]+"]")),null===
d);t++);null===d&&l&&(d=l.querySelector(".ft-page"))}b=d;break a}b=void 0}if(b){h=b.parentNode;for(d=0;d<n.length;d++)if(l=n[d],C[d]===h)for(e=d,t=0;t<l.length;t++)if(l[t]===b){m=t;break}U()}return b},switchActivePage:X,getCurrentHilited:function(){return Ob},hasNextSection:function(){return e<C.length-1},hasPrevSection:function(){return 0<e},hasNextPage:function(){return m<n[e].length-1},hasPrevPage:function(){return 0<m},updateOffsets:c,getParallaxElements:function(){return Y}}}();Ba&&(Ua&&Brav1Toolbox.addListener(document,
"touchend",function(a){ib(a)},!1),Brav1Toolbox.addListener(document,"click",ib,!1));!1===ja&&window.history.pushState?window.onpopstate=Pb:ja=!0;Brav1Toolbox.addListener(window,"hashchange",jb);var kb=0,lb=0,Q=0,P=0,nb="x",la=100;Ua&&(q.addEventListener("touchstart",Da,!1),q.addEventListener("touchmove",Fa,!1),q.addEventListener("touchend",Ga,!1));Brav1Toolbox.addListener(window,"scroll",function(a){a.preventDefault();window.scrollTo(0,0)});addWheelListener(q,function(a){for(var c=!1,k=a.target;k.className&&
0>k.className.indexOf("ft-page");)k.scrollHeight>k.clientHeight-1&&(c=!0),k=k.parentNode;-1!=k.className.indexOf("ft-page")&&k.scrollHeight>k.clientHeight-1&&(c=!0);if(!0===c){if(k.scrollHeight-k.scrollTop===k.clientHeight||0===k.scrollTop&&k.alreadyScrolled&&!0===k.alreadyScrolled)c=!1;k.alreadyScrolled=!0}Hb=c;c=!0===Hb?!1:za;!1===Ha&&!0===c&&(Ha=!0,ob=setTimeout(Qb,Xa),0===a.deltaY?0<a.deltaX?!0===w?I():T(void 0,a.shiftKey):0>a.deltaX&&(!0===w?K():S(void 0,a.shiftKey)):0<a.deltaY?!0===w?T(void 0,
a.shiftKey):I():0>a.deltaY&&(!0===w?S(void 0,a.shiftKey):K()))});(function(){function a(){c();v||(p=setTimeout(k,300))}function c(){clearTimeout(p)}function k(){g.updateOffsets();A()}var p=NaN;Brav1Toolbox.addListener(window,"resize",a);window.addEventListener("orientationchange",a,!1);return{enable:a,disable:c}})();Brav1Toolbox.addListener(window,"keydown",function(a){var c=a.target.tagName;"INPUT"!=c&&"TEXTAREA"!=c&&"SELECT"!=c&&37<=a.keyCode&&40>=a.keyCode&&a.preventDefault()});Brav1Toolbox.addListener(window,
"keyup",function(a){if(Aa){var c=a.target.tagName;if("INPUT"!==c&&"TEXTAREA"!==c&&"SELECT"!==c)switch(a.preventDefault(),a.keyCode){case 27:na(!0);break;case 33:ra?K(a.shiftKey):Cb();break;case 34:ra?I(a.shiftKey):Db();break;case 35:Bb();break;case 36:Ab();break;case 37:!0===w?K(a.shiftKey):S(null,a.shiftKey);break;case 39:!0===w?I(a.shiftKey):T(null,a.shiftKey);break;case 38:!0===w?S(null,a.shiftKey):K(a.shiftKey);break;case 40:!0===w?T(null,a.shiftKey):I(a.shiftKey);break;case 13:v&&H(g.getCurrentHilited())}}});
var sa=!1,ua=0,Pa=1E4,zb=!1,Oa=0,va=0;return{start:Qa,updateNavigation:function(a){Ka=!1===a?!1:!0;a=g.getCurrentPage();g.update();A(a,!1,!1,!1);!0===pa&&Ma()},nextSection:T,prevSection:S,next:I,prev:K,nextFragment:I,prevFragment:K,gotoPage:H,gotoHome:Ab,gotoTop:Cb,gotoBottom:Db,gotoEnd:Bb,toggleOverview:na,showOverview:function(a,c,k){v!==a&&(v=!a,na(c,k))},fragmentsOnSide:function(a){Sa=!0===a?!0:!1;Eb(a)},fragmentsOnBack:Eb,fragmentsAlwaysOnOnceRevealed:function(a){ya=!0===a?!0:!1},useHistory:function(a){vb=
!0===a?!0:!1},slideInPx:function(a){L=!0===a?!0:!1;!0===L&&g.updateOffsets();A()},useOverviewVariant:function(a){Z=!0===a?!0:!1},twoStepsSlide:function(a){},showProgress:function(a){(pa=!0===a?!0:!1)?(null===y&&Ma(),qa()):null!==y&&null!==y&&(ta.removeChild(y),y=null)},defaultParallaxValues:function(a,c){Wa=a;Gb=void 0===c?Wa:c;g.update()},parallaxInPx:function(a){ub=!0===a?!0:!1},updateURL:function(a){oa=!1===a?!1:!0;!1===oa&&(document.location.hash="")},addEventListener:function(a,c,k){Brav1Toolbox.addListener(document,
a,c,k)},getDefaultProgress:function(){return y},getSection:g.getCurrentSection,getPage:g.getCurrentPage,getSectionIndex:function(){return g.getPageIndex().section},getPageIndex:function(){return g.getPageIndex().page},getPrevSection:g.getPrevSectionObject,getNextSection:g.getNextSectionObject,getPrevPage:g.getPrevPageObject,getNextPage:g.getNextPageObject,autoplay:function(a,c,k,p){Pa=isNaN(parseInt(c))?Pa:c;zb=!0===p||!1;!0===a&&!1!==k&&Na()},play:Na,pause:function(){sa=!1;va=Date.now()-Oa;clearTimeout(ua)},
stop:function(){sa=!1;clearTimeout(ua);va=Oa=0},loop:function(a){J=!0===a?!0:!1},clicker:function(a){ra=!0===a?!0:!1},mouseDragEnabled:function(a){(mb=a)?(Brav1Toolbox.addListener(q,"mousedown",Da,!1),Brav1Toolbox.addListener(q,"mouseup",Ga,!1)):(Brav1Toolbox.removeListener(q,"mousedown",Da),Brav1Toolbox.removeListener(q,"mouseup",Ga))},enableNavigation:function(a,c,k,p){ia=!1===a?!1:!0;Aa=!1===c?!1:!0;za=!1===k?!1:!0;ka=!1===p?!1:!0},disableNavigation:function(a,c,k,p){ia=!1===a?!0:!1;Aa=!1===c?
!0:!1;za=!1===k?!0:!1;ka=!1===p?!0:!1},enableSectionNavigation:function(a,c){Ta=!1===a?!1:!0;Ra=!1===c?!1:!0},disableSectionNavigation:function(a,c){Ta=!1===a?!0:!1;Ra=!1===c?!0:!1},enablePageNavigation:function(a,c){xa=!1===a?!1:!0;wa=!1===c?!1:!0},disablePageNavigation:function(a,c){xa=!1===a?!0:!1;wa=!1===c?!0:!1},setLinksNavigation:function(a){ia=!1===a?!1:!0},setKeyboardNavigation:function(a){Aa=!1===a?!1:!0},setScrollNavigation:function(a){za=!1===a?!1:!0},setTouchNavigation:function(a){ka=
!1===a?!1:!0},setCrossDirection:function(a){w!==a&&(w=!0===a?!0:!1,Brav1Toolbox.hasClass(q,"ft-cross")||!0!==w?Brav1Toolbox.hasClass(q,"ft-cross")&&!0!==w&&Brav1Toolbox.removeClass(q,"ft-cross"):Brav1Toolbox.addClass(q,"ft-cross"),y&&(Brav1Toolbox.hasClass(y,"ft-cross")||!0!==w?Brav1Toolbox.hasClass(y,"ft-cross")&&!0!==w&&Brav1Toolbox.removeClass(y,"ft-cross"):Brav1Toolbox.addClass(y,"ft-cross")),g.updateOffsets(),A())},setDebouncingDelay:function(a){},setTransitionTime:Fb,setMomentumScrollDelay:function(a){Xa=
a},getTransitionTime:function(){return G},onNavigation:function(a){La=a},gridNavigation:function(a){ea=!0===a?!1:!0},backFromPageToTop:function(a){ab=!0===a?!0:!1},nearestPageToTop:function(a){Kb=!0===a?!0:!1},rememberSectionsStatus:function(a){bb=!0===a?!0:!1},rememberSectionsLastPage:function(a){cb=!0===a?!0:!1},scrollTheSection:function(a){ba!==a&&(ba=!0===a?!0:!1,Brav1Toolbox.hasClass(q,"ft-scroll-the-section")||!0!==ba?Brav1Toolbox.hasClass(q,"ft-scroll-the-section")&&!0!==ba&&Brav1Toolbox.removeClass(q,
"ft-scroll-the-section"):Brav1Toolbox.addClass(q,"ft-scroll-the-section"),g.updateOffsets(),A())},toSectionsFromPages:function(a){Ya=!1===a?!1:!0}}}();