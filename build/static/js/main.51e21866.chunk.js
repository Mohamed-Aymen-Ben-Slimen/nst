(this.webpackJsonpnst=this.webpackJsonpnst||[]).push([[0],{102:function(e,t,a){e.exports={mainContainer:"MainComponentStyles_mainContainer__StSsc"}},110:function(e,t,a){e.exports={waitingContainer:"WaitingComponentStyles_waitingContainer__2sinR"}},115:function(e,t,a){e.exports=a(188)},120:function(e,t,a){},121:function(e,t,a){},188:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),o=a.n(r),c=(a(120),a(121),a(5)),i=a.n(c),s=a(27),m=a(7),u=a(37),d=a.n(u),p=function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:d.a.navContainer},l.a.createElement("div",null,l.a.createElement(s.b,{to:"/",exact:!0,className:d.a.logo},l.a.createElement("h2",null,"Art Style Transfer"))),l.a.createElement("div",{className:d.a.routes},l.a.createElement(s.b,{to:"/",exact:!0,className:d.a.routeItem},l.a.createElement("div",null,"Home")),l.a.createElement(s.b,{to:"/neural_style_transfer",exact:!0,className:d.a.routeItem},l.a.createElement("div",null,"Art style transfer")),l.a.createElement(s.b,{to:"#",exact:!0,className:d.a.routeItem,onClick:function(){var e=document.getElementById("footer").offsetTop;console.log(e),window.scrollTo(0,e)}},l.a.createElement("div",null,"Contact")))))},_=a(14),y=a(102),g=a.n(y),f=function(e){return{type:"ADD_STYLE",payload:e}},h=function(e){return{type:"ADD_CONTENT",payload:e}},E=a(55),v=a.n(E),b=a(202),C=a(24),w=function(e){var t=e.label,a=e.action,r=Object(n.useRef)(),o=Object(n.useRef)(),c=Object(C.b)(),i=Object(C.c)((function(e){return e.images[t]}));return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{accept:"image/*",style:{display:"none"},id:t,type:"file",onChange:function(e){c(a(e.target)),o.current.setAttribute("src",URL.createObjectURL(r.current.files[0]))},ref:r}),l.a.createElement("label",{htmlFor:t},null===i?l.a.createElement("span",{className:v.a.uploadButton},"Upload ",t," image"):l.a.createElement(b.a,{variant:"contained",color:"primary",component:"span"},"Upload another image"))),l.a.createElement("img",{src:"",alt:"",ref:o,className:"".concat(v.a.displayedImage)}))},S=a(74),x=a.n(S),j=a(108),N=a.n(j),O=a(109),I=a.n(O),k=a(59),D=a.n(k),T=[{path:"popular_styles_images/1.jpg",name:"The starry night",artist:"Van Gogh",url:"https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/1/van-gogh-starry-night-vincent-van-gogh.jpg?&targetx=0&targety=-29&imagewidth=700&imageheight=558&modelwidth=700&modelheight=500&backgroundcolor=4E91E1&orientation=0"},{path:"popular_styles_images/2.jpg",name:"Red Balloon",artist:"Paul Klee",url:"https://render.fineartamerica.com/images/rendered/default/poster/8/8/break/images/artworkimages/medium/1/red-balloon-paul-klee.jpg"},{path:"popular_styles_images/3.jpg",name:"Sunday Afternoon On The Island Of La Grande Jatte",artist:"Georges Seurat",url:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/a-sunday-afternoon-on-the-island-of-la-grande-jatte-james-carroll.jpg"},{path:"popular_styles_images/4.jpg",name:"The Great Wave Off Kanagawa",artist:"Katsushika Hokusai",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQfYZUCxUGqa5w7P3fCpssSKlQPNArEwf_ean-CBlRvSGIwH_V&usqp=CAU"},{path:"popular_styles_images/5.jpg",name:"Impression, Sunrise",artist:"Claude Monet",url:"https://www.artsheaven.com/wp-content/uploads/2019/04/claude-monet-impression-sunrise-1.jpg"},{path:"popular_styles_images/6.jpg",name:"Guernica",artist:"Pablo Picasso",url:"https://images.saatchiart.com/saatchi/420765/art/4145234/3215085-OGYAEOFN-7.jpg"}],R=a(29),A=a.n(R),G=a(107),B=a.n(G),L=function(){var e=Object(n.useState)(null),t=Object(_.a)(e,2),a=t[0],r=t[1],o=Object(C.b)(),c=T.map((function(e,t){return l.a.createElement("div",{className:A.a.styleImage,key:t,style:{backgroundImage:"url('".concat(e.path,"')")},onClick:function(t){!function(e,t){var n=e.target;n.classList.add(A.a.active),null!==a&&a.classList.remove(A.a.active),r(n),o(f(t.url))}(t,e)}},l.a.createElement("div",{className:A.a.innerDiv},l.a.createElement("div",{className:A.a.styleInfo},l.a.createElement("h4",null,e.name),l.a.createElement("h4",null,"(",e.artist,")")),l.a.createElement(B.a,{fontSize:"large",className:A.a.checkIcon})))}));return l.a.createElement("div",{className:"".concat(i.a.height100," ").concat(i.a.width100," ").concat(A.a.scrollOverflow)},l.a.createElement("div",{className:A.a.styleImagesGallery},c))},P=function(){var e=l.a.useState(0),t=Object(_.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{className:" ".concat(i.a.width45," ").concat(i.a.height100)},l.a.createElement("h1",{className:i.a.titles},"Content image"),l.a.createElement(x.a,null,l.a.createElement(N.a,{value:a,onChange:function(e,t){n(t)},indicatorColor:"primary",textColor:"primary"},l.a.createElement(I.a,{label:"Upload image"}))),l.a.createElement(x.a,{variant:"outlined",className:"".concat(D.a.tabsContent," ").concat(i.a.flexColumnCenter)},0===a&&l.a.createElement(w,{label:"content",action:h})))},U=a(204),H=a(206),F=a(205);function J(){var e=l.a.useState(0),t=Object(_.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{className:"".concat(i.a.width45," ").concat(i.a.height100)},l.a.createElement("h1",{className:i.a.titles},"Style image"),l.a.createElement(U.a,null,l.a.createElement(H.a,{value:a,onChange:function(e,t){n(t)},indicatorColor:"primary",textColor:"primary"},l.a.createElement(F.a,{label:"Popular styles"}),l.a.createElement(F.a,{label:"Upload style"}))),l.a.createElement(U.a,{variant:"outlined",className:"".concat(D.a.tabsContent," ").concat(i.a.flexColumnCenter)},0===a?l.a.createElement(L,null):l.a.createElement("div",null,l.a.createElement(w,{label:"style",action:f}))))}var K=a(28),W=a.n(K),Y=a(62),M=a(75),Q=a.n(M);Q.a.setApiKey("c5a7e157-834d-4ca9-8369-8d68845d077e");var V=function(e,t){return Q.a.callStandardApi("fast-style-transfer",{content:e,style:t})},Z=a(46),q=a.n(Z),X=a(111),z=a.n(X),$=a(110),ee=a.n($),te=function(){return l.a.createElement("div",{className:ee.a.waitingContainer},l.a.createElement(z.a,null),l.a.createElement("div",null,l.a.createElement("h5",null,"Please wait"),l.a.createElement("h5",null,"It will take few seconds")))},ae=function(){var e=Object(n.useState)(!1),t=Object(_.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(_.a)(o,2),s=c[0],m=c[1],u=Object(n.useState)(!0),d=Object(_.a)(u,2),p=d[0],y=d[1],g=Object(n.useRef)(),f=Object(C.c)((function(e){return e.images.content})),h=Object(C.c)((function(e){return e.images.style})),E=function(){var e=Object(Y.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.current.setAttribute("src",""),t=V(f,h),r(!0),t.then(function(){var e=Object(Y.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,v(t.output_url);case 3:g.current.setAttribute("src",t.output_url),y(!1),r(!1),console.log(g),window.scrollTo(0,g.current.y);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(Y.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.blob()}));case 2:return a=e.sent,e.next=5,new Promise((function(e){var t=new FileReader;t.onload=function(){return e(t.result)},t.readAsDataURL(a)}));case 5:n=e.sent,m(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"".concat(q.a.resultContainer," ").concat(i.a.flexColumnCenter)},(null===f||null===h)&&l.a.createElement("p",{style:{color:"#2058f6"}},"Upload a content image and a style image to enable this button"),l.a.createElement(b.a,{variant:"contained",color:"primary",onClick:E,disabled:null===f||null===h,className:q.a.submitButton},"Submit"),!1===a&&!1===p&&l.a.createElement("h3",{className:i.a.titles},"Your styled image is ready"),!0===a&&l.a.createElement(te,null),l.a.createElement("div",{className:i.a.flexRowCenter},l.a.createElement("img",{src:"",alt:"",ref:g,className:"".concat(q.a.resultImage)}),!1===a&&!1===p&&l.a.createElement("a",{href:null!==s&&s,download:"styled_image.png",target:"_blank",style:{textDecoration:"none"}},l.a.createElement("div",{className:q.a.downloadButton},"Download image"))))},ne=function(){var e=Object(n.useState)(),t=Object(_.a)(e,2);t[0],t[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"".concat(i.a.flexRowTop," ").concat(i.a.width100," ").concat(g.a.mainContainer)},l.a.createElement(P,null),l.a.createElement(J,null)),l.a.createElement(ae,null))},le=a(30),re=a.n(le),oe=function(){var e=Object(n.useState)(),t=Object(_.a)(e,2);t[0],t[1];return l.a.createElement("div",{className:re.a.landingTopContainer},l.a.createElement("div",{className:re.a.skewDiv},l.a.createElement("div",{className:"".concat(re.a.animation1," ").concat(re.a.title," ")},"Neural Style Transfer"),l.a.createElement("div",{className:"".concat(re.a.animation2," ").concat(re.a.title," ")},"Style your images"),l.a.createElement("div",{className:"  ".concat(re.a.animation3," ").concat(re.a.title)},"One Click Away")))},ce=a(76),ie=a.n(ce),se=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:ie.a.descriptionContainer},l.a.createElement("h1",null,"What is Art Style Transfer?"),l.a.createElement("p",null,"Art Style Transfer is an online neural style transfer solution"),l.a.createElement("p",null,"It takes the style of the style image and applies it to the content of your image"),l.a.createElement("p",null,"Upload your content image an you can choose from a popular style or upload your own style to create a styled image in few seconds which you can download"),l.a.createElement(s.b,{to:"/neural_style_transfer",style:{textDecoration:"none"}},l.a.createElement("div",{style:{margin:"60px"}},l.a.createElement("span",{className:ie.a.nstButton},"Go to neural style transfer")))))},me=function(){return l.a.createElement("div",null,l.a.createElement(oe,null),l.a.createElement(se,null))},ue=a(112),de=a.n(ue),pe=a(63),_e=a.n(pe),ye=function(){var e=Object(n.useState)(),t=Object(_.a)(e,2);t[0],t[1];return l.a.createElement("div",null,l.a.createElement("div",{className:_e.a.gradientDiv}),l.a.createElement("div",{className:_e.a.footerContainer,id:"footer"},l.a.createElement("h1",null,"Contact me"),l.a.createElement("h4",null,"Developed by Mohamed Aymen Ben Slimen "),l.a.createElement("p",null,"Click on this icon to contact me on LinkedIn"),l.a.createElement("a",{href:"https://www.linkedin.com/in/mohamed-aymen-ben-slimen-758610190/"},l.a.createElement(de.a,{className:_e.a.LinkedInIcon}))))},ge=function(){return l.a.createElement("div",{className:"".concat(i.a.width100," ").concat(i.a.globalBackground)},l.a.createElement(s.a,null,l.a.createElement(p,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/neural_style_transfer",component:ne}),l.a.createElement(m.a,{path:"/",exact:!0,component:me}))),l.a.createElement(ye,null))},fe=a(43),he=a(47),Ee={style:null,content:null},ve=Object(fe.c)(Object(fe.b)({images:function(e,t){switch(t.type){case"ADD_CONTENT":return Object(he.a)(Object(he.a)({},e),{},{content:t.payload});case"ADD_STYLE":return Object(he.a)(Object(he.a)({},e),{},{style:t.payload});default:return Ee}}}));var be=function(){return l.a.createElement(C.a,{store:ve},l.a.createElement("div",{className:"App"},l.a.createElement(ge,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){e.exports={styleImagesGallery:"PopularStylesComponentStyle_styleImagesGallery__fJM12",styleImage:"PopularStylesComponentStyle_styleImage__33JRM",innerDiv:"PopularStylesComponentStyle_innerDiv__15lxi",styleInfo:"PopularStylesComponentStyle_styleInfo__fK6vL",checkIcon:"PopularStylesComponentStyle_checkIcon__3H22K",active:"PopularStylesComponentStyle_active__DGb_j",scrollOverflow:"PopularStylesComponentStyle_scrollOverflow__23TZK"}},30:function(e,t,a){e.exports={landingTopContainer:"LandingTopStyle_landingTopContainer__hh6vH",skewDiv:"LandingTopStyle_skewDiv__FonPr",title:"LandingTopStyle_title__2OwQi",animation1:"LandingTopStyle_animation1__CxA43",inter:"LandingTopStyle_inter__3JY92",animation2:"LandingTopStyle_animation2__1DvbA",inter2:"LandingTopStyle_inter2__RBbab",animation3:"LandingTopStyle_animation3__sJRIi",inter3:"LandingTopStyle_inter3__3NDlR"}},37:function(e,t,a){e.exports={navContainer:"HeaderStyle_navContainer__yH4U4",logo:"HeaderStyle_logo__2_Kvg",routes:"HeaderStyle_routes__3Bs2y",routeItem:"HeaderStyle_routeItem__3CLgn"}},46:function(e,t,a){e.exports={resultContainer:"ResultStyle_resultContainer__2xQI2",submitButton:"ResultStyle_submitButton__34Wmc",disbledButton:"ResultStyle_disbledButton__qiQO6",resultImage:"ResultStyle_resultImage__6GdZt",downloadButton:"ResultStyle_downloadButton__Vogob"}},5:function(e,t,a){e.exports={flexColumnCenter:"Global_flexColumnCenter__2mxJp",flexRowCenter:"Global_flexRowCenter__I7Zo0",flexRowSpaceAround:"Global_flexRowSpaceAround__2TDRm",flexRowTop:"Global_flexRowTop__GyhBV",absoluteCentered:"Global_absoluteCentered__3YZRW",width100:"Global_width100__3EAJp",width45:"Global_width45__3x8uW",height100:"Global_height100__xX_Y2",width40:"Global_width40__3wVLR",width50:"Global_width50__2AVoy",globalBackground:"Global_globalBackground__1hAhF",titles:"Global_titles__xB94T"}},55:function(e,t,a){e.exports={title:"ContentComponentStyle_title__2n_xX",uploadButton:"ContentComponentStyle_uploadButton__1twBP",displayedImage:"ContentComponentStyle_displayedImage__2n8rf"}},59:function(e,t,a){e.exports={tabsContent:"StyleComponentStyles_tabsContent__2LkME"}},63:function(e,t,a){e.exports={footerContainer:"FooterStyle_footerContainer__3I4ex",LinkedInIcon:"FooterStyle_LinkedInIcon__7hG_X",gradientDiv:"FooterStyle_gradientDiv__OHS_I"}},76:function(e,t,a){e.exports={gradientDiv1:"DescriptionComponentStyle_gradientDiv1__2-8hj",gradientDiv2:"DescriptionComponentStyle_gradientDiv2__2aSQo",descriptionContainer:"DescriptionComponentStyle_descriptionContainer__2RF0c",nstButton:"DescriptionComponentStyle_nstButton__2txt8"}}},[[115,1,2]]]);
//# sourceMappingURL=main.51e21866.chunk.js.map