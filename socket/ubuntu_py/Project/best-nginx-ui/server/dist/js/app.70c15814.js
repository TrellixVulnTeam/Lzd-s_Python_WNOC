(function(e){function t(t){for(var r,o,s=t[0],l=t[1],c=t[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0536":function(e,t,n){"use strict";var r=n("da12"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,i,a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],l={name:"app",data:function(){return{}},created:function(){},methods:{}},c=l,u=n("2877"),p=Object(u["a"])(c,o,s,!1,null,null,null),f=p.exports,d=n("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login_container"},[n("div",[e._v("BestNginxUI")]),n("div",{staticClass:"login_box"},[e._m(0),n("el-form",{ref:"loginFormRef",staticClass:"login_form",attrs:{model:e.loginForm,rules:e.loginFormRules,"label-width":"0px"}},[n("el-form-item",{attrs:{prop:"username"}},[n("el-input",{attrs:{"prefix-icon":"iconfont icon-denglu-yonghuming"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),n("el-form-item",{attrs:{prop:"password"}},[n("el-input",{attrs:{"show-password":"",type:"password","prefix-icon":"iconfont icon-denglu-mima"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),n("el-form-item",{staticClass:"btns"},[n("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]),n("el-button",{attrs:{type:"info"},on:{click:e.resetLoginForm}},[e._v("重置")])],1)],1)],1)])},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"avatar_box"},[r("img",{attrs:{src:n("cf05"),alt:"反对反对"}})])}],h=(n("3ca3"),n("ddb0"),n("2b3d"),n("96cf"),n("1da1")),b={data:function(){return{loginForm:{username:"",password:""},loginFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{resetLoginForm:function(){this.$refs.loginFormRef.resetFields()},login:function(){var e=this;this.$refs.loginFormRef.validate(function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(n){var r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("/login",new URLSearchParams(e.loginForm));case 4:if(r=t.sent,i=r.data,200===i.status){t.next=8;break}return t.abrupt("return",e.$message.error(i.msg));case 8:e.$message.success("登录成功"),window.sessionStorage.setItem("BestNginxUItoken",i.access_token),e.$router.push("/home");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},g=b,v=(n("0536"),Object(u["a"])(g,_,m,!1,null,"3f6f3aa0",null)),w=v.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticClass:"home-container"},[r("el-header",[r("div",{on:{click:e.backHome}},[r("img",{attrs:{src:n("918b"),alt:""}}),r("span",[e._v("BestNginxUI")])]),r("el-button",{attrs:{type:"info"},on:{click:e.logout}},[e._v("退出")])],1),r("el-container",[r("el-aside",{attrs:{width:e.isCollapse?"64px":"200px"}},[r("div",{staticClass:"toggle-button",on:{click:e.toggleCollp}},[e._v("|||")]),r("el-menu",{attrs:{"default-active":e.activePath,router:"",collapse:e.isCollapse,"collapse-transition":!1,"unique-opened":"","background-color":"#99CCCC","text-color":"black","active-text-color":"#9933FF"}},e._l(e.client_ip_list,(function(t){return r("el-submenu",{key:t,attrs:{index:t}},[r("template",{slot:"title"},[r("i",{staticClass:"iconfont icon-nginx"}),r("span",[e._v(e._s(t))])]),r("el-menu-item",{attrs:{index:"/"+t+"/config"},on:{click:function(n){return e.saveNavState("/"+t+"/config")}}},[r("template",{slot:"title"},[r("i",{staticClass:"iconfont icon-wenjian"}),r("span",[e._v("配置文件")])])],2),r("el-menu-item",{attrs:{index:"/"+t+"/upstreams"},on:{click:function(n){return e.saveNavState("/"+t+"/upstreams")}}},[r("template",{slot:"title"},[r("i",{staticClass:"iconfont icon-icon-test"}),r("span",[e._v("upstream管理")])])],2),r("el-menu-item",{attrs:{index:"/"+t+"/backup"},on:{click:function(n){return e.saveNavState("/"+t+"/backup")}}},[r("template",{slot:"title"},[r("i",{staticClass:"iconfont icon-lishi"}),r("span",[e._v("备份")])])],2)],2)})),1)],1),r("el-main",{style:{left:e.leftStyle}},[r("router-view",{key:e.key})],1)],1)],1)},k=[],y=(n("b0c0"),{data:function(){return{client_ip_list:{},isCollapse:!1,leftStyle:"200px",activePath:""}},created:function(){this.activePath=window.sessionStorage.getItem("activePath"),this.get_client_ip_list()},computed:{key:function(){return void 0!==this.$route.name?this.$route.name+new Date:this.$route+new Date}},methods:{logout:function(){window.sessionStorage.clear(),this.$router.push("/login")},get_client_ip_list:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("get_client_ip_list");case 2:if(n=t.sent,r=n.data,r!==[]){t.next=6;break}return t.abrupt("return",e.$message.error("获取ip列表失败！"));case 6:e.client_ip_list=r;case 7:case"end":return t.stop()}}),t)})))()},toggleCollp:function(){this.isCollapse=!this.isCollapse,!0===this.isCollapse?this.leftStyle="64px":this.leftStyle="200px"},backHome:function(){this.$router.push("/welcome")},saveNavState:function(e){window.sessionStorage.setItem("activePath",e),this.activePath=e}}}),$=y,F=(n("b099"),Object(u["a"])($,x,k,!1,null,"2d2fbdfa",null)),O=F.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Welcome to BestNginxUI")])])}],j={},S=j,E=Object(u["a"])(S,R,C,!1,null,"4989ee38",null),N=E.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("用户管理")])])}],U={},V=U,A=Object(u["a"])(V,P,I,!1,null,"2e569268",null),M=(A.exports,{}),D=Object(u["a"])(M,r,i,!1,null,null,null),B=(D.exports,function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),L=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("消息组件")])])}],z={name:"Msgs"},H=z,q=Object(u["a"])(H,B,L,!1,null,"c8e2cab8",null),T=(q.exports,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v("首页")]),n("el-breadcrumb-item",[e._v(e._s(e.client_ip))]),n("el-breadcrumb-item",[e._v("配置文件")])],1),n("el-divider"),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("el-button",{attrs:{round:"",type:"primary",disabled:e.isdiabled_check_or_reload_nginx},on:{click:e.checkNginxConf}},[e._v("nginx -t")]),n("el-button",{attrs:{round:"",type:"success",disabled:e.isdiabled_check_or_reload_nginx},on:{click:e.reloadNginxConf}},[e._v("nginx -s reload")]),n("el-button",{staticStyle:{"font-size":"15px",float:"right",padding:"3px 20px"},attrs:{type:"text",disabled:e.isdisabled_create_or_delete},on:{click:function(t){e.dialogDelFileFormVisible=!0}}},[e._v("删除文件")]),n("el-dialog",{attrs:{title:"删除文件",visible:e.dialogDelFileFormVisible},on:{"update:visible":function(t){e.dialogDelFileFormVisible=t}}},[n("el-form",{attrs:{model:e.create_or_delete_form}},[n("el-form-item",[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.create_or_delete_form.file_path,callback:function(t){e.$set(e.create_or_delete_form,"file_path",t)},expression:"create_or_delete_form.file_path"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogDelFileFormVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogDelFileFormVisible=!1,e.deleteFile(e.create_or_delete_form.file_path)}}},[e._v("确 定")])],1)],1),n("el-button",{staticStyle:{"font-size":"15px",float:"right",padding:"3px 20px"},attrs:{type:"text",disabled:e.isdisabled_create_or_delete},on:{click:function(t){e.dialogAddFileFormVisible=!0}}},[e._v("添加文件")]),n("el-dialog",{attrs:{title:"添加文件",visible:e.dialogAddFileFormVisible},on:{"update:visible":function(t){e.dialogAddFileFormVisible=t}}},[n("el-form",{attrs:{model:e.create_or_delete_form}},[n("el-form-item",[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.create_or_delete_form.file_path,callback:function(t){e.$set(e.create_or_delete_form,"file_path",t)},expression:"create_or_delete_form.file_path"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogAddFileFormVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogAddFileFormVisible=!1,e.createNewFile(e.create_or_delete_form.file_path)}}},[e._v("确 定")])],1)],1)],1),n("el-collapse",{attrs:{accordion:""}},e._l(e.all_file_and_content_list,(function(t,r){return n("el-collapse-item",{key:t.file_path,attrs:{name:t.file_path}},[n("template",{slot:"title"},[e._v(" "+e._s(t.file_path)+" "),n("i",{directives:[{name:"show",rawName:"v-show",value:!e.isReadOnly[t.file_path],expression:"!isReadOnly[item.file_path]"}],staticClass:"el-icon-edit"})]),n("el-form",{attrs:{model:t}},[n("el-form-item",[n("el-input",{attrs:{size:"medium",rows:"12",type:"textarea",readonly:e.isReadOnly[t.file_path]},model:{value:t.file_content,callback:function(n){e.$set(t,"file_content",n)},expression:"item.file_content"}})],1),n("el-form-item",{staticStyle:{"text-align":"center"}},[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return e.editFileContent(t.file_path)}}},[e._v(" 编辑 ")]),n("el-button",{attrs:{type:"success",disabled:e.isReadOnly[t.file_path]},on:{click:function(n){return e.saveFileContent(t.file_path,t.file_content)}}},[e._v(" 保存 ")]),n("el-button",{attrs:{type:"info",disabled:e.isReadOnly[t.file_path]},on:{click:function(n){return e.cancelSaveFileContent(r,t.file_path)}}},[e._v(" 回退 ")])],1)],1)],2)})),1)],1)],1)}),J=[],G=(n("4160"),n("caad"),n("c975"),n("a15b"),n("fb6a"),n("a434"),n("b64b"),n("ac1f"),n("2532"),n("1276"),n("159b"),{data:function(){return{client_ip:"",file_path_dir_dict_list:[],editing_file_path_list:[],all_file_and_content_list:[],isdiabled_check_or_reload_nginx:!1,isdisabled_create_or_delete:!1,isReadOnly:{},modified:{},dialogDelFileFormVisible:!1,dialogAddFileFormVisible:!1,create_or_delete_form:{file_path:"/etc/nginx/conf.d/"}}},mounted:function(){var e=this;this.get_ip_from_router(),this.read_all_file(this.client_ip),window.addEventListener("beforeunload",(function(t){return e.beforeunloadHandler(t)}))},beforeRouteUpdate:function(e,t,n){var r=this.modified,i=0;Object.keys(r).forEach((function(e){!0===r[e]&&(i+=1)})),0!==i?this.$confirm("当前页面数据未保存，确定要离开？","提示",{type:"warning"}).then((function(){n()})).catch((function(){n(!1)})):n()},beforeRouteLeave:function(e,t,n){var r=this.modified,i=0;Object.keys(r).forEach((function(e){!0===r[e]&&(i+=1)})),0!==i?this.$confirm("当前页面数据未保存，确定要离开？","提示",{type:"warning"}).then((function(){n()})).catch((function(){n(!1)})):n()},destroyed:function(){var e=this;window.removeEventListener("beforeunload",(function(t){return e.beforeunloadHandler(t)}))},methods:{beforeunloadHandler:function(e){var t=this.modified,n=0;Object.keys(t).forEach((function(e){!0===t[e]&&(n+=1)})),0!==n&&(e.preventDefault(),e.returnValue="")},get_ip_from_router:function(){this.client_ip=this.$route.params.ip},read_all_file:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var r,i,a,o,s,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("/nginx/conf/readAll",{params:{client_ip:e}});case 2:r=n.sent,i=r.data,t.all_file_and_content_list=i,a={},o={},s=[],l=[],i.forEach((function(e,t){var n=e.file_path;a[n]=!0,o[n]=!1;var r={},i=n.split("/").slice(0,-1).join("/")+"/";r["file_path_dir"]=i;var c=s.includes(i);c||(s.push(i),l.push(r))})),t.isReadOnly=a,t.modified=o,t.file_path_dir_dict_list=l;case 13:case"end":return n.stop()}}),n)})))()},fresh_all_file_content:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/nginx/conf/readAll",{params:{client_ip:e.client_ip}});case 2:n=t.sent,r=n.data,e.all_file_and_content_list=r;case 5:case"end":return t.stop()}}),t)})))()},fresh_single_file_content:function(e,t,n){var r=this;return Object(h["a"])(regeneratorRuntime.mark((function i(){var a,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,r.$http.get("/nginx_conf/read",{params:{client_ip:t,file_path:n}});case 2:if(a=i.sent,o=a.data,200===o.status){i.next=6;break}return i.abrupt("return",r.$message.error(o.msg));case 6:r.all_file_and_content_list[e]["file_content"]=o.msg;case 7:case"end":return i.stop()}}),i)})))()},checkNginxConf:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var n,r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={client_ip:e.client_ip},t.next=3,e.$http.post("/nginx_conf/check",n);case 3:r=t.sent,i=r.data,a=i.join("<br/>"),e.$alert(a,{dangerouslyUseHTMLString:!0});case 7:case"end":return t.stop()}}),t)})))()},reloadNginxConf:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={client_ip:e.client_ip},t.next=3,e.$http.post("/nginx_conf/reload",n);case 3:if(r=t.sent,i=r.data,200===i.status){t.next=7;break}return t.abrupt("return",e.$alert(i.msg,{type:"error"}));case 7:e.$message.success(i.msg);case 8:case"end":return t.stop()}}),t)})))()},createNewFile:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={client_ip:t.client_ip,file_path:e},n.next=3,t.$http.post("/nginx_conf/create",r);case 3:if(i=n.sent,a=i.data,200===a.status){n.next=7;break}return n.abrupt("return",t.$alert(a.msg,{type:"error"}));case 7:t.fresh_all_file_content(),t.$message.success(a.msg);case 9:case"end":return n.stop()}}),n)})))()},deleteFile:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var r,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={client_ip:t.client_ip,file_path:e},n.next=3,t.$http.post("/nginx_conf/delete",r);case 3:if(i=n.sent,a=i.data,200===a.status){n.next=7;break}return n.abrupt("return",t.$alert(a.msg,{type:"error"}));case 7:t.fresh_all_file_content(),t.$message.success(a.msg);case 9:case"end":return n.stop()}}),n)})))()},editFileContent:function(e){this.editing_file_path_list.push(e),this.isReadOnly[e]=!1,this.isdiabled_check_or_reload_nginx=!0,this.isdisabled_create_or_delete=!0,this.modified[e]=!0},saveFileContent:function(e,t){var n=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){var i,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={client_ip:n.client_ip,file_path:e,file_content:t},r.next=3,n.$http.post("/nginx_conf/update",i);case 3:if(a=r.sent,o=a.data,200===o.status){r.next=7;break}return r.abrupt("return",n.$alert(o.msg,{type:"error"}));case 7:n.editing_file_path_list.splice(n.editing_file_path_list.indexOf(e),1),n.isReadOnly[e]=!0,n.modified[e]=!1,n.isdiabled_check_or_reload_nginx=!1,n.isdisabled_create_or_delete=!1,n.$message.success(o.msg);case 13:case"end":return r.stop()}}),r)})))()},cancelSaveFileContent:function(e,t){var n=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){var i,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={client_ip:n.client_ip,file_path:t},r.next=3,n.$http.post("/nginx_conf/cancelUpdate",i);case 3:if(a=r.sent,o=a.data,200===o.status){r.next=7;break}return r.abrupt("return",n.$alert(o.msg,{type:"error"}));case 7:n.editing_file_path_list.splice(n.editing_file_path_list.indexOf(t),1),n.isReadOnly[t]=!0,n.modified[t]=!1,n.isdiabled_check_or_reload_nginx=!1,n.isdisabled_create_or_delete=!1,n.fresh_single_file_content(e,n.client_ip,t);case 13:case"end":return r.stop()}}),r)})))()}}}),W=G,K=W,Q=(n("e358"),Object(u["a"])(K,T,J,!1,null,"723f1a0a",null)),X=Q.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v("首页")]),n("el-breadcrumb-item",[e._v(e._s(e.client_ip))]),n("el-breadcrumb-item",[e._v("upstreams")])],1),n("el-divider"),n("el-card",{staticClass:"box-card"},[n("el-row",[n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{placeholder:"请输入upsream,支持模糊查找"},model:{value:e.upstream_name,callback:function(t){e.upstream_name=t},expression:"upstream_name"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(t){return e.read_upstream_info(e.upstream_name)}},slot:"append"})],1)],1),n("el-col",{attrs:{span:4}})],1),n("el-table",{staticStyle:{color:"black"},attrs:{data:e.all_backend_server_info_list,border:"",stripe:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"#",type:"index"}}),n("el-table-column",{attrs:{label:"upstream",prop:"upstream"}}),n("el-table-column",{attrs:{label:"backend_server_addr",prop:"backend_server_addr"}}),n("el-table-column",{attrs:{label:"当前状态",prop:"status"}}),n("el-table-column",{attrs:{label:" 修改状态",icon:"el-icon-edit"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"将状态置为空",enterable:!1,placement:"top"}},[n("el-popconfirm",{attrs:{title:"确定将状态置为空吗？"},on:{onConfirm:function(n){return e.changeStatus(t.row,"")}}},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:!(""==t.row.status),expression:"!(scope.row.status == '')"}],attrs:{slot:"reference",type:"success",circle:"",size:"small"},slot:"reference"},[e._v("up")])],1)],1),n("el-popconfirm",{attrs:{title:"确定将状态改为down吗？"},on:{onConfirm:function(n){return e.changeStatus(t.row,"down")}}},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:!("down"==t.row.status),expression:"!(scope.row.status == 'down')"}],attrs:{slot:"reference",type:"info",circle:"",size:"small"},slot:"reference"},[e._v("down")])],1),n("el-popconfirm",{attrs:{title:"确定将状态改为backup吗？"},on:{onConfirm:function(n){return e.changeStatus(t.row,"backup")}}},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:!("backup"==t.row.status),expression:"!(scope.row.status == 'backup')"}],attrs:{slot:"reference",type:"primary",circle:"",size:"small"},slot:"reference"},[e._v("backup")])],1)]}}])}),n("el-table-column",{attrs:{label:"ping"}})],1)],1)],1)},Z=[],ee={data:function(){return{client_ip:"",all_backend_server_info_list:[],upstream_name:""}},mounted:function(){this.get_ip_from_router(),this.read_all_backend_server_info(this.client_ip)},methods:{get_ip_from_router:function(){this.client_ip=this.$route.params.ip},read_all_backend_server_info:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("/nginx/backend_server/readAll",{params:{client_ip:e}});case 2:r=n.sent,i=r.data,t.all_backend_server_info_list=i;case 5:case"end":return n.stop()}}),n)})))()},read_upstream_info:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("/nginx/backend_server/readUpstream",{params:{client_ip:t.client_ip,upstream:e}});case 2:r=n.sent,i=r.data,t.all_backend_server_info_list=i;case 5:case"end":return n.stop()}}),n)})))()},changeStatus:function(e,t){var n=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){var i,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i={client_ip:n.client_ip,file_path:e.file_path,backend_server_addr:e.backend_server_addr,status:t},r.next=3,n.$http.post("/backend_server/status/update",i);case 3:if(a=r.sent,o=a.data,200===o.status){r.next=7;break}return r.abrupt("return",n.$message.error(o.msg));case 7:e.status=t;case 8:case"end":return r.stop()}}),r)})))()}}},te=ee,ne=Object(u["a"])(te,Y,Z,!1,null,"21ee81a2",null),re=ne.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[e._v("首页")]),n("el-breadcrumb-item",[e._v(e._s(e.client_ip))]),n("el-breadcrumb-item",[e._v("备份")])],1),n("el-divider"),n("h1",[e._v("此页面还在开发中")])],1)},ae=[],oe={data:function(){return{client_ip:""}},mounted:function(){this.get_ip_from_router()},methods:{get_ip_from_router:function(){this.client_ip=this.$route.params.ip}}},se=oe,le=Object(u["a"])(se,ie,ae,!1,null,"194bcf04",null),ce=le.exports;a["default"].use(d["a"]);var ue=[{path:"/",redirect:"/login"},{path:"/login",component:w},{path:"/home",component:O,redirect:"/welcome",children:[{path:"/welcome",component:N},{path:"/:ip/config",component:X},{path:"/:ip/upstreams",component:re},{path:"/:ip/backup",component:ce}]}],pe=new d["a"]({routes:ue});pe.beforeEach((function(e,t,n){if("/login"===e.path)return n();var r=window.sessionStorage.getItem("BestNginxUItoken");if(!r)return n("/login");n()}));var fe=pe,de=n("bc3a"),_e=n.n(de),me=n("5c96"),he=n.n(me),be=(n("0fae"),n("82da"),n("aede"),window.Glob.BaseUrl);_e.a.defaults.baseURL=be,_e.a.interceptors.request.use((function(e){return e.headers.Authorization="Bearer "+window.sessionStorage.getItem("BestNginxUItoken"),e})),_e.a.interceptors.response.use((function(e){return e}),(function(e){return e.response?401===e.response.status&&me["Message"].error("token已过期请重新登录"):me["Message"].error("网络异常"),Promise.reject(e)})),a["default"].prototype.$http=_e.a,a["default"].prototype.$message=me["Message"],a["default"].use(he.a),a["default"].config.productionTip=!1,new a["default"]({router:fe,render:function(e){return e(f)}}).$mount("#app")},"82da":function(e,t,n){},"918b":function(e,t,n){e.exports=n.p+"img/IAMI.48fc2c29.png"},a481:function(e,t,n){},a81d:function(e,t,n){},aede:function(e,t,n){},b099:function(e,t,n){"use strict";var r=n("a481"),i=n.n(r);i.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},da12:function(e,t,n){},e358:function(e,t,n){"use strict";var r=n("a81d"),i=n.n(r);i.a}});
//# sourceMappingURL=app.70c15814.js.map