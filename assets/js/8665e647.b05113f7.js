"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7983],{8613:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=t(5893),i=t(1151);const o={id:"installation",title:"Installation"},r=void 0,l={id:"getting-started/installation",title:"Installation",description:"Dependencies",source:"@site/versioned_docs/version-11.1/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/jest-preset-angular/docs/11.1/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-11.1/getting-started/installation.md",tags:[],version:"11.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1707664432,formattedLastUpdatedAt:"Feb 11, 2024",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Processing flow",permalink:"/jest-preset-angular/docs/11.1/processing"},next:{title:"Presets",permalink:"/jest-preset-angular/docs/11.1/getting-started/presets"}},a={},c=[{value:"Dependencies",id:"dependencies",level:3},{value:"NPM",id:"npm",level:4},{value:"Yarn",id:"yarn",level:4},{value:"Configuration",id:"configuration",level:3},{value:"Customizing",id:"customizing",level:3},{value:"Global mocks",id:"global-mocks",level:4},{value:"Avoid karma conflicts",id:"avoid-karma-conflicts",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(n.p,{children:["You can install ",(0,s.jsx)(n.code,{children:"jest-preset-angular"})," and dependencies all at once with one of the following commands."]}),"\n",(0,s.jsx)(n.h4,{id:"npm",children:"NPM"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm install -D jest jest-preset-angular @types/jest\n"})}),"\n",(0,s.jsx)(n.h4,{id:"yarn",children:"Yarn"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yarn add -D jest jest-preset-angular @types/jest\n"})}),"\n",(0,s.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["Angular doesn't support native ",(0,s.jsx)(n.code,{children:"async/await"})," in testing with ",(0,s.jsx)(n.code,{children:"target"})," higher than ",(0,s.jsx)(n.code,{children:"ES2016"}),", see ",(0,s.jsx)(n.a,{href:"https://github.com/angular/components/issues/21632#issuecomment-764975917",children:"https://github.com/angular/components/issues/21632#issuecomment-764975917"})]})}),"\n",(0,s.jsxs)(n.p,{children:["In your project root, create ",(0,s.jsx)(n.code,{children:"setup-jest.ts"})," file with following contents:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import 'jest-preset-angular/setup-jest';\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add the following section:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["to your root ",(0,s.jsx)(n.code,{children:"jest.config.js"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  preset: 'jest-preset-angular',\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n  globalSetup: 'jest-preset-angular/global-setup',\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["or to your root ",(0,s.jsx)(n.code,{children:"package.json"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jest": {\n    "preset": "jest-preset-angular",\n    "setupFilesAfterEnv": ["<rootDir>/setup-jest.ts"],\n    "globalSetup": "jest-preset-angular/global-setup"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Adjust your ",(0,s.jsx)(n.code,{children:"tsconfig.spec.json"})," to be:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "outDir": "./out-tsc/spec",\n    "module": "CommonJs",\n    "types": ["jest"]\n  },\n  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"customizing",children:"Customizing"}),"\n",(0,s.jsx)(n.h4,{id:"global-mocks",children:"Global mocks"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"jest-preset-angular"})," uses ",(0,s.jsx)(n.code,{children:"JSDOM"})," which is different from normal browsers. You might need some global browser mocks to\nsimulate the behaviors of real browsers in ",(0,s.jsx)(n.code,{children:"JSDOM"}),". To add global mocks, you can do the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a file ",(0,s.jsx)(n.code,{children:"jest-global-mocks.ts"})," to your root project."]}),"\n",(0,s.jsx)(n.li,{children:"Import it in your global setup file:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Assuming that your global setup file is setup-jest.ts\nimport 'jest-preset-angular/setup-jest';\nimport './jest-global-mocks';\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["An example for ",(0,s.jsx)(n.code,{children:"jest-global-mocks.ts"})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Object.defineProperty(window, 'CSS', { value: null });\nObject.defineProperty(document, 'doctype', {\n  value: '<!DOCTYPE html>',\n});\nObject.defineProperty(window, 'getComputedStyle', {\n  value: () => {\n    return {\n      display: 'none',\n      appearance: ['-webkit-appearance'],\n    };\n  },\n});\n/**\n * ISSUE: https://github.com/angular/material2/issues/7101\n * Workaround for JSDOM missing transform property\n */\nObject.defineProperty(document.body.style, 'transform', {\n  value: () => {\n    return {\n      enumerable: true,\n      configurable: true,\n    };\n  },\n});\n"})})]}),"\n",(0,s.jsx)(n.h4,{id:"avoid-karma-conflicts",children:"Avoid karma conflicts"}),"\n",(0,s.jsxs)(n.p,{children:["By Angular CLI defaults you'll have a ",(0,s.jsx)(n.code,{children:"src/test.ts"})," file which will be picked up by jest. To circumvent this you can either rename it to ",(0,s.jsx)(n.code,{children:"src/karmaTest.ts"})," or hide it from jest by adding ",(0,s.jsx)(n.code,{children:"<rootDir>/src/test.ts"})," to jest ",(0,s.jsx)(n.code,{children:"testPathIgnorePatterns"})," option."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);