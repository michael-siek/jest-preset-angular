"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3334],{1645:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=t(5893),r=t(1151),o=t(3992),i=t(425);const a={id:"options",title:"Options"},l=void 0,c={id:"getting-started/options",title:"Options",description:"jest-preset-angular uses ts-jest options under the hood, which are located under the transform of Jest config object",source:"@site/versioned_docs/version-13.0/getting-started/options.md",sourceDirName:"getting-started",slug:"/getting-started/options",permalink:"/jest-preset-angular/docs/getting-started/options",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-13.0/getting-started/options.md",tags:[],version:"13.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1707511364,formattedLastUpdatedAt:"Feb 9, 2024",frontMatter:{id:"options",title:"Options"},sidebar:"docs",previous:{title:"Presets",permalink:"/jest-preset-angular/docs/getting-started/presets"},next:{title:"Test environment",permalink:"/jest-preset-angular/docs/getting-started/test-environment"}},d={},u=[{value:"Processing with esbuild",id:"processing-with-esbuild",level:3},{value:"Exposed configuration",id:"exposed-configuration",level:3},{value:"Brief explanation of config",id:"brief-explanation-of-config",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"jest-preset-angular"})," uses ",(0,s.jsx)(n.code,{children:"ts-jest"})," options under the hood, which are located under the ",(0,s.jsx)(n.code,{children:"transform"})," of Jest config object\nin the ",(0,s.jsx)(n.code,{children:"package.json"})," file of your project, or through a ",(0,s.jsx)(n.code,{children:"jest.config.js"}),", or ",(0,s.jsx)(n.code,{children:"jest.config.ts"})," file."]}),"\n",(0,s.jsxs)(n.p,{children:["More information about ",(0,s.jsx)(n.code,{children:"ts-jest"})," options, see ",(0,s.jsx)(n.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options",children:"doc"})]}),"\n",(0,s.jsxs)(n.admonition,{type:"important",children:[(0,s.jsxs)(n.p,{children:["Since ",(0,s.jsx)(n.strong,{children:"v9.0.0"}),", ",(0,s.jsx)(n.code,{children:"jest-preset-angular"})," default Jest configuration no longer provides ",(0,s.jsx)(n.code,{children:"moduleNameMapper"}),". If you wish to reuse\nthe old ",(0,s.jsx)(n.code,{children:"moduleNameMapper"})," configuration, you can put this into your Jest config."]}),(0,s.jsxs)(o.Z,{groupId:"code-examples",children:[(0,s.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"tab",children:"module.exports = {\n  //...\n  moduleNameMapper: {\n    '^src/(.*)$': '<rootDir>/src/$1',\n    '^app/(.*)$': '<rootDir>/src/app/$1',\n    '^assets/(.*)$': '<rootDir>/src/assets/$1',\n    '^environments/(.*)$': '<rootDir>/src/environments/$1',\n  },\n};\n"})})}),(0,s.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  moduleNameMapper: {\n    '^src/(.*)$': '<rootDir>/src/$1',\n    '^app/(.*)$': '<rootDir>/src/app/$1',\n    '^assets/(.*)$': '<rootDir>/src/assets/$1',\n    '^environments/(.*)$': '<rootDir>/src/environments/$1',\n  },\n};\n\nexport default jestConfig;\n"})})})]}),(0,s.jsx)(n.h3,{id:"processing-with-esbuild",children:"Processing with esbuild"}),(0,s.jsxs)(n.p,{children:["Since ",(0,s.jsx)(n.strong,{children:"v11.0.0"}),", ",(0,s.jsx)(n.code,{children:"jest-preset-angular"})," introduced the usage of ",(0,s.jsx)(n.code,{children:"esbuild"})," to process files besides TypeScript API. By default, all ",(0,s.jsx)(n.code,{children:".mjs"})," files\nwill be processed by ",(0,s.jsx)(n.code,{children:"esbuild"})," in ",(0,s.jsx)(n.code,{children:"jest-preset-angular"}),". To configure extra files to process with ",(0,s.jsx)(n.code,{children:"esbuild"}),", one can do the following:"]}),(0,s.jsxs)(o.Z,{groupId:"code-examples",children:[(0,s.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"tab",children:"module.exports = {\n  //...\n  globals: {\n    ngJest: {\n      processWithEsbuild: [<glob_to_files>],\n    },\n  },\n}\n"})})}),(0,s.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  globals: {\n    ngJest: {\n      processWithEsbuild: [<glob_to_files>],\n    },\n  },\n}\n\nexport default jestConfig;\n"})})})]})]}),"\n",(0,s.jsx)(n.h3,{id:"exposed-configuration",children:"Exposed configuration"}),"\n",(0,s.jsxs)(o.Z,{groupId:"code-examples",children:[(0,s.jsx)(i.Z,{value:"js",label:"JavaScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"tab",children:"const snapshotSerializers = require('../build/serializers');\n\nmodule.exports = {\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',\n  snapshotSerializers,\n  testEnvironment: 'jsdom',\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': [\n      'jest-preset-angular',\n      {\n        tsconfig: '<rootDir>/tsconfig.spec.json',\n        stringifyContentPathRegex: '\\\\.(html|svg)$',\n      },\n    ],\n  },\n};\n"})})}),(0,s.jsx)(i.Z,{value:"ts",label:"TypeScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\nimport snapshotSerializers from 'jest-preset-angular/build/serializers';\n\nconst jestConfig: Config = {\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',\n  snapshotSerializers,\n  testEnvironment: 'jsdom',\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': [\n      'jest-preset-angular',\n      {\n        tsconfig: '<rootDir>/tsconfig.spec.json',\n        stringifyContentPathRegex: '\\\\.(html|svg)$',\n      },\n    ],\n  },\n};\n\nexport default jestConfig;\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["Jest runs with ",(0,s.jsx)(n.code,{children:"jest-preset-angular"})," neither in browser nor through dev server. It uses ",(0,s.jsx)(n.code,{children:"JSDOM"})," to abstract browser environment hence we depend on\n",(0,s.jsx)(n.code,{children:"JSDOM"})," implementation for real browser features."]})}),"\n",(0,s.jsx)(n.h3,{id:"brief-explanation-of-config",children:"Brief explanation of config"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We're using ",(0,s.jsx)(n.code,{children:'"transform"'})," to pass information about configuration to use for code compilation with ",(0,s.jsx)(n.code,{children:"ts-jest"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"moduleFileExtensions"'})," \u2013 our modules are TypeScript (",(0,s.jsx)(n.code,{children:"ts"}),"), HTML (",(0,s.jsx)(n.code,{children:"html"}),"), JavaScript (",(0,s.jsx)(n.code,{children:"js"}),"), JSON (",(0,s.jsx)(n.code,{children:"json"}),") and ESM JavaScript (",(0,s.jsx)(n.code,{children:"mjs"}),") files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"moduleNameMapper"'})," \u2013 if you're using absolute imports here's how to tell Jest where to look for them; uses ",(0,s.jsx)(n.code,{children:"RegExp"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"resolver"'})," - instruct Jest how to resolve entry file based on ",(0,s.jsx)(n.code,{children:"package.json"})," definitions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"snapshotSerializers"'})," - array of serializers which will be applied to snapshot the code. Note: by default angular adds\nsome angular-specific attributes to the code (like ",(0,s.jsx)(n.code,{children:"ng-reflect-*"}),", ",(0,s.jsx)(n.code,{children:'ng-version="*"'}),", ",(0,s.jsx)(n.code,{children:"_ngcontent-c*"})," etc).\nThis package provides serializer to remove such attributes. This makes snapshots cleaner and more human-readable.\nTo remove such specific attributes use ",(0,s.jsx)(n.code,{children:"no-ng-attributes"})," serializer. You need to add ",(0,s.jsx)(n.code,{children:"no-ng-attributes"})," serializer manually."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"testEnvironment"'})," \u2013 the test environment to run on."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"transformIgnorePatterns"'}),": instruct Jest to transform any ",(0,s.jsx)(n.code,{children:".mjs"})," files which come from ",(0,s.jsx)(n.code,{children:"node_modules"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"transform"'})," \u2013 run every ",(0,s.jsx)(n.code,{children:"TS"}),", ",(0,s.jsx)(n.code,{children:"JS"}),", ",(0,s.jsx)(n.code,{children:"MJS"}),", ",(0,s.jsx)(n.code,{children:"HTML"}),", or ",(0,s.jsx)(n.code,{children:"SVG"})," file through so called ",(0,s.jsx)(n.em,{children:"Jest transformer"}),"; this lets Jest understand non-JS syntax."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},425:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var s=t(512);const r={tabItem:"tabItem_Ymn6"};var o=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:t,children:n})}},3992:(e,n,t)=>{t.d(n,{Z:()=>w});var s=t(7294),r=t(512),o=t(2957),i=t(6550),a=t(1270),l=t(5238),c=t(3609),d=t(2560);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:r}),[j,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=c??j;return p({value:e,tabValues:o})?e:null})();(0,a.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=t(1048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function b(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==s&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=j(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(b,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(7294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);