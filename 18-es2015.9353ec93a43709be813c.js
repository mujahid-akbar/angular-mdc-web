(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{SceA:function(e,n,c){"use strict";c.r(n);var t=c("d2mR"),o=c("tyNb"),s=c("leug"),i=c("AytR"),a=c("fXoL"),b=c("LuDt"),r=c("5l+6"),l=c("U/DG"),d=c("jhN1"),m=c("o085"),p=c("dkiD");const h='<svg xmlns="http://www.w3.org/2000/svg">\n  <path d="M0 0h24v24H0z" fill="none"/>\n  <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"/>\n</svg>',g='<svg>\n  <defs>\n  <svg id="account-balance">\n    <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/>\n  </svg>\n  <svg id="account-balance-wallet">\n    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"\n    />\n  </svg>\n  <svg id="account-box">\n    <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/>\n  </svg>\n  </defs>\n</svg>',u=[{path:"",component:(()=>{class e{ngOnInit(){this._componentViewer.template={title:"Icons",description:"Material icons use geometric shapes to visually represent core ideas, capabilities, or topics.",references:[{name:"Material Design guidelines: Icons",url:"https://material.io/guidelines/style/icons.html"}],code:"import {MdcIconModule} from '@angular-mdc/web';",tabs:[{label:"Api",route:"./api"},{label:"Examples",route:"./examples"}]}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a.Fb({type:e,selectors:[["ng-component"]],viewQuery:function(e,n){var c;1&e&&a.tc(s.a,!0),2&e&&a.nc(c=a.ac())&&(n._componentViewer=c.first)},decls:1,vars:0,template:function(e,n){1&e&&a.Mb(0,"component-viewer")},directives:[b.a],encapsulation:2}),e})(),children:[{path:"",redirectTo:"api"},{path:"api",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=a.Fb({type:e,selectors:[["ng-component"]],decls:200,vars:0,consts:[[1,"docs-api"],["mdcHeadline6",""],["mdcSubtitle2",""],["href","http://google.github.io/material-design-icons/#icon-font-for-the-web"],["href","https://fortawesome.github.io/Font-Awesome/examples/"],[1,"markdown-code"]],template:function(e,n){1&e&&(a.Rb(0,"div",0),a.Rb(1,"h2",1),a.wc(2,"Service"),a.Qb(),a.Rb(3,"h3",1),a.wc(4,"MdcIconRegistry"),a.Qb(),a.wc(5," Service to register and display icons used by the "),a.Rb(6,"code"),a.wc(7,"<mdc-icon>"),a.Qb(),a.wc(8," component. "),a.Rb(9,"ul"),a.Rb(10,"li"),a.wc(11,"Registers icon URLs by namespace and name."),a.Qb(),a.Rb(12,"li"),a.wc(13,"Registers icon set URLs by namespace."),a.Qb(),a.Rb(14,"li"),a.wc(15,"Registers aliases for CSS classes, for use with icon fonts."),a.Qb(),a.Rb(16,"li"),a.wc(17,"Loads icons from URLs and extracts individual icons from icon sets."),a.Qb(),a.Qb(),a.Rb(18,"h4",2),a.wc(19,"Methods"),a.Qb(),a.Rb(20,"table"),a.Rb(21,"tbody"),a.Rb(22,"tr"),a.Rb(23,"td"),a.wc(24,"addSvgIcon(iconName: string, url: SafeResourceUrl, options?: IconOptions)"),a.Qb(),a.Rb(25,"td"),a.wc(26,"Registers an icon by URL in the default namespace."),a.Qb(),a.Qb(),a.Rb(27,"tr"),a.Rb(28,"td"),a.wc(29,"addSvgIconInNamespace(namespace: string, iconName: string, url: SafeResourceUrl, options?: IconOptions)"),a.Qb(),a.Rb(30,"td"),a.wc(31,"Registers an icon by URL in the specified namespace."),a.Qb(),a.Qb(),a.Rb(32,"tr"),a.Rb(33,"td"),a.wc(34,"addSvgIconLiteral(iconName: string, literal: SafeHtml, options?: IconOptions)"),a.Qb(),a.Rb(35,"td"),a.wc(36,"Registers an icon using an HTML string in the default namespace."),a.Qb(),a.Qb(),a.Rb(37,"tr"),a.Rb(38,"td"),a.wc(39,"addSvgIconLiteralInNamespace(namespace: string, iconName: string, literal: SafeHtml, options?: IconOptions)"),a.Qb(),a.Rb(40,"td"),a.wc(41,"Registers an icon using an HTML string in the specified namespace."),a.Qb(),a.Qb(),a.Rb(42,"tr"),a.Rb(43,"td"),a.wc(44,"addSvgIconSet(url: SafeResourceUrl, options?: IconOptions)"),a.Qb(),a.Rb(45,"td"),a.wc(46,"Registers an icon set by URL in the default namespace."),a.Qb(),a.Qb(),a.Rb(47,"tr"),a.Rb(48,"td"),a.wc(49,"addSvgIconSetInNamespace(namespace: string, url: SafeResourceUrl, options?: IconOptions)"),a.Qb(),a.Rb(50,"td"),a.wc(51,"Registers an icon set by URL in the specified namespace."),a.Qb(),a.Qb(),a.Rb(52,"tr"),a.Rb(53,"td"),a.wc(54,"addSvgIconSetLiteral(literal: SafeHtml, options?: IconOptions)"),a.Qb(),a.Rb(55,"td"),a.wc(56,"Registers an icon set using an HTML string in the default namespace."),a.Qb(),a.Qb(),a.Rb(57,"tr"),a.Rb(58,"td"),a.wc(59,"addSvgIconSetLiteralInNamespace(namespace: string, literal: SafeHtml, options?: IconOptions)"),a.Qb(),a.Rb(60,"td"),a.wc(61,"Registers an icon set using an HTML string in the specified namespace."),a.Qb(),a.Qb(),a.Rb(62,"tr"),a.Rb(63,"td"),a.wc(64,"classNameForFontAlias(alias: string)"),a.Qb(),a.Rb(65,"td"),a.wc(66,"Returns the CSS class name associated with the alias by a previous call to registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified."),a.Qb(),a.Qb(),a.Rb(67,"tr"),a.Rb(68,"td"),a.wc(69,"getDefaultFontSetClass()"),a.Qb(),a.Rb(70,"td"),a.wc(71,"Returns the CSS class name to be used for icon fonts when an "),a.Rb(72,"code"),a.wc(73,"<mdc-icon>"),a.Qb(),a.wc(74," component does not have a fontSet input value, and is not loading an icon by name or URL."),a.Qb(),a.Qb(),a.Rb(75,"tr"),a.Rb(76,"td"),a.wc(77,"getNamedSvgIcon(name: string, namespace: string)"),a.Qb(),a.Rb(78,"td"),a.wc(79,"Returns an Observable that produces the icon (as an "),a.Rb(80,"code"),a.wc(81,"<svg>"),a.Qb(),a.wc(82," DOM element) with the given name and namespace. The icon must have been previously registered with addIcon or addIconSet; if not, the Observable will throw an error."),a.Qb(),a.Qb(),a.Rb(83,"tr"),a.Rb(84,"td"),a.wc(85,"getSvgIconFromUrl(safeUrl: SafeResourceUrl)"),a.Qb(),a.Rb(86,"td"),a.wc(87,"Returns an Observable that produces the icon (as an "),a.Rb(88,"code"),a.wc(89,"<svg>"),a.Qb(),a.wc(90," DOM element) from the given URL. The response from the URL may be cached so this will not always cause an HTTP request, but the produced element will always be a new copy of the originally fetched icon. (That is, it will not contain any modifications made to elements previously returned)."),a.Qb(),a.Qb(),a.Rb(91,"tr"),a.Rb(92,"td"),a.wc(93,"registerFontClassAlias(alias: string, className: string = alias)"),a.Qb(),a.Rb(94,"td"),a.wc(95,"Defines an alias for a CSS class name to be used for icon fonts. Creating an mdcIcon component with the alias as the fontSet input will cause the class name to be applied to the "),a.Rb(96,"code"),a.wc(97,"<mdc-icon>"),a.Qb(),a.wc(98," element."),a.Qb(),a.Qb(),a.Rb(99,"tr"),a.Rb(100,"td"),a.wc(101,"setDefaultFontSetClass(className: string)"),a.Qb(),a.Rb(102,"td"),a.wc(103,"Sets the CSS class name to be used for icon fonts when an "),a.Rb(104,"code"),a.wc(105,"<mdc-icon>"),a.Qb(),a.wc(106," component does not have a fontSet input value, and is not loading an icon by name or URL."),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(107,"div",0),a.Rb(108,"h2",1),a.wc(109,"Directives"),a.Qb(),a.Rb(110,"h3",1),a.wc(111,"MdcIcon"),a.Qb(),a.wc(112," Component to display an icon. It can be used in the following ways: "),a.Rb(113,"ul"),a.Rb(114,"li"),a.Rb(115,"p"),a.wc(116,'Specify the svgIcon input to load an SVG icon from a URL previously registered with the addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of MdcIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format "[namespace]:[name]", if not the value will be the name of an icon in the default namespace. Examples: '),a.Rb(117,"code"),a.wc(118,'<mdc-icon svgIcon="left-arrow"></mdc-icon> <mdc-icon svgIcon="animals:cat"></mdc-icon>'),a.Qb(),a.Qb(),a.Qb(),a.Rb(119,"li"),a.Rb(120,"p"),a.wc(121,"Use a font ligature as an icon by putting the ligature text in the content of the "),a.Rb(122,"code"),a.wc(123,"<mdc-icon>"),a.Qb(),a.wc(124," component. By default the Material icons font is used as described at "),a.Rb(125,"a",3),a.wc(126,"http://google.github.io/material-design-icons/#icon-font-for-the-web"),a.Qb(),a.wc(127,". You can specify an alternate font by setting the fontSet input to either the CSS class to apply to use the desired font, or to an alias previously registered with MdcIconRegistry.registerFontClassAlias. Examples: "),a.Rb(128,"code"),a.wc(129,'<mdc-icon>home</mdc-icon> <mdc-icon fontSet="myfont">sun</mdc-icon>'),a.Qb(),a.Qb(),a.Qb(),a.Rb(130,"li"),a.Rb(131,"p"),a.wc(132,"Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a CSS class which causes the glyph to be displayed via a :before selector, as in "),a.Rb(133,"a",4),a.wc(134,"https://fortawesome.github.io/Font-Awesome/examples/"),a.Qb(),a.wc(135," Example: "),a.Rb(136,"code"),a.wc(137,'<mdc-icon fontSet="fa" fontIcon="alarm"></mdc-icon>'),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(138,"p"),a.wc(139," Selector: "),a.Rb(140,"span",5),a.wc(141,"mdc-icon"),a.Qb(),a.Rb(142,"span",5),a.wc(143,"mdcIcon"),a.Qb(),a.Rb(144,"span",5),a.wc(145,"a[mdc-icon]"),a.Qb(),a.Qb(),a.wc(146," Exported as: "),a.Rb(147,"span",5),a.wc(148,"mdcIcon"),a.Qb(),a.Rb(149,"h4",2),a.wc(150,"Properties"),a.Qb(),a.Rb(151,"table"),a.Rb(152,"thead"),a.Rb(153,"tr"),a.Rb(154,"th"),a.wc(155,"Name"),a.Qb(),a.Rb(156,"th"),a.wc(157,"Description"),a.Qb(),a.Qb(),a.Qb(),a.Rb(158,"tbody"),a.Rb(159,"tr"),a.Rb(160,"td"),a.wc(161,"fontSet: string"),a.Qb(),a.Rb(162,"td"),a.wc(163,"Font set that the icon is a part of."),a.Qb(),a.Qb(),a.Rb(164,"tr"),a.Rb(165,"td"),a.wc(166,"fontIcon: string"),a.Qb(),a.Rb(167,"td"),a.wc(168,"Name of an icon within a font set."),a.Qb(),a.Qb(),a.Rb(169,"tr"),a.Rb(170,"td"),a.wc(171,"svgIcon: string"),a.Qb(),a.Rb(172,"td"),a.wc(173,"Name of the icon in the SVG icon set."),a.Qb(),a.Qb(),a.Rb(174,"tr"),a.Rb(175,"td"),a.wc(176,"clickable: boolean"),a.Qb(),a.Rb(177,"td"),a.wc(178,"Whether or not icon can be interacted with."),a.Qb(),a.Qb(),a.Rb(179,"tr"),a.Rb(180,"td"),a.wc(181,"inline: boolean"),a.Qb(),a.Rb(182,"td"),a.wc(183,"Whether the icon should be inlined, automatically sizing the icon to match the font size of the element the icon is contained in."),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Rb(184,"h4",2),a.wc(185,"Interfaces"),a.Qb(),a.wc(186," Options that can be used to configure how an icon or the icons in an icon set are presented. "),a.Rb(187,"table"),a.Rb(188,"thead"),a.Rb(189,"tr"),a.Rb(190,"th"),a.wc(191,"Name"),a.Qb(),a.Rb(192,"th"),a.wc(193,"Description"),a.Qb(),a.Qb(),a.Qb(),a.Rb(194,"tbody"),a.Rb(195,"tr"),a.Rb(196,"td"),a.wc(197,"viewBox: string"),a.Qb(),a.Rb(198,"td"),a.wc(199,"View box to set on the icon."),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb())},directives:[r.i,r.l],encapsulation:2}),e})()},{path:"examples",component:(()=>{class e{constructor(e,n){this.customHeader="import { DomSanitizer } from '@angular/platform-browser';\nimport {MdcIconRegistry} from '@angular-mdc/web';\n\nconstructor(iconRegistry: MdcIconRegistry, sanitizer: DomSanitizer) {\n  iconRegistry",this.customSass=".demo-icon-custom-colors {\n  $color: $material-color-orange-500;\n\n  @include mdc-theme-prop(color, $color);\n}",this.exampleMaterial={html:"<mdc-icon>home</mdc-icon>"},this.exampleTheme={html:'<mdc-icon class="demo-icon-custom-colors">home</mdc-icon>',sass:this.customSass},this.exampleFa={html:'<mdc-icon fontSet="fa" fontIcon="fa-camera"></mdc-icon>\n\n<mdc-icon fontSet="fa" fontIcon="fa-camera" class="demo-icon-custom-colors"></mdc-icon>',ts:`${this.customHeader}\n    .registerFontClassAlias('fontawesome', 'fa');`,sass:this.customSass},this.exampleSvg={html:'<mdc-icon>\n  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"></path>\n    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path>\n  </svg>\n</mdc-icon>'},this.exampleInline={html:"<p>\n  My <span>dog</span>\n  <mdc-icon inline>pets</mdc-icon> is my\n  <span>favorite</span>\n  <mdc-icon inline>favorite</mdc-icon>,\n  he loves to go on <span>walks</span>\n  <mdc-icon inline>directions_walk</mdc-icon>\n</p>"},this.exampleAddSvgIcon={html:'<mdc-icon svgIcon="thumbs-up"></mdc-icon>',ts:`${this.customHeader}\n    .addSvgIcon('thumbs-up',\n      sanitizer.bypassSecurityTrustResourceUrl('/assets/thumbup-icon.svg'));`},this.exampleSvgIconLiteral={html:'<mdc-icon svgIcon="bike"></mdc-icon>\n<mdc-icon svgIcon="bike" class="demo-svg-custom-color"></mdc-icon>',ts:`${this.customHeader}\n    .addSvgIconLiteral('bike',\n      sanitizer.bypassSecurityTrustHtml(BIKE_ICON));`,svg:`const BIKE_ICON =\n\`${h}\`;`,sass:".demo-svg-custom-color {\n  $color: $material-color-orange-500;\n\n  @include mdc-theme-prop(fill, $color);\n}"},this.exampleSvgIconSetInNamespace={html:'<mdc-icon svgIcon="core:alarm"></mdc-icon>\n\n<mdc-icon svgIcon="core:accessibility"></mdc-icon>\n\n<mdc-icon svgIcon="core:alarm"></mdc-icon>',ts:`${this.customHeader}\n    .addSvgIconSetInNamespace('core',\n      sanitizer.bypassSecurityTrustResourceUrl('/assets/core-icon-set.svg'));`},this.exampleSvgIconSetLiteralInNamespace={html:'<mdc-icon svgIcon="core-inline:account-balance"></mdc-icon>\n\n<mdc-icon svgIcon="core-inline:account-balance-wallet"></mdc-icon>\n\n<mdc-icon svgIcon="core-inline:account-box"></mdc-icon>',ts:`${this.customHeader}\n    .addSvgIconSetLiteralInNamespace('core-inline',\n      sanitizer.bypassSecurityTrustHtml(INLINE_ICON_SET));`,svg:`const INLINE_ICON_SET =\n\`${g}\`;`},e.addSvgIcon("thumbs-up",n.bypassSecurityTrustResourceUrl(i.a.production?"https://trimox.github.io/angular-mdc-web/assets/thumbup-icon.svg":"/assets/thumbup-icon.svg")).addSvgIconLiteral("bike",n.bypassSecurityTrustHtml(h)).addSvgIconSetInNamespace("core",n.bypassSecurityTrustResourceUrl(i.a.production?"https://trimox.github.io/angular-mdc-web/assets/core-icon-set.svg":"/assets/core-icon-set.svg")).addSvgIconSetLiteralInNamespace("core-inline",n.bypassSecurityTrustHtml(g)).registerFontClassAlias("fontawesome","fa"),console.log(e)}alternateColors(e){const n="demo-icon-custom-colors";e.elementRef.nativeElement.classList.contains(n)?e.elementRef.nativeElement.classList.remove(n):e.elementRef.nativeElement.classList.add(n)}}return e.\u0275fac=function(n){return new(n||e)(a.Lb(l.a),a.Lb(d.b))},e.\u0275cmp=a.Fb({type:e,selectors:[["ng-component"]],decls:77,vars:9,consts:[[1,"demo-content"],[1,"demo-content__headline"],["demoicon",""],[3,"example"],[1,"demo-icon-custom-colors"],[1,"demo-layout__row"],[1,"demo-container"],["fontSet","fa","fontIcon","fa-camera"],["fontSet","fa","fontIcon","fa-camera",1,"demo-icon-custom-colors"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24"],["d","M0 0h24v24H0z","fill","none"],["d","M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"],["inline",""],["svgIcon","thumbs-up"],["svgIcon","bike"],["svgIcon","bike",1,"demo-svg-custom-color"],["svgIcon","core:alarm"],["svgIcon","core:accessibility"],["svgIcon","core-inline:account-balance"],["svgIcon","core-inline:account-balance-wallet"],["svgIcon","core-inline:account-box"]],template:function(e,n){1&e&&(a.Rb(0,"div",0),a.Rb(1,"h3",1),a.wc(2,"Material Icons"),a.Qb(),a.Rb(3,"mdc-icon",null,2),a.wc(5,"home"),a.Qb(),a.Mb(6,"example-viewer",3),a.Qb(),a.Rb(7,"div",0),a.Rb(8,"h3",1),a.wc(9,"Material Icons - Theme"),a.Qb(),a.Rb(10,"mdc-icon",4),a.wc(11,"home"),a.Qb(),a.Mb(12,"example-viewer",3),a.Qb(),a.Rb(13,"div",0),a.Rb(14,"h3",1),a.wc(15,"Using Font Awesome"),a.Qb(),a.Rb(16,"div",5),a.Rb(17,"div",6),a.Mb(18,"mdc-icon",7),a.Qb(),a.Rb(19,"div",6),a.Mb(20,"mdc-icon",8),a.Qb(),a.Qb(),a.Mb(21,"example-viewer",3),a.Qb(),a.Rb(22,"div",0),a.Rb(23,"h3",1),a.wc(24,"SVG Icon"),a.Qb(),a.Rb(25,"mdc-icon"),a.cc(),a.Rb(26,"svg",9),a.Mb(27,"path",10),a.Mb(28,"path",11),a.Qb(),a.Qb(),a.bc(),a.Mb(29,"example-viewer",3),a.Qb(),a.Rb(30,"div",0),a.Rb(31,"h3",1),a.wc(32,"Inline"),a.Qb(),a.Rb(33,"p"),a.wc(34," My "),a.Rb(35,"span"),a.wc(36,"dog"),a.Qb(),a.Rb(37,"mdc-icon",12),a.wc(38,"pets"),a.Qb(),a.wc(39," is my "),a.Rb(40,"span"),a.wc(41,"favorite"),a.Qb(),a.Rb(42,"mdc-icon",12),a.wc(43,"favorite"),a.Qb(),a.wc(44,", he loves to go on "),a.Rb(45,"span"),a.wc(46,"walks"),a.Qb(),a.Rb(47,"mdc-icon",12),a.wc(48,"directions_walk"),a.Qb(),a.Qb(),a.Mb(49,"example-viewer",3),a.Qb(),a.Rb(50,"div",0),a.Rb(51,"h3",1),a.wc(52,"MdcIconRegistry - addSvgIcon"),a.Qb(),a.Mb(53,"mdc-icon",13),a.Mb(54,"example-viewer",3),a.Qb(),a.Rb(55,"div",0),a.Rb(56,"h3",1),a.wc(57,"MdcIconRegistry - addSvgIconLiteral"),a.Qb(),a.Mb(58,"mdc-icon",14),a.Mb(59,"mdc-icon",15),a.Mb(60,"example-viewer",3),a.Qb(),a.Rb(61,"div",0),a.Rb(62,"h3",1),a.wc(63,"MdcIconRegistry - addSvgIconSetInNamespace"),a.Qb(),a.Rb(64,"div",5),a.Mb(65,"mdc-icon",16),a.Mb(66,"mdc-icon",17),a.Mb(67,"mdc-icon",16),a.Qb(),a.Mb(68,"example-viewer",3),a.Qb(),a.Rb(69,"div",0),a.Rb(70,"h3",1),a.wc(71,"MdcIconRegistry - addSvgIconSetLiteralInNamespace"),a.Qb(),a.Rb(72,"div",5),a.Mb(73,"mdc-icon",18),a.Mb(74,"mdc-icon",19),a.Mb(75,"mdc-icon",20),a.Qb(),a.Mb(76,"example-viewer",3),a.Qb()),2&e&&(a.Bb(6),a.ic("example",n.exampleMaterial),a.Bb(6),a.ic("example",n.exampleTheme),a.Bb(9),a.ic("example",n.exampleFa),a.Bb(8),a.ic("example",n.exampleSvg),a.Bb(20),a.ic("example",n.exampleInline),a.Bb(5),a.ic("example",n.exampleAddSvgIcon),a.Bb(6),a.ic("example",n.exampleSvgIconLiteral),a.Bb(8),a.ic("example",n.exampleSvgIconSetInNamespace),a.Bb(8),a.ic("example",n.exampleSvgIconSetLiteralInNamespace))},directives:[m.b,p.a],encapsulation:2}),e})()}]}];let w=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(n){return new(n||e)},imports:[[o.e.forChild(u)],o.e]}),e})();c.d(n,"IconModule",(function(){return R}));let R=(()=>{class e{}return e.\u0275mod=a.Jb({type:e}),e.\u0275inj=a.Ib({factory:function(n){return new(n||e)},imports:[[t.a,w]]}),e})()},leug:function(e,n,c){"use strict";var t=c("LuDt");c.d(n,"a",(function(){return t.a}))}}]);