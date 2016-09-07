// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.popup.utils');
goog.require('cljs.core');
goog.require('clojure.walk');
tunnelbear.popup.utils.observable = (function observable(val){
return ko.computed((function (){var state = ko.observable(cljs.core.clj__GT_js.call(null,val));
var obj10490 = {"read":((function (state){
return (function (){
return state.call(null);
});})(state))
,"write":((function (state){
return (function (new$){
var old = state.call(null);
if(cljs.core.not_EQ_.call(null,old,new$)){
return state.call(null,cljs.core.clj__GT_js.call(null,new$));
} else {
return null;
}
});})(state))
};
return obj10490;
})());
});
tunnelbear.popup.utils.observable_ref = (function observable_ref(r){
var state = ko.observable(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,r)));
cljs.core.add_watch.call(null,r,state,((function (state){
return (function (obs,r__$1,_,new$){
return obs.call(null,cljs.core.clj__GT_js.call(null,new$));
});})(state))
);

return state;
});
tunnelbear.popup.utils.get_icon = (function get_icon(icon){
var isRetina = window.devicePixelRatio;
var suffix = (((isRetina > (1)))?"2x.png":".png");
return [cljs.core.str("../images/"),cljs.core.str(icon),cljs.core.str(suffix)].join('');
});
