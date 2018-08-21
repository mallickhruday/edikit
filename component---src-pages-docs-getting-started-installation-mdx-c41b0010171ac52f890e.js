(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return u});var a=n(255),o=n.n(a),r=n(0),i=n.n(r),c=n(250),l=n(254);t.default=function(e){var t=e.components,n=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:l.a,layoutProps:n,components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t,props:{id:"installation"}},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"h1",props:{ariaHidden:"true",href:"#installation"}},i.a.createElement(c.MDXTag,{name:"span",components:t,parentName:"a",props:{className:"icon icon-link"}})),"Installation"),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"edikit")," is available as a single npm package."),i.a.createElement(c.MDXTag,{name:"pre",components:t},i.a.createElement(c.MDXTag,{name:"code",components:t,parentName:"pre"},"yarn add edikit\n")))};var u={}},245:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),o=n.n(a),r=n(11),i=n.n(r),c=n(242),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(248),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var s=n(48);n.d(t,"parsePath",function(){return s.a});var p=o.a.createContext({}),f=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},248:function(e,t,n){var a;e.exports=(a=n(261))&&a.default||a},250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(265);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=n(252);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},252:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=c(n(0)),r=c(n(76)),i=c(n(11));function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)({}),u=l.Provider,d=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return o.default.createElement(d,null,function(t){return o.default.createElement(e,a({components:n||t},r))})}};var s=function(e){var t=e.components,n=e.children;return o.default.createElement(u,{value:t},n)};s.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=s},254:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(239),i=n(120),c=n(259),l=n(245),u=r.default.div.withConfig({displayName:"Sidebar__Wrapper"})(["position:fixed;width:",";top:",";bottom:0;left:0;z-index:10;background:#f7f8fd;border-right:1px solid #eaecf3;padding:"," 0;"],Object(i.rhythm)(10),Object(i.rhythm)(2),Object(i.rhythm)(1)),d=r.default.div.withConfig({displayName:"Sidebar__SectionTitle"})(["padding-left:",";"],Object(i.rhythm)(1)),s=Object(r.default)(l.Link).withConfig({displayName:"Sidebar__LinkItem"})(["display:block;text-decoration:none;color:#666;padding-left:",';border-right:3px solid transparent;margin-right:-1px;&[aria-current*="page"]{color:#000;border-right-color:#417db9;}'],Object(i.rhythm)(1.5)),p=r.default.div.withConfig({displayName:"Sidebar__SubNav"})(["margin-top:",";margin-bottom:",";"],Object(i.rhythm)(.5),Object(i.rhythm)(1)),f=function(){return o.a.createElement(u,null,o.a.createElement(d,null,"Getting started"),o.a.createElement(p,null,o.a.createElement(s,{to:"/docs/getting-started/installation/"},"Installation"),o.a.createElement(s,{to:"/docs/getting-started/redux/"},"Redux"),o.a.createElement(s,{to:"/docs/getting-started/typescript/"},"Typescript")),o.a.createElement(d,null,"Components"),o.a.createElement(p,null,o.a.createElement(s,{to:"/docs/components/builder/"},"Builder"),o.a.createElement(s,{to:"/docs/components/buttons/"},"Buttons"),o.a.createElement(s,{to:"/docs/components/form/"},"Form"),o.a.createElement(s,{to:"/docs/components/notifications/"},"Notifications"),o.a.createElement(s,{to:"/docs/components/panes/"},"Panes"),o.a.createElement(s,{to:"/docs/components/tree/"},"Tree")),o.a.createElement(d,null,"Guides"),o.a.createElement(p,null,o.a.createElement(s,{to:"/docs/guides/theming/"},"Theming")))},m=n(262),h=(n(264),r.default.div.withConfig({displayName:"DocLayout__Container"})(["padding-top:",";"],Object(i.rhythm)(2))),g=r.default.div.withConfig({displayName:"DocLayout__Content"})(["padding-left:",";"],Object(i.rhythm)(10)),b=r.default.div.withConfig({displayName:"DocLayout__InnerContent"})(["max-width:860px;margin:0 auto;padding:"," ",";min-height:600px;"],Object(i.rhythm)(2),Object(i.rhythm)(1));t.a=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null),o.a.createElement(h,null,o.a.createElement(g,null,o.a.createElement(b,null,t),o.a.createElement(m.a,null))),o.a.createElement(f,null))}},259:function(e,t,n){"use strict";var a=n(260),o=n(0),r=n.n(o),i=n(239),c=n(245),l=n(120),u=i.default.div.withConfig({displayName:"Header__Wrapper"})(["position:fixed;width:100%;z-index:1000000;height:",";display:flex;justify-content:space-between;align-items:center;background:#255fbc;padding:0 ",";"],Object(l.rhythm)(2),Object(l.rhythm)(1)),d=i.default.nav.withConfig({displayName:"Header__Nav"})(["display:flex;align-items:center;"]),s=Object(i.default)(c.Link).withConfig({displayName:"Header__Project"})(["color:#fff;font-weight:bolder;"]),p=function(e){return Object(i.default)(e).withConfig({displayName:"Header"})(["color:#fff;text-transform:uppercase;font-size:13px;font-weight:bold;margin-left:16px;"])},f=p(c.Link),m=p("a");t.a=function(){return r.a.createElement(c.StaticQuery,{query:"3717006906",render:function(e){return r.a.createElement(u,null,r.a.createElement(s,{to:"/"},e.site.siteMetadata.title),r.a.createElement(d,null,r.a.createElement(f,{to:"/docs/getting-started/installation/"},"Docs"),r.a.createElement(f,{to:"/showcase/"},"Showcase"),r.a.createElement(m,{href:"https://github.com/plouc/edikit",target:"_blank"},"GitHub")))},data:a})}},260:function(e){e.exports={data:{site:{siteMetadata:{title:"edikit"}}}}},261:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),i=n.n(r),c=n(49),l=n(6),u=function(e){var t=e.location,n=l.a.getResourcesForPathname(t.pathname);return o.a.createElement(c.a,{location:t,pageResources:n})};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},262:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(239),i=n(245),c=n(120),l=r.default.footer.withConfig({displayName:"Footer__Container"})(["width:100%;background:#1c2738;color:#f7f8fd;border-top:1px solid #eaecf3;font-size:14px;line-height:",";a{color:#6df1d1;font-weight:normal;}"],Object(c.rhythm)(1)),u=r.default.div.withConfig({displayName:"Footer__Inner"})(["max-width:860px;margin:0 auto;padding:"," ",";display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:",";"],Object(c.rhythm)(1.5),Object(c.rhythm)(1),Object(c.rhythm)(1));t.a=function(){return o.a.createElement(l,null,o.a.createElement(u,null,o.a.createElement("div",null,"Copyright © 2018 Raphaël Benitte"),o.a.createElement("div",null,o.a.createElement(i.Link,{to:"/docs/getting-started/installation/"},"Documentation"),o.a.createElement("br",null),o.a.createElement(i.Link,{to:"/showcase/"},"Showcase")),o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/plouc/edikit"},"GitHub"))))}},264:function(e,t,n){"use strict";var a=n(274),o=n.n(a),r=n(239),i="#3298ee",c="#6df1d1",l=Object(r.css)(["pre{background:",";color:",";border-radius:3px;overflow:auto;tab-size:1.5em;height:auto;padding:12px 18px;font-size:13px;line-height:20px;}pre > code{white-space:pre-wrap;word-break:break-word;background:transparent;padding:0;border-radius:0;font-size:13px;line-height:20px;}pre + pre{margin-top:20px;}.gatsby-highlight-code-line{background-color:",";display:block;margin:-0.125rem calc(-1rem - 15px);padding:0.125rem calc(1rem + 15px);}.token.attr-name{color:",";}.token.comment,.token.block-comment,.token.prolog,.token.doctype,.token.cdata{color:",";}.token.property,.token.number,.token.function-name,.token.constant,.token.symbol,.token.deleted{color:",";}.token.boolean{color:",";}.token.tag{color:",";}.token.string{color:",";}.token.punctuation{color:",";}.token.selector,.token.char,.token.builtin,.token.inserted{color:",";}.token.function{color:",";}.token.operator,.token.entity,.token.url,.token.variable{color:",";}.token.attr-value{color:",";}.token.keyword{color:",";}.token.atrule,.token.class-name{color:",";}.token.important{font-weight:400;}.token.bold{font-weight:700;}.token.italic{font-style:italic;}.token.entity{cursor:help;}.namespace{opacity:0.7;}"],"#1c2738","#f7f8fd","#14161a",i,"#8b9bb9","#2fa1f2","#ff997b","#ff997b",c,"#5fcfb3","#D8DEE9","#7fbcf7","#d7deea",c,i,"#d8fa69");function u(){var e=o()(['\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na {\n    text-decoration: none;\n    color: #417db9;\n    background-image: none;\n    text-shadow: none;\n}\n\ncode, pre {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;\n}\n\ncode {\n    background: #b6f1e2;\n    padding: 2px 6px;\n    border-radius: 2px;\n}\n\n',"\n"]);return u=function(){return e},e}Object(r.injectGlobal)(u(),l)},265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=u(r),c=u(n(267)),l=n(252);function u(e){return e&&e.__esModule?e:{default:e}}var d={inlineCode:"code",wrapper:"div"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,r=void 0===o?{}:o,l=e.children,u=e.components,s=void 0===u?{}:u,p=e.Layout,f=e.layoutProps,m=s[n+"."+t]||s[t]||d[t]||t;return p?((0,c.default)(this,p),i.default.createElement(p,a({components:s},f),i.default.createElement(m,r,l))):i.default.createElement(m,r,l)}}]),t}();t.default=(0,l.withMDXComponents)(s)}}]);
//# sourceMappingURL=component---src-pages-docs-getting-started-installation-mdx-c41b0010171ac52f890e.js.map