(self.webpackChunkpd_free_angularcli=self.webpackChunkpd_free_angularcli||[]).push([[565],{9565:(Z,S,u)=>{"use strict";u.r(S),u.d(S,{MyAppModule:()=>G});var w=u(9808),C=u(2382),v=u(5852),f=u(655),b=u(520),k=u(900),g=u(5026),t=u(4893),E=u(4327);const c=new t.OlP("saver");function l(){return E.saveAs}var m=u(6114),p=u(2290);let h=(()=>{class r{constructor(e,s,i,n,o){this.oauthService=e,this.http=s,this.appService=i,this.toastr=n,this.save=o,this.things=[],this.apiURL=this.appService.settings.apiURL}find(){const e=this.apiURL+"/things",s=this.getHeader();return this.http.get(e,{headers:s}).toPromise()}getProperties(e){const s=this.apiURL+"/things/"+e+"/properties",i=this.getHeader();return this.http.get(s,{headers:i}).toPromise()}findOrCreatePropertyByName(e,s,i){return(0,f.mG)(this,void 0,void 0,function*(){return this.getProperties(e).then(n=>{for(let o in n)if(n[o].name==s)return Promise.resolve(n[o]);return this.createProperty(e,{name:s,typeId:i})})})}getPropertyValues(e,s,i,n){const o=this.apiURL+"/things/"+e+"/properties/"+s,a=(new b.LE).set("from",i.from+"").set("to",i.to+"");void 0!==i.fctInterval&&a.set("fctInterval",i.fctInterval+""),void 0!==i.timeInterval&&a.set("timeInterval",i.timeInterval),void 0!==i.fill&&a.set("fill",i.fill);let T=this.getHeader();return T=T.set("Accept",n?"text/csv":"application/json"),this.http.get(o,{headers:T,params:a,responseType:"blob"}).toPromise()}createThing(e){const s=this.apiURL+"/things",i=this.getHeader();return this.http.post(s,e,{headers:i}).toPromise()}edit(e,s){const i=this.apiURL+"/things/"+e,n=this.getHeader(),o={};return void 0!==s.name&&""!==s.name&&(o.name=s.name),void 0!==s.description&&""!==s.description&&(o.description=s.description),this.http.patch(i,o,{headers:n}).toPromise()}updatePEM(e,s){const i=this.apiURL+"/things/"+e+"/pem",n=this.getHeader();return this.http.patch(i,{pem:s},{headers:n}).toPromise()}delete(e){const s=this.apiURL+"/things/"+e,i=this.getHeader();return this.http.delete(s,{headers:i}).toPromise()}grant(e,s,i,n){const o=this.apiURL+"/things/"+e+"/properties/"+s+"/consents",a=this.getHeader();return this.http.post(o,{subjects:i,actions:n},{headers:a}).toPromise()}revoke(e,s,i){const n=this.apiURL+"/things/"+e+"/properties/"+s+"/consents/"+i,o=this.getHeader();return this.http.delete(n,{headers:o}).toPromise()}createProperty(e,s){const i=this.getHeader();return this.http.post(this.apiURL+"/things/"+e+"/properties",s,{headers:i}).toPromise()}editProperty(e,s,i){const n=this.apiURL+"/things/"+e+"/properties/"+s,o=this.getHeader(),a={};return void 0!==i.name&&""!==i.name&&(a.name=i.name),void 0!==i.description&&""!==i.description&&(a.description=i.description),this.http.patch(n,a,{headers:o}).toPromise()}deleteProperty(e,s){const i=this.apiURL+"/things/"+e+"/properties/"+s,n=this.getHeader();return this.http.delete(i,{headers:n}).toPromise()}lastValues(e,s){const i=this.apiURL+"/things/"+e+"/properties/"+s+"/last",n=this.getHeader();return this.http.get(i,{headers:n}).toPromise()}dpCount(e,s){let i=this.apiURL+"/things/count?from="+e;void 0!==s&&(i+="&timeInterval="+s);const n=this.getHeader();return this.http.get(i,{headers:n}).toPromise()}sharedProperties(e="*",s,i){return(0,f.mG)(this,void 0,void 0,function*(){let n=this.apiURL+"/properties?sharedWith="+e;void 0!==s&&void 0!==i&&(n+="&from="+s+"&timeInterval="+i);const o=this.getHeader();return this.http.get(n,{headers:o}).toPromise()})}getPropertyTypes(){return(0,f.mG)(this,void 0,void 0,function*(){if(this.propertyTypes)return Promise.resolve(this.propertyTypes);const e=this.apiURL+"/types",s=this.getHeader();return yield this.http.get(e,{headers:s}).subscribe(i=>{this.propertyTypes=i},i=>{console.warn("status",i.status)}),Promise.resolve(this.propertyTypes)})}csvFileUpload(e,s,i,n){const o=this.apiURL+"/things/"+e+"/properties/"+s+"?hasLabel="+(n?"true":"false"),a=this.getHeader(),T=new FormData;return T.append("fileKey",i,i.name),this.http.put(o,T,{headers:a}).toPromise()}updatePropertyValues(e,s){const i=this.apiURL+"/things/"+e+"/properties/"+s.id,n=this.getHeader();return this.http.put(i,s,{headers:n}).toPromise()}dpiStatus(e){const s=this.apiURL+"/things/"+e+"/types/dpi",i=this.getHeader();return this.http.get(s,{headers:i}).toPromise()}dpiCreate(e,s){const i=this.apiURL+"/things/"+e+"/types/dpi",n=this.getHeader();return this.http.post(i,s,{headers:n}).toPromise()}dpiCancel(e){const s=this.apiURL+"/things/"+e+"/types/dpi/cancel",i=new b.WM({timeout:"20000"}).set("Authorization","Bearer "+this.oauthService.getAccessToken());return this.http.get(s,{headers:i}).toPromise()}dpiDelete(e){const s=this.apiURL+"/things/"+e+"/types/dpi",i=this.getHeader();return this.http.delete(s,{headers:i}).toPromise()}dpiDownload(e){const s=this.apiURL+"/things/"+e+"/types/dpi",i=this.getHeader(),n=(new b.LE).set("download","true"),o="dpi_image_"+e.replace("dcd:things:","")+".zip";return this.http.get(s,{headers:i,params:n,reportProgress:!0,observe:"events",responseType:"blob"}).pipe(function _(r){return d=>d.pipe((0,g.R)((e,s)=>{if(A(s)){let n=Math.round(100*s.loaded/1166082792);n>100&&(n=100);const o=document.getElementById("download-dpi-image-progress");return o&&(o.style.width=n+"%"),{progress:Math.round(100*s.loaded/1166082792),state:"IN_PROGRESS",content:null}}if(U(s)){r&&s.body&&r(s.body);const i=document.getElementById("downloadImage");i&&(i.disabled=!1);const n=document.getElementById("spinnerDownloadImage");n&&(n.style.display="none");const o=document.getElementById("download-dpi-image-progress-bar");return o&&(o.style.display="none"),{progress:100,state:"DONE",content:s.body}}return e},{state:"PENDING",progress:0,content:null}))}(a=>this.save(a,o)))}takeout(){const e=this.apiURL+"/takeout",s=this.getHeader();return this.http.get(e,{headers:s,reportProgress:!0,observe:"events",responseType:"blob"}).pipe(function R(r){return d=>d.pipe((0,g.R)((e,s)=>{if(A(s)){let n=Math.round(100*s.loaded/1166082792);return n>100&&(n=100),{progress:Math.round(100*s.loaded/1166082792),state:"IN_PROGRESS",content:null}}if(U(s)){r&&s.body&&r(s.body);const i=document.getElementById("nav-progress-bar");return i&&(i.style.display="none"),{progress:100,state:"DONE",content:s.body}}return e},{state:"PENDING",progress:0,content:null}))}(n=>this.save(n,"takeout.zip")))}createGrafanaThing(e){const s=this.apiURL+"/things/"+e+"/apps/grafana",i=this.getHeader();return this.http.post(s,{},{headers:i}).toPromise()}getGrafanaId(e){const s=this.apiURL+"/things/"+e+"/apps/grafana/user",i=this.getHeader();return this.http.get(s,{headers:i}).toPromise()}getDPiHealth(){const e=this.apiURL+"/things/types/dpi/health",s=this.getHeader();return this.http.get(e,{headers:s}).toPromise()}getHeader(){return(new b.WM).set("Accept","application/json").set("Authorization","Bearer "+this.oauthService.getAccessToken())}toast(e,s="danger",i="nc-alert-circle-i"){let n="";"string"==typeof e?n=e:void 0!==e.error&&"string"!=typeof e.error?(n=e.error.name+" -- "+e.error.message,e.error.requirement&&(n+="<br>Requirement: "+e.error.requirement),e.error.hint&&(n+="<br>Hint: "+e.error.hint)):n="Bucket service unavailable.",this.toastr.info('<span data-notify="icon" class="nc-icon '+i+'"></span><span data-notify="message">'+n+"</span>","",{timeOut:4e3,closeButton:!0,enableHtml:!0,toastClass:"alert alert-"+s+" alert-with-icon",positionClass:"toast-top-center"})}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(m.Ct),t.LFG(b.eN),t.LFG(k.z),t.LFG(p._W),t.LFG(c))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac}),r})();function U(r){return r.type===b.dt.Response}function A(r){return r.type===b.dt.DownloadProgress||r.type===b.dt.UploadProgress}const L=[{name:"cobi",src:"https://cdn.cobi.bike/cobi.js/0.44.0/cobi.js"}];let y=(()=>{class r{constructor(){this.scripts={},L.forEach(e=>{this.scripts[e.name]={loaded:!1,src:e.src}})}load(...e){const s=[];return e.forEach(i=>s.push(this.loadScript(i))),Promise.all(s)}loadScript(e){return new Promise((s,i)=>{if(this.scripts[e].loaded)s({script:e,loaded:!0,status:"Already Loaded"});else{const n=document.createElement("script");n.type="text/javascript",n.src=this.scripts[e].src,n.onload=()=>{this.scripts[e].loaded=!0,console.log(`${e} Loaded.`),s({script:e,loaded:!0,status:"Loaded"})},n.onerror=o=>s({script:e,loaded:!1,status:"Loaded"}),document.getElementsByTagName("head")[0].appendChild(n)}})}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})(),I=(()=>{class r{constructor(e,s,i){this.route=e,this.scriptService=s,this.bucketService=i,this.speedValues=[],this.userPowerValues=[],this.stateValues=[],this.cadenceValues=[],this.heartRateValues=[]}ngOnInit(){return(0,f.mG)(this,void 0,void 0,function*(){this.route.queryParams.subscribe(e=>{void 0!==e.success?this.bucketService.toast(e.success,"success"):void 0!==e.error&&this.bucketService.toast(e.error,"danger")}),this.cobiThing=yield this.getOrInitialiseCobiThing(),console.log(this.cobiThing);for(let e=0;e<this.cobiThing.properties.length;e++)switch(this.cobiThing.properties[e].type.id){case"SPEED":this.speedProperty=this.cobiThing.properties[e];break;case"TORQUE":this.userPowerProperty=this.cobiThing.properties[e];break;case"STATE":this.stateProperty=this.cobiThing.properties[e];break;case"CADENCE":this.cadenceProperty=this.cobiThing.properties[e];break;case"HEART_RATE":this.heartRateProperty=this.cobiThing.properties[e]}this.scriptService.load("cobi").then(()=>{COBI.init("token"),setInterval(this.sendDataToBucket.bind(this),5e3);const e=document.getElementById("speed");e.innerHTML="-",COBI.rideService.speed.subscribe(a=>{e.innerHTML=a.toFixed(2),this.speedValues.push([Date.now(),a])});const s=document.getElementById("user-power");s.innerHTML="-",COBI.rideService.userPower.subscribe(a=>{s.innerHTML=a.toFixed(2),this.userPowerValues.push([Date.now(),a])});const i=document.getElementById("state");i.innerHTML="-",COBI.hub.externalInterfaceAction.subscribe(a=>{i.innerHTML="SELECT",this.stateValues.push([Date.now(),1]),new Audio("assets/honk.wav").play()});const n=document.getElementById("cadence");n.innerHTML="-",COBI.rideService.cadence.subscribe(a=>{n.innerHTML=a.toFixed(2),this.cadenceValues.push([Date.now(),a])});const o=document.getElementById("heart-rate");o.innerHTML="-",COBI.rideService.heartRate.subscribe(a=>{o.innerHTML=a.toFixed(2),this.heartRateValues.push([Date.now(),a,0])})})})}getOrInitialiseCobiThing(){return(0,f.mG)(this,void 0,void 0,function*(){const e=yield this.bucketService.find();let s;for(let n=0;n<e.length;n++)"COBI"===e[n].type&&(s=e[n]);if(void 0===s){const n={name:"Cobi",description:"Cobi Thing",type:"COBI"};s=yield this.bucketService.createThing(n)}void 0===s.properties&&(s.properties=[]);const i=["SPEED","TORQUE","STATE","CADENCE","HEART_RATE"];for(let n=0;n<i.length;n++){let o=!1;for(let a=0;a<s.properties.length;a++)s.properties[a].type.id===i[n]&&(o=!0);o||s.properties.push(yield this.bucketService.createProperty(s.id,{typeId:i[n]}))}return Promise.resolve(s)})}sendDataToBucket(){return(0,f.mG)(this,void 0,void 0,function*(){this.speedValues.length>0&&(this.speedProperty.values=this.speedValues.slice(),this.speedValues=[],this.bucketService.updatePropertyValues(this.cobiThing.id,this.speedProperty)),this.userPowerValues.length>0&&(this.userPowerProperty.values=this.userPowerValues.slice(),this.userPowerValues=[],this.bucketService.updatePropertyValues(this.cobiThing.id,this.userPowerProperty)),this.stateValues.length>0&&(this.stateProperty.values=this.stateValues.slice(),this.stateValues=[],this.bucketService.updatePropertyValues(this.cobiThing.id,this.stateProperty)),this.cadenceValues.length>0&&(this.cadenceProperty.values=this.cadenceValues.slice(),this.cadenceValues=[],this.bucketService.updatePropertyValues(this.cobiThing.id,this.cadenceProperty)),this.heartRateValues.length>0&&(this.heartRateProperty.values=this.heartRateValues.slice(),this.heartRateValues=[],this.bucketService.updatePropertyValues(this.cobiThing.id,this.heartRateProperty))})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(v.gz),t.Y36(y),t.Y36(h))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-dashboard-cmp"]],decls:20,vars:0,consts:[["id","speed"],["id","user-power"],["id","state"],["id","cadence"],["id","heart-rate"]],template:function(e,s){1&e&&(t.TgZ(0,"ul")(1,"li"),t._uU(2,"Speed: "),t._UZ(3,"span",0),t._uU(4," m/s"),t.qZA(),t.TgZ(5,"li"),t._uU(6,"User Power: "),t._UZ(7,"span",1),t._uU(8," W"),t.qZA(),t.TgZ(9,"li"),t._uU(10,"State: "),t._UZ(11,"span",2),t.qZA(),t.TgZ(12,"li"),t._uU(13,"Cadence: "),t._UZ(14,"span",3),t._uU(15," rpm "),t.qZA(),t.TgZ(16,"li"),t._uU(17,"Heart-rate: "),t._UZ(18,"span",4),t._uU(19," bpm "),t.qZA()())},encapsulation:2}),r})();var O=u(5337);const H=function(r){return[r]};function B(r,d){if(1&r&&(t.TgZ(0,"li",8)(1,"a",9),t._UZ(2,"i"),t.TgZ(3,"p"),t._uU(4),t.qZA()()()),2&r){const e=d.$implicit;t.Tol(e.class),t.xp6(1),t.Q6J("routerLink",t.VKq(9,H,e.path)),t.xp6(1),t.MT6("nc-icon ",e.icon," ",e.type,""),t.xp6(2),t.Oqu(e.title)}}const M=[{path:"/dashboard",title:"Dashboard",icon:"nc-layout-11",class:""}];let D=(()=>{class r{constructor(e){this.bucketService=e}ngOnInit(){this.menuItems=M.filter(e=>e)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(h))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-sidebar-cmp"]],decls:9,vars:1,consts:[[1,"sidebar-wrapper"],[1,"logo"],["href","./",1,"simple-text","logo-mini"],[1,"logo-image-small"],["src","./assets/img/logo.png"],["href","./",1,"simple-text","logo-normal"],[1,"nav"],["routerLinkActive","active",3,"class",4,"ngFor","ngForOf"],["routerLinkActive","active"],[3,"routerLink"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"a",2)(3,"div",3),t._UZ(4,"img",4),t.qZA()(),t.TgZ(5,"a",5),t._uU(6," Cobi App "),t.qZA()(),t.TgZ(7,"ul",6),t.YNc(8,B,5,11,"li",7),t.qZA()()),2&e&&(t.xp6(8),t.Q6J("ngForOf",s.menuItems))},directives:[w.sg,v.Od,v.yS],styles:[".property[_ngcontent-%COMP%]{padding-left:15px}"]}),r})();var P=u(7474);const N=["app-navbar-cmp"];let V=(()=>{class r{constructor(e,s,i,n,o,a){this.renderer=s,this.element=i,this.router=n,this.oauthService=o,this.bucketService=a,this.takeoutInProgress=!1,this.isCollapsed=!0,this.location=e,this.nativeElement=i.nativeElement,this.sidebarVisible=!1}ngOnInit(){if(this.listTitles=M.filter(s=>s),this.toggleButton=this.element.nativeElement.getElementsByClassName("navbar-toggle")[0],this.router.events.subscribe(s=>{this.sidebarClose()}),this.oauthService.hasValidAccessToken()&&this.oauthService.hasValidIdToken()){const s=this.oauthService.getIdentityClaims();this.userProfile={name:s.name,email:s.email}}}getTitle(){let e=this.location.prepareExternalUrl(this.location.path());"#"===e.charAt(0)&&(e=e.slice(1));for(let s=0;s<this.listTitles.length;s++)if(this.listTitles[s].path===e)return this.listTitles[s].title;return"Dashboard"}sidebarToggle(){!1===this.sidebarVisible?this.sidebarOpen():this.sidebarClose()}sidebarOpen(){const e=this.toggleButton,s=document.getElementsByTagName("html")[0],i=document.getElementsByClassName("main-panel")[0];setTimeout(function(){e.classList.add("toggled")},500),s.classList.add("nav-open"),window.innerWidth<991&&(i.style.position="fixed"),this.sidebarVisible=!0}sidebarClose(){const e=document.getElementsByTagName("html")[0],s=document.getElementsByClassName("main-panel")[0];window.innerWidth<991&&setTimeout(function(){s.style.position=""},500),this.toggleButton.classList.remove("toggled"),this.sidebarVisible=!1,e.classList.remove("nav-open")}collapse(){this.isCollapsed=!this.isCollapsed;const e=document.getElementsByTagName("nav")[0];this.isCollapsed?(e.classList.add("navbar-transparent"),e.classList.remove("bg-white")):(e.classList.remove("navbar-transparent"),e.classList.add("bg-white"))}logout(){this.oauthService.logOut(),this.oauthService.revokeTokenAndLogout()}editProfile(){window.open("https://dwd.tudelft.nl/profile","_blank").focus()}takeout(){console.log("takeout");const e=document.getElementById("nav-spinner");e.style.display="block",this.takeoutInProgress?console.log("ignoring takeout, already ongoing"):(this.takeoutInProgress=!0,this.download$=this.bucketService.takeout(),this.download$.subscribe(s=>{"PENDING"===s.state||"DONE"===s.state&&(e.style.display="none",this.takeoutInProgress=!1,this.bucketService.toast("Takeout ready.","success","nc-single-copy-04"))},s=>{this.takeoutInProgress=!1,e.style.display="none",this.bucketService.toast("Takeout failed.","danger","nc-single-copy-04")}))}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(w.Ye),t.Y36(t.Qsj),t.Y36(t.SBq),t.Y36(v.F0),t.Y36(m.Ct),t.Y36(h))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-navbar-cmp"]],viewQuery:function(e,s){if(1&e&&t.Gf(N,5),2&e){let i;t.iGM(i=t.CRH())&&(s.button=i.first)}},decls:53,vars:5,consts:[[1,"navbar","navbar-expand-lg","navbar-absolute","fixed-top","navbar-transparent"],[1,"container-fluid"],[1,"navbar-wrapper"],[1,"navbar-toggle"],["type","button",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-bar","bar1"],[1,"navbar-toggler-bar","bar2"],[1,"navbar-toggler-bar","bar3"],["href","javascript:void(0)",1,"navbar-brand"],["type","button","aria-controls","collapseExample",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-bar","navbar-kebab"],["id","collapseExample",1,"collapse","navbar-collapse","justify-content-end",3,"ngbCollapse"],["id","nav-progress-bar",1,"progress",2,"display","none"],["id","nav-progress","role","progressbar",1,"progress-bar","progress-bar-info"],["id","nav-spinner",1,"spinner",2,"display","none"],[1,"rect1"],[1,"rect2"],[1,"rect3"],[1,"rect4"],[1,"rect5"],[1,"navbar-nav"],["ngbDropdown","","placement","bottom-left",1,"nav-item","btn-rotate"],["ngbDropdownToggle","","id","navbarDropdownMenuLink",1,"nav-link"],[1,"nc-icon","nc-single-02"],[1,"d-lg-none","d-md-block"],["ngbDropdownMenu","","aria-labelledby","navbarDropdownMenuLink",1,"dropdown-menu","dropdown-menu-right"],["ngbDropdownItem",""],[1,"nc-icon","nc-email-85"],[1,"dropdown-divider"],["ngbDropdownItem","","id","download-takeout",3,"click"],[1,"nc-icon","nc-cloud-download-93"],["ngbDropdownItem","",3,"click"],[1,"nc-icon","nc-settings-gear-65"],[1,"nc-icon","nc-simple-remove"],[1,"nav-item"],["href","./","target","_blank","alt","Help","title","Help",1,"nav-link","btn-rotate"],[1,"nc-icon","nc-support-17"]],template:function(e,s){1&e&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),t.NdJ("click",function(){return s.sidebarToggle()}),t._UZ(5,"span",5)(6,"span",6)(7,"span",7),t.qZA()(),t.TgZ(8,"a",8),t._uU(9),t.qZA()(),t.TgZ(10,"button",9),t.NdJ("click",function(){return s.collapse()}),t._UZ(11,"span",10)(12,"span",10)(13,"span",10),t.qZA(),t.TgZ(14,"div",11)(15,"div",12),t._UZ(16,"div",13),t.qZA(),t.TgZ(17,"div",14),t._UZ(18,"div",15)(19,"div",16)(20,"div",17)(21,"div",18)(22,"div",19),t.qZA(),t.TgZ(23,"ul",20)(24,"li",21)(25,"a",22),t._UZ(26,"i",23),t.TgZ(27,"p")(28,"span",24),t._uU(29,"User"),t.qZA()()(),t.TgZ(30,"div",25)(31,"a",26),t._UZ(32,"i",23),t._uU(33),t.qZA(),t.TgZ(34,"a",26),t._UZ(35,"i",27),t._uU(36),t.qZA(),t._UZ(37,"div",28),t.TgZ(38,"a",29),t.NdJ("click",function(){return s.takeout()}),t._UZ(39,"i",30),t._uU(40," Takeout "),t.qZA(),t.TgZ(41,"a",31),t.NdJ("click",function(){return s.editProfile()}),t._UZ(42,"i",32),t._uU(43," Profile Settings "),t.qZA(),t.TgZ(44,"a",31),t.NdJ("click",function(){return s.logout()}),t._UZ(45,"i",33),t._uU(46," Log out "),t.qZA()()(),t.TgZ(47,"li",34)(48,"a",35),t._UZ(49,"i",36),t.TgZ(50,"p")(51,"span",24),t._uU(52,"Help"),t.qZA()()()()()()()()),2&e&&(t.xp6(9),t.Oqu(s.getTitle()),t.xp6(1),t.uIk("aria-expanded",!s.isCollapsed),t.xp6(4),t.Q6J("ngbCollapse",s.isCollapsed),t.xp6(19),t.hij(" ",s.userProfile.name," "),t.xp6(3),t.hij(" ",s.userProfile.email," "))},directives:[P.M2,P._D,P.jt,P.iD,P.Vi,P.TH],styles:[".progress[_ngcontent-%COMP%]{height:5px;width:300px}.progress-bar-info[_ngcontent-%COMP%]{background-color:#51bcda}.progress-bar-danger[_ngcontent-%COMP%]{background-color:#ef8157}.spinner[_ngcontent-%COMP%]{width:50px;height:10px;text-align:center;display:inline-block}.spinner[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#000;height:100%;width:4px;margin:0 1px;display:inline-block;-webkit-animation:sk-stretchdelay 1.2s infinite ease-in-out;animation:sk-stretchdelay 1.2s infinite ease-in-out}.spinner[_ngcontent-%COMP%]   .rect2[_ngcontent-%COMP%]{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.spinner[_ngcontent-%COMP%]   .rect3[_ngcontent-%COMP%]{-webkit-animation-delay:-1s;animation-delay:-1s}.spinner[_ngcontent-%COMP%]   .rect4[_ngcontent-%COMP%]{-webkit-animation-delay:-.9s;animation-delay:-.9s}.spinner[_ngcontent-%COMP%]   .rect5[_ngcontent-%COMP%]{-webkit-animation-delay:-.8s;animation-delay:-.8s}"]}),r})();var x=u(5227);let j=v.Bz.forChild([{path:"",component:(()=>{class r{ngOnInit(){console.debug("Init MyApp Component.")}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-myapp"]],decls:8,vars:0,consts:[[1,"wrapper"],["data-color","white","data-active-color","danger",1,"sidebar"],[1,"main-panel"],[1,"content"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-sidebar-cmp"),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"app-navbar-cmp"),t.TgZ(5,"div",3),t._UZ(6,"router-outlet"),t.qZA(),t._UZ(7,"app-footer-cmp"),t.qZA()())},directives:[D,V,v.lC,x.c],styles:[""]}),r})(),canActivate:[O.a],children:[{path:"",component:I}]}]),G=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({providers:[h,y,{provide:c,useFactory:l}],imports:[[w.ez,C.u5,P.IJ,C.UX,j]]}),r})()},4327:function(Z,S){var C;void 0!==(C=function(){"use strict";function f(c,l,m){var p=new XMLHttpRequest;p.open("GET",c),p.responseType="blob",p.onload=function(){E(p.response,l,m)},p.onerror=function(){console.error("could not download file")},p.send()}function b(c){var l=new XMLHttpRequest;l.open("HEAD",c,!1);try{l.send()}catch(m){}return 200<=l.status&&299>=l.status}function k(c){try{c.dispatchEvent(new MouseEvent("click"))}catch(m){var l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(l)}}var g="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,t=g.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),E=g.saveAs||("object"!=typeof window||window!==g?function(){}:"download"in HTMLAnchorElement.prototype&&!t?function(c,l,m){var p=g.URL||g.webkitURL,h=document.createElement("a");h.download=l=l||c.name||"download",h.rel="noopener","string"==typeof c?(h.href=c,h.origin===location.origin?k(h):b(h.href)?f(c,l,m):k(h,h.target="_blank")):(h.href=p.createObjectURL(c),setTimeout(function(){p.revokeObjectURL(h.href)},4e4),setTimeout(function(){k(h)},0))}:"msSaveOrOpenBlob"in navigator?function(c,l,m){if(l=l||c.name||"download","string"!=typeof c)navigator.msSaveOrOpenBlob(function v(c,l){return void 0===l?l={autoBom:!1}:"object"!=typeof l&&(console.warn("Deprecated: Expected third argument to be a object"),l={autoBom:!l}),l.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\ufeff",c],{type:c.type}):c}(c,m),l);else if(b(c))f(c,l,m);else{var p=document.createElement("a");p.href=c,p.target="_blank",setTimeout(function(){k(p)})}}:function(c,l,m,p){if((p=p||open("","_blank"))&&(p.document.title=p.document.body.innerText="downloading..."),"string"==typeof c)return f(c,l,m);var h="application/octet-stream"===c.type,_=/constructor/i.test(g.HTMLElement)||g.safari,R=/CriOS\/[\d]+/.test(navigator.userAgent);if((R||h&&_||t)&&"undefined"!=typeof FileReader){var U=new FileReader;U.onloadend=function(){var y=U.result;y=R?y:y.replace(/^data:[^;]*;/,"data:attachment/file;"),p?p.location.href=y:location=y,p=null},U.readAsDataURL(c)}else{var A=g.URL||g.webkitURL,L=A.createObjectURL(c);p?p.location=L:location.href=L,p=null,setTimeout(function(){A.revokeObjectURL(L)},4e4)}});g.saveAs=E.saveAs=E,Z.exports=E}.apply(S,[]))&&(Z.exports=C)}}]);