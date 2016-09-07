// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.background.core');
goog.require('cljs.core');
goog.require('goog.Timer');
goog.require('tunnelbear.common.ports');
goog.require('weasel.repl');
goog.require('tunnelbear.common.utils');
goog.require('tunnelbear.background.api');
goog.require('tunnelbear.background.chrome');
goog.require('cljs.core.async');
goog.require('tunnelbear.common.logger');
goog.require('clojure.set');
goog.require('tunnelbear.background.proxy');
goog.require('goog.events');
goog.require('tunnelbear.background.cleanup_job');
goog.require('cemerick.url');
goog.require('clojure.walk');
cljs.core.enable_console_print_BANG_.call(null);
tunnelbear.background.core.server_rotated_time = cljs.core.atom.call(null,(new Date()).getTime());
tunnelbear.background.core.proxy_timer = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.background.core.log = (function log(level,param){
return tunnelbear.common.logger.log.call(null,level,[cljs.core.str("[Background - Core] "),cljs.core.str(param)].join(''));
});
tunnelbear.common.ports.init.call(null,true);
tunnelbear.common.logger.init.call(null,"Background");
tunnelbear.background.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"App Started");
tunnelbear.background.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"country","country",312965309),(0),new cljs.core.Keyword(null,"permissions","permissions",67803075),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"details","details",1956795411),""], null)], null),new cljs.core.Keyword(null,"last-location","last-location",-1383589462),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"latitude","latitude",394867543),(0),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),(0),new cljs.core.Keyword(null,"city","city",-393302614),"",new cljs.core.Keyword(null,"country-name","country-name",942618712),""], null),new cljs.core.Keyword(null,"last-servers","last-servers",-1906898570),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"toggled","toggled",1679391819),false,new cljs.core.Keyword(null,"show-twitter","show-twitter",-1311018027),true], null));
cljs.core.add_watch.call(null,tunnelbear.background.core.app_state,new cljs.core.Keyword(null,"app-watcher","app-watcher",-811341023),(function (k,r,old_state,new_state){
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),new_state);
}));
tunnelbear.background.core.get_country = (function get_country(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.Keyword(null,"country","country",312965309)], null));
});
tunnelbear.background.core.get_servers = (function get_servers(){
return cljs.core.map.call(null,(function (p1__24076_SHARP_){
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(p1__24076_SHARP_);
}),cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vpnServers","vpnServers",709330713)], null)));
});
tunnelbear.background.core.update_proxy_all = (function update_proxy_all(){
var servers = tunnelbear.background.core.get_servers.call(null);
cljs.core.swap_BANG_.call(null,tunnelbear.background.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-servers","last-servers",-1906898570)], null),servers);

if((cljs.core.count.call(null,servers) > (0))){
return tunnelbear.background.proxy.proxy_all.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null)),servers);
} else {
return tunnelbear.background.core.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),"empty list of servers");
}
});
tunnelbear.background.core.should_rotate = (function should_rotate(){
var hour = (((60) * (60)) * (1000));
var interval = ((3) * hour);
if((((new Date()).getTime() - cljs.core.deref.call(null,tunnelbear.background.core.server_rotated_time)) >= interval)){
return true;
} else {
return false;
}
});
tunnelbear.background.core.get_background_servers = (function get_background_servers(){
var last_servers = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-servers","last-servers",-1906898570)], null));
var reg_servers = tunnelbear.background.core.get_servers.call(null);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,last_servers),(0))){
cljs.core.swap_BANG_.call(null,tunnelbear.background.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-servers","last-servers",-1906898570)], null),reg_servers);
} else {
}

if((cljs.core._EQ_.call(null,tunnelbear.background.core.should_rotate.call(null),true)) && ((cljs.core.count.call(null,reg_servers) > (0)))){
tunnelbear.background.core.log.call(null,new cljs.core.Keyword(null,"INFO","INFO",-1061657090),"---Rotating servers ---");

cljs.core.reset_BANG_.call(null,tunnelbear.background.core.server_rotated_time,(new Date()).getTime());

cljs.core.swap_BANG_.call(null,tunnelbear.background.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-servers","last-servers",-1906898570)], null),reg_servers);
} else {
}

return cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-servers","last-servers",-1906898570)], null));
});
tunnelbear.background.core.proxy_timer_callback = (function proxy_timer_callback(){
var toggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
if(cljs.core.truth_(toggled_QMARK_)){
var servers = tunnelbear.background.core.get_background_servers.call(null);
if((cljs.core.count.call(null,servers) > (0))){
return tunnelbear.background.proxy.proxy_all.call(null,toggled_QMARK_,servers);
} else {
tunnelbear.background.core.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),"Timer: empty list of servers");

return tunnelbear.background.api.register.call(null,false,tunnelbear.background.core.get_country.call(null),null);
}
} else {
return null;
}
});
tunnelbear.background.core.start_proxy_timer = (function start_proxy_timer(){
cljs.core.reset_BANG_.call(null,tunnelbear.background.core.proxy_timer,(new goog.Timer((2000))));

cljs.core.deref.call(null,tunnelbear.background.core.proxy_timer).start();

return goog.events.listen(cljs.core.deref.call(null,tunnelbear.background.core.proxy_timer),goog.Timer.TICK,tunnelbear.background.core.proxy_timer_callback);
});
/**
* handler with boolean result whether or not app-state changed and should be sent to subscribers
*/
tunnelbear.background.core.eval_proxy = (function eval_proxy(handler){
return tunnelbear.background.proxy.eval_proxy.call(null,(function (result){
if(cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.Keyword(null,"permissions","permissions",67803075),new cljs.core.Keyword(null,"error","error",-978969032)], null)),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.swap_BANG_.call(null,tunnelbear.background.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.Keyword(null,"permissions","permissions",67803075)], null),result);

return handler.call(null,true);
} else {
return handler.call(null,false);
}
}));
});
tunnelbear.background.core.api_location = (function api_location(){
return tunnelbear.background.api.location.call(null,(function (response){
tunnelbear.background.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"[API/LOCATION] response");

tunnelbear.background.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),response);

if((cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"connected","connected",-169833045)], null)) == null)){
cljs.core.swap_BANG_.call(null,tunnelbear.background.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.Keyword(null,"last-location","last-location",-1383589462)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"latitude","latitude",394867543),cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"latitude","latitude",394867543)], null)),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"longitude","longitude",-1268876372)], null)),new cljs.core.Keyword(null,"city","city",-393302614),cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"city","city",-393302614)], null)),new cljs.core.Keyword(null,"country-name","country-name",942618712),cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countryName","countryName",-760891250)], null))], null));
} else {
}

