import{u}from"./useApp-khRuD069.js";const m=Vue.defineComponent({__name:"index",props:{config:{},model:{default:()=>({})}},setup(a){var s;const c=a,t=Vue.ref(!1),{app:e,node:o}=u({config:c.config,methods:{openOverlay(){t.value=!0,e==null||e.emit("overlay:open",o)},closeOverlay(){t.value=!1,e==null||e.emit("overlay:close",o)}}}),l=(n,r)=>{r.find(i=>i.id===c.config.id)?o==null||o.instance.openOverlay():o==null||o.instance.closeOverlay()};return(s=e==null?void 0:e.page)==null||s.on("editor:select",l),Vue.onBeforeUnmount(()=>{var n;(n=e==null?void 0:e.page)==null||n.off("editor:select",l)}),(n,r)=>{const i=Vue.resolveComponent("magic-ui-container");return t.value?(Vue.openBlock(),Vue.createBlock(i,{key:0,class:"magic-ui-overlay",config:{items:n.config.items}},{default:Vue.withCtx(()=>[Vue.renderSlot(n.$slots,"default")]),_:3},8,["config"])):Vue.createCommentVNode("",!0)}}});export{m as default};
//# sourceMappingURL=index-DZQmNOvw.js.map