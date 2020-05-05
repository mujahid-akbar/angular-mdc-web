(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{hBXH:function(e,t,r){"use strict";r.r(t),r.d(t,"LinearProgressModule",(function(){return A}));var s=r("d2mR"),n=r("tyNb"),i=r("leug"),o=r("fXoL"),a=r("LuDt"),c=r("w0pw"),u=r("9UYg"),l=r("f6B5"),m=r("sEbM"),d=r("mrSG"),p=r("tJqG"),b=r("m9I9"),h={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},f={ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},_=function(e){function t(r){return e.call(this,Object(d.a)(Object(d.a)({},t.defaultAdapter),r))||this}return Object(d.c)(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return h},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},hasClass:function(){return!1},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.isDeterminate_=!this.adapter_.hasClass(h.INDETERMINATE_CLASS),this.isReversed_=this.adapter_.hasClass(h.REVERSED_CLASS),this.progress_=0,this.buffer_=1},t.prototype.setDeterminate=function(e){if(this.isDeterminate_=e,this.isDeterminate_)return this.adapter_.removeClass(h.INDETERMINATE_CLASS),this.adapter_.setAttribute(f.ARIA_VALUENOW,this.progress_.toString()),this.setPrimaryBarProgress_(this.progress_),void this.setBufferBarProgress_(this.buffer_);this.isReversed_&&(this.adapter_.removeClass(h.REVERSED_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(h.REVERSED_CLASS)),this.adapter_.addClass(h.INDETERMINATE_CLASS),this.adapter_.removeAttribute(f.ARIA_VALUENOW),this.setPrimaryBarProgress_(1),this.setBufferBarProgress_(1)},t.prototype.isDeterminate=function(){return this.isDeterminate_},t.prototype.setProgress=function(e){this.progress_=e,this.isDeterminate_&&(this.setPrimaryBarProgress_(e),this.adapter_.setAttribute(f.ARIA_VALUENOW,e.toString()))},t.prototype.getProgress=function(){return this.progress_},t.prototype.setBuffer=function(e){this.buffer_=e,this.isDeterminate_&&this.setBufferBarProgress_(e)},t.prototype.setReverse=function(e){this.isReversed_=e,this.isDeterminate_||(this.adapter_.removeClass(h.INDETERMINATE_CLASS),this.adapter_.forceLayout(),this.adapter_.addClass(h.INDETERMINATE_CLASS)),this.isReversed_?this.adapter_.addClass(h.REVERSED_CLASS):this.adapter_.removeClass(h.REVERSED_CLASS)},t.prototype.open=function(){this.adapter_.removeClass(h.CLOSED_CLASS)},t.prototype.close=function(){this.adapter_.addClass(h.CLOSED_CLASS)},t.prototype.setPrimaryBarProgress_=function(e){var t="scaleX("+e+")",r="undefined"!=typeof window?Object(p.b)(window,"transform"):"transform";this.adapter_.setPrimaryBarStyle(r,t)},t.prototype.setBufferBarProgress_=function(e){this.adapter_.setBufferBarStyle(f.FLEX_BASIS,100*e+"%")},t}(b.a),g=r("Hj8T");let v=(()=>{class e extends m.a{constructor(e,t,r){super(r),this._platform=e,this._changeDetectorRef=t,this.elementRef=r,this._initialized=!1,this.label=void 0,this._progress=0,this._determinate=!1,this._buffer=0,this._reversed=!1,this._root=this.elementRef.nativeElement}get progress(){return this._progress}set progress(e){this._progress=Object(l.e)(e)}get determinate(){return this._determinate}set determinate(e){this._determinate=Object(l.b)(e)}get buffer(){return this._buffer}set buffer(e){this._buffer=Object(l.e)(e)}get reversed(){return this._reversed}set reversed(e){this._reversed=Object(l.b)(e),this._syncReversedWithFoundation()}getDefaultFoundation(){return new _({addClass:e=>this._root.classList.add(e),forceLayout:()=>this._root.offsetWidth,setBufferBarStyle:(e,t)=>{this._root.querySelector(_.strings.BUFFER_BAR_SELECTOR).style.setProperty(e,t)},setPrimaryBarStyle:(e,t)=>{this._root.querySelector(_.strings.PRIMARY_BAR_SELECTOR).style.setProperty(e,t)},hasClass:e=>this._root.classList.contains(e),removeClass:e=>this._root.classList.remove(e),removeAttribute:e=>this._root.removeAttribute(e),setAttribute:(e,t)=>this._root.setAttribute(e,t)})}ngOnInit(){this._platform.isBrowser&&(this._initialized=!0,this._foundation.init(),this._syncProgressWithFoundation(),this._syncBufferWithFoundation(),this._syncDeterminateWithFoundation(),this._syncReversedWithFoundation(),this._changeDetectorRef.markForCheck())}ngOnChanges(e){this._initialized&&(e.progress&&this._syncProgressWithFoundation(),e.buffer&&this._syncBufferWithFoundation(),e.determinate&&this._syncDeterminateWithFoundation(),e.reversed&&this._syncReversedWithFoundation())}open(){this._foundation.open()}close(){this._foundation.close()}_syncProgressWithFoundation(){this._foundation.setProgress(this.progress)}_syncBufferWithFoundation(){this._foundation.setBuffer(this.buffer)}_syncDeterminateWithFoundation(){this._foundation.setDeterminate(this.determinate)}_syncReversedWithFoundation(){this._foundation.setReverse(this.reversed)}}return e.\u0275fac=function(t){return new(t||e)(o.Lb(g.a),o.Lb(o.h),o.Lb(o.l))},e.\u0275cmp=o.Fb({type:e,selectors:[["mdc-linear-progress"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"mdc-linear-progress"],hostVars:3,hostBindings:function(e,t){2&e&&(o.Cb("aria-label",t.label),o.Db("mdc-linear-progress--indeterminate",!t.determinate))},inputs:{label:"label",progress:"progress",determinate:"determinate",buffer:"buffer",reversed:"reversed"},exportAs:["mdcLinearProgress"],features:[o.yb,o.zb],decls:7,vars:0,consts:[[1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],[1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],[1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(e,t){1&e&&(o.Rb(0,"div",0),o.Mb(1,"div",1),o.Mb(2,"div",2),o.Qb(),o.Rb(3,"div",3),o.Mb(4,"span",4),o.Qb(),o.Rb(5,"div",5),o.Mb(6,"span",4),o.Qb())},encapsulation:2,changeDetection:0}),e})();var y=r("dkiD");const R=[{path:"",component:(()=>{class e{ngOnInit(){this._componentViewer.template={title:"Linear Progress",description:"Progress indicators express an unspecified wait time or display the length of a process.",references:[{name:"Material Design guidelines: Progress Activity",url:"https://material.io/components/progress-indicators/"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-linear-progress/README.md"}],mdcUrls:[{name:"Sass Mixins",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-linear-progress/README.md#sass-mixins"}],code:"import {MdcLinearProgressModule} from '@angular-mdc/web/linear-progress';",sass:"@use '@material/linear-progress/mdc-linear-progress';\n@use '@material/linear-progress';"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var r;1&e&&o.tc(i.b,!0),2&e&&o.nc(r=o.ac())&&(t._componentViewer=r.first)},decls:1,vars:0,template:function(e,t){1&e&&o.Mb(0,"component-viewer")},directives:[a.a],encapsulation:2}),e})(),children:[{path:"",redirectTo:"api"},{path:"api",component:(()=>{class e{ngOnInit(){this._componentApi.docApi={sections:[{header:"MdcLinearProgress",selectors:["mdc-linear-progress"],exportedAs:"mdcLinearProgress",categories:[{name:"Properties",items:[{name:"determinate: boolean",summary:"Puts the linear progress indicator in an determinate or indeterminate state."},{name:"reversed: boolean",summary:"Reverses the direction of the linear progress indicator."},{name:"progress: number",summary:"Sets the progress bar to this value. Value should be between [0, 1]."},{name:"buffer: number",summary:"Sets the buffer bar to this value. Value should be between [0, 1]."},{name:"label: string",summary:"Label indicating how the progress bar should be announced to the user."}]},{name:"Methods",items:[{name:"open()",summary:"Puts the component in the open state."},{name:"close()",summary:"Puts the component in the closed state."}]}]}]}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var r;1&e&&o.tc(i.a,!0),2&e&&o.nc(r=o.ac())&&(t._componentApi=r.first)},decls:1,vars:0,template:function(e,t){1&e&&o.Mb(0,"component-api")},directives:[c.a],encapsulation:2}),e})()},{path:"examples",component:(()=>{class e{constructor(){this.exampleIndeterminate={html:"<mdc-linear-progress></mdc-linear-progress>",sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_linear-progress.scss"},this.exampleDeterminate={html:'<mdc-linear-progress determinate [progress]="0.5" [buffer]="0.75"></mdc-linear-progress>',sass:"https://raw.githubusercontent.com/trimox/angular-mdc-web/master/demos/src/styles/_linear-progress.scss"}}alternateColors(e){const t="demo-linear-progress--custom";e.elementRef.nativeElement.classList.contains(t)?e.elementRef.nativeElement.classList.remove(t):e.elementRef.nativeElement.classList.add(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["ng-component"]],decls:30,vars:4,consts:[[1,"demo-content"],[1,"demo-content__headline"],[1,"demo-layout__row"],["mdc-button","",3,"click"],["lp",""],[3,"example"],["determinate","",3,"progress","buffer"],["deter",""]],template:function(e,t){if(1&e){const e=o.Sb();o.Rb(0,"div",0),o.Rb(1,"h3",1),o.wc(2,"Indeterminate Progress"),o.Qb(),o.Rb(3,"div",2),o.Rb(4,"button",3),o.Zb("click",(function(){o.pc(e);const t=o.oc(13);return t.reversed=!t.reversed})),o.wc(5,"Reverse"),o.Qb(),o.Rb(6,"button",3),o.Zb("click",(function(){return o.pc(e),o.oc(13).open()})),o.wc(7,"Open"),o.Qb(),o.Rb(8,"button",3),o.Zb("click",(function(){return o.pc(e),o.oc(13).close()})),o.wc(9,"Close"),o.Qb(),o.Rb(10,"button",3),o.Zb("click",(function(){o.pc(e);const r=o.oc(13);return t.alternateColors(r)})),o.wc(11,"Alternate Colors"),o.Qb(),o.Qb(),o.Mb(12,"mdc-linear-progress",null,4),o.Mb(14,"example-viewer",5),o.Qb(),o.Rb(15,"div",0),o.Rb(16,"h3",1),o.wc(17,"Determinate Progress"),o.Qb(),o.Rb(18,"div",2),o.Rb(19,"button",3),o.Zb("click",(function(){o.pc(e);const t=o.oc(28);return t.reversed=!t.reversed})),o.wc(20,"Reverse"),o.Qb(),o.Rb(21,"button",3),o.Zb("click",(function(){return o.pc(e),o.oc(28).open()})),o.wc(22,"Open"),o.Qb(),o.Rb(23,"button",3),o.Zb("click",(function(){return o.pc(e),o.oc(28).close()})),o.wc(24,"Close"),o.Qb(),o.Rb(25,"button",3),o.Zb("click",(function(){o.pc(e);const r=o.oc(28);return t.alternateColors(r)})),o.wc(26,"Alternate Colors"),o.Qb(),o.Qb(),o.Mb(27,"mdc-linear-progress",6,7),o.Mb(29,"example-viewer",5),o.Qb()}2&e&&(o.Bb(14),o.ic("example",t.exampleIndeterminate),o.Bb(13),o.ic("progress",.5)("buffer",.75),o.Bb(2),o.ic("example",t.exampleDeterminate))},directives:[u.a,v,y.a],encapsulation:2}),e})()}]}];let E=(()=>{class e{}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[n.e.forChild(R)],n.e]}),e})(),A=(()=>{class e{}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[s.a,E]]}),e})()}}]);