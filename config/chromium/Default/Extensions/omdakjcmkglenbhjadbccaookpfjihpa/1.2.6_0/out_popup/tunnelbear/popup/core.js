// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.popup.core');
goog.require('cljs.core');
goog.require('tunnelbear.popup.utils');
goog.require('tunnelbear.common.ports');
goog.require('weasel.repl');
goog.require('tunnelbear.common.utils');
goog.require('cljs.core.async');
goog.require('tunnelbear.common.logger');
goog.require('cemerick.url');
goog.require('tunnelbear.popup.review');
goog.require('clojure.walk');
cljs.core.enable_console_print_BANG_.call(null);
tunnelbear.popup.core.log = (function log(level,param){
return tunnelbear.common.logger.log.call(null,level,[cljs.core.str("[Background - Core] "),cljs.core.str(param)].join(''));
});
tunnelbear.common.ports.init.call(null,false);
tunnelbear.common.logger.init.call(null,"Popup");
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"[Popup] : Popup started");
tunnelbear.popup.core.reg_response = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.popup.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.popup.core.view_model = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.popup.core.view_states = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NORMAL","NORMAL",438371611),new cljs.core.Keyword(null,"COUNTRY","COUNTRY",-2071575461),new cljs.core.Keyword(null,"PREFERENCES","PREFERENCES",911015214)], null);
tunnelbear.popup.core.view_states_settings = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NONE","NONE",555544038),new cljs.core.Keyword(null,"KEYBOARD","KEYBOARD",1148067598)], null);
tunnelbear.popup.core.connection_states = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ON","ON",1197607142),new cljs.core.Keyword(null,"OFF","OFF",-1898054514),new cljs.core.Keyword(null,"OUTOFDATA","OUTOFDATA",1009657939)], null);
tunnelbear.popup.core.get_country_from_code = (function get_country_from_code(code){
var countries = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countryInfo","countryInfo",1799601066)], null));
var selected_country = cljs.core.first.call(null,cljs.core.filter.call(null,((function (countries){
return (function (p1__10475_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p1__10475_SHARP_),code);
});})(countries))
,countries));
return selected_country;
});
tunnelbear.popup.core.get_country_name = (function get_country_name(code){
var country = tunnelbear.popup.core.get_country_from_code.call(null,code);
var iso = new cljs.core.Keyword(null,"iso","iso",-1366207543).cljs$core$IFn$_invoke$arity$1(country);
return getCountryName(iso);
});
tunnelbear.popup.core.disconnect_if_connected = (function disconnect_if_connected(){
var toggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
if(cljs.core.truth_(toggled_QMARK_)){
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"chrome","chrome",1718738387),"toggle-all");
} else {
return null;
}
});
tunnelbear.popup.core.update_error = (function update_error(){
var permissions = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.Keyword(null,"permissions","permissions",67803075)], null));
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(permissions);
var obsPermissions = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"permissions","permissions",67803075)], null));
var oldPermissions = obsPermissions.call(null);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(oldPermissions),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(permissions))){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("[Popup] : updating permissions "),cljs.core.str(permissions)].join(''));

obsPermissions.call(null,permissions);

if(cljs.core.truth_(error_QMARK_)){
return tunnelbear.popup.core.disconnect_if_connected.call(null);
} else {
return null;
}
} else {
return null;
}
});
tunnelbear.popup.core.update_countries = (function update_countries(){
var countryList = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countryInfo","countryInfo",1799601066)], null));
var newCountry = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.Keyword(null,"country","country",312965309)], null));
var obsCountries = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countries","countries",863192750)], null));
var obsSelectedCountry = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selectedCountry","selectedCountry",1452370384)], null));
if(!(cljs.core.empty_QMARK_.call(null,countryList))){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"[Popup] : update-countries");

obsCountries.call(null,countryList);