return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response","response",-1068424192),response,new cljs.core.Keyword(null,"last-location","last-location",-1383589462),cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.Keyword(null,"last-location","last-location",-1383589462)], null))], null));
}));
});
tunnelbear.background.core.send_current_location = (function send_current_location(){
var toggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
var countries = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countryInfo","countryInfo",1799601066)], null));
var selected_country = cljs.core.first.call(null,cljs.core.filter.call(null,((function (toggled_QMARK_,countries){
return (function (p1__24077_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(p1__24077_SHARP_),tunnelbear.background.core.get_country.call(null));
});})(toggled_QMARK_,countries))
,countries));
var connected_lat = cljs.core.get_in.call(null,selected_country,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lat","lat",-580793929)], null));
var connected_lon = cljs.core.get_in.call(null,selected_country,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lon","lon",522068437)], null));
if((selected_country == null)){
return tunnelbear.background.api.register.call(null,false,tunnelbear.background.core.get_country.call(null),((function (toggled_QMARK_,countries,selected_country,connected_lat,connected_lon){
return (function (){
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"register","register",1968522516),cljs.core.deref.call(null,tunnelbear.background.api.reg_response));
});})(toggled_QMARK_,countries,selected_country,connected_lat,connected_lon))
);
} else {
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"connected","connected",-169833045),(cljs.core.truth_(toggled_QMARK_)?(1):(0)),new cljs.core.Keyword(null,"latitude","latitude",394867543),connected_lat,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),connected_lon], null),new cljs.core.Keyword(null,"last-location","last-location",-1383589462),cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.Keyword(null,"last-location","last-location",-1383589462)], null))], null));
}
});
tunnelbear.background.core.get_location = (function get_location(){
var lat = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.Keyword(null,"last-location","last-location",-1383589462),new cljs.core.Keyword(null,"latitude","latitude",394867543)], null));
var lon = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.Keyword(null,"last-location","last-location",-1383589462),new cljs.core.Keyword(null,"longitude","longitude",-1268876372)], null));
var toggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
if((cljs.core._EQ_.call(null,lat,(0))) && (cljs.core._EQ_.call(null,lon,(0)))){
return tunnelbear.background.core.api_location.call(null);
} else {
if(cljs.core.truth_(toggled_QMARK_)){
return tunnelbear.background.core.send_current_location.call(null);
} else {
return tunnelbear.background.core.api_location.call(null);
}
}
});
tunnelbear.background.core.close_twitter = (function close_twitter(){
cljs.core.swap_BANG_.call(null,tunnelbear.background.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-twitter","show-twitter",-1311018027)], null),false);

tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),cljs.core.deref.call(null,tunnelbear.background.core.app_state));

tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"register","register",1968522516),cljs.core.deref.call(null,tunnelbear.background.api.reg_response));

