(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(e,t,a){var s=a(206);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,a(27).default)("624ae99a",s,!0,{sourceMap:!1})},205:function(e,t,a){"use strict";var s=a(149);a.n(s).a},206:function(e,t,a){(e.exports=a(26)(!1)).push([e.i,"\n.col-1[data-v-4aad9152]{background-image:linear-gradient(180deg,rgba(0,0,0,.5),rgba(0,0,0,.5)),url(https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?auto=format&fit=crop&ixid=eyJhcHBfaWQiOjEyMDd9&ixlib=rb-0.3.5&q=80&s=6f3d3508fe6a3a1adb8301aa284f9381&w=634);background-size:100%;padding-top:2%\n}\na[data-v-4aad9152]{color:#fff;font-size:2em;text-decoration:none\n}\n#mail-icn[data-v-4aad9152]{position:absolute\n}\n.form-cont[data-v-4aad9152]{background:#3e2723\n}",""])},212:function(e,t,a){"use strict";a.r(t);a(38);var s=a(174),i=a.n(s),l={data:function(){return{valid:!0,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],select:null,items:["I Have Question","Business Inquiry","To Book in Advance"],checkbox:!1}},methods:{submit:function(){this.$refs.form.validate()&&i.a.post("/api/submit",{name:this.name,email:this.email,select:this.select})},clear:function(){this.$refs.form.reset()}}},n=a(6),o=Object(n.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.nameRules,counter:10,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),a("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("v-text-field",{attrs:{rules:e.phoneRules,label:"Phone",required:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),a("v-select",{attrs:{items:e.items,rules:[function(e){return!!e||"Item is required"}],label:"Reason to Contact",required:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}}),e._v(" "),a("v-text-field",{attrs:{rules:e.text,label:"Message",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),a("v-btn",{attrs:{color:"green",disabled:!e.valid},on:{click:e.submit}},[e._v("\n    submit\n  ")]),e._v(" "),a("v-btn",{attrs:{flat:""},on:{click:e.clear}},[e._v("clear")])],1)],1)},[],!1,null,null,null);o.options.__file="Form.vue";var r=o.exports,c=a(193);a(0).default.use(c,{load:{key:"AIzaSyDnS8Ua1JgpwDPJDdfZN1AX_QhaPLTA_rE",v:"OPTIONAL VERSION NUMBER"}});var f={components:{Form:r},data:function(){return{center:{lat:10.5,lng:11},markers:[{position:{lat:10,lng:10}},{position:{lat:11,lng:11}}],styles:[{stylers:[{visibility:"on"},{saturation:-100},{gamma:.54}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#4d4946"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{visibility:"simplified"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{gamma:.48}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{gamma:7.18}]}]}}},u=(a(205),Object(n.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-layout",{staticClass:"text-sm-center text-md-left",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg4:""}},[a("gmap-map",{staticClass:"hidden-sm-and-down",staticStyle:{width:"100%",height:"840px"},attrs:{options:{styles:e.styles},center:e.center,zoom:8}},e._l(e.markers,function(t,s){return a("gmap-marker",{key:s,attrs:{position:t.position,clickable:!0,draggable:!1},on:{click:function(a){e.center=t.position}}})}))],1),e._v(" "),a("v-flex",{staticClass:"col-1",attrs:{lg4:"",xs12:""}},[a("h1",{staticClass:"display-3 text-xs-center"},[e._v("Contact")]),e._v(" "),a("v-container",{staticClass:"shop-1"},[a("div",{staticClass:"pb-5"},[a("h2",{staticClass:"display-1"},[e._v("Shop-1")])]),e._v(" "),a("div",[a("v-icon",{staticClass:"fa fa-phone"}),e._v(" "),a("span",{staticClass:"pa-3"},[a("a",{staticClass:"font-weight-thin",attrs:{href:"telno:123 456 789"}},[e._v("123 456 789")])])],1),e._v(" "),a("div",[a("v-icon",{staticClass:"fa fa-location-arrow"}),e._v(" "),a("span",{staticClass:"pa-3"},[a("a",{staticClass:"font-weight-thin"},[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing.")])])],1)]),e._v(" "),a("v-container",{staticClass:"shop-2",attrs:{lg4:""}},[a("div",{staticClass:"pb-5"},[a("h2",{staticClass:"display-1"},[e._v("Shop-2")])]),e._v(" "),a("div",[a("v-icon",{staticClass:"fa fa-phone"}),e._v(" "),a("span",{staticClass:"pa-3"},[a("a",{staticClass:"font-weight-thin",attrs:{href:"telno:123 456 789"}},[e._v("123 456 789")])])],1),e._v(" "),a("div",[a("v-icon",{staticClass:"fa fa-location-arrow"}),e._v(" "),a("span",{staticClass:"pa-3"},[a("a",{staticClass:"font-weight-thin"},[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing.")])])],1)]),e._v(" "),a("v-container",{staticClass:"email"},[a("div",{staticClass:"pb-5"},[a("h2",{staticClass:"display-1"},[e._v("Mail Us @")])]),e._v(" "),a("div",[a("v-icon",{staticClass:"fa fa-envelope"}),e._v(" "),a("span",{staticClass:"pa-3"},[a("a",{staticClass:"font-weight-thin",attrs:{href:"telno:coffee@shop.com"}},[e._v("coffee@shop.com")])])],1)])],1),e._v(" "),a("v-flex",{staticClass:"form-cont",attrs:{xs12:"",lg4:""}},[a("Form")],1)],1)],1)},[],!1,null,"4aad9152",null));u.options.__file="index.vue";t.default=u.exports}}]);