return obsSelectedCountry.call(null,tunnelbear.popup.core.get_country_from_code.call(null,newCountry));
} else {
return null;
}
});
tunnelbear.popup.core.update_state = (function update_state(state){
var obsStatusIcon = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"statusIcon","statusIcon",-684837059)], null));
var obsToggleText = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggleText","toggleText",-252487414)], null));
var obsStatus = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null));
var G__10477 = (((state instanceof cljs.core.Keyword))?state.fqn:null);
switch (G__10477) {
case "OUTOFDATA":
obsStatus.call(null,"Out of Data!");

obsToggleText.call(null,"OFF");

return obsStatusIcon.call(null,tunnelbear.popup.utils.get_icon.call(null,"status_error"));

break;
case "OFF":
obsStatus.call(null,"Disconnected");

obsToggleText.call(null,"OFF");

return obsStatusIcon.call(null,tunnelbear.popup.utils.get_icon.call(null,"status_disconnected"));

break;
case "ON":
obsStatus.call(null,"Connected");

obsToggleText.call(null,"ON");

return obsStatusIcon.call(null,tunnelbear.popup.utils.get_icon.call(null,"status_connected"));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(state)].join('')));

}
});
tunnelbear.popup.core.update_profile = (function update_profile(){
var fullVersion = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fullVersion","fullVersion",-192963474)], null));
var emailConfirmed_QMARK_ = ((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emailConfirmed","emailConfirmed",176205617)], null)),"1"))?true:false);
var obsFullVersion = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isFullVersion","isFullVersion",-1967222371)], null));
var fullVersion_QMARK_ = ((cljs.core._EQ_.call(null,fullVersion,"1"))?true:false);
var twitterPromo = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"twitterPromo","twitterPromo",1953647878)], null));
var twitterPromoEnabled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"twitterPromoEnabled","twitterPromoEnabled",-373229555)], null));
var canTweetPromo_QMARK_ = (((cljs.core._EQ_.call(null,twitterPromo,"0")) && (cljs.core._EQ_.call(null,twitterPromoEnabled_QMARK_,true)) && (cljs.core._EQ_.call(null,fullVersion_QMARK_,false)) && (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-twitter","show-twitter",-1311018027)], null)),true)) && (cljs.core._EQ_.call(null,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"viewState","viewState",156262881).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reviewVM","reviewVM",308146936)], null))).call(null)),new cljs.core.Keyword(null,"HIDDEN","HIDDEN",-78816058))))?true:false);
var dataCap = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataCap","dataCap",-249970833)], null));
var dataAllowed = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502)], null));
var obsIsEmailConfirmed = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isEmailConfirmed","isEmailConfirmed",-105522383)], null));
var obsDataCap = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataCap","dataCap",-249970833)], null));
var obsDataAllowed = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502)], null));
var obsIsTwitterPromo = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isTwitterPromo","isTwitterPromo",-298812952)], null));
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"update profile");

tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),twitterPromo);

tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),twitterPromoEnabled_QMARK_);

tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),fullVersion_QMARK_);

tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-twitter","show-twitter",-1311018027)], null)));

tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),new cljs.core.Keyword(null,"viewState","viewState",156262881).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reviewVM","reviewVM",308146936)], null))).call(null));

obsFullVersion.call(null,fullVersion_QMARK_);

obsDataCap.call(null,dataCap);

obsDataAllowed.call(null,dataAllowed);

obsIsEmailConfirmed.call(null,emailConfirmed_QMARK_);

obsIsTwitterPromo.call(null,canTweetPromo_QMARK_);

