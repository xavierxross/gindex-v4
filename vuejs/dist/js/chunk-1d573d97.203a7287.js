(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d573d97"],{"4cd9":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"columns is-mobile is-centered mt-5 ml-5 mr-5 pl-5 pr-5"},[a("div",{staticClass:"field is-grouped-multiline"},[a("div",{staticClass:"control"},[a("div",{staticClass:"loading"},[a("loading",{attrs:{active:t.loading,"can-cancel":!1,"is-full-page":t.fullpage},on:{"update:active":function(s){t.loading=s}}})],1),a("div",{staticClass:"tags-has-addons"},[t.success?t._e():a("div",{staticClass:"notification has-text-centered is-danger"},[a("h2",{staticClass:"title has-text-white has-text-weight-bold"},[t._v("Error")]),a("p",{staticClass:"subtitle has-text-weight-bold"},[t._v(t._s(t.data))])]),t.success?a("div",{staticClass:"notification has-text-centered is-success"},[a("h2",{staticClass:"title has-text-white has-text-weight-bold"},[t._v("Success")]),a("p",{staticClass:"subtitle has-text-weight-bold"},[t._v(t._s(t.data))])]):t._e()])])])])},i=[],c=(a("ac1f"),a("5319"),a("9062")),r=a.n(c),o=(a("e40d"),{data:function(){return{data:"",loading:!0,success:!1,fullpage:!0}},components:{Loading:r.a},mounted:function(){var t=this;this.$route.params.data&&this.$route.params.noredirect?(this.data=this.$route.params.data,this.success=this.$route.params.success,this.loading=!1):this.$route.params.data&&this.$route.params.redirectUrl?(this.data=this.$route.params.data,this.success=this.$route.params.success,setTimeout((function(){t.$router.replace({path:t.$route.params.redirectUrl})}),1e3)):(this.success=!1,this.data="Nothing Here!...You will be Redirected",setTimeout((function(){t.$router.replace({path:"/0:home/"})}),1e3))}}),l=o,n=a("2877"),d=Object(n["a"])(l,e,i,!1,null,null,null);s["default"]=d.exports},e40d:function(t,s,a){}}]);