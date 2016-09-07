// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.common.utils');
goog.require('cljs.core');
goog.require('tunnelbear.common.logger');
goog.require('clojure.string');
goog.require('clojure.walk');
tunnelbear.common.utils.log = (function log(level,param){
return tunnelbear.common.logger.log.call(null,level,[cljs.core.str("[Utils - Core] "),cljs.core.str(param)].join(''));
});
tunnelbear.common.utils.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
tunnelbear.common.utils.storage_get_all = (function storage_get_all(handler){
return chrome.storage.local.get((function (result){
if((handler == null)){
return null;
} else {
return handler.call(null,cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
}
}));
});
tunnelbear.common.utils.storage_get = (function storage_get(key_str,handler){
return chrome.storage.local.get(key_str,(function (result){
if(cljs.core.some_QMARK_.call(null,handler)){
return handler.call(null,cljs.core.js__GT_clj.call(null,result,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
} else {
return null;
}
}));
});
tunnelbear.common.utils.storage_set = (function storage_set(key_str,value){
return chrome.storage.local.set(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,key_str),value], true, false)));
});
tunnelbear.common.utils.get_browser = (((navigator.userAgent.indexOf("OPR") >= (0)))?new cljs.core.Keyword(null,"OPERA","OPERA",802242835):new cljs.core.Keyword(null,"CHROME","CHROME",-160225757));
tunnelbear.common.utils.get_browser_title = (function (){var G__21027 = (((tunnelbear.common.utils.get_browser instanceof cljs.core.Keyword))?tunnelbear.common.utils.get_browser.fqn:null);
switch (G__21027) {
case "CHROME":
return "Chrome";

break;
case "OPERA":
return "Opera";

break;
default:
return "Chrome";

}
})();
