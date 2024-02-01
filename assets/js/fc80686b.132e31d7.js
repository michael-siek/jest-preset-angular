"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1752],{5349:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=s(5893),r=s(1151);const a={id:"presets",title:"Presets"},o=void 0,i={id:"getting-started/presets",title:"Presets",description:"The presets",source:"@site/docs/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/jest-preset-angular/docs/next/getting-started/presets",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/getting-started/presets.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1706778177,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{id:"presets",title:"Presets"},sidebar:"docs",previous:{title:"Installation",permalink:"/jest-preset-angular/docs/next/getting-started/installation"},next:{title:"Options",permalink:"/jest-preset-angular/docs/next/getting-started/options"}},d={},l=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}];function c(e){const t={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:["import Tabs from '@theme/Tabs';","\n","import TabItem from '@theme/TabItem';","\n","\n",(0,n.jsx)(t.h3,{id:"the-presets",children:"The presets"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"jest-preset-angular"})," comes with 2 presets, covering most of the project's base configuration:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Preset name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"jest-preset-angular/presets/default"}),(0,n.jsx)("br",{}),"or ",(0,n.jsx)(t.code,{children:"jest-preset-angular"})]}),(0,n.jsxs)(t.td,{children:["TypeScript, JavaScript and HTML files (",(0,n.jsx)(t.code,{children:"js"}),", ",(0,n.jsx)(t.code,{children:".ts"}),", ",(0,n.jsx)(t.code,{children:".html"}),") will be transformed by ",(0,n.jsx)(t.code,{children:"jest-preset-angular"})," to ",(0,n.jsx)(t.strong,{children:"CommonJS"})," syntax."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"jest-preset-angular/presets/defaults-esm"}),(0,n.jsx)("br",{})]}),(0,n.jsxs)(t.td,{children:["TypeScript, JavaScript and HTML files (",(0,n.jsx)(t.code,{children:"js"}),", ",(0,n.jsx)(t.code,{children:".ts"}),", ",(0,n.jsx)(t.code,{children:".html"}),") will be transformed by ",(0,n.jsx)(t.code,{children:"jest-preset-angular"})," to ",(0,n.jsx)(t.strong,{children:"ESM"})," syntax."]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,n.jsxs)(t.p,{children:["In most cases, simply setting the ",(0,n.jsx)(t.code,{children:"preset"})," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,n.jsx)(t.code,{children:"jest-preset-angular"})," to your ",(0,n.jsx)(t.code,{children:"devDependencies"})," of course):"]}),"\n",'<Tabs groupId="code-examples">',"\n",'<TabItem value="js" label="JavaScript">',"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"module.exports = {\n  // [...]\n  // Replace `jest-preset-angular` with the preset you want to use\n  // from the above list\n  preset: 'jest-preset-angular',\n};\n"})}),"\n","</TabItem>","\n",'<TabItem value="ts" label="TypeScript">',"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // [...]\n  // Replace `jest-preset-angular` with the preset you want to use\n  // from the above list\n  preset: 'jest-preset-angular',\n};\n\nexport default jestConfig;\n"})}),"\n","</TabItem>","\n",'<TabItem value="JSON">',"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'{\n  //...\n  "jest": {\n    // Replace `jest-preset-angular` with the preset you want to use\n    // from the above list\n    "preset": "jest-preset-angular"\n  }\n}\n'})}),"\n","</TabItem>","\n","</Tabs>","\n",(0,n.jsx)(t.h3,{id:"advanced",children:"Advanced"}),"\n",(0,n.jsxs)(t.p,{children:["All presets come with default ",(0,n.jsx)(t.code,{children:"ts-jest"})," config options.\nIf you want to override any of the options, you'll need to use the JavaScript version of Jest config,\ncopy the original options and override the options you need:"]}),"\n",(0,n.jsx)(t.admonition,{type:"important",children:(0,n.jsxs)(t.p,{children:["If you choose to override ",(0,n.jsx)(t.code,{children:"transform"})," in order to point at a specific tsconfig, you will need to make sure that original ",(0,n.jsx)(t.code,{children:"ts-jest"}),"\noptions provided through the default preset are defined to the ",(0,n.jsx)(t.code,{children:"transform"})," section too, otherwise you will get\nerrors."]})}),"\n",'<Tabs groupId="code-examples">',"\n",'<TabItem value="js" label="JavaScript">',"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"const { defaultTransformerOptions } = require('jest-preset-angular/presets');\n// const { defaultTransformerOptions } = require('jest-preset-angular/presets')\n\nmodule.exports = {\n  // [...]\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': [\n      'jest-preset-angular',\n      {\n        ...defaultTransformerOptions,\n        // [...your overriden options]\n      },\n    ],\n  },\n};\n"})}),"\n","</TabItem>","\n",'<TabItem value="ts" label="TypeScript">',"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"import type { Config } from 'jest';\nimport presets from 'jest-preset-angular/presets';\n\nconst jestConfig: Config = {\n  // [...]\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': [\n      'jest-preset-angular',\n      {\n        ...presets.defaultTransformerOptions,\n        // [...your overriden options]\n      },\n    ],\n  },\n};\n\nexport default jestConfig;\n"})}),"\n","</TabItem>","\n","</Tabs>"]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var n=s(7294);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);