"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5565],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=s,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2455:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(7462),s=n(3366),o=(n(7294),n(4137)),a=["components"],i={id:"esm-support",title:"ESM Support"},p=void 0,u={unversionedId:"guides/esm-support",id:"version-11.0/guides/esm-support",title:"ESM Support",description:"To use jest-preset-angular with ESM support, you'll first need to check ESM Jest documentation.",source:"@site/versioned_docs/version-11.0/guides/esm-support.md",sourceDirName:"guides",slug:"/guides/esm-support",permalink:"/jest-preset-angular/docs/11.0/guides/esm-support",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-11.0/guides/esm-support.md",tags:[],version:"11.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1678871430,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{id:"esm-support",title:"ESM Support"},sidebar:"version-11.0-docs",previous:{title:"Angular >=13",permalink:"/jest-preset-angular/docs/11.0/guides/angular-13+"},next:{title:"Configure other JSDOM versions",permalink:"/jest-preset-angular/docs/11.0/guides/jsdom-version"}},l={},c=[{value:"Examples",id:"examples",level:3},{value:"Manual configuration",id:"manual-configuration",level:4},{value:"Use ESM presets",id:"use-esm-presets",level:4}],m={toc:c};function d(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," with ESM support, you'll first need to check ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/ecmascript-modules"},"ESM Jest documentation"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," supports ESM via a ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," config option ",(0,o.kt)("a",{parentName:"p",href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/options/useESM"},"useESM")," in combination with jest config option ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration#extensionstotreatasesm-arraystring"},"extensionsToTreatAsEsm"),"."),(0,o.kt)("p",null,"There is also a ",(0,o.kt)("a",{parentName:"p",href:"/jest-preset-angular/docs/11.0/getting-started/presets"},"preset")," to work with ESM."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We have ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/tree/main/examples"},"example apps")," which contains base ESM setup to work with Jest and Angular.")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"manual-configuration"},"Manual configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  extensionsToTreatAsEsm: ['.ts'],\n  globals: {\n    'ts-jest': {\n      tsconfig: '<rootDir>/tsconfig.spec.json',\n      stringifyContentPathRegex: '\\\\.html$',\n      useESM: true,\n    },\n  },\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "extensionsToTreatAsEsm": [".ts"],\n    "globals": {\n      "ts-jest": {\n        "tsconfig": "<rootDir>/tsconfig.spec.json",\n        "stringifyContentPathRegex": "\\\\.html$",\n        "useESM": true\n      }\n    }\n  }\n}\n')),(0,o.kt)("h4",{id:"use-esm-presets"},"Use ESM presets"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Jest will attempt to load ",(0,o.kt)("strong",{parentName:"p"},"ESM")," files from ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," with default ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-resolve")," which usually works for most of the cases.\nHowever, there are cases like Angular libraries ",(0,o.kt)("strong",{parentName:"p"},"ESM")," built files or ",(0,o.kt)("strong",{parentName:"p"},"ESM")," files which are outside ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," might not be loaded\ncorrectly."),(0,o.kt)("p",{parentName:"admonition"},"To fix that, one can use ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleNameMapper")," in jest config to instruct Jest to load the correct ",(0,o.kt)("strong",{parentName:"p"},"ESM")," files or create a\ncustom Jest ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#resolver-string"},"resolver"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  preset: 'jest-preset-angular/presets/defaults-esm',\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "preset": "jest-preset-angular/presets/defaults-esm"\n  }\n}\n')))}d.isMDXComponent=!0}}]);