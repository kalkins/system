// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.background.chrome');
goog.require('cljs.core');
goog.require('goog.Timer');
goog.require('tunnelbear.common.ports');
goog.require('weasel.repl');
goog.require('tunnelbear.common.utils');
goog.require('tunnelbear.background.api');
goog.require('cljs.core.async');
goog.require('tunnelbear.common.logger');
goog.require('clojure.set');
goog.require('goog.events');
goog.require('cemerick.url');
goog.require('clojure.walk');
tunnelbear.background.chrome.current_token = cljs.core.atom.call(null,"");
tunnelbear.background.chrome.current_proxies = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.background.chrome.last_data_allowed = cljs.core.atom.call(null,(0));
tunnelbear.background.chrome.register_timer = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.background.chrome.low_data_cap = (100);
tunnelbear.background.chrome.can_warn_low_data_QMARK_ = cljs.core.atom.call(null,false);
tunnelbear.background.chrome.toggle_off_background = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.background.chrome.last_error_register = cljs.core.atom.call(null,(0));
tunnelbear.background.chrome.log = (function log(level,param){
return tunnelbear.common.logger.log.call(null,level,[cljs.core.str("[CHROME] "),cljs.core.str(param)].join(''));
});
tunnelbear.background.chrome.set_extension_icon = (function set_extension_icon(file){
var icon = [cljs.core.str("../images/"),cljs.core.str(file),cljs.core.str(".png")].join('');
var icon_retina = [cljs.core.str("../images/"),cljs.core.str(file),cljs.core.str("2x.png")].join('');
return chrome.browserAction.setIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"19","19",-1176247882),icon,new cljs.core.Keyword(null,"38","38",-842958325),icon_retina], null)], null)));
});
tunnelbear.background.chrome.toggle_icon = (function toggle_icon(toggled_QMARK_){
var icon = (cljs.core.truth_(toggled_QMARK_)?"icon_on":"icon_off");
return tunnelbear.background.chrome.set_extension_icon.call(null,icon);
});
tunnelbear.background.chrome.set_extension_badge = (function set_extension_badge(text,type){
chrome.browserAction.setBadgeText(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),text], null)));

var G__24001 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24001) {
case "ALERT":
return chrome.browserAction.setBadgeBackgroundColor(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#d64a2f"], null)));

break;
case "WARN":
return chrome.browserAction.setBadgeBackgroundColor(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#e48b2d"], null)));

break;
case "OFF":
return chrome.browserAction.setBadgeBackgroundColor(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#7d6549"], null)));

break;
case "NONE":
return tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"setting extension badge to nothing");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
tunnelbear.background.chrome.set_data_level = (function set_data_level(data_allowed,isToggled_QMARK_){
if((((data_allowed / (1048576)) < tunnelbear.background.chrome.low_data_cap)) && ((data_allowed > (0)))){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("Low Data : Can warn user? "),cljs.core.str(cljs.core.deref.call(null,tunnelbear.background.chrome.can_warn_low_data_QMARK_))].join(''));

if((cljs.core._EQ_.call(null,true,cljs.core.deref.call(null,tunnelbear.background.chrome.can_warn_low_data_QMARK_))) && (cljs.core._EQ_.call(null,true,isToggled_QMARK_))){
cljs.core.reset_BANG_.call(null,tunnelbear.background.chrome.can_warn_low_data_QMARK_,false);

tunnelbear.background.api.low_account.call(null);
} else {
}

tunnelbear.background.chrome.set_extension_badge.call(null,"Low",new cljs.core.Keyword(null,"WARN","WARN",-1091130621));
} else {
}

if((data_allowed < (0))){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"No more Data");

tunnelbear.background.chrome.set_extension_badge.call(null,"0mb",new cljs.core.Keyword(null,"ALERT","ALERT",960026686));

cljs.core.deref.call(null,tunnelbear.background.chrome.toggle_off_background).call(null);
} else {
}

if(((data_allowed / (1048576)) > tunnelbear.background.chrome.low_data_cap)){
cljs.core.reset_BANG_.call(null,tunnelbear.background.chrome.can_warn_low_data_QMARK_,true);

if(cljs.core.truth_(isToggled_QMARK_)){
return tunnelbear.background.chrome.set_extension_badge.call(null,"",new cljs.core.Keyword(null,"NONE","NONE",555544038));
} else {
return tunnelbear.background.chrome.set_extension_badge.call(null,"Off",new cljs.core.Keyword(null,"OFF","OFF",-1898054514));
}
} else {
return null;
}
});
tunnelbear.background.chrome.adjust_timer = (function adjust_timer(timer){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("adjusting timer to: "),cljs.core.str(timer)].join(''));

