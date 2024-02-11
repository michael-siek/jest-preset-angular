"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3789],{5289:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=s(5893),i=s(1151);const o={id:"using-with-babel",title:"Using with Babel"},r=void 0,l={id:"guides/using-with-babel",title:"Using with Babel",description:"If you wish to use Babel, you need to say jest to transpile such files manually.",source:"@site/versioned_docs/version-10.x/guides/using-with-babel.md",sourceDirName:"guides",slug:"/guides/using-with-babel",permalink:"/jest-preset-angular/docs/10.x/guides/using-with-babel",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-10.x/guides/using-with-babel.md",tags:[],version:"10.x",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1707664432,formattedLastUpdatedAt:"Feb 11, 2024",frontMatter:{id:"using-with-babel",title:"Using with Babel"},sidebar:"docs",previous:{title:"Configure other JSDOM versions",permalink:"/jest-preset-angular/docs/10.x/guides/jsdom-version"},next:{title:"Absolute Imports",permalink:"/jest-preset-angular/docs/10.x/guides/absolute-imports"}},a={},d=[];function c(e){const t={a:"a",code:"code",em:"em",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["If you wish to use ",(0,n.jsx)(t.code,{children:"Babel"}),", you need to say jest to transpile such files manually."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Install dependencies required by the official Jest documentation for ",(0,n.jsx)(t.a,{href:"https://jest-bot.github.io/jest/docs/babel.html",children:"Babel integration"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Install ",(0,n.jsx)(t.code,{children:"@babel/preset-env"})," and add ",(0,n.jsx)(t.code,{children:"babel.config.js"})," (or modify existing if needed) with the following content:"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"module.exports = function (api) {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = [];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.em,{children:["Note: do not use a ",(0,n.jsx)(t.code,{children:".babelrc"})," file otherwise the packages that you specify in the next step will not be picked up. CF ",(0,n.jsx)(t.a,{href:"https://babeljs.io/docs/en/configuration#what-s-your-use-case",children:"Babel documentation"})," and the comment ",(0,n.jsx)(t.code,{children:"You want to compile node_modules? babel.config.js is for you!"})]}),"."]}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:"Update Jest configuration (by default TypeScript process untranspiled JS files which is source of the problem):"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"module.exports = {\n  transform: {\n    '^.+\\\\.(ts|html)$': 'jest-preset-angular',\n    '^.+\\\\.js$': 'babel-jest',\n  },\n};\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>r});var n=s(7294);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);