(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79302f8a"],{"28ac":function(s,e,t){"use strict";t.r(e);var i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"content mt-5 ml-5 mr-5 pl-5 pr-5 is-clipped"},[t("div",{staticClass:"loading"},[t("loading",{attrs:{active:s.loading,"can-cancel":!1,"is-full-page":s.fullpage},on:{"update:active":function(e){s.loading=e}}})],1),t("div",{staticClass:"columns is-vcentered is-centered is-multiline"},[t("div",{staticClass:"column is-half"},[t("div",{staticClass:"columns is-desktop is-multiline is-centered"},[t("div",{staticClass:"column is-full"},[t("div",{staticClass:"box has-background-primary"},[t("p",{staticClass:"title has-text-weight-bold has-text-white has-text-centered"},[s._v("Currently Logged as")]),t("p",{staticClass:"subtitle has-text-weight-bold has-text-white has-text-centered"},[s._v("Scroll Down to Accept Users")]),t("div",{staticClass:"columns is-vcentered is-multiline is-mobile"},[s._m(0),t("div",{staticClass:"column is-two-fifths"},[t("p",{staticClass:"subtitle has-text-black has-text-weight-bold"},[s._v(s._s(s.user.name))])]),s._m(1),t("div",{staticClass:"column is-two-fifths"},[t("p",{staticClass:"subtitle has-text-black has-text-weight-bold"},[s._v(s._s(s.user.role))])]),s.user.admin&&!s.user.superadmin?t("div",{staticClass:"column is-full"},[t("p",{staticClass:"subtitle has-text-weight-bold has-text-warning-dark"},[s._v(" Your Scope is Restricted to Adding Additional Users. Use the Below Button to get Pending User Requests. ")])]):s._e(),s.user.admin&&!s.user.superadmin?t("div",{staticClass:"column has-text-centered is-full"},[t("button",{staticClass:"button is-white",on:{click:function(e){return s.gotoPage("/0:register/request/superadmin")}}},[s._m(2),t("span",[s._v("Request")])])]):s._e(),s.user.admin&&s.user.superadmin?t("div",{staticClass:"column is-full"},[t("p",{staticClass:"subtitle has-text-weight-bold has-text-danger-dark"},[s._v(" Your Scope is Maximum and Can Add Additional Users, Promote Users.Use the Below Buttons to get Pending User Requests. ")])]):s._e()])])]),t("div",{class:s.modal?"modal is-active":"modal"},[t("div",{staticClass:"modal-background"}),t("div",{staticClass:"modal-card"},[t("header",{staticClass:"modal-card-head"},[t("p",{staticClass:"modal-card-title has-text-centered"},[s._v(s._s(s.listname))]),t("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){s.modal=!1,s.pendingUserList=[]}}})]),t("section",{staticClass:"modal-card-body"},[0==s.pendingUserList.length?t("div",{staticClass:"columns is-centered is-mobile"},[s._m(3)]):s._l(s.pendingUserList,(function(e){return t("div",{key:e.name,staticClass:"columns is-centered is-mobile"},[t("div",{staticClass:"column is-two-thirds"},[t("p",{staticClass:"subtitle has-text-black"},[s._v(s._s(e.email))])]),t("div",{staticClass:"column is-one-third"},[t("button",{staticClass:"button is-success is-rounded",on:{click:function(t){return s.handleTransport(e,s.setrole)}}},[s._m(4,!0),t("span",[s._v("Accept")])])])])}))],2)])]),t("div",{staticClass:"column is-full"},[t("div",{staticClass:"columns is-dekstop is-multiline"},[t("div",{staticClass:"column is-full"},[t("div",{staticClass:"box has-background-dark"},[t("h3",{staticClass:"title has-text-weight-bold has-text-white has-text-centered"},[s._v("Pending Users")]),t("div",{staticClass:"columns is-desktop is-multiline is-vcentered"},[s._m(5),t("div",{staticClass:"column is-one-third"},[t("button",{staticClass:"button is-success",on:{click:function(e){s.modal=!0,s.listname="Users - Pending",s.getPendingUsers(s.pendingusers),s.setrole="user"}}},[s._m(6),t("span",[s._v("Users")])])]),s.user.admin&&s.user.superadmin?t("div",{staticClass:"column is-two-thirds"},[t("p",{staticClass:"subtitle has-text-weight-semibold has-text-white"},[s._v(" Pending Admins ")])]):s._e(),s.user.admin&&s.user.superadmin?t("div",{staticClass:"column is-one-third"},[t("button",{staticClass:"button is-success",on:{click:function(e){s.modal=!0,s.listname="Admins - Pending",s.getPendingUsers(s.pendingadmin),s.setrole="admin"}}},[s._m(7),t("span",[s._v("Admins")])])]):s._e(),s.user.admin&&s.user.superadmin?t("div",{staticClass:"column is-two-thirds"},[t("p",{staticClass:"subtitle has-text-weight-semibold has-text-white"},[s._v(" Pending Superadmins ")])]):s._e(),s.user.admin&&s.user.superadmin?t("div",{staticClass:"column is-one-third"},[t("button",{staticClass:"button is-success",on:{click:function(e){s.modal=!0,s.listname="Admins - Pending",s.getPendingUsers(s.pendingsuperadmin),s.setrole="superadmin"}}},[s._m(8),t("span",[s._v("Superadmins")])])]):s._e()])])])])])])]),t("div",{staticClass:"column is centered has-text-centered has-text-white is-two-fifths"},[t("article",{class:s.warnmessageVisibility?"message is-warning":"message is-hidden is-warning"},[t("div",{staticClass:"message-header"},[t("p",[s._v("Important")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(e){s.warnmessageVisibility=!1}}})]),t("div",{staticClass:"message-body"},[t("span",[s._v("Only Pending User and Admin Requests can be Accepted.Use Invite Option to Invite Users.")]),t("div",{staticClass:"buttons is-centered mt-2"},[t("button",{staticClass:"button is-rounded is-danger",on:{click:function(e){return s.gotoPage("/0:invite/user")}}},[s._m(9),t("span",[s._v("Invite")])])])])]),t("article",{class:s.errorMessage?"message is-danger":"message is-hidden is-danger"},[t("div",{staticClass:"message-header"},[t("p",[s._v("Error Proccessing")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(e){s.errorMessage=!1}}})]),t("div",{staticClass:"message-body"},[s._v(" "+s._s(s.resultmessage)+" ")])]),t("article",{class:s.successMessage?"message is-success":"message is-hidden is-success"},[t("div",{staticClass:"message-header"},[t("p",[s._v("Success !")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(e){s.successMessage=!1}}})]),t("div",{staticClass:"message-body"},[s._v(" "+s._s(s.resultmessage)+" ")])]),t("h2",{staticClass:"title has-text-weight-bold has-text-white"},[s._v("Add / Promote Users")]),t("p",{staticClass:"is-small has-text-white has-text-weight-bold"},[s._v("User Details will be Autopopulated After Selecting User")]),t("form",{on:{submit:function(e){return e.preventDefault(),s.handleSubmit(e)}}},[t("div",{staticClass:"field"},[t("div",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.name,expression:"name"}],staticClass:"input is-rounded",attrs:{disabled:"",placeholder:" Recipient's Name (AutoFilled) ",id:"name",type:"text",required:"",autofocus:""},domProps:{value:s.name},on:{input:function(e){e.target.composing||(s.name=e.target.value)}}}),s._m(10),s._m(11),t("p",{staticClass:"help is-warning"},[s._v("Name of Recipient(Auto Filled)")])])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],staticClass:"input is-rounded is-focused",attrs:{disabled:"",placeholder:"Recipient's Email (AutoFilled)",id:"email",type:"email",required:""},domProps:{value:s.email},on:{input:function(e){e.target.composing||(s.email=e.target.value)}}}),s._m(12),s._m(13),t("p",{staticClass:"help is-warning"},[s._v("Email of Recipient(Auto Filled)")])])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:s.message,expression:"message"}],staticClass:"textarea is-success is-rounded",attrs:{disabled:"",placeholder:"Message From Recipient",id:"message",rows:"3",required:""},domProps:{value:s.message},on:{input:function(e){e.target.composing||(s.message=e.target.value)}}}),t("p",{staticClass:"help is-warning"},[s._v("Message From Recipient(Auto Filled)")])])]),t("label",{staticClass:"subtitle has-text-white"},[s._v(" User's Role(Auto Filled)")]),t("div",{staticClass:"control mb-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.role,expression:"role"}],staticClass:"is-checkradio is-small is-warning",attrs:{id:"userradio",type:"radio",name:"role",checked:"",value:"user",disabled:""},domProps:{checked:s._q(s.role,"user")},on:{change:function(e){s.role="user"}}}),t("label",{attrs:{for:"userradio"}},[s._v("User")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.role,expression:"role"}],staticClass:"is-checkradio is-small is-warning",attrs:{id:"adminradio",type:"radio",name:"role",value:"admin",disabled:""},domProps:{checked:s._q(s.role,"admin")},on:{change:function(e){s.role="admin"}}}),t("label",{attrs:{for:"adminradio"}},[s._v(" Admin")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.role,expression:"role"}],staticClass:"is-checkradio is-small is-warning",attrs:{id:"superadminradio",type:"radio",name:"role",value:"superadmin",disabled:""},domProps:{checked:s._q(s.role,"superadmin")},on:{change:function(e){s.role="superadmin"}}}),t("label",{attrs:{for:"superadminradio"}},[s._v("Superadmin")])]),s.admin&&!s.superadmin?t("p",{staticClass:"help is-warning"},[s._v("Only Superadmin can Accept Admin & Superadmin users")]):s._e(),t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"input is-rounded",attrs:{id:"password",type:"password",placeholder:"Your Admin Password",required:""},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}}),s._m(14)])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("div",{staticClass:"b-checkbox is-warning is-circular is-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.checked,expression:"checked"}],staticClass:"styled has-text-success",attrs:{type:"checkbox",id:"terms",name:"terms"},domProps:{checked:Array.isArray(s.checked)?s._i(s.checked,null)>-1:s.checked},on:{change:function(e){var t=s.checked,i=e.target,a=!!i.checked;if(Array.isArray(t)){var n=null,l=s._i(t,n);i.checked?l<0&&(s.checked=t.concat([n])):l>-1&&(s.checked=t.slice(0,l).concat(t.slice(l+1)))}else s.checked=a}}}),s._m(15)])])]),t("div",{staticClass:"field"},[t("div",{staticClass:"control"},[t("div",{staticClass:"b-checkbox is-warning is-circular is-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.codechecked,expression:"codechecked"}],staticClass:"styled has-text-success",attrs:{type:"checkbox",id:"code",name:"terms"},domProps:{checked:Array.isArray(s.codechecked)?s._i(s.codechecked,null)>-1:s.codechecked},on:{change:function(e){var t=s.codechecked,i=e.target,a=!!i.checked;if(Array.isArray(t)){var n=null,l=s._i(t,n);i.checked?l<0&&(s.codechecked=t.concat([n])):l>-1&&(s.codechecked=t.slice(0,l).concat(t.slice(l+1)))}else s.codechecked=a}}}),s._m(16)])])]),t("div",[t("button",{class:s.loading?"button is-loading is-rounded is-warning":"button is-warning is-rounded",attrs:{type:"submit",disabled:s.disabled}},[s._m(17),t("span",[s._v("Add User")])]),t("a",{staticClass:"ml-3 button is-rounded is-white",on:{click:function(e){s.name="",s.email="",s.password="",s.message="",s.role="",s.checked=!1,s.codechecked=!1}}},[s._m(18),t("span",[s._v("Reset")])])])])])])])},a=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"column is-three-fifths"},[t("p",{staticClass:"subtitle has-text-black"},[s._v("Admin Name")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"column is-three-fifths"},[t("p",{staticClass:"subtitle has-text-black"},[s._v("Currently You are")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-user-shield"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"column has-text-centered is-full"},[t("p",{staticClass:"subtitle has-text-black"},[s._v("No Pending User Requests")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-user-plus"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"column is-two-thirds"},[t("p",{staticClass:"subtitle has-text-weight-semibold has-text-white"},[s._v(" Pending Users ")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-user-shield"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-user-shield"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-user-shield"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small"},[t("i",{staticClass:"fas fa-user-plus"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-user"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small is-right"},[t("i",{staticClass:"fas fa-check"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-envelope"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small is-right"},[t("i",{staticClass:"fas fa-check"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-lock"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("label",{attrs:{for:"terms"}},[t("span",{staticClass:"content has-text-white"},[s._v(" I Accept and Read the "),t("a",{staticClass:"has-text-warning",attrs:{href:"https://raw.githubusercontent.com/tks18/gindex-v4/dark-mode-0-1/CONTRIBUTING.md",target:"_blank"}},[s._v("Community Guidelines")])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("label",{attrs:{for:"code"}},[t("span",{staticClass:"content has-text-white"},[s._v(" I Accept and Read the "),t("a",{staticClass:"has-text-warning",attrs:{href:"https://github.com/tks18/gindex-v4/blob/dark-mode-0-1/CODE_OF_CONDUCT.md",target:"_blank"}},[s._v("Code of Conduct")])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-user-plus"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-sync"})])}],n=(t("b0c0"),t("d3b7"),t("25f0"),t("9062")),l=t.n(n),c=(t("e40d"),{components:{Loading:l.a},props:["nextUrl"],data:function(){return{user:{},admin:!1,superadmin:!1,name:"",email:"",namedisabled:!1,adminmessage:"",disabled:!0,password:"",apiurl:"",role:"",setrole:"",successMessage:!1,errorMessage:!1,warnmessageVisibility:!0,modal:!1,resultmessage:"",message:"",checked:!1,codechecked:!1,pendingMessage:"",columnVisibility:!1,loading:!1,fullpage:!0,pendingadmin:window.apiRoutes.getPendingAdmins,pendingsuperadmin:window.apiRoutes.getPendingSuperAdmins,pendingusers:window.apiRoutes.getPendingUsers,pendingUserList:[],listname:""}},methods:{handleSubmit:function(s){var e=this;this.loading=!0,s.preventDefault(),this.name.length>0&&this.email.length>0&&this.password&&this.password.length>0&&this.checked&&this.role.length>0&&this.codechecked?(console.log(this.apiurl),this.$http.post(this.apiurl,{name:this.name,email:this.email,adminpass:this.password,adminuseremail:this.user.email}).then((function(s){s&&(s.data.auth&&s.data.registered?(e.loading=!1,e.successMessage=!0,e.errorMessage=!1,e.resultmessage=s.data.message):(e.loading=!1,e.successMessage=!1,e.errorMessage=!0,e.resultmessage=s.data.message))})).catch((function(s){console.error(s)}))):(this.loading=!1,this.successMessage=!1,this.errorMessage=!0,this.resultmessage="Fill in the Form Properly",this.password="")},handleTransport:function(s,e){this.modal=!1,this.name=s.name,this.role=e,this.message=s.message,this.email=s.email},getPendingUsers:function(s){var e=this;this.modal=!0,this.loading=!0,this.$http.post(s,{adminuseremail:this.user.email}).then((function(s){s&&(s.data.auth&&s.data.registered?(e.loading=!1,e.columnVisibility=!0,e.pendingUserList=s.data.users):(e.loading=!1,e.columnVisibility=!1,e.pendingMessage=s.data.message))}))},gotoPage:function(s){this.$router.push(s)}},beforeMount:function(){this.loading=!0;var s=localStorage.getItem("userdata"),e=localStorage.getItem("tokendata");if(s&&e){var t=JSON.parse(this.$hash.AES.decrypt(s,this.$pass).toString(this.$hash.enc.Utf8));this.user=t,this.loading=!1}else this.user=null,this.loading=!1},mounted:function(){this.loading=!0,this.user.admin&&this.user.superadmin?(this.admin=!0,this.superadmin=!0,this.loading=!1):this.user.admin&&!this.user.superadmin?(this.admin=!0,this.superadmin=!1,this.loading=!1):(this.loading=!1,this.$router.push({name:"results",params:{id:0,cmd:"result",success:!1,data:"UnAuthorized Route. Not Allowed.",redirectUrl:"/0:home/"}}))},watch:{role:function(){"admin"==this.role?(this.namedisabled=!0,this.apiurl=window.apiRoutes.upgradeAdmin):"superadmin"==this.role?(this.namedisabled=!0,this.apiurl=window.apiRoutes.upgradeSuperAdmin):(this.namedisabled=!1,this.apiurl=window.apiRoutes.registerRoute)},codechecked:function(){this.name.length>0&&this.email.length>0&&this.password&&this.password.length>0&&this.checked&&this.role.length>0&&this.codechecked&&this.password.length>0?this.disabled=!1:this.disabled=!0}}}),r=c,d=t("2877"),o=Object(d["a"])(r,i,a,!1,null,null,null);e["default"]=o.exports},e40d:function(s,e,t){}}]);