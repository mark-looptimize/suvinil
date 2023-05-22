function st(o,t,e,r){var n=arguments.length,i=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,t,e,r);else for(var u=o.length-1;u>=0;u--)(s=o[u])&&(i=(n<3?s(i):n>3?s(t,e,i):s(t,e))||i);return n>3&&i&&Object.defineProperty(t,e,i),i}var R=window,U=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),at=new WeakMap,T=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(U&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=at.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&at.set(e,t))}return t}toString(){return this.cssText}},lt=o=>new T(typeof o=="string"?o:o+"",void 0,D),Z=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((r,n,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[i+1],o[0]);return new T(e,o,D)},I=(o,t)=>{U?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let r=document.createElement("style"),n=R.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,o.appendChild(r)})},H=U?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return lt(e)})(o):o;var F,N=window,ct=N.trustedTypes,St=ct?ct.emptyScript:"",ut=N.reactiveElementPolyfillSupport,W={toAttribute(o,t){switch(t){case Boolean:o=o?St:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ht=(o,t)=>t!==o&&(t==t||o==o),V={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ht},m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,r)=>{let n=this._$Ep(r,e);n!==void 0&&(this._$Ev.set(n,r),t.push(n))}),t}static createProperty(t,e=V){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let r=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){let i=this[t];this[e]=n,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||V}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let n of r)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let n of r)e.unshift(H(n))}else t!==void 0&&e.push(H(t));return e}static _$Ep(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return I(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=V){var n;let i=this.constructor._$Ep(t,r);if(i!==void 0&&r.reflect===!0){let s=(((n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?r.converter:W).toAttribute(e,r.type);this._$El=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,e){var r;let n=this.constructor,i=n._$Ev.get(t);if(i!==void 0&&this._$El!==i){let s=n.getPropertyOptions(i),u=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:W;this._$El=i,this[i]=u.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,r){let n=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||ht)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,i)=>this[i]=n),this._$Ei=void 0);let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(r)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,r)=>this._$EO(r,this[r],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},ut?.({ReactiveElement:m}),((F=N.reactiveElementVersions)!==null&&F!==void 0?F:N.reactiveElementVersions=[]).push("1.6.1");var K,z=window,A=z.trustedTypes,dt=A?A.createPolicy("lit-html",{createHTML:o=>o}):void 0,Q="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,gt="?"+_,qt=`<${gt}>`,E=document,C=()=>E.createComment(""),P=o=>o===null||typeof o!="object"&&typeof o!="function",bt=Array.isArray,Tt=o=>bt(o)||typeof o?.[Symbol.iterator]=="function",G=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,ft=/>/g,g=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,mt=/"/g,wt=/^(?:script|style|textarea|title)$/i,$t=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),f=$t(1),Ut=$t(2),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),_t=new WeakMap,x=E.createTreeWalker(E,129,null,!1),Ot=(o,t)=>{let e=o.length-1,r=[],n,i=t===2?"<svg>":"",s=O;for(let a=0;a<e;a++){let l=o[a],v,c,h=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===O?c[1]==="!--"?s=pt:c[1]!==void 0?s=ft:c[2]!==void 0?(wt.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=g):c[3]!==void 0&&(s=g):s===g?c[0]===">"?(s=n??O,h=-1):c[1]===void 0?h=-2:(h=s.lastIndex-c[2].length,v=c[1],s=c[3]===void 0?g:c[3]==='"'?mt:vt):s===mt||s===vt?s=g:s===pt||s===ft?s=O:(s=g,n=void 0);let j=s===g&&o[a+1].startsWith("/>")?" ":"";i+=s===O?l+qt:h>=0?(r.push(v),l.slice(0,h)+Q+l.slice(h)+_+j):l+_+(h===-2?(r.push(void 0),a):j)}let u=i+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[dt!==void 0?dt.createHTML(u):u,r]},w=class{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let i=0,s=0,u=t.length-1,a=this.parts,[l,v]=Ot(t,e);if(this.el=w.createElement(l,r),x.currentNode=this.el.content,e===2){let c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(n=x.nextNode())!==null&&a.length<u;){if(n.nodeType===1){if(n.hasAttributes()){let c=[];for(let h of n.getAttributeNames())if(h.endsWith(Q)||h.startsWith(_)){let p=v[s++];if(c.push(h),p!==void 0){let j=n.getAttribute(p.toLowerCase()+Q).split(_),M=/([.?@])?(.*)/.exec(p);a.push({type:1,index:i,name:M[2],strings:j,ctor:M[1]==="."?Y:M[1]==="?"?X:M[1]==="@"?tt:q})}else a.push({type:6,index:i})}for(let h of c)n.removeAttribute(h)}if(wt.test(n.tagName)){let c=n.textContent.split(_),h=c.length-1;if(h>0){n.textContent=A?A.emptyScript:"";for(let p=0;p<h;p++)n.append(c[p],C()),x.nextNode(),a.push({type:2,index:++i});n.append(c[h],C())}}}else if(n.nodeType===8)if(n.data===gt)a.push({type:2,index:i});else{let c=-1;for(;(c=n.data.indexOf(_,c+1))!==-1;)a.push({type:7,index:i}),c+=_.length-1}i++}}static createElement(t,e){let r=E.createElement("template");return r.innerHTML=t,r}};function S(o,t,e=o,r){var n,i,s,u;if(t===b)return t;let a=r!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[r]:e._$Cl,l=P(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((i=a?._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,r)),r!==void 0?((s=(u=e)._$Co)!==null&&s!==void 0?s:u._$Co=[])[r]=a:e._$Cl=a),a!==void 0&&(t=S(o,a._$AS(o,t.values),a,r)),t}var J=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:r},parts:n}=this._$AD,i=((e=t?.creationScope)!==null&&e!==void 0?e:E).importNode(r,!0);x.currentNode=i;let s=x.nextNode(),u=0,a=0,l=n[0];for(;l!==void 0;){if(u===l.index){let v;l.type===2?v=new $(s,s.nextSibling,this,t):l.type===1?v=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(v=new et(s,this,t)),this._$AV.push(v),l=n[++a]}u!==l?.index&&(s=x.nextNode(),u++)}return i}v(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},$=class{constructor(t,e,r,n){var i;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cp=(i=n?.isConnected)===null||i===void 0||i}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=S(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Tt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;let{values:r,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=w.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===i)this._$AH.v(r);else{let s=new J(i,this),u=s.u(this.options);s.v(r),this.$(u),this._$AH=s}}_$AC(t){let e=_t.get(t.strings);return e===void 0&&_t.set(t.strings,e=new w(t)),e}T(t){bt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,n=0;for(let i of t)n===e.length?e.push(r=new $(this.k(C()),this.k(C()),this,this.options)):r=e[n],r._$AI(i),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},q=class{constructor(t,e,r,n,i){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){let i=this.strings,s=!1;if(i===void 0)t=S(this,t,e,0),s=!P(t)||t!==this._$AH&&t!==b,s&&(this._$AH=t);else{let u=t,a,l;for(t=i[0],a=0;a<i.length-1;a++)l=S(this,u[r+a],e,a),l===b&&(l=this._$AH[a]),s||(s=!P(l)||l!==this._$AH[a]),l===d?t=d:t!==d&&(t+=(l??"")+i[a+1]),this._$AH[a]=l}s&&!n&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Y=class extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}},Ct=A?A.emptyScript:"",X=class extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==d?this.element.setAttribute(this.name,Ct):this.element.removeAttribute(this.name)}},tt=class extends q{constructor(t,e,r,n,i){super(t,e,r,n,i),this.type=5}_$AI(t,e=this){var r;if((t=(r=S(this,t,e,0))!==null&&r!==void 0?r:d)===b)return;let n=this._$AH,i=t===d&&n!==d||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==d&&(n===d||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},et=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}};var yt=z.litHtmlPolyfillSupport;yt?.(w,$),((K=z.litHtmlVersions)!==null&&K!==void 0?K:z.litHtmlVersions=[]).push("2.7.2");var xt=(o,t,e)=>{var r,n;let i=(r=e?.renderBefore)!==null&&r!==void 0?r:t,s=i._$litPart$;if(s===void 0){let u=(n=e?.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new $(t.insertBefore(C(),u),u,void 0,e??{})}return s._$AI(o),s};var rt,nt;var y=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return b}};y.finalized=!0,y._$litElement$=!0,(rt=globalThis.litElementHydrateSupport)===null||rt===void 0||rt.call(globalThis,{LitElement:y});var At=globalThis.litElementPolyfillSupport;At?.({LitElement:y});((nt=globalThis.litElementVersions)!==null&&nt!==void 0?nt:globalThis.litElementVersions=[]).push("3.3.1");var Pt=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function ot(o){return(t,e)=>e!==void 0?((r,n,i)=>{n.constructor.createProperty(i,r)})(o,t,e):Pt(o,t)}var it,ue=((it=window.HTMLSlotElement)===null||it===void 0?void 0:it.prototype.assignedElements)!=null?(o,t)=>o.assignedElements(t):(o,t)=>o.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);var Et=Z`:host{--layer-important:2147483647;--radius-round:1e5px;--shadow-4:0 -2px 5px 0 hsl(var(--shadow-color)/calc(var(--shadow-strength) + 2%)),0 1px 1px -2px hsl(var(--shadow-color)/calc(var(--shadow-strength) + 3%)),0 2px 2px -2px hsl(var(--shadow-color)/calc(var(--shadow-strength) + 3%)),0 5px 5px -2px hsl(var(--shadow-color)/calc(var(--shadow-strength) + 4%)),0 9px 9px -2px hsl(var(--shadow-color)/calc(var(--shadow-strength) + 5%)),0 16px 16px -2px hsl(var(--shadow-color)/calc(var(--shadow-strength) + 6%));--ease-3:cubic-bezier(.25,0,.3,1);--ease-2:cubic-bezier(.25,0,.4,1);--ease-squish-3:cubic-bezier(.5,-.5,.1,1.5);--shadow-2:0 3px 5px -2px hsl(var(--shadow-color)/calc(var(--shadow-strength) + 3%)),0 7px 14px -5px hsl(var(--shadow-color)/calc(var(--shadow-strength) + 5%));--shadow-color:220 3% 15%;--shadow-strength:1%}:host{--muted-orange:var(--color-orange-2,#f58c38);--bright-orange:var(--color-orange-1,#f66602);--viewport-margin:2.5vmin;--foreground-color:var(--fab-foreground-color,#fff);--background-color:var(--fab-background-color,var(--bright-orange));--background-hover-color:var(--fab-background-hover-color,var(--muted-orange));--button-size:var(--fab-main-button-size,2rem);--mini-button-size:var(--fab-mini-button-size,1.25rem);--inset-block-size:var(--fab-inset-block-size,var(--viewport-margin));--inset-inline-size:var(--fab-inset-inline-size,var(--viewport-margin))}.fabs{align-items:center;bottom:var(--inset-block-size);display:flex;flex-direction:column-reverse;gap:var(--viewport-margin);justify-items:center;left:auto;place-items:center;position:fixed;right:var(--inset-inline-size);top:auto;z-index:var(--layer-important)}.fab{-webkit-tap-highlight-color:transparent;--_motion-reduced:box-shadow .2s var(--ease-3),background-color .3s var(--ease-3);--_motion-ok:var(--_motion-reduced),transform .2s var(--ease-3),outline-offset 145ms var(--ease-2);--_transition:var(--_motion-reduced);aspect-ratio:1;background:var(--background-color);border:0;border-radius:var(--radius-round);box-shadow:var(--shadow-4);color:var(--foreground-color);padding:calc(var(--button-size)/2);transition:box-shadow .2s var(--ease-3),background-color .3s var(--ease-3);transition:var(--_transition)}@media (prefers-reduced-motion:no-preference){.fab{--_transition:var(--_motion-ok)}}.fab.mini{--button-size:var(--mini-button-size)}.fab>svg{stroke-width:3px;height:var(--button-size);width:var(--button-size)}@media (prefers-reduced-motion:no-preference){.fab>svg{transition:transform .5s var(--ease-squish-3);will-change:transform}}.fab:active{box-shadow:var(--shadow-2)}@media (prefers-reduced-motion:no-preference){.fab:active{transform:translateY(2%)}}.fab:active{--background-color:var(--background-hover-color)}.fab:focus-visible{--background-color:var(--background-hover-color)}.fab:hover{--background-color:var(--background-hover-color)}.fab:not(:first-of-type){z-index:-1}.fab[data-icon=plus]:hover>svg{transform:rotate(90deg)}@media (prefers-color-scheme:dark){:host{--shadow-color:220 40% 2%;--shadow-strength:25%}}`;var L=class{constructor(t){this._originalButtonElements={accessibilityButton:document.getElementById("INDmenu-btn"),oneTrustButton:document.getElementById("ot-sdk-btn-floating"),helpButton:document.querySelector("div[class^=Helpstyle__HelpWrapper")},this._faqUrl="https://faq.suvinil.com.br/s/",(this.host=t).addController(this)}hostConnected(){this._hideOriginalButtons()}hostDisconnected(){this._showOriginalButtons()}_showOriginalButtons(){this._originalButtonElements.accessibilityButton!==null&&(this._originalButtonElements.accessibilityButton.hidden=!1),this._originalButtonElements.oneTrustButton!==null&&(this._originalButtonElements.oneTrustButton.hidden=!1),this._originalButtonElements.helpButton!==null&&(this._originalButtonElements.helpButton.hidden=!1)}toggleOneTrustMenu(){var t,e;(t=window.OneTrust)===null||t===void 0||t.ToggleInfoDisplay(),(e=window.dataLayer)===null||e===void 0||e.push({event:"toggle_cookie_menu"})}showEqualWebMenu(){var t,e;(t=window.interdeal)===null||t===void 0||t.a11y.openMenu(),(e=window.dataLayer)===null||e===void 0||e.push({event:"open_accessibility_menu"})}navigateToFaq(){var t;(t=window.dataLayer)===null||t===void 0||t.push({event:"click_faq_button"}),window.open(new URL("https://faq.suvinil.com.br/s/"),"_blank")}_hideOriginalButtons(){this._originalButtonElements.accessibilityButton!==null&&(this._originalButtonElements.accessibilityButton.hidden=!0),this._originalButtonElements.oneTrustButton!==null&&(this._originalButtonElements.oneTrustButton.hidden=!0),this._originalButtonElements.helpButton!==null&&(this._originalButtonElements.helpButton.hidden=!0)}};var k=class extends y{constructor(){super(...arguments),this.menuOpened=!1,this._controller=new L(this)}_renderOneTrustButton(){return f`
      <button data-icon="heart" @click=${this._controller.toggleOneTrustMenu} class="fab mini" title="Definições de cookies" aria-label="Definições de cookies">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
          <path fill="currentColor" d="M420 496q25 0 42.5-17.5T480 436q0-25-17.5-42.5T420 376q-25 0-42.5 17.5T360 436q0 25 17.5 42.5T420 496Zm-80 200q25 0 42.5-17.5T400 636q0-25-17.5-42.5T340 576q-25 0-42.5 17.5T280 636q0 25 17.5 42.5T340 696Zm260 40q17 0 28.5-11.5T640 696q0-17-11.5-28.5T600 656q-17 0-28.5 11.5T560 696q0 17 11.5 28.5T600 736ZM480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-84 36-164t100.5-138q64.5-58 153-85t193.5-5q-9 45 6 84.5t45 66.5q30 27 71 37t86-5q-31 69 11 118t96 51q9 89-19 169t-82.5 140q-54.5 60-131 95.5T480 976Zm0-80q122 0 216.5-84T800 598q-50-22-78.5-60T683 453q-77-11-132-66t-68-132q-80-2-140.5 29t-101 79.5Q201 412 180.5 469T160 576q0 133 93.5 226.5T480 896Zm0-324Z"/>
        </svg>
      </button>
    `}_renderAccessibilityButton(){return f`
      <button data-icon="heart" @click=${this._controller.showEqualWebMenu} class="fab mini" title="Explore suas opções de acessibilidade" aria-label="Explore suas opções de acessibilidade">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
          <path fill="currentColor" d="M480 256q-33 0-56.5-23.5T400 176q0-33 23.5-56.5T480 96q33 0 56.5 23.5T560 176q0 33-23.5 56.5T480 256ZM360 856V376q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820 256l20 80q-56 15-118 25t-122 15v480h-80V616h-80v240h-80Zm-40 200q-17 0-28.5-11.5T280 1016q0-17 11.5-28.5T320 976q17 0 28.5 11.5T360 1016q0 17-11.5 28.5T320 1056Zm160 0q-17 0-28.5-11.5T440 1016q0-17 11.5-28.5T480 976q17 0 28.5 11.5T520 1016q0 17-11.5 28.5T480 1056Zm160 0q-17 0-28.5-11.5T600 1016q0-17 11.5-28.5T640 976q17 0 28.5 11.5T680 1016q0 17-11.5 28.5T640 1056Z"/>
        </svg>
      </button>
    `}_renderQuestionsButton(){return f`
      <button data-icon="heart" @click=${this._controller.navigateToFaq} class="fab mini" title="Fale com a gente" aria-label="Fale com a gente">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
          <path fill="currentColor" d="m480 976-10-120h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800 516q0 75-24.5 144t-67 128q-42.5 59-101 107T480 976Zm80-146q71-60 115.5-140.5T720 516q0-109-75.5-184.5T460 256q-109 0-184.5 75.5T200 516q0 109 75.5 184.5T460 776h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-29-127h60q0-30 6-42t38-44q18-18 30-39t12-45q0-51-34.5-76.5T460 336q-44 0-74 24.5T344 420l56 22q5-17 19-33.5t41-16.5q27 0 40.5 15t13.5 33q0 17-10 30.5T480 498q-35 30-42.5 47.5T430 608Zm30-65Z"/>
      </svg>
      </button>
    `}_renderFloatingSettingsButton(){return f`
      <button data-icon="plus" @click=${this.toggleMenuState} class="fab" title="Configurações" aria-label="Configurações">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
          <path fill="currentColor" d="m370 976-16-128q-13-5-24.5-12T307 821l-119 50L78 681l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78 471l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12l-16 128H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342 576q0 58 40.5 99t99.5 41Zm0-80q-25 0-42.5-17.5T422 576q0-25 17.5-42.5T482 516q25 0 42.5 17.5T542 576q0 25-17.5 42.5T482 636Zm-2-60Zm-40 320h79l14-106q31-8 57.5-23.5T639 729l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533 362l-13-106h-79l-14 106q-31 8-57.5 23.5T321 423l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427 790l13 106Z"/>
        </svg>
      </button>
    `}_renderFloatingCloseButton(){return f`
      <button data-icon="plus" @click=${this.toggleMenuState} class="fab" title="Fechar" aria-label="Fechar">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
          <path fill="currentColor" d="m256 856-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
      </button>
    `}async toggleMenuState(){var t,e;this.menuOpened=!this.menuOpened,await this.updateComplete,this.menuOpened?(t=window.dataLayer)===null||t===void 0||t.push({event:"floating_action_menu_opened"}):(e=window.dataLayer)===null||e===void 0||e.push({event:"floating_action_menu_closed"})}_renderOpenMenuState(){return f`
      ${this._renderFloatingCloseButton()}
      ${this._renderOneTrustButton()}
      ${this._renderAccessibilityButton()}
      ${this._renderQuestionsButton()}
    `}_renderClosedMenuState(){return f`
      ${this._renderFloatingSettingsButton()}
    `}render(){return this.menuOpened?f`
      <div class="fabs" role="group" aria-label="Ajustes">
        ${this._renderOpenMenuState()}
      </div>
    `:f`
      <div class="fabs" role="group" aria-label="Ajustes">
        ${this._renderClosedMenuState()}
      </div>
    `}};k.styles=Et;st([ot({type:Boolean})],k.prototype,"menuOpened",void 0);customElements.define("floating-action-button",k);export{k as FloatingActionButton};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=floating-action-button.js.map
