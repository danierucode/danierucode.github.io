(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"technologies":[{"name":"React","percentage":70,"color":"#ff5e5b"},{"name":"Redux","percentage":40,"color":"#ff5e5b"},{"name":"JavaScript","percentage":70,"color":"#ff5e5b"},{"name":"HTML","percentage":60,"color":"#ff5e5b"},{"name":"CSS","percentage":50,"color":"#ff5e5b"},{"name":"Node.js","percentage":40,"color":"#ff5e5b"},{"name":"Git/Github","percentage":50,"color":"#ff5e5b"},{"name":"SQL","percentage":60,"color":"#ff5e5b"},{"name":"C#","percentage":50,"color":"#ff5e5b"},{"name":"Firebase","percentage":40,"color":"#ff5e5b"}],"options":["Technologies","Experience","Education","Projects"],"experience":[{"name":"Freelance Web Developer","company":"Ave de Para\xedso","timespan":"March 2020 - October 2020"},{"name":"Automation Developer","company":"Jabil","timespan":"March 2019 - November 2019"},{"name":"Automation Developer","company":"Sanmina","timespan":"December 2017 - March 2019"},{"name":"Trainee","company":"Tata Consultancy Services","timespan":"November 2016 - August 2017"}],"education":[{"course":"Mechatronic Engineering","school":"CETI","location":"Guadalajara, Mexico","timespan":"2011 - 2016"},{"course":"English","school":"Cork English College","location":"Cork, Ireland","timespan":"2019 - 2020"}],"projects":[{"name":"Staff Management App","company":"Ave de Para\xedso","technologies":["React","Firebase"],"description":"Build a full web application to keep track of tasks, payments and employees assistance for a berry farm in Jalisco"},{"name":"Ethernet/IP Communication Library ","company":"Jabil","technologies":["C#",".NET","React"],"description":"Develop machine to machine communication libraries and Web interfaces as monitoring and control systems."}],"contact":{"mail":"jd.michel@outlook.com","linkedin":"https://www.linkedin.com/in/jesus-daniel-michel-corona-552615112/","github":"https://github.com/danierucode/danierucode.github.io","phone":"3316019236"}}')},function(e,n,t){e.exports={container:"Presentation_container__TCEi1",name:"Presentation_name__2H9Di",title:"Presentation_title__27kbn",description:"Presentation_description__3JJRD",picContainer:"Presentation_picContainer__MqqfZ",profilePic:"Presentation_profilePic__33Drf",contactContainer:"Presentation_contactContainer__2IvkA",contactTitle:"Presentation_contactTitle__1VjGS",link:"Presentation_link__2S7C5",footer:"Presentation_footer__2KIwK"}},,function(e,n,t){e.exports={container:"Education_container__3TFLD",title:"Education_title__BvDnf",subtitleContainer:"Education_subtitleContainer__32u3k",location:"Education_location__5gjDS",school:"Education_school__1-8kr"}},function(e,n,t){e.exports={container:"Experience_container__26jdT",title:"Experience_title__1iQY6",subtitleContainer:"Experience_subtitleContainer__3Q9a-",timespan:"Experience_timespan__1Wlwe",company:"Experience_company__3I8ku",description:"Experience_description__2RD0x"}},,function(e,n,t){e.exports={text:"MenuElement_text__2ajKb",selected:"MenuElement_selected__1EpK2",container:"MenuElement_container__32XrC",line:"MenuElement_line__3ap4b"}},function(e,n,t){e.exports={container:"Projects_container__1ypMv"}},,,,function(e){e.exports=JSON.parse('{"homeMenu":"homeMenu"}')},,,function(e,n,t){e.exports={container:"TechnologyBar_container__1dbop",name:"TechnologyBar_name__3KCRt",barContainer:"TechnologyBar_barContainer__3knlj"}},,,,,function(e,n,t){e.exports={container:"ScrollElement_container__2PA35",title:"ScrollElement_title__dSEUS"}},function(e,n,t){e.exports={background:"Home_background__2LU2Y",home:"Home_home__31nhO"}},,,function(e,n,t){e.exports={container:"HomeMenu_container__3VDtD"}},function(e,n,t){e.exports={container:"ScrollContainer_container__dFGZA"}},,,,,,,function(e,n,t){},function(e,n,t){},,,,,,,,,,,,,,,,,,function(e,n,t){"use strict";t.r(n);var c=t(0),a=t(1),i=t.n(a),o=t(12),r=t.n(o),s=(t(33),t(34),t(15)),l=function(e,n){return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?i.a.cloneElement(e,n):e}))},m=Object(s.b)((function(e,n){return{selectedOption:e["menu_".concat(n.name)].option}}),(function(e,n){return{selectOption:function(t){return e({type:"SELECT_OPTION",name:n.name,payload:t})}}}))((function(e){var n=l(e.children,{selectedOption:e.selectedOption,selectOption:e.selectOption});return e.initialOption&&""===e.selectedOption&&e.selectOption(e.initialOption),Object(c.jsx)(c.Fragment,{children:n})})),d=t(13),j=t(25),p=t.n(j),u=t(8),b=t.n(u),h=function(e){return Object(c.jsxs)("a",{className:b.a.container,href:"#".concat(e.name),onClick:function(){e.handleClick(e.name)},children:[Object(c.jsx)("p",{className:e.selectedOption===e.name?"".concat(b.a.selected," ").concat(b.a.text):b.a.text,children:e.name}),Object(c.jsx)("div",{className:b.a.line})]})},_=function(e){return Object(c.jsx)("section",{className:p.a.container,children:e.options.map((function(n,t){return Object(c.jsx)(h,{name:n,handleClick:e.selectOption,selectedOption:e.selectedOption},t)}))})},O=t(3),x=t.n(O),f=t.p+"static/media/profile-pic.a576353d.jpg",g=t(10),N=t(11),v=t(2),C=function(e){return Object(c.jsxs)("section",{className:x.a.container,children:[Object(c.jsx)("div",{className:x.a.picContainer,children:Object(c.jsx)("img",{src:f,className:x.a.profilePic,alt:"Profile Pic"})}),Object(c.jsx)("h1",{className:x.a.name,children:"Jes\xfas Michel"}),Object(c.jsx)("h2",{className:x.a.title,children:"Software Developer"}),Object(c.jsx)("p",{className:x.a.description,children:"Let's build something incredible!"}),Object(c.jsxs)("div",{className:x.a.contactContainer,children:[Object(c.jsx)("h3",{className:x.a.contactTitle,children:"Contact"}),Object(c.jsxs)("div",{children:[Object(c.jsx)(g.Icon,{icon:N.mail,size:20}),Object(c.jsx)("p",{className:x.a.link,href:v.contact.mail,children:v.contact.mail})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(g.Icon,{icon:N.phone,size:20}),Object(c.jsx)("p",{className:x.a.link,href:v.contact.phone,children:v.contact.phone})]})]}),Object(c.jsxs)("div",{className:x.a.footer,children:[Object(c.jsx)("a",{className:x.a.link,href:v.contact.linkedin,children:Object(c.jsx)(g.Icon,{icon:N.linkedin,size:25})}),Object(c.jsxs)("a",{className:x.a.link,href:v.contact.github,children:[" ",Object(c.jsx)(g.Icon,{icon:N.github,size:25})]})]})]})},E=t(26),k=t.n(E),y=t(21),P=t.n(y),T=function(e){return Object(c.jsxs)("section",{id:e.id,className:P.a.container,children:[Object(c.jsx)("h1",{className:P.a.title,children:e.title}),e.children]})},S=function(e){return Object(c.jsx)("section",{className:k.a.container,children:e.components.map((function(e,n){return Object(c.jsx)(T,{id:e.id,title:e.title,children:e.render},n)}))})},M=t(22),D=t.n(M),F=t.p+"static/media/background.d5aa6436.jpg",I=t(16),w=t.n(I),J=function(e){return Object(c.jsxs)("div",{className:w.a.container,children:[Object(c.jsx)("p",{className:w.a.name,children:e.name}),Object(c.jsx)("div",{className:w.a.barContainer,children:Object(c.jsx)("div",{style:{width:"".concat(e.percentage,"%"),backgroundColor:e.color,height:"100%"}})})]})},L=function(e){return Object(c.jsx)("div",{className:!0,children:v.technologies.map((function(e,n){return Object(c.jsx)(J,{name:e.name,percentage:e.percentage,color:e.color},n)}))})},A=t(5),R=t.n(A),B=function(e){return Object(c.jsx)(c.Fragment,{children:v.education.map((function(e,n){return Object(c.jsxs)("div",{className:R.a.container,children:[Object(c.jsx)("h3",{className:R.a.title,children:e.course}),Object(c.jsxs)("div",{className:R.a.subtitleContainer,children:[Object(c.jsx)("p",{className:R.a.school,children:e.school}),Object(c.jsx)("p",{className:R.a.location,children:e.location}),Object(c.jsx)("p",{className:R.a.location,children:e.timespan})]})]},n)}))})},z=t(6),G=t.n(z),H=function(e){return Object(c.jsx)(c.Fragment,{children:v.experience.map((function(e,n){return Object(c.jsxs)("div",{className:G.a.container,children:[Object(c.jsx)("h3",{className:G.a.title,children:e.name}),Object(c.jsxs)("div",{className:G.a.subtitleContainer,children:[Object(c.jsx)("p",{className:G.a.company,children:e.company}),Object(c.jsx)("p",{className:G.a.timespan,children:e.timespan})]}),Object(c.jsx)("p",{className:G.a.description,children:e.description})]},n)}))})},K=t(9),Q=t.n(K),V=function(e){return Object(c.jsx)(c.Fragment,{children:v.projects.map((function(e,n){return Object(c.jsxs)("div",{className:Q.a.container,children:[Object(c.jsx)("h3",{className:Q.a.title,children:e.name}),Object(c.jsx)("p",{className:Q.a.company,children:e.company}),Object(c.jsx)("p",{className:Q.a.description,children:e.description}),Object(c.jsx)("ul",{className:Q.a.technologyList,children:e.technologies.map((function(e,n){return Object(c.jsx)("li",{children:e},n)}))})]},n)}))})},W=function(){var e=d.homeMenu,n=[{render:Object(c.jsx)(L,{},"1"),id:"Technologies",title:"Technologies"},{render:Object(c.jsx)(H,{},"3"),id:"Experience",title:"Experience"},{render:Object(c.jsx)(B,{},"2"),id:"Education",title:"Education"},{render:Object(c.jsx)(V,{},"4"),id:"Projects",title:"Projects"}];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("section",{className:D.a.background,style:{background:"linear-gradient(rgba(50, 50, 50, 0.8), rgba(100, 100, 100, 0.5)), url(".concat(F,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),Object(c.jsxs)("section",{className:D.a.home,children:[Object(c.jsx)(m,{name:e,initialOption:"Technologies",children:Object(c.jsx)(_,{options:v.options})}),Object(c.jsx)(C,{}),Object(c.jsx)(S,{components:n,menuName:e})]})]})};var q=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(W,{})})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),i(e),o(e)}))},Y=t(4),Z=t(14),X=t(7),$="SELECT_OPTION",ee={option:""},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,n=arguments.length>1?arguments[1]:void 0;if(!n)return e;switch(n.type){case $:return n.payload?Object(X.a)(Object(X.a)({},e),{},{option:n.payload}):e;default:return e}},te=function(e,n,t,c){for(var a=0;a<n.length;a++){var i=ce(e,n[a]);c=Object(X.a)(Object(X.a)({},c),{},Object(Z.a)({},"".concat(t,"_").concat(n[a]),i))}return c},ce=function(e,n){return function(t,c){return c.name===n||void 0===t?e(t,c):t}},ae=function(){var e={},n=Object.values(d);return e=te(ne,n,"menu",e)},ie=Object(Y.c)(ae()),oe=t(27),re=Object(Y.d)(ie,Object(Y.a)(oe.a));r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(s.a,{store:re,children:Object(c.jsx)(q,{})})}),document.getElementById("root")),U()}],[[52,1,2]]]);
//# sourceMappingURL=main.2f6614e8.chunk.js.map