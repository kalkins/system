// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.common.ajax_helper');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('tunnelbear.common.logger');
goog.require('clojure.string');
goog.require('clojure.walk');
tunnelbear.common.ajax_helper.log_levels = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),new cljs.core.Keyword(null,"INFO","INFO",-1061657090),new cljs.core.Keyword(null,"WARN","WARN",-1091130621)], null);
tunnelbear.common.ajax_helper.log_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621));
tunnelbear.common.ajax_helper.rate_limit_count = (20);
tunnelbear.common.ajax_helper.rate_limit_expiry = (30);
tunnelbear.common.ajax_helper.max_nb_calls = (40);
tunnelbear.common.ajax_helper.log = (function log(level,param){
return tunnelbear.common.logger.log.call(null,level,[cljs.core.str("[ajaxhelper] "),cljs.core.str(param)].join(''));
});
tunnelbear.common.ajax_helper.last_calls = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tunnelbear.common.ajax_helper.inc_calls = (function inc_calls(call){
return cljs.core.reset_BANG_.call(null,tunnelbear.common.ajax_helper.last_calls,cljs.core.conj.call(null,cljs.core.deref.call(null,tunnelbear.common.ajax_helper.last_calls),new cljs.core.PersistentArrayMap.fromArray([call,(new Date()).getTime()], true, false)));
});
tunnelbear.common.ajax_helper.trim_calls = (function trim_calls(){
if((cljs.core.count.call(null,cljs.core.deref.call(null,tunnelbear.common.ajax_helper.last_calls)) > tunnelbear.common.ajax_helper.max_nb_calls)){
tunnelbear.common.ajax_helper.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"trimming calls ------- ");

return cljs.core.reset_BANG_.call(null,tunnelbear.common.ajax_helper.last_calls,cljs.core.drop.call(null,(1),cljs.core.deref.call(null,tunnelbear.common.ajax_helper.last_calls)));
} else {
return null;
}
});
tunnelbear.common.ajax_helper.is_recent_call_QMARK_ = (function is_recent_call_QMARK_(obj,call){
var k = cljs.core.first.call(null,cljs.core.keys.call(null,obj));
var same_key_QMARK_ = cljs.core._EQ_.call(null,call,k);
var diff_seconds = (((new Date()).getTime() - cljs.core.get.call(null,obj,k)) / (1000));
var is_recent_QMARK_ = (diff_seconds < tunnelbear.common.ajax_helper.rate_limit_expiry);
return (same_key_QMARK_) && (is_recent_QMARK_);
});
tunnelbear.common.ajax_helper.can_call_QMARK_ = (function can_call_QMARK_(call){
tunnelbear.common.ajax_helper.trim_calls.call(null);

var call_occurences = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__21019_SHARP_){
return tunnelbear.common.ajax_helper.is_recent_call_QMARK_.call(null,p1__21019_SHARP_,call);
}),cljs.core.deref.call(null,tunnelbear.common.ajax_helper.last_calls)));
tunnelbear.common.ajax_helper.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("call occurrences for "),cljs.core.str(call),cljs.core.str(" is : "),cljs.core.str(call_occurences)].join(''));

if((call_occurences > tunnelbear.common.ajax_helper.rate_limit_count)){
return false;
} else {
return true;
}
});
tunnelbear.common.ajax_helper.post = (function post(url,data){
tunnelbear.common.ajax_helper.inc_calls.call(null,url);

if(cljs.core._EQ_.call(null,tunnelbear.common.ajax_helper.can_call_QMARK_.call(null,url),true)){
tunnelbear.common.ajax_helper.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("call made to : "),cljs.core.str(url)].join(''));

return ajax.core.POST.call(null,url,data);
} else {
return tunnelbear.common.ajax_helper.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),[cljs.core.str("rate limiting call made to : "),cljs.core.str(url)].join(''));
}
});
