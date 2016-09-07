// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.common.logger');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
tunnelbear.common.logger.log_levels = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),new cljs.core.Keyword(null,"INFO","INFO",-1061657090),new cljs.core.Keyword(null,"WARN","WARN",-1091130621)], null);
tunnelbear.common.logger.log_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621));
tunnelbear.common.logger.ports = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.common.logger.pending_writes = cljs.core.atom.call(null,(0));
tunnelbear.common.logger.pending_lines = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tunnelbear.common.logger.process = cljs.core.atom.call(null,"");
tunnelbear.common.logger.add_listener = (function add_listener(){
return chrome.storage.onChanged.addListener((function (ch,nsp){
var level_change = new cljs.core.Keyword(null,"newValue","newValue",1677041272).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,ch,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
if(cljs.core.not_EQ_.call(null,null,level_change)){
console.log([cljs.core.str("[Diagnostics] level-changed: "),cljs.core.str(level_change)].join(''));

return cljs.core.reset_BANG_.call(null,tunnelbear.common.logger.log_level,cljs.core.keyword.call(null,level_change));
} else {
return null;
}
}));
});
tunnelbear.common.logger.trim_diagnostics = (function trim_diagnostics(diagnostics){
if(cljs.core.truth_(diagnostics)){
var entries = cljs.core.count.call(null,cljs.core.re_seq.call(null,/\n/,diagnostics));
var trimmed_diagnostics = (((entries > (100)))?clojure.string.replace_first.call(null,diagnostics,/(.*\n){50}/,""):diagnostics);
return trimmed_diagnostics;
} else {
return "";
}
});
tunnelbear.common.logger.append_storage = (function append_storage(lines,handler){
var diag_str = [cljs.core.str("diagnostics"),cljs.core.str(cljs.core.deref.call(null,tunnelbear.common.logger.process))].join('');
var diag_key = cljs.core.keyword.call(null,diag_str);
return chrome.storage.local.get(diag_str,((function (diag_str,diag_key){
return (function (result){
var diagnostics = tunnelbear.common.logger.trim_diagnostics.call(null,diag_key.call(null,cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
var new_lines = clojure.string.join.call(null,lines);
var newDiagnostics = [cljs.core.str(diagnostics),cljs.core.str(new_lines)].join('');
return chrome.storage.local.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap.fromArray([diag_key,newDiagnostics], true, false)),((function (diagnostics,new_lines,newDiagnostics,diag_str,diag_key){
return (function (){
if(cljs.core.truth_(handler)){
return handler.call(null);
} else {
return null;
}
});})(diagnostics,new_lines,newDiagnostics,diag_str,diag_key))
);
});})(diag_str,diag_key))
);
});
tunnelbear.common.logger.log_storage = (function log_storage(msg){
cljs.core.reset_BANG_.call(null,tunnelbear.common.logger.pending_lines,cljs.core.conj.call(null,cljs.core.deref.call(null,tunnelbear.common.logger.pending_lines),[cljs.core.str(msg),cljs.core.str("\n")].join('')));

cljs.core.swap_BANG_.call(null,tunnelbear.common.logger.pending_writes,cljs.core.inc);

if((cljs.core.deref.call(null,tunnelbear.common.logger.pending_writes) >= (10))){
tunnelbear.common.logger.append_storage.call(null,clojure.string.join.call(null,cljs.core.deref.call(null,tunnelbear.common.logger.pending_lines)),null);

cljs.core.reset_BANG_.call(null,tunnelbear.common.logger.pending_writes,(0));

return cljs.core.reset_BANG_.call(null,tunnelbear.common.logger.pending_lines,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
tunnelbear.common.logger.log_console_warn = (function log_console_warn(msg){
return console.warn(msg);
});
tunnelbear.common.logger.log_console_info = (function log_console_info(msg){
return console.log(msg);
});
tunnelbear.common.logger.get_time_str = (function get_time_str(){
var current_time = cljs.core.js__GT_clj.call(null,(new Date()),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return [cljs.core.str(current_time.getHours()),cljs.core.str(":"),cljs.core.str(current_time.getMinutes()),cljs.core.str(":"),cljs.core.str(current_time.getSeconds())].join('');
});
tunnelbear.common.logger.log_outputs = (function log_outputs(level,msg){
var str_time = tunnelbear.common.logger.get_time_str.call(null);
var line = [cljs.core.str("[TB] "),cljs.core.str(level),cljs.core.str(" :"),cljs.core.str(str_time),cljs.core.str(" - "),cljs.core.str(cljs.core.clj__GT_js.call(null,msg))].join('');
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),level)){
tunnelbear.common.logger.log_console_warn.call(null,line);
} else {
tunnelbear.common.logger.log_console_info.call(null,line);
}

return tunnelbear.common.logger.log_storage.call(null,line);
});
tunnelbear.common.logger.init = (function init(src){
cljs.core.reset_BANG_.call(null,tunnelbear.common.logger.process,src);

return chrome.storage.local.get(new cljs.core.Keyword(null,"level","level",1290497552),(function (result){
var level = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
if(cljs.core.not_EQ_.call(null,null,level)){
return cljs.core.reset_BANG_.call(null,tunnelbear.common.logger.log_level,level);
} else {
return null;
}
}));
});
tunnelbear.common.logger.log = (function log(level,param){
var current_level = cljs.core.deref.call(null,tunnelbear.common.logger.log_level);
var shouldLog_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),level)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),current_level)) || ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),current_level)) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),level)));
if(shouldLog_QMARK_){
return tunnelbear.common.logger.log_outputs.call(null,level,param);
} else {
return null;
}
});
tunnelbear.common.logger.get_logs = (function get_logs(handler){
return tunnelbear.common.logger.append_storage.call(null,clojure.string.join.call(null,cljs.core.deref.call(null,tunnelbear.common.logger.pending_lines)),(function (){
return chrome.storage.local.get((function (result){
var storage = cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return handler.call(null,new cljs.core.Keyword(null,"diagnosticsBackground","diagnosticsBackground",1640836189).cljs$core$IFn$_invoke$arity$1(storage));
}));
}));
});
chrome.storage.local.get("level",(function (result){
var level_change = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
if(cljs.core.not_EQ_.call(null,null,level_change)){
return cljs.core.reset_BANG_.call(null,tunnelbear.common.logger.log_level,cljs.core.keyword.call(null,level_change));
} else {
return null;
}
}));
tunnelbear.common.logger.add_listener.call(null);