return tunnelbear.common.utils.storage_set.call(null,"twitter",(new Date()).getTime());
});
tunnelbear.background.core.port_callback = (function port_callback(port_name,msg){
var G__24080 = (((port_name instanceof cljs.core.Keyword))?port_name.fqn:null);
switch (G__24080) {
case "settings":
var G__24081 = msg;
switch (G__24081) {
case "update":
return tunnelbear.background.api.update_account.call(null);

break;
case "help":
return tunnelbear.background.api.help.call(null);

break;
case "account":
return tunnelbear.background.api.open_account.call(null);

break;
case "review":
return tunnelbear.background.api.review.call(null);

break;
case "privacy":
return tunnelbear.background.api.privacy.call(null);

break;
case "logout":
tunnelbear.background.api.logout.call(null);

return tunnelbear.background.chrome.logout.call(null);

break;
case "extensions":
return tunnelbear.background.api.extensions.call(null);

break;
case "feedback":
return cljs.core.comp.call(null,tunnelbear.background.api.send_feedback.call(null),tunnelbear.background.api.open_feedback.call(null));

break;
case "close-twitter":
return tunnelbear.background.core.close_twitter.call(null);

break;
case "tweet-now":
return tunnelbear.background.api.tweet.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(msg)].join('')));

}

break;
case "review":
if(cljs.core.some_QMARK_.call(null,cljs.core.deref.call(null,tunnelbear.background.api.reg_response))){
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"review","review",1101692435),cljs.core.deref.call(null,tunnelbear.background.api.reg_response));
} else {
return null;
}

break;
case "update":
return tunnelbear.background.api.update_account.call(null);

break;
case "register":
tunnelbear.background.core.get_location.call(null);

return tunnelbear.background.api.register.call(null,false,tunnelbear.background.core.get_country.call(null),((function (G__24080){
return (function (){
tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"register","register",1968522516),cljs.core.deref.call(null,tunnelbear.background.api.reg_response));

return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"review","review",1101692435),cljs.core.deref.call(null,tunnelbear.background.api.reg_response));
});})(G__24080))
);

break;
case "app-state":
tunnelbear.background.core.eval_proxy.call(null,((function (G__24080){
return (function (result){
return result;

});})(G__24080))
);

tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),cljs.core.deref.call(null,tunnelbear.background.core.app_state));

return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"register","register",1968522516),cljs.core.deref.call(null,tunnelbear.background.api.reg_response));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(port_name)].join('')));

}
});
tunnelbear.common.ports.subscribe_to.call(null,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),tunnelbear.background.core.port_callback);
tunnelbear.common.ports.subscribe_to.call(null,new cljs.core.Keyword(null,"register","register",1968522516),tunnelbear.background.core.port_callback);
tunnelbear.common.ports.subscribe_to.call(null,new cljs.core.Keyword(null,"update","update",1045576396),tunnelbear.background.core.port_callback);
tunnelbear.common.ports.subscribe_to.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),tunnelbear.background.core.port_callback);
tunnelbear.common.ports.subscribe_to.call(null,new cljs.core.Keyword(null,"review","review",1101692435),tunnelbear.background.core.port_callback);
tunnelbear.background.core.proxy_stale_timeout = (60000);
tunnelbear.background.core.persist_toggle = (function persist_toggle(state){
tunnelbear.background.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"persisting state");

chrome.storage.local.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"isToggled","isToggled",724650957),state], null)));

