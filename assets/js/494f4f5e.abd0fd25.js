"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5665],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),g=a,d=f["".concat(u,".").concat(g)]||f[g]||p[g]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1157:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],s={id:"angular-ivy",title:"Angular Ivy"},u=void 0,l={unversionedId:"guides/angular-ivy",id:"version-10.x/guides/angular-ivy",title:"Angular Ivy",description:"Starting from v9.0.0+, jest-preset-angular is fully compatible with Angular Ivy. To make sure that Jest uses the",source:"@site/versioned_docs/version-10.x/guides/angular-ivy.md",sourceDirName:"guides",slug:"/guides/angular-ivy",permalink:"/jest-preset-angular/docs/10.x/guides/angular-ivy",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-10.x/guides/angular-ivy.md",tags:[],version:"10.x",lastUpdatedBy:"Ahn",lastUpdatedAt:1684060424,formattedLastUpdatedAt:"May 14, 2023",frontMatter:{id:"angular-ivy",title:"Angular Ivy"},sidebar:"version-10.x-docs",previous:{title:"Test environment",permalink:"/jest-preset-angular/docs/10.x/getting-started/test-environment"},next:{title:"ESM Support",permalink:"/jest-preset-angular/docs/10.x/guides/esm-support"}},c={},p=[],f={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starting from ",(0,o.kt)("strong",{parentName:"p"},"v9.0.0+"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," is fully compatible with Angular Ivy. To make sure that Jest uses the\nAngular Ivy, you must run ",(0,o.kt)("inlineCode",{parentName:"p"},"ngcc")," before running tests. ",(0,o.kt)("inlineCode",{parentName:"p"},"ngcc")," will transform all Angular-format packages to be compatible\nwith Ivy compiler."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," also provides util script to help you to run ",(0,o.kt)("inlineCode",{parentName:"p"},"ngcc")," with Jest but this script only works via the\nJavaScript version of Jest config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nrequire('jest-preset-angular/ngcc-jest-processor');\n\nmodule.exports = {\n  // [...]\n};\n")))}g.isMDXComponent=!0}}]);