return cljs.core.deref.call(null,tunnelbear.background.chrome.register_timer).setInterval(timer);
});
tunnelbear.background.chrome.evaluate_timer = (function evaluate_timer(new_data_allowed){
var new_data = (new_data_allowed / (1048576));
var diff_data_usage = (cljs.core.deref.call(null,tunnelbear.background.chrome.last_data_allowed) - new_data);
if((diff_data_usage > (0))){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("[DATA] usage since last time: "),cljs.core.str(diff_data_usage)].join(''));

if((diff_data_usage < (1))){
tunnelbear.background.chrome.adjust_timer.call(null,(60000));
} else {
if((diff_data_usage < (5))){
tunnelbear.background.chrome.adjust_timer.call(null,(50000));
} else {
if((diff_data_usage < (10))){
tunnelbear.background.chrome.adjust_timer.call(null,(40000));
} else {
if((diff_data_usage < (15))){
tunnelbear.background.chrome.adjust_timer.call(null,(35000));
} else {
if((diff_data_usage < (20))){
tunnelbear.background.chrome.adjust_timer.call(null,(30000));
} else {
tunnelbear.background.chrome.adjust_timer.call(null,(25000));

}
}
}
}
}

return cljs.core.reset_BANG_.call(null,tunnelbear.background.chrome.last_data_allowed,new_data);
} else {
return cljs.core.reset_BANG_.call(null,tunnelbear.background.chrome.last_data_allowed,new_data);
}
});
tunnelbear.background.chrome.logout = (function logout(){
cljs.core.reset_BANG_.call(null,tunnelbear.background.chrome.current_token,"");

return cljs.core.reset_BANG_.call(null,tunnelbear.background.chrome.current_proxies,cljs.core.PersistentArrayMap.EMPTY);
});
tunnelbear.background.chrome.register = (function register(){
if((cljs.core.not_EQ_.call(null,null,tunnelbear.background.core)) && (cljs.core._EQ_.call(null,true,cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null))))){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"TIMER registering");

return tunnelbear.background.api.register_ignore_errors.call(null,tunnelbear.background.core.get_country.call(null),null);
} else {
return null;
}
});
tunnelbear.background.chrome.poll = (function poll(){
cljs.core.reset_BANG_.call(null,tunnelbear.background.chrome.register_timer,(new goog.Timer((40000))));

cljs.core.deref.call(null,tunnelbear.background.chrome.register_timer).start();

return goog.events.listen(cljs.core.deref.call(null,tunnelbear.background.chrome.register_timer),goog.Timer.TICK,tunnelbear.background.chrome.register);
});
tunnelbear.background.chrome.register_listeners = (function register_listeners(toggle_all_callback,change_country_callback,disconnect_proxy_callback){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"AppStart - Registering listeners");

tunnelbear.background.chrome.toggle_all = (function toggle_all(){
var isToggled_QMARK__24013 = cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null)));
var data_allowed_24014 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502)], null));
tunnelbear.background.chrome.set_data_level.call(null,data_allowed_24014,isToggled_QMARK__24013);

tunnelbear.background.chrome.toggle_icon.call(null,isToggled_QMARK__24013);

tunnelbear.background.api.clear_token_callbacks.call(null);

return toggle_all_callback.call(null);
});

tunnelbear.background.chrome.send_feedback = (function send_feedback(){
return tunnelbear.background.api.send_feedback.call(null);
});

