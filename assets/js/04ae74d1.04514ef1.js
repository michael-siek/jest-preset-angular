"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8677],{5142:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=s(5893),r=s(1151),a=s(3992),o=s(425);const l={id:"presets",title:"Presets"},i=void 0,c={id:"getting-started/presets",title:"Presets",description:"The presets",source:"@site/versioned_docs/version-12.0/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/jest-preset-angular/docs/12.0/getting-started/presets",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-12.0/getting-started/presets.md",tags:[],version:"12.0",lastUpdatedBy:"Anh Pham",lastUpdatedAt:1707652271,formattedLastUpdatedAt:"Feb 11, 2024",frontMatter:{id:"presets",title:"Presets"},sidebar:"docs",previous:{title:"Installation",permalink:"/jest-preset-angular/docs/12.0/getting-started/installation"},next:{title:"Options",permalink:"/jest-preset-angular/docs/12.0/getting-started/options"}},u={},d=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}];function p(e){const t={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"the-presets",children:"The presets"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"jest-preset-angular"})," comes with 2 presets, covering most of the project's base configuration:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Preset name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"jest-preset-angular/presets/default"}),(0,n.jsx)("br",{}),"or ",(0,n.jsx)(t.code,{children:"jest-preset-angular"})]}),(0,n.jsxs)(t.td,{children:["TypeScript, JavaScript and HTML files (",(0,n.jsx)(t.code,{children:"js"}),", ",(0,n.jsx)(t.code,{children:".ts"}),", ",(0,n.jsx)(t.code,{children:".html"}),") will be transformed by ",(0,n.jsx)(t.code,{children:"jest-preset-angular"})," to ",(0,n.jsx)(t.strong,{children:"CommonJS"})," syntax."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"jest-preset-angular/presets/defaults-esm"}),(0,n.jsx)("br",{})]}),(0,n.jsxs)(t.td,{children:["TypeScript, JavaScript and HTML files (",(0,n.jsx)(t.code,{children:"js"}),", ",(0,n.jsx)(t.code,{children:".ts"}),", ",(0,n.jsx)(t.code,{children:".html"}),") will be transformed by ",(0,n.jsx)(t.code,{children:"jest-preset-angular"})," to ",(0,n.jsx)(t.strong,{children:"ESM"})," syntax."]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,n.jsxs)(t.p,{children:["In most cases, simply setting the ",(0,n.jsx)(t.code,{children:"preset"})," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,n.jsx)(t.code,{children:"jest-preset-angular"})," to your ",(0,n.jsx)(t.code,{children:"devDependencies"})," of course):"]}),"\n",(0,n.jsxs)(a.Z,{groupId:"code-examples",children:[(0,n.jsx)(o.Z,{value:"js",label:"JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"module.exports = {\n  // [...]\n  // Replace `jest-preset-angular` with the preset you want to use\n  // from the above list\n  preset: 'jest-preset-angular',\n};\n"})})}),(0,n.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // [...]\n  // Replace `jest-preset-angular` with the preset you want to use\n  // from the above list\n  preset: 'jest-preset-angular',\n};\n\nexport default jestConfig;\n"})})}),(0,n.jsx)(o.Z,{value:"JSON",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'{\n  //...\n  "jest": {\n    // Replace `jest-preset-angular` with the preset you want to use\n    // from the above list\n    "preset": "jest-preset-angular"\n  }\n}\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"advanced",children:"Advanced"}),"\n",(0,n.jsxs)(t.p,{children:["All presets come with default ",(0,n.jsx)(t.code,{children:"ts-jest"})," config options.\nIf you want to override any of the options, you'll need to use the JavaScript version of Jest config,\ncopy the original options and override the options you need:"]}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:["If you choose to override ",(0,n.jsx)(t.code,{children:"globals"})," in order to point at a specific tsconfig, you will need to make sure that original ",(0,n.jsx)(t.code,{children:"ts-jest"}),"\noptions provided through the default preset are defined to the ",(0,n.jsx)(t.code,{children:"globals.ts-jest"})," section too, otherwise you will get\nerrors."]})}),"\n",(0,n.jsxs)(a.Z,{groupId:"code-examples",children:[(0,n.jsx)(o.Z,{value:"js",label:"JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"const { defaults: jestNgPreset } = require('jest-preset-angular/presets');\n// const { defaultsESM: jestNgPreset } = require('jest-preset-angular/presets')\n\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      ...jestNgPreset.globals['ts-jest'],\n      // [...your overriden options]\n    },\n  },\n};\n"})})}),(0,n.jsx)(o.Z,{value:"ts",label:"TypeScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\nimport presets from 'jest-preset-angular/presets';\n\nconst jestConfig: Config = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      ...presets.defaults.globals['ts-jest'],\n      // [...your overriden options]\n    },\n  },\n};\n\nexport default jestConfig;\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},425:(e,t,s)=>{s.d(t,{Z:()=>o});s(7294);var n=s(512);const r={tabItem:"tabItem_Ymn6"};var a=s(5893);function o(e){let{children:t,hidden:s,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,o),hidden:s,children:t})}},3992:(e,t,s)=>{s.d(t,{Z:()=>w});var n=s(7294),r=s(512),a=s(2957),o=s(6550),l=s(1270),i=s(5238),c=s(3609),u=s(2560);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:s}=e;const r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,i._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function j(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=g({queryString:s,groupId:r}),[j,f]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),m=(()=>{const e=c??j;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=s(1048);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(5893);function x(e){let{className:t,block:s,selectedValue:n,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,s=i.indexOf(t),r=l[s].value;r!==n&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;t=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;t=i[s]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(x,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function w(e){const t=(0,f.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>o});var n=s(7294);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);