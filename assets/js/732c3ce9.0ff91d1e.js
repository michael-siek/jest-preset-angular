"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[862],{1979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(5893),r=n(1151);const i={id:"test-environment",title:"Test environment"},o=void 0,a={id:"getting-started/test-environment",title:"Test environment",description:"If you look at setup-jest.js,",source:"@site/versioned_docs/version-13.0/getting-started/test-environment.md",sourceDirName:"getting-started",slug:"/getting-started/test-environment",permalink:"/jest-preset-angular/docs/getting-started/test-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-13.0/getting-started/test-environment.md",tags:[],version:"13.0",lastUpdatedBy:"Anh Pham",lastUpdatedAt:1706774769,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{id:"test-environment",title:"Test environment"},sidebar:"docs",previous:{title:"Options",permalink:"/jest-preset-angular/docs/getting-started/options"},next:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/guides/angular-ivy"}},d={},l=[{value:"Configure test environment",id:"configure-test-environment",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["If you look at ",(0,s.jsx)(t.a,{href:"https://github.com/thymikee/jest-preset-angular/blob/main/setup-jest.js",children:(0,s.jsx)(t.code,{children:"setup-jest.js"})}),",\nwhat we're doing here is we're adding globals required by Angular. With the included ",(0,s.jsx)(t.a,{href:"https://github.com/angular/angular/tree/main/packages/zone.js",children:"Angular zone patch"}),"\nwe also make sure Jest test methods run in Zone context. Then we initialize the Angular testing environment like normal."]}),"\n",(0,s.jsxs)(t.p,{children:["While ",(0,s.jsx)(t.code,{children:"setup-jest.js"})," above is for running Jest with ",(0,s.jsx)(t.strong,{children:"CommonJS"})," mode, we also provide ",(0,s.jsx)(t.a,{href:"https://github.com/thymikee/jest-preset-angular/blob/main/setup-jest.mjs",children:(0,s.jsx)(t.code,{children:"setup-jest.mjs"})}),"\nto run with ",(0,s.jsx)(t.strong,{children:"ESM"})," mode."]}),"\n",(0,s.jsx)(t.h3,{id:"configure-test-environment",children:"Configure test environment"}),"\n",(0,s.jsxs)(t.p,{children:["When creating Angular test environment with ",(0,s.jsx)(t.code,{children:"TestBed"}),", it is possible to specify the ",(0,s.jsx)(t.code,{children:"testEnvironmentOptions"})," via ",(0,s.jsx)(t.code,{children:"globalThis"})," in the Jest setup file.\nFor example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// setup-test.ts\nglobalThis.ngJest = {\n  testEnvironmentOptions: {\n    teardown: {\n      destroyAfterEach: false,\n      rethrowErrors: true,\n    },\n    errorOnUnknownElements: true,\n    errorOnUnknownProperties: true,\n  },\n};\n\nimport 'jest-preset-angular/setup-jest';\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"jest-preset-angular"})," will look at ",(0,s.jsx)(t.code,{children:"globalThis.ngJest"})," and pass the correct ",(0,s.jsx)(t.a,{href:"https://angular.io/api/core/testing/TestEnvironmentOptions",children:(0,s.jsx)(t.code,{children:"TestEnvironmentOptions"})})," object to ",(0,s.jsx)(t.code,{children:"TestBed"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);