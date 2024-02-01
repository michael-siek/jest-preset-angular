"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4887],{7007:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var n=s(5893),o=s(1151);const r={id:"absolute-imports",title:"Absolute Imports"},i=void 0,a={id:"guides/absolute-imports",title:"Absolute Imports",description:"TypeScript supports absolute imports. The preset (starting from v3.0.0) by default understands absolute imports referring to src, app, assets and environments directory, so instead:",source:"@site/versioned_docs/version-8.x/guides/absolute-imports.md",sourceDirName:"guides",slug:"/guides/absolute-imports",permalink:"/jest-preset-angular/docs/8.x/guides/absolute-imports",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-8.x/guides/absolute-imports.md",tags:[],version:"8.x",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1706778177,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{id:"absolute-imports",title:"Absolute Imports"},sidebar:"docs",previous:{title:"Using with Babel",permalink:"/jest-preset-angular/docs/8.x/guides/using-with-babel"},next:{title:"Troubleshooting",permalink:"/jest-preset-angular/docs/8.x/guides/troubleshooting"}},d={},p=[];function c(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["TypeScript supports absolute imports. The preset (starting from v3.0.0) by default understands absolute imports referring to ",(0,n.jsx)(t.code,{children:"src"}),", ",(0,n.jsx)(t.code,{children:"app"}),", ",(0,n.jsx)(t.code,{children:"assets"})," and ",(0,n.jsx)(t.code,{children:"environments"})," directory, so instead:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import MyComponent from '../../src/app/my.component';\nimport MyStuff from '../../src/testing/my.stuff';\n"})}),"\n",(0,n.jsx)(t.p,{children:"you can use:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import MyComponent from 'app/my.component';\nimport MyStuff from 'src/testing/my.stuff';\n"})}),"\n",(0,n.jsxs)(t.p,{children:["However, if your directory structure differ from that provided by ",(0,n.jsx)(t.code,{children:"angular-cli"})," you can adjust ",(0,n.jsx)(t.code,{children:"moduleNameMapper"})," in Jest config:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json5",children:"{\n  jest: {\n    moduleNameMapper: {\n      'app/(.*)': '<rootDir>/src/to/app/$1', // override default, why not\n      'testing/(.*)': '<rootDir>/app/testing/$1', // add new mapping\n    },\n  },\n}\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:["If you wish to use any absolute import paths which are defined in ",(0,n.jsx)(t.code,{children:"paths"})," of your tsconfig, make sure that you create the\nsimilar mapping for ",(0,n.jsx)(t.code,{children:"moduleNameMapper"})," in Jest config"]})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>i});var n=s(7294);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);