"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4166],{1335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(5893),i=n(1151);const o={id:"using-with-babel",title:"Using with Babel"},a=void 0,r={id:"guides/using-with-babel",title:"Using with Babel",description:"If you wish to use Babel, you need to say jest to transpile such files manually.",source:"@site/versioned_docs/version-13.0/guides/using-with-babel.md",sourceDirName:"guides",slug:"/guides/using-with-babel",permalink:"/jest-preset-angular/docs/guides/using-with-babel",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-13.0/guides/using-with-babel.md",tags:[],version:"13.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1706778177,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{id:"using-with-babel",title:"Using with Babel"},sidebar:"docs",previous:{title:"Configure other JSDOM versions",permalink:"/jest-preset-angular/docs/guides/jsdom-version"},next:{title:"Absolute Imports",permalink:"/jest-preset-angular/docs/guides/absolute-imports"}},l={},c=[];function d(e){const t={a:"a",code:"code",em:"em",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:["import Tabs from '@theme/Tabs';","\n","import TabItem from '@theme/TabItem';","\n","\n",(0,s.jsxs)(t.p,{children:["If you wish to use ",(0,s.jsx)(t.code,{children:"Babel"}),", you need to say jest to transpile such files manually."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Install dependencies required by the official Jest documentation for ",(0,s.jsx)(t.a,{href:"https://jest-bot.github.io/jest/docs/babel.html",children:"Babel integration"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Install ",(0,s.jsx)(t.code,{children:"@babel/preset-env"})," and add ",(0,s.jsx)(t.code,{children:"babel.config.js"})," (or modify existing if needed) with the following content:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"module.exports = function (api) {\n  api.cache(true);\n\n  const presets = ['@babel/preset-env'];\n  const plugins = [];\n\n  return {\n    presets,\n    plugins,\n  };\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.em,{children:["Note: do not use a ",(0,s.jsx)(t.code,{children:".babelrc"})," file otherwise the packages that you specify in the next step will not be picked up. CF ",(0,s.jsx)(t.a,{href:"https://babeljs.io/docs/en/configuration#what-s-your-use-case",children:"Babel documentation"})," and the comment ",(0,s.jsx)(t.code,{children:"You want to compile node_modules? babel.config.js is for you!"})]}),"."]}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Update Jest configuration (by default TypeScript process untranspiled JS files which is source of the problem):"}),"\n"]}),"\n",'<Tabs groupId="code-examples">',"\n",'<TabItem value="js" label="JavaScript">',"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:"tab",children:"module.exports = {\n  //...\n  transform: {\n    '^.+\\\\.(ts|html)$': 'jest-preset-angular',\n    '^.+\\\\.js$': 'babel-jest',\n  },\n};\n"})}),"\n","</TabItem>","\n",'<TabItem value="ts" label="TypeScript">',"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  transform: {\n    '^.+\\\\.(ts|html)$': 'jest-preset-angular',\n    '^.+\\\\.js$': 'babel-jest',\n  },\n};\n\nexport default jestConfig;\n"})}),"\n","</TabItem>","\n","</Tabs>"]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(7294);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);