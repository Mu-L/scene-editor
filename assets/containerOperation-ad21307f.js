import{n as c}from"./index-b54f5418.js";import"./three-dc46505d.js";var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"containerOperation-container"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading-mask"},[t("vis-icon",{staticClass:"ani",attrs:{code:"#iconxuanzhuan"}}),t("span",[e._v("正在加载...")])],1),!e.loading&&!e.floderChildren.length?t("div",{staticClass:"empty-tips"},[t("span",[e._v("未发现相关文件")])]):e._l(e.floderChildren,function(i,o){return t("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:`${i.name}`,expression:"`${item.name}`",modifiers:{bottom:!0}}],key:o,staticClass:"file-item-box",on:{click:function(s){return e.chouseFile(i)}}},[i.dir?[t("vis-icon",{attrs:{size:e.iconSize,code:"#iconwenjianjia"}})]:[t("img",{attrs:{src:e.getUrl(i)}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.selected.find(function(s){return s.id===i.id}),expression:"selected.find((elem) => elem.id === item.id)"}],staticClass:"item-selected-mask",on:{click:function(s){return s.stopPropagation(),e.cancelSelected(i)}}},[t("vis-icon",{staticClass:"item-selected",attrs:{size:"60px",code:"#icongou"}})],1)],t("span",{staticClass:"item-title",domProps:{textContent:e._s(i.name)}}),t("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"删除",expression:"`删除`",modifiers:{bottom:!0}}],staticClass:"item-delete",attrs:{size:"16px",code:"#iconshanchu"},nativeOn:{click:function(s){return s.stopPropagation(),e.remove(i)}}})],2)}),t("div",{staticClass:"file-item-placeholder",style:{display:e.floderChildren.length%2!==0?"block":"none",flex:1}})],2)},l=[];const d={data(){return{iconSize:"35px",timer:"",fileIcon:{mtl:"#iconmtl"},selected:[]}},computed:{loading(){return this.$store.getters["textureLibrary/loading"]},currentFloder(){return this.$store.getters["textureLibrary/currentFloder"]},floderChildren(){return this.currentFloder.children.filter(e=>e.dir?e:this.exts.includes(e.ext))},currentScene(){return this.$store.getters["scene/currentScene"]},exts(){return this.$store.getters["textureLibrary/exts"]},urls(){return this.$store.getters.urls}},methods:{getUrl(e){let r=this.urls[`texture-${e.id}`];return r||(r=URL.createObjectURL(e.texture),this.$store.commit("cacheUrl",{module:"texture",file:e,url:r})),r},chouseFile(e){e.dir?this.$store.commit("textureLibrary/currentFloder",e):this.selected.push(e)},cancelSelected(e){this.selected.some((r,t,i)=>{if(e.id===r.id)return this.selected.splice(t,1),!0})},remove(e){return this.$tool.devTips()}}},n={};var u=c(d,a,l,!1,m,"14e93325",null,null);function m(e){for(let r in n)this[r]=n[r]}const h=function(){return u.exports}();export{h as default};
