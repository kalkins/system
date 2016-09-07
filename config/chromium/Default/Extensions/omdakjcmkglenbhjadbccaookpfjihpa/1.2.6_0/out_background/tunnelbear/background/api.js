// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.background.api');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('tunnelbear.common.ports');
goog.require('weasel.repl');
goog.require('tunnelbear.common.ajax_helper');
goog.require('tunnelbear.common.utils');
goog.require('cljs.core.async');
goog.require('tunnelbear.common.logger');
goog.require('clojure.set');
goog.require('cemerick.url');
goog.require('clojure.walk');
tunnelbear.background.api.log = (function log(level,param){
return tunnelbear.common.logger.log.call(null,level,[cljs.core.str("[API] "),cljs.core.str(param)].join(''));
});
tunnelbear.background.api.tbear_base_url = "https://www.tunnelbear.com";
tunnelbear.background.api.tbear_help_url = "https://help.tunnelbear.com";
tunnelbear.background.api.uninstall_url = [cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/bear/account#/feedback")].join('');
tunnelbear.background.api.version = (function (){var version_prefix = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"OPERA","OPERA",802242835),tunnelbear.common.utils.get_browser))?"o":"c");
return [cljs.core.str(version_prefix),cljs.core.str(new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,chrome.app.getDetails(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)))].join('');
})();
tunnelbear.background.api.uuid = (function uuid(){
var r = cljs.core.repeatedly.call(null,(30),(function (){
return cljs.core.rand_int.call(null,(16));
}));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.take.call(null,(8),r),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),cljs.core.take.call(null,(4),cljs.core.drop.call(null,(8),r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-4"], null),cljs.core.take.call(null,(3),cljs.core.drop.call(null,(12),r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((8) | ((3) & cljs.core.rand_int.call(null,(15))))], null),cljs.core.take.call(null,(3),cljs.core.drop.call(null,(15),r)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"], null),cljs.core.take.call(null,(12),cljs.core.drop.call(null,(18),r))));
});
tunnelbear.background.api.deviceId = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.background.api.reg_response = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.background.api.loc_response = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.background.api.token_callbacks = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.core.add_watch.call(null,tunnelbear.background.api.reg_response,new cljs.core.Keyword(null,"reg-watcher-api","reg-watcher-api",838236973),(function (k,r,old_state,new_state){
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"register","register",1968522516),new_state);
}));
tunnelbear.background.api.persist_response = (function persist_response(response){
tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(response)),cljs.core.str(" ")].join(''));

cljs.core.reset_BANG_.call(null,tunnelbear.background.api.reg_response,response);

