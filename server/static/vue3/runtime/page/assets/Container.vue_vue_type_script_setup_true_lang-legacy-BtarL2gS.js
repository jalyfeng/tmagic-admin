System.register(["./index-legacy-NzaO8zyP.js","./useApp-legacy-DUlYpSwJ.js"],(function(e,n){"use strict";var o;return{setters:[null,e=>{o=e.u}],execute:function(){const n=(e="")=>e.replace(/\B([A-Z])/g,"-$1").toLowerCase(),t=["id"];e("_",Vue.defineComponent({__name:"Container",props:{config:{},model:{default:()=>({})}},setup(e){const u=e,{display:l,app:c}=o({config:u.config,methods:{}}),s=Vue.computed((()=>{const e=["magic-ui-container"];return u.config.layout&&e.push(`magic-layout-${u.config.layout}`),u.config.className&&e.push(u.config.className),e.join(" ")}));return(e,o)=>Vue.unref(l)(e.config)?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,id:`${e.config.id}`,class:Vue.normalizeClass(s.value),style:Vue.normalizeStyle(Vue.unref(c)?.transformStyle(e.config.style||{}))},[Vue.renderSlot(e.$slots,"default",{},(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.config.items,(e=>(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[Vue.unref(l)(e)?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(`magic-ui-${Vue.unref(n)(e.type)}`),{key:e.id,id:e.id,class:Vue.normalizeClass(`${e.className||""}`),style:Vue.normalizeStyle(Vue.unref(c)?.transformStyle(e.style||{})),config:{...e,[Vue.unref("__tmagic__dslNode")]:!0}},null,8,["id","class","style","config"])):Vue.createCommentVNode("",!0)],64)))),256))]))],14,t)):Vue.createCommentVNode("",!0)}}))}}}));
//# sourceMappingURL=Container.vue_vue_type_script_setup_true_lang-legacy-BtarL2gS.js.map