if(cljs.core._EQ_.call(null,true,emailConfirmed_QMARK_)){
if((dataAllowed <= (0))){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"setting out-of-data ");

return tunnelbear.popup.core.update_state.call(null,new cljs.core.Keyword(null,"OUTOFDATA","OUTOFDATA",1009657939));
} else {
var isToggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isToggled","isToggled",724650957)], null)).call(null);
var state = ((cljs.core._EQ_.call(null,true,isToggled_QMARK_))?new cljs.core.Keyword(null,"ON","ON",1197607142):new cljs.core.Keyword(null,"OFF","OFF",-1898054514));
return tunnelbear.popup.core.update_state.call(null,state);
}
} else {
if(((dataCap >= (0))) && ((dataAllowed <= (0)))){
return tunnelbear.popup.core.update_state.call(null,new cljs.core.Keyword(null,"OUTOFDATA","OUTOFDATA",1009657939));
} else {
return null;
}
}
});
tunnelbear.popup.core.update_vm_from_reg = (function update_vm_from_reg(reg){
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result","result",1415092211)], null)))){
tunnelbear.popup.core.update_countries.call(null);

return tunnelbear.popup.core.update_profile.call(null);
} else {
return null;
}
});
tunnelbear.popup.core.update_vm_from_state = (function update_vm_from_state(new_state){
var obsToggled = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isToggled","isToggled",724650957)], null));
var obsLoaded = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isLoaded","isLoaded",-1407824598)], null));
var obsIsTwitterPromo = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isTwitterPromo","isTwitterPromo",-298812952)], null));
var twitter_promo_QMARK_ = obsIsTwitterPromo.call(null);
var toggled_QMARK_ = obsToggled.call(null);
var newToggled = cljs.core.get_in.call(null,new_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
if(cljs.core._EQ_.call(null,obsLoaded.call(null),false)){
tunnelbear.popup.review.check_review.call(null,((function (obsToggled,obsLoaded,obsIsTwitterPromo,twitter_promo_QMARK_,toggled_QMARK_,newToggled){
return (function (can_review_QMARK_){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"CAN-REVIEW");

if((cljs.core._EQ_.call(null,false,twitter_promo_QMARK_)) && (cljs.core._EQ_.call(null,true,can_review_QMARK_))){
return tunnelbear.popup.review.open_review.call(null);
} else {
return null;
}
});})(obsToggled,obsLoaded,obsIsTwitterPromo,twitter_promo_QMARK_,toggled_QMARK_,newToggled))
);
} else {
}

obsLoaded.call(null,true);

if(cljs.core.not_EQ_.call(null,toggled_QMARK_,newToggled)){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"[Popup] : updating vm toggle");

obsToggled.call(null,newToggled);
} else {
}

return tunnelbear.popup.core.update_countries.call(null);
});
tunnelbear.popup.core.set_location_map = (function set_location_map(connected_QMARK_,past_lat,past_lon,past_info,lat,lon,info){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Setting map with past: "),cljs.core.str(past_lat),cljs.core.str(past_lon),cljs.core.str(" "),cljs.core.str(past_info)].join(''));

tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Setting map with current: "),cljs.core.str(lat),cljs.core.str(lon),cljs.core.str(" "),cljs.core.str(info)].join(''));

tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Setting map with connected?: "),cljs.core.str(connected_QMARK_)].join(''));

TunnelBear.BrowserExtensionMap.clearMap();

var isToggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isToggled","isToggled",724650957)], null)).call(null);
var connected_info = (((cljs.core._EQ_.call(null,connected_QMARK_,true)) && (cljs.core._EQ_.call(null,isToggled_QMARK_,false)))?"TunnelBear Desktop":tunnelbear.popup.core.get_country_name.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.Keyword(null,"country","country",312965309)], null))));
return TunnelBear.BrowserExtensionMap.init(past_lat,past_lon,past_info,lat,lon,connected_info,connected_QMARK_);
});
tunnelbear.popup.core.get_region = (function get_region(last_location){
var city = ((cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,last_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"city","city",-393302614)], null))))?cljs.core.get_in.call(null,last_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"city","city",-393302614)], null)):"");
var country_name = ((cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,last_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"country-name","country-name",942618712)], null))))?cljs.core.get_in.call(null,last_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"country-name","country-name",942618712)], null)):"");
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("GET-REGION: city "),cljs.core.str(city)].join(''));

