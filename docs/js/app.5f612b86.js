(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],u=0,f=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c10d4137"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],i=s[t];if(0!==i)if(i)e.push(i[2]);else{var n=new Promise((function(e,n){i=s[t]=[e,n]}));e.push(i[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=o(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var i=s[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,i[1](l)}s[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"00fd":function(t,e,i){"use strict";i("76cf")},"1d6c":function(t,e,i){"use strict";i("36fa")},"36fa":function(t,e,i){},"3c5c":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("div",{staticClass:"d-flex flex-row"},[t._l(t.sections,(function(e,n){return i("task-section",{key:e.id,staticStyle:{width:"320px"},attrs:{index:n,initialSection:e,initialSections:t.sections},on:{editSectionTitle:t.refSectionTitle,addNewTask:t.refNewTask,changeTask:t.refChangeTask}})})),i("v-card-actions",{staticClass:"aling-start"},[i("v-btn",{on:{click:t.addSection}},[t._v("セクションを追加")])],1)],2)])},a=[],o=(i("a434"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-card",{staticClass:"mx-3 pa-2",attrs:{"max-width":"300px"}},[i("v-card-text",[i("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.isSecTtl,expression:"isSecTtl"}],attrs:{type:"text",label:"section-title"},on:{blur:t.sendSectionTitle},model:{value:t.inputSectionTitle,callback:function(e){t.inputSectionTitle=e},expression:"inputSectionTitle"}})],1),i("v-card",{directives:[{name:"show",rawName:"v-show",value:!t.isSecTtl,expression:"!isSecTtl"}],staticClass:"mb-2 py-4 px-2",attrs:{"elevation-2":""},on:{dblclick:t.editSecTtl}},[t._v(" "+t._s(t.section.title)+" ")]),t._l(t.section.taskList,(function(e,n){return i("task",{key:n,attrs:{initialSection:t.section,initialSections:t.sections,initialTask:e,initialTaskId:n},on:{editTaskTtl:t.refTaskTitle,editTaskContent:t.refTaskContent,signIsCheck:t.refIsCheck,signIsStar:t.refIsStar,changeTask:t.refChangeTask,taskDelete:t.refTaskDelete}})})),i("task-new",{attrs:{initialSection:t.section},on:{addNewTask:t.refNewTask}})],2)],1)}),r=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-card",{staticClass:"mx-auto mb-2 pa-3",attrs:{width:"260"}},[i("v-form",[i("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.task.isEditTitle,expression:"task.isEditTitle"}],attrs:{type:"text",label:"task-title"},on:{blur:function(e){return t.sendTaskTitle(t.task,t.taskId)}},model:{value:t.inputTaskTitle,callback:function(e){t.inputTaskTitle=e},expression:"inputTaskTitle"}}),i("v-card",{directives:[{name:"show",rawName:"v-show",value:!t.task.isEditTitle,expression:"!task.isEditTitle"}],staticClass:"py-4",attrs:{"elevation-1":""},on:{dblclick:function(e){return t.editTaskTtl(t.task)}}},[t._v(" "+t._s(t.task.title)+" ")]),i("v-select",{staticClass:"mt-3",attrs:{items:t.sectionTitleList,"item-text":"title","item-value":"id",label:"セクション",outlined:""},on:{change:function(e){return t.sendSectionIdTaskId(t.selectSection,t.taskId)}},model:{value:t.selectSection,callback:function(e){t.selectSection=e},expression:"selectSection"}}),i("v-textarea",{directives:[{name:"show",rawName:"v-show",value:t.task.isEditContent,expression:"task.isEditContent"}],attrs:{label:"task-content"},on:{blur:function(e){return t.sendTaskContent(t.task,t.taskId)}},model:{value:t.inputTaskContent,callback:function(e){t.inputTaskContent=e},expression:"inputTaskContent"}}),i("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!t.task.isEditContent,expression:"!task.isEditContent"}],on:{dblclick:function(e){return t.editTaskContent(t.task)}}},[t._v(" "+t._s(t.task.content)+" ")])],1),i("div",{staticClass:"d-flex justify-end"},[i("v-btn",{on:{click:function(e){return t.editTaskContent(t.task)}}},[i("v-icon",{staticClass:"mx-1",attrs:{color:t.task.isEditContent?"primary":""}},[t._v(" mdi-border-color ")])],1),i("v-btn",{on:{click:function(e){return t.sendIsCheck(t.taskId)}}},[i("v-icon",{staticClass:"mx-1",attrs:{color:t.task.isCheck?"cyan":""}},[t._v(" mdi-check ")])],1),i("v-btn",{on:{click:function(e){return t.sendIsStar(t.taskId)}}},[i("v-icon",{staticClass:"mx-1",attrs:{color:t.task.isStar?"yellow":""}},[t._v(" mdi-star ")])],1),i("v-btn",{on:{click:function(e){return t.$emit("taskDelete",t.taskId)}}},[i("v-icon",{staticClass:"mx-1"},[t._v(" mdi-delete ")])],1)],1)],1)],1)},l=[],u=(i("a9e3"),i("4de4"),i("d3b7"),{props:{initialSection:{type:Object,require:!0},initialSections:{type:[],require:!0},initialTask:{type:Object,require:!0},initialTaskId:{type:Number,require:!0}},data:function(){return{inputTaskTitle:"",inputTaskContent:"",section:this.initialSection,sections:this.initialSections,task:this.initialTask,taskId:this.initialTaskId,selectSection:{id:this.initialSection.id,title:this.initialSection.title}}},methods:{editTaskTtl:function(t){return t.isEditTitle=!t.isEditTitle},editTaskContent:function(t){return t.isEditContent=!t.isEditContent},sendTaskTitle:function(t,e){this.editTaskTtl(t),this.$emit("editTaskTtl",this.inputTaskTitle,e),this.inputTaskTitle=""},sendTaskContent:function(t,e){this.editTaskContent(t),this.$emit("editTaskContent",this.inputTaskContent,e),this.inputTaskContent=""},sendIsCheck:function(t){this.$emit("signIsCheck",t)},sendIsStar:function(t){this.$emit("signIsStar",t)},sendSectionIdTaskId:function(t,e){this.$emit("changeTask",t,e)}},computed:{initSectionTitle:function(){return this.section.title},sectionTitleList:function(){return this.sections.filter((function(t){return null!=t.title}))}},created:function(){}}),d=u,f=(i("1d6c"),i("2877")),h=i("6544"),p=i.n(h),k=i("7496"),v=i("8336"),m=i("b0af"),T=i("99d9"),b=i("4bd4"),C=i("132d"),y=i("b974"),x=i("8654"),S=i("a844"),w=Object(f["a"])(d,c,l,!1,null,"b471a0b4",null),g=w.exports;p()(w,{VApp:k["a"],VBtn:v["a"],VCard:m["a"],VCardText:T["b"],VForm:b["a"],VIcon:C["a"],VSelect:y["a"],VTextField:x["a"],VTextarea:S["a"]});var _=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-card-actions",[i("v-btn",{attrs:{color:""}},[i("v-icon",{on:{click:t.sendNewTask}},[t._v("mdi-plus")])],1)],1)],1)},j=[],I={props:{initialSection:{type:Object,require:!0}},data:function(){return{section:this.initialSection}},methods:{sendNewTask:function(){this.$emit("addNewTask")}}},E=I,V=(i("00fd"),Object(f["a"])(E,_,j,!1,null,"09679df2",null)),L=V.exports;p()(V,{VApp:k["a"],VBtn:v["a"],VCardActions:T["a"],VIcon:C["a"]});var N={components:{Task:g,TaskNew:L},props:["initialSection","initialSections","index"],data:function(){return{isSecTtl:!1,inputSectionTitle:"",section:this.initialSection,sections:this.initialSections,i:this.index}},methods:{editSecTtl:function(){return this.isSecTtl=!this.isSecTtl},sendSectionTitle:function(){this.editSecTtl(),this.$emit("editSectionTitle",this.inputSectionTitle,this.i)},refNewTask:function(){this.$emit("addNewTask",this.i)},refTaskTitle:function(t,e){return this.section.taskList[e].title=t,this.section},refTaskContent:function(t,e){this.section.taskList[e].content=t},refIsCheck:function(t){this.section.taskList[t].isCheck=!this.section.taskList[t].isCheck},refIsStar:function(t){this.section.taskList[t].isStar=!this.section.taskList[t].isStar},refChangeTask:function(t,e){var i=this.section.taskList[e],n=i.title,s=i.content,a=i.isEditTitle,o=i.isEditContent,r=i.isCheck,c=i.isStar,l={sectionId:t,title:n,content:s,isEditTitle:a,isEditContent:o,isCheck:r,isStar:c};this.refTaskDelete(e),this.$emit("changeTask",t,l)},refTaskDelete:function(t){this.section.taskList.splice(t,1)}}},O=N,$=Object(f["a"])(O,o,r,!1,null,null,null),A=$.exports;p()($,{VApp:k["a"],VCard:m["a"],VCardText:T["b"],VTextField:x["a"]});var q={name:"App",components:{TaskSection:A},data:function(){return{countSection:0,sections:[]}},methods:{addSection:function(){this.countSection++,this.sections.push({id:this.countSection,title:null,taskList:[]})},refSectionTitle:function(t,e){this.sections[e].title=t},refNewTask:function(t){this.sections[t].taskList.push({sectionId:t+1,title:null,content:null,isEditTitle:!1,isEditContent:!1,isCheck:!1,isStar:!1})},refChangeTask:function(t,e){this.sections[t-1].taskList.push(e)},refTaskDelete:function(t){this.section.taskList.splice(t,1)}}},P=q,D=(i("d252"),Object(f["a"])(P,s,a,!1,null,"1a86aa2e",null)),F=D.exports;p()(D,{VApp:k["a"],VBtn:v["a"],VCardActions:T["a"]});i("3ca3"),i("ddb0");var M=i("8c4f"),H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("hello-world")},W=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:i("9b19"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,i){return n("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,i){return n("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,i){return n("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},J=[],Q={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},R=Q,z=i("62ad"),G=i("a523"),K=i("adda"),U=i("0fd9"),X=Object(f["a"])(R,B,J,!1,null,null,null),Y=X.exports;p()(X,{VCol:z["a"],VContainer:G["a"],VImg:K["a"],VRow:U["a"]});var Z={name:"Home",components:{HelloWorld:Y}},tt=Z,et=Object(f["a"])(tt,H,W,!1,null,null,null),it=et.exports;n["a"].use(M["a"]);var nt=[{path:"/",name:"Home",component:it},{path:"/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],st=new M["a"]({mode:"history",base:"",routes:nt}),at=st,ot=i("f309");n["a"].use(ot["a"]);var rt=new ot["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:at,vuetify:rt,render:function(t){return t(F)}}).$mount("#app")},"76cf":function(t,e,i){},"9b19":function(t,e,i){t.exports=i.p+"img/logo.63a7d78d.svg"},d252:function(t,e,i){"use strict";i("3c5c")}});
//# sourceMappingURL=app.5f612b86.js.map