// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.common.ports');
goog.require('cljs.core');
goog.require('tunnelbear.common.logger');
goog.require('clojure.string');
goog.require('clojure.walk');
tunnelbear.common.ports.log = (function log(level,param){
return tunnelbear.common.logger.log.call(null,level,[cljs.core.str("[Common- Ports] "),cljs.core.str(param)].join(''));
});
tunnelbear.common.ports.ports = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.common.ports.listeners = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.common.ports.persistent_QMARK_ = cljs.core.atom.call(null,false);
tunnelbear.common.ports.init = (function init(persist_QMARK_){
return cljs.core.reset_BANG_.call(null,tunnelbear.common.ports.persistent_QMARK_,persist_QMARK_);
});
tunnelbear.common.ports.send_message = (function send_message(port_name,msg){
var port = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.common.ports.ports),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [port_name], null));
if(!((port == null))){
return port.postMessage(cljs.core.clj__GT_js.call(null,msg));
} else {
return null;
}
});
tunnelbear.common.ports.setup = (function setup(port_name,callback){
var port = chrome.runtime.connect(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),port_name], null)));
cljs.core.swap_BANG_.call(null,tunnelbear.common.ports.ports,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [port_name], null),port);

return port.onMessage.addListener(((function (port){
return (function (p1__21024_SHARP_){
return callback.call(null,p1__21024_SHARP_);
});})(port))
);
});
tunnelbear.common.ports.disconnect_handler = (function disconnect_handler(port_name){
return cljs.core.swap_BANG_.call(null,tunnelbear.common.ports.ports,cljs.core.dissoc,port_name);
});
tunnelbear.common.ports.subscribe_to = (function subscribe_to(port_name,callback){
return cljs.core.swap_BANG_.call(null,tunnelbear.common.ports.listeners,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [port_name], null),callback);
});
tunnelbear.common.ports.message_handler = (function message_handler(port_name,m){
var listener = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.common.ports.listeners),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [port_name], null));
var msg = cljs.core.js__GT_clj.call(null,m);
tunnelbear.common.ports.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("["),cljs.core.str([cljs.core.str(port_name)].join('')),cljs.core.str("] got message: "),cljs.core.str(msg)].join(''));

if(!((listener == null))){
return listener.call(null,port_name,msg);
} else {
return null;
}
});
chrome.runtime.onConnect.addListener((function (port){
var port_name = cljs.core.keyword.call(null,port.name);
if(cljs.core.truth_(cljs.core.deref.call(null,tunnelbear.common.ports.persistent_QMARK_))){
tunnelbear.common.ports.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("got port: "),cljs.core.str(port_name)].join(''));

cljs.core.swap_BANG_.call(null,tunnelbear.common.ports.ports,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [port_name], null),port);

port.onDisconnect.addListener(((function (port_name){
return (function (){
return tunnelbear.common.ports.disconnect_handler.call(null,port_name);
});})(port_name))
);

return port.onMessage.addListener(((function (port_name){
return (function (msg){
return tunnelbear.common.ports.message_handler.call(null,port_name,msg);
});})(port_name))
);
} else {
return null;
}
}));
