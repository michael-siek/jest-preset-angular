"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9932],{1643:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=n(5893),o=n(1151);const r={id:"options",title:"Options"},i=void 0,d={id:"getting-started/options",title:"Options",description:"jest-preset-angular uses ts-jest options under the hood, which are located under the globals of Jest config object",source:"@site/versioned_docs/version-11.0/getting-started/options.md",sourceDirName:"getting-started",slug:"/getting-started/options",permalink:"/jest-preset-angular/docs/11.0/getting-started/options",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-11.0/getting-started/options.md",tags:[],version:"11.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1707511364,formattedLastUpdatedAt:"Feb 9, 2024",frontMatter:{id:"options",title:"Options"},sidebar:"docs",previous:{title:"Presets",permalink:"/jest-preset-angular/docs/11.0/getting-started/presets"},next:{title:"Test environment",permalink:"/jest-preset-angular/docs/11.0/getting-started/test-environment"}},c={},l=[{value:"Exposed configuration",id:"exposed-configuration",level:3},{value:"Brief explanation of config",id:"brief-explanation-of-config",level:3}];function a(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"jest-preset-angular"})," uses ",(0,t.jsx)(s.code,{children:"ts-jest"})," options under the hood, which are located under the ",(0,t.jsx)(s.code,{children:"globals"})," of Jest config object\nin the ",(0,t.jsx)(s.code,{children:"package.json"})," file of your project, or through a ",(0,t.jsx)(s.code,{children:"jest.config.js"}),", or ",(0,t.jsx)(s.code,{children:"jest.config.ts"})," file."]}),"\n",(0,t.jsxs)(s.p,{children:["More information about ",(0,t.jsx)(s.code,{children:"ts-jest"})," options, see ",(0,t.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options",children:"doc"})]}),"\n",(0,t.jsxs)(s.admonition,{type:"important",children:[(0,t.jsxs)(s.p,{children:["Since ",(0,t.jsx)(s.strong,{children:"v9.0.0"}),", ",(0,t.jsx)(s.code,{children:"jest-preset-angular"})," default Jest configuration no longer provides ",(0,t.jsx)(s.code,{children:"moduleNameMapper"}),". If you wish to reuse\nthe old ",(0,t.jsx)(s.code,{children:"moduleNameMapper"})," configuration, you can put this into your Jest config"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"moduleNameMapper: {\n  '^src/(.*)$': '<rootDir>/src/$1',\n  '^app/(.*)$': '<rootDir>/src/app/$1',\n  '^assets/(.*)$': '<rootDir>/src/assets/$1',\n  '^environments/(.*)$': '<rootDir>/src/environments/$1',\n}\n"})})]}),"\n",(0,t.jsx)(s.h3,{id:"exposed-configuration",children:"Exposed configuration"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const snapshotSerializers = require('../build/serializers');\n\nmodule.exports = {\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.(html|svg)$',\n    },\n  },\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',\n  snapshotSerializers,\n  testEnvironment: 'jsdom',\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',\n  },\n};\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsxs)(s.p,{children:["Jest runs with ",(0,t.jsx)(s.code,{children:"jest-preset-angular"})," neither in browser nor through dev server. It uses ",(0,t.jsx)(s.code,{children:"JSDOM"})," to abstract browser environment hence we depend on\n",(0,t.jsx)(s.code,{children:"JSDOM"})," implementation for real browser features."]})}),"\n",(0,t.jsx)(s.h3,{id:"brief-explanation-of-config",children:"Brief explanation of config"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["we're using some ",(0,t.jsx)(s.code,{children:'"globals"'})," to pass information about where our tsconfig.json file is that we'd like to be able to transform HTML files through ",(0,t.jsx)(s.code,{children:"ts-jest"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'"moduleFileExtensions"'})," \u2013 our modules are TypeScript (",(0,t.jsx)(s.code,{children:"ts"}),"), HTML (",(0,t.jsx)(s.code,{children:"html"}),"), JavaScript (",(0,t.jsx)(s.code,{children:"js"}),"), JSON (",(0,t.jsx)(s.code,{children:"json"}),") and ESM JavaScript (",(0,t.jsx)(s.code,{children:"mjs"}),") files."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'"moduleNameMapper"'})," \u2013 if you're using absolute imports here's how to tell Jest where to look for them; uses ",(0,t.jsx)(s.code,{children:"RegExp"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'"resolver"'})," - instruct Jest how to resolve entry file based on ",(0,t.jsx)(s.code,{children:"package.json"})," definitions."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'"snapshotSerializers"'})," - array of serializers which will be applied to snapshot the code. Note: by default angular adds\nsome angular-specific attributes to the code (like ",(0,t.jsx)(s.code,{children:"ng-reflect-*"}),", ",(0,t.jsx)(s.code,{children:'ng-version="*"'}),", ",(0,t.jsx)(s.code,{children:"_ngcontent-c*"})," etc).\nThis package provides serializer to remove such attributes. This makes snapshots cleaner and more human-readable.\nTo remove such specific attributes use ",(0,t.jsx)(s.code,{children:"no-ng-attributes"})," serializer. You need to add ",(0,t.jsx)(s.code,{children:"no-ng-attributes"})," serializer manually."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'"testEnvironment"'})," \u2013 the test environment to run on."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'"transformIgnorePatterns"'}),": instruct Jest to transform any ",(0,t.jsx)(s.code,{children:".mjs"})," files which come from ",(0,t.jsx)(s.code,{children:"node_modules"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:'"transform"'})," \u2013 run every ",(0,t.jsx)(s.code,{children:"TS"}),", ",(0,t.jsx)(s.code,{children:"JS"}),", ",(0,t.jsx)(s.code,{children:"MJS"}),", ",(0,t.jsx)(s.code,{children:"HTML"}),", or ",(0,t.jsx)(s.code,{children:"SVG"})," file through so called ",(0,t.jsx)(s.em,{children:"Jest transformer"}),"; this lets Jest understand non-JS syntax."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>i});var t=n(7294);const o={},r=t.createContext(o);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);