if(((city.length > (0))) && ((country_name.length > (0)))){
return [cljs.core.str(city),cljs.core.str(", "),cljs.core.str(country_name)].join('');
} else {
if((city.length > (0))){
return city;
} else {
if((country_name.length > (0))){
return country_name;
} else {
return "Unknown";

}
}
}
});
tunnelbear.popup.core.on_location_message = (function on_location_message(msg){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"on-location-message");

var message = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,msg));
var response = cljs.core.get_in.call(null,message,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192)], null));
var last_location = cljs.core.get_in.call(null,message,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-location","last-location",-1383589462)], null));
var lat = (((cljs.core.get_in.call(null,last_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543)], null)) == null))?(0):cljs.core.get_in.call(null,last_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543)], null)));
var lon = (((cljs.core.get_in.call(null,last_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372)], null)) == null))?(0):cljs.core.get_in.call(null,last_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372)], null)));
var info = tunnelbear.popup.core.get_region.call(null,last_location);
var connected_QMARK_ = ((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connected","connected",-169833045)], null)),(1)))?true:false);
var current_lat = cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543)], null));
var current_lon = cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372)], null));
return tunnelbear.popup.core.set_location_map.call(null,connected_QMARK_,lat,lon,info,current_lat,current_lon,"");
});
tunnelbear.popup.core.on_reg_response_message = (function on_reg_response_message(msg){
var reg = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,msg));
cljs.core.reset_BANG_.call(null,tunnelbear.popup.core.reg_response,reg);

return tunnelbear.popup.core.update_vm_from_reg.call(null,reg);
});
tunnelbear.popup.core.on_app_state_message = (function on_app_state_message(msg){
var app = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,msg));
cljs.core.reset_BANG_.call(null,tunnelbear.popup.core.app_state,app);

tunnelbear.popup.core.update_vm_from_state.call(null,app);

return tunnelbear.popup.core.update_error.call(null);
});
tunnelbear.popup.core.on_settings_message = (function on_settings_message(msg){
var G__10480 = msg;
switch (G__10480) {
case "close":
return window.close();

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg)].join('')));

}
});
tunnelbear.popup.core.toggle_all = (function toggle_all(){
var dataAllowed = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502)], null));
var emailConfirmed_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emailConfirmed","emailConfirmed",176205617)], null));
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("data allowed "),cljs.core.str(dataAllowed)].join(''));

if(cljs.core.truth_((function (){var and__3969__auto__ = (dataAllowed > (0));
if(and__3969__auto__){
return emailConfirmed_QMARK_;
} else {
return and__3969__auto__;
}
})())){
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"chrome","chrome",1718738387),"toggle-all");
} else {
return null;
}
});
tunnelbear.popup.core.get_extenstion_shortcuts = (function get_extenstion_shortcuts(callback){
return chrome.commands.getAll((function (p1__10482_SHARP_){
return callback.call(null,cljs.core.js__GT_clj.call(null,p1__10482_SHARP_));
}));
});
tunnelbear.popup.core.toggle_changed = (function toggle_changed(isToggled){
if(cljs.core.truth_(isToggled)){
return tunnelbear.popup.core.update_state.call(null,new cljs.core.Keyword(null,"ON","ON",1197607142));
} else {
return tunnelbear.popup.core.update_state.call(null,new cljs.core.Keyword(null,"OFF","OFF",-1898054514));
}
});
tunnelbear.popup.core.toggle = (function toggle(){
return tunnelbear.popup.core.toggle_all.call(null);
});
tunnelbear.popup.core.open_help = (function open_help(){
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"help");
});
tunnelbear.popup.core.open_account = (function open_account(){
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"account");
});
tunnelbear.popup.core.log_out = (function log_out(){
tunnelbear.popup.core.disconnect_if_connected.call(null);

return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"logout");
});
tunnelbear.popup.core.open_review = (function open_review(){
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"review");
});
tunnelbear.popup.core.open_privacy = (function open_privacy(){
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"privacy");
});
tunnelbear.popup.core.open_keyboard = (function open_keyboard(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewStateSettings","viewStateSettings",1282191430)], null)).call(null,new cljs.core.Keyword(null,"KEYBOARD","KEYBOARD",1148067598));
});
tunnelbear.popup.core.close_keyboard = (function close_keyboard(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewStateSettings","viewStateSettings",1282191430)], null)).call(null,new cljs.core.Keyword(null,"NONE","NONE",555544038));
});
tunnelbear.popup.core.open_country = (function open_country(){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"[Popup] : open-country clicked");

return cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewState","viewState",156262881)], null)).call(null,new cljs.core.Keyword(null,"COUNTRY","COUNTRY",-2071575461));
});
tunnelbear.popup.core.close_country = (function close_country(){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"[Popup] : close-country clicked");

return cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewState","viewState",156262881)], null)).call(null,new cljs.core.Keyword(null,"NORMAL","NORMAL",438371611));
});
tunnelbear.popup.core.open_settings = (function open_settings(){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"[Popup] : open-settings clicked");

return cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewState","viewState",156262881)], null)).call(null,new cljs.core.Keyword(null,"PREFERENCES","PREFERENCES",911015214));
});
tunnelbear.popup.core.close_settings = (function close_settings(){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"[Popup] : close-settings clicked");

return cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewState","viewState",156262881)], null)).call(null,new cljs.core.Keyword(null,"NORMAL","NORMAL",438371611));
});
tunnelbear.popup.core.open_feedback = (function open_feedback(){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"[Popup] : close-settings clicked");

return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"feedback");
});
tunnelbear.popup.core.close_twitter = (function close_twitter(){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"[Popup] : close-twitter clicked");

return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"close-twitter");
});
tunnelbear.popup.core.update_account = (function update_account(){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"[Popup] : update-account clicked");

return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"update");
});
tunnelbear.popup.core.change_country = (function change_country(code){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("[Popup] : change-country clicked: "),cljs.core.str(code)].join(''));

tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"COMMAND","COMMAND",1767426703),"change-country",new cljs.core.Keyword(null,"PARAM","PARAM",674983027),code], null));

return tunnelbear.popup.core.close_country.call(null);
});
tunnelbear.popup.core.tweet_now = (function tweet_now(){
tunnelbear.popup.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"[Popup] : tweet-now clicked");

tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"tweet-now");

return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"close-twitter");
});
tunnelbear.popup.core.open_extensions = (function open_extensions(){
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"extensions");
});
cljs.core.reset_BANG_.call(null,tunnelbear.popup.core.view_model,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"viewState","viewState",156262881),new cljs.core.Keyword(null,"changeCountry","changeCountry",1128919138),new cljs.core.Keyword(null,"openSettings","openSettings",581735938),new cljs.core.Keyword(null,"permissions","permissions",67803075),new cljs.core.Keyword(null,"closeSettings","closeSettings",-1781151068),new cljs.core.Keyword(null,"viewStateSettings","viewStateSettings",1282191430),new cljs.core.Keyword(null,"closeTwitterPromo","closeTwitterPromo",1131884806),new cljs.core.Keyword(null,"isTwitterPromo","isTwitterPromo",-298812952),new cljs.core.Keyword(null,"openExtensions","openExtensions",591160136),new cljs.core.Keyword(null,"tweetNow","tweetNow",428374281),new cljs.core.Keyword(null,"toggleText","toggleText",-252487414),new cljs.core.Keyword(null,"isLoaded","isLoaded",-1407824598),new cljs.core.Keyword(null,"prefFeedback","prefFeedback",1239030763),new cljs.core.Keyword(null,"isToggled","isToggled",724650957),new cljs.core.Keyword(null,"openCountry","openCountry",1017611310),new cljs.core.Keyword(null,"toggle","toggle",1291842030),new cljs.core.Keyword(null,"countries","countries",863192750),new cljs.core.Keyword(null,"updateAccount","updateAccount",-116715762),new cljs.core.Keyword(null,"dataCap","dataCap",-249970833),new cljs.core.Keyword(null,"selectedCountry","selectedCountry",1452370384),new cljs.core.Keyword(null,"prefKeyboard","prefKeyboard",-2130373808),new cljs.core.Keyword(null,"reviewText","reviewText",1362230641),new cljs.core.Keyword(null,"isEmailConfirmed","isEmailConfirmed",-105522383),new cljs.core.Keyword(null,"prefReview","prefReview",-1829523662),new cljs.core.Keyword(null,"currentMonth","currentMonth",294875059),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"prefHelp","prefHelp",-2080705418),new cljs.core.Keyword(null,"prefPrivacy","prefPrivacy",-1384066730),new cljs.core.Keyword(null,"prefCloseKeyboard","prefCloseKeyboard",-1485430761),new cljs.core.Keyword(null,"reviewVM","reviewVM",308146936),new cljs.core.Keyword(null,"prefLogout","prefLogout",-1975663590),new cljs.core.Keyword(null,"closeCountry","closeCountry",-1583618598),new cljs.core.Keyword(null,"prefOpenAccount","prefOpenAccount",-2085818854),new cljs.core.Keyword(null,"isFullVersion","isFullVersion",-1967222371),new cljs.core.Keyword(null,"statusIcon","statusIcon",-684837059),new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502)],[tunnelbear.popup.utils.observable.call(null,new cljs.core.Keyword(null,"NORMAL","NORMAL",438371611)),tunnelbear.popup.core.change_country,tunnelbear.popup.core.open_settings,tunnelbear.popup.utils.observable.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"details","details",1956795411),""], null)),tunnelbear.popup.core.close_settings,tunnelbear.popup.utils.observable.call(null,new cljs.core.Keyword(null,"NONE","NONE",555544038)),tunnelbear.popup.core.close_twitter,tunnelbear.popup.utils.observable.call(null,false),tunnelbear.popup.core.open_extensions,tunnelbear.popup.core.tweet_now,tunnelbear.popup.utils.observable.call(null,"OFF"),tunnelbear.popup.utils.observable.call(null,false),tunnelbear.popup.core.open_feedback,tunnelbear.popup.utils.observable.call(null,false),tunnelbear.popup.core.open_country,tunnelbear.popup.core.toggle,tunnelbear.popup.utils.observable.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"code","code",1586293142),(0),new cljs.core.Keyword(null,"iso","iso",-1366207543),"US",new cljs.core.Keyword(null,"lat","lat",-580793929),(37),new cljs.core.Keyword(null,"lon","lon",522068437),-95.7,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true,new cljs.core.Keyword(null,"paidOnly","paidOnly",-1892879818),false], null)], null)),tunnelbear.popup.core.update_account,tunnelbear.popup.utils.observable.call(null,(0)),tunnelbear.popup.utils.observable.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"code","code",1586293142),(0),new cljs.core.Keyword(null,"iso","iso",-1366207543),"US",new cljs.core.Keyword(null,"lat","lat",-580793929),(37),new cljs.core.Keyword(null,"lon","lon",522068437),-95.7,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true,new cljs.core.Keyword(null,"paidOnly","paidOnly",-1892879818),false], null)),tunnelbear.popup.core.open_keyboard,[cljs.core.str("Review on "),cljs.core.str(tunnelbear.common.utils.get_browser_title),cljs.core.str(" Store")].join(''),tunnelbear.popup.utils.observable.call(null,true),tunnelbear.popup.core.open_review,tunnelbear.common.utils.months.call(null,(new Date()).getMonth()),tunnelbear.popup.utils.observable.call(null,"Disconnected"),tunnelbear.popup.core.open_help,tunnelbear.popup.core.open_privacy,tunnelbear.popup.core.close_keyboard,cljs.core.deref.call(null,tunnelbear.popup.review.view_model),tunnelbear.popup.core.log_out,tunnelbear.popup.core.close_country,tunnelbear.popup.core.open_account,tunnelbear.popup.utils.observable.call(null,true),tunnelbear.popup.utils.observable.call(null,tunnelbear.popup.utils.get_icon.call(null,"status_disconnected")),tunnelbear.popup.utils.observable.call(null,(100))]));
cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.core.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"isToggled","isToggled",724650957)], null)).subscribe((function (new$){
return tunnelbear.popup.core.toggle_changed.call(null,new$);
}));
ko.applyBindings(tunnelbear.popup.utils.observable_ref.call(null,tunnelbear.popup.core.view_model));
tunnelbear.common.ports.setup.call(null,new cljs.core.Keyword(null,"location","location",1815599388),tunnelbear.popup.core.on_location_message);
tunnelbear.common.ports.setup.call(null,new cljs.core.Keyword(null,"register","register",1968522516),tunnelbear.popup.core.on_reg_response_message);
tunnelbear.common.ports.setup.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),tunnelbear.popup.core.on_app_state_message);
tunnelbear.common.ports.setup.call(null,new cljs.core.Keyword(null,"chrome","chrome",1718738387),null);
tunnelbear.common.ports.setup.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),tunnelbear.popup.core.on_settings_message);
tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),"ping");
tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"register","register",1968522516),"register");