tunnelbear.background.chrome.incognito_tunnelling = (function incognito_tunnelling(){
return chrome.extension.isAllowedIncognitoAccess((function (isAllowed_QMARK_){
if(cljs.core.truth_(isAllowed_QMARK_)){
var toggled_QMARK__24015 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
if(cljs.core._EQ_.call(null,toggled_QMARK__24015,false)){
if(!((tunnelbear.background.api.reg_response == null))){
tunnelbear.background.chrome.toggle_all.call(null);
} else {
}
} else {
}

return chrome.windows.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"https://bearsmyip.com",new cljs.core.Keyword(null,"incognito","incognito",-2057377739),true], null)));
} else {
return tunnelbear.background.api.extensions.call(null);
}
}));
});

tunnelbear.background.chrome.toggle_off = (function toggle_off(){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"calling toggle-off");

var isToggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
if(cljs.core.truth_(isToggled_QMARK_)){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"Toggling off");

tunnelbear.background.chrome.toggle_icon.call(null,false);

toggle_all_callback.call(null);

disconnect_proxy_callback.call(null);

return tunnelbear.background.api.out_of_data.call(null);
} else {
return tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"Already toggled-off");
}
});

cljs.core.reset_BANG_.call(null,tunnelbear.background.chrome.toggle_off_background,tunnelbear.background.chrome.toggle_off);

chrome.commands.onCommand.addListener((function (command){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Command: "),cljs.core.str(command)].join(''));

var G__24008 = command;
switch (G__24008) {
case "toggle-tunnelling":
return tunnelbear.background.chrome.toggle_all.call(null);

break;
case "incognito-tunnelling":
return tunnelbear.background.chrome.incognito_tunnelling.call(null);

break;
case "send-feedback":
return tunnelbear.background.chrome.send_feedback.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(command)].join('')));

}
}));

tunnelbear.background.chrome.first_install_QMARK_ = (function first_install_QMARK_(handler){
return tunnelbear.common.utils.storage_get.call(null,"installed",(function (result){
var installed_QMARK_ = ((cljs.core.some_QMARK_.call(null,result))?new cljs.core.Keyword(null,"installed","installed",553977691).cljs$core$IFn$_invoke$arity$1(result):false);
return handler.call(null,installed_QMARK_);
}));
});

chrome.runtime.onInstalled.addListener((function (details){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"app installed");

tunnelbear.background.chrome.first_install_QMARK_.call(null,(function (installed){
if(cljs.core.not.call(null,installed)){
return tunnelbear.common.utils.storage_set.call(null,"installed",(new Date()).getTime());
} else {
return null;
}
}));

return chrome.storage.local.get("isToggled",(function (result){
var toggled_QMARK_ = new cljs.core.Keyword(null,"isToggled","isToggled",724650957).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
if((toggled_QMARK_ == null)){
return tunnelbear.background.api.register.call(null,true,tunnelbear.background.core.get_country.call(null),((function (toggled_QMARK_){
return (function (){
if(!((tunnelbear.background.api.reg_response == null))){
return tunnelbear.background.chrome.toggle_all.call(null);
} else {
return null;
}
});})(toggled_QMARK_))
);
} else {
return null;
}
}));
}));

chrome.runtime.onMessageExternal.addListener((function (request,sender,response){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Got message: "),cljs.core.str(JSON.stringify(request))].join(''));

var message = cljs.core.js__GT_clj.call(null,request,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var toggle = new cljs.core.Keyword(null,"toggled","toggled",1679391819).cljs$core$IFn$_invoke$arity$1(message);
var opentab = new cljs.core.Keyword(null,"opentab","opentab",-1333315765).cljs$core$IFn$_invoke$arity$1(message);
var str_message = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message);
var twitter = ((cljs.core._EQ_.call(null,str_message,"twitter"))?"twitter":null);
if(!((toggle == null))){
tunnelbear.background.api.register_ignore_errors.call(null,tunnelbear.background.core.get_country.call(null),((function (message,toggle,opentab,str_message,twitter){
return (function (){
var response__$1 = clojure.walk.keywordize_keys.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response));
var data_allowed = new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502).cljs$core$IFn$_invoke$arity$1(response__$1);
if((data_allowed > (0))){
return tunnelbear.background.chrome.toggle_all.call(null);
} else {
return null;
}
});})(message,toggle,opentab,str_message,twitter))
);
} else {
}

