"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8815],{71433:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});var s=a(20629),r=a(74865),i=a.n(r);function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const u={metaInfo:{title:"Edit Return"},data:function(){return{isLoading:!0,SubmitProcessing:!1,details:[],detail:{},sale_return:{id:"",date:"",notes:"",statut:"",client_id:"",warehouse_id:"",sale_id:"",tax_rate:0,TaxNet:0,shipping:0,discount:0},total:0,GrandTotal:0}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,s.Se)(["currentUser"])),methods:{Submit_Sale_return:function(){var t=this;this.$refs.edit_sale_return.validate().then((function(e){e?t.Update_Return():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},getValidationState:function(t){var e=t.dirty,a=t.validated,s=t.valid;return e||a?void 0===s?null:s:null},makeToast:function(t,e,a){this.$root.$bvToast.toast(e,{title:a,variant:t,solid:!0})},Verified_Qty:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&(isNaN(t.quantity)&&(this.details[a].quantity=1),t.quantity>t.sale_quantity?(this.makeToast("warning",this.$t("qty_return_is_greater_than_qty_sold"),this.$t("Warning")),this.details[a].quantity=t.sale_quantity):this.details[a].quantity=t.quantity,this.Calcul_Total(),this.$forceUpdate())},increment:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&(t.quantity+1>t.sale_quantity?this.makeToast("warning",this.$t("qty_return_is_greater_than_qty_sold"),this.$t("Warning")):this.formatNumber(this.details[a].quantity++,2));this.$forceUpdate(),this.Calcul_Total()},decrement:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&t.quantity-1>0&&(t.quantity-1>t.sale_quantity?this.makeToast("warning",this.$t("qty_return_is_greater_than_qty_sold"),this.$t("Warning")):this.formatNumber(this.details[a].quantity--,2));this.$forceUpdate(),this.Calcul_Total()},formatNumber:function(t,e){var a=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return a[0];var s=a[1]||"";if(s.length>e)return"".concat(a[0],".").concat(s.substr(0,e));for(;s.length<e;)s+="0";return"".concat(a[0],".").concat(s)},Calcul_Total:function(){this.total=0;for(var t=0;t<this.details.length;t++){var e=this.details[t].taxe*this.details[t].quantity;this.details[t].subtotal=parseFloat(this.details[t].quantity*this.details[t].Net_price+e),this.total=parseFloat(this.total+this.details[t].subtotal)}var a=parseFloat(this.total-this.sale_return.discount);this.sale_return.TaxNet=parseFloat(a*this.sale_return.tax_rate/100),this.GrandTotal=parseFloat(a+this.sale_return.TaxNet+this.sale_return.shipping);var s=this.GrandTotal.toFixed(2);this.GrandTotal=parseFloat(s)},keyup_OrderTax:function(){isNaN(this.sale_return.tax_rate)?this.sale_return.tax_rate=0:""==this.sale_return.tax_rate?(this.sale_return.tax_rate=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Discount:function(){isNaN(this.sale_return.discount)?this.sale_return.discount=0:""==this.sale_return.discount?(this.sale_return.discount=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Shipping:function(){isNaN(this.sale_return.shipping)?this.sale_return.shipping=0:""==this.sale_return.shipping?(this.sale_return.shipping=0,this.Calcul_Total()):this.Calcul_Total()},verifiedForm:function(){if(this.details.length<=0)return this.makeToast("warning",this.$t("AddProductToList"),this.$t("Warning")),!1;for(var t=0,e=0;e<this.details.length;e++)""==this.details[e].quantity&&0===this.details[e].quantity||(t+=1);return 0!==t||(this.makeToast("warning",this.$t("Please_add_return_quantity"),this.$t("Warning")),!1)},Update_Return:function(){var t=this;if(this.verifiedForm()){this.SubmitProcessing=!0,i().start(),i().set(.1);var e=this.$route.params.id;axios.put("returns/sale/".concat(e),{date:this.sale_return.date,client_id:this.sale_return.client_id,sale_id:this.sale_return.sale_id,warehouse_id:this.sale_return.warehouse_id,statut:this.sale_return.statut,notes:this.sale_return.notes,tax_rate:this.sale_return.tax_rate?this.sale_return.tax_rate:0,TaxNet:this.sale_return.TaxNet?this.sale_return.TaxNet:0,discount:this.sale_return.discount?this.sale_return.discount:0,shipping:this.sale_return.shipping?this.sale_return.shipping:0,GrandTotal:this.GrandTotal,details:this.details}).then((function(e){i().done(),t.makeToast("success",t.$t("Update.TitleReturn"),t.$t("Success")),t.SubmitProcessing=!1,t.$router.push({name:"index_sale_return"})})).catch((function(e){i().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1}))}},GetElements:function(){var t=this,e=this.$route.params.id,a=this.$route.params.sale_id;axios.get("returns/sale/edit_sell_return/".concat(e,"/").concat(a)).then((function(e){t.sale_return=e.data.sale_return,t.details=e.data.details,t.Calcul_Total(),t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}},created:function(){this.GetElements()}};const o=(0,a(51900).Z)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("breadcumb",{attrs:{page:t.$t("EditSaleReturn"),folder:t.$t("ListReturns")}}),t._v(" "),t.isLoading?a("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():a("validation-observer",{ref:"edit_sale_return"},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Sale_return.apply(null,arguments)}}},[a("b-row",[a("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[a("b-card",[a("b-row",[a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"date",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("date")+" *"}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"date-feedback",type:"date"},model:{value:t.sale_return.date,callback:function(e){t.$set(t.sale_return,"date",e)},expression:"sale_return.date"}}),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,1946847383)})],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("b-form-group",{attrs:{label:t.$t("Sale")}},[a("b-form-input",{attrs:{label:"Sale",disabled:"disabled"},model:{value:t.sale_return.sale_ref,callback:function(e){t.$set(t.sale_return,"sale_ref",e)},expression:"sale_return.sale_ref"}})],1)],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"Status",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.valid,r=e.errors;return a("b-form-group",{attrs:{label:t.$t("Status")+" *"}},[a("v-select",{class:{"is-invalid":!!r.length},attrs:{state:!r[0]&&(!!s||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Status"),options:[{label:"Received",value:"received"},{label:"Pending",value:"pending"}]},model:{value:t.sale_return.statut,callback:function(e){t.$set(t.sale_return,"statut",e)},expression:"sale_return.statut"}}),t._v(" "),a("b-form-invalid-feedback",[t._v(t._s(r[0]))])],1)}}],null,!1,3228354010)})],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("h5",[t._v(t._s(t.$t("list_product_returns"))+" *")]),t._v(" "),a("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.$t("products_refunded_alert")))]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover"},[a("thead",{staticClass:"bg-gray-300"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Net_Unit_Price")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Quantity_sold")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Qty_return")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Discount")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Tax")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("SubTotal")))])])]),t._v(" "),a("tbody",[t.details.length<=0?a("tr",[a("td",{attrs:{colspan:"9"}},[t._v(t._s(t.$t("NodataAvailable")))])]):t._e(),t._v(" "),t._l(t.details,(function(e){return a("tr",{key:e.detail_id,class:{row_deleted:1===e.del||0===e.no_unit}},[a("td",[t._v(t._s(e.detail_id))]),t._v(" "),a("td",[a("span",[t._v(t._s(e.code))]),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"badge badge-success"},[t._v(t._s(e.name))])]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.Net_price,3)))]),t._v(" "),a("td",[a("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(e.sale_quantity)+" "+t._s(e.unitSale))])]),t._v(" "),a("td",[a("div",{staticClass:"quantity"},[a("b-input-group",[a("b-input-group-prepend",[a("span",{directives:[{name:"show",rawName:"v-show",value:0!==e.no_unit,expression:"detail.no_unit !== 0"}],staticClass:"btn btn-primary btn-sm",on:{click:function(a){return t.decrement(e,e.detail_id)}}},[t._v("-")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.quantity,expression:"detail.quantity",modifiers:{number:!0}}],staticClass:"form-control",attrs:{min:0,disabled:1===e.del||0===e.no_unit},domProps:{value:e.quantity},on:{keyup:function(a){return t.Verified_Qty(e,e.detail_id)},input:function(a){a.target.composing||t.$set(e,"quantity",t._n(a.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),a("b-input-group-append",[a("span",{directives:[{name:"show",rawName:"v-show",value:0!==e.no_unit,expression:"detail.no_unit !== 0"}],staticClass:"btn btn-primary btn-sm",on:{click:function(a){return t.increment(e,e.detail_id)}}},[t._v("+")])])],1)],1)]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.DiscountNet*e.quantity,2)))]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.taxe*e.quantity,2)))]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(e.subtotal.toFixed(2)))])])}))],2)])])]),t._v(" "),a("div",{staticClass:"offset-md-9 col-md-3 mt-4"},[a("table",{staticClass:"table table-striped table-sm"},[a("tbody",[a("tr",[a("td",{staticClass:"bold"},[t._v(t._s(t.$t("OrderTax")))]),t._v(" "),a("td",[a("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale_return.TaxNet.toFixed(2))+" ("+t._s(t.formatNumber(t.sale_return.tax_rate,2))+" %)")])])]),t._v(" "),a("tr",[a("td",{staticClass:"bold"},[t._v(t._s(t.$t("Discount")))]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale_return.discount.toFixed(2)))])]),t._v(" "),a("tr",[a("td",{staticClass:"bold"},[t._v(t._s(t.$t("Shipping")))]),t._v(" "),a("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale_return.shipping.toFixed(2)))])]),t._v(" "),a("tr",[a("td",[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Total")))])]),t._v(" "),a("td",[a("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.GrandTotal.toFixed(2)))])])])])])]),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"Order Tax",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("OrderTax")}},[a("b-input-group",{attrs:{append:"%"}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"OrderTax-feedback",label:"Order Tax"},on:{keyup:function(e){return t.keyup_OrderTax()}},model:{value:t.sale_return.tax_rate,callback:function(e){t.$set(t.sale_return,"tax_rate",t._n(e))},expression:"sale_return.tax_rate"}})],1),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,2565157719)})],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"Discount",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("Discount")}},[a("b-input-group",{attrs:{append:t.currentUser.currency}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"Discount-feedback",label:"Discount"},on:{keyup:function(e){return t.keyup_Discount()}},model:{value:t.sale_return.discount,callback:function(e){t.$set(t.sale_return,"discount",t._n(e))},expression:"sale_return.discount"}})],1),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,535361776)})],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[a("validation-provider",{attrs:{name:"Shipping",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(e){return[a("b-form-group",{attrs:{label:t.$t("Shipping")}},[a("b-input-group",{attrs:{append:t.currentUser.currency}},[a("b-form-input",{attrs:{state:t.getValidationState(e),"aria-describedby":"Shipping-feedback",label:"Shipping"},on:{keyup:function(e){return t.keyup_Shipping()}},model:{value:t.sale_return.shipping,callback:function(e){t.$set(t.sale_return,"shipping",t._n(e))},expression:"sale_return.shipping"}})],1),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"Shipping-feedback"}},[t._v(t._s(e.errors[0]))])],1)]}}],null,!1,1484868304)})],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",{attrs:{label:t.$t("Please_provide_any_details")}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sale_return.notes,expression:"sale_return.notes"}],staticClass:"form-control",attrs:{rows:"4",placeholder:t.$t("Afewwords")},domProps:{value:t.sale_return.notes},on:{input:function(e){e.target.composing||t.$set(t.sale_return,"notes",e.target.value)}}})])],1),t._v(" "),a("b-col",{attrs:{md:"12"}},[a("b-form-group",[a("b-button",{attrs:{variant:"primary",disabled:t.SubmitProcessing},on:{click:t.Submit_Sale_return}},[t._v(t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);