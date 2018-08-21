(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{239:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return u});var r=t(272),o=t.n(r),a=t(0),i=t.n(a),c=t(265),l=t(263);n.default=function(e){var n=e.components,t=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:l.a,layoutProps:t,components:n},i.a.createElement(c.MDXTag,{name:"h1",components:n},"Builder"))};var u={}},254:function(e,n,t){"use strict";t.r(n),t.d(n,"graphql",function(){return m}),t.d(n,"StaticQueryContext",function(){return p}),t.d(n,"StaticQuery",function(){return f});var r=t(0),o=t.n(r),a=t(16),i=t.n(a),c=t(251),l=t.n(c);t.d(n,"Link",function(){return l.a}),t.d(n,"withPrefix",function(){return c.withPrefix}),t.d(n,"navigate",function(){return c.navigate}),t.d(n,"push",function(){return c.push}),t.d(n,"replace",function(){return c.replace}),t.d(n,"navigateTo",function(){return c.navigateTo});var u=t(255),d=t.n(u);t.d(n,"PageRenderer",function(){return d.a});var s=t(56);t.d(n,"parsePath",function(){return s.a});var p=o.a.createContext({}),f=function(e){return o.a.createElement(p.Consumer,null,function(n){return e.data||n[e.query]&&n[e.query].data?(e.render||e.children)(e.data?e.data.data:n[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},255:function(e,n,t){var r;e.exports=(r=t(261))&&r.default||r},258:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=c(t(0)),a=c(t(83)),i=c(t(16));function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,a.default)({}),u=l.Provider,d=l.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,a=function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(n,["components"]);return o.default.createElement(d,null,function(n){return o.default.createElement(e,r({components:t||n},a))})}};var s=function(e){var n=e.components,t=e.children;return o.default.createElement(u,{value:n},t)};s.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},n.default=s},259:function(e,n,t){"use strict";var r=t(260),o=t(0),a=t.n(o),i=t(252),c=t(254),l=t(129),u=i.default.div.withConfig({displayName:"Header__Wrapper"})(["position:fixed;background:blue;width:100%;z-index:100000;height:",";display:flex;align-items:center;background:#255fbc;padding:0 ",";"],Object(l.rhythm)(2),Object(l.rhythm)(1));n.a=function(){return a.a.createElement(c.StaticQuery,{query:"3717006906",render:function(e){return a.a.createElement(u,null,a.a.createElement(c.Link,{to:"/"},e.site.siteMetadata.title))},data:r})}},260:function(e){e.exports={data:{site:{siteMetadata:{title:"edikit"}}}}},261:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(16),i=t.n(a),c=t(57),l=t(4),u=function(e){var n=e.location,t=l.a.getResourcesForPathname(n.pathname);return o.a.createElement(c.a,{location:n,pageResources:t})};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=u},262:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(252),i=t(254),c=t(129),l=a.default.div.withConfig({displayName:"Sidebar__Wrapper"})(["position:fixed;width:calc("," - 1px);top:",";bottom:0;left:0;z-index:10;background:#f7f8fd;border-right:1px solid #eaecf3;padding:"," 0;"],Object(c.rhythm)(10),Object(c.rhythm)(2),Object(c.rhythm)(1)),u=a.default.div.withConfig({displayName:"Sidebar__SectionTitle"})(["padding-left:",";"],Object(c.rhythm)(1)),d=Object(a.default)(i.Link).withConfig({displayName:"Sidebar__LinkItem"})(["display:block;text-decoration:none;color:#666;padding-left:",';border-right:3px solid transparent;margin-right:-1px;&[aria-current*="page"]{color:#000;border-right-color:#417db9;}'],Object(c.rhythm)(1.5)),s=a.default.div.withConfig({displayName:"Sidebar__SubNav"})(["margin-top:",";margin-bottom:",";"],Object(c.rhythm)(.5),Object(c.rhythm)(1));n.a=function(){return o.a.createElement(l,null,o.a.createElement(u,null,"Getting started"),o.a.createElement(s,null,o.a.createElement(d,{to:"/docs/getting-started/installation/"},"Installation"),o.a.createElement(d,{to:"/docs/getting-started/redux/"},"Redux"),o.a.createElement(d,{to:"/docs/getting-started/typescript/"},"Typescript")),o.a.createElement(u,null,"Components"),o.a.createElement(s,null,o.a.createElement(d,{to:"/docs/components/builder/"},"Builder"),o.a.createElement(d,{to:"/docs/components/buttons/"},"Buttons"),o.a.createElement(d,{to:"/docs/components/form/"},"Form"),o.a.createElement(d,{to:"/docs/components/notifications/"},"Notifications"),o.a.createElement(d,{to:"/docs/components/panes/"},"Panes"),o.a.createElement(d,{to:"/docs/components/tree/"},"Tree")),o.a.createElement(u,null,"Guides"),o.a.createElement(s,null,o.a.createElement(d,{to:"/docs/guides/theming/"},"Theming")))}},263:function(e,n,t){"use strict";var r=t(273),o=t.n(r),a=t(0),i=t.n(a),c=t(252),l=t(129),u=t(259),d=t(262);function s(){var e=o()(['\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na {\n    text-decoration: none;\n    color: #417db9;\n    background-image: none;\n}\n\ncode, pre {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;\n}\n\npre {\n  background: ',";\n  color: ",';\n  border-radius: 10;\n  overflow: auto;\n  tab-size: 1.5em;\n}\n\npre > code[class*="language-"] {\n    margin: 1rem;\n    font-size: 12px !important;\n    line-height: 17px !important;\n    white-space: pre-wrap;\n    word-break: break-word;\n}\n\npre + pre {\n  margin-top: 20px;\n}\n\n.gatsby-highlight-code-line {\n  background-color: ',";\n  display: block;\n  margin: -0.125rem calc(-1rem - 15px);\n  padding: 0.125rem calc(1rem + 15px);\n}\n\n.token.attr-name {\n  color: ",";\n}\n\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: ",";\n}\n\n.token.property,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: ",";\n}\n.token.boolean {\n  color: ",";\n}\n.token.tag {\n  color: ",";\n}\n.token.string {\n  color: ",";\n}\n.token.punctuation {\n  color: ",";\n}\n.token.selector,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: ",";\n}\n.token.function {\n  color: ",";\n}\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable {\n  color: ",";\n}\n.token.attr-value {\n  color: ",";\n}\n.token.keyword {\n  color: ",";\n}\n.token.atrule,\n.token.class-name {\n  color: ",";\n}\n.token.important {\n  font-weight: 400;\n}\n.token.bold {\n  font-weight: 700;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n.namespace {\n  opacity: 0.7;\n}\n"]);return s=function(){return e},e}var p="#c5a5c5",f="#8dc891";Object(c.injectGlobal)(s(),"#282c34","#ffffff","#14161a",p,"#999999","#5a9bcf","#ff8b50","#fc929e",f,"#5FB3B3","#D8DEE9","#79b6f2","#d7deea",f,p,"#FAC863");var m=c.default.div.withConfig({displayName:"DocLayout__Container"})(["padding-top:",";"],Object(l.rhythm)(2)),h=c.default.div.withConfig({displayName:"DocLayout__Content"})(["padding-left:",";"],Object(l.rhythm)(12)),b=c.default.div.withConfig({displayName:"DocLayout__InnerContent"})(["max-width:840px;margin:0 auto;padding:"," ",";"],Object(l.rhythm)(2),Object(l.rhythm)(1));n.a=function(e){var n=e.children;return i.a.createElement("div",null,i.a.createElement(u.a,null),i.a.createElement(m,null,i.a.createElement(h,null,i.a.createElement(b,null,n)),i.a.createElement(d.a,null)))}},265:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(267);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=t(258);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},267:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),a=t(0),i=u(a),c=u(t(275)),l=t(258);function u(e){return e&&e.__esModule?e:{default:e}}var d={inlineCode:"code",wrapper:"div"},s=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,a.Component),o(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,o=e.props,a=void 0===o?{}:o,l=e.children,u=e.components,s=void 0===u?{}:u,p=e.Layout,f=e.layoutProps,m=s[t+"."+n]||s[n]||d[n]||n;return p?((0,c.default)(this,p),i.default.createElement(p,r({components:s},f),i.default.createElement(m,a,l))):i.default.createElement(m,a,l)}}]),n}();n.default=(0,l.withMDXComponents)(s)}}]);
//# sourceMappingURL=component---src-pages-docs-components-builder-mdx-621ed1c44fc10171e80c.js.map