(window.webpackJsonp=window.webpackJsonp||[]).push([[198,33,96],{252:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),l=a.n(r),i=a(319),c=a(320),o=a(318),s=a(315),m=a(316),u=a(253),d=a.n(u),p=[{title:"Know Python?",icon:"fab fa-python",description:l.a.createElement(l.a.Fragment,null,"No HTML, CSS, Javascript skills required. Build rich, interactive web apps using pure Python.")},{title:"Realtime Sync",icon:"fas fa-stopwatch",description:l.a.createElement(l.a.Fragment,null,"Broadcast live information, visualizations and graphics using Wave's low-latency realtime server.")},{title:"Collaborative Content",icon:"fas fa-users",description:l.a.createElement(l.a.Fragment,null,"Instant control over every connected web browser using a simple and intuitive programming model.")},{title:"Develop Quickly",icon:"fas fa-laptop-code",description:l.a.createElement(l.a.Fragment,null,"Preview your app live as you code. Dramatically reduce the time and effort to build web apps.")},{title:"Deploy Instantly",icon:"fas fa-upload",description:l.a.createElement(l.a.Fragment,null,"Easily share your apps with end-users, get feedback, improve and iterate.")},{title:"Run Anywhere",icon:"fas fa-terminal",description:l.a.createElement(l.a.Fragment,null,"~10MB static executables for Linux, Windows, OSX, BSD, Solaris on AMD64, 386, ARM, PPC. Run it on a RPi Zero for great good!")}];function g(e){var t=e.icon,a=e.title,n=e.description;return l.a.createElement("div",{className:Object(i.a)("col col--4",d.a.feature)},l.a.createElement("div",null,l.a.createElement("i",{class:t})),l.a.createElement("h3",null,a),l.a.createElement("p",null,n))}t.default=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e;return l.a.createElement(c.a,{title:t.title,description:"Realtime Web Apps and Dashboards for Python"},l.a.createElement("header",{className:Object(i.a)("hero hero--primary",d.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"hero__title"},"Make AI Apps"),l.a.createElement("div",{style:{margin:"1em 0"}},l.a.createElement(o.a,{to:Object(m.a)("docs/getting-started")},l.a.createElement("img",{src:"img/hero.png",alt:"Screenshot",style:{width:"100%",maxWidth:800,boxShadow:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"}}))),l.a.createElement("p",{className:"hero__subtitle"},t.tagline),l.a.createElement("div",{className:d.a.buttons},l.a.createElement(o.a,{className:Object(i.a)("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(m.a)("docs/getting-started")},"Get Started")))),l.a.createElement("main",null,p&&p.length>0&&l.a.createElement("section",{className:d.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},p.map((function(e,t){return l.a.createElement(g,Object(n.a)({key:t},e))})))))))}},321:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(0),r=a.n(n),l=a(322),i=a(323);const c=()=>{const[e,t]=r.a.useState(!!window.localStorage.getItem("noticeRead"));return r.a.createElement("section",{className:"notice",style:{opacity:e?0:1}},r.a.createElement("div",null,r.a.createElement("p",null,"By using this website you agree to our use of cookies. "),r.a.createElement("a",{href:"https://www.h2o.ai/privacy/",target:"_blank"},"Read H2O.ai\u2019s privacy policy.")),r.a.createElement("span",{className:"notice__close",onClick:()=>{window.localStorage.setItem("noticeRead",!0),t(!0)}},"X"))};function o(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,c),r.a.createElement(l.a,e))}}}]);