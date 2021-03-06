(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{228:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return u})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return d}));var t=r(2),o=r(6),a=(r(0),r(314)),i=r(316),c={title:"Form / Dropdown",keywords:["choice","dropdown","form"]},u={unversionedId:"examples/dropdown",id:"examples/dropdown",isDocsHomePage:!1,title:"Form / Dropdown",description:"Use dropdowns to allow users to choose between available choices.",source:"@site/docs/examples/dropdown.md",slug:"/examples/dropdown",permalink:"/wave/docs/examples/dropdown",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/dropdown.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Picker / Selection",permalink:"/wave/docs/examples/picker-selection"},next:{title:"Form / Choice Group",permalink:"/wave/docs/examples/choice-group"}},s=[],p={rightToc:s};function d(e){var n=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,c,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use dropdowns to allow users to choose between available choices."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+r(451).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import main, app, Q, ui\n\nchoices = [\n    ui.choice('A', 'Option A'),\n    ui.choice('B', 'Option B'),\n    ui.choice('C', 'Option C', disabled=True),\n    ui.choice('D', 'Option D'),\n]\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if q.args.show_inputs:\n        q.page['example'].items = [\n            ui.text(f'dropdown={q.args.dropdown}'),\n            ui.text(f'dropdown_multi={q.args.dropdown_multi}'),\n            ui.text(f'dropdown_disabled={q.args.dropdown_disabled}'),\n            ui.button(name='show_form', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.dropdown(name='dropdown', label='Pick one', value='B', required=True, choices=choices),\n            ui.dropdown(name='dropdown_multi', label='Pick multiple', values=['B', 'D'], required=True,\n                        choices=choices),\n            ui.dropdown(name='dropdown_disabled', label='Pick one (Disabled)', value='B', choices=choices,\n                        disabled=True),\n            ui.button(name='show_inputs', label='Submit', primary=True),\n        ])\n    await q.page.save()\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#choice")},"choice")," \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#dropdown")},"dropdown")," \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#form")},"form")))}d.isMDXComponent=!0},314:function(e,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return m}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},d=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(r),f=t,m=d["".concat(i,".").concat(f)]||d[f]||l[f]||a;return r?o.a.createElement(m,c(c({ref:n},s),{},{components:r})):o.a.createElement(m,c({ref:n},s))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},315:function(e,n,r){"use strict";var t=r(0),o=r(19);n.a=function(){const e=Object(t.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},316:function(e,n,r){"use strict";r.d(n,"b",(function(){return a})),r.d(n,"a",(function(){return i}));var t=r(315),o=r(317);function a(){const{siteConfig:{baseUrl:e="/",url:n}={}}=Object(t.a)();return{withBaseUrl:(r,t)=>function(e,n,r,{forcePrependBaseUrl:t=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(t)return n+r;const i=r.startsWith(n)?r:n+r.replace(/^\//,"");return a?e+i:i}(n,e,r,t)}}function i(e,n={}){const{withBaseUrl:r}=a();return r(e,n)}},317:function(e,n,r){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!t(e)}r.d(n,"b",(function(){return t})),r.d(n,"a",(function(){return o}))},451:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/dropdown-aa5530f33720d6851ade03079d16f40a.png"}}]);