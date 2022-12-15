"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9664],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),o=n(6010),i=n(1048),s=n(3609),l=n(1943),p=n(2957),u="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n,i=e.lazy,d=e.block,c=e.defaultValue,f=e.values,g=e.groupId,b=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,s.l)(k,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var j=(0,l.U)(),y=j.tabGroupChoices,C=j.setTabGroupChoices,T=(0,a.useState)(N),w=T[0],x=T[1],E=[],O=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var S=y[g];null!=S&&S!==w&&k.some((function(e){return e.value===S}))&&x(S)}var D=function(e){var t=e.currentTarget,n=E.indexOf(t),r=k[n].value;r!==w&&(O(t),x(r),null!=g&&C(g,String(r)))},I=function(e){var t,n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var o,i=E.indexOf(e.currentTarget)-1;n=null!=(o=E[i])?o:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return E.push(e)},onKeyDown:I,onClick:D},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},9219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=n(4259),s=n(425),l=["components"],p={id:"options",title:"Options"},u=void 0,m={unversionedId:"getting-started/options",id:"version-12.0/getting-started/options",title:"Options",description:"jest-preset-angular uses ts-jest options under the hood, which are located under the globals of Jest config object",source:"@site/versioned_docs/version-12.0/getting-started/options.md",sourceDirName:"getting-started",slug:"/getting-started/options",permalink:"/jest-preset-angular/docs/getting-started/options",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-12.0/getting-started/options.md",tags:[],version:"12.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1671108252,formattedLastUpdatedAt:"Dec 15, 2022",frontMatter:{id:"options",title:"Options"},sidebar:"version-12.0-docs",previous:{title:"Presets",permalink:"/jest-preset-angular/docs/getting-started/presets"},next:{title:"Test environment",permalink:"/jest-preset-angular/docs/getting-started/test-environment"}},d={},c=[{value:"Exposed configuration",id:"exposed-configuration",level:3},{value:"Brief explanation of config",id:"brief-explanation-of-config",level:3}],f={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," options under the hood, which are located under the ",(0,o.kt)("inlineCode",{parentName:"p"},"globals")," of Jest config object\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file of your project, or through a ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.js"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.ts")," file."),(0,o.kt)("p",null,"More information about ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," options, see ",(0,o.kt)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options"},"https://kulshekhar.github.io/ts-jest/docs/getting-started/options")),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Since ",(0,o.kt)("strong",{parentName:"p"},"v9.0.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," default Jest configuration no longer provides ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleNameMapper"),". If you wish to reuse\nthe old ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," configuration, you can put this into your Jest config."),(0,o.kt)(i.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  //...\n  moduleNameMapper: {\n    '^src/(.*)$': '<rootDir>/src/$1',\n    '^app/(.*)$': '<rootDir>/src/app/$1',\n    '^assets/(.*)$': '<rootDir>/src/assets/$1',\n    '^environments/(.*)$': '<rootDir>/src/environments/$1',\n  },\n};\n"))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  moduleNameMapper: {\n    '^src/(.*)$': '<rootDir>/src/$1',\n    '^app/(.*)$': '<rootDir>/src/app/$1',\n    '^assets/(.*)$': '<rootDir>/src/assets/$1',\n    '^environments/(.*)$': '<rootDir>/src/environments/$1',\n  },\n};\n\nexport default jestConfig;\n")))),(0,o.kt)("h3",{parentName:"admonition",id:"processing-with-esbuild"},"Processing with esbuild"),(0,o.kt)("p",{parentName:"admonition"},"Since ",(0,o.kt)("strong",{parentName:"p"},"v11.0.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," introduced the usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"esbuild")," to process files besides TypeScript API. By default, all ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," files\nwill be processed by ",(0,o.kt)("inlineCode",{parentName:"p"},"esbuild")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular"),". To configure extra files to process with ",(0,o.kt)("inlineCode",{parentName:"p"},"esbuild"),", one can do the following:"),(0,o.kt)(i.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  //...\n  globals: {\n    ngJest: {\n      processWithEsbuild: [<glob_to_files>],\n    },\n  },\n}\n"))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  globals: {\n    ngJest: {\n      processWithEsbuild: [<glob_to_files>],\n    },\n  },\n}\n\nexport default jestConfig;\n"))))),(0,o.kt)("h3",{id:"exposed-configuration"},"Exposed configuration"),(0,o.kt)(i.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const snapshotSerializers = require('../build/serializers');\n\nmodule.exports = {\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.(html|svg)$',\n    },\n  },\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',\n  snapshotSerializers,\n  testEnvironment: 'jsdom',\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',\n  },\n};\n"))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\nimport snapshotSerializers from 'jest-preset-angular/build/serializers';\n\nconst jestConfig: Config = {\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.(html|svg)$',\n    },\n  },\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',\n  snapshotSerializers,\n  testEnvironment: 'jsdom',\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',\n  },\n};\n\nexport default jestConfig;\n")))),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Jest runs with ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," neither in browser nor through dev server. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"JSDOM")," to abstract browser environment hence we depend on\n",(0,o.kt)("inlineCode",{parentName:"p"},"JSDOM")," implementation for real browser features.")),(0,o.kt)("h3",{id:"brief-explanation-of-config"},"Brief explanation of config"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We're using some ",(0,o.kt)("inlineCode",{parentName:"li"},'"globals"')," to pass information about configuration to use for code compilation with ",(0,o.kt)("inlineCode",{parentName:"li"},"ts-jest"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"moduleFileExtensions"')," \u2013 our modules are TypeScript (",(0,o.kt)("inlineCode",{parentName:"li"},"ts"),"), HTML (",(0,o.kt)("inlineCode",{parentName:"li"},"html"),"), JavaScript (",(0,o.kt)("inlineCode",{parentName:"li"},"js"),"), JSON (",(0,o.kt)("inlineCode",{parentName:"li"},"json"),") and ESM JavaScript (",(0,o.kt)("inlineCode",{parentName:"li"},"mjs"),") files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"moduleNameMapper"')," \u2013 if you're using absolute imports here's how to tell Jest where to look for them; uses ",(0,o.kt)("inlineCode",{parentName:"li"},"RegExp"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"resolver"')," - instruct Jest how to resolve entry file based on ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," definitions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"snapshotSerializers"')," - array of serializers which will be applied to snapshot the code. Note: by default angular adds\nsome angular-specific attributes to the code (like ",(0,o.kt)("inlineCode",{parentName:"li"},"ng-reflect-*"),", ",(0,o.kt)("inlineCode",{parentName:"li"},'ng-version="*"'),", ",(0,o.kt)("inlineCode",{parentName:"li"},"_ngcontent-c*")," etc).\nThis package provides serializer to remove such attributes. This makes snapshots cleaner and more human-readable.\nTo remove such specific attributes use ",(0,o.kt)("inlineCode",{parentName:"li"},"no-ng-attributes")," serializer. You need to add ",(0,o.kt)("inlineCode",{parentName:"li"},"no-ng-attributes")," serializer manually."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"testEnvironment"')," \u2013 the test environment to run on."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"transformIgnorePatterns"'),": instruct Jest to transform any ",(0,o.kt)("inlineCode",{parentName:"li"},".mjs")," files which come from ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"transform"')," \u2013 run every ",(0,o.kt)("inlineCode",{parentName:"li"},"TS"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"JS"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"MJS"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"HTML"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"SVG")," file through so called ",(0,o.kt)("em",{parentName:"li"},"Jest transformer"),"; this lets Jest understand non-JS syntax.")))}g.isMDXComponent=!0}}]);