return chrome.storage.local.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lastCountry","lastCountry",-93513002),tunnelbear.background.core.get_country.call(null)], null)));
});
tunnelbear.background.core.toggle_country_param = (function toggle_country_param(country){
tunnelbear.background.api.register.call(null,false,country,(function (){
tunnelbear.background.core.update_proxy_all.call(null);

return tunnelbear.background.core.get_location.call(null);
}));

cljs.core.swap_BANG_.call(null,tunnelbear.background.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.Keyword(null,"country","country",312965309)], null),country);

return tunnelbear.background.core.persist_toggle.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null)));
});
tunnelbear.background.core.disconnect_proxy = (function disconnect_proxy(){
return tunnelbear.background.proxy.reset_proxy.call(null);
});
tunnelbear.background.core.toggle_all = (function toggle_all(){
tunnelbear.background.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"[Background - Core] toggle-all");

cljs.core.swap_BANG_.call(null,tunnelbear.background.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null),(function (p1__24084_SHARP_){
return cljs.core.not.call(null,p1__24084_SHARP_);
}));

tunnelbear.background.core.persist_toggle.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null)));

tunnelbear.background.core.update_proxy_all.call(null);

return tunnelbear.background.core.get_location.call(null);
});
tunnelbear.background.core.toggle_off = (function toggle_off(){
var toggled_QMARK__24085 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
if(cljs.core._EQ_.call(null,true,toggled_QMARK__24085)){
tunnelbear.background.chrome.toggle_icon.call(null,false);

tunnelbear.background.core.toggle_all.call(null);
} else {
}

return tunnelbear.background.core.disconnect_proxy.call(null);
});
tunnelbear.background.core.close_popup = (function close_popup(){
return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"close");
});
cljs.core.add_watch.call(null,tunnelbear.background.api.reg_response,new cljs.core.Keyword(null,"reg-watcher-core","reg-watcher-core",-1867887858),(function (k,r,old_state,new_state){
var response = clojure.walk.keywordize_keys.call(null,new_state);
tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"register","register",1968522516),cljs.core.deref.call(null,tunnelbear.background.api.reg_response));

if((new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502).cljs$core$IFn$_invoke$arity$1(response) < (0))){
tunnelbear.background.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"No data left");
} else {
}

if(cljs.core.not_EQ_.call(null,"OK",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))){
return tunnelbear.background.core.log.call(null,new cljs.core.Keyword(null,"WARN","WARN",-1091130621),[cljs.core.str("Registration failure:"),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(response)),cljs.core.str("disabling proxy")].join(''));
} else {
return null;
}
}));
tunnelbear.background.chrome.register_listeners.call(null,tunnelbear.background.core.toggle_all,tunnelbear.background.core.toggle_country_param,tunnelbear.background.core.disconnect_proxy);
tunnelbear.background.core.start_proxy_timer.call(null);
chrome.storage.local.get("lastCountry",(function (result){
var country = new cljs.core.Keyword(null,"lastCountry","lastCountry",-93513002).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var toggled_QMARK_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.background.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggled","toggled",1679391819)], null));
tunnelbear.background.core.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("lastCountry loaded is "),cljs.core.str(country)].join(''));

if(!((country == null))){
if(cljs.core._EQ_.call(null,toggled_QMARK_,true)){
return tunnelbear.background.core.toggle_country_param.call(null,country);
} else {
return cljs.core.swap_BANG_.call(null,tunnelbear.background.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chrome","chrome",1718738387),new cljs.core.Keyword(null,"country","country",312965309)], null),country);
}
} else {
return null;
}
}));
tunnelbear.common.utils.storage_get.call(null,"twitter",(function (result){
var twitter_last_time = new cljs.core.Keyword(null,"twitter","twitter",-589267671).cljs$core$IFn$_invoke$arity$1(result);
var current_date = (new Date()).getTime();
var diff = (current_date - twitter_last_time);
var diff_seconds = (diff / (1000));
var two_days_seconds = (((48) * (60)) * (60));
if((result == null)){
return null;
} else {
if((two_days_seconds > diff_seconds)){
return cljs.core.swap_BANG_.call(null,tunnelbear.background.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-twitter","show-twitter",-1311018027)], null),false);
} else {
return null;
}
}
}));
