// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.background.proxy');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cemerick.url');
goog.require('clojure.set');
goog.require('weasel.repl');
goog.require('tunnelbear.background.chrome');
goog.require('tunnelbear.common.logger');
tunnelbear.background.proxy.last_servers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tunnelbear.background.proxy.log = (function log(level,param){
return tunnelbear.common.logger.log.call(null,level,[cljs.core.str("[Proxy] "),cljs.core.str(param)].join(''));
});
tunnelbear.background.proxy.should_reset = (function should_reset(servers){
return !(cljs.core.not_any_QMARK_.call(null,(function (p1__24088_SHARP_){
return cljs.core._EQ_.call(null,p1__24088_SHARP_,false);
}),cljs.core.map.call(null,(function (p1__24089_SHARP_){
if((cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p1__24089_SHARP_], true),cljs.core.deref.call(null,tunnelbear.background.proxy.last_servers)) == null)){
return false;
} else {
return true;
}
}),servers)));
});
tunnelbear.background.proxy.pac_all = (function pac_all(enabled_QMARK_,servers){
var proxies_string = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__24090_SHARP_){
return [cljs.core.str("HTTPS "),cljs.core.str(p1__24090_SHARP_),cljs.core.str(":8080;")].join('');
}),servers));
var pac = [cljs.core.str("function regExpMatch(url, pattern) {\n           try {\n            return new RegExp(pattern).test(url);\n           } catch (ex) { return false; }\n         }\n         var pac_date = "),cljs.core.str((new Date()).getTime()),cljs.core.str(";\n         \n         function FindProxyForURL(url, host) {\n         var diff = new Date().getTime() - pac_date;\n         var seconds = diff / 1000;\n         if(seconds > 4) {\n          return \"DIRECT\";\n         }\n\n         if(shExpMatch(host, \"*.tunnelbear.com\")){\n          return \"DIRECT\"; \n         }\n         if (shExpMatch(url, \"*://chrome.google.com/webstore/*\")) {\n          return \"DIRECT\";\n         }\n         if (shExpMatch(url, \"*://addons.opera.com/*\")) {\n          return \"DIRECT\";\n         }\n         if (shExpMatch(url, \"*://*tunnelbear.com/core/api/*\")) {\n           return \"DIRECT\";\n         }\n         if (shExpMatch(url, \"*://*tunnelbear.com/support/*\")) {\n          return \"DIRECT\";\n         }\n         if (shExpMatch(url, \"*://s3.amazonaws.com/tunnelbear/images/404.png*\")) {\n          return \"DIRECT\";\n         }\n         if (shExpMatch(host, \"localhost\")) {\n          return \"DIRECT\";\n         }\n         if (shExpMatch(host, \"127.0.0.1\")) {\n          return \"DIRECT\";\n         }\n         if (shExpMatch(host, \"10.*.*.*\")) {\n          return \"DIRECT\";\n         }\n         if (shExpMatch(host, \"192.168.*.*\")) {\n          return \"DIRECT\";\n         }\n         if (shExpMatch(host, \"(^172.1[6-9].*.*)|(^172.2[0-9].*.*)|(^172.3[0-1].*.*)\")) {\n          return \"DIRECT\";\n         }\n         if (shExpMatch(url, \"*\")) {\n          return \""),cljs.core.str(((cljs.core._EQ_.call(null,enabled_QMARK_,true))?proxies_string:"DIRECT")),cljs.core.str("\";\n         }\n         return \"DIRECT\";\n          }")].join('');
tunnelbear.background.proxy.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),proxies_string);

return pac;
});
tunnelbear.background.proxy.reset_proxy = (function reset_proxy(){
return chrome.proxy.settings.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"direct"], null),new cljs.core.Keyword(null,"scope","scope",-439358418),"regular"], null)),(function (p1__24091_SHARP_){
return tunnelbear.background.proxy.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),p1__24091_SHARP_);
}));
});
tunnelbear.background.proxy.proxy_all = (function proxy_all(enabled_QMARK_,servers){
if(cljs.core.truth_(enabled_QMARK_)){
tunnelbear.background.proxy.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"[Background - Proxy] : Enabling");

chrome.privacy.network.webRTCMultipleRoutesEnabled.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),false], null)));

if(cljs.core.not_EQ_.call(null,null,chrome.privacy.network.webRTCNonProxiedUdpEnabled)){
chrome.privacy.network.webRTCNonProxiedUdpEnabled.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),false], null)));
} else {
}
} else {
tunnelbear.background.proxy.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"[Background - Proxy] : Disabling");

chrome.privacy.network.webRTCMultipleRoutesEnabled.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null)));

if(cljs.core.not_EQ_.call(null,null,chrome.privacy.network.webRTCNonProxiedUdpEnabled)){
chrome.privacy.network.webRTCNonProxiedUdpEnabled.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),true], null)));
} else {
}
}

if(tunnelbear.background.proxy.should_reset.call(null,servers)){
cljs.core.reset_BANG_.call(null,tunnelbear.background.proxy.last_servers,servers);
} else {
}

return chrome.proxy.settings.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),"pac_script",new cljs.core.Keyword(null,"pacScript","pacScript",-2139126047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),tunnelbear.background.proxy.pac_all.call(null,enabled_QMARK_,cljs.core.deref.call(null,tunnelbear.background.proxy.last_servers))], null)], null),new cljs.core.Keyword(null,"scope","scope",-439358418),"regular"], null)),null);
});
tunnelbear.background.proxy.eval_proxy = (function eval_proxy(callback){
return chrome.proxy.settings.get(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"incognito","incognito",-2057377739),false], null)),(function (config){
var levelOfControl = new cljs.core.Keyword(null,"levelOfControl","levelOfControl",1486042669).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,config,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var hasPermissions_QMARK_ = (((cljs.core._EQ_.call(null,levelOfControl,"controlled_by_other_extensions")) || (cljs.core._EQ_.call(null,levelOfControl,"not_controllable")))?false:true);
if(hasPermissions_QMARK_){
return callback.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"details","details",1956795411),""], null));
} else {
return chrome.management.getAll(((function (levelOfControl,hasPermissions_QMARK_){
return (function (result){
var apps = cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var appid = chrome.runtime.id;
var culprits = cljs.core.filter.call(null,((function (apps,appid,levelOfControl,hasPermissions_QMARK_){
return (function (p1__24092_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["proxy",null], null), null),new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(p1__24092_SHARP_));
});})(apps,appid,levelOfControl,hasPermissions_QMARK_))
,apps);
var culprit = cljs.core.first.call(null,cljs.core.filter.call(null,((function (apps,appid,culprits,levelOfControl,hasPermissions_QMARK_){
return (function (p1__24093_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__24093_SHARP_),appid);
});})(apps,appid,culprits,levelOfControl,hasPermissions_QMARK_))
,culprits));
var icon_16 = ((cljs.core.not_EQ_.call(null,null,new cljs.core.Keyword(null,"icons","icons",-297140977).cljs$core$IFn$_invoke$arity$1(culprit).call(null,(0))))?new cljs.core.Keyword(null,"icons","icons",-297140977).cljs$core$IFn$_invoke$arity$1(culprit).call(null,(0)):"");
var icon_32 = ((cljs.core.not_EQ_.call(null,null,new cljs.core.Keyword(null,"icons","icons",-297140977).cljs$core$IFn$_invoke$arity$1(culprit).call(null,(1))))?new cljs.core.Keyword(null,"icons","icons",-297140977).cljs$core$IFn$_invoke$arity$1(culprit).call(null,(1)):icon_16);
var isRetina_QMARK_ = (((window.devicePixelRatio > (1)))?true:false);
var icon = ((isRetina_QMARK_)?icon_32:icon_16);
tunnelbear.background.proxy.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),culprit);

return callback.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),true,new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"shortName","shortName",-193714575).cljs$core$IFn$_invoke$arity$1(culprit),new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null));
});})(levelOfControl,hasPermissions_QMARK_))
);
}
}));
});
chrome.proxy.onProxyError.addListener((function (err){
tunnelbear.background.proxy.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),[cljs.core.str("proxy error"),cljs.core.str(cljs.core.js__GT_clj.call(null,cljs.core.deref.call(null,tunnelbear.background.proxy.last_servers),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))].join(''));

return tunnelbear.background.proxy.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),[cljs.core.str(cljs.core.js__GT_clj.call(null,err,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))].join(''));
}));
