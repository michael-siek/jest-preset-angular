"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9664],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},3992:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(7462),a=n(7294),o=n(6010),i=n(2957),s=n(6775),l=n(5238),u=n(3609),p=n(2560);function c(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function g(e){var t,n,r,o,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,c=d(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:c})})),b=g[0],v=g[1],h=f({queryString:l,groupId:u}),k=h[0],N=h[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),j=y[0],C=y[1],w=function(){var e=null!=k?k:j;return m({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){w&&v(w)}),[w]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);v(e),N(e),C(e)}),[N,C,c]),tabValues:c}}var b=n(1048),v="tabList__CuJ",h="tabItem_LNqP";function k(e){var t=e.className,n=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,p=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==s&&(c(t),l(r))},m=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=p.indexOf(e.currentTarget)+1;n=null!=(r=p[a])?r:p[0];break;case"ArrowLeft":var o,i=p.indexOf(e.currentTarget)-1;n=null!=(o=p[i])?o:p[p.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",h,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function N(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function y(e){var t=g(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(N,(0,r.Z)({},e,t)))}function j(e){var t=(0,b.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},9219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=n(3992),s=n(425),l=["components"],u={id:"options",title:"Options"},p=void 0,c={unversionedId:"getting-started/options",id:"version-12.0/getting-started/options",title:"Options",description:"jest-preset-angular uses ts-jest options under the hood, which are located under the globals of Jest config object",source:"@site/versioned_docs/version-12.0/getting-started/options.md",sourceDirName:"getting-started",slug:"/getting-started/options",permalink:"/jest-preset-angular/docs/12.0/getting-started/options",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-12.0/getting-started/options.md",tags:[],version:"12.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1683742480,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{id:"options",title:"Options"},sidebar:"version-12.0-docs",previous:{title:"Presets",permalink:"/jest-preset-angular/docs/12.0/getting-started/presets"},next:{title:"Test environment",permalink:"/jest-preset-angular/docs/12.0/getting-started/test-environment"}},d={},m=[{value:"Exposed configuration",id:"exposed-configuration",level:3},{value:"Brief explanation of config",id:"brief-explanation-of-config",level:3}],f={toc:m};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," uses ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," options under the hood, which are located under the ",(0,o.kt)("inlineCode",{parentName:"p"},"globals")," of Jest config object\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file of your project, or through a ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.js"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.ts")," file."),(0,o.kt)("p",null,"More information about ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," options, see ",(0,o.kt)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options"},"https://kulshekhar.github.io/ts-jest/docs/getting-started/options")),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Since ",(0,o.kt)("strong",{parentName:"p"},"v9.0.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," default Jest configuration no longer provides ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleNameMapper"),". If you wish to reuse\nthe old ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," configuration, you can put this into your Jest config."),(0,o.kt)(i.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  //...\n  moduleNameMapper: {\n    '^src/(.*)$': '<rootDir>/src/$1',\n    '^app/(.*)$': '<rootDir>/src/app/$1',\n    '^assets/(.*)$': '<rootDir>/src/assets/$1',\n    '^environments/(.*)$': '<rootDir>/src/environments/$1',\n  },\n};\n"))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  moduleNameMapper: {\n    '^src/(.*)$': '<rootDir>/src/$1',\n    '^app/(.*)$': '<rootDir>/src/app/$1',\n    '^assets/(.*)$': '<rootDir>/src/assets/$1',\n    '^environments/(.*)$': '<rootDir>/src/environments/$1',\n  },\n};\n\nexport default jestConfig;\n")))),(0,o.kt)("h3",{parentName:"admonition",id:"processing-with-esbuild"},"Processing with esbuild"),(0,o.kt)("p",{parentName:"admonition"},"Since ",(0,o.kt)("strong",{parentName:"p"},"v11.0.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," introduced the usage of ",(0,o.kt)("inlineCode",{parentName:"p"},"esbuild")," to process files besides TypeScript API. By default, all ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," files\nwill be processed by ",(0,o.kt)("inlineCode",{parentName:"p"},"esbuild")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular"),". To configure extra files to process with ",(0,o.kt)("inlineCode",{parentName:"p"},"esbuild"),", one can do the following:"),(0,o.kt)(i.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  //...\n  globals: {\n    ngJest: {\n      processWithEsbuild: [<glob_to_files>],\n    },\n  },\n}\n"))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  //...\n  globals: {\n    ngJest: {\n      processWithEsbuild: [<glob_to_files>],\n    },\n  },\n}\n\nexport default jestConfig;\n"))))),(0,o.kt)("h3",{id:"exposed-configuration"},"Exposed configuration"),(0,o.kt)(i.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const snapshotSerializers = require('../build/serializers');\n\nmodule.exports = {\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.(html|svg)$',\n    },\n  },\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',\n  snapshotSerializers,\n  testEnvironment: 'jsdom',\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',\n  },\n};\n"))),(0,o.kt)(s.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\nimport snapshotSerializers from 'jest-preset-angular/build/serializers';\n\nconst jestConfig: Config = {\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.(html|svg)$',\n    },\n  },\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',\n  snapshotSerializers,\n  testEnvironment: 'jsdom',\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',\n  },\n};\n\nexport default jestConfig;\n")))),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"Jest runs with ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," neither in browser nor through dev server. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"JSDOM")," to abstract browser environment hence we depend on\n",(0,o.kt)("inlineCode",{parentName:"p"},"JSDOM")," implementation for real browser features.")),(0,o.kt)("h3",{id:"brief-explanation-of-config"},"Brief explanation of config"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We're using some ",(0,o.kt)("inlineCode",{parentName:"li"},'"globals"')," to pass information about configuration to use for code compilation with ",(0,o.kt)("inlineCode",{parentName:"li"},"ts-jest"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"moduleFileExtensions"')," \u2013 our modules are TypeScript (",(0,o.kt)("inlineCode",{parentName:"li"},"ts"),"), HTML (",(0,o.kt)("inlineCode",{parentName:"li"},"html"),"), JavaScript (",(0,o.kt)("inlineCode",{parentName:"li"},"js"),"), JSON (",(0,o.kt)("inlineCode",{parentName:"li"},"json"),") and ESM JavaScript (",(0,o.kt)("inlineCode",{parentName:"li"},"mjs"),") files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"moduleNameMapper"')," \u2013 if you're using absolute imports here's how to tell Jest where to look for them; uses ",(0,o.kt)("inlineCode",{parentName:"li"},"RegExp"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"resolver"')," - instruct Jest how to resolve entry file based on ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," definitions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"snapshotSerializers"')," - array of serializers which will be applied to snapshot the code. Note: by default angular adds\nsome angular-specific attributes to the code (like ",(0,o.kt)("inlineCode",{parentName:"li"},"ng-reflect-*"),", ",(0,o.kt)("inlineCode",{parentName:"li"},'ng-version="*"'),", ",(0,o.kt)("inlineCode",{parentName:"li"},"_ngcontent-c*")," etc).\nThis package provides serializer to remove such attributes. This makes snapshots cleaner and more human-readable.\nTo remove such specific attributes use ",(0,o.kt)("inlineCode",{parentName:"li"},"no-ng-attributes")," serializer. You need to add ",(0,o.kt)("inlineCode",{parentName:"li"},"no-ng-attributes")," serializer manually."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"testEnvironment"')," \u2013 the test environment to run on."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"transformIgnorePatterns"'),": instruct Jest to transform any ",(0,o.kt)("inlineCode",{parentName:"li"},".mjs")," files which come from ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"transform"')," \u2013 run every ",(0,o.kt)("inlineCode",{parentName:"li"},"TS"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"JS"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"MJS"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"HTML"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"SVG")," file through so called ",(0,o.kt)("em",{parentName:"li"},"Jest transformer"),"; this lets Jest understand non-JS syntax.")))}g.isMDXComponent=!0}}]);