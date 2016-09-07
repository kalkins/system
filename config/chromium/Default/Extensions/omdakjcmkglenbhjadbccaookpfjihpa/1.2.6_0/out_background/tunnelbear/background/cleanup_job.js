// Compiled by ClojureScript 0.0-2913 {}
goog.provide('tunnelbear.background.cleanup_job');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cemerick.url');
goog.require('clojure.set');
goog.require('weasel.repl');
tunnelbear.background.cleanup_job.start = (function start(remove_url_callback){
var c__7568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto__){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto__){
return (function (state_24052){
var state_val_24053 = (state_24052[(1)]);
if((state_val_24053 === (4))){
var inst_24046 = (state_24052[(2)]);
var inst_24047 = remove_url_callback.call(null);
var state_24052__$1 = (function (){var statearr_24054 = state_24052;
(statearr_24054[(7)] = inst_24046);

(statearr_24054[(8)] = inst_24047);

return statearr_24054;
})();
var statearr_24055_24064 = state_24052__$1;
(statearr_24055_24064[(2)] = null);

(statearr_24055_24064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24053 === (3))){
var inst_24050 = (state_24052[(2)]);
var state_24052__$1 = state_24052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24052__$1,inst_24050);
} else {
if((state_val_24053 === (2))){
var inst_24044 = cljs.core.async.timeout.call(null,(10000));
var state_24052__$1 = state_24052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24052__$1,(4),inst_24044);
} else {
if((state_val_24053 === (1))){
var state_24052__$1 = state_24052;
var statearr_24056_24065 = state_24052__$1;
(statearr_24056_24065[(2)] = null);

(statearr_24056_24065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
var statearr_24060 = [null,null,null,null,null,null,null,null,null];
(statearr_24060[(0)] = state_machine__7554__auto__);

(statearr_24060[(1)] = (1));

return statearr_24060;
});
var state_machine__7554__auto____1 = (function (state_24052){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_24052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e24061){if((e24061 instanceof Object)){
var ex__7557__auto__ = e24061;
var statearr_24062_24066 = state_24052;
(statearr_24062_24066[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24067 = state_24052;
state_24052 = G__24067;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_24052){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_24052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto__))
})();
var state__7570__auto__ = (function (){var statearr_24063 = f__7569__auto__.call(null);
(statearr_24063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto__);

return statearr_24063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto__))
);

return c__7568__auto__;
});
