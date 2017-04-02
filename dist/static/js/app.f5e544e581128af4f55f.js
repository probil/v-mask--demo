webpackJsonp([1],[,function(e,s,a){a(5);var t=a(7)(a(3),a(8),null,null);e.exports=t.exports},,function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"Demo",data:function(){return{dynamicMask:"###.###.###/###",models:{timeAndDate:"",timeWithSeconds:"",cardNumber:"",phoneNumber:"",dynamicMask:"",usPhoneNumber:""}}}}},function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a(2),i=a(1),n=a.n(i),l=a(0),r=a.n(l);t.a.use(r.a),new t.a({el:"#app",render:function(e){return e(n.a)}})},function(e,s){},,,function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"wrapper h-100"},[a("div",{staticClass:"container"},[e._m(0),e._v(" "),a("section",{staticClass:"examples"},[a("div",{staticClass:"row"},[e._m(1),e._v(" "),a("div",{staticClass:"six columns"},[a("input",{directives:[{name:"mask",rawName:"v-mask",value:"##/##/#### ##:##",expression:"'##/##/#### ##:##'"},{name:"model",rawName:"v-model",value:e.models.timeAndDate,expression:"models.timeAndDate"}],staticClass:"u-full-width",attrs:{id:"time-and-date-ex",type:"text",placeholder:"27/10/2016 23:15"},domProps:{value:e.models.timeAndDate},on:{input:function(s){s.target.composing||(e.models.timeAndDate=s.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[e._m(2),e._v(" "),a("div",{staticClass:"six columns"},[a("input",{directives:[{name:"mask",rawName:"v-mask",value:"##:##:##",expression:"'##:##:##'"},{name:"model",rawName:"v-model",value:e.models.timeWithSeconds,expression:"models.timeWithSeconds"}],staticClass:"u-full-width",attrs:{id:"time-ex",type:"text",placeholder:"11:23:15"},domProps:{value:e.models.timeWithSeconds},on:{input:function(s){s.target.composing||(e.models.timeWithSeconds=s.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[e._m(3),e._v(" "),a("div",{staticClass:"six columns"},[a("input",{directives:[{name:"mask",rawName:"v-mask",value:"#### #### #### ####",expression:"'#### #### #### ####'"},{name:"model",rawName:"v-model",value:e.models.cardNumber,expression:"models.cardNumber"}],staticClass:"u-full-width",attrs:{id:"credit-cart-ex",type:"text",placeholder:"4444 4444 4444 4444"},domProps:{value:e.models.cardNumber},on:{input:function(s){s.target.composing||(e.models.cardNumber=s.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[e._m(4),e._v(" "),a("div",{staticClass:"six columns"},[a("input",{directives:[{name:"mask",rawName:"v-mask",value:"(###) ###-####",expression:"'(###) ###-####'"},{name:"model",rawName:"v-model",value:e.models.phoneNumber,expression:"models.phoneNumber"}],staticClass:"u-full-width",attrs:{id:"phone-number-ex",type:"text",placeholder:"(999) 999-9999"},domProps:{value:e.models.phoneNumber},on:{input:function(s){s.target.composing||(e.models.phoneNumber=s.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[e._m(5),e._v(" "),a("div",{staticClass:"six columns"},[a("input",{directives:[{name:"mask",rawName:"v-mask",value:"+1(###)-###-####",expression:"'+1(###)-###-####'"},{name:"model",rawName:"v-model",value:e.models.usPhoneNumber,expression:"models.usPhoneNumber"}],staticClass:"u-full-width",attrs:{id:"us-phone-number-ex",type:"text",placeholder:"+1(999)-999-9999"},domProps:{value:e.models.usPhoneNumber},on:{input:function(s){s.target.composing||(e.models.usPhoneNumber=s.target.value)}}})])])]),e._v(" "),a("section",{staticClass:"special-examples"},[a("h4",{staticClass:"header"},[e._v("Dynamic mask change supported")]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"six columns"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dynamicMask,expression:"dynamicMask"}],attrs:{type:"radio",id:"cpf-example",value:"###.###.###/###"},domProps:{checked:e._q(e.dynamicMask,"###.###.###/###")},on:{__c:function(s){e.dynamicMask="###.###.###/###"}}}),e._v(" "),a("span",{staticClass:"label-body"},[e._v("###.###.###/###")])]),e._v(" "),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dynamicMask,expression:"dynamicMask"}],attrs:{type:"radio",id:"cnpj-example",value:"###.###.#####/###-#"},domProps:{checked:e._q(e.dynamicMask,"###.###.#####/###-#")},on:{__c:function(s){e.dynamicMask="###.###.#####/###-#"}}}),e._v(" "),a("span",{staticClass:"label-body"},[e._v("###.###.#####/###-#")])])]),e._v(" "),a("div",{staticClass:"six columns"},[a("input",{directives:[{name:"mask",rawName:"v-mask",value:e.dynamicMask,expression:"dynamicMask"},{name:"model",rawName:"v-model",value:e.models.dynamicMask,expression:"models.dynamicMask"}],staticClass:"u-full-width",attrs:{type:"text",placeholder:e.dynamicMask},domProps:{value:e.models.dynamicMask},on:{input:function(s){s.target.composing||(e.models.dynamicMask=s.target.value)}}})])])]),e._v(" "),e._m(6)])])},staticRenderFns:[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("section",{staticClass:"header"},[a("h2",{staticClass:"header"},[e._v("A dead simple, input formatting for Vue.js")])])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"six columns"},[a("label",{attrs:{for:"time-and-date-ex"}},[e._v("Date and Time")])])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"six columns"},[a("label",{attrs:{for:"time-ex"}},[e._v("Time with seconds ")])])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"six columns"},[a("label",{attrs:{for:"credit-cart-ex"}},[e._v("Credit card number")])])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"six columns"},[a("label",{attrs:{for:"credit-cart-ex"}},[e._v("Phone number")])])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"six columns"},[a("label",{attrs:{for:"credit-cart-ex"}},[e._v("US Phone Number")])])},function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("section",{staticClass:"footer"},[a("a",{staticClass:"button button-primary",attrs:{href:"https://github.com/probil/v-mask/tree/vue-2.0"}},[e._v("Github")])])}]}}],[4]);
//# sourceMappingURL=app.f5e544e581128af4f55f.js.map