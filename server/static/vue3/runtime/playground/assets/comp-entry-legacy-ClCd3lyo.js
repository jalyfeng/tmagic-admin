System.register(["./index-legacy-ZqCa2gSA.js"],(function(t,e){"use strict";return{setters:[null],execute:function(){var e=document.createElement("style");e.textContent=".in-editor .magic-ui-page-fragment-container[data-v-302e48c7]{min-width:100px;min-height:100px}\n",document.head.appendChild(e);var n=(t=>(t.CONTAINER="container",t.PAGE="page",t.ROOT="app",t.PAGE_FRAGMENT="page-fragment",t))(n||{});const o=(t="")=>t.replace(/\B([A-Z])/g,"-$1").toLowerCase(),r=({methods:t,config:e})=>{const n=VueDemi.inject("app"),o=n?.page?.getNode(e.id||""),r=VueDemi.computed((()=>n?n.transformStyle(e.style||{}):e.style)),i={config:e,...t};return o&&(o.emit("created",i),VueDemi.onMounted((()=>{o.emit("mounted",i)})),VueDemi.onBeforeUnmount((()=>{o.emit("destroy",i)}))),{app:n,node:o,style:r,display:t=>{if(!1===t.visible)return!1;if(!1===t.condResult)return!1;const e=t.display;return"function"==typeof e?e(n):!1!==e}}},i=["id"],a=Vue.defineComponent({__name:"Container",props:{config:{},model:{default:()=>({})}},setup(t){const e=t,{display:n,app:a}=r({config:e.config,methods:{}}),s=Vue.computed((()=>{const t=["magic-ui-container"];return e.config.layout&&t.push(`magic-layout-${e.config.layout}`),e.config.className&&t.push(e.config.className),t.join(" ")}));return(t,e)=>Vue.unref(n)(t.config)?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,id:`${t.config.id}`,class:Vue.normalizeClass(s.value),style:Vue.normalizeStyle(Vue.unref(a)?.transformStyle(t.config.style||{}))},[Vue.renderSlot(t.$slots,"default",{},(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t.config.items,(t=>(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[Vue.unref(n)(t)?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(`magic-ui-${Vue.unref(o)(t.type)}`),{key:t.id,id:t.id,class:Vue.normalizeClass(`${t.className||""}`),style:Vue.normalizeStyle(Vue.unref(a)?.transformStyle(t.style||{})),config:{...t,[Vue.unref("__tmagic__dslNode")]:!0}},null,8,["id","class","style","config"])):Vue.createCommentVNode("",!0)],64)))),256))]))],14,i)):Vue.createCommentVNode("",!0)}}),s=Vue.defineComponent({__name:"index",props:{config:{},model:{default:()=>({})}},setup:t=>(r({config:t.config,methods:{refresh:()=>{window.location.reload()}}}),(t,e)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(a),{class:"magic-ui-page",config:t.config},null,8,["config"])))}),u={class:"magic-ui-button"},c=Vue.defineComponent({__name:"index",props:{config:{},model:{default:()=>({})}},setup:t=>(r({config:t.config,methods:{}}),(t,e)=>(Vue.openBlock(),Vue.createElementBlock("button",u,[Vue.renderSlot(t.$slots,"default",{},(()=>[Vue.createElementVNode("p",null,Vue.toDisplayString(t.config?.text||""),1)]))])))}),l=Vue.defineComponent({__name:"index",props:{config:{},model:{default:()=>({})}},setup:t=>(r({config:t.config,methods:{}}),(t,e)=>(Vue.openBlock(),Vue.createElementBlock("p",null,Vue.toDisplayString(t.config.text),1)))}),f=["src"],d=Vue.defineComponent({__name:"index",props:{config:{},model:{default:()=>({})}},setup(t){const e=t,n=()=>{e.config.url&&(window.location.href=e.config.url)};return r({config:e.config,methods:{}}),(t,e)=>(Vue.openBlock(),Vue.createElementBlock("img",{class:"magic-ui-img",src:t.config.src,onClick:n},null,8,f))}});var g={},h={},p={};let m;const y=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];p.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},p.getSymbolTotalCodewords=function(t){return y[t]},p.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},p.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');m=t},p.isKanjiModeEnabled=function(){return void 0!==m},p.toSJIS=function(t){return m(t)};var w={};function E(){this.buffer=[],this.length=0}!function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(o){return n}}}(w),E.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var v=E;function C(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}C.prototype.set=function(t,e,n,o){const r=t*this.size+e;this.data[r]=n,o&&(this.reservedBit[r]=!0)},C.prototype.get=function(t,e){return this.data[t*this.size+e]},C.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n},C.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var B=C,A={};!function(t){const e=p.getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];const n=Math.floor(t/7)+2,o=e(t),r=145===o?26:2*Math.ceil((o-13)/(2*n-2)),i=[o-7];for(let e=1;e<n-1;e++)i[e]=i[e-1]-r;return i.push(6),i.reverse()},t.getPositions=function(e){const n=[],o=t.getRowColCoords(e),r=o.length;for(let t=0;t<r;t++)for(let e=0;e<r;e++)0===t&&0===e||0===t&&e===r-1||t===r-1&&0===e||n.push([o[t],o[e]]);return n}}(A);var V={};const N=p.getSymbolSize;V.getPositions=function(t){const e=N(t);return[[0,0],[e-7,0],[0,e-7]]};var I={};!function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e=3,n=3,o=40,r=10;function i(e,n,o){switch(e){case t.Patterns.PATTERN000:return(n+o)%2==0;case t.Patterns.PATTERN001:return n%2==0;case t.Patterns.PATTERN010:return o%3==0;case t.Patterns.PATTERN011:return(n+o)%3==0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(o/3))%2==0;case t.Patterns.PATTERN101:return n*o%2+n*o%3==0;case t.Patterns.PATTERN110:return(n*o%2+n*o%3)%2==0;case t.Patterns.PATTERN111:return(n*o%3+(n+o)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(t){const n=t.size;let o=0,r=0,i=0,a=null,s=null;for(let u=0;u<n;u++){r=i=0,a=s=null;for(let c=0;c<n;c++){let n=t.get(u,c);n===a?r++:(r>=5&&(o+=e+(r-5)),a=n,r=1),n=t.get(c,u),n===s?i++:(i>=5&&(o+=e+(i-5)),s=n,i=1)}r>=5&&(o+=e+(r-5)),i>=5&&(o+=e+(i-5))}return o},t.getPenaltyN2=function(t){const e=t.size;let o=0;for(let n=0;n<e-1;n++)for(let r=0;r<e-1;r++){const e=t.get(n,r)+t.get(n,r+1)+t.get(n+1,r)+t.get(n+1,r+1);4!==e&&0!==e||o++}return o*n},t.getPenaltyN3=function(t){const e=t.size;let n=0,r=0,i=0;for(let o=0;o<e;o++){r=i=0;for(let a=0;a<e;a++)r=r<<1&2047|t.get(o,a),a>=10&&(1488===r||93===r)&&n++,i=i<<1&2047|t.get(a,o),a>=10&&(1488===i||93===i)&&n++}return n*o},t.getPenaltyN4=function(t){let e=0;const n=t.data.length;for(let o=0;o<n;o++)e+=t.data[o];return Math.abs(Math.ceil(100*e/n/5)-10)*r},t.applyMask=function(t,e){const n=e.size;for(let o=0;o<n;o++)for(let r=0;r<n;r++)e.isReserved(r,o)||e.xor(r,o,i(t,r,o))},t.getBestMask=function(e,n){const o=Object.keys(t.Patterns).length;let r=0,i=1/0;for(let a=0;a<o;a++){n(a),t.applyMask(a,e);const o=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),o<i&&(i=o,r=a)}return r}}(I);var M={};const T=w,P=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],R=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];M.getBlocksCount=function(t,e){switch(e){case T.L:return P[4*(t-1)+0];case T.M:return P[4*(t-1)+1];case T.Q:return P[4*(t-1)+2];case T.H:return P[4*(t-1)+3];default:return}},M.getTotalCodewordsCount=function(t,e){switch(e){case T.L:return R[4*(t-1)+0];case T.M:return R[4*(t-1)+1];case T.Q:return R[4*(t-1)+2];case T.H:return R[4*(t-1)+3];default:return}};var b={},k={};const x=new Uint8Array(512),L=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)x[e]=t,L[t]=e,t<<=1,256&t&&(t^=285);for(let e=255;e<512;e++)x[e]=x[e-255]}(),k.log=function(t){if(t<1)throw new Error("log("+t+")");return L[t]},k.exp=function(t){return x[t]},k.mul=function(t,e){return 0===t||0===e?0:x[L[t]+L[e]]},function(t){const e=k;t.mul=function(t,n){const o=new Uint8Array(t.length+n.length-1);for(let r=0;r<t.length;r++)for(let i=0;i<n.length;i++)o[r+i]^=e.mul(t[r],n[i]);return o},t.mod=function(t,n){let o=new Uint8Array(t);for(;o.length-n.length>=0;){const t=o[0];for(let i=0;i<n.length;i++)o[i]^=e.mul(n[i],t);let r=0;for(;r<o.length&&0===o[r];)r++;o=o.slice(r)}return o},t.generateECPolynomial=function(n){let o=new Uint8Array([1]);for(let r=0;r<n;r++)o=t.mul(o,new Uint8Array([1,e.exp(r)]));return o}}(b);const S=b;function _(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}_.prototype.initialize=function(t){this.degree=t,this.genPoly=S.generateECPolynomial(this.degree)},_.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const n=S.mod(e,this.genPoly),o=this.degree-n.length;if(o>0){const t=new Uint8Array(this.degree);return t.set(n,o),t}return n};var U=_,D={},F={},z={isValid:function(t){return!isNaN(t)&&t>=1&&t<=40}},H={};const O="[0-9]+";let J="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";J=J.replace(/u/g,"\\u");const K="(?:(?![A-Z0-9 $%*+\\-./:]|"+J+")(?:.|[\r\n]))+";H.KANJI=new RegExp(J,"g"),H.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),H.BYTE=new RegExp(K,"g"),H.NUMERIC=new RegExp(O,"g"),H.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const Y=new RegExp("^"+J+"$"),$=new RegExp("^"+O+"$"),j=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");H.testKanji=function(t){return Y.test(t)},H.testNumeric=function(t){return $.test(t)},H.testAlphanumeric=function(t){return j.test(t)},function(t){const e=z,n=H;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,n){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(n))throw new Error("Invalid version: "+n);return n>=1&&n<10?t.ccBits[0]:n<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(e,n){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(o){return n}}}(F),function(t){const e=p,n=M,o=w,r=F,i=z,a=e.getBCHDigit(7973);function s(t,e){return r.getCharCountIndicator(t,e)+4}function u(t,e){let n=0;return t.forEach((function(t){const o=s(t.mode,e);n+=o+t.getBitsLength()})),n}t.from=function(t,e){return i.isValid(t)?parseInt(t,10):e},t.getCapacity=function(t,o,a){if(!i.isValid(t))throw new Error("Invalid QR Code version");void 0===a&&(a=r.BYTE);const u=8*(e.getSymbolTotalCodewords(t)-n.getTotalCodewordsCount(t,o));if(a===r.MIXED)return u;const c=u-s(a,t);switch(a){case r.NUMERIC:return Math.floor(c/10*3);case r.ALPHANUMERIC:return Math.floor(c/11*2);case r.KANJI:return Math.floor(c/13);case r.BYTE:default:return Math.floor(c/8)}},t.getBestVersionForData=function(e,n){let i;const a=o.from(n,o.M);if(Array.isArray(e)){if(e.length>1)return function(e,n){for(let o=1;o<=40;o++)if(u(e,o)<=t.getCapacity(o,n,r.MIXED))return o}(e,a);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,n,o){for(let r=1;r<=40;r++)if(n<=t.getCapacity(r,o,e))return r}(i.mode,i.getLength(),a)},t.getEncodedBits=function(t){if(!i.isValid(t)||t<7)throw new Error("Invalid QR Code version");let n=t<<12;for(;e.getBCHDigit(n)-a>=0;)n^=7973<<e.getBCHDigit(n)-a;return t<<12|n}}(D);var q={};const Q=p,Z=Q.getBCHDigit(1335);q.getEncodedBits=function(t,e){const n=t.bit<<3|e;let o=n<<10;for(;Q.getBCHDigit(o)-Z>=0;)o^=1335<<Q.getBCHDigit(o)-Z;return 21522^(n<<10|o)};var G={};const X=F;function W(t){this.mode=X.NUMERIC,this.data=t.toString()}W.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},W.prototype.getLength=function(){return this.data.length},W.prototype.getBitsLength=function(){return W.getBitsLength(this.data.length)},W.prototype.write=function(t){let e,n,o;for(e=0;e+3<=this.data.length;e+=3)n=this.data.substr(e,3),o=parseInt(n,10),t.put(o,10);const r=this.data.length-e;r>0&&(n=this.data.substr(e),o=parseInt(n,10),t.put(o,3*r+1))};var tt=W;const et=F,nt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function ot(t){this.mode=et.ALPHANUMERIC,this.data=t}ot.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},ot.prototype.getLength=function(){return this.data.length},ot.prototype.getBitsLength=function(){return ot.getBitsLength(this.data.length)},ot.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let n=45*nt.indexOf(this.data[e]);n+=nt.indexOf(this.data[e+1]),t.put(n,11)}this.data.length%2&&t.put(nt.indexOf(this.data[e]),6)};var rt=ot;const it=function(t){for(var e=[],n=t.length,o=0;o<n;o++){var r=t.charCodeAt(o);if(r>=55296&&r<=56319&&n>o+1){var i=t.charCodeAt(o+1);i>=56320&&i<=57343&&(r=1024*(r-55296)+i-56320+65536,o+=1)}r<128?e.push(r):r<2048?(e.push(r>>6|192),e.push(63&r|128)):r<55296||r>=57344&&r<65536?(e.push(r>>12|224),e.push(r>>6&63|128),e.push(63&r|128)):r>=65536&&r<=1114111?(e.push(r>>18|240),e.push(r>>12&63|128),e.push(r>>6&63|128),e.push(63&r|128)):e.push(239,191,189)}return new Uint8Array(e).buffer},at=F;function st(t){this.mode=at.BYTE,"string"==typeof t&&(t=it(t)),this.data=new Uint8Array(t)}st.getBitsLength=function(t){return 8*t},st.prototype.getLength=function(){return this.data.length},st.prototype.getBitsLength=function(){return st.getBitsLength(this.data.length)},st.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var ut=st;const ct=F,lt=p;function ft(t){this.mode=ct.KANJI,this.data=t}ft.getBitsLength=function(t){return 13*t},ft.prototype.getLength=function(){return this.data.length},ft.prototype.getBitsLength=function(){return ft.getBitsLength(this.data.length)},ft.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=lt.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13)}};var dt=ft,gt={exports:{}};!function(t){var e={single_source_shortest_paths:function(t,n,o){var r={},i={};i[n]=0;var a,s,u,c,l,f,d,g=e.PriorityQueue.make();for(g.push(n,0);!g.empty();)for(u in s=(a=g.pop()).value,c=a.cost,l=t[s]||{})l.hasOwnProperty(u)&&(f=c+l[u],d=i[u],(void 0===i[u]||d>f)&&(i[u]=f,g.push(u,f),r[u]=s));if(void 0!==o&&void 0===i[o]){var h=["Could not find a path from ",n," to ",o,"."].join("");throw new Error(h)}return r},extract_shortest_path_from_predecessor_list:function(t,e){for(var n=[],o=e;o;)n.push(o),t[o],o=t[o];return n.reverse(),n},find_path:function(t,n,o){var r=e.single_source_shortest_paths(t,n,o);return e.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(t){var n,o=e.PriorityQueue,r={};for(n in t=t||{},o)o.hasOwnProperty(n)&&(r[n]=o[n]);return r.queue=[],r.sorter=t.sorter||o.default_sorter,r},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var n={value:t,cost:e};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e}(gt);var ht=gt.exports;!function(t){const e=F,n=tt,o=rt,r=ut,i=dt,a=H,s=p,u=ht;function c(t){return unescape(encodeURIComponent(t)).length}function l(t,e,n){const o=[];let r;for(;null!==(r=t.exec(n));)o.push({data:r[0],index:r.index,mode:e,length:r[0].length});return o}function f(t){const n=l(a.NUMERIC,e.NUMERIC,t),o=l(a.ALPHANUMERIC,e.ALPHANUMERIC,t);let r,i;return s.isKanjiModeEnabled()?(r=l(a.BYTE,e.BYTE,t),i=l(a.KANJI,e.KANJI,t)):(r=l(a.BYTE_KANJI,e.BYTE,t),i=[]),n.concat(o,r,i).sort((function(t,e){return t.index-e.index})).map((function(t){return{data:t.data,mode:t.mode,length:t.length}}))}function d(t,a){switch(a){case e.NUMERIC:return n.getBitsLength(t);case e.ALPHANUMERIC:return o.getBitsLength(t);case e.KANJI:return i.getBitsLength(t);case e.BYTE:return r.getBitsLength(t)}}function g(t,a){let u;const c=e.getBestModeForData(t);if(u=e.from(a,c),u!==e.BYTE&&u.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+e.toString(u)+".\n Suggested mode is: "+e.toString(c));switch(u!==e.KANJI||s.isKanjiModeEnabled()||(u=e.BYTE),u){case e.NUMERIC:return new n(t);case e.ALPHANUMERIC:return new o(t);case e.KANJI:return new i(t);case e.BYTE:return new r(t)}}t.fromArray=function(t){return t.reduce((function(t,e){return"string"==typeof e?t.push(g(e,null)):e.data&&t.push(g(e.data,e.mode)),t}),[])},t.fromString=function(n,o){const r=function(t){const n=[];for(let o=0;o<t.length;o++){const r=t[o];switch(r.mode){case e.NUMERIC:n.push([r,{data:r.data,mode:e.ALPHANUMERIC,length:r.length},{data:r.data,mode:e.BYTE,length:r.length}]);break;case e.ALPHANUMERIC:n.push([r,{data:r.data,mode:e.BYTE,length:r.length}]);break;case e.KANJI:n.push([r,{data:r.data,mode:e.BYTE,length:c(r.data)}]);break;case e.BYTE:n.push([{data:r.data,mode:e.BYTE,length:c(r.data)}])}}return n}(f(n,s.isKanjiModeEnabled())),i=function(t,n){const o={},r={start:{}};let i=["start"];for(let a=0;a<t.length;a++){const s=t[a],u=[];for(let t=0;t<s.length;t++){const c=s[t],l=""+a+t;u.push(l),o[l]={node:c,lastCount:0},r[l]={};for(let t=0;t<i.length;t++){const a=i[t];o[a]&&o[a].node.mode===c.mode?(r[a][l]=d(o[a].lastCount+c.length,c.mode)-d(o[a].lastCount,c.mode),o[a].lastCount+=c.length):(o[a]&&(o[a].lastCount=c.length),r[a][l]=d(c.length,c.mode)+4+e.getCharCountIndicator(c.mode,n))}}i=u}for(let e=0;e<i.length;e++)r[i[e]].end=0;return{map:r,table:o}}(r,o),a=u.find_path(i.map,"start","end"),l=[];for(let t=1;t<a.length-1;t++)l.push(i.table[a[t]].node);return t.fromArray(function(t){return t.reduce((function(t,e){const n=t.length-1>=0?t[t.length-1]:null;return n&&n.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)}),[])}(l))},t.rawSplit=function(e){return t.fromArray(f(e,s.isKanjiModeEnabled()))}}(G);const pt=p,mt=w,yt=v,wt=B,Et=A,vt=V,Ct=I,Bt=M,At=U,Vt=D,Nt=q,It=F,Mt=G;function Tt(t,e,n){const o=t.size,r=Nt.getEncodedBits(e,n);let i,a;for(i=0;i<15;i++)a=1==(r>>i&1),i<6?t.set(i,8,a,!0):i<8?t.set(i+1,8,a,!0):t.set(o-15+i,8,a,!0),i<8?t.set(8,o-i-1,a,!0):i<9?t.set(8,15-i-1+1,a,!0):t.set(8,15-i-1,a,!0);t.set(o-8,8,1,!0)}function Pt(t,e,n){const o=new yt;n.forEach((function(e){o.put(e.mode.bit,4),o.put(e.getLength(),It.getCharCountIndicator(e.mode,t)),e.write(o)}));const r=8*(pt.getSymbolTotalCodewords(t)-Bt.getTotalCodewordsCount(t,e));for(o.getLengthInBits()+4<=r&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(0);const i=(r-o.getLengthInBits())/8;for(let a=0;a<i;a++)o.put(a%2?17:236,8);return function(t,e,n){const o=pt.getSymbolTotalCodewords(e),r=Bt.getTotalCodewordsCount(e,n),i=o-r,a=Bt.getBlocksCount(e,n),s=o%a,u=a-s,c=Math.floor(o/a),l=Math.floor(i/a),f=l+1,d=c-l,g=new At(d);let h=0;const p=new Array(a),m=new Array(a);let y=0;const w=new Uint8Array(t.buffer);for(let A=0;A<a;A++){const t=A<u?l:f;p[A]=w.slice(h,h+t),m[A]=g.encode(p[A]),h+=t,y=Math.max(y,t)}const E=new Uint8Array(o);let v,C,B=0;for(v=0;v<y;v++)for(C=0;C<a;C++)v<p[C].length&&(E[B++]=p[C][v]);for(v=0;v<d;v++)for(C=0;C<a;C++)E[B++]=m[C][v];return E}(o,t,e)}function Rt(t,e,n,o){let r;if(Array.isArray(t))r=Mt.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let o=e;if(!o){const e=Mt.rawSplit(t);o=Vt.getBestVersionForData(e,n)}r=Mt.fromString(t,o||40)}}const i=Vt.getBestVersionForData(r,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<i)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+i+".\n")}else e=i;const a=Pt(e,n,r),s=pt.getSymbolSize(e),u=new wt(s);return function(t,e){const n=t.size,o=vt.getPositions(e);for(let r=0;r<o.length;r++){const e=o[r][0],i=o[r][1];for(let o=-1;o<=7;o++)if(!(e+o<=-1||n<=e+o))for(let r=-1;r<=7;r++)i+r<=-1||n<=i+r||(o>=0&&o<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===o||6===o)||o>=2&&o<=4&&r>=2&&r<=4?t.set(e+o,i+r,!0,!0):t.set(e+o,i+r,!1,!0))}}(u,e),function(t){const e=t.size;for(let n=8;n<e-8;n++){const e=n%2==0;t.set(n,6,e,!0),t.set(6,n,e,!0)}}(u),function(t,e){const n=Et.getPositions(e);for(let o=0;o<n.length;o++){const e=n[o][0],r=n[o][1];for(let n=-2;n<=2;n++)for(let o=-2;o<=2;o++)-2===n||2===n||-2===o||2===o||0===n&&0===o?t.set(e+n,r+o,!0,!0):t.set(e+n,r+o,!1,!0)}}(u,e),Tt(u,n,0),e>=7&&function(t,e){const n=t.size,o=Vt.getEncodedBits(e);let r,i,a;for(let s=0;s<18;s++)r=Math.floor(s/3),i=s%3+n-8-3,a=1==(o>>s&1),t.set(r,i,a,!0),t.set(i,r,a,!0)}(u,e),function(t,e){const n=t.size;let o=-1,r=n-1,i=7,a=0;for(let s=n-1;s>0;s-=2)for(6===s&&s--;;){for(let n=0;n<2;n++)if(!t.isReserved(r,s-n)){let o=!1;a<e.length&&(o=1==(e[a]>>>i&1)),t.set(r,s-n,o),i--,-1===i&&(a++,i=7)}if(r+=o,r<0||n<=r){r-=o,o=-o;break}}}(u,a),isNaN(o)&&(o=Ct.getBestMask(u,Tt.bind(null,u,n))),Ct.applyMask(o,u),Tt(u,n,o),{modules:u,version:e,errorCorrectionLevel:n,maskPattern:o,segments:r}}h.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let n,o,r=mt.M;return void 0!==e&&(r=mt.from(e.errorCorrectionLevel,mt.M),n=Vt.from(e.version),o=Ct.from(e.maskPattern),e.toSJISFunc&&pt.setToSJISFunction(e.toSJISFunc)),Rt(t,n,r,o)};var bt={},kt={};!function(t){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map((function(t){return[t,t]})))),6===e.length&&e.push("F","F");const n=parseInt(e.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});const n=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,o=t.width&&t.width>=21?t.width:void 0,r=t.scale||4;return{width:o,scale:o?4:r,margin:n,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},t.getImageWidth=function(e,n){const o=t.getScale(e,n);return Math.floor((e+2*n.margin)*o)},t.qrToImageData=function(e,n,o){const r=n.modules.size,i=n.modules.data,a=t.getScale(r,o),s=Math.floor((r+2*o.margin)*a),u=o.margin*a,c=[o.color.light,o.color.dark];for(let t=0;t<s;t++)for(let n=0;n<s;n++){let l=4*(t*s+n),f=o.color.light;t>=u&&n>=u&&t<s-u&&n<s-u&&(f=c[i[Math.floor((t-u)/a)*r+Math.floor((n-u)/a)]?1:0]),e[l++]=f.r,e[l++]=f.g,e[l++]=f.b,e[l]=f.a}}}(kt),function(t){const e=kt;t.render=function(t,n,o){let r=o,i=n;void 0!==r||n&&n.getContext||(r=n,n=void 0),n||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),r=e.getOptions(r);const a=e.getImageWidth(t.modules.size,r),s=i.getContext("2d"),u=s.createImageData(a,a);return e.qrToImageData(u.data,t,r),function(t,e,n){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=n,e.width=n,e.style.height=n+"px",e.style.width=n+"px"}(s,i,a),s.putImageData(u,0,0),i},t.renderToDataURL=function(e,n,o){let r=o;void 0!==r||n&&n.getContext||(r=n,n=void 0),r||(r={});const i=t.render(e,n,r),a=r.type||"image/png",s=r.rendererOpts||{};return i.toDataURL(a,s.quality)}}(bt);var xt={};const Lt=kt;function St(t,e){const n=t.a/255,o=e+'="'+t.hex+'"';return n<1?o+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':o}function _t(t,e,n){let o=t+e;return void 0!==n&&(o+=" "+n),o}xt.render=function(t,e,n){const o=Lt.getOptions(e),r=t.modules.size,i=t.modules.data,a=r+2*o.margin,s=o.color.light.a?"<path "+St(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",u="<path "+St(o.color.dark,"stroke")+' d="'+function(t,e,n){let o="",r=0,i=!1,a=0;for(let s=0;s<t.length;s++){const u=Math.floor(s%e),c=Math.floor(s/e);u||i||(i=!0),t[s]?(a++,s>0&&u>0&&t[s-1]||(o+=i?_t("M",u+n,.5+c+n):_t("m",r,0),r=0,i=!1),u+1<e&&t[s+1]||(o+=_t("h",a),a=0)):r++}return o}(i,r,o.margin)+'"/>',c='viewBox="0 0 '+a+" "+a+'"',l='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+c+' shape-rendering="crispEdges">'+s+u+"</svg>\n";return"function"==typeof n&&n(null,l),l};const Ut=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},Dt=h,Ft=bt,zt=xt;function Ht(t,e,n,o,r){const i=[].slice.call(arguments,1),a=i.length,s="function"==typeof i[a-1];if(!s&&!Ut())throw new Error("Callback required as last argument");if(!s){if(a<1)throw new Error("Too few arguments provided");return 1===a?(n=e,e=o=void 0):2!==a||e.getContext||(o=n,n=e,e=void 0),new Promise((function(r,i){try{const i=Dt.create(n,o);r(t(i,e,o))}catch(a){i(a)}}))}if(a<2)throw new Error("Too few arguments provided");2===a?(r=n,n=e,e=o=void 0):3===a&&(e.getContext&&void 0===r?(r=o,o=void 0):(r=o,o=n,n=e,e=void 0));try{const i=Dt.create(n,o);r(null,t(i,e,o))}catch(u){r(u)}}g.create=Dt.create,g.toCanvas=Ht.bind(null,Ft.render),g.toDataURL=Ht.bind(null,Ft.renderToDataURL),g.toString=Ht.bind(null,(function(t,e,n){return zt.render(t,n)}));const Ot=["src"],Jt=["id"],Kt={class:"magic-ui-iterator-container"};t("default",{page:s,container:a,button:c,text:l,img:d,qrcode:Vue.defineComponent({__name:"index",props:{config:{},model:{default:()=>({})}},setup(t){const e=t,n=Vue.ref();return Vue.watch((()=>e.config.url),((t="")=>{g.toDataURL(t,((t,e)=>{t&&console.error(t),n.value=e}))}),{immediate:!0}),r({config:e.config,methods:{}}),(t,e)=>(Vue.openBlock(),Vue.createElementBlock("img",{class:"magic-ui-qrcode",src:n.value},null,8,Ot))}}),overlay:Vue.defineComponent({__name:"index",props:{config:{},model:{default:()=>({})}},setup(t){const e=t,n=Vue.ref(!1),{app:o,node:i}=r({config:e.config,methods:{openOverlay(){n.value=!0,o?.emit("overlay:open",i)},closeOverlay(){n.value=!1,o?.emit("overlay:close",i)}}}),a=(t,n)=>{n.find((t=>t.id===e.config.id))?i?.instance.openOverlay():i?.instance.closeOverlay()};return o?.page?.on("editor:select",a),Vue.onBeforeUnmount((()=>{o?.page?.off("editor:select",a)})),(t,e)=>{const o=Vue.resolveComponent("magic-ui-container");return n.value?(Vue.openBlock(),Vue.createBlock(o,{key:0,class:"magic-ui-overlay",config:{items:t.config.items}},{default:Vue.withCtx((()=>[Vue.renderSlot(t.$slots,"default")])),_:3},8,["config"])):Vue.createCommentVNode("",!0)}}}),"page-fragment-container":((t,e)=>{const n=t.__vccOpts||t;for(const[o,r]of e)n[o]=r;return n})(Vue.defineComponent({__name:"PageFragmentContainer",props:{config:{},model:{default:()=>({})}},setup(t){const e=t,{app:o}=r({config:e.config,methods:{}}),i=Vue.computed((()=>o?.dsl?.items?.find((t=>t.id===e.config.pageFragmentId)))),s=Vue.computed((()=>{if(!i.value)return{items:[],id:"",type:n.CONTAINER};const{id:t,type:e,items:r,...a}=i.value,s=r.map((t=>{const{id:e,...n}=t;return{id:"",...n}}));return"editor"===o?.platform?{...a,items:s,id:"",type:n.CONTAINER}:{...a,items:r,id:"",type:n.CONTAINER}}));return(t,e)=>(Vue.openBlock(),Vue.createElementBlock("div",{id:`${t.config.id||""}`,class:"magic-ui-page-fragment-container"},[Vue.createVNode(Vue.unref(a),{config:s.value,model:t.model},null,8,["config","model"])],8,Jt))}}),[["__scopeId","data-v-302e48c7"]]),"page-fragment":Vue.defineComponent({__name:"PageFragment",props:{config:{},model:{default:()=>({})}},setup:t=>(r({config:t.config,methods:{}}),(t,e)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(a),{class:"magic-ui-page-fragment",config:t.config},null,8,["config"])))}),"iterator-container":Vue.defineComponent({__name:"IteratorContainer",props:{config:{},model:{default:()=>({})}},setup(t){const e=t,{app:o}=r({config:e.config,methods:{}}),i=Vue.computed((()=>{let{iteratorData:t=[]}=e.config;return Array.isArray(t)||(t=[]),"editor"!==o?.platform||t.length||t.push({}),t.map((t=>{const r="editor"===o?.platform||(o?.dataSourceManager?.compliedIteratorItemConds(t,e.config.itemConfig.displayConds)??!0);return{items:o?.dataSourceManager?.compliedIteratorItems(t,e.config.items,e.config.dsField)??e.config.items,id:"",type:n.CONTAINER,condResult:r,style:{...e.config.itemConfig.style,position:"relative",left:0,top:0}}}))}));return(t,e)=>(Vue.openBlock(),Vue.createElementBlock("div",Kt,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(i.value,((t,e)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(a),{key:e,config:t},null,8,["config"])))),128))]))}})})}}}));
//# sourceMappingURL=comp-entry-legacy-ClCd3lyo.js.map