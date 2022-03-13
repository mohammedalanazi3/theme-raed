"use strict";(self.webpackChunkTheme_One=self.webpackChunkTheme_One||[]).push([[636],{636:(e,a,l)=>{l.r(a),l.d(a,{salla_localization_modal:()=>t});var s=l(570),n=l(863);const t=class{constructor(e){var a,l;(0,s.r)(this,e),this.languages=[],this.currencies=[],this.isLoading=!0,this.language=salla.config.get("user.language_code"),this.currency=salla.config.get("user.currency_code"),n.H.setHost(this.host),salla.event.on("localization::show",(()=>this.show())),salla.event.on("languages::translations.loaded",(()=>{var e;this.languagesTitle=salla.lang.get("common.titles.language"),this.currenciesTitle=salla.lang.get("common.titles.currency"),null===(e=this.btn)||void 0===e||e.setText(salla.lang.get("common.elements.ok"))})),this.languageSlot=(null===(a=n.H.getElement('[slot="language"]'))||void 0===a?void 0:a.innerHTML)||'<label class="s-localization-modal-label" for="lang-{code}"><span>{name}</span><div class="s-localization-modal-flag flag iti__flag iti__{country_code}"></div></label>',this.currencySlot=(null===(l=n.H.getElement('[slot="currency"]'))||void 0===l?void 0:l.innerHTML)||'<label class="s-localization-modal-label" for="currency-{code}"><span>{name}</span><small class="s-localization-modal-currency">{code}</small></label>'}async show(){return this.modal.show().then((()=>this.getLanguages())).then((()=>this.getCurrencies())).then((()=>this.isLoading=!1))}async hide(){return this.modal.hide()}async getLanguages(){return this.language=this.language||salla.config.get("user.language_code"),this.languages.length>1?null:await salla.config.languages().then((e=>this.languages=e))}async getCurrencies(){return this.currency=this.currency||salla.config.get("user.currency_code"),this.currencies.length>1?null:await salla.config.currencies().then((e=>this.currencies=e))}onChangeCurrency(e){this.currency=e.target.value}onChangeLanguage(e){this.language=e.target.value}async submit(){let e;this.btn.load().then((()=>{if(this.currency){if(this.currency!==salla.config.get("user.currency_code","SAR"))return e=window.location.href,salla.currency.api.change(this.currency)}else salla.log("There is no currency!")})).then((()=>this.language===salla.config.get("user.language_code","ar")||(e=salla.helpers.addParamToUrl("lang",this.language)))).then((()=>this.btn.stop())).then((()=>this.hide())).then((()=>e&&(window.location.href=e)))}render(){return(0,s.h)("salla-modal",{isLoading:this.isLoading,id:"salla-localization",class:"s-hidden",ref:e=>this.modal=e,width:"xs"},this.isLoading?"":(0,s.h)("div",{class:"s-localization-modal-inner"},this.languages.length>1?(0,s.h)("div",{class:"s-localization-modal-section"},(0,s.h)("label",{class:"s-localization-modal-title"},this.languagesTitle),(0,s.h)("div",{class:"s-localization-modal-section-inner"},this.languages.length<6?this.languages.map((e=>(0,s.h)("div",{class:"s-localization-modal-item"},(0,s.h)("input",{class:"s-localization-modal-input",type:"radio",checked:this.language==e.iso_code,onChange:()=>this.language=e.iso_code,name:"language",id:"lang-"+e.code.toLowerCase(),value:e.code}),(0,s.h)("div",{id:"language-slot",innerHTML:this.languageSlot.replace(/\{name\}/g,e.name).replace(/\{code\}/g,e.code).replace(/\{country_code\}/g,e.country_code)})))):(0,s.h)("select",{class:"s-localization-modal-select",name:"currency",onChange:e=>this.onChangeLanguage(e)},this.languages.map((e=>(0,s.h)("option",{value:e.code,selected:this.language==e.code},e.name)))))):"",this.currencies.length>1?(0,s.h)("div",{class:"s-localization-modal-section"},(0,s.h)("label",{class:"s-localization-modal-title"},this.currenciesTitle),(0,s.h)("div",{class:"s-localization-modal-section-inner"},this.currencies.length<6?this.currencies.map((e=>(0,s.h)("div",{class:"s-localization-modal-item"},(0,s.h)("input",{class:"s-localization-modal-input",type:"radio",name:"currency",checked:this.currency==e.code,onChange:()=>this.currency=e.code,id:"currency-"+e.code,value:e.code}),(0,s.h)("div",{id:"currency-slot",innerHTML:this.currencySlot.replace(/\{name\}/g,e.name).replace(/\{code\}/g,e.code).replace(/\{country_code\}/g,e.country_code)})))):(0,s.h)("select",{class:"s-localization-modal-select",name:"currency",onChange:e=>this.onChangeCurrency(e)},this.currencies.map((e=>(0,s.h)("option",{value:e.code,selected:this.currency==e.code},e.name)))))):"",(0,s.h)("salla-button",{wide:!0,ref:e=>this.btn=e,onClick:()=>this.submit()},salla.lang.get("common.elements.ok"))))}componentDidRender(){this.host.querySelectorAll("#currency-slot").forEach((e=>e.replaceWith(e.firstChild))),this.host.querySelectorAll("#language-slot").forEach((e=>e.replaceWith(e.firstChild)))}get host(){return(0,s.g)(this)}};t.style=""},863:(e,a,l)=>{l.d(a,{H:()=>n}),salla.event.setMaxListeners(20);class s extends salla.AppHelpers{setHost(e){this.host=e}getElement(e){return this.host.querySelector(e)}getAttribute(e,a){var l;return null===(l=this.getElement(e))||void 0===l?void 0:l.getAttribute(a)}val(e){return this.getAttribute(e,"value")}isUser(){return"user"===salla.config.get("user.type")}}const n=new s}}]);