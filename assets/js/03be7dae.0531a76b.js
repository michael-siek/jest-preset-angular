"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7729],{1644:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=s(5893),t=s(1151);const o={id:"troubleshooting",title:"Troubleshooting"},i=void 0,a={id:"guides/troubleshooting",title:"Troubleshooting",description:"You can check Jest troubleshooting guide",source:"@site/docs/guides/troubleshooting.md",sourceDirName:"guides",slug:"/guides/troubleshooting",permalink:"/jest-preset-angular/docs/next/guides/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/guides/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Anh Pham",lastUpdatedAt:1706774769,formattedLastUpdatedAt:"Feb 1, 2024",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"Absolute Imports",permalink:"/jest-preset-angular/docs/next/guides/absolute-imports"}},l={},d=[{value:"Common issues",id:"common-issues",level:2},{value:"Can&#39;t resolve all parameters for SomeClass(?)",id:"cant-resolve-all-parameters-for-someclass",level:3},{value:"@Input() bindings are not reflected into fixture when <code>ChangeDetectionStrategy.OnPush</code> is used",id:"input-bindings-are-not-reflected-into-fixture-when-changedetectionstrategyonpush-is-used",level:3},{value:"The animation trigger &quot;transformMenu&quot; has failed",id:"the-animation-trigger-transformmenu-has-failed",level:3},{value:"Unexpected token [import|export|other]",id:"unexpected-token-importexportother",level:3},{value:"Allow vendor libraries like jQuery, etc...",id:"allow-vendor-libraries-like-jquery-etc",level:3},{value:"Coverage fail but tests pass",id:"coverage-fail-but-tests-pass",level:3},{value:"Resolver needed for some javascript library or nested dependencies",id:"resolver-needed-for-some-javascript-library-or-nested-dependencies",level:3},{value:"Javascript library",id:"javascript-library",level:4},{value:"Nested dependency (<code>node_modules</code> package within another package <code>node_nodules</code>)",id:"nested-dependency-node_modules-package-within-another-package-node_nodules",level:4},{value:"Resolution",id:"resolution",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["You can check Jest ",(0,r.jsx)(n.a,{href:"https://jestjs.io/docs/en/troubleshooting",children:"troubleshooting guide"})]}),"\n",(0,r.jsx)(n.h2,{id:"common-issues",children:"Common issues"}),"\n",(0,r.jsxs)(n.p,{children:["Problems may arise if you're using custom builds (this preset is tailored for ",(0,r.jsx)(n.code,{children:"angular-cli"})," as firstly priority). Please be advised that every entry in default configuration may be overridden to best suite your app's needs."]}),"\n",(0,r.jsx)(n.h3,{id:"cant-resolve-all-parameters-for-someclass",children:"Can't resolve all parameters for SomeClass(?)"}),"\n",(0,r.jsxs)(n.p,{children:["With Angular 8 and higher, a ",(0,r.jsx)(n.a,{href:"https://github.com/thymikee/jest-preset-angular/issues/288",children:"change to the way the Angular CLI works"})," may be causing your metadata to be lost. You can update your ",(0,r.jsx)(n.code,{children:"tsconfig.spec.json"})," to include the ",(0,r.jsx)(n.code,{children:"emitDecoratorMetadata"})," compiler option:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'  "compilerOptions": {\n    "emitDecoratorMetadata": true\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In general, this is related to Angular's reflection and also depends on a reflection library, as e. g. included in ",(0,r.jsx)(n.code,{children:"core-js"}),". We use our own minimal reflection that satisfy Angular's current requirements, but in case these change, you can install ",(0,r.jsx)(n.code,{children:"core-js"})," and import the reflection library in your ",(0,r.jsx)(n.code,{children:"setup-jest.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"require('core-js/es/reflect');\nrequire('core-js/proposals/reflect-metadata');\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note that this might also be related to other issues with the dependency injection and parameter type reflection."}),"\n",(0,r.jsxs)(n.h3,{id:"input-bindings-are-not-reflected-into-fixture-when-changedetectionstrategyonpush-is-used",children:["@Input() bindings are not reflected into fixture when ",(0,r.jsx)(n.code,{children:"ChangeDetectionStrategy.OnPush"})," is used"]}),"\n",(0,r.jsxs)(n.p,{children:["This issue is not related to Jest, ",(0,r.jsx)(n.a,{href:"https://github.com/angular/angular/issues/12313",children:"it's a known Angular bug"})]}),"\n",(0,r.jsxs)(n.p,{children:["To mitigate this, you need to wrap your component under test, into some container component with default change detection strategy (",(0,r.jsx)(n.code,{children:"ChangeDetectionStrategy.Default"}),") and pass props through it, or overwrite change detection strategy within ",(0,r.jsx)(n.code,{children:"TestBed"})," setup, if it's not critical for the test."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// override change detection strategy\nbeforeEach(async(() => {\n  TestBed.configureTestingModule({ declarations: [PizzaItemComponent] })\n    .overrideComponent(PizzaItemComponent, {\n      set: { changeDetection: ChangeDetectionStrategy.Default },\n    })\n    .compileComponents();\n}));\n"})}),"\n",(0,r.jsx)(n.h3,{id:"the-animation-trigger-transformmenu-has-failed",children:'The animation trigger "transformMenu" has failed'}),"\n",(0,r.jsx)(n.p,{children:"The currently used JSDOM version handles this, but older versions used before v7 of this preset was missing transform property. To patch it for Angular Material, use this workaround."}),"\n",(0,r.jsxs)(n.p,{children:["Add this to your ",(0,r.jsx)(n.code,{children:"jestGlobalMocks"})," file"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"Object.defineProperty(document.body.style, 'transform', {\n  value: () => {\n    return {\n      enumerable: true,\n      configurable: true,\n    };\n  },\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Reference: ",(0,r.jsx)(n.a,{href:"https://github.com/angular/material2/issues/7101",children:"https://github.com/angular/material2/issues/7101"})]}),"\n",(0,r.jsx)(n.h3,{id:"unexpected-token-importexportother",children:"Unexpected token [import|export|other]"}),"\n",(0,r.jsxs)(n.p,{children:["This means, that a file is not transformed through ",(0,r.jsx)(n.code,{children:"TypeScript"})," compiler, e.g. because it is a ",(0,r.jsx)(n.code,{children:"JS"})," file with ",(0,r.jsx)(n.code,{children:"TS"})," syntax, or\nit is published to npm as uncompiled source files. Here's what you can do. A typical Jest error is like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"({\"Object.<anonymous>\":function(module,exports,require,__dirname,__filename,jest){import * as i0 from '@angular/core';\n                                                                                                                                           ^^^^^^\n    SyntaxError: Cannot use import statement outside a module\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To fix the issue, one needs to adjust ",(0,r.jsx)(n.code,{children:"transformIgnorePatterns"})," whitelist:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // ...other options\n  transformIgnorePatterns: ['node_modules/(?!@angular|@ngrx)'],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default, Jest doesn't transform ",(0,r.jsx)(n.code,{children:"node_modules"}),", because they should be valid JavaScript files. However, it happens that\nlibrary authors assume that you'll compile their sources. So you have to tell this to Jest explicitly.\nAbove snippet means that ",(0,r.jsx)(n.code,{children:"@angular"}),", ",(0,r.jsx)(n.code,{children:"@ngrx"})," will be transformed, even though they're ",(0,r.jsx)(n.code,{children:"node_modules"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If the dependency causing the issue is a sub dependency of a ",(0,r.jsx)(n.code,{children:"node_modules"})," packages or a module designed to be used with nodeJS, a custom resolver could be required to fix the issue. ",(0,r.jsx)(n.a,{href:"#resolver-needed-for-some-javascript-library-or-nested-dependencies",children:"See below"})," for more information."]}),"\n",(0,r.jsx)(n.h3,{id:"allow-vendor-libraries-like-jquery-etc",children:"Allow vendor libraries like jQuery, etc..."}),"\n",(0,r.jsxs)(n.p,{children:["The same like normal Jest configuration, you can load jQuery in your Jest setup file. For example your Jest setup file is ",(0,r.jsx)(n.code,{children:"setup-jest.ts"})," you can declare jQuery:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"window.$ = require('path/to/jquery');\n"})}),"\n",(0,r.jsx)(n.p,{children:"or"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import $ from 'jquery';\nglobal.$ = global.jQuery = $;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The same declaration can be applied to other vendor libraries."}),"\n",(0,r.jsxs)(n.p,{children:["Reference: ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/jest/issues/708",children:"https://github.com/facebook/jest/issues/708"})]}),"\n",(0,r.jsx)(n.h3,{id:"coverage-fail-but-tests-pass",children:"Coverage fail but tests pass"}),"\n",(0,r.jsxs)(n.p,{children:["This issue happens because Jest uses ",(0,r.jsx)(n.code,{children:"Babel"})," behind the screen to create coverage reporter. To fix this issue, one can do the following:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.code,{children:"babel-jest"}),", ",(0,r.jsx)(n.code,{children:"@babel/core"})," and ",(0,r.jsx)(n.code,{children:"@babel/preset-env"})]}),"\n",(0,r.jsxs)(n.li,{children:["Create a ",(0,r.jsx)(n.code,{children:".babelrc"})," at the same place where Jest config file locates and define the necessary ",(0,r.jsx)(n.code,{children:"Babel"})," plugins.\nFor example"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n  // this plugin will fix issue with class inheritance\n  "plugins": ["@babel/plugin-transform-classes"]\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Define the usage of ",(0,r.jsx)(n.code,{children:"Babel"})," in Jest config via ",(0,r.jsx)(n.code,{children:"ts-jest"})," option, for example"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"// jest.config.js\nmodule.exports = {\n   globals: {\n      'ts-jest': {\n          //...\n          babelConfig: true\n      }\n   }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"resolver-needed-for-some-javascript-library-or-nested-dependencies",children:"Resolver needed for some javascript library or nested dependencies"}),"\n",(0,r.jsx)(n.p,{children:"This can happen in two identified cases."}),"\n",(0,r.jsx)(n.h4,{id:"javascript-library",children:"Javascript library"}),"\n",(0,r.jsxs)(n.p,{children:["When using a javascript SDK/Library in Angular, some javascript methods could fail to be properly rendered in tests. Some examples are the ",(0,r.jsx)(n.code,{children:"firebase"})," and ",(0,r.jsx)(n.code,{children:"firebase/compat"})," SDK."]}),"\n",(0,r.jsx)(n.p,{children:"A typical error could appear as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"TypeError: Cannot read properties of undefined (reading 'FacebookAuthProvider')\n    import firebase from 'firebase/compat/app';\n\n    > export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"nested-dependency-node_modules-package-within-another-package-node_nodules",children:["Nested dependency (",(0,r.jsx)(n.code,{children:"node_modules"})," package within another package ",(0,r.jsx)(n.code,{children:"node_nodules"}),")"]}),"\n",(0,r.jsxs)(n.p,{children:["Some nested dependency tree could trigger some errors while running the tests because some bundles (especially ESM ones) could be somehow errored. An example is the ",(0,r.jsx)(n.code,{children:"@angular/fire"})," package which uses the ",(0,r.jsx)(n.code,{children:"@firebase/firestore"})," package."]}),"\n",(0,r.jsx)(n.p,{children:"A typical error could appear as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"node_modules\\@angular\\fire\\node_modules\\@firebase\\firestore\\dist\\index.esm2017.js:12705\n                    function (t, e) {\n                    ^^^^^^^^\n\n    SyntaxError: Function statements require a function name\n"})}),"\n",(0,r.jsx)(n.h4,{id:"resolution",children:"Resolution"}),"\n",(0,r.jsxs)(n.p,{children:["In these cases, a ",(0,r.jsx)(n.code,{children:"transformIgnorePatterns"})," whitelisting could not fix the issue. The solution here is to use a custom ",(0,r.jsx)(n.code,{children:"resolver"}),". You may or may not need to remove entries from ",(0,r.jsx)(n.code,{children:"transformIgnorePatterns"})," whitelisting."]}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example of a resolver which would fix ",(0,r.jsx)(n.code,{children:"firebase"})," related packages."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// jest.resolver.js\nmodule.exports = (path, options) => {\n  // Call the defaultResolver, so we leverage its cache, error handling, etc.\n  return options.defaultResolver(path, {\n    ...options,\n    // Use packageFilter to process parsed `package.json` before the resolution (see https://www.npmjs.com/package/resolve#resolveid-opts-cb)\n    packageFilter: (pkg) => {\n      const pkgNamesToTarget = new Set([\n        'rxjs',\n        '@firebase/auth',\n        '@firebase/storage',\n        '@firebase/functions',\n        '@firebase/database',\n        '@firebase/auth-compat',\n        '@firebase/database-compat',\n        '@firebase/app-compat',\n        '@firebase/firestore',\n        '@firebase/firestore-compat',\n        '@firebase/messaging',\n        '@firebase/util',\n        'firebase',\n      ]);\n\n      if (pkgNamesToTarget.has(pkg.name)) {\n        // console.log('>>>', pkg.name)\n        delete pkg['exports'];\n        delete pkg['module'];\n      }\n\n      return pkg;\n    },\n  });\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// jest.config.js\n...\nresolver: '<rootDir>/src/jest.resolver.js',\n...\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>i});var r=s(7294);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);