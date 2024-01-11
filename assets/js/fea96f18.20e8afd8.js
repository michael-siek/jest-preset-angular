"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6347],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5053:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],s={id:"troubleshooting",title:"Troubleshooting"},l=void 0,p={unversionedId:"guides/troubleshooting",id:"version-12.0/guides/troubleshooting",title:"Troubleshooting",description:"You can check Jest troubleshooting guide",source:"@site/versioned_docs/version-12.0/guides/troubleshooting.md",sourceDirName:"guides",slug:"/guides/troubleshooting",permalink:"/jest-preset-angular/docs/12.0/guides/troubleshooting",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-12.0/guides/troubleshooting.md",tags:[],version:"12.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1704965572,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"version-12.0-docs",previous:{title:"Absolute Imports",permalink:"/jest-preset-angular/docs/12.0/guides/absolute-imports"}},u={},d=[{value:"Common issues",id:"common-issues",level:2},{value:"Can&#39;t resolve all parameters for SomeClass(?)",id:"cant-resolve-all-parameters-for-someclass",level:3},{value:"@Input() bindings are not reflected into fixture when <code>ChangeDetectionStrategy.OnPush</code> is used",id:"input-bindings-are-not-reflected-into-fixture-when-changedetectionstrategyonpush-is-used",level:3},{value:"The animation trigger &quot;transformMenu&quot; has failed",id:"the-animation-trigger-transformmenu-has-failed",level:3},{value:"Unexpected token import|export|other",id:"unexpected-token-importexportother",level:3},{value:"Allow vendor libraries like jQuery, etc...",id:"allow-vendor-libraries-like-jquery-etc",level:3},{value:"Coverage fail but tests pass",id:"coverage-fail-but-tests-pass",level:3},{value:"Resolver needed for some javascript library or nested dependencies",id:"resolver-needed-for-some-javascript-library-or-nested-dependencies",level:3},{value:"Javascript library",id:"javascript-library",level:4},{value:"Nested dependency (<code>node_modules</code> package within another package <code>node_nodules</code>)",id:"nested-dependency-node_modules-package-within-another-package-node_nodules",level:4},{value:"Resolution",id:"resolution",level:4}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can check Jest ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/troubleshooting"},"troubleshooting guide")),(0,o.kt)("h2",{id:"common-issues"},"Common issues"),(0,o.kt)("p",null,"Problems may arise if you're using custom builds (this preset is tailored for ",(0,o.kt)("inlineCode",{parentName:"p"},"angular-cli")," as firstly priority). Please be advised that every entry in default configuration may be overridden to best suite your app's needs."),(0,o.kt)("h3",{id:"cant-resolve-all-parameters-for-someclass"},"Can't resolve all parameters for SomeClass(?)"),(0,o.kt)("p",null,"With Angular 8 and higher, a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/issues/288"},"change to the way the Angular CLI works")," may be causing your metadata to be lost. You can update your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.spec.json")," to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"emitDecoratorMetadata")," compiler option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  "compilerOptions": {\n    "emitDecoratorMetadata": true\n')),(0,o.kt)("p",null,"In general, this is related to Angular's reflection and also depends on a reflection library, as e. g. included in ",(0,o.kt)("inlineCode",{parentName:"p"},"core-js"),". We use our own minimal reflection that satisfy Angular's current requirements, but in case these change, you can install ",(0,o.kt)("inlineCode",{parentName:"p"},"core-js")," and import the reflection library in your ",(0,o.kt)("inlineCode",{parentName:"p"},"setup-jest.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"require('core-js/es/reflect');\nrequire('core-js/proposals/reflect-metadata');\n")),(0,o.kt)("p",null,"Note that this might also be related to other issues with the dependency injection and parameter type reflection."),(0,o.kt)("h3",{id:"input-bindings-are-not-reflected-into-fixture-when-changedetectionstrategyonpush-is-used"},"@Input() bindings are not reflected into fixture when ",(0,o.kt)("inlineCode",{parentName:"h3"},"ChangeDetectionStrategy.OnPush")," is used"),(0,o.kt)("p",null,"This issue is not related to Jest, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/issues/12313"},"it's a known Angular bug")),(0,o.kt)("p",null,"To mitigate this, you need to wrap your component under test, into some container component with default change detection strategy (",(0,o.kt)("inlineCode",{parentName:"p"},"ChangeDetectionStrategy.Default"),") and pass props through it, or overwrite change detection strategy within ",(0,o.kt)("inlineCode",{parentName:"p"},"TestBed")," setup, if it's not critical for the test."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// override change detection strategy\nbeforeEach(async(() => {\n  TestBed.configureTestingModule({ declarations: [PizzaItemComponent] })\n    .overrideComponent(PizzaItemComponent, {\n      set: { changeDetection: ChangeDetectionStrategy.Default },\n    })\n    .compileComponents();\n}));\n")),(0,o.kt)("h3",{id:"the-animation-trigger-transformmenu-has-failed"},'The animation trigger "transformMenu" has failed'),(0,o.kt)("p",null,"The currently used JSDOM version handles this, but older versions used before v7 of this preset was missing transform property. To patch it for Angular Material, use this workaround."),(0,o.kt)("p",null,"Add this to your ",(0,o.kt)("inlineCode",{parentName:"p"},"jestGlobalMocks")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Object.defineProperty(document.body.style, 'transform', {\n  value: () => {\n    return {\n      enumerable: true,\n      configurable: true,\n    };\n  },\n});\n")),(0,o.kt)("p",null,"Reference: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/material2/issues/7101"},"https://github.com/angular/material2/issues/7101")),(0,o.kt)("h3",{id:"unexpected-token-importexportother"},"Unexpected token ","[import|export|other]"),(0,o.kt)("p",null,"This means, that a file is not transformed through ",(0,o.kt)("inlineCode",{parentName:"p"},"TypeScript")," compiler, e.g. because it is a ",(0,o.kt)("inlineCode",{parentName:"p"},"JS")," file with ",(0,o.kt)("inlineCode",{parentName:"p"},"TS")," syntax, or\nit is published to npm as uncompiled source files. Here's what you can do. A typical Jest error is like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"({\"Object.<anonymous>\":function(module,exports,require,__dirname,__filename,jest){import * as i0 from '@angular/core';\n                                                                                                                                           ^^^^^^\n    SyntaxError: Cannot use import statement outside a module\n")),(0,o.kt)("p",null,"To fix the issue, one needs to adjust ",(0,o.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," whitelist:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // ...other options\n  transformIgnorePatterns: ['node_modules/(?!@angular|@ngrx)'],\n};\n")),(0,o.kt)("p",null,"By default, Jest doesn't transform ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),", because they should be valid JavaScript files. However, it happens that\nlibrary authors assume that you'll compile their sources. So you have to tell this to Jest explicitly.\nAbove snippet means that ",(0,o.kt)("inlineCode",{parentName:"p"},"@angular"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@ngrx")," will be transformed, even though they're ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,o.kt)("p",null,"If the dependency causing the issue is a sub dependency of a ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," packages or a module designed to be used with nodeJS, a custom resolver could be required to fix the issue. ",(0,o.kt)("a",{parentName:"p",href:"#resolver-needed-for-some-javascript-library-or-nested-dependencies"},"See below")," for more information."),(0,o.kt)("h3",{id:"allow-vendor-libraries-like-jquery-etc"},"Allow vendor libraries like jQuery, etc..."),(0,o.kt)("p",null,"The same like normal Jest configuration, you can load jQuery in your Jest setup file. For example your Jest setup file is ",(0,o.kt)("inlineCode",{parentName:"p"},"setup-jest.ts")," you can declare jQuery:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"window.$ = require('path/to/jquery');\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import $ from 'jquery';\nglobal.$ = global.jQuery = $;\n")),(0,o.kt)("p",null,"The same declaration can be applied to other vendor libraries."),(0,o.kt)("p",null,"Reference: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest/issues/708"},"https://github.com/facebook/jest/issues/708")),(0,o.kt)("h3",{id:"coverage-fail-but-tests-pass"},"Coverage fail but tests pass"),(0,o.kt)("p",null,"This issue happens because Jest uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Babel")," behind the screen to create coverage reporter. To fix this issue, one can do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"babel-jest"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"@babel/core")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"@babel/preset-env")),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},".babelrc")," at the same place where Jest config file locates and define the necessary ",(0,o.kt)("inlineCode",{parentName:"li"},"Babel")," plugins.\nFor example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  // this plugin will fix issue with class inheritance\n  "plugins": ["@babel/plugin-transform-classes"]\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define the usage of ",(0,o.kt)("inlineCode",{parentName:"li"},"Babel")," in Jest config via ",(0,o.kt)("inlineCode",{parentName:"li"},"ts-jest")," option, for example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// jest.config.js\nmodule.exports = {\n   globals: {\n      'ts-jest': {\n          //...\n          babelConfig: true\n      }\n   }\n}\n")),(0,o.kt)("h3",{id:"resolver-needed-for-some-javascript-library-or-nested-dependencies"},"Resolver needed for some javascript library or nested dependencies"),(0,o.kt)("p",null,"This can happen in two identified cases."),(0,o.kt)("h4",{id:"javascript-library"},"Javascript library"),(0,o.kt)("p",null,"When using a javascript SDK/Library in Angular, some javascript methods could fail to be properly rendered in tests. Some examples are the ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase/compat")," SDK."),(0,o.kt)("p",null,"A typical error could appear as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TypeError: Cannot read properties of undefined (reading 'FacebookAuthProvider')\n    import firebase from 'firebase/compat/app';\n\n    > export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();\n")),(0,o.kt)("h4",{id:"nested-dependency-node_modules-package-within-another-package-node_nodules"},"Nested dependency (",(0,o.kt)("inlineCode",{parentName:"h4"},"node_modules")," package within another package ",(0,o.kt)("inlineCode",{parentName:"h4"},"node_nodules"),")"),(0,o.kt)("p",null,"Some nested dependency tree could trigger some errors while running the tests because some bundles (especially ESM ones) could be somehow errored. An example is the ",(0,o.kt)("inlineCode",{parentName:"p"},"@angular/fire")," package which uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"@firebase/firestore")," package."),(0,o.kt)("p",null,"A typical error could appear as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"node_modules\\@angular\\fire\\node_modules\\@firebase\\firestore\\dist\\index.esm2017.js:12705\n                    function (t, e) {\n                    ^^^^^^^^\n\n    SyntaxError: Function statements require a function name\n")),(0,o.kt)("h4",{id:"resolution"},"Resolution"),(0,o.kt)("p",null,"In these cases, a ",(0,o.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," whitelisting could not fix the issue. The solution here is to use a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"resolver"),". You may or may not need to remove entries from ",(0,o.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," whitelisting."),(0,o.kt)("p",null,"Here is an example of a resolver which would fix ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase")," related packages."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.resolver.js\nmodule.exports = (path, options) => {\n  // Call the defaultResolver, so we leverage its cache, error handling, etc.\n  return options.defaultResolver(path, {\n    ...options,\n    // Use packageFilter to process parsed `package.json` before the resolution (see https://www.npmjs.com/package/resolve#resolveid-opts-cb)\n    packageFilter: (pkg) => {\n      const pkgNamesToTarget = new Set([\n        'rxjs',\n        '@firebase/auth',\n        '@firebase/storage',\n        '@firebase/functions',\n        '@firebase/database',\n        '@firebase/auth-compat',\n        '@firebase/database-compat',\n        '@firebase/app-compat',\n        '@firebase/firestore',\n        '@firebase/firestore-compat',\n        '@firebase/messaging',\n        '@firebase/util',\n        'firebase',\n      ]);\n\n      if (pkgNamesToTarget.has(pkg.name)) {\n        // console.log('>>>', pkg.name)\n        delete pkg['exports'];\n        delete pkg['module'];\n      }\n\n      return pkg;\n    },\n  });\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\n...\nresolver: '<rootDir>/src/jest.resolver.js',\n...\n")))}m.isMDXComponent=!0}}]);