"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5867],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},3992:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(7462),a=n(7294),o=n(6010),s=n(2957),l=n(6775),i=n(5238),u=n(3609),p=n(2560);function m(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,l.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(s),(0,a.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function f(e){var t,n,r,o,s=e.defaultValue,l=e.queryString,i=void 0!==l&&l,u=e.groupId,m=c(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),h=f[0],b=f[1],k=g({queryString:i,groupId:u}),v=k[0],y=k[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=j[0],w=j[1],C=function(){var e=null!=v?v:N;return d({value:e,tabValues:m})?e:null}();return(0,a.useLayoutEffect)((function(){C&&b(C)}),[C]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),w(e)}),[y,w,m]),tabValues:m}}var h=n(1048),b="tabList__CuJ",k="tabItem_LNqP";function v(e){var t=e.className,n=e.block,l=e.selectedValue,i=e.selectValue,u=e.tabValues,p=[],m=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==l&&(m(t),i(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=p.indexOf(e.currentTarget)+1;n=null!=(r=p[a])?r:p[0];break;case"ArrowLeft":var o,s=p.indexOf(e.currentTarget)-1;n=null!=(o=p[s])?o:p[p.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return p.push(e)},onKeyDown:d,onClick:c},s,{className:(0,o.Z)("tabs__item",k,null==s?void 0:s.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=o.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function j(e){var t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return a.createElement(j,(0,r.Z)({key:String(t)},e))}},8655:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),s=n(3992),l=n(425),i=["components"],u={id:"angular-13+",title:"Angular >=13"},p=void 0,m={unversionedId:"guides/angular-13+",id:"version-13.0/guides/angular-13+",title:"Angular >=13",description:"Angular 13 introduces ESM package format for Angular packages. jest-preset-angular",source:"@site/versioned_docs/version-13.0/guides/angular-13+.md",sourceDirName:"guides",slug:"/guides/angular-13+",permalink:"/jest-preset-angular/docs/guides/angular-13+",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-13.0/guides/angular-13+.md",tags:[],version:"13.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1684062424,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{id:"angular-13+",title:"Angular >=13"},sidebar:"version-13.0-docs",previous:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/guides/angular-ivy"},next:{title:"ESM Support",permalink:"/jest-preset-angular/docs/guides/esm-support"}},c={},d=[{value:"Migration steps from Angular &lt; 13",id:"migration-steps-from-angular--13",level:2},{value:"Using ES Modules",id:"using-es-modules",level:3},{value:"Potential issues with Angular 13 ESM package format and workaround",id:"potential-issues-with-angular-13-esm-package-format-and-workaround",level:2},{value:"<code>Cannot find modules</code> error when importing any deep paths from Angular ESM format packages",id:"cannot-find-modules-error-when-importing-any-deep-paths-from-angular-esm-format-packages",level:3},{value:"Usage with Angular libraries which are built with Angular CLI 13",id:"usage-with-angular-libraries-which-are-built-with-angular-cli-13",level:3}],g={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Angular 13")," introduces ESM package format for Angular packages. ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular"),"\ncurrently supports testing with Jest in ",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS")," mode with ",(0,o.kt)("strong",{parentName:"p"},"Angular 13")," using ",(0,o.kt)("a",{parentName:"p",href:"/jest-preset-angular/docs/getting-started/presets"},"default preset"),"."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"With Jest 28 and ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," ",(0,o.kt)("strong",{parentName:"p"},"v12.0.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ng-jest-resolver")," is no longer required to have in Jest config. This\nresolver is also excluded from our default and default ESM presets.")),(0,o.kt)("p",null,"Starting from ",(0,o.kt)("strong",{parentName:"p"},"v11.0.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," introduces a few extra changes to be able to run Jest with ",(0,o.kt)("strong",{parentName:"p"},"Angular 13"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"moduleFileExtensions")," is updated to include ",(0,o.kt)("inlineCode",{parentName:"p"},"mjs")," files as accepted module format.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," is added to inform Jest to transform ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"transform")," is updated to include ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," extension to transform to ",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS")," codes."))),(0,o.kt)("h2",{id:"migration-steps-from-angular--13"},"Migration steps from Angular < 13"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Upgrade the project to ",(0,o.kt)("strong",{parentName:"p"},"Angular 13")," following ",(0,o.kt)("a",{parentName:"p",href:"https://update.angular.io/"},"https://update.angular.io/"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If one is using the default preset as following:"))),(0,o.kt)(s.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  preset: 'jest-preset-angular',\n};\n"))),(0,o.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  preset: 'jest-preset-angular',\n};\n\nexport default jestConfig;\n")))),(0,o.kt)("p",null,"there are no migration steps required"),(0,o.kt)("h3",{id:"using-es-modules"},"Using ES Modules"),(0,o.kt)("p",null,"ES Modules support is new and may encounter issues. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/tree/main/examples/example-app-v13"},"example-app-v13")," for an example with tests that run using ESM, and using ESM + isolated."),(0,o.kt)("p",null,"Your ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.config.js")," should be changed to something like:"),(0,o.kt)(s.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"const { pathsToModuleNameMapper } = require('ts-jest/utils');\nconst { paths } = require('./tsconfig.json').compilerOptions;\n\n/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */\nmodule.exports = {\n  preset: 'jest-preset-angular/presets/defaults-esm',\n  transform: {\n    '^.+\\\\.(ts|js|html|svg)$': [\n      'jest-preset-angular',\n      {\n        tsconfig: '<rootDir>/tsconfig-esm.spec.json',\n        stringifyContentPathRegex: '\\\\.(html|svg)$',\n        isolatedModules: true,\n        useESM: true,\n      },\n    ],\n  },\n  moduleNameMapper: {\n    ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),\n    tslib: 'tslib/tslib.es6.js',\n  },\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n};\n"))),(0,o.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\nimport { pathsToModuleNameMapper } from 'ts-jest';\nimport { compilerOptions } from './tsconfig.json';\n\nconst jestConfig: Config = {\n  preset: 'jest-preset-angular/presets/defaults-esm',\n  transform: {\n    '^.+\\\\.(ts|js|html|svg)$': [\n      'jest-preset-angular',\n      {\n        tsconfig: '<rootDir>/tsconfig-esm.spec.json',\n        stringifyContentPathRegex: '\\\\.(html|svg)$',\n        isolatedModules: true,\n        useESM: true,\n      },\n    ],\n  },\n  moduleNameMapper: {\n    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),\n    tslib: 'tslib/tslib.es6.js',\n  },\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n};\n\nexport default jestConfig;\n")))),(0,o.kt)("p",null,"Before upgrading to ng13 and switching to ES Modules, your ",(0,o.kt)("inlineCode",{parentName:"p"},"setup-jest.ts")," file most likely uses the preset ",(0,o.kt)("inlineCode",{parentName:"p"},"setup-jest"),", like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// setup-jest.ts\nimport 'jest-preset-angular/setup-jest';\n")),(0,o.kt)("p",null,"or for ESM mode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// setup-jest.ts\nimport 'jest-preset-angular/setup-jest.mjs';\n")),(0,o.kt)("h2",{id:"potential-issues-with-angular-13-esm-package-format-and-workaround"},"Potential issues with Angular 13 ESM package format and workaround"),(0,o.kt)("h3",{id:"cannot-find-modules-error-when-importing-any-deep-paths-from-angular-esm-format-packages"},(0,o.kt)("inlineCode",{parentName:"h3"},"Cannot find modules")," error when importing any deep paths from Angular ESM format packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Cannot find module '@angular/common/locales/xx' from 'src/app/app.component.spec.ts'\n")),(0,o.kt)("p",null,"To fix this issue, one needs to add ",(0,o.kt)("inlineCode",{parentName:"p"},"mjs")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleFileExtensions")," as following"),(0,o.kt)(s.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  // ...other options\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n};\n"))),(0,o.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // ...other options\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n};\n\nexport default jestConfig;\n")))),(0,o.kt)("h3",{id:"usage-with-angular-libraries-which-are-built-with-angular-cli-13"},"Usage with Angular libraries which are built with Angular CLI 13"),(0,o.kt)("p",null,"Besides, the changes in Angular packages themselves, ",(0,o.kt)("strong",{parentName:"p"},"Angular")," libraries which are built with ",(0,o.kt)("strong",{parentName:"p"},"Angular CLI 13")," also introduce\nESM package format. Similar to Angular packages, Jest doesn't understand ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," files which are in these new format\nlibraries in Jest ",(0,o.kt)("strong",{parentName:"p"},"CommonJS")," mode."),(0,o.kt)("p",null,"To fix this issue, one should modify ",(0,o.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," to be as following:"),(0,o.kt)(s.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"module.exports = {\n  // ...other options\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n};\n"))),(0,o.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { Config } from 'jest';\n\nconst jestConfig: Config = {\n  // ...other options\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n};\n\nexport default jestConfig;\n")))))}f.isMDXComponent=!0}}]);