import{l as b,k as g,n as q,p as v,d as T,b as A,e as _,R as G,Y as K,g as P,t as X,h as S,W as Y,cv as J,r as j,o as D,bf as $,U as Q,bH as Z,z as W,G as ee,H as te,u as B,I as re,c as r,i as oe}from"./index.02a17cf1.js";import{c as ae,u as ie,a as se,i as ne}from"./use-table.14d22a8a.js";import{u as le}from"./file.ec0c9e7e.js";import{C as I}from"./index.ef447d1d.js";import ce from"./index.f771face.js";import pe from"./index.9b3662c9.js";import me from"./index.e7938d1b.js";import{s as ue}from"./index.module.9c9bd97f.js";import{S as de}from"./index.0da29625.js";import{N as he}from"./ButtonGroup.1b8a381d.js";import{S as fe}from"./SearchOutlined.280f9205.js";import{i as ge}from"./is-browser.e7afaa57.js";import{b as be}from"./resolve-slot.92499a18.js";import{N as C}from"./Space.8a344b95.js";import{N as R}from"./Button.1b3ea9f7.js";import{N as ve}from"./Icon.0cd298dd.js";import{N as Ce,a as Re}from"./DataTable.ddc5a79d.js";import"./index.9b0cc109.js";import"./index.b0aa157e.js";import"./service.ade35c11.js";import"./ui-setting.7e6814b1.js";import"./lodash.3a74b132.js";import"./common.a16f92ec.js";import"./SettingOutlined.901415e1.js";import"./PauseCircleOutlined.6f50ffc5.js";import"./CloseCircleOutlined.d6e82e31.js";import"./CheckCircleOutlined.b15d9580.js";import"./EditOutlined.8be88705.js";import"./index.8474b6bf.js";import"./table-action.65f20e21.js";import"./FormOutlined.0c6aa81a.js";import"./UploadOutlined.bbed6507.js";import"./DownloadOutlined.bd8b049e.js";import"./DeleteOutlined.d3b97bbb.js";import"./Tooltip.76a430fa.js";import"./Popover.92dc7b00.js";import"./index.8a81335d.js";import"./flatten.8ad131a2.js";import"./Scrollbar.988383de.js";import"./VResizeObserver.f80d6e55.js";import"./use-false-until-truthy.e57d8f60.js";import"./_baseMap.d8d47059.js";import"./get.852d0cd9.js";import"./cssr.f561ccf0.js";import"./utils.eff12f29.js";import"./format-length.a6a40b1f.js";import"./use-merged-state.2bdc3563.js";import"./use-compitable.cd47f4ac.js";import"./next-frame-once.50ecadf2.js";import"./Popconfirm.98866df0.js";import"./use-locale.47aab0f5.js";import"./keysOf.843c523b.js";import"./use-form-item.96cfc8ba.js";import"./get-slot.eeb09d52.js";import"./index.5f9a33e7.js";import"./index.fe057c74.js";import"./column-width-config.03ebcd18.js";import"./Ellipsis.eed9f363.js";import"./Card.f8db533a.js";import"./index.08dd828f.js";import"./Modal.920fa101.js";import"./fade-in-scale-up.cssr.d8408fe5.js";import"./index.21198e00.js";import"./Form.de76c832.js";import"./FormItem.aeb1ee46.js";import"./Input.59461546.js";import"./Suffix.62982c61.js";import"./Upload.60743b2e.js";import"./Add.a9b5dac9.js";import"./Image.a9e33dbe.js";import"./ArrowDown.fd6213c2.js";import"./Checkbox.c8f5c3b1.js";import"./RadioGroup.7b709552.js";import"./Radio.4578e023.js";import"./Dropdown.de4044d8.js";import"./ChevronRight.d1d16011.js";import"./Select.51d2f90f.js";import"./Empty.249462a1.js";import"./use-keyboard.8f9f6db8.js";import"./Forward.b8f2636c.js";const Se=b("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[g("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),g("a",`
 color: inherit;
 text-decoration: inherit;
 `),b("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[b("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),g("&:not(:last-child)",[q("clickable",[v("link",`
 cursor: pointer;
 `,[g("&:hover",`
 background-color: var(--n-item-color-hover);
 `),g("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),v("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[g("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[b("icon",`
 color: var(--n-item-text-color-hover);
 `)]),g("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[b("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),v("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),g("&:last-child",[v("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[b("icon",`
 color: var(--n-item-text-color-active);
 `)]),v("separator",`
 display: none;
 `)])])]),F=Y("n-breadcrumb"),ye=Object.assign(Object.assign({},_.props),{separator:{type:String,default:"/"}}),ze=T({name:"Breadcrumb",props:ye,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:a}=A(e),s=_("Breadcrumb","-breadcrumb",Se,J,e,i);G(F,{separatorRef:K(e,"separator"),mergedClsPrefixRef:i});const t=P(()=>{const{common:{cubicBezierEaseInOut:c},self:{separatorColor:h,itemTextColor:l,itemTextColorHover:p,itemTextColorPressed:o,itemTextColorActive:m,fontSize:u,fontWeightActive:y,itemBorderRadius:x,itemColorHover:w,itemColorPressed:k,itemLineHeight:d}}=s.value;return{"--n-font-size":u,"--n-bezier":c,"--n-item-text-color":l,"--n-item-text-color-hover":p,"--n-item-text-color-pressed":o,"--n-item-text-color-active":m,"--n-separator-color":h,"--n-item-color-hover":w,"--n-item-color-pressed":k,"--n-item-border-radius":x,"--n-font-weight-active":y,"--n-item-line-height":d}}),n=a?X("breadcrumb",void 0,t,e):void 0;return{mergedClsPrefix:i,cssVars:a?void 0:t,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),S("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},S("ul",null,this.$slots))}}),xe=ge?window:null,we=(e=xe)=>{const i=()=>{const{hash:t,host:n,hostname:c,href:h,origin:l,pathname:p,port:o,protocol:m,search:u}=(e==null?void 0:e.location)||{};return{hash:t,host:n,hostname:c,href:h,origin:l,pathname:p,port:o,protocol:m,search:u}},a=()=>{s.value=i()},s=j(i());return D(()=>{e&&(e.addEventListener("popstate",a),e.addEventListener("hashchange",a))}),$(()=>{e&&(e.removeEventListener("popstate",a),e.removeEventListener("hashchange",a))}),s},ke={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},Ne=T({name:"BreadcrumbItem",props:ke,setup(e,{slots:i}){const a=Q(F,null);if(!a)return()=>null;const{separatorRef:s,mergedClsPrefixRef:t}=a,n=we(),c=P(()=>e.href?"a":"span"),h=P(()=>n.value.href===e.href?"location":null);return()=>{const{value:l}=t;return S("li",{class:[`${l}-breadcrumb-item`,e.clickable&&`${l}-breadcrumb-item--clickable`]},S(c.value,{class:`${l}-breadcrumb-item__link`,"aria-current":h.value,href:e.href,onClick:e.onClick},i),S("span",{class:`${l}-breadcrumb-item__separator`,"aria-hidden":"true"},be(i.separator,()=>{var p;return[(p=e.separator)!==null&&p!==void 0?p:s.value]})))}}});function L(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!oe(e)}const Le={resourceType:{type:String,default:void 0}},tr=T({name:"ResourceList",props:Le,setup(e){var U;const i=Z(),a=le(),s=j(),{variables:t,tableWidth:n,requestData:c,updateList:h,createColumns:l,handleCreateFile:p}=ae(),o=W();t.resourceType=e.resourceType;const m=f=>{t.pagination.page=f,c()},u=f=>{t.pagination.page=1,t.pagination.pageSize=f,c()},y=()=>{c()},x=()=>{t.folderShowRef=!0},w=()=>{t.isReupload=!1,t.uploadShowRef=!0},k=()=>{t.renameShowRef=!0},d=ie(),z=se(),E=()=>{z.getIsDetailPage?(t.resourceType=d.getResourceType,t.fullName=d.getFullName,t.tenantCode=d.getTenantCode,t.searchRef=d.getSearchValue,t.pagination.page=d.getPage,t.pagination.pageSize=d.getPageSize,ne(t.searchRef)||y(),d.$reset(),z.$reset()):(d.$reset(),z.$reset())};$(()=>{z.$reset()}),D(()=>{E(),l(t),a.setCurrentDir(t.fullName),s.value=a.getCurrentDir.replace(/\/+$/g,"").split("/").slice(2),c()});const H=(U=ee())==null?void 0:U.appContext.config.globalProperties.trim,M=f=>{const N=t.fullName.split("/").slice(0,f+3).join("/")+"/";O(N)},O=f=>{const{tenantCode:N}=t,V=o.getBaseResDir;f===""||!f.startsWith(V)?i.push({name:"file-manage"}):i.push({name:"resource-file-subdirectory",query:{prefix:f,tenantCode:N}})};return te(B().locale,()=>{l(t)}),{breadListRef:s,tableWidth:n,updateList:h,handleConditions:y,handleCreateFolder:x,handleCreateFile:p,handleUploadFile:w,handleRenameFile:k,handleUpdatePage:m,handleUpdatePageSize:u,handleBread:M,trim:H,...re(t)}},render(){let e,i,a;const{t:s}=B(),{handleConditions:t,handleCreateFolder:n,handleCreateFile:c,handleUploadFile:h,tableWidth:l}=this,p=s("resource.file.file_manage");return r(C,{vertical:!0},{default:()=>[r(I,null,{default:()=>[r(C,{justify:"space-between"},{default:()=>[r(he,{size:"small"},{default:()=>[r(R,{type:"primary",onClick:n,class:"btn-create-directory"},L(e=s("resource.file.create_folder"))?e:{default:()=>[e]}),r(R,{onClick:c,class:"btn-create-file"},L(i=s("resource.file.create_file"))?i:{default:()=>[i]}),r(R,{onClick:h,class:"btn-upload-resource"},L(a=s("resource.file.upload_files"))?a:{default:()=>[a]})]}),r(C,null,{default:()=>[r(de,{placeholder:s("resource.file.enter_keyword_tips"),value:this.searchRef,"onUpdate:value":o=>this.searchRef=o,onSearch:t},null),r(R,{size:"small",type:"primary",onClick:t},{default:()=>[r(ve,null,{default:()=>[r(fe,null,null)]})]})]})]})]}),r(I,{title:p},{header:()=>r(ze,{separator:">"},{default:()=>{var o;return[(o=this.breadListRef)==null?void 0:o.map((m,u)=>r(Ne,null,{default:()=>[r(R,{text:!0,disabled:u>0&&u===this.breadListRef.length-1,onClick:()=>this.handleBread(u)},{default:()=>[u===0?p:m]})]}))]}}),default:()=>r(C,{vertical:!0},{default:()=>{var o;return[r(Ce,{remote:!0,columns:this.columns,data:(o=this.resourceList)==null?void 0:o.table,striped:!0,size:"small",class:ue["table-box"],"row-class-name":"items",scrollX:l},null),r(C,{justify:"center"},{default:()=>[r(Re,{page:this.pagination.page,"onUpdate:page":m=>this.pagination.page=m,pageSize:this.pagination.pageSize,"onUpdate:pageSize":m=>this.pagination.pageSize=m,pageSizes:this.pagination.pageSizes,"item-count":this.pagination.itemCount,onUpdatePage:this.handleUpdatePage,onUpdatePageSize:this.handleUpdatePageSize,"show-quick-jumper":!0,"show-size-picker":!0},null)]})]}})}),r(ce,{show:this.folderShowRef,"onUpdate:show":o=>this.folderShowRef=o,resourceType:this.resourceType,onUpdateList:this.updateList},null),r(pe,{show:this.uploadShowRef,"onUpdate:show":o=>this.uploadShowRef=o,isReupload:this.isReupload,resourceType:this.resourceType,name:this.reuploadInfo.name,fullName:this.reuploadInfo.fullName,description:this.reuploadInfo.description,userName:this.reuploadInfo.user_name,onUpdateList:this.updateList},null),r(me,{show:this.renameShowRef,"onUpdate:show":o=>this.renameShowRef=o,resourceType:this.resourceType,name:this.renameInfo.name,fullName:this.renameInfo.fullName,description:this.renameInfo.description,userName:this.renameInfo.user_name,onUpdateList:this.updateList},null)]})}});export{tr as default};
