(self.webpackChunkfront_angular=self.webpackChunkfront_angular||[]).push([[158],{5158:(n,t,e)=>{"use strict";e.r(t),e.d(t,{DashboardModule:()=>D});var o=e(568),a=e(1116),c=e(3337),r=e(2184),i=e(5366),d=e(9996),g=e(611),s=e(529),l=e(2693);let p=(()=>{class n{constructor(n){this.http=n}getListAllUser(){return this.http.get(s.N.ApiUrl+"users").pipe((0,d.U)(n=>n),(0,g.q)(1)).toPromise()}}return n.\u0275fac=function(t){return new(t||n)(i.LFG(l.eN))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=e(3675),m=e(7112),_=e(5965),h=e(4369),f=e(1293),C=e(7307),M=e(8418),x=e(5078),P=e(7340);function O(n,t){1&n&&(i.TgZ(0,"th",21),i._uU(1," ID "),i.qZA())}function b(n,t){if(1&n&&(i.TgZ(0,"td",22),i._uU(1),i.qZA()),2&n){const n=t.$implicit;i.xp6(1),i.hij(" ",n.id," ")}}function Z(n,t){1&n&&(i.TgZ(0,"th",21),i._uU(1," Nome "),i.qZA())}function w(n,t){if(1&n&&(i.TgZ(0,"td",22),i._uU(1),i.qZA()),2&n){const n=t.$implicit;i.xp6(1),i.hij(" ",n.name," ")}}function A(n,t){1&n&&(i.TgZ(0,"th",21),i._uU(1," CPF "),i.qZA())}function k(n,t){if(1&n&&(i.TgZ(0,"td",22),i._uU(1),i.qZA()),2&n){const n=t.$implicit;i.xp6(1),i.hij(" ",n.cpf," ")}}function T(n,t){1&n&&i._UZ(0,"tr",23)}function q(n,t){1&n&&i._UZ(0,"tr",24)}const v=[],U=[{path:"",component:(()=>{class n{constructor(n,t){this.dashboardService=n,this.authService=t,this.displayedColumns=["id","name","cpf"],this.dataSource=v}ngOnInit(){this.dashboardService.getListAllUser().then(n=>{this.dataSource=n.rows.map(n=>({id:n.id,name:n.name,cpf:n.cpf}))})}logout(){this.authService.logout().toPromise()}}return n.\u0275fac=function(t){return new(t||n)(i.Y36(p),i.Y36(u.e))},n.\u0275cmp=i.Xpm({type:n,selectors:[["app-dashboard"]],decls:38,vars:3,consts:[[2,"height","calc(100% - 64px) !important"],["color","primary"],["fxLayout","row","fxLayoutAlign","space-between center",1,"w-100"],["mat-icon-button","","fxShow","true","fxHide.gt-sm","",3,"click"],[1,"menu-spacer"],["fxShow","true","fxHide.lt-md",""],["mat-button","",3,"click"],["fxFlexFill",""],["sidenav",""],["mat-list-item","",3,"click"],[1,"card","p-5"],[1,"card-header","card-header-warning"],[1,"card-title"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","cpf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(n,t){if(1&n){const n=i.EpF();i.TgZ(0,"div",0),i.TgZ(1,"mat-toolbar",1),i.TgZ(2,"mat-toolbar-row"),i.TgZ(3,"div",2),i.TgZ(4,"button",3),i.NdJ("click",function(){return i.CHM(n),i.MAs(15).toggle()}),i.TgZ(5,"mat-icon"),i._uU(6,"menu"),i.qZA(),i.qZA(),i.TgZ(7,"span"),i._uU(8,"Dashboard"),i.qZA(),i._UZ(9,"span",4),i.TgZ(10,"div",5),i.TgZ(11,"a",6),i.NdJ("click",function(){return t.logout()}),i._uU(12,"Logout"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.TgZ(13,"mat-sidenav-container",7),i.TgZ(14,"mat-sidenav",null,8),i.TgZ(16,"mat-nav-list"),i.TgZ(17,"a",9),i.NdJ("click",function(){return i.CHM(n),i.MAs(15).toggle()}),i._uU(18,"Close"),i.qZA(),i.TgZ(19,"a",9),i.NdJ("click",function(){return t.logout()}),i._uU(20,"Logout"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(21,"mat-sidenav-content",7),i.TgZ(22,"div",10),i.TgZ(23,"div",11),i.TgZ(24,"h4",12),i._uU(25,"Usu\xe1rios Cadastrados"),i.qZA(),i.qZA(),i.TgZ(26,"table",13),i.ynx(27,14),i.YNc(28,O,2,0,"th",15),i.YNc(29,b,2,1,"td",16),i.BQk(),i.ynx(30,17),i.YNc(31,Z,2,0,"th",15),i.YNc(32,w,2,1,"td",16),i.BQk(),i.ynx(33,18),i.YNc(34,A,2,0,"th",15),i.YNc(35,k,2,1,"td",16),i.BQk(),i.YNc(36,T,1,0,"tr",19),i.YNc(37,q,1,0,"tr",20),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()}2&n&&(i.xp6(26),i.Q6J("dataSource",t.dataSource),i.xp6(10),i.Q6J("matHeaderRowDef",t.displayedColumns),i.xp6(1),i.Q6J("matRowDefColumns",t.displayedColumns))},directives:[m.Ye,m.rD,_.xw,_.Wh,h.lW,f.b8,C.Hw,h.zs,M.TM,_.s9,M.JX,x.Hk,x.Tg,M.Rh,P.BZ,P.w1,P.fO,P.Dz,P.as,P.nj,P.ge,P.ev,P.XQ,P.Gk],styles:["table[_ngcontent-%COMP%]{margin-top:20px;width:100%}.user_card[_ngcontent-%COMP%]{height:400px;width:350px;margin-top:auto;margin-bottom:auto;background:#f39c12;position:relative;display:flex;justify-content:center;flex-direction:column;padding:10px;box-shadow:0 4px 8px 0 #0003,0 6px 20px 0 #00000030;-webkit-box-shadow:0 4px 8px 0 #0003,0 6px 20px 0 #00000030;-moz-box-shadow:0 4px 8px 0 #0003,0 6px 20px 0 #00000030;border-radius:5px}.brand_logo_container[_ngcontent-%COMP%]{position:absolute;height:170px;width:170px;top:-75px;border-radius:50%;background:#60a3bc;padding:10px;text-align:center}.brand_logo[_ngcontent-%COMP%]{height:150px;width:150px;border-radius:50%;border:2px solid #fff}.form_container[_ngcontent-%COMP%]{margin-top:100px}.login_btn[_ngcontent-%COMP%]{width:100%;background:#c0392b!important;color:#fff!important}.login_btn[_ngcontent-%COMP%]:focus{box-shadow:none!important;outline:0!important}.login_container[_ngcontent-%COMP%]{padding:0 2rem}.form-check-input[_ngcontent-%COMP%]:checked{background-color:#f44336;border-color:#0d6efd}.input-group-text[_ngcontent-%COMP%]{background:#c0392b!important;color:#fff!important;border:0!important;border-radius:.25rem 0 0 .25rem!important}.input_pass[_ngcontent-%COMP%]:focus, .input_user[_ngcontent-%COMP%]{box-shadow:none!important;outline:0!important}.custom-checkbox[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#c0392b!important}mat-sidenav-container[_ngcontent-%COMP%]{height:calc(100%)!important}\n\n.card[_ngcontent-%COMP%]{font-size:.875rem}.card[_ngcontent-%COMP%]   [class*=card-header-][_ngcontent-%COMP%]:not(.card-header-icon):not(.card-header-text):not(.card-header-image){border-radius:3px;margin-top:-20px;padding:15px}.card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]:not(.card-header-icon):not(.card-header-text){box-shadow:0 4px 20px 0 #00000024,0 7px 10px -5px #ff980066}.card[_ngcontent-%COMP%]   [class*=card-header-][_ngcontent-%COMP%]{margin:0 15px;padding:0;position:relative}.card[class*=bg-][_ngcontent-%COMP%], .card[class*=bg-][_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card[class*=bg-][_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .card[class*=bg-][_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   [class*=card-header-][_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   [class*=card-header-][_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   [class*=card-header-][_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   [class*=card-header-][_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff}.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]{border-bottom:none;background:0 0;z-index:3!important}.card.bg-warning[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .card-header-warning[_ngcontent-%COMP%]:not(.card-header-icon):not(.card-header-text), .card.card-rotate.bg-warning[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], .card.card-rotate.bg-warning[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{background:linear-gradient(60deg,#ffa726,#fb8c00)}.text-warning[_ngcontent-%COMP%]{color:#ff9800!important}"]}),n})(),canActivate:[r.P]}];let y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[c.Bz.forChild(U)],c.Bz]}),n})(),D=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=i.oAB({type:n}),n.\u0275inj=i.cJS({imports:[[a.ez,y,o.m]]}),n})()}}]);