if(!((opentab == null))){
if(((opentab == null)) || (cljs.core._EQ_.call(null,opentab,""))){
chrome.tabs.create(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY));
} else {
chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),opentab], null)));
}
} else {
}

if(cljs.core.some_QMARK_.call(null,twitter)){
return tunnelbear.background.api.open_twitter.call(null);
} else {
return null;
}
}));

tunnelbear.background.chrome.port_callback = (function port_callback(port_name,msg){
var G__24011_24017 = msg;
switch (G__24011_24017) {
case "toggle-all":
tunnelbear.background.chrome.toggle_all.call(null);

break;
default:
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"not a normal command");

}

var command = cljs.core.js__GT_clj.call(null,msg);
if(cljs.core.contains_QMARK_.call(null,command,"COMMAND")){
var G__24012 = cljs.core.get_in.call(null,command,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMMAND"], null));
switch (G__24012) {
case "change-country":
return change_country_callback.call(null,cljs.core.get_in.call(null,command,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PARAM"], null)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.get_in.call(null,command,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["COMMAND"], null)))].join('')));

}
} else {
return null;
}
});

tunnelbear.common.ports.subscribe_to.call(null,new cljs.core.Keyword(null,"chrome","chrome",1718738387),tunnelbear.background.chrome.port_callback);

chrome.webRequest.onErrorOccurred.addListener((function (d){
var details = cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var error_status = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(details);
var isToggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("WebRequestOnErrorOccured"),cljs.core.str([cljs.core.str(details)].join(''))].join(''));

if((((error_status.indexOf("ERR_PROXY_CONNECTION_FAILED") > (-1))) || ((error_status.indexOf("ERR_CONNECTION_RESET") > (-1))) || ((error_status.indexOf("ERR_NETWORK_IO_SUSPENDED") > (-1)))) && (cljs.core._EQ_.call(null,isToggled_QMARK_,true))){
if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tunnelbear.background.chrome.last_error_register),(0))) || ((((new Date()).getTime() - cljs.core.deref.call(null,tunnelbear.background.chrome.last_error_register)) > (15000)))){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"WARNING","WARNING",-406592224),"Registering again, possible server error");

cljs.core.reset_BANG_.call(null,tunnelbear.background.chrome.last_error_register,(new Date()).getTime());

return tunnelbear.background.chrome.register.call(null);
} else {
return tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"WARNING","WARNING",-406592224),"Not registering - registered too many times");
}
} else {
return null;
}
}),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"urls","urls",-190753757),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<all_urls>"], null)], null)));

tunnelbear.background.chrome.set_token = (function set_token(proxy,token){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("Setting token: "),cljs.core.str(token),cljs.core.str(" for proxy: "),cljs.core.str(proxy)].join(''));

cljs.core.reset_BANG_.call(null,tunnelbear.background.chrome.current_token,token);

if(!((proxy == null))){
return cljs.core.swap_BANG_.call(null,tunnelbear.background.chrome.current_proxies,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,proxy)], null),token);
} else {
return null;
}
});

tunnelbear.background.chrome.new_token = (function new_token(tabId,proxy,callback){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("Fetching new token for "),cljs.core.str(proxy)].join(''));

return tunnelbear.background.api.getToken.call(null,(function (error,token){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Finished fetching token with token "),cljs.core.str(token)].join(''));

if(!((error == null))){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),[cljs.core.str("error fetching token: "),cljs.core.str(error)].join(''));
} else {
}

if((error == null)){
tunnelbear.background.chrome.set_token.call(null,proxy,token);

return callback(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authCredentials","authCredentials",1560654066),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),token,new cljs.core.Keyword(null,"password","password",417022471),token], null)], null)));
} else {
if(((0) < tabId)){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),[cljs.core.str("Changing tab url to error:"),cljs.core.str(tabId),cljs.core.str(error)].join(''));

if(cljs.core._EQ_.call(null,error,"No data left")){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"No data -disconnecting");

return tunnelbear.background.chrome.toggle_off.call(null);
} else {
return null;
}
} else {
return null;
}
}
}));
});

tunnelbear.background.chrome.validate_token = (function validate_token(tabId,proxy,proxy_token,callback){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("Validating token "),cljs.core.str(proxy_token),cljs.core.str(" for  "),cljs.core.str(proxy)].join(''));

if(cljs.core.not_EQ_.call(null,null,proxy_token)){
if(cljs.core.not_EQ_.call(null,proxy_token,cljs.core.deref.call(null,tunnelbear.background.chrome.current_token))){
callback(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authCredentials","authCredentials",1560654066),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.deref.call(null,tunnelbear.background.chrome.current_token),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.deref.call(null,tunnelbear.background.chrome.current_token)], null)], null)));

return tunnelbear.background.chrome.set_token.call(null,proxy,cljs.core.deref.call(null,tunnelbear.background.chrome.current_token));
} else {
return tunnelbear.background.chrome.new_token.call(null,tabId,proxy,callback);
}
} else {
callback(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authCredentials","authCredentials",1560654066),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),cljs.core.deref.call(null,tunnelbear.background.chrome.current_token),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.deref.call(null,tunnelbear.background.chrome.current_token)], null)], null)));

return tunnelbear.background.chrome.set_token.call(null,proxy,cljs.core.deref.call(null,tunnelbear.background.chrome.current_token));
}
});

tunnelbear.background.chrome.get_token = (function get_token(tabId,proxy,callback){
var key_proxy = cljs.core.keyword.call(null,proxy);
var proxy_token = key_proxy.call(null,cljs.core.deref.call(null,tunnelbear.background.chrome.current_proxies));
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("[GET-TOKEN] - current token for "),cljs.core.str(proxy),cljs.core.str(" "),cljs.core.str(proxy_token)].join(''));

if(cljs.core._EQ_.call(null,"",cljs.core.deref.call(null,tunnelbear.background.chrome.current_token))){
return tunnelbear.background.chrome.new_token.call(null,tabId,proxy,callback);
} else {
return tunnelbear.background.chrome.validate_token.call(null,tabId,proxy,proxy_token,callback);
}
});

chrome.webRequest.onAuthRequired.addListener((function (details,callback){
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("---- onAuthRequired ---")].join(''));

var details__$1 = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,details));
var proxy = cljs.core.get_in.call(null,details__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"challenger","challenger",982627408),new cljs.core.Keyword(null,"host","host",-1558485167)], null));
var tabId = new cljs.core.Keyword(null,"tabId","tabId",-583425174).cljs$core$IFn$_invoke$arity$1(details__$1);
var url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(details__$1);
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),[cljs.core.str("onAuthRequired for proxy: "),cljs.core.str(proxy)].join(''));

if((proxy.indexOf("lazerpenguin.com") > (0))){
return tunnelbear.background.chrome.get_token.call(null,tabId,proxy,callback);
} else {
return callback(cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY));
}
}),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"urls","urls",-190753757),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<all_urls>"], null)], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["asyncBlocking"], null)));

return chrome.storage.local.get("isToggled",(function (result){
var toggled_QMARK_ = new cljs.core.Keyword(null,"isToggled","isToggled",724650957).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
if(cljs.core._EQ_.call(null,toggled_QMARK_,true)){
return tunnelbear.background.chrome.toggle_all.call(null);
} else {
return null;
}
}));
});
chrome.runtime.setUninstallURL(tunnelbear.background.api.uninstall_url);
tunnelbear.background.chrome.poll.call(null);
cljs.core.add_watch.call(null,tunnelbear.background.api.reg_response,new cljs.core.Keyword(null,"reg-watcher-chrome","reg-watcher-chrome",-1903364501),(function (k,r,old_state,new_state){
var response = clojure.walk.keywordize_keys.call(null,new_state);
var data_allowed = new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502).cljs$core$IFn$_invoke$arity$1(response);
var isToggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
tunnelbear.background.chrome.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"api/reg-response changed!");

tunnelbear.background.chrome.set_data_level.call(null,data_allowed,isToggled_QMARK_);

return tunnelbear.background.chrome.evaluate_timer.call(null,data_allowed);
}));