return response;
});
tunnelbear.background.api.out_of_data = (function out_of_data(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/bear/account#/upgrade?notice=no_data&v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
});
tunnelbear.background.api.low_account = (function low_account(){
var str_confirmed = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emailConfirmed","emailConfirmed",176205617)], null));
if(cljs.core._EQ_.call(null,str_confirmed,"1")){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/bear/account#/upgrade?notice=low_data&v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
} else {
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/bear/account#/upgrade?notice=confirm_email&v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
}
});
tunnelbear.background.api.update_account = (function update_account(){
var str_confirmed = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emailConfirmed","emailConfirmed",176205617)], null));
if(cljs.core._EQ_.call(null,str_confirmed,"1")){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/bear/account#/upgrade?v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
} else {
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/bear/account#/upgrade?notice=confirm_email&v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
}
});
tunnelbear.background.api.help = (function help(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),tunnelbear.background.api.tbear_help_url], null)));
});
tunnelbear.background.api.open_account = (function open_account(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/bear/account#/overview")].join('')], null)));
});
tunnelbear.background.api.open_feedback = (function open_feedback(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/support/contact.html")].join('')], null)));
});
tunnelbear.background.api.review = (function review(){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"OPERA","OPERA",802242835),tunnelbear.common.utils.get_browser)){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"https://addons.opera.com/extensions/details/tunnelbear/"], null)));
} else {
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("https://chrome.google.com/webstore/detail/tunnelbear/"),cljs.core.str(chrome.runtime.id),cljs.core.str("/reviews")].join('')], null)));
}
});
tunnelbear.background.api.extensions = (function extensions(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("chrome://extensions/?id="),cljs.core.str(chrome.runtime.id)].join('')], null)));
});
tunnelbear.background.api.privacy = (function privacy(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/privacy-policy")].join('')], null)));
});
tunnelbear.background.api.open_twitter = (function open_twitter(){
var tweet = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"templateTweet","templateTweet",-1349921726)], null));
var url = "https://twitter.com/intent/tweet?text=";
return chrome.tabs.update(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(url),cljs.core.str(tweet)].join('')], null)));
});
tunnelbear.background.api.tweet = (function tweet(){
return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/bear/account#/twitter")].join('')], null)));
});
tunnelbear.background.api.logout = (function logout(){
cljs.core.reset_BANG_.call(null,tunnelbear.background.api.reg_response,null);

return ajax.core.POST.call(null,[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/core/api/logout")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
chrome.storage.local.clear();

return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/bear/account#/login?v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
})()
], null));
});
tunnelbear.background.api.error_handler = (function error_handler(p__23911){
var map__23913 = p__23911;
var map__23913__$1 = ((cljs.core.seq_QMARK_.call(null,map__23913))?cljs.core.apply.call(null,cljs.core.hash_map,map__23913):map__23913);
var status_text = cljs.core.get.call(null,map__23913__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var status = cljs.core.get.call(null,map__23913__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),[cljs.core.str("Register Error: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));

if(cljs.core._EQ_.call(null,(403),status)){
tunnelbear.background.core.toggle_off.call(null);

tunnelbear.background.core.close_popup.call(null);

return chrome.tabs.create(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/bear/account#/signup?v="),cljs.core.str(tunnelbear.background.api.version)].join('')], null)));
} else {
return null;
}
});
tunnelbear.background.api.register_ignore_errors = (function register_ignore_errors(country,handler){
tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("register ignoring errors "),cljs.core.str(country),cljs.core.str(" "),cljs.core.str(cljs.core.deref.call(null,tunnelbear.background.api.deviceId))].join(''));

return tunnelbear.common.ajax_helper.post.call(null,[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/core/api/register")].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 5, ["json","1","v",tunnelbear.background.api.version,"country",country,"deviceId",cljs.core.deref.call(null,tunnelbear.background.api.deviceId),"getToken",false], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(((handler == null))?tunnelbear.background.api.persist_response:cljs.core.comp.call(null,handler,tunnelbear.background.api.persist_response)),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),null], null));
});
tunnelbear.background.api.register = (function register(getToken,country,handler){
tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("register params "),cljs.core.str(tunnelbear.background.api.version),cljs.core.str(" "),cljs.core.str(country),cljs.core.str(" "),cljs.core.str(cljs.core.deref.call(null,tunnelbear.background.api.deviceId))].join(''));

return tunnelbear.common.ajax_helper.post.call(null,[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/core/api/register")].join(''),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 5, ["json","1","v",tunnelbear.background.api.version,"country",country,"deviceId",cljs.core.deref.call(null,tunnelbear.background.api.deviceId),"getToken",getToken], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(((handler == null))?tunnelbear.background.api.persist_response:cljs.core.comp.call(null,handler,tunnelbear.background.api.persist_response)),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),tunnelbear.background.api.error_handler], null));
});
tunnelbear.background.api.location = (function location__$1(handler){
var c__7568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto__){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto__){
return (function (state_23950){
var state_val_23951 = (state_23950[(1)]);
if((state_val_23951 === (5))){
var inst_23942 = (state_23950[(7)]);
var inst_23947 = (state_23950[(2)]);
var inst_23948 = ajax.core.GET.call(null,inst_23942,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(3000),new cljs.core.Keyword(null,"handler","handler",-195596612),inst_23947);
var state_23950__$1 = state_23950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23950__$1,inst_23948);
} else {
if((state_val_23951 === (4))){
var state_23950__$1 = state_23950;
var statearr_23952_23964 = state_23950__$1;
(statearr_23952_23964[(2)] = handler);

(statearr_23952_23964[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (3))){
var state_23950__$1 = state_23950;
var statearr_23953_23965 = state_23950__$1;
(statearr_23953_23965[(2)] = null);

(statearr_23953_23965[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (2))){
var inst_23941 = (state_23950[(2)]);
var inst_23942 = [cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/core/bearsmyip/location")].join('');
var inst_23943 = (handler == null);
var state_23950__$1 = (function (){var statearr_23954 = state_23950;
(statearr_23954[(8)] = inst_23941);

(statearr_23954[(7)] = inst_23942);

return statearr_23954;
})();
if(cljs.core.truth_(inst_23943)){
var statearr_23955_23966 = state_23950__$1;
(statearr_23955_23966[(1)] = (3));

} else {
var statearr_23956_23967 = state_23950__$1;
(statearr_23956_23967[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23951 === (1))){
var inst_23939 = cljs.core.async.timeout.call(null,(200));
var state_23950__$1 = state_23950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23950__$1,(2),inst_23939);
} else {
return null;
}
}
}
}
}
});})(c__7568__auto__))
;
return ((function (switch__7553__auto__,c__7568__auto__){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_23960 = [null,null,null,null,null,null,null,null,null];
(statearr_23960[(0)] = state_machine__7554__auto__);

(statearr_23960[(1)] = (1));

return statearr_23960;
});
var state_machine__7554__auto____1 = (function (state_23950){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_23950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e23961){if((e23961 instanceof Object)){
var ex__7557__auto__ = e23961;
var statearr_23962_23968 = state_23950;
(statearr_23962_23968[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23969 = state_23950;
state_23950 = G__23969;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_23950){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_23950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto__))
})();
var state__7570__auto__ = (function (){var statearr_23963 = f__7569__auto__.call(null);
(statearr_23963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto__);

return statearr_23963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto__))
);

return c__7568__auto__;
});
tunnelbear.background.api.clear_token_callbacks = (function clear_token_callbacks(){
return cljs.core.reset_BANG_.call(null,tunnelbear.background.api.token_callbacks,cljs.core.PersistentVector.EMPTY);
});
cljs.core.add_watch.call(null,tunnelbear.background.api.token_callbacks,new cljs.core.Keyword(null,"token-request-watcher","token-request-watcher",-1643875538),(function (k,r,old_state,new_state){
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,old_state),(0))) && ((cljs.core.count.call(null,new_state) > (0)))){
return tunnelbear.background.api.register.call(null,true,(0),(function (response){
var res = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,response));
var success = cljs.core.get.call(null,res,new cljs.core.Keyword(null,"status","status",-1997798413));
var token = cljs.core.get.call(null,res,new cljs.core.Keyword(null,"vpnToken","vpnToken",1236035178));
var dataAllowed = cljs.core.get.call(null,res,new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502));
var message = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(res);
tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("Regresponse:"),cljs.core.str(success),cljs.core.str("token:"),cljs.core.str(token)].join(''));

var seq__23970_23974 = cljs.core.seq.call(null,cljs.core.deref.call(null,tunnelbear.background.api.token_callbacks));
var chunk__23971_23975 = null;
var count__23972_23976 = (0);
var i__23973_23977 = (0);
while(true){
if((i__23973_23977 < count__23972_23976)){
var callback_23978 = cljs.core._nth.call(null,chunk__23971_23975,i__23973_23977);
callback_23978.call(null,((((0) > dataAllowed))?"No data left":((cljs.core._EQ_.call(null,"OK",success))?null:message
)),token);

var G__23979 = seq__23970_23974;
var G__23980 = chunk__23971_23975;
var G__23981 = count__23972_23976;
var G__23982 = (i__23973_23977 + (1));
seq__23970_23974 = G__23979;
chunk__23971_23975 = G__23980;
count__23972_23976 = G__23981;
i__23973_23977 = G__23982;
continue;
} else {
var temp__4126__auto___23983 = cljs.core.seq.call(null,seq__23970_23974);
if(temp__4126__auto___23983){
var seq__23970_23984__$1 = temp__4126__auto___23983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23970_23984__$1)){
var c__4768__auto___23985 = cljs.core.chunk_first.call(null,seq__23970_23984__$1);
var G__23986 = cljs.core.chunk_rest.call(null,seq__23970_23984__$1);
var G__23987 = c__4768__auto___23985;
var G__23988 = cljs.core.count.call(null,c__4768__auto___23985);
var G__23989 = (0);
seq__23970_23974 = G__23986;
chunk__23971_23975 = G__23987;
count__23972_23976 = G__23988;
i__23973_23977 = G__23989;
continue;
} else {
var callback_23990 = cljs.core.first.call(null,seq__23970_23984__$1);
callback_23990.call(null,((((0) > dataAllowed))?"No data left":((cljs.core._EQ_.call(null,"OK",success))?null:message
)),token);

var G__23991 = cljs.core.next.call(null,seq__23970_23984__$1);
var G__23992 = null;
var G__23993 = (0);
var G__23994 = (0);
seq__23970_23974 = G__23991;
chunk__23971_23975 = G__23992;
count__23972_23976 = G__23993;
i__23973_23977 = G__23994;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,tunnelbear.background.api.token_callbacks,cljs.core.PersistentVector.EMPTY);
}));
} else {
return null;
}
}));
tunnelbear.background.api.getToken = (function getToken(handler){
tunnelbear.background.api.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"getToken");

return cljs.core.swap_BANG_.call(null,tunnelbear.background.api.token_callbacks,(function (p1__23995_SHARP_){
return cljs.core.conj.call(null,p1__23995_SHARP_,handler);
}));
});
tunnelbear.background.api.send_feedback = (function send_feedback(){
return tunnelbear.common.logger.get_logs.call(null,(function (background){
var form_data = (function (){var G__23997 = (new FormData());
G__23997.append("v",tunnelbear.background.api.version);

G__23997.append("feedback","");

G__23997.append("data",background);

return G__23997;
})();
return ajax.core.POST.call(null,[cljs.core.str(tunnelbear.background.api.tbear_base_url),cljs.core.str("/core/api/uploadLogsText")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),form_data,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(2000)], null));
}));
});
chrome.storage.local.get("deviceId",(function (result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"deviceId","deviceId",1909987208).cljs$core$IFn$_invoke$arity$1(result))){
return cljs.core.reset_BANG_.call(null,tunnelbear.background.api.deviceId,new cljs.core.Keyword(null,"deviceId","deviceId",1909987208).cljs$core$IFn$_invoke$arity$1(result));
} else {
cljs.core.reset_BANG_.call(null,tunnelbear.background.api.deviceId,tunnelbear.background.api.uuid.call(null));

return chrome.storage.local.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deviceId","deviceId",1909987208),cljs.core.deref.call(null,tunnelbear.background.api.deviceId)], null)));
}
}));
