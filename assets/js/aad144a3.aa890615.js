"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1086],{2959:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(5893),t=n(1151);const i={id:"angular-13+",title:"Angular >=13"},o=void 0,a={id:"guides/angular-13+",title:"Angular >=13",description:"Angular 13 introduces ESM package format for Angular packages. jest-preset-angular",source:"@site/versioned_docs/version-11.1/guides/angular-13+.md",sourceDirName:"guides",slug:"/guides/angular-13+",permalink:"/jest-preset-angular/docs/11.1/guides/angular-13+",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-11.1/guides/angular-13+.md",tags:[],version:"11.1",lastUpdatedBy:"Paul Gschwendtner",lastUpdatedAt:1707513882,formattedLastUpdatedAt:"Feb 9, 2024",frontMatter:{id:"angular-13+",title:"Angular >=13"},sidebar:"docs",previous:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/11.1/guides/angular-ivy"},next:{title:"ESM Support",permalink:"/jest-preset-angular/docs/11.1/guides/esm-support"}},l={},d=[{value:"Migration steps from Angular &lt; 13",id:"migration-steps-from-angular--13",level:2},{value:"Using ES Modules",id:"using-es-modules",level:3},{value:"Potential issues with Angular 13 ESM package format and workaround",id:"potential-issues-with-angular-13-esm-package-format-and-workaround",level:2},{value:"<code>Cannot find modules</code> error when importing any deep paths from Angular ESM format packages",id:"cannot-find-modules-error-when-importing-any-deep-paths-from-angular-esm-format-packages",level:3},{value:"Usage with Angular libraries which are built with Angular CLI 13",id:"usage-with-angular-libraries-which-are-built-with-angular-cli-13",level:3}];function c(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Angular 13"})," introduces ESM package format for Angular packages. ",(0,r.jsx)(s.code,{children:"jest-preset-angular"}),"\ncurrently supports testing with Jest in ",(0,r.jsx)(s.code,{children:"CommonJS"})," mode with ",(0,r.jsx)(s.strong,{children:"Angular 13"})," using ",(0,r.jsx)(s.a,{href:"/jest-preset-angular/docs/11.1/getting-started/presets",children:"default preset"}),".\nJest ESM support with ",(0,r.jsx)(s.strong,{children:"Angular 13"})," is new and may have issues."]}),"\n",(0,r.jsxs)(s.p,{children:["Starting from ",(0,r.jsx)(s.strong,{children:"v11.0.0"}),", ",(0,r.jsx)(s.code,{children:"jest-preset-angular"})," introduces a few extra changes to be able to run Jest with ",(0,r.jsx)(s.strong,{children:"Angular 13"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ng-jest-resolver"})," is introduced as a custom Jest resolver to resolve ",(0,r.jsx)(s.code,{children:".mjs"})," files."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"moduleFileExtensions"})," is updated to include ",(0,r.jsx)(s.code,{children:"mjs"})," files as accepted module format."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"transformIgnorePatterns"})," is added to inform Jest to transform ",(0,r.jsx)(s.code,{children:".mjs"})," files."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"transform"})," is updated to include ",(0,r.jsx)(s.code,{children:".mjs"})," extension to transform to ",(0,r.jsx)(s.code,{children:"CommonJS"})," codes."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"migration-steps-from-angular--13",children:"Migration steps from Angular < 13"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Upgrade the project to ",(0,r.jsx)(s.strong,{children:"Angular 13"})," following ",(0,r.jsx)(s.a,{href:"https://update.angular.io/",children:"guide"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"If one is using the default preset as following:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  preset: 'jest-preset-angular',\n};\n"})}),"\n",(0,r.jsx)(s.p,{children:"there are no migration steps required"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["If one is ",(0,r.jsx)(s.strong,{children:"NOT"})," having ",(0,r.jsx)(s.code,{children:"preset: 'jest-preset-angular'"})," in Jest config, the config needs to be updated with new values for\n",(0,r.jsx)(s.code,{children:"resolver"}),", ",(0,r.jsx)(s.code,{children:"transformIgnorePatterns"})," and ",(0,r.jsx)(s.code,{children:"transform"}),":"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // ...other options\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',\n  },\n};\n"})}),"\n",(0,r.jsx)(s.h3,{id:"using-es-modules",children:"Using ES Modules"}),"\n",(0,r.jsxs)(s.p,{children:["ES Modules support is new and may encounter issues. See ",(0,r.jsx)(s.a,{href:"https://github.com/thymikee/jest-preset-angular/tree/main/examples/example-app-v13",children:"example-app-v13"})," for an example with tests that run using ESM, and using ESM + isolated."]}),"\n",(0,r.jsxs)(s.p,{children:["Your ",(0,r.jsx)(s.code,{children:"jest.config.js"})," should be changed to something like:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"const { pathsToModuleNameMapper } = require('ts-jest/utils');\nconst { paths } = require('./tsconfig.json').compilerOptions;\n\n/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */\nmodule.exports = {\n  preset: 'jest-preset-angular/presets/defaults-esm',\n  globals: {\n    'ts-jest': {\n      useESM: true,\n      stringifyContentPathRegex: '\\\\.(html|svg)$',\n      tsconfig: '<rootDir>/tsconfig-esm.spec.json',\n    },\n  },\n  moduleNameMapper: {\n    ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),\n    tslib: 'tslib/tslib.es6.js',\n  },\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n};\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Before upgrading to ng13 and switching to ES Modules, your ",(0,r.jsx)(s.code,{children:"setup-jest.ts"})," file most likely uses the preset ",(0,r.jsx)(s.code,{children:"setup-jest"}),", like the following:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"// setup-jest.ts\nimport 'jest-preset-angular/setup-jest';\nimport './jest-global-mocks';\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"jest-preset-angular/setup-jest"})," file doesn't work with ESM, because it uses ",(0,r.jsx)(s.code,{children:"require"}),". For now you should skip using this file, and replace the contents of your ",(0,r.jsx)(s.code,{children:"setup-jest.ts"})," with:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"// setup-jest.ts\nimport 'zone.js';\nimport 'zone.js/testing';\nimport './jest-global-mocks';\n\nimport { getTestBed } from '@angular/core/testing';\nimport { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';\n\ngetTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), {\n  teardown: {\n    destroyAfterEach: true, // Angular recommends this, but it may break existing tests\n  },\n});\ngetTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());\n"})}),"\n",(0,r.jsx)(s.h2,{id:"potential-issues-with-angular-13-esm-package-format-and-workaround",children:"Potential issues with Angular 13 ESM package format and workaround"}),"\n",(0,r.jsxs)(s.h3,{id:"cannot-find-modules-error-when-importing-any-deep-paths-from-angular-esm-format-packages",children:[(0,r.jsx)(s.code,{children:"Cannot find modules"})," error when importing any deep paths from Angular ESM format packages"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Angular 13 ESM package format makes Jest resolution not able to resolve the correct ",(0,r.jsx)(s.code,{children:".mjs"})," files. Even though we introduced\n",(0,r.jsx)(s.code,{children:"ng-jest-resolver"})," as a part of the preset, this resolver won't work for all scenarios. One might get Jest error like"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"Cannot find module '@angular/common/locales/xx' from 'src/app/app.component.spec.ts'\n"})}),"\n",(0,r.jsxs)(s.p,{children:["To fix this issue, one needs to add ",(0,r.jsx)(s.code,{children:"mjs"})," to ",(0,r.jsx)(s.code,{children:"moduleFileExtensions"})," as following"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // ...other options\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n};\n"})}),"\n",(0,r.jsxs)(s.p,{children:["If the issue still ",(0,r.jsx)(s.strong,{children:"persists"}),", you might need to configure ",(0,r.jsx)(s.a,{href:"https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring",children:"moduleNameMapper"}),"\nor extend the behavior the default ",(0,r.jsx)(s.a,{href:"https://github.com/thymikee/jest-preset-angular/blob/main/src/resolvers/ng-jest-resolver.ts",children:"resolver"})," of this preset."]}),"\n",(0,r.jsx)(s.h3,{id:"usage-with-angular-libraries-which-are-built-with-angular-cli-13",children:"Usage with Angular libraries which are built with Angular CLI 13"}),"\n",(0,r.jsxs)(s.p,{children:["Besides, the changes in Angular packages themselves, ",(0,r.jsx)(s.strong,{children:"Angular"})," libraries which are built with ",(0,r.jsx)(s.strong,{children:"Angular CLI 13"})," also introduce\nESM package format. Similar to Angular packages, Jest doesn't understand ",(0,r.jsx)(s.code,{children:".mjs"})," files which are in these new format\nlibraries in Jest ",(0,r.jsx)(s.strong,{children:"CommonJS"})," mode."]}),"\n",(0,r.jsxs)(s.p,{children:["To fix this issue, one should modify ",(0,r.jsx)(s.code,{children:"transformIgnorePatterns"})," to be as following:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // ...other options\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n};\n"})})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var r=n(7294);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);