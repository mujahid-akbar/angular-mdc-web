(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{r5mm:function(e,t,n){"use strict";n.r(t);var c=n("d2mR"),i=n("tyNb"),l=n("leug"),o=n("fXoL"),d=n("LuDt"),b=n("5l+6"),a=n("9UYg"),r=n("4G1d"),m=n("6D23"),s=n("OA+s"),f=n("dkiD"),p=n("uwiL"),u=n("CBIf"),w=n("ywDi");const h=[{path:"",component:(()=>{class e{ngOnInit(){this._componentViewer.template={title:"Form Fields",description:"MDC Form Field aligns an MDC Web form field (for example, a checkbox)\n      with its label and makes it RTL-aware. It also activates a ripple effect\n      upon interacting with the label.",references:[{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-form-field/README.md"}],code:"import {MdcFormFieldModule} from '@angular-mdc/web';",sass:"@use '@material/form-field/mdc-form-field';\n@use '@material/form-field';",tabs:[{label:"Api",route:"./api"},{label:"Examples",route:"./examples"}]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&o.tc(l.a,!0),2&e&&o.nc(n=o.ac())&&(t._componentViewer=n.first)},decls:1,vars:0,template:function(e,t){1&e&&o.Mb(0,"component-viewer")},directives:[d.a],encapsulation:2}),e})(),children:[{path:"",redirectTo:"api"},{path:"api",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["ng-component"]],decls:30,vars:0,consts:[[1,"docs-api"],["mdcHeadline6",""],[1,"markdown-code"],["mdcSubtitle2",""]],template:function(e,t){1&e&&(o.Rb(0,"div",0),o.Rb(1,"h3",1),o.wc(2,"MdcFormField"),o.Qb(),o.Rb(3,"p"),o.wc(4," Selector: "),o.Rb(5,"span",2),o.wc(6,"mdc-form-field"),o.Qb(),o.Qb(),o.wc(7," Exported as: "),o.Rb(8,"span",2),o.wc(9,"mdcFormField"),o.Qb(),o.Rb(10,"h4",3),o.wc(11,"Properties"),o.Qb(),o.Rb(12,"table"),o.Rb(13,"thead"),o.Rb(14,"tr"),o.Rb(15,"th"),o.wc(16,"Name"),o.Qb(),o.Rb(17,"th"),o.wc(18,"Description"),o.Qb(),o.Qb(),o.Qb(),o.Rb(19,"tbody"),o.Rb(20,"tr"),o.Rb(21,"td"),o.wc(22,"fluid: boolean"),o.Qb(),o.Rb(23,"td"),o.wc(24,"Width expands and contracts as the screen size changes."),o.Qb(),o.Qb(),o.Rb(25,"tr"),o.Rb(26,"td"),o.wc(27,"alignEnd: boolean"),o.Qb(),o.Rb(28,"td"),o.wc(29,"Position the input after the label."),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb())},directives:[b.i,b.l],encapsulation:2}),e})()},{path:"examples",component:(()=>{class e{constructor(){this.example1={html:'<mdc-form-field fluid>\n  <mdc-text-field label="First name" outlined required></mdc-text-field>\n  <mdc-helper-text persistent validation>*Required</mdc-helper-text>\n</mdc-form-field>'},this.example2={html:"<mdc-form-field>\n  <mdc-checkbox></mdc-checkbox>\n  <label>Checkbox</label>\n</mdc-form-field>"},this.example3={html:"<mdc-form-field>\n  <mdc-radio></mdc-radio>\n  <label>Radio</label>\n</mdc-form-field>"},this.example4={html:"<mdc-form-field>\n  <mdc-switch></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["ng-component"]],decls:49,vars:8,consts:[[1,"demo-content"],[1,"demo-content__headline"],[1,"demo-layout__row"],["mdc-button","",3,"click"],["fluid",""],["demoFluid",""],["label","First name","outlined","","required",""],["persistent","","validation",""],[3,"example"],["demofield",""],["formfieldradio",""],["demoradio1",""],["demoformswitch",""]],template:function(e,t){if(1&e){const e=o.Sb();o.Rb(0,"div",0),o.Rb(1,"h3",1),o.wc(2,"Text Field - Fluid"),o.Qb(),o.Rb(3,"div",2),o.Rb(4,"button",3),o.Zb("click",(function(){o.pc(e);const t=o.oc(7);return t.fluid=!t.fluid})),o.wc(5),o.Qb(),o.Qb(),o.Rb(6,"mdc-form-field",4,5),o.Mb(8,"mdc-text-field",6),o.Rb(9,"mdc-helper-text",7),o.wc(10,"*Required"),o.Qb(),o.Qb(),o.Mb(11,"example-viewer",8),o.Qb(),o.Rb(12,"div",0),o.Rb(13,"h3",1),o.wc(14,"Checkbox"),o.Qb(),o.Rb(15,"div",2),o.Rb(16,"button",3),o.Zb("click",(function(){o.pc(e);const t=o.oc(19);return t.alignEnd=!t.alignEnd})),o.wc(17),o.Qb(),o.Qb(),o.Rb(18,"mdc-form-field",null,9),o.Mb(20,"mdc-checkbox"),o.Rb(21,"label"),o.wc(22,"Checkbox"),o.Qb(),o.Qb(),o.Mb(23,"example-viewer",8),o.Qb(),o.Rb(24,"div",0),o.Rb(25,"h3",1),o.wc(26,"Radio"),o.Qb(),o.Rb(27,"div",2),o.Rb(28,"button",3),o.Zb("click",(function(){o.pc(e);const t=o.oc(31);return t.alignEnd=!t.alignEnd})),o.wc(29),o.Qb(),o.Qb(),o.Rb(30,"mdc-form-field",null,10),o.Mb(32,"mdc-radio",null,11),o.Rb(34,"label"),o.wc(35,"Radio"),o.Qb(),o.Qb(),o.Mb(36,"example-viewer",8),o.Qb(),o.Rb(37,"div",0),o.Rb(38,"h3",1),o.wc(39,"Switch"),o.Qb(),o.Rb(40,"div",2),o.Rb(41,"button",3),o.Zb("click",(function(){o.pc(e);const t=o.oc(44);return t.alignEnd=!t.alignEnd})),o.wc(42),o.Qb(),o.Qb(),o.Rb(43,"mdc-form-field",null,12),o.Mb(45,"mdc-switch"),o.Rb(46,"label"),o.wc(47,"off/on"),o.Qb(),o.Qb(),o.Mb(48,"example-viewer",8),o.Qb()}if(2&e){const e=o.oc(7),n=o.oc(19),c=o.oc(31),i=o.oc(44);o.Bb(5),o.yc("Fluid: ",e.fluid?"On":"Off",""),o.Bb(6),o.ic("example",t.example1),o.Bb(6),o.yc("Align End: ",n.alignEnd?"On":"Off",""),o.Bb(6),o.ic("example",t.example2),o.Bb(6),o.yc("Align End: ",c.alignEnd?"On":"Off",""),o.Bb(7),o.ic("example",t.example3),o.Bb(6),o.yc("Align End: ",i.alignEnd?"On":"Off",""),o.Bb(6),o.ic("example",t.example4)}},directives:[a.a,r.a,m.a,s.a,f.a,p.a,u.b,w.a],encapsulation:2}),e})()}]}];let R=(()=>{class e{}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[i.e.forChild(h)],i.e]}),e})();n.d(t,"FormFieldModule",(function(){return Q}));let Q=(()=>{class e{}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[c.a,R]]}),e})()}}]);