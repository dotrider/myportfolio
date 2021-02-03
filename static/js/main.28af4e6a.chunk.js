(this.webpackJsonpmyfolio=this.webpackJsonpmyfolio||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},137:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(11),l=t.n(o),i=(t(80),t(33)),c=t(8),s=(t(105),t(73)),m=t(162),d=t(156),p=t(157),u=Object(s.a)();u=Object(m.a)(u);var f=function(){var e=Object(n.useState)({firstName:"Pablo",lastName:"Miranda",occupation:["Full Stack","Web Developer"]}),a=Object(i.a)(e,1)[0],t=a.firstName,o=a.lastName,l=a.occupation;return r.a.createElement("section",{id:"home"},r.a.createElement(d.a,{theme:u},r.a.createElement("div",{className:"home-text-cont"},r.a.createElement(c.b,{type:"slideInLeft",duration:"1s"},r.a.createElement(p.a,{variant:"h2"},t,r.a.createElement("span",{className:"bold-text"}," ",o))),r.a.createElement(p.a,{variant:"h2",className:"occupation-text"},r.a.createElement(c.b,{type:"fadeIn",duration:"3.5s"},l[0]),r.a.createElement(c.b,{type:"slideInLeft",duration:"1s"},r.a.createElement("span",{className:"bold-text"},l[1]))))))},h=(t(106),t(67)),g=t.n(h),E=t(68),b=t.n(E),v=t(69),w=t.n(v),k=t(70),y=t.n(k),N=[{id:1,name:"#noSponsors",image:g.a,technologies:["React","Stripe","NodeJs","bCrypt","PostgreSql"],liveSite:"http://157.245.239.118:3000/",description:"#NoSponsors features a forum where off-Road enthusiasts can collaborate on their vehicle builds it \n        includes a store where they can buy products to support the off-road #nosponsors community."},{id:2,name:"Colorizer",image:b.a,liveSite:"https://colorizer.io/",technologies:["React","NodeJs","Socket.io","Mongoose MDB"],description:"Collaborative drawing app built with my Teammate Jared Baur.\n        Colorizer allows multiple users to draw on the same Canvas and export their final art\n        in a png file. A great app to have fun with friends and family."},{id:3,name:"Keep it tight",image:w.a,liveSite:"https://github.com/dotrider/keepItTight",technologies:["React","NodeJs","ExpressJS","Mongoose MDB"],description:"Full stack the app built from the ground up that\n       allows users to keep track of their spending and expenses with a reflecting\n       balance of current time. "},{id:4,name:"MMS Landscaping Services",image:y.a,liveSite:"http://mmslandscapingservices.com",technologies:["Material UI","Recaptcha","Nodemailer","gsap"],description:"Site built with React for the FrontEnd as well as Nodejs and expressjs for the backend. The site displays information about the company in a user friendly UI. It features a contact form enforced by Google's Re-Captcha to prevent spam emails to the admin."}],S=t(158),I=t(159),j=t(160),C=t(161),x=Object(S.a)({gridCont:{width:"95%",margin:"0 auto"},cardCont:{textAlign:"center"},singleGrid:{padding:".85em"}}),M=function(){var e=x();return r.a.createElement("section",{id:"projects"},r.a.createElement(c.b,{reveal:!0,type:"fadeInUp"},r.a.createElement(p.a,{variant:"h6",className:"headings"},"Projects".slice(0,3),r.a.createElement("span",{className:"bold fcgrey"},"Projects".slice(3)))),r.a.createElement(I.a,{container:!0,justify:"center",className:e.gridCont,spacing:3},N.map((function(a,t){var n=a.name,o=a.image,l=a.technologies,i=a.liveSite,s=a.description,m=a.id;return r.a.createElement(I.a,{item:!0,xs:12,sm:6,className:e.singleGrid,key:m},r.a.createElement(c.b,{reveal:!0,type:"fadeInUp"},r.a.createElement(j.a,{alt:n,className:"projectPic",component:"img",image:o}),r.a.createElement(C.a,{className:e.cardCont},r.a.createElement(p.a,{variant:"subtitle1",className:"ns"},n),r.a.createElement("div",{className:"description"},r.a.createElement(p.a,{variant:"body2"},s)),r.a.createElement("div",{className:"technologies"},r.a.createElement(p.a,{variant:"subtitle2",className:"techs"},l.map((function(e,a,t){return t.length-1===a?r.a.createElement("span",{key:a}," ",e):r.a.createElement("span",{key:a}," ",e," |")})))),r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p.a,{className:"live-site"},"Live Site")))))}))))},_=(t(107),function(){var e=["Technical","Skills"];return r.a.createElement("section",{id:"skills"},r.a.createElement(c.b,{reveal:!0,type:"fadeInUp"},r.a.createElement(p.a,{variant:"h6",className:"headings"},e[0],r.a.createElement("span",{className:"bold fcgrey"},e[1]))),r.a.createElement(c.b,{reveal:!0,type:"fadeInUp",id:"skillSection"},r.a.createElement(I.a,{className:"skillSet"},r.a.createElement(I.a,{className:"sec"},r.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"devicon-react-original-wordmark colored"})),r.a.createElement("a",{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"devicon-express-original"})),r.a.createElement("a",{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"devicon-nodejs-plain colored"})),r.a.createElement("a",{href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"devicon-postgresql-plain-wordmark colored"}))),r.a.createElement(I.a,{className:"sec"},r.a.createElement("a",{href:"https://www.javascript.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"devicon-javascript-plain colored"})),r.a.createElement("a",{href:"https://html.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"devicon-html5-plain-wordmark colored"})),r.a.createElement("a",{href:"https://www.w3.org/Style/CSS/Overview.en.html",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"devicon-css3-plain-wordmark colored"})),r.a.createElement("a",{href:"https://sass-lang.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"devicon-sass-original colored"}))),r.a.createElement(I.a,{className:"sec"},r.a.createElement("a",{href:"https://wordpress.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"devicon-wordpress-plain"})),r.a.createElement("a",{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"devicon-git-plain colored"})),r.a.createElement("a",{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"devicon-visualstudio-plain colored"})),r.a.createElement("a",{href:"https://www.nginx.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"devicon-nginx-original"}))))))}),z=t(35),R=t(71),F=t.n(R),O=(t(120),function(){var e=["Hello there, My name is Pablo, I'm a full stack web developer in the Phoenix area. It\u2019s amazing all the awesome things you can build with code and a little bit of imagination!","I love finding efficient ways to build dynamic web applications. I'm comfortable learning on the fly and always thrive on change and new challenges. ","Besides coding, I like enjoy outdoor activities such as hiking, camping and explore Arizona's beautiful backcountry. I'm passionate about what I do and would like to collaborate in your projects. Let's connect!"];return r.a.createElement("section",{id:"about"},r.a.createElement(c.b,{reveal:!0,type:"fadeInUp"},r.a.createElement(p.a,{variant:"h6",className:"headings"},"About Me")),r.a.createElement(c.b,{reveal:!0,type:"fadeInUp"},r.a.createElement("div",{className:"aboutContainer"},r.a.createElement("div",null,r.a.createElement(p.a,{variant:"body2"},e[0]),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"body2"},e[1]),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"body2"},e[2])),r.a.createElement("div",{className:"connect"},r.a.createElement("div",{id:"resume-container"},r.a.createElement("a",{href:F.a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{id:"resume"},"Resume"))),r.a.createElement(z.SocialMediaIconsReact,{borderColor:"rgba(0,0,0,0.25)",icon:"linkedin",iconColor:"#0077B5",backgroundColor:"rgba(28,186,223,0)",iconSize:"1",url:"https://www.linkedin.com/in/pablo-e-miranda/",size:"60"}),r.a.createElement(z.SocialMediaIconsReact,{borderColor:"rgba(0,0,0,0.25)",icon:"github",iconColor:"#FFFFFF",backgroundColor:"rgba(28,186,223,0)",iconSize:"1",url:"https://github.com/dotrider",size:"60"}),r.a.createElement(z.SocialMediaIconsReact,{borderColor:"rgba(0,0,0,0.25)",icon:"mail",iconColor:"#373737",backgroundColor:"rgba(28,186,223,0)",iconSize:"5",url:"mailto:pabmiranda.e@gmail.com",size:"60"})))))}),P=(t(121),function(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("p",null," \xa9 ",r.a.createElement("span",{id:"year"},2020)," "))}),L=t(32),U=(t(129),function(){return r.a.createElement("header",{id:"heading"},r.a.createElement(c.b,{type:"fadeIn",delay:"1s"},r.a.createElement("nav",{id:"nav"},[{id:0,name:"Projects",page:"projects"},{id:1,name:"Skills",page:"skills"},{id:2,name:"About Me",page:"about"}].map((function(e){var a=e.id,t=e.name,n=e.page;return r.a.createElement(L.Link,{key:a,activeClass:"active",to:n,spy:!0,smooth:!0,duration:600},r.a.createElement(p.a,{variant:"subtitle1",className:"nav-link"},t))})))))}),B=t(72),J=t.n(B),A=(t(130),function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],o=a[1];return document.addEventListener("scroll",(function(){window.pageYOffset>450?o(!0):o(!1)})),r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(L.Link,{activeClass:"active",to:"heading",spy:!0,smooth:!0,duration:800},r.a.createElement(J.a,{button:"true",id:"scroll-up",fontSize:"large"})))});t(132),t(133);var T=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement(f,null),r.a.createElement(M,null),r.a.createElement(_,null),r.a.createElement(O,null),r.a.createElement(P,null),r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(134),t(135),t(136);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,a,t){e.exports=t.p+"static/media/ns.f2f50078.png"},68:function(e,a,t){e.exports=t.p+"static/media/color.eb0632af.png"},69:function(e,a,t){e.exports=t.p+"static/media/keepItTight.7ec5cbbd.png"},70:function(e,a,t){e.exports=t.p+"static/media/landscapings.b5073083.gif"},71:function(e,a,t){e.exports=t.p+"static/media/Miranda_Pablo.4ccaa7ae.pdf"},75:function(e,a,t){e.exports=t(137)},80:function(e,a,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.28af4e6a.chunk.js.map