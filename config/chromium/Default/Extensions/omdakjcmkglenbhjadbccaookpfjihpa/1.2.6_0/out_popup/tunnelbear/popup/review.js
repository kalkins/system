// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.popup.review');
goog.require('cljs.core');
goog.require('tunnelbear.popup.utils');
goog.require('tunnelbear.common.ports');
goog.require('weasel.repl');
goog.require('tunnelbear.common.utils');
goog.require('cljs.core.async');
goog.require('tunnelbear.common.logger');
goog.require('cemerick.url');
goog.require('clojure.walk');
tunnelbear.popup.review.log = (function log(level,param){
return tunnelbear.common.logger.log.call(null,level,[cljs.core.str("[Review] "),cljs.core.str(param)].join(''));
});
tunnelbear.popup.review.view_model = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.popup.review.reg_response = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
tunnelbear.popup.review.view_states = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"HIDDEN","HIDDEN",-78816058),new cljs.core.Keyword(null,"NORMAL","NORMAL",438371611),new cljs.core.Keyword(null,"POSITVE","POSITVE",-556800467),new cljs.core.Keyword(null,"NEGATIVE","NEGATIVE",-1416493434)], null);
tunnelbear.popup.review.postpone_review = (function postpone_review(){
tunnelbear.popup.review.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"postpone review");

tunnelbear.common.utils.storage_set.call(null,"reviewPostpone",(new Date()).getTime());

return cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.review.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewState","viewState",156262881)], null)).call(null,new cljs.core.Keyword(null,"HIDDEN","HIDDEN",-78816058));
});
tunnelbear.popup.review.close_review = (function close_review(){
tunnelbear.popup.review.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"closing-review");

tunnelbear.common.utils.storage_set.call(null,"reviewClose",(new Date()).getTime());

return cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.review.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewState","viewState",156262881)], null)).call(null,new cljs.core.Keyword(null,"HIDDEN","HIDDEN",-78816058));
});
tunnelbear.popup.review.open_review = (function open_review(){
tunnelbear.popup.review.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"open-review");

return cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.review.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewState","viewState",156262881)], null)).call(null,new cljs.core.Keyword(null,"NORMAL","NORMAL",438371611));
});
tunnelbear.popup.review.open_pos_review = (function open_pos_review(){
tunnelbear.popup.review.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"open-pos-review");

return cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.review.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewState","viewState",156262881)], null)).call(null,new cljs.core.Keyword(null,"POSITIVE","POSITIVE",-1390402819));
});
tunnelbear.popup.review.open_neg_review = (function open_neg_review(){
tunnelbear.popup.review.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"open-neg-review");

return cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.review.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewState","viewState",156262881)], null)).call(null,new cljs.core.Keyword(null,"NEGATIVE","NEGATIVE",-1416493434));
});
tunnelbear.popup.review.open_chrome_store = (function open_chrome_store(){
tunnelbear.popup.review.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"open chrome-store");

tunnelbear.common.utils.storage_set.call(null,"review",(new Date()).getTime());

cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.review.view_model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewState","viewState",156262881)], null)).call(null,new cljs.core.Keyword(null,"HIDDEN","HIDDEN",-78816058));

return tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"review");
});
tunnelbear.popup.review.open_help = (function open_help(){
tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"settings","settings",1556144875),"feedback");

return tunnelbear.popup.review.close_review.call(null);
});
tunnelbear.popup.review.date_older_then_QMARK_ = (function date_older_then_QMARK_(date,days){
var current_date = (new Date()).getTime();
var days_to_ms = ((((days * (24)) * (60)) * (60)) * (1000));
var current_minus_days = (current_date - days_to_ms);
tunnelbear.popup.review.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("current-date "),cljs.core.str(current_date)].join(''));

tunnelbear.popup.review.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str(days),cljs.core.str(" day(s) to ms: "),cljs.core.str(days_to_ms)].join(''));

tunnelbear.popup.review.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("current-minus-days "),cljs.core.str(current_minus_days)].join(''));

tunnelbear.popup.review.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("date to compare "),cljs.core.str(date)].join(''));

if((current_minus_days > date)){
return true;
} else {
return false;
}
});
tunnelbear.popup.review.on_response_message = (function on_response_message(msg){
var reg = clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,msg));
return cljs.core.reset_BANG_.call(null,tunnelbear.popup.review.reg_response,reg);
});
tunnelbear.popup.review.data_criteria_QMARK_ = (function data_criteria_QMARK_(){
tunnelbear.popup.review.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),"data-criteria-100MB?");

var full_version_QMARK_ = ((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.review.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fullVersion","fullVersion",-192963474)], null)),"1"))?true:false);
var data_allowed = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.review.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataAllowed","dataAllowed",1188901502)], null));
var data_cap = cljs.core.get_in.call(null,cljs.core.deref.call(null,tunnelbear.popup.review.reg_response),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataCap","dataCap",-249970833)], null));
tunnelbear.popup.review.log.call(null,new cljs.core.Keyword(null,"DEBUG","DEBUG",-56433076),[cljs.core.str("fullversion "),cljs.core.str(full_version_QMARK_),cljs.core.str(" data-allowed "),cljs.core.str(data_allowed),cljs.core.str(" data-cap "),cljs.core.str(data_cap)].join(''));

if(((((data_cap - data_allowed) > (((100) * (1024)) * (1024)))) && ((((data_allowed / (1024)) / (1024)) > (100)))) || (cljs.core._EQ_.call(null,full_version_QMARK_,true))){
return true;
} else {
return false;
}
});
tunnelbear.popup.review.meets_review_criterias = (function meets_review_criterias(handler){
return tunnelbear.common.utils.storage_get_all.call(null,(function (result){
var install_date = new cljs.core.Keyword(null,"installed","installed",553977691).cljs$core$IFn$_invoke$arity$1(result);
var review_date = new cljs.core.Keyword(null,"review","review",1101692435).cljs$core$IFn$_invoke$arity$1(result);
var review_close = new cljs.core.Keyword(null,"reviewClose","reviewClose",-826242490).cljs$core$IFn$_invoke$arity$1(result);
var review_postpone = new cljs.core.Keyword(null,"reviewPostpone","reviewPostpone",-346436286).cljs$core$IFn$_invoke$arity$1(result);
if((cljs.core.some_QMARK_.call(null,review_date)) || (cljs.core.some_QMARK_.call(null,review_close))){
return handler.call(null,false);
} else {
if((review_postpone == null)){
if((tunnelbear.popup.review.date_older_then_QMARK_.call(null,install_date,(1))) && (tunnelbear.popup.review.data_criteria_QMARK_.call(null))){
return handler.call(null,true);
} else {
return handler.call(null,false);
}
} else {
if(tunnelbear.popup.review.date_older_then_QMARK_.call(null,review_postpone,(30))){
return handler.call(null,true);
} else {
return handler.call(null,false);
}
}
}
}));
});
tunnelbear.popup.review.check_review = (function check_review(handler){
return tunnelbear.popup.review.meets_review_criterias.call(null,(function (result_QMARK_){
return handler.call(null,result_QMARK_);
}));
});
tunnelbear.common.ports.setup.call(null,new cljs.core.Keyword(null,"review","review",1101692435),tunnelbear.popup.review.on_response_message);
tunnelbear.common.ports.send_message.call(null,new cljs.core.Keyword(null,"review","review",1101692435),"ping");
cljs.core.reset_BANG_.call(null,tunnelbear.popup.review.view_model,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"viewState","viewState",156262881),tunnelbear.popup.utils.observable.call(null,new cljs.core.Keyword(null,"HIDDEN","HIDDEN",-78816058)),new cljs.core.Keyword(null,"openPosReview","openPosReview",-1094334219),tunnelbear.popup.review.open_pos_review,new cljs.core.Keyword(null,"openNegReview","openNegReview",-260577253),tunnelbear.popup.review.open_neg_review,new cljs.core.Keyword(null,"openChromeStore","openChromeStore",-1736700157),tunnelbear.popup.review.open_chrome_store,new cljs.core.Keyword(null,"postponeReview","postponeReview",-1692263175),tunnelbear.popup.review.postpone_review,new cljs.core.Keyword(null,"closeReview","closeReview",-1939907453),tunnelbear.popup.review.close_review,new cljs.core.Keyword(null,"openHelp","openHelp",494804756),tunnelbear.popup.review.open_help,new cljs.core.Keyword(null,"reviewQuestion","reviewQuestion",298057633),[cljs.core.str("How about a quick rating on the "),cljs.core.str(tunnelbear.common.utils.get_browser_title),cljs.core.str(" Store?")].join('')], null));
