System.register(["./tmagic-schema-legacy-C7X3-SIM.js","./Container.vue_vue_type_script_setup_true_lang-legacy-BtarL2gS.js","./useApp-legacy-DUlYpSwJ.js","./index-legacy-NzaO8zyP.js"],(function(e,t){"use strict";var o,n,r;return{setters:[e=>{o=e.a},e=>{n=e._},e=>{r=e.u},null],execute:function(){const t={class:"magic-ui-iterator-container"};e("default",Vue.defineComponent({__name:"IteratorContainer",props:{config:{},model:{default:()=>({})}},setup(e){const i=e,{app:a}=r({config:i.config,methods:{}}),c=Vue.computed((()=>{let{iteratorData:e=[]}=i.config;return Array.isArray(e)||(e=[]),"editor"!==a?.platform||e.length||e.push({}),e.map((e=>{const t="editor"===a?.platform||(a?.dataSourceManager?.compliedIteratorItemConds(e,i.config.itemConfig.displayConds)??!0);return{items:a?.dataSourceManager?.compliedIteratorItems(e,i.config.items,i.config.dsField)??i.config.items,id:"",type:o.CONTAINER,condResult:t,style:{...i.config.itemConfig.style,position:"relative",left:0,top:0}}}))}));return(e,o)=>(Vue.openBlock(),Vue.createElementBlock("div",t,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(c.value,((e,t)=>(Vue.openBlock(),Vue.createBlock(Vue.unref(n),{key:t,config:e},null,8,["config"])))),128))]))}}))}}}));
//# sourceMappingURL=IteratorContainer-legacy-Dkok3ezX.js.map
