"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[407],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3590:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],s={id:"introduction",title:"Introduction",description:"Jest preset configuration for Angular projects.",slug:"/"},c=void 0,p={unversionedId:"introduction",id:"version-10.x/introduction",title:"Introduction",description:"Jest preset configuration for Angular projects.",source:"@site/versioned_docs/version-10.x/introduction.md",sourceDirName:".",slug:"/",permalink:"/jest-preset-angular/docs/10.x/",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-10.x/introduction.md",tags:[],version:"10.x",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1667839097,formattedLastUpdatedAt:"Nov 7, 2022",frontMatter:{id:"introduction",title:"Introduction",description:"Jest preset configuration for Angular projects.",slug:"/"},sidebar:"version-10.x-docs",next:{title:"Processing flow",permalink:"/jest-preset-angular/docs/10.x/processing"}},u={},l=[],f={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," is Jest preset configuration and TypeScript preprocessor with source map support for Jest that lets you use Jest to test Angular projects."),(0,i.kt)("p",null,"This is a part of the article: ",(0,i.kt)("a",{parentName:"p",href:"https://www.xfive.co/blog/testing-angular-faster-jest/"},"Testing Angular faster with Jest"),"."),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"Starting from ",(0,i.kt)("strong",{parentName:"p"},"v9.0.0"),", we follow closely native ",(0,i.kt)("inlineCode",{parentName:"p"},"Karma + Jasmine")," implementation which is default provided by\n",(0,i.kt)("inlineCode",{parentName:"p"},"@angular/cli"),". This will make the testing experience with Jest more inline native with Angular testing experience.")))}d.isMDXComponent=!0}}]);