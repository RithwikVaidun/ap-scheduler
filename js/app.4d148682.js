(function(t){function e(e){for(var n,r,c=e[0],l=e[1],o=e[2],u=0,v=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);m&&m(e);while(v.length)v.shift()();return a.push.apply(a,o||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,c=1;c<i.length;c++){var l=i[c];0!==s[l]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var m=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[i("div",{staticClass:"d-flex align-center"},[i("h2",[t._v("AP Schedule Maker")])]),i("v-spacer"),i("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[i("span",{staticClass:"mr-2"},[t._v("Latest Release")]),i("v-icon",[t._v("mdi-open-in-new")])],1)],1),i("v-main",[i("SkMaker")],1)],1)},a=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("body",[i("div",{staticClass:"centered"},[i("v-select",{attrs:{items:t.classes,"item-text":"name","menu-props":{maxHeight:"400"},label:"Choose your classes",multiple:"",chips:"","return-object":""},model:{value:t.chosenClasses,callback:function(e){t.chosenClasses=e},expression:"chosenClasses"}}),i("v-container",[i("v-row",{attrs:{"no-gutters":""}},t._l(t.chosenClasses,(function(e){return i("v-col",{key:e.name,attrs:{cols:"12",sm:"4"}},[i("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[i("v-list-item-title",{staticClass:"blue darken-1 headline mb-1"},[t._v(" "+t._s(e.name)+" ")]),i("v-list-item-title",[t._v(" "+t._s(e.date))]),i("v-list-item",[i("v-list-item-content",[e.isEditing?i("v-time-picker",{class:{view:!e.isEditing},attrs:{format:"ampm",scrollable:"",disabled:!e.isEditing},model:{value:e.startTime,callback:function(i){t.$set(e,"startTime",i)},expression:"c.startTime"}}):i("v-list-item-title",[t._v(" "+t._s(e.startTime))])],1)],1),i("v-list-item-content",[i("v-list-item-title",[i("v-btn",{attrs:{text:"",icon:""},on:{click:function(t){e.isEditing=!e.isEditing}}},[e.isEditing?i("v-btn",{attrs:{text:"",icon:""}},[t._v("Save")]):i("v-icon",[t._v("mdi-pencil")])],1)],1)],1),i("v-list-item-title",[t._v(" "+t._s(e.mcqInfo)+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.timePerQ(e.mcqTime,e.mcqQ)))]),i("v-text-field",{staticClass:"centered",staticStyle:{width:"50%"},attrs:{dense:"",step:1,type:"number",placeholder:"Enter number of checks",label:"Number of checks"},model:{value:e.numChecks,callback:function(i){t.$set(e,"numChecks",t._n(i))},expression:"c.numChecks"}}),i("v-list",{attrs:{disabled:""}},[i("v-list-item-group",[i("v-list-item",{staticClass:"blue-grey lighten-2"},[i("v-list-item-content",[i("v-list-item-title",[t._v(" Time")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" Questions Done")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Timer")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" "+t._s(e.startTime))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" START")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("START")])],1)],1),t._l(e.numChecks,(function(n,s){return i("v-list-item",{key:s},[i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.time(Number(e.startTime.split(":")[0]),Number(e.startTime.split(":")[1]),e.mcqTime,e.mcqQ,e.numChecks,s)))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.qDone(e.mcqQ,e.numChecks,s)))])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(t.timer(e.mcqTime,e.mcqQ,e.numChecks,s)))])],1)],1)}))],2)],1)],1)],1)})),1)],1),i("v-btn",{on:{click:t.debug}},[t._v(" Debug ")])],1)])},c=[],l=(i("ac1f"),i("1276"),i("a9e3"),{name:"test",data:function(){return{classes:[{name:"AP Computer Science A",date:"5/18",startTime:"1:00",mcqInfo:"Section I: 90 minutes, 40 MCQ",mcqTime:90,mcqQ:40,numChecks:4,isEditing:!1},{name:"AP Biology",date:"5/27",startTime:"9:00",mcqInfo:"Section I: 90 minutes, 60 MCQ",mcqTime:90,mcqQ:60,numChecks:6,isEditing:!1},{name:"AP Statistics",date:"6/10",startTime:"1:00",mcqInfo:"Section I: 90 minutes, 40 MCQ",mcqTime:90,mcqQ:40,numChecks:4,isEditing:!1},{name:"AP Allah",date:"4/20",startTime:"7:00",nTime:7,mcqInfo:"Section I: 90 minutes, 60 MCQ",mcqTime:84,mcqQ:46,numChecks:6,frqInfo:"Section II: 90 minutes, 6 free-response questions."}],chosenClasses:[],inset:!0}},methods:{debug:function(){var t=this.classes[0].startTime.split(":")[0],e=this.classes[0].startTime.split(":")[1];console.log(Number(t)+1),console.log(t),console.log(Number(e)+13),console.log(e)},timePerQ:function(t,e){var i=Math.floor(t/e),n=Math.round(t%e/e*60);return i+" minutes "+n+" seconds per question"},qDone:function(t,e,i){return Math.round(t/e*(i+1)*10)/10},time:function(t,e,i,n,s,a){var r=Math.round(i/n*this.qDone(n,s,a)+e);while(r>=60)r-=60,t++;return t>12&&(t-=12),r<10?t+":0"+r:t+":"+r},timer:function(t,e,i,n){var s=Math.floor(t/60),a=t%60,r=Math.round(t/e*this.qDone(e,i,n));return a-=r,a<0&&(s--,a+=60),0==a?a="00":a<10&&(a="0"+a),s+":"+a}},computed:{}}),o=l,m=(i("9539"),i("2877")),u=i("6544"),v=i.n(u),p=i("8336"),d=i("b0af"),f=i("62ad"),h=i("a523"),b=i("132d"),_=i("8860"),g=i("da13"),k=i("5d23"),C=i("1baa"),T=i("0fd9"),y=i("b974"),q=i("8654"),S=i("c964"),V=Object(m["a"])(o,r,c,!1,null,"21878436",null),x=V.exports;v()(V,{VBtn:p["a"],VCard:d["a"],VCol:f["a"],VContainer:h["a"],VIcon:b["a"],VList:_["a"],VListItem:g["a"],VListItemContent:k["a"],VListItemGroup:C["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VRow:T["a"],VSelect:y["a"],VTextField:q["a"],VTimePicker:S["a"]});var I={name:"App",components:{SkMaker:x},data:function(){return{}}},w=I,M=i("7496"),P=i("40dc"),Q=i("f6c4"),j=i("2fa4"),O=Object(m["a"])(w,s,a,!1,null,null,null),A=O.exports;v()(O,{VApp:M["a"],VAppBar:P["a"],VBtn:p["a"],VIcon:b["a"],VMain:Q["a"],VSpacer:j["a"]});var E=i("f309");n["a"].use(E["a"]);var L=new E["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:L,render:function(t){return t(A)}}).$mount("#app")},9539:function(t,e,i){"use strict";i("c69a")},c69a:function(t,e,i){}});
//# sourceMappingURL=app.4d148682.js.map