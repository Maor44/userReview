(function(e){function t(t){for(var n,o,l=t[0],s=t[1],c=t[2],m=0,v=[];m<l.length;m++)o=l[m],r[o]&&v.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);u&&u(t);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("h1",{staticClass:"mt-4 text-xs-center blue--text text--accent-3 disply-4 font-weight-medium font-italic"},[e._v("User Review")]),a("v-container",[a("Reviews",{attrs:{reviews:e.reviews}}),a("AddReview",{on:{addNewReview:e.addReview}})],1)],1)],1)},o=[],l=(a("7f7f"),a("7514"),a("cebc")),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{staticClass:"grey lighten-3 mx-auto pa-3",staticStyle:{width:"500px"}},[a("v-flex",{attrs:{"xs-12":""}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:20",expression:"'required|max:20'"}],attrs:{"error-messages":e.errors.collect("name"),counter:20,label:"Your name","data-vv-name":"name"},model:{value:e.review.name,callback:function(t){e.$set(e.review,"name",t)},expression:"review.name"}}),a("v-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-name":"comment","error-messages":e.errors.collect("comment"),"auto-grow":"",label:"Comments",rows:"1"},model:{value:e.review.comment,callback:function(t){e.$set(e.review,"comment",t)},expression:"review.comment"}}),a("v-spacer"),a("v-flex",{attrs:{right:""}},[a("v-btn",{staticClass:"blue accent-3 white--text",attrs:{round:""},on:{click:this.handleSubmit}},[e._v("Add Review")])],1)],1)],1)},c=[],u={data:function(){return{review:{name:null,comment:null}}},methods:{handleSubmit:function(){var e=this;this.$validator.validate().then(function(t){t&&(e.$emit("addNewReview",e.review),e.review.name="",e.review.comment="")})}}},m=u,v=a("2877"),d=a("6544"),f=a.n(d),p=a("8336"),h=a("0e8f"),w=a("a722"),b=a("9910"),x=a("2677"),g=a("a844"),y=Object(v["a"])(m,s,c,!1,null,null,null),_=y.exports;f()(y,{VBtn:p["a"],VFlex:h["a"],VLayout:w["a"],VSpacer:b["a"],VTextField:x["a"],VTextarea:g["a"]});var R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{column:""}},e._l(e.reviews,function(e,t){return a("ReviewItem",{key:t,attrs:{review:e,id:t}})}),1)},V=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{column:""}},[a("v-card",{staticClass:"lighten-4 my-2 mx-auto",class:this.colors[Math.floor(this.colors.length*Math.random())],attrs:{width:"500",flat:""}},[a("v-flex",{staticClass:"pa-2",attrs:{right:""}},[a("v-icon",{attrs:{small:""},on:{click:function(t){return e.handleRemove(e.id)}}},[e._v("delete")]),a("v-icon",{attrs:{small:""},on:{click:function(t){return e.handleEdit(e.review)}}},[e._v("edit")])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-avatar",{staticClass:"mr-3"},[a("img",{attrs:{src:e.avatar,alt:""}})]),a("div",[a("h3",{staticClass:"headline display-3 font-weight-bold"},[e._v(e._s(e.review.name))]),a("p",{staticClass:"body-1 my-1"},[e._v(e._s(e.review.comment))])])],1)],1),e.showForm?a("EditReview",{attrs:{editReview:e.review,id:e.id}}):e._e()],1)},E=[],$=["blue","purple","lime","orange","blue-grey","green","indigo","red","pink","deep-purple","cyan","teal"],C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{staticClass:"grey lighten-3 mb-3 mx-auto pa-3",staticStyle:{width:"500px"}},[a("v-flex",{attrs:{"xs-12":""}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:20",expression:"'required|max:20'"}],attrs:{"error-messages":e.errors.collect("name"),counter:20,label:"Your name","data-vv-name":"name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"data-vv-name":"comment","error-messages":e.errors.collect("comment"),"auto-grow":"",label:"Comments",rows:"1"},model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}}),a("v-spacer"),a("v-flex",{attrs:{right:""}},[a("v-btn",{staticClass:"blue accent-3 white--text",attrs:{round:""},on:{click:this.handleSubmit}},[e._v("Edit Review")])],1)],1)],1)},j=[],T={props:["editReview","id"],data:function(){return{name:this.editReview.name,comment:this.editReview.comment}},methods:{handleSubmit:function(){var e=this;this.$validator.validate().then(function(t){t&&ee.$emit("EditReview",{id:e.id,name:e.name,comment:e.comment})})}}},k=T,S=Object(v["a"])(k,C,j,!1,null,null,null),F=S.exports;f()(S,{VBtn:p["a"],VFlex:h["a"],VLayout:w["a"],VSpacer:b["a"],VTextField:x["a"],VTextarea:g["a"]});var M={components:{EditReview:F},props:["review","id"],data:function(){return{colors:$,showForm:!1,avatar:null}},computed:{},methods:{handleRemove:function(e){ee.$emit("removeReview",e)},handleEdit:function(){this.showForm=!this.showForm}},mounted:function(){var e=this;ee.$on("hideEditForm",function(t){e.showForm=t});var t=a("3d07");t().then(function(t){e.avatar=t})}},q=M,L=a("8212"),A=a("b0af"),I=a("12b2"),N=a("132d"),P=Object(v["a"])(q,O,E,!1,null,null,null),B=P.exports;f()(P,{VAvatar:L["a"],VCard:A["a"],VCardTitle:I["a"],VFlex:h["a"],VIcon:N["a"],VLayout:w["a"]});var z={props:["reviews"],components:{ReviewItem:B},data:function(){return{}}},J=z,Y=Object(v["a"])(J,R,V,!1,null,null,null),U=Y.exports;f()(Y,{VLayout:w["a"]});var D={name:"App",components:{AddReview:_,Reviews:U},watch:{reviews:{handler:function(){ee.$emit("hideEditForm",!1)},deep:!0}},data:function(){return{reviews:[{id:0,name:"Maor Bar",comment:"This app is amazing!!! LOVE IT!"},{id:1,name:"Maor Bar",comment:"This app is amazing!!! LOVE IT!"},{id:2,name:"Maor Bar",comment:"This app is amazing!!! LOVE IT!"}]}},methods:{addReview:function(e){this.reviews.push(Object(l["a"])({},e))}},created:function(){var e=this;ee.$on("removeReview",function(t){e.reviews.splice(t,1)}),ee.$on("EditReview",function(t){e.reviews.find(function(e){e.id===t.id&&(e.name=t.name,e.comment=t.comment)})})}},G=D,H=a("7496"),K=a("a523"),Q=a("549c"),W=Object(v["a"])(G,i,o,!1,null,null,null),X=W.exports;f()(W,{VApp:H["a"],VContainer:K["a"],VContent:Q["a"]});var Z=a("7bb1");a.d(t,"bus",function(){return ee}),n["a"].config.productionTip=!1;var ee=new n["a"];n["a"].use(Z["a"],{events:"change"}),new n["a"]({render:function(e){return e(X)}}).$mount("#app")}});
//# sourceMappingURL=app.4dd6d8da.js.map