(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"a":"Hashir","c":"","b":"Shoaib","h":"| Engineer | Programmer | Web Developer | Photographer | Athlete | Artist ","l":[{"id":0,"image":"fa-github","url":"https://github.com/hashirshoaeb","style":"socialicons"},{"id":1,"image":"fa-facebook","url":"https://www.facebook.com/hashirshoaeb","style":"socialicons"},{"id":2,"image":"fa-instagram","url":"https://www.instagram.com/hashirshoaeb/","style":"socialicons"},{"id":3,"image":"fa-linkedin","url":"https://www.linkedin.com/in/hashirshoaeb/","style":"socialicons"},{"id":4,"image":"fa-twitter","url":"https://www.twitter.com/hashirshoaeb/","style":"socialicons"}],"e":"About Me","s":true,"m":"https://www.instagram.com/","o":"hashirshoaeb","n":"/?__a=1","d":"I\'m Computer Engineer from NUST CEME, Pakistan with 3+ years of experience in web development. I\u2019m currently the Vice President of student body at Emerging Technologies Research Lab(ETL) and a former Intern at RiseTech. I\'m passionate about teaching machines how to think","p":"Recent Projects","i":"https://api.github.com/users/","k":"hashirshoaeb","j":"/repos?sort=updated&direction=desc","q":4,"g":"Contact Me","f":"Please don\'t hesitate to schedule a meeting through Calendly. This will create an event on my calendar, as well as send an invitation for the platform of your choice to both of us. Alternatively, feel free to reach out directly by email ","t":true,"r":false}')},14:function(e,a,t){e.exports=t.p+"static/media/resume.0c246fa0.pdf"},39:function(e,a,t){e.exports=t(70)},44:function(e,a,t){},48:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(31),l=t.n(i),c=(t(44),t(11)),s=t(8),o=(t(45),t(46),t(48),t(1)),m=t(37),u=t(3),d=t(32),p=t.n(d),b=function(){var e=Object(n.useState)(new Array(o.l.length).fill("socialicons")),a=Object(u.a)(e,2),t=a[0],i=a[1],l=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",i(a)):"leave"===e.event?(a[e.icon.id]="socialicons",i(a)):void 0};return r.a.createElement("div",null,r.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{className:"container container-fluid text-center "},r.a.createElement("h1",{className:"display-1"},o.a+" "+o.c+" "+o.b),r.a.createElement(p.a,{className:"lead"}," ",o.h),r.a.createElement("div",{className:"p-5"},o.l.map((function(e){return r.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return l({icon:e,event:"enter"})},onMouseOut:function(){return l({icon:e,event:"leave"})}}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},h=t(10),g=t.n(h),f=t(14),E=t.n(f),v=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)(o.s),c=Object(u.a)(l,2),s=c[0],m=c[1],d=Object(n.useState)(E.a),p=Object(u.a)(d,1)[0];Object(n.useEffect)((function(){s&&b()}),[s]);var b=function(e){g.a.get(o.m+o.o+o.n).then((function(e){return i(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return m(!1),console.error(e.message)})).finally((function(){}))};return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("div",{className:"row"},s&&r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:"border border-secondary rounded-circle",src:t,alt:"profilepicture"})),r.a.createElement("div",{className:"col-lg-".concat(s?"7":"12")},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},o.e),r.a.createElement("p",{className:"lead text-center"},o.d),p&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:E.a,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},N=function(e){var a=e.value,t=Object(n.useState)([]),i=Object(u.a)(t,2),l=i[0],c=i[1],s=Object(n.useCallback)((function(e){g.a.get(a).then((function(e){return c(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){s()}),[s]);var o=[],m=0;for(var d in l)o.push(d),m+=l[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",o.map((function(e){return r.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(l[e]/m*1e3)/10," %")})))},y=function(e){var a=e.value,t=Object(n.useState)("0 mints"),i=Object(u.a)(t,2),l=i[0],c=i[1],s=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),r=Math.trunc(n/1e3/60/60);if(r<24)return c("".concat(r.toString()," hours ago"));var i=t.getDate(),l=t.getMonth(),s=t.getFullYear();return c("on ".concat(i," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][l]," ").concat(s))}),[a.pushed_at]);Object(n.useEffect)((function(){s()}),[s]);var o=a.name,m=a.description,d=a.svn_url,p=a.stargazers_count,b=a.languages_url;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},o," "),r.a.createElement("p",{className:"card-text"},m," "),r.a.createElement("a",{href:"".concat(d,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:d,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),r.a.createElement("hr",null),r.a.createElement(N,{value:b}),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},p)),r.a.createElement("small",{className:"text-muted"},"Updated ",l)))))},j=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],i=a[1],l=Object(n.useCallback)((function(e){g.a.get(o.i+o.k+o.j).then((function(e){return i(e.data.slice(0,o.q))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(n.useEffect)((function(){l()}),[l]),r.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid bg-transparent m-0"},t.length&&r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},o.p),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,value:e})})))))},w=t(16),k=t(33),q=t(36),x=t(38),O=function(e){Object(x.a)(t,e);var a=Object(q.a)(t);function t(){return Object(w.a)(this,t),a.apply(this,arguments)}return Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("head"),a=document.createElement("script");a.setAttribute("src","https://assets.calendly.com/assets/external/widget.js"),e.appendChild(a)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{id:"contact",className:"jumbotron jumbotron-fluid bg-transparent m-0"},r.a.createElement("h1",{className:"display-4 mb-4 text-center"},o.g),r.a.createElement("center",null,r.a.createElement("div",{className:" d-right col-5 p-0 d-lg-block p-0 ml-5 mr-5 mb-0 mt-5"},r.a.createElement("p",{className:"lead"},o.f,r.a.createElement("a",{href:"mailto:Jeffery.John@uga.edu",style:{color:"#606060"}},"here!")))),r.a.createElement("div",null,r.a.createElement("div",{id:"schedule_form","mb-0":!0},r.a.createElement("div",{className:"calendly-inline-widget","data-url":"https://calendly.com/jefferyjohn/45-minute-meeting",style:{minWidth:"320px",height:"800px"}}))))}}]),t}(r.a.Component),P=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=Object(u.a)(e,1)[0];return r.a.createElement("footer",{style:a,className:"mt-auto py-3 text-center"},r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/hashirshoaeb","aria-label":"My GitHub"},"Hashir Shoaib")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"}," ","Project code is open source. Feel free to fork and make your own version.")))},S=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),i=t[0],l=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==i&&l(e)}))}),[i]),r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(i?"bg-transparent":"bg-gradient"," ")},r.a.createElement("a",{className:"navbar-brand",href:"/#home"},"<".concat(o.a," />")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},o.r&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link lead",to:"/blog"},"Blog")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#projects"},"Projects")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:E.a,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("b",null,"Resume"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#aboutme"},r.a.createElement("b",null,"About"))))))},M=function e(a){var t=this,i=a.title,l=a.image,c=a.description;Object(w.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(r.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(r.a.createElement(n.Fragment,{key:t.list.length},r.a.createElement("h1",{className:""},e),r.a.createElement("hr",null))),t},this.getBlog=function(){return r.a.createElement("div",{className:"container-lg"},t.list)},this.title=i,this.image=l,this.description=c},C=[],_=new M({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),A=new M({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");C.push(A),C.push(_);var L=C,D=function(e){return r.a.createElement("div",{className:"container-lg mt-5 bg-blue"},r.a.createElement("h1",{className:"text-center"},"Blogs"),L.map((function(e,a){return r.a.createElement(T,{key:a,title:e.title,description:e.description,index:a})})))},T=function(e){var a=e.index,t=e.title,n=(e.image,e.description);return r.a.createElement("div",{className:"m-5"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-lg-12"}),r.a.createElement("div",{className:"col-8 col-lg-12"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:""},t),r.a.createElement("p",{className:"lead"},n),r.a.createElement(c.b,{to:"".concat("","blog/").concat(a)},"Read more..."," ")))),r.a.createElement("hr",null)))},H=function(e){var a=e.match.params.id,t=L[a];return r.a.createElement("div",{className:"container-lg mt-5"},t&&r.a.createElement("div",null,r.a.createElement("h1",{className:"display-2 text-center"},t.title),r.a.createElement("img",{className:"img-fluid mb-2",src:t.image,alt:t.title}),t.getBlog()),!t&&r.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},B=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(j,null),r.a.createElement(O,null))},J=function(){return r.a.createElement(c.a,{basename:"/"},o.t&&r.a.createElement(S,null),r.a.createElement(s.a,{path:"/",exact:!0,component:B}),o.r&&r.a.createElement(s.a,{path:"/blog",exact:!0,component:D}),o.r&&r.a.createElement(s.a,{path:"/blog/:id",component:H}),r.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.f0df62e5.chunk.js.map