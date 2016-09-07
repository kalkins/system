// Compiled by ClojureScript 0.0-2913 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t17075 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17075 = (function (f,fn_handler,meta17076){
this.f = f;
this.fn_handler = fn_handler;
this.meta17076 = meta17076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17075.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17075.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17075.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17077){
var self__ = this;
var _17077__$1 = this;
return self__.meta17076;
});

cljs.core.async.t17075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17077,meta17076__$1){
var self__ = this;
var _17077__$1 = this;
return (new cljs.core.async.t17075(self__.f,self__.fn_handler,meta17076__$1));
});

cljs.core.async.t17075.cljs$lang$type = true;

cljs.core.async.t17075.cljs$lang$ctorStr = "cljs.core.async/t17075";

cljs.core.async.t17075.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t17075");
});

cljs.core.async.__GT_t17075 = (function __GT_t17075(f__$1,fn_handler__$1,meta17076){
return (new cljs.core.async.t17075(f__$1,fn_handler__$1,meta17076));
});

}

return (new cljs.core.async.t17075(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__17079 = buff;
if(G__17079){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__17079.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17079.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17079);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__17079);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17080 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17080);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_17080,ret){
return (function (){
return fn1.call(null,val_17080);
});})(val_17080,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4868__auto___17081 = n;
var x_17082 = (0);
while(true){
if((x_17082 < n__4868__auto___17081)){
(a[x_17082] = (0));

var G__17083 = (x_17082 + (1));
x_17082 = G__17083;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__17084 = (i + (1));
i = G__17084;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t17088 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17088 = (function (flag,alt_flag,meta17089){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17089 = meta17089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17088.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t17088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t17088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17090){
var self__ = this;
var _17090__$1 = this;
return self__.meta17089;
});})(flag))
;

cljs.core.async.t17088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17090,meta17089__$1){
var self__ = this;
var _17090__$1 = this;
return (new cljs.core.async.t17088(self__.flag,self__.alt_flag,meta17089__$1));
});})(flag))
;

cljs.core.async.t17088.cljs$lang$type = true;

cljs.core.async.t17088.cljs$lang$ctorStr = "cljs.core.async/t17088";

cljs.core.async.t17088.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t17088");
});})(flag))
;

cljs.core.async.__GT_t17088 = ((function (flag){
return (function __GT_t17088(flag__$1,alt_flag__$1,meta17089){
return (new cljs.core.async.t17088(flag__$1,alt_flag__$1,meta17089));
});})(flag))
;

}

return (new cljs.core.async.t17088(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t17094 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17094 = (function (cb,flag,alt_handler,meta17095){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17095 = meta17095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17094.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17094.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t17094.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t17094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17096){
var self__ = this;
var _17096__$1 = this;
return self__.meta17095;
});

cljs.core.async.t17094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17096,meta17095__$1){
var self__ = this;
var _17096__$1 = this;
return (new cljs.core.async.t17094(self__.cb,self__.flag,self__.alt_handler,meta17095__$1));
});

cljs.core.async.t17094.cljs$lang$type = true;

cljs.core.async.t17094.cljs$lang$ctorStr = "cljs.core.async/t17094";

cljs.core.async.t17094.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t17094");
});

cljs.core.async.__GT_t17094 = (function __GT_t17094(cb__$1,flag__$1,alt_handler__$1,meta17095){
return (new cljs.core.async.t17094(cb__$1,flag__$1,alt_handler__$1,meta17095));
});

}

return (new cljs.core.async.t17094(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17097_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17097_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17098_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17098_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3981__auto__ = wport;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17099 = (i + (1));
i = G__17099;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3981__auto__ = ret;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3969__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3969__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3969__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__17100){
var map__17102 = p__17100;
var map__17102__$1 = ((cljs.core.seq_QMARK_.call(null,map__17102))?cljs.core.apply.call(null,cljs.core.hash_map,map__17102):map__17102);
var opts = map__17102__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__17100 = null;
if (arguments.length > 1) {
var G__17103__i = 0, G__17103__a = new Array(arguments.length -  1);
while (G__17103__i < G__17103__a.length) {G__17103__a[G__17103__i] = arguments[G__17103__i + 1]; ++G__17103__i;}
  p__17100 = new cljs.core.IndexedSeq(G__17103__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__17100);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__17104){
var ports = cljs.core.first(arglist__17104);
var p__17100 = cljs.core.rest(arglist__17104);
return alts_BANG___delegate(ports,p__17100);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__7568__auto___17199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___17199){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___17199){
return (function (state_17175){
var state_val_17176 = (state_17175[(1)]);
if((state_val_17176 === (7))){
var inst_17171 = (state_17175[(2)]);
var state_17175__$1 = state_17175;
var statearr_17177_17200 = state_17175__$1;
(statearr_17177_17200[(2)] = inst_17171);

(statearr_17177_17200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (1))){
var state_17175__$1 = state_17175;
var statearr_17178_17201 = state_17175__$1;
(statearr_17178_17201[(2)] = null);

(statearr_17178_17201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (4))){
var inst_17154 = (state_17175[(7)]);
var inst_17154__$1 = (state_17175[(2)]);
var inst_17155 = (inst_17154__$1 == null);
var state_17175__$1 = (function (){var statearr_17179 = state_17175;
(statearr_17179[(7)] = inst_17154__$1);

return statearr_17179;
})();
if(cljs.core.truth_(inst_17155)){
var statearr_17180_17202 = state_17175__$1;
(statearr_17180_17202[(1)] = (5));

} else {
var statearr_17181_17203 = state_17175__$1;
(statearr_17181_17203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (13))){
var state_17175__$1 = state_17175;
var statearr_17182_17204 = state_17175__$1;
(statearr_17182_17204[(2)] = null);

(statearr_17182_17204[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (6))){
var inst_17154 = (state_17175[(7)]);
var state_17175__$1 = state_17175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17175__$1,(11),to,inst_17154);
} else {
if((state_val_17176 === (3))){
var inst_17173 = (state_17175[(2)]);
var state_17175__$1 = state_17175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17175__$1,inst_17173);
} else {
if((state_val_17176 === (12))){
var state_17175__$1 = state_17175;
var statearr_17183_17205 = state_17175__$1;
(statearr_17183_17205[(2)] = null);

(statearr_17183_17205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (2))){
var state_17175__$1 = state_17175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17175__$1,(4),from);
} else {
if((state_val_17176 === (11))){
var inst_17164 = (state_17175[(2)]);
var state_17175__$1 = state_17175;
if(cljs.core.truth_(inst_17164)){
var statearr_17184_17206 = state_17175__$1;
(statearr_17184_17206[(1)] = (12));

} else {
var statearr_17185_17207 = state_17175__$1;
(statearr_17185_17207[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (9))){
var state_17175__$1 = state_17175;
var statearr_17186_17208 = state_17175__$1;
(statearr_17186_17208[(2)] = null);

(statearr_17186_17208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (5))){
var state_17175__$1 = state_17175;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17187_17209 = state_17175__$1;
(statearr_17187_17209[(1)] = (8));

} else {
var statearr_17188_17210 = state_17175__$1;
(statearr_17188_17210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (14))){
var inst_17169 = (state_17175[(2)]);
var state_17175__$1 = state_17175;
var statearr_17189_17211 = state_17175__$1;
(statearr_17189_17211[(2)] = inst_17169);

(statearr_17189_17211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (10))){
var inst_17161 = (state_17175[(2)]);
var state_17175__$1 = state_17175;
var statearr_17190_17212 = state_17175__$1;
(statearr_17190_17212[(2)] = inst_17161);

(statearr_17190_17212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17176 === (8))){
var inst_17158 = cljs.core.async.close_BANG_.call(null,to);
var state_17175__$1 = state_17175;
var statearr_17191_17213 = state_17175__$1;
(statearr_17191_17213[(2)] = inst_17158);

(statearr_17191_17213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7568__auto___17199))
;
return ((function (switch__7553__auto__,c__7568__auto___17199){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_17195 = [null,null,null,null,null,null,null,null];
(statearr_17195[(0)] = state_machine__7554__auto__);

(statearr_17195[(1)] = (1));

return statearr_17195;
});
var state_machine__7554__auto____1 = (function (state_17175){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_17175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e17196){if((e17196 instanceof Object)){
var ex__7557__auto__ = e17196;
var statearr_17197_17214 = state_17175;
(statearr_17197_17214[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17215 = state_17175;
state_17175 = G__17215;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_17175){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_17175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___17199))
})();
var state__7570__auto__ = (function (){var statearr_17198 = f__7569__auto__.call(null);
(statearr_17198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___17199);

return statearr_17198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___17199))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__17399){
var vec__17400 = p__17399;
var v = cljs.core.nth.call(null,vec__17400,(0),null);
var p = cljs.core.nth.call(null,vec__17400,(1),null);
var job = vec__17400;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7568__auto___17582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___17582,res,vec__17400,v,p,job,jobs,results){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___17582,res,vec__17400,v,p,job,jobs,results){
return (function (state_17405){
var state_val_17406 = (state_17405[(1)]);
if((state_val_17406 === (2))){
var inst_17402 = (state_17405[(2)]);
var inst_17403 = cljs.core.async.close_BANG_.call(null,res);
var state_17405__$1 = (function (){var statearr_17407 = state_17405;
(statearr_17407[(7)] = inst_17402);

return statearr_17407;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17405__$1,inst_17403);
} else {
if((state_val_17406 === (1))){
var state_17405__$1 = state_17405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17405__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7568__auto___17582,res,vec__17400,v,p,job,jobs,results))
;
return ((function (switch__7553__auto__,c__7568__auto___17582,res,vec__17400,v,p,job,jobs,results){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_17411 = [null,null,null,null,null,null,null,null];
(statearr_17411[(0)] = state_machine__7554__auto__);

(statearr_17411[(1)] = (1));

return statearr_17411;
});
var state_machine__7554__auto____1 = (function (state_17405){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_17405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e17412){if((e17412 instanceof Object)){
var ex__7557__auto__ = e17412;
var statearr_17413_17583 = state_17405;
(statearr_17413_17583[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17584 = state_17405;
state_17405 = G__17584;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_17405){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_17405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___17582,res,vec__17400,v,p,job,jobs,results))
})();
var state__7570__auto__ = (function (){var statearr_17414 = f__7569__auto__.call(null);
(statearr_17414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___17582);

return statearr_17414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___17582,res,vec__17400,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17415){
var vec__17416 = p__17415;
var v = cljs.core.nth.call(null,vec__17416,(0),null);
var p = cljs.core.nth.call(null,vec__17416,(1),null);
var job = vec__17416;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4868__auto___17585 = n;
var __17586 = (0);
while(true){
if((__17586 < n__4868__auto___17585)){
var G__17417_17587 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17417_17587) {
case "async":
var c__7568__auto___17589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17586,c__7568__auto___17589,G__17417_17587,n__4868__auto___17585,jobs,results,process,async){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (__17586,c__7568__auto___17589,G__17417_17587,n__4868__auto___17585,jobs,results,process,async){
return (function (state_17430){
var state_val_17431 = (state_17430[(1)]);
if((state_val_17431 === (7))){
var inst_17426 = (state_17430[(2)]);
var state_17430__$1 = state_17430;
var statearr_17432_17590 = state_17430__$1;
(statearr_17432_17590[(2)] = inst_17426);

(statearr_17432_17590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17431 === (6))){
var state_17430__$1 = state_17430;
var statearr_17433_17591 = state_17430__$1;
(statearr_17433_17591[(2)] = null);

(statearr_17433_17591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17431 === (5))){
var state_17430__$1 = state_17430;
var statearr_17434_17592 = state_17430__$1;
(statearr_17434_17592[(2)] = null);

(statearr_17434_17592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17431 === (4))){
var inst_17420 = (state_17430[(2)]);
var inst_17421 = async.call(null,inst_17420);
var state_17430__$1 = state_17430;
if(cljs.core.truth_(inst_17421)){
var statearr_17435_17593 = state_17430__$1;
(statearr_17435_17593[(1)] = (5));

} else {
var statearr_17436_17594 = state_17430__$1;
(statearr_17436_17594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17431 === (3))){
var inst_17428 = (state_17430[(2)]);
var state_17430__$1 = state_17430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17430__$1,inst_17428);
} else {
if((state_val_17431 === (2))){
var state_17430__$1 = state_17430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17430__$1,(4),jobs);
} else {
if((state_val_17431 === (1))){
var state_17430__$1 = state_17430;
var statearr_17437_17595 = state_17430__$1;
(statearr_17437_17595[(2)] = null);

(statearr_17437_17595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17586,c__7568__auto___17589,G__17417_17587,n__4868__auto___17585,jobs,results,process,async))
;
return ((function (__17586,switch__7553__auto__,c__7568__auto___17589,G__17417_17587,n__4868__auto___17585,jobs,results,process,async){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_17441 = [null,null,null,null,null,null,null];
(statearr_17441[(0)] = state_machine__7554__auto__);

(statearr_17441[(1)] = (1));

return statearr_17441;
});
var state_machine__7554__auto____1 = (function (state_17430){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_17430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e17442){if((e17442 instanceof Object)){
var ex__7557__auto__ = e17442;
var statearr_17443_17596 = state_17430;
(statearr_17443_17596[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17597 = state_17430;
state_17430 = G__17597;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_17430){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_17430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(__17586,switch__7553__auto__,c__7568__auto___17589,G__17417_17587,n__4868__auto___17585,jobs,results,process,async))
})();
var state__7570__auto__ = (function (){var statearr_17444 = f__7569__auto__.call(null);
(statearr_17444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___17589);

return statearr_17444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(__17586,c__7568__auto___17589,G__17417_17587,n__4868__auto___17585,jobs,results,process,async))
);


break;
case "compute":
var c__7568__auto___17598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17586,c__7568__auto___17598,G__17417_17587,n__4868__auto___17585,jobs,results,process,async){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (__17586,c__7568__auto___17598,G__17417_17587,n__4868__auto___17585,jobs,results,process,async){
return (function (state_17457){
var state_val_17458 = (state_17457[(1)]);
if((state_val_17458 === (7))){
var inst_17453 = (state_17457[(2)]);
var state_17457__$1 = state_17457;
var statearr_17459_17599 = state_17457__$1;
(statearr_17459_17599[(2)] = inst_17453);

(statearr_17459_17599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (6))){
var state_17457__$1 = state_17457;
var statearr_17460_17600 = state_17457__$1;
(statearr_17460_17600[(2)] = null);

(statearr_17460_17600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (5))){
var state_17457__$1 = state_17457;
var statearr_17461_17601 = state_17457__$1;
(statearr_17461_17601[(2)] = null);

(statearr_17461_17601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (4))){
var inst_17447 = (state_17457[(2)]);
var inst_17448 = process.call(null,inst_17447);
var state_17457__$1 = state_17457;
if(cljs.core.truth_(inst_17448)){
var statearr_17462_17602 = state_17457__$1;
(statearr_17462_17602[(1)] = (5));

} else {
var statearr_17463_17603 = state_17457__$1;
(statearr_17463_17603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17458 === (3))){
var inst_17455 = (state_17457[(2)]);
var state_17457__$1 = state_17457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17457__$1,inst_17455);
} else {
if((state_val_17458 === (2))){
var state_17457__$1 = state_17457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17457__$1,(4),jobs);
} else {
if((state_val_17458 === (1))){
var state_17457__$1 = state_17457;
var statearr_17464_17604 = state_17457__$1;
(statearr_17464_17604[(2)] = null);

(statearr_17464_17604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17586,c__7568__auto___17598,G__17417_17587,n__4868__auto___17585,jobs,results,process,async))
;
return ((function (__17586,switch__7553__auto__,c__7568__auto___17598,G__17417_17587,n__4868__auto___17585,jobs,results,process,async){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_17468 = [null,null,null,null,null,null,null];
(statearr_17468[(0)] = state_machine__7554__auto__);

(statearr_17468[(1)] = (1));

return statearr_17468;
});
var state_machine__7554__auto____1 = (function (state_17457){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_17457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e17469){if((e17469 instanceof Object)){
var ex__7557__auto__ = e17469;
var statearr_17470_17605 = state_17457;
(statearr_17470_17605[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17606 = state_17457;
state_17457 = G__17606;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_17457){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_17457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(__17586,switch__7553__auto__,c__7568__auto___17598,G__17417_17587,n__4868__auto___17585,jobs,results,process,async))
})();
var state__7570__auto__ = (function (){var statearr_17471 = f__7569__auto__.call(null);
(statearr_17471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___17598);

return statearr_17471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(__17586,c__7568__auto___17598,G__17417_17587,n__4868__auto___17585,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17607 = (__17586 + (1));
__17586 = G__17607;
continue;
} else {
}
break;
}

var c__7568__auto___17608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___17608,jobs,results,process,async){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___17608,jobs,results,process,async){
return (function (state_17493){
var state_val_17494 = (state_17493[(1)]);
if((state_val_17494 === (9))){
var inst_17486 = (state_17493[(2)]);
var state_17493__$1 = (function (){var statearr_17495 = state_17493;
(statearr_17495[(7)] = inst_17486);

return statearr_17495;
})();
var statearr_17496_17609 = state_17493__$1;
(statearr_17496_17609[(2)] = null);

(statearr_17496_17609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (8))){
var inst_17479 = (state_17493[(8)]);
var inst_17484 = (state_17493[(2)]);
var state_17493__$1 = (function (){var statearr_17497 = state_17493;
(statearr_17497[(9)] = inst_17484);

return statearr_17497;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17493__$1,(9),results,inst_17479);
} else {
if((state_val_17494 === (7))){
var inst_17489 = (state_17493[(2)]);
var state_17493__$1 = state_17493;
var statearr_17498_17610 = state_17493__$1;
(statearr_17498_17610[(2)] = inst_17489);

(statearr_17498_17610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (6))){
var inst_17474 = (state_17493[(10)]);
var inst_17479 = (state_17493[(8)]);
var inst_17479__$1 = cljs.core.async.chan.call(null,(1));
var inst_17480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17481 = [inst_17474,inst_17479__$1];
var inst_17482 = (new cljs.core.PersistentVector(null,2,(5),inst_17480,inst_17481,null));
var state_17493__$1 = (function (){var statearr_17499 = state_17493;
(statearr_17499[(8)] = inst_17479__$1);

return statearr_17499;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17493__$1,(8),jobs,inst_17482);
} else {
if((state_val_17494 === (5))){
var inst_17477 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17493__$1 = state_17493;
var statearr_17500_17611 = state_17493__$1;
(statearr_17500_17611[(2)] = inst_17477);

(statearr_17500_17611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (4))){
var inst_17474 = (state_17493[(10)]);
var inst_17474__$1 = (state_17493[(2)]);
var inst_17475 = (inst_17474__$1 == null);
var state_17493__$1 = (function (){var statearr_17501 = state_17493;
(statearr_17501[(10)] = inst_17474__$1);

return statearr_17501;
})();
if(cljs.core.truth_(inst_17475)){
var statearr_17502_17612 = state_17493__$1;
(statearr_17502_17612[(1)] = (5));

} else {
var statearr_17503_17613 = state_17493__$1;
(statearr_17503_17613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17494 === (3))){
var inst_17491 = (state_17493[(2)]);
var state_17493__$1 = state_17493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17493__$1,inst_17491);
} else {
if((state_val_17494 === (2))){
var state_17493__$1 = state_17493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17493__$1,(4),from);
} else {
if((state_val_17494 === (1))){
var state_17493__$1 = state_17493;
var statearr_17504_17614 = state_17493__$1;
(statearr_17504_17614[(2)] = null);

(statearr_17504_17614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7568__auto___17608,jobs,results,process,async))
;
return ((function (switch__7553__auto__,c__7568__auto___17608,jobs,results,process,async){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_17508 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17508[(0)] = state_machine__7554__auto__);

(statearr_17508[(1)] = (1));

return statearr_17508;
});
var state_machine__7554__auto____1 = (function (state_17493){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_17493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e17509){if((e17509 instanceof Object)){
var ex__7557__auto__ = e17509;
var statearr_17510_17615 = state_17493;
(statearr_17510_17615[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17616 = state_17493;
state_17493 = G__17616;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_17493){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_17493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___17608,jobs,results,process,async))
})();
var state__7570__auto__ = (function (){var statearr_17511 = f__7569__auto__.call(null);
(statearr_17511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___17608);

return statearr_17511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___17608,jobs,results,process,async))
);


var c__7568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto__,jobs,results,process,async){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto__,jobs,results,process,async){
return (function (state_17549){
var state_val_17550 = (state_17549[(1)]);
if((state_val_17550 === (7))){
var inst_17545 = (state_17549[(2)]);
var state_17549__$1 = state_17549;
var statearr_17551_17617 = state_17549__$1;
(statearr_17551_17617[(2)] = inst_17545);

(statearr_17551_17617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (20))){
var state_17549__$1 = state_17549;
var statearr_17552_17618 = state_17549__$1;
(statearr_17552_17618[(2)] = null);

(statearr_17552_17618[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (1))){
var state_17549__$1 = state_17549;
var statearr_17553_17619 = state_17549__$1;
(statearr_17553_17619[(2)] = null);

(statearr_17553_17619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (4))){
var inst_17514 = (state_17549[(7)]);
var inst_17514__$1 = (state_17549[(2)]);
var inst_17515 = (inst_17514__$1 == null);
var state_17549__$1 = (function (){var statearr_17554 = state_17549;
(statearr_17554[(7)] = inst_17514__$1);

return statearr_17554;
})();
if(cljs.core.truth_(inst_17515)){
var statearr_17555_17620 = state_17549__$1;
(statearr_17555_17620[(1)] = (5));

} else {
var statearr_17556_17621 = state_17549__$1;
(statearr_17556_17621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (15))){
var inst_17527 = (state_17549[(8)]);
var state_17549__$1 = state_17549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17549__$1,(18),to,inst_17527);
} else {
if((state_val_17550 === (21))){
var inst_17540 = (state_17549[(2)]);
var state_17549__$1 = state_17549;
var statearr_17557_17622 = state_17549__$1;
(statearr_17557_17622[(2)] = inst_17540);

(statearr_17557_17622[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (13))){
var inst_17542 = (state_17549[(2)]);
var state_17549__$1 = (function (){var statearr_17558 = state_17549;
(statearr_17558[(9)] = inst_17542);

return statearr_17558;
})();
var statearr_17559_17623 = state_17549__$1;
(statearr_17559_17623[(2)] = null);

(statearr_17559_17623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (6))){
var inst_17514 = (state_17549[(7)]);
var state_17549__$1 = state_17549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17549__$1,(11),inst_17514);
} else {
if((state_val_17550 === (17))){
var inst_17535 = (state_17549[(2)]);
var state_17549__$1 = state_17549;
if(cljs.core.truth_(inst_17535)){
var statearr_17560_17624 = state_17549__$1;
(statearr_17560_17624[(1)] = (19));

} else {
var statearr_17561_17625 = state_17549__$1;
(statearr_17561_17625[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (3))){
var inst_17547 = (state_17549[(2)]);
var state_17549__$1 = state_17549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17549__$1,inst_17547);
} else {
if((state_val_17550 === (12))){
var inst_17524 = (state_17549[(10)]);
var state_17549__$1 = state_17549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17549__$1,(14),inst_17524);
} else {
if((state_val_17550 === (2))){
var state_17549__$1 = state_17549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17549__$1,(4),results);
} else {
if((state_val_17550 === (19))){
var state_17549__$1 = state_17549;
var statearr_17562_17626 = state_17549__$1;
(statearr_17562_17626[(2)] = null);

(statearr_17562_17626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (11))){
var inst_17524 = (state_17549[(2)]);
var state_17549__$1 = (function (){var statearr_17563 = state_17549;
(statearr_17563[(10)] = inst_17524);

return statearr_17563;
})();
var statearr_17564_17627 = state_17549__$1;
(statearr_17564_17627[(2)] = null);

(statearr_17564_17627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (9))){
var state_17549__$1 = state_17549;
var statearr_17565_17628 = state_17549__$1;
(statearr_17565_17628[(2)] = null);

(statearr_17565_17628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (5))){
var state_17549__$1 = state_17549;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17566_17629 = state_17549__$1;
(statearr_17566_17629[(1)] = (8));

} else {
var statearr_17567_17630 = state_17549__$1;
(statearr_17567_17630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (14))){
var inst_17529 = (state_17549[(11)]);
var inst_17527 = (state_17549[(8)]);
var inst_17527__$1 = (state_17549[(2)]);
var inst_17528 = (inst_17527__$1 == null);
var inst_17529__$1 = cljs.core.not.call(null,inst_17528);
var state_17549__$1 = (function (){var statearr_17568 = state_17549;
(statearr_17568[(11)] = inst_17529__$1);

(statearr_17568[(8)] = inst_17527__$1);

return statearr_17568;
})();
if(inst_17529__$1){
var statearr_17569_17631 = state_17549__$1;
(statearr_17569_17631[(1)] = (15));

} else {
var statearr_17570_17632 = state_17549__$1;
(statearr_17570_17632[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (16))){
var inst_17529 = (state_17549[(11)]);
var state_17549__$1 = state_17549;
var statearr_17571_17633 = state_17549__$1;
(statearr_17571_17633[(2)] = inst_17529);

(statearr_17571_17633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (10))){
var inst_17521 = (state_17549[(2)]);
var state_17549__$1 = state_17549;
var statearr_17572_17634 = state_17549__$1;
(statearr_17572_17634[(2)] = inst_17521);

(statearr_17572_17634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (18))){
var inst_17532 = (state_17549[(2)]);
var state_17549__$1 = state_17549;
var statearr_17573_17635 = state_17549__$1;
(statearr_17573_17635[(2)] = inst_17532);

(statearr_17573_17635[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17550 === (8))){
var inst_17518 = cljs.core.async.close_BANG_.call(null,to);
var state_17549__$1 = state_17549;
var statearr_17574_17636 = state_17549__$1;
(statearr_17574_17636[(2)] = inst_17518);

(statearr_17574_17636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7568__auto__,jobs,results,process,async))
;
return ((function (switch__7553__auto__,c__7568__auto__,jobs,results,process,async){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_17578 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17578[(0)] = state_machine__7554__auto__);

(statearr_17578[(1)] = (1));

return statearr_17578;
});
var state_machine__7554__auto____1 = (function (state_17549){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_17549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e17579){if((e17579 instanceof Object)){
var ex__7557__auto__ = e17579;
var statearr_17580_17637 = state_17549;
(statearr_17580_17637[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17638 = state_17549;
state_17549 = G__17638;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_17549){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_17549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto__,jobs,results,process,async))
})();
var state__7570__auto__ = (function (){var statearr_17581 = f__7569__auto__.call(null);
(statearr_17581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto__);

return statearr_17581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto__,jobs,results,process,async))
);

return c__7568__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7568__auto___17739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___17739,tc,fc){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___17739,tc,fc){
return (function (state_17714){
var state_val_17715 = (state_17714[(1)]);
if((state_val_17715 === (7))){
var inst_17710 = (state_17714[(2)]);
var state_17714__$1 = state_17714;
var statearr_17716_17740 = state_17714__$1;
(statearr_17716_17740[(2)] = inst_17710);

(statearr_17716_17740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (1))){
var state_17714__$1 = state_17714;
var statearr_17717_17741 = state_17714__$1;
(statearr_17717_17741[(2)] = null);

(statearr_17717_17741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (4))){
var inst_17691 = (state_17714[(7)]);
var inst_17691__$1 = (state_17714[(2)]);
var inst_17692 = (inst_17691__$1 == null);
var state_17714__$1 = (function (){var statearr_17718 = state_17714;
(statearr_17718[(7)] = inst_17691__$1);

return statearr_17718;
})();
if(cljs.core.truth_(inst_17692)){
var statearr_17719_17742 = state_17714__$1;
(statearr_17719_17742[(1)] = (5));

} else {
var statearr_17720_17743 = state_17714__$1;
(statearr_17720_17743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (13))){
var state_17714__$1 = state_17714;
var statearr_17721_17744 = state_17714__$1;
(statearr_17721_17744[(2)] = null);

(statearr_17721_17744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (6))){
var inst_17691 = (state_17714[(7)]);
var inst_17697 = p.call(null,inst_17691);
var state_17714__$1 = state_17714;
if(cljs.core.truth_(inst_17697)){
var statearr_17722_17745 = state_17714__$1;
(statearr_17722_17745[(1)] = (9));

} else {
var statearr_17723_17746 = state_17714__$1;
(statearr_17723_17746[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (3))){
var inst_17712 = (state_17714[(2)]);
var state_17714__$1 = state_17714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17714__$1,inst_17712);
} else {
if((state_val_17715 === (12))){
var state_17714__$1 = state_17714;
var statearr_17724_17747 = state_17714__$1;
(statearr_17724_17747[(2)] = null);

(statearr_17724_17747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (2))){
var state_17714__$1 = state_17714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17714__$1,(4),ch);
} else {
if((state_val_17715 === (11))){
var inst_17691 = (state_17714[(7)]);
var inst_17701 = (state_17714[(2)]);
var state_17714__$1 = state_17714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17714__$1,(8),inst_17701,inst_17691);
} else {
if((state_val_17715 === (9))){
var state_17714__$1 = state_17714;
var statearr_17725_17748 = state_17714__$1;
(statearr_17725_17748[(2)] = tc);

(statearr_17725_17748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (5))){
var inst_17694 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17695 = cljs.core.async.close_BANG_.call(null,fc);
var state_17714__$1 = (function (){var statearr_17726 = state_17714;
(statearr_17726[(8)] = inst_17694);

return statearr_17726;
})();
var statearr_17727_17749 = state_17714__$1;
(statearr_17727_17749[(2)] = inst_17695);

(statearr_17727_17749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (14))){
var inst_17708 = (state_17714[(2)]);
var state_17714__$1 = state_17714;
var statearr_17728_17750 = state_17714__$1;
(statearr_17728_17750[(2)] = inst_17708);

(statearr_17728_17750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (10))){
var state_17714__$1 = state_17714;
var statearr_17729_17751 = state_17714__$1;
(statearr_17729_17751[(2)] = fc);

(statearr_17729_17751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17715 === (8))){
var inst_17703 = (state_17714[(2)]);
var state_17714__$1 = state_17714;
if(cljs.core.truth_(inst_17703)){
var statearr_17730_17752 = state_17714__$1;
(statearr_17730_17752[(1)] = (12));

} else {
var statearr_17731_17753 = state_17714__$1;
(statearr_17731_17753[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7568__auto___17739,tc,fc))
;
return ((function (switch__7553__auto__,c__7568__auto___17739,tc,fc){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_17735 = [null,null,null,null,null,null,null,null,null];
(statearr_17735[(0)] = state_machine__7554__auto__);

(statearr_17735[(1)] = (1));

return statearr_17735;
});
var state_machine__7554__auto____1 = (function (state_17714){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_17714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e17736){if((e17736 instanceof Object)){
var ex__7557__auto__ = e17736;
var statearr_17737_17754 = state_17714;
(statearr_17737_17754[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17755 = state_17714;
state_17714 = G__17755;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_17714){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_17714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___17739,tc,fc))
})();
var state__7570__auto__ = (function (){var statearr_17738 = f__7569__auto__.call(null);
(statearr_17738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___17739);

return statearr_17738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___17739,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__7568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto__){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto__){
return (function (state_17802){
var state_val_17803 = (state_17802[(1)]);
if((state_val_17803 === (7))){
var inst_17798 = (state_17802[(2)]);
var state_17802__$1 = state_17802;
var statearr_17804_17820 = state_17802__$1;
(statearr_17804_17820[(2)] = inst_17798);

(statearr_17804_17820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17803 === (6))){
var inst_17788 = (state_17802[(7)]);
var inst_17791 = (state_17802[(8)]);
var inst_17795 = f.call(null,inst_17788,inst_17791);
var inst_17788__$1 = inst_17795;
var state_17802__$1 = (function (){var statearr_17805 = state_17802;
(statearr_17805[(7)] = inst_17788__$1);

return statearr_17805;
})();
var statearr_17806_17821 = state_17802__$1;
(statearr_17806_17821[(2)] = null);

(statearr_17806_17821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17803 === (5))){
var inst_17788 = (state_17802[(7)]);
var state_17802__$1 = state_17802;
var statearr_17807_17822 = state_17802__$1;
(statearr_17807_17822[(2)] = inst_17788);

(statearr_17807_17822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17803 === (4))){
var inst_17791 = (state_17802[(8)]);
var inst_17791__$1 = (state_17802[(2)]);
var inst_17792 = (inst_17791__$1 == null);
var state_17802__$1 = (function (){var statearr_17808 = state_17802;
(statearr_17808[(8)] = inst_17791__$1);

return statearr_17808;
})();
if(cljs.core.truth_(inst_17792)){
var statearr_17809_17823 = state_17802__$1;
(statearr_17809_17823[(1)] = (5));

} else {
var statearr_17810_17824 = state_17802__$1;
(statearr_17810_17824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17803 === (3))){
var inst_17800 = (state_17802[(2)]);
var state_17802__$1 = state_17802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17802__$1,inst_17800);
} else {
if((state_val_17803 === (2))){
var state_17802__$1 = state_17802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17802__$1,(4),ch);
} else {
if((state_val_17803 === (1))){
var inst_17788 = init;
var state_17802__$1 = (function (){var statearr_17811 = state_17802;
(statearr_17811[(7)] = inst_17788);

return statearr_17811;
})();
var statearr_17812_17825 = state_17802__$1;
(statearr_17812_17825[(2)] = null);

(statearr_17812_17825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
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
var statearr_17816 = [null,null,null,null,null,null,null,null,null];
(statearr_17816[(0)] = state_machine__7554__auto__);

(statearr_17816[(1)] = (1));

return statearr_17816;
});
var state_machine__7554__auto____1 = (function (state_17802){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_17802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e17817){if((e17817 instanceof Object)){
var ex__7557__auto__ = e17817;
var statearr_17818_17826 = state_17802;
(statearr_17818_17826[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17827 = state_17802;
state_17802 = G__17827;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_17802){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_17802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto__))
})();
var state__7570__auto__ = (function (){var statearr_17819 = f__7569__auto__.call(null);
(statearr_17819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto__);

return statearr_17819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto__))
);

return c__7568__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__7568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto__){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto__){
return (function (state_17901){
var state_val_17902 = (state_17901[(1)]);
if((state_val_17902 === (7))){
var inst_17883 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
var statearr_17903_17926 = state_17901__$1;
(statearr_17903_17926[(2)] = inst_17883);

(statearr_17903_17926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (1))){
var inst_17877 = cljs.core.seq.call(null,coll);
var inst_17878 = inst_17877;
var state_17901__$1 = (function (){var statearr_17904 = state_17901;
(statearr_17904[(7)] = inst_17878);

return statearr_17904;
})();
var statearr_17905_17927 = state_17901__$1;
(statearr_17905_17927[(2)] = null);

(statearr_17905_17927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (4))){
var inst_17878 = (state_17901[(7)]);
var inst_17881 = cljs.core.first.call(null,inst_17878);
var state_17901__$1 = state_17901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17901__$1,(7),ch,inst_17881);
} else {
if((state_val_17902 === (13))){
var inst_17895 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
var statearr_17906_17928 = state_17901__$1;
(statearr_17906_17928[(2)] = inst_17895);

(statearr_17906_17928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (6))){
var inst_17886 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
if(cljs.core.truth_(inst_17886)){
var statearr_17907_17929 = state_17901__$1;
(statearr_17907_17929[(1)] = (8));

} else {
var statearr_17908_17930 = state_17901__$1;
(statearr_17908_17930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (3))){
var inst_17899 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17901__$1,inst_17899);
} else {
if((state_val_17902 === (12))){
var state_17901__$1 = state_17901;
var statearr_17909_17931 = state_17901__$1;
(statearr_17909_17931[(2)] = null);

(statearr_17909_17931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (2))){
var inst_17878 = (state_17901[(7)]);
var state_17901__$1 = state_17901;
if(cljs.core.truth_(inst_17878)){
var statearr_17910_17932 = state_17901__$1;
(statearr_17910_17932[(1)] = (4));

} else {
var statearr_17911_17933 = state_17901__$1;
(statearr_17911_17933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (11))){
var inst_17892 = cljs.core.async.close_BANG_.call(null,ch);
var state_17901__$1 = state_17901;
var statearr_17912_17934 = state_17901__$1;
(statearr_17912_17934[(2)] = inst_17892);

(statearr_17912_17934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (9))){
var state_17901__$1 = state_17901;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17913_17935 = state_17901__$1;
(statearr_17913_17935[(1)] = (11));

} else {
var statearr_17914_17936 = state_17901__$1;
(statearr_17914_17936[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (5))){
var inst_17878 = (state_17901[(7)]);
var state_17901__$1 = state_17901;
var statearr_17915_17937 = state_17901__$1;
(statearr_17915_17937[(2)] = inst_17878);

(statearr_17915_17937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (10))){
var inst_17897 = (state_17901[(2)]);
var state_17901__$1 = state_17901;
var statearr_17916_17938 = state_17901__$1;
(statearr_17916_17938[(2)] = inst_17897);

(statearr_17916_17938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17902 === (8))){
var inst_17878 = (state_17901[(7)]);
var inst_17888 = cljs.core.next.call(null,inst_17878);
var inst_17878__$1 = inst_17888;
var state_17901__$1 = (function (){var statearr_17917 = state_17901;
(statearr_17917[(7)] = inst_17878__$1);

return statearr_17917;
})();
var statearr_17918_17939 = state_17901__$1;
(statearr_17918_17939[(2)] = null);

(statearr_17918_17939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
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
var statearr_17922 = [null,null,null,null,null,null,null,null];
(statearr_17922[(0)] = state_machine__7554__auto__);

(statearr_17922[(1)] = (1));

return statearr_17922;
});
var state_machine__7554__auto____1 = (function (state_17901){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_17901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e17923){if((e17923 instanceof Object)){
var ex__7557__auto__ = e17923;
var statearr_17924_17940 = state_17901;
(statearr_17924_17940[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17941 = state_17901;
state_17901 = G__17941;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_17901){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_17901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto__))
})();
var state__7570__auto__ = (function (){var statearr_17925 = f__7569__auto__.call(null);
(statearr_17925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto__);

return statearr_17925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto__))
);

return c__7568__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj17943 = {};
return obj17943;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3969__auto__ = _;
if(and__3969__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3969__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4625__auto__ = (((_ == null))?null:_);
return (function (){var or__3981__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj17945 = {};
return obj17945;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t18167 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18167 = (function (cs,ch,mult,meta18168){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18168 = meta18168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18167.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18167.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18167.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18167.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t18167.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18167.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18169){
var self__ = this;
var _18169__$1 = this;
return self__.meta18168;
});})(cs))
;

cljs.core.async.t18167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18169,meta18168__$1){
var self__ = this;
var _18169__$1 = this;
return (new cljs.core.async.t18167(self__.cs,self__.ch,self__.mult,meta18168__$1));
});})(cs))
;

cljs.core.async.t18167.cljs$lang$type = true;

cljs.core.async.t18167.cljs$lang$ctorStr = "cljs.core.async/t18167";

cljs.core.async.t18167.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t18167");
});})(cs))
;

cljs.core.async.__GT_t18167 = ((function (cs){
return (function __GT_t18167(cs__$1,ch__$1,mult__$1,meta18168){
return (new cljs.core.async.t18167(cs__$1,ch__$1,mult__$1,meta18168));
});})(cs))
;

}

return (new cljs.core.async.t18167(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7568__auto___18388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___18388,cs,m,dchan,dctr,done){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___18388,cs,m,dchan,dctr,done){
return (function (state_18300){
var state_val_18301 = (state_18300[(1)]);
if((state_val_18301 === (7))){
var inst_18296 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
var statearr_18302_18389 = state_18300__$1;
(statearr_18302_18389[(2)] = inst_18296);

(statearr_18302_18389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (20))){
var inst_18201 = (state_18300[(7)]);
var inst_18211 = cljs.core.first.call(null,inst_18201);
var inst_18212 = cljs.core.nth.call(null,inst_18211,(0),null);
var inst_18213 = cljs.core.nth.call(null,inst_18211,(1),null);
var state_18300__$1 = (function (){var statearr_18303 = state_18300;
(statearr_18303[(8)] = inst_18212);

return statearr_18303;
})();
if(cljs.core.truth_(inst_18213)){
var statearr_18304_18390 = state_18300__$1;
(statearr_18304_18390[(1)] = (22));

} else {
var statearr_18305_18391 = state_18300__$1;
(statearr_18305_18391[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (27))){
var inst_18248 = (state_18300[(9)]);
var inst_18243 = (state_18300[(10)]);
var inst_18241 = (state_18300[(11)]);
var inst_18172 = (state_18300[(12)]);
var inst_18248__$1 = cljs.core._nth.call(null,inst_18241,inst_18243);
var inst_18249 = cljs.core.async.put_BANG_.call(null,inst_18248__$1,inst_18172,done);
var state_18300__$1 = (function (){var statearr_18306 = state_18300;
(statearr_18306[(9)] = inst_18248__$1);

return statearr_18306;
})();
if(cljs.core.truth_(inst_18249)){
var statearr_18307_18392 = state_18300__$1;
(statearr_18307_18392[(1)] = (30));

} else {
var statearr_18308_18393 = state_18300__$1;
(statearr_18308_18393[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (1))){
var state_18300__$1 = state_18300;
var statearr_18309_18394 = state_18300__$1;
(statearr_18309_18394[(2)] = null);

(statearr_18309_18394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (24))){
var inst_18201 = (state_18300[(7)]);
var inst_18218 = (state_18300[(2)]);
var inst_18219 = cljs.core.next.call(null,inst_18201);
var inst_18181 = inst_18219;
var inst_18182 = null;
var inst_18183 = (0);
var inst_18184 = (0);
var state_18300__$1 = (function (){var statearr_18310 = state_18300;
(statearr_18310[(13)] = inst_18183);

(statearr_18310[(14)] = inst_18218);

(statearr_18310[(15)] = inst_18182);

(statearr_18310[(16)] = inst_18184);

(statearr_18310[(17)] = inst_18181);

return statearr_18310;
})();
var statearr_18311_18395 = state_18300__$1;
(statearr_18311_18395[(2)] = null);

(statearr_18311_18395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (39))){
var state_18300__$1 = state_18300;
var statearr_18315_18396 = state_18300__$1;
(statearr_18315_18396[(2)] = null);

(statearr_18315_18396[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (4))){
var inst_18172 = (state_18300[(12)]);
var inst_18172__$1 = (state_18300[(2)]);
var inst_18173 = (inst_18172__$1 == null);
var state_18300__$1 = (function (){var statearr_18316 = state_18300;
(statearr_18316[(12)] = inst_18172__$1);

return statearr_18316;
})();
if(cljs.core.truth_(inst_18173)){
var statearr_18317_18397 = state_18300__$1;
(statearr_18317_18397[(1)] = (5));

} else {
var statearr_18318_18398 = state_18300__$1;
(statearr_18318_18398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (15))){
var inst_18183 = (state_18300[(13)]);
var inst_18182 = (state_18300[(15)]);
var inst_18184 = (state_18300[(16)]);
var inst_18181 = (state_18300[(17)]);
var inst_18197 = (state_18300[(2)]);
var inst_18198 = (inst_18184 + (1));
var tmp18312 = inst_18183;
var tmp18313 = inst_18182;
var tmp18314 = inst_18181;
var inst_18181__$1 = tmp18314;
var inst_18182__$1 = tmp18313;
var inst_18183__$1 = tmp18312;
var inst_18184__$1 = inst_18198;
var state_18300__$1 = (function (){var statearr_18319 = state_18300;
(statearr_18319[(13)] = inst_18183__$1);

(statearr_18319[(18)] = inst_18197);

(statearr_18319[(15)] = inst_18182__$1);

(statearr_18319[(16)] = inst_18184__$1);

(statearr_18319[(17)] = inst_18181__$1);

return statearr_18319;
})();
var statearr_18320_18399 = state_18300__$1;
(statearr_18320_18399[(2)] = null);

(statearr_18320_18399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (21))){
var inst_18222 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
var statearr_18324_18400 = state_18300__$1;
(statearr_18324_18400[(2)] = inst_18222);

(statearr_18324_18400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (31))){
var inst_18248 = (state_18300[(9)]);
var inst_18252 = done.call(null,null);
var inst_18253 = cljs.core.async.untap_STAR_.call(null,m,inst_18248);
var state_18300__$1 = (function (){var statearr_18325 = state_18300;
(statearr_18325[(19)] = inst_18252);

return statearr_18325;
})();
var statearr_18326_18401 = state_18300__$1;
(statearr_18326_18401[(2)] = inst_18253);

(statearr_18326_18401[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (32))){
var inst_18240 = (state_18300[(20)]);
var inst_18243 = (state_18300[(10)]);
var inst_18242 = (state_18300[(21)]);
var inst_18241 = (state_18300[(11)]);
var inst_18255 = (state_18300[(2)]);
var inst_18256 = (inst_18243 + (1));
var tmp18321 = inst_18240;
var tmp18322 = inst_18242;
var tmp18323 = inst_18241;
var inst_18240__$1 = tmp18321;
var inst_18241__$1 = tmp18323;
var inst_18242__$1 = tmp18322;
var inst_18243__$1 = inst_18256;
var state_18300__$1 = (function (){var statearr_18327 = state_18300;
(statearr_18327[(20)] = inst_18240__$1);

(statearr_18327[(10)] = inst_18243__$1);

(statearr_18327[(21)] = inst_18242__$1);

(statearr_18327[(22)] = inst_18255);

(statearr_18327[(11)] = inst_18241__$1);

return statearr_18327;
})();
var statearr_18328_18402 = state_18300__$1;
(statearr_18328_18402[(2)] = null);

(statearr_18328_18402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (40))){
var inst_18268 = (state_18300[(23)]);
var inst_18272 = done.call(null,null);
var inst_18273 = cljs.core.async.untap_STAR_.call(null,m,inst_18268);
var state_18300__$1 = (function (){var statearr_18329 = state_18300;
(statearr_18329[(24)] = inst_18272);

return statearr_18329;
})();
var statearr_18330_18403 = state_18300__$1;
(statearr_18330_18403[(2)] = inst_18273);

(statearr_18330_18403[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (33))){
var inst_18259 = (state_18300[(25)]);
var inst_18261 = cljs.core.chunked_seq_QMARK_.call(null,inst_18259);
var state_18300__$1 = state_18300;
if(inst_18261){
var statearr_18331_18404 = state_18300__$1;
(statearr_18331_18404[(1)] = (36));

} else {
var statearr_18332_18405 = state_18300__$1;
(statearr_18332_18405[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (13))){
var inst_18191 = (state_18300[(26)]);
var inst_18194 = cljs.core.async.close_BANG_.call(null,inst_18191);
var state_18300__$1 = state_18300;
var statearr_18333_18406 = state_18300__$1;
(statearr_18333_18406[(2)] = inst_18194);

(statearr_18333_18406[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (22))){
var inst_18212 = (state_18300[(8)]);
var inst_18215 = cljs.core.async.close_BANG_.call(null,inst_18212);
var state_18300__$1 = state_18300;
var statearr_18334_18407 = state_18300__$1;
(statearr_18334_18407[(2)] = inst_18215);

(statearr_18334_18407[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (36))){
var inst_18259 = (state_18300[(25)]);
var inst_18263 = cljs.core.chunk_first.call(null,inst_18259);
var inst_18264 = cljs.core.chunk_rest.call(null,inst_18259);
var inst_18265 = cljs.core.count.call(null,inst_18263);
var inst_18240 = inst_18264;
var inst_18241 = inst_18263;
var inst_18242 = inst_18265;
var inst_18243 = (0);
var state_18300__$1 = (function (){var statearr_18335 = state_18300;
(statearr_18335[(20)] = inst_18240);

(statearr_18335[(10)] = inst_18243);

(statearr_18335[(21)] = inst_18242);

(statearr_18335[(11)] = inst_18241);

return statearr_18335;
})();
var statearr_18336_18408 = state_18300__$1;
(statearr_18336_18408[(2)] = null);

(statearr_18336_18408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (41))){
var inst_18259 = (state_18300[(25)]);
var inst_18275 = (state_18300[(2)]);
var inst_18276 = cljs.core.next.call(null,inst_18259);
var inst_18240 = inst_18276;
var inst_18241 = null;
var inst_18242 = (0);
var inst_18243 = (0);
var state_18300__$1 = (function (){var statearr_18337 = state_18300;
(statearr_18337[(20)] = inst_18240);

(statearr_18337[(10)] = inst_18243);

(statearr_18337[(21)] = inst_18242);

(statearr_18337[(27)] = inst_18275);

(statearr_18337[(11)] = inst_18241);

return statearr_18337;
})();
var statearr_18338_18409 = state_18300__$1;
(statearr_18338_18409[(2)] = null);

(statearr_18338_18409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (43))){
var state_18300__$1 = state_18300;
var statearr_18339_18410 = state_18300__$1;
(statearr_18339_18410[(2)] = null);

(statearr_18339_18410[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (29))){
var inst_18284 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
var statearr_18340_18411 = state_18300__$1;
(statearr_18340_18411[(2)] = inst_18284);

(statearr_18340_18411[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (44))){
var inst_18293 = (state_18300[(2)]);
var state_18300__$1 = (function (){var statearr_18341 = state_18300;
(statearr_18341[(28)] = inst_18293);

return statearr_18341;
})();
var statearr_18342_18412 = state_18300__$1;
(statearr_18342_18412[(2)] = null);

(statearr_18342_18412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (6))){
var inst_18232 = (state_18300[(29)]);
var inst_18231 = cljs.core.deref.call(null,cs);
var inst_18232__$1 = cljs.core.keys.call(null,inst_18231);
var inst_18233 = cljs.core.count.call(null,inst_18232__$1);
var inst_18234 = cljs.core.reset_BANG_.call(null,dctr,inst_18233);
var inst_18239 = cljs.core.seq.call(null,inst_18232__$1);
var inst_18240 = inst_18239;
var inst_18241 = null;
var inst_18242 = (0);
var inst_18243 = (0);
var state_18300__$1 = (function (){var statearr_18343 = state_18300;
(statearr_18343[(20)] = inst_18240);

(statearr_18343[(10)] = inst_18243);

(statearr_18343[(21)] = inst_18242);

(statearr_18343[(30)] = inst_18234);

(statearr_18343[(11)] = inst_18241);

(statearr_18343[(29)] = inst_18232__$1);

return statearr_18343;
})();
var statearr_18344_18413 = state_18300__$1;
(statearr_18344_18413[(2)] = null);

(statearr_18344_18413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (28))){
var inst_18240 = (state_18300[(20)]);
var inst_18259 = (state_18300[(25)]);
var inst_18259__$1 = cljs.core.seq.call(null,inst_18240);
var state_18300__$1 = (function (){var statearr_18345 = state_18300;
(statearr_18345[(25)] = inst_18259__$1);

return statearr_18345;
})();
if(inst_18259__$1){
var statearr_18346_18414 = state_18300__$1;
(statearr_18346_18414[(1)] = (33));

} else {
var statearr_18347_18415 = state_18300__$1;
(statearr_18347_18415[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (25))){
var inst_18243 = (state_18300[(10)]);
var inst_18242 = (state_18300[(21)]);
var inst_18245 = (inst_18243 < inst_18242);
var inst_18246 = inst_18245;
var state_18300__$1 = state_18300;
if(cljs.core.truth_(inst_18246)){
var statearr_18348_18416 = state_18300__$1;
(statearr_18348_18416[(1)] = (27));

} else {
var statearr_18349_18417 = state_18300__$1;
(statearr_18349_18417[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (34))){
var state_18300__$1 = state_18300;
var statearr_18350_18418 = state_18300__$1;
(statearr_18350_18418[(2)] = null);

(statearr_18350_18418[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (17))){
var state_18300__$1 = state_18300;
var statearr_18351_18419 = state_18300__$1;
(statearr_18351_18419[(2)] = null);

(statearr_18351_18419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (3))){
var inst_18298 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18300__$1,inst_18298);
} else {
if((state_val_18301 === (12))){
var inst_18227 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
var statearr_18352_18420 = state_18300__$1;
(statearr_18352_18420[(2)] = inst_18227);

(statearr_18352_18420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (2))){
var state_18300__$1 = state_18300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18300__$1,(4),ch);
} else {
if((state_val_18301 === (23))){
var state_18300__$1 = state_18300;
var statearr_18353_18421 = state_18300__$1;
(statearr_18353_18421[(2)] = null);

(statearr_18353_18421[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (35))){
var inst_18282 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
var statearr_18354_18422 = state_18300__$1;
(statearr_18354_18422[(2)] = inst_18282);

(statearr_18354_18422[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (19))){
var inst_18201 = (state_18300[(7)]);
var inst_18205 = cljs.core.chunk_first.call(null,inst_18201);
var inst_18206 = cljs.core.chunk_rest.call(null,inst_18201);
var inst_18207 = cljs.core.count.call(null,inst_18205);
var inst_18181 = inst_18206;
var inst_18182 = inst_18205;
var inst_18183 = inst_18207;
var inst_18184 = (0);
var state_18300__$1 = (function (){var statearr_18355 = state_18300;
(statearr_18355[(13)] = inst_18183);

(statearr_18355[(15)] = inst_18182);

(statearr_18355[(16)] = inst_18184);

(statearr_18355[(17)] = inst_18181);

return statearr_18355;
})();
var statearr_18356_18423 = state_18300__$1;
(statearr_18356_18423[(2)] = null);

(statearr_18356_18423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (11))){
var inst_18201 = (state_18300[(7)]);
var inst_18181 = (state_18300[(17)]);
var inst_18201__$1 = cljs.core.seq.call(null,inst_18181);
var state_18300__$1 = (function (){var statearr_18357 = state_18300;
(statearr_18357[(7)] = inst_18201__$1);

return statearr_18357;
})();
if(inst_18201__$1){
var statearr_18358_18424 = state_18300__$1;
(statearr_18358_18424[(1)] = (16));

} else {
var statearr_18359_18425 = state_18300__$1;
(statearr_18359_18425[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (9))){
var inst_18229 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
var statearr_18360_18426 = state_18300__$1;
(statearr_18360_18426[(2)] = inst_18229);

(statearr_18360_18426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (5))){
var inst_18179 = cljs.core.deref.call(null,cs);
var inst_18180 = cljs.core.seq.call(null,inst_18179);
var inst_18181 = inst_18180;
var inst_18182 = null;
var inst_18183 = (0);
var inst_18184 = (0);
var state_18300__$1 = (function (){var statearr_18361 = state_18300;
(statearr_18361[(13)] = inst_18183);

(statearr_18361[(15)] = inst_18182);

(statearr_18361[(16)] = inst_18184);

(statearr_18361[(17)] = inst_18181);

return statearr_18361;
})();
var statearr_18362_18427 = state_18300__$1;
(statearr_18362_18427[(2)] = null);

(statearr_18362_18427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (14))){
var state_18300__$1 = state_18300;
var statearr_18363_18428 = state_18300__$1;
(statearr_18363_18428[(2)] = null);

(statearr_18363_18428[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (45))){
var inst_18290 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
var statearr_18364_18429 = state_18300__$1;
(statearr_18364_18429[(2)] = inst_18290);

(statearr_18364_18429[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (26))){
var inst_18232 = (state_18300[(29)]);
var inst_18286 = (state_18300[(2)]);
var inst_18287 = cljs.core.seq.call(null,inst_18232);
var state_18300__$1 = (function (){var statearr_18365 = state_18300;
(statearr_18365[(31)] = inst_18286);

return statearr_18365;
})();
if(inst_18287){
var statearr_18366_18430 = state_18300__$1;
(statearr_18366_18430[(1)] = (42));

} else {
var statearr_18367_18431 = state_18300__$1;
(statearr_18367_18431[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (16))){
var inst_18201 = (state_18300[(7)]);
var inst_18203 = cljs.core.chunked_seq_QMARK_.call(null,inst_18201);
var state_18300__$1 = state_18300;
if(inst_18203){
var statearr_18368_18432 = state_18300__$1;
(statearr_18368_18432[(1)] = (19));

} else {
var statearr_18369_18433 = state_18300__$1;
(statearr_18369_18433[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (38))){
var inst_18279 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
var statearr_18370_18434 = state_18300__$1;
(statearr_18370_18434[(2)] = inst_18279);

(statearr_18370_18434[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (30))){
var state_18300__$1 = state_18300;
var statearr_18371_18435 = state_18300__$1;
(statearr_18371_18435[(2)] = null);

(statearr_18371_18435[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (10))){
var inst_18182 = (state_18300[(15)]);
var inst_18184 = (state_18300[(16)]);
var inst_18190 = cljs.core._nth.call(null,inst_18182,inst_18184);
var inst_18191 = cljs.core.nth.call(null,inst_18190,(0),null);
var inst_18192 = cljs.core.nth.call(null,inst_18190,(1),null);
var state_18300__$1 = (function (){var statearr_18372 = state_18300;
(statearr_18372[(26)] = inst_18191);

return statearr_18372;
})();
if(cljs.core.truth_(inst_18192)){
var statearr_18373_18436 = state_18300__$1;
(statearr_18373_18436[(1)] = (13));

} else {
var statearr_18374_18437 = state_18300__$1;
(statearr_18374_18437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (18))){
var inst_18225 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
var statearr_18375_18438 = state_18300__$1;
(statearr_18375_18438[(2)] = inst_18225);

(statearr_18375_18438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (42))){
var state_18300__$1 = state_18300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18300__$1,(45),dchan);
} else {
if((state_val_18301 === (37))){
var inst_18268 = (state_18300[(23)]);
var inst_18259 = (state_18300[(25)]);
var inst_18172 = (state_18300[(12)]);
var inst_18268__$1 = cljs.core.first.call(null,inst_18259);
var inst_18269 = cljs.core.async.put_BANG_.call(null,inst_18268__$1,inst_18172,done);
var state_18300__$1 = (function (){var statearr_18376 = state_18300;
(statearr_18376[(23)] = inst_18268__$1);

return statearr_18376;
})();
if(cljs.core.truth_(inst_18269)){
var statearr_18377_18439 = state_18300__$1;
(statearr_18377_18439[(1)] = (39));

} else {
var statearr_18378_18440 = state_18300__$1;
(statearr_18378_18440[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18301 === (8))){
var inst_18183 = (state_18300[(13)]);
var inst_18184 = (state_18300[(16)]);
var inst_18186 = (inst_18184 < inst_18183);
var inst_18187 = inst_18186;
var state_18300__$1 = state_18300;
if(cljs.core.truth_(inst_18187)){
var statearr_18379_18441 = state_18300__$1;
(statearr_18379_18441[(1)] = (10));

} else {
var statearr_18380_18442 = state_18300__$1;
(statearr_18380_18442[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7568__auto___18388,cs,m,dchan,dctr,done))
;
return ((function (switch__7553__auto__,c__7568__auto___18388,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_18384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18384[(0)] = state_machine__7554__auto__);

(statearr_18384[(1)] = (1));

return statearr_18384;
});
var state_machine__7554__auto____1 = (function (state_18300){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_18300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e18385){if((e18385 instanceof Object)){
var ex__7557__auto__ = e18385;
var statearr_18386_18443 = state_18300;
(statearr_18386_18443[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18444 = state_18300;
state_18300 = G__18444;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_18300){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_18300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___18388,cs,m,dchan,dctr,done))
})();
var state__7570__auto__ = (function (){var statearr_18387 = f__7569__auto__.call(null);
(statearr_18387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___18388);

return statearr_18387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___18388,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj18446 = {};
return obj18446;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3969__auto__ = m;
if(and__3969__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4625__auto__ = (((m == null))?null:m);
return (function (){var or__3981__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18447){
var map__18452 = p__18447;
var map__18452__$1 = ((cljs.core.seq_QMARK_.call(null,map__18452))?cljs.core.apply.call(null,cljs.core.hash_map,map__18452):map__18452);
var opts = map__18452__$1;
var statearr_18453_18456 = state;
(statearr_18453_18456[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18452,map__18452__$1,opts){
return (function (val){
var statearr_18454_18457 = state;
(statearr_18454_18457[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18452,map__18452__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18455_18458 = state;
(statearr_18455_18458[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18447 = null;
if (arguments.length > 3) {
var G__18459__i = 0, G__18459__a = new Array(arguments.length -  3);
while (G__18459__i < G__18459__a.length) {G__18459__a[G__18459__i] = arguments[G__18459__i + 3]; ++G__18459__i;}
  p__18447 = new cljs.core.IndexedSeq(G__18459__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18447);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18460){
var state = cljs.core.first(arglist__18460);
arglist__18460 = cljs.core.next(arglist__18460);
var cont_block = cljs.core.first(arglist__18460);
arglist__18460 = cljs.core.next(arglist__18460);
var ports = cljs.core.first(arglist__18460);
var p__18447 = cljs.core.rest(arglist__18460);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18447);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t18580 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18580 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18581){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18581 = meta18581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18580.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18580.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18580.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18580.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18580.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18580.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18580.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18580.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18582){
var self__ = this;
var _18582__$1 = this;
return self__.meta18581;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18582,meta18581__$1){
var self__ = this;
var _18582__$1 = this;
return (new cljs.core.async.t18580(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18581__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18580.cljs$lang$type = true;

cljs.core.async.t18580.cljs$lang$ctorStr = "cljs.core.async/t18580";

cljs.core.async.t18580.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t18580");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18580 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18580(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18581){
return (new cljs.core.async.t18580(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18581));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18580(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7568__auto___18699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___18699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___18699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18652){
var state_val_18653 = (state_18652[(1)]);
if((state_val_18653 === (7))){
var inst_18596 = (state_18652[(7)]);
var inst_18601 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18596);
var state_18652__$1 = state_18652;
var statearr_18654_18700 = state_18652__$1;
(statearr_18654_18700[(2)] = inst_18601);

(statearr_18654_18700[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (20))){
var inst_18611 = (state_18652[(8)]);
var state_18652__$1 = state_18652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18652__$1,(23),out,inst_18611);
} else {
if((state_val_18653 === (1))){
var inst_18586 = (state_18652[(9)]);
var inst_18586__$1 = calc_state.call(null);
var inst_18587 = cljs.core.seq_QMARK_.call(null,inst_18586__$1);
var state_18652__$1 = (function (){var statearr_18655 = state_18652;
(statearr_18655[(9)] = inst_18586__$1);

return statearr_18655;
})();
if(inst_18587){
var statearr_18656_18701 = state_18652__$1;
(statearr_18656_18701[(1)] = (2));

} else {
var statearr_18657_18702 = state_18652__$1;
(statearr_18657_18702[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (24))){
var inst_18604 = (state_18652[(10)]);
var inst_18596 = inst_18604;
var state_18652__$1 = (function (){var statearr_18658 = state_18652;
(statearr_18658[(7)] = inst_18596);

return statearr_18658;
})();
var statearr_18659_18703 = state_18652__$1;
(statearr_18659_18703[(2)] = null);

(statearr_18659_18703[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (4))){
var inst_18586 = (state_18652[(9)]);
var inst_18592 = (state_18652[(2)]);
var inst_18593 = cljs.core.get.call(null,inst_18592,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18594 = cljs.core.get.call(null,inst_18592,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18595 = cljs.core.get.call(null,inst_18592,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18596 = inst_18586;
var state_18652__$1 = (function (){var statearr_18660 = state_18652;
(statearr_18660[(11)] = inst_18593);

(statearr_18660[(7)] = inst_18596);

(statearr_18660[(12)] = inst_18595);

(statearr_18660[(13)] = inst_18594);

return statearr_18660;
})();
var statearr_18661_18704 = state_18652__$1;
(statearr_18661_18704[(2)] = null);

(statearr_18661_18704[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (15))){
var state_18652__$1 = state_18652;
var statearr_18662_18705 = state_18652__$1;
(statearr_18662_18705[(2)] = null);

(statearr_18662_18705[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (21))){
var inst_18604 = (state_18652[(10)]);
var inst_18596 = inst_18604;
var state_18652__$1 = (function (){var statearr_18663 = state_18652;
(statearr_18663[(7)] = inst_18596);

return statearr_18663;
})();
var statearr_18664_18706 = state_18652__$1;
(statearr_18664_18706[(2)] = null);

(statearr_18664_18706[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (13))){
var inst_18648 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
var statearr_18665_18707 = state_18652__$1;
(statearr_18665_18707[(2)] = inst_18648);

(statearr_18665_18707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (22))){
var inst_18646 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
var statearr_18666_18708 = state_18652__$1;
(statearr_18666_18708[(2)] = inst_18646);

(statearr_18666_18708[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (6))){
var inst_18650 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18652__$1,inst_18650);
} else {
if((state_val_18653 === (25))){
var state_18652__$1 = state_18652;
var statearr_18667_18709 = state_18652__$1;
(statearr_18667_18709[(2)] = null);

(statearr_18667_18709[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (17))){
var inst_18626 = (state_18652[(14)]);
var state_18652__$1 = state_18652;
var statearr_18668_18710 = state_18652__$1;
(statearr_18668_18710[(2)] = inst_18626);

(statearr_18668_18710[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (3))){
var inst_18586 = (state_18652[(9)]);
var state_18652__$1 = state_18652;
var statearr_18669_18711 = state_18652__$1;
(statearr_18669_18711[(2)] = inst_18586);

(statearr_18669_18711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (12))){
var inst_18612 = (state_18652[(15)]);
var inst_18607 = (state_18652[(16)]);
var inst_18626 = (state_18652[(14)]);
var inst_18626__$1 = inst_18607.call(null,inst_18612);
var state_18652__$1 = (function (){var statearr_18670 = state_18652;
(statearr_18670[(14)] = inst_18626__$1);

return statearr_18670;
})();
if(cljs.core.truth_(inst_18626__$1)){
var statearr_18671_18712 = state_18652__$1;
(statearr_18671_18712[(1)] = (17));

} else {
var statearr_18672_18713 = state_18652__$1;
(statearr_18672_18713[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (2))){
var inst_18586 = (state_18652[(9)]);
var inst_18589 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18586);
var state_18652__$1 = state_18652;
var statearr_18673_18714 = state_18652__$1;
(statearr_18673_18714[(2)] = inst_18589);

(statearr_18673_18714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (23))){
var inst_18637 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
if(cljs.core.truth_(inst_18637)){
var statearr_18674_18715 = state_18652__$1;
(statearr_18674_18715[(1)] = (24));

} else {
var statearr_18675_18716 = state_18652__$1;
(statearr_18675_18716[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (19))){
var inst_18634 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
if(cljs.core.truth_(inst_18634)){
var statearr_18676_18717 = state_18652__$1;
(statearr_18676_18717[(1)] = (20));

} else {
var statearr_18677_18718 = state_18652__$1;
(statearr_18677_18718[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (11))){
var inst_18611 = (state_18652[(8)]);
var inst_18617 = (inst_18611 == null);
var state_18652__$1 = state_18652;
if(cljs.core.truth_(inst_18617)){
var statearr_18678_18719 = state_18652__$1;
(statearr_18678_18719[(1)] = (14));

} else {
var statearr_18679_18720 = state_18652__$1;
(statearr_18679_18720[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (9))){
var inst_18604 = (state_18652[(10)]);
var inst_18604__$1 = (state_18652[(2)]);
var inst_18605 = cljs.core.get.call(null,inst_18604__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18606 = cljs.core.get.call(null,inst_18604__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18607 = cljs.core.get.call(null,inst_18604__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_18652__$1 = (function (){var statearr_18680 = state_18652;
(statearr_18680[(17)] = inst_18606);

(statearr_18680[(16)] = inst_18607);

(statearr_18680[(10)] = inst_18604__$1);

return statearr_18680;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18652__$1,(10),inst_18605);
} else {
if((state_val_18653 === (5))){
var inst_18596 = (state_18652[(7)]);
var inst_18599 = cljs.core.seq_QMARK_.call(null,inst_18596);
var state_18652__$1 = state_18652;
if(inst_18599){
var statearr_18681_18721 = state_18652__$1;
(statearr_18681_18721[(1)] = (7));

} else {
var statearr_18682_18722 = state_18652__$1;
(statearr_18682_18722[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (14))){
var inst_18612 = (state_18652[(15)]);
var inst_18619 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18612);
var state_18652__$1 = state_18652;
var statearr_18683_18723 = state_18652__$1;
(statearr_18683_18723[(2)] = inst_18619);

(statearr_18683_18723[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (26))){
var inst_18642 = (state_18652[(2)]);
var state_18652__$1 = state_18652;
var statearr_18684_18724 = state_18652__$1;
(statearr_18684_18724[(2)] = inst_18642);

(statearr_18684_18724[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (16))){
var inst_18622 = (state_18652[(2)]);
var inst_18623 = calc_state.call(null);
var inst_18596 = inst_18623;
var state_18652__$1 = (function (){var statearr_18685 = state_18652;
(statearr_18685[(7)] = inst_18596);

(statearr_18685[(18)] = inst_18622);

return statearr_18685;
})();
var statearr_18686_18725 = state_18652__$1;
(statearr_18686_18725[(2)] = null);

(statearr_18686_18725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (10))){
var inst_18612 = (state_18652[(15)]);
var inst_18611 = (state_18652[(8)]);
var inst_18610 = (state_18652[(2)]);
var inst_18611__$1 = cljs.core.nth.call(null,inst_18610,(0),null);
var inst_18612__$1 = cljs.core.nth.call(null,inst_18610,(1),null);
var inst_18613 = (inst_18611__$1 == null);
var inst_18614 = cljs.core._EQ_.call(null,inst_18612__$1,change);
var inst_18615 = (inst_18613) || (inst_18614);
var state_18652__$1 = (function (){var statearr_18687 = state_18652;
(statearr_18687[(15)] = inst_18612__$1);

(statearr_18687[(8)] = inst_18611__$1);

return statearr_18687;
})();
if(cljs.core.truth_(inst_18615)){
var statearr_18688_18726 = state_18652__$1;
(statearr_18688_18726[(1)] = (11));

} else {
var statearr_18689_18727 = state_18652__$1;
(statearr_18689_18727[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (18))){
var inst_18606 = (state_18652[(17)]);
var inst_18612 = (state_18652[(15)]);
var inst_18607 = (state_18652[(16)]);
var inst_18629 = cljs.core.empty_QMARK_.call(null,inst_18607);
var inst_18630 = inst_18606.call(null,inst_18612);
var inst_18631 = cljs.core.not.call(null,inst_18630);
var inst_18632 = (inst_18629) && (inst_18631);
var state_18652__$1 = state_18652;
var statearr_18690_18728 = state_18652__$1;
(statearr_18690_18728[(2)] = inst_18632);

(statearr_18690_18728[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18653 === (8))){
var inst_18596 = (state_18652[(7)]);
var state_18652__$1 = state_18652;
var statearr_18691_18729 = state_18652__$1;
(statearr_18691_18729[(2)] = inst_18596);

(statearr_18691_18729[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7568__auto___18699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7553__auto__,c__7568__auto___18699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_18695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18695[(0)] = state_machine__7554__auto__);

(statearr_18695[(1)] = (1));

return statearr_18695;
});
var state_machine__7554__auto____1 = (function (state_18652){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_18652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e18696){if((e18696 instanceof Object)){
var ex__7557__auto__ = e18696;
var statearr_18697_18730 = state_18652;
(statearr_18697_18730[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18731 = state_18652;
state_18652 = G__18731;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_18652){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_18652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___18699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7570__auto__ = (function (){var statearr_18698 = f__7569__auto__.call(null);
(statearr_18698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___18699);

return statearr_18698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___18699,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj18733 = {};
return obj18733;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3969__auto__ = p;
if(and__3969__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3969__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4625__auto__ = (((p == null))?null:p);
return (function (){var or__3981__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3969__auto__ = p;
if(and__3969__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3969__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4625__auto__ = (((p == null))?null:p);
return (function (){var or__3981__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3969__auto__ = p;
if(and__3969__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3969__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4625__auto__ = (((p == null))?null:p);
return (function (){var or__3981__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3969__auto__ = p;
if(and__3969__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4625__auto__ = (((p == null))?null:p);
return (function (){var or__3981__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3981__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3981__auto__,mults){
return (function (p1__18734_SHARP_){
if(cljs.core.truth_(p1__18734_SHARP_.call(null,topic))){
return p1__18734_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18734_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3981__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18857 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18857 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18858){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18858 = meta18858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18857.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18857.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18857.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t18857.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18857.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18857.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18857.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18859){
var self__ = this;
var _18859__$1 = this;
return self__.meta18858;
});})(mults,ensure_mult))
;

cljs.core.async.t18857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18859,meta18858__$1){
var self__ = this;
var _18859__$1 = this;
return (new cljs.core.async.t18857(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18858__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18857.cljs$lang$type = true;

cljs.core.async.t18857.cljs$lang$ctorStr = "cljs.core.async/t18857";

cljs.core.async.t18857.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t18857");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18857 = ((function (mults,ensure_mult){
return (function __GT_t18857(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18858){
return (new cljs.core.async.t18857(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18858));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18857(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7568__auto___18979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___18979,mults,ensure_mult,p){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___18979,mults,ensure_mult,p){
return (function (state_18931){
var state_val_18932 = (state_18931[(1)]);
if((state_val_18932 === (7))){
var inst_18927 = (state_18931[(2)]);
var state_18931__$1 = state_18931;
var statearr_18933_18980 = state_18931__$1;
(statearr_18933_18980[(2)] = inst_18927);

(statearr_18933_18980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (20))){
var state_18931__$1 = state_18931;
var statearr_18934_18981 = state_18931__$1;
(statearr_18934_18981[(2)] = null);

(statearr_18934_18981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (1))){
var state_18931__$1 = state_18931;
var statearr_18935_18982 = state_18931__$1;
(statearr_18935_18982[(2)] = null);

(statearr_18935_18982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (24))){
var inst_18910 = (state_18931[(7)]);
var inst_18919 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18910);
var state_18931__$1 = state_18931;
var statearr_18936_18983 = state_18931__$1;
(statearr_18936_18983[(2)] = inst_18919);

(statearr_18936_18983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (4))){
var inst_18862 = (state_18931[(8)]);
var inst_18862__$1 = (state_18931[(2)]);
var inst_18863 = (inst_18862__$1 == null);
var state_18931__$1 = (function (){var statearr_18937 = state_18931;
(statearr_18937[(8)] = inst_18862__$1);

return statearr_18937;
})();
if(cljs.core.truth_(inst_18863)){
var statearr_18938_18984 = state_18931__$1;
(statearr_18938_18984[(1)] = (5));

} else {
var statearr_18939_18985 = state_18931__$1;
(statearr_18939_18985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (15))){
var inst_18904 = (state_18931[(2)]);
var state_18931__$1 = state_18931;
var statearr_18940_18986 = state_18931__$1;
(statearr_18940_18986[(2)] = inst_18904);

(statearr_18940_18986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (21))){
var inst_18924 = (state_18931[(2)]);
var state_18931__$1 = (function (){var statearr_18941 = state_18931;
(statearr_18941[(9)] = inst_18924);

return statearr_18941;
})();
var statearr_18942_18987 = state_18931__$1;
(statearr_18942_18987[(2)] = null);

(statearr_18942_18987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (13))){
var inst_18886 = (state_18931[(10)]);
var inst_18888 = cljs.core.chunked_seq_QMARK_.call(null,inst_18886);
var state_18931__$1 = state_18931;
if(inst_18888){
var statearr_18943_18988 = state_18931__$1;
(statearr_18943_18988[(1)] = (16));

} else {
var statearr_18944_18989 = state_18931__$1;
(statearr_18944_18989[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (22))){
var inst_18916 = (state_18931[(2)]);
var state_18931__$1 = state_18931;
if(cljs.core.truth_(inst_18916)){
var statearr_18945_18990 = state_18931__$1;
(statearr_18945_18990[(1)] = (23));

} else {
var statearr_18946_18991 = state_18931__$1;
(statearr_18946_18991[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (6))){
var inst_18910 = (state_18931[(7)]);
var inst_18862 = (state_18931[(8)]);
var inst_18912 = (state_18931[(11)]);
var inst_18910__$1 = topic_fn.call(null,inst_18862);
var inst_18911 = cljs.core.deref.call(null,mults);
var inst_18912__$1 = cljs.core.get.call(null,inst_18911,inst_18910__$1);
var state_18931__$1 = (function (){var statearr_18947 = state_18931;
(statearr_18947[(7)] = inst_18910__$1);

(statearr_18947[(11)] = inst_18912__$1);

return statearr_18947;
})();
if(cljs.core.truth_(inst_18912__$1)){
var statearr_18948_18992 = state_18931__$1;
(statearr_18948_18992[(1)] = (19));

} else {
var statearr_18949_18993 = state_18931__$1;
(statearr_18949_18993[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (25))){
var inst_18921 = (state_18931[(2)]);
var state_18931__$1 = state_18931;
var statearr_18950_18994 = state_18931__$1;
(statearr_18950_18994[(2)] = inst_18921);

(statearr_18950_18994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (17))){
var inst_18886 = (state_18931[(10)]);
var inst_18895 = cljs.core.first.call(null,inst_18886);
var inst_18896 = cljs.core.async.muxch_STAR_.call(null,inst_18895);
var inst_18897 = cljs.core.async.close_BANG_.call(null,inst_18896);
var inst_18898 = cljs.core.next.call(null,inst_18886);
var inst_18872 = inst_18898;
var inst_18873 = null;
var inst_18874 = (0);
var inst_18875 = (0);
var state_18931__$1 = (function (){var statearr_18951 = state_18931;
(statearr_18951[(12)] = inst_18875);

(statearr_18951[(13)] = inst_18874);

(statearr_18951[(14)] = inst_18872);

(statearr_18951[(15)] = inst_18873);

(statearr_18951[(16)] = inst_18897);

return statearr_18951;
})();
var statearr_18952_18995 = state_18931__$1;
(statearr_18952_18995[(2)] = null);

(statearr_18952_18995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (3))){
var inst_18929 = (state_18931[(2)]);
var state_18931__$1 = state_18931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18931__$1,inst_18929);
} else {
if((state_val_18932 === (12))){
var inst_18906 = (state_18931[(2)]);
var state_18931__$1 = state_18931;
var statearr_18953_18996 = state_18931__$1;
(statearr_18953_18996[(2)] = inst_18906);

(statearr_18953_18996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (2))){
var state_18931__$1 = state_18931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18931__$1,(4),ch);
} else {
if((state_val_18932 === (23))){
var state_18931__$1 = state_18931;
var statearr_18954_18997 = state_18931__$1;
(statearr_18954_18997[(2)] = null);

(statearr_18954_18997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (19))){
var inst_18862 = (state_18931[(8)]);
var inst_18912 = (state_18931[(11)]);
var inst_18914 = cljs.core.async.muxch_STAR_.call(null,inst_18912);
var state_18931__$1 = state_18931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18931__$1,(22),inst_18914,inst_18862);
} else {
if((state_val_18932 === (11))){
var inst_18872 = (state_18931[(14)]);
var inst_18886 = (state_18931[(10)]);
var inst_18886__$1 = cljs.core.seq.call(null,inst_18872);
var state_18931__$1 = (function (){var statearr_18955 = state_18931;
(statearr_18955[(10)] = inst_18886__$1);

return statearr_18955;
})();
if(inst_18886__$1){
var statearr_18956_18998 = state_18931__$1;
(statearr_18956_18998[(1)] = (13));

} else {
var statearr_18957_18999 = state_18931__$1;
(statearr_18957_18999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (9))){
var inst_18908 = (state_18931[(2)]);
var state_18931__$1 = state_18931;
var statearr_18958_19000 = state_18931__$1;
(statearr_18958_19000[(2)] = inst_18908);

(statearr_18958_19000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (5))){
var inst_18869 = cljs.core.deref.call(null,mults);
var inst_18870 = cljs.core.vals.call(null,inst_18869);
var inst_18871 = cljs.core.seq.call(null,inst_18870);
var inst_18872 = inst_18871;
var inst_18873 = null;
var inst_18874 = (0);
var inst_18875 = (0);
var state_18931__$1 = (function (){var statearr_18959 = state_18931;
(statearr_18959[(12)] = inst_18875);

(statearr_18959[(13)] = inst_18874);

(statearr_18959[(14)] = inst_18872);

(statearr_18959[(15)] = inst_18873);

return statearr_18959;
})();
var statearr_18960_19001 = state_18931__$1;
(statearr_18960_19001[(2)] = null);

(statearr_18960_19001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (14))){
var state_18931__$1 = state_18931;
var statearr_18964_19002 = state_18931__$1;
(statearr_18964_19002[(2)] = null);

(statearr_18964_19002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (16))){
var inst_18886 = (state_18931[(10)]);
var inst_18890 = cljs.core.chunk_first.call(null,inst_18886);
var inst_18891 = cljs.core.chunk_rest.call(null,inst_18886);
var inst_18892 = cljs.core.count.call(null,inst_18890);
var inst_18872 = inst_18891;
var inst_18873 = inst_18890;
var inst_18874 = inst_18892;
var inst_18875 = (0);
var state_18931__$1 = (function (){var statearr_18965 = state_18931;
(statearr_18965[(12)] = inst_18875);

(statearr_18965[(13)] = inst_18874);

(statearr_18965[(14)] = inst_18872);

(statearr_18965[(15)] = inst_18873);

return statearr_18965;
})();
var statearr_18966_19003 = state_18931__$1;
(statearr_18966_19003[(2)] = null);

(statearr_18966_19003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (10))){
var inst_18875 = (state_18931[(12)]);
var inst_18874 = (state_18931[(13)]);
var inst_18872 = (state_18931[(14)]);
var inst_18873 = (state_18931[(15)]);
var inst_18880 = cljs.core._nth.call(null,inst_18873,inst_18875);
var inst_18881 = cljs.core.async.muxch_STAR_.call(null,inst_18880);
var inst_18882 = cljs.core.async.close_BANG_.call(null,inst_18881);
var inst_18883 = (inst_18875 + (1));
var tmp18961 = inst_18874;
var tmp18962 = inst_18872;
var tmp18963 = inst_18873;
var inst_18872__$1 = tmp18962;
var inst_18873__$1 = tmp18963;
var inst_18874__$1 = tmp18961;
var inst_18875__$1 = inst_18883;
var state_18931__$1 = (function (){var statearr_18967 = state_18931;
(statearr_18967[(12)] = inst_18875__$1);

(statearr_18967[(13)] = inst_18874__$1);

(statearr_18967[(14)] = inst_18872__$1);

(statearr_18967[(17)] = inst_18882);

(statearr_18967[(15)] = inst_18873__$1);

return statearr_18967;
})();
var statearr_18968_19004 = state_18931__$1;
(statearr_18968_19004[(2)] = null);

(statearr_18968_19004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (18))){
var inst_18901 = (state_18931[(2)]);
var state_18931__$1 = state_18931;
var statearr_18969_19005 = state_18931__$1;
(statearr_18969_19005[(2)] = inst_18901);

(statearr_18969_19005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18932 === (8))){
var inst_18875 = (state_18931[(12)]);
var inst_18874 = (state_18931[(13)]);
var inst_18877 = (inst_18875 < inst_18874);
var inst_18878 = inst_18877;
var state_18931__$1 = state_18931;
if(cljs.core.truth_(inst_18878)){
var statearr_18970_19006 = state_18931__$1;
(statearr_18970_19006[(1)] = (10));

} else {
var statearr_18971_19007 = state_18931__$1;
(statearr_18971_19007[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7568__auto___18979,mults,ensure_mult,p))
;
return ((function (switch__7553__auto__,c__7568__auto___18979,mults,ensure_mult,p){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_18975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18975[(0)] = state_machine__7554__auto__);

(statearr_18975[(1)] = (1));

return statearr_18975;
});
var state_machine__7554__auto____1 = (function (state_18931){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_18931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e18976){if((e18976 instanceof Object)){
var ex__7557__auto__ = e18976;
var statearr_18977_19008 = state_18931;
(statearr_18977_19008[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19009 = state_18931;
state_18931 = G__19009;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_18931){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_18931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___18979,mults,ensure_mult,p))
})();
var state__7570__auto__ = (function (){var statearr_18978 = f__7569__auto__.call(null);
(statearr_18978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___18979);

return statearr_18978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___18979,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7568__auto___19146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___19146,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___19146,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_19116){
var state_val_19117 = (state_19116[(1)]);
if((state_val_19117 === (7))){
var state_19116__$1 = state_19116;
var statearr_19118_19147 = state_19116__$1;
(statearr_19118_19147[(2)] = null);

(statearr_19118_19147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (1))){
var state_19116__$1 = state_19116;
var statearr_19119_19148 = state_19116__$1;
(statearr_19119_19148[(2)] = null);

(statearr_19119_19148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (4))){
var inst_19080 = (state_19116[(7)]);
var inst_19082 = (inst_19080 < cnt);
var state_19116__$1 = state_19116;
if(cljs.core.truth_(inst_19082)){
var statearr_19120_19149 = state_19116__$1;
(statearr_19120_19149[(1)] = (6));

} else {
var statearr_19121_19150 = state_19116__$1;
(statearr_19121_19150[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (15))){
var inst_19112 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19122_19151 = state_19116__$1;
(statearr_19122_19151[(2)] = inst_19112);

(statearr_19122_19151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (13))){
var inst_19105 = cljs.core.async.close_BANG_.call(null,out);
var state_19116__$1 = state_19116;
var statearr_19123_19152 = state_19116__$1;
(statearr_19123_19152[(2)] = inst_19105);

(statearr_19123_19152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (6))){
var state_19116__$1 = state_19116;
var statearr_19124_19153 = state_19116__$1;
(statearr_19124_19153[(2)] = null);

(statearr_19124_19153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (3))){
var inst_19114 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19116__$1,inst_19114);
} else {
if((state_val_19117 === (12))){
var inst_19102 = (state_19116[(8)]);
var inst_19102__$1 = (state_19116[(2)]);
var inst_19103 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19102__$1);
var state_19116__$1 = (function (){var statearr_19125 = state_19116;
(statearr_19125[(8)] = inst_19102__$1);

return statearr_19125;
})();
if(cljs.core.truth_(inst_19103)){
var statearr_19126_19154 = state_19116__$1;
(statearr_19126_19154[(1)] = (13));

} else {
var statearr_19127_19155 = state_19116__$1;
(statearr_19127_19155[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (2))){
var inst_19079 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19080 = (0);
var state_19116__$1 = (function (){var statearr_19128 = state_19116;
(statearr_19128[(9)] = inst_19079);

(statearr_19128[(7)] = inst_19080);

return statearr_19128;
})();
var statearr_19129_19156 = state_19116__$1;
(statearr_19129_19156[(2)] = null);

(statearr_19129_19156[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (11))){
var inst_19080 = (state_19116[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19116,(10),Object,null,(9));
var inst_19089 = chs__$1.call(null,inst_19080);
var inst_19090 = done.call(null,inst_19080);
var inst_19091 = cljs.core.async.take_BANG_.call(null,inst_19089,inst_19090);
var state_19116__$1 = state_19116;
var statearr_19130_19157 = state_19116__$1;
(statearr_19130_19157[(2)] = inst_19091);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19116__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (9))){
var inst_19080 = (state_19116[(7)]);
var inst_19093 = (state_19116[(2)]);
var inst_19094 = (inst_19080 + (1));
var inst_19080__$1 = inst_19094;
var state_19116__$1 = (function (){var statearr_19131 = state_19116;
(statearr_19131[(7)] = inst_19080__$1);

(statearr_19131[(10)] = inst_19093);

return statearr_19131;
})();
var statearr_19132_19158 = state_19116__$1;
(statearr_19132_19158[(2)] = null);

(statearr_19132_19158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (5))){
var inst_19100 = (state_19116[(2)]);
var state_19116__$1 = (function (){var statearr_19133 = state_19116;
(statearr_19133[(11)] = inst_19100);

return statearr_19133;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19116__$1,(12),dchan);
} else {
if((state_val_19117 === (14))){
var inst_19102 = (state_19116[(8)]);
var inst_19107 = cljs.core.apply.call(null,f,inst_19102);
var state_19116__$1 = state_19116;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19116__$1,(16),out,inst_19107);
} else {
if((state_val_19117 === (16))){
var inst_19109 = (state_19116[(2)]);
var state_19116__$1 = (function (){var statearr_19134 = state_19116;
(statearr_19134[(12)] = inst_19109);

return statearr_19134;
})();
var statearr_19135_19159 = state_19116__$1;
(statearr_19135_19159[(2)] = null);

(statearr_19135_19159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (10))){
var inst_19084 = (state_19116[(2)]);
var inst_19085 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19116__$1 = (function (){var statearr_19136 = state_19116;
(statearr_19136[(13)] = inst_19084);

return statearr_19136;
})();
var statearr_19137_19160 = state_19116__$1;
(statearr_19137_19160[(2)] = inst_19085);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19116__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19117 === (8))){
var inst_19098 = (state_19116[(2)]);
var state_19116__$1 = state_19116;
var statearr_19138_19161 = state_19116__$1;
(statearr_19138_19161[(2)] = inst_19098);

(statearr_19138_19161[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7568__auto___19146,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7553__auto__,c__7568__auto___19146,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_19142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19142[(0)] = state_machine__7554__auto__);

(statearr_19142[(1)] = (1));

return statearr_19142;
});
var state_machine__7554__auto____1 = (function (state_19116){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_19116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e19143){if((e19143 instanceof Object)){
var ex__7557__auto__ = e19143;
var statearr_19144_19162 = state_19116;
(statearr_19144_19162[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19163 = state_19116;
state_19116 = G__19163;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_19116){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_19116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___19146,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7570__auto__ = (function (){var statearr_19145 = f__7569__auto__.call(null);
(statearr_19145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___19146);

return statearr_19145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___19146,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7568__auto___19271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___19271,out){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___19271,out){
return (function (state_19247){
var state_val_19248 = (state_19247[(1)]);
if((state_val_19248 === (7))){
var inst_19226 = (state_19247[(7)]);
var inst_19227 = (state_19247[(8)]);
var inst_19226__$1 = (state_19247[(2)]);
var inst_19227__$1 = cljs.core.nth.call(null,inst_19226__$1,(0),null);
var inst_19228 = cljs.core.nth.call(null,inst_19226__$1,(1),null);
var inst_19229 = (inst_19227__$1 == null);
var state_19247__$1 = (function (){var statearr_19249 = state_19247;
(statearr_19249[(9)] = inst_19228);

(statearr_19249[(7)] = inst_19226__$1);

(statearr_19249[(8)] = inst_19227__$1);

return statearr_19249;
})();
if(cljs.core.truth_(inst_19229)){
var statearr_19250_19272 = state_19247__$1;
(statearr_19250_19272[(1)] = (8));

} else {
var statearr_19251_19273 = state_19247__$1;
(statearr_19251_19273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (1))){
var inst_19218 = cljs.core.vec.call(null,chs);
var inst_19219 = inst_19218;
var state_19247__$1 = (function (){var statearr_19252 = state_19247;
(statearr_19252[(10)] = inst_19219);

return statearr_19252;
})();
var statearr_19253_19274 = state_19247__$1;
(statearr_19253_19274[(2)] = null);

(statearr_19253_19274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (4))){
var inst_19219 = (state_19247[(10)]);
var state_19247__$1 = state_19247;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19247__$1,(7),inst_19219);
} else {
if((state_val_19248 === (6))){
var inst_19243 = (state_19247[(2)]);
var state_19247__$1 = state_19247;
var statearr_19254_19275 = state_19247__$1;
(statearr_19254_19275[(2)] = inst_19243);

(statearr_19254_19275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (3))){
var inst_19245 = (state_19247[(2)]);
var state_19247__$1 = state_19247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19247__$1,inst_19245);
} else {
if((state_val_19248 === (2))){
var inst_19219 = (state_19247[(10)]);
var inst_19221 = cljs.core.count.call(null,inst_19219);
var inst_19222 = (inst_19221 > (0));
var state_19247__$1 = state_19247;
if(cljs.core.truth_(inst_19222)){
var statearr_19256_19276 = state_19247__$1;
(statearr_19256_19276[(1)] = (4));

} else {
var statearr_19257_19277 = state_19247__$1;
(statearr_19257_19277[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (11))){
var inst_19219 = (state_19247[(10)]);
var inst_19236 = (state_19247[(2)]);
var tmp19255 = inst_19219;
var inst_19219__$1 = tmp19255;
var state_19247__$1 = (function (){var statearr_19258 = state_19247;
(statearr_19258[(11)] = inst_19236);

(statearr_19258[(10)] = inst_19219__$1);

return statearr_19258;
})();
var statearr_19259_19278 = state_19247__$1;
(statearr_19259_19278[(2)] = null);

(statearr_19259_19278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (9))){
var inst_19227 = (state_19247[(8)]);
var state_19247__$1 = state_19247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19247__$1,(11),out,inst_19227);
} else {
if((state_val_19248 === (5))){
var inst_19241 = cljs.core.async.close_BANG_.call(null,out);
var state_19247__$1 = state_19247;
var statearr_19260_19279 = state_19247__$1;
(statearr_19260_19279[(2)] = inst_19241);

(statearr_19260_19279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (10))){
var inst_19239 = (state_19247[(2)]);
var state_19247__$1 = state_19247;
var statearr_19261_19280 = state_19247__$1;
(statearr_19261_19280[(2)] = inst_19239);

(statearr_19261_19280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19248 === (8))){
var inst_19228 = (state_19247[(9)]);
var inst_19219 = (state_19247[(10)]);
var inst_19226 = (state_19247[(7)]);
var inst_19227 = (state_19247[(8)]);
var inst_19231 = (function (){var c = inst_19228;
var v = inst_19227;
var vec__19224 = inst_19226;
var cs = inst_19219;
return ((function (c,v,vec__19224,cs,inst_19228,inst_19219,inst_19226,inst_19227,state_val_19248,c__7568__auto___19271,out){
return (function (p1__19164_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19164_SHARP_);
});
;})(c,v,vec__19224,cs,inst_19228,inst_19219,inst_19226,inst_19227,state_val_19248,c__7568__auto___19271,out))
})();
var inst_19232 = cljs.core.filterv.call(null,inst_19231,inst_19219);
var inst_19219__$1 = inst_19232;
var state_19247__$1 = (function (){var statearr_19262 = state_19247;
(statearr_19262[(10)] = inst_19219__$1);

return statearr_19262;
})();
var statearr_19263_19281 = state_19247__$1;
(statearr_19263_19281[(2)] = null);

(statearr_19263_19281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7568__auto___19271,out))
;
return ((function (switch__7553__auto__,c__7568__auto___19271,out){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_19267 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19267[(0)] = state_machine__7554__auto__);

(statearr_19267[(1)] = (1));

return statearr_19267;
});
var state_machine__7554__auto____1 = (function (state_19247){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_19247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e19268){if((e19268 instanceof Object)){
var ex__7557__auto__ = e19268;
var statearr_19269_19282 = state_19247;
(statearr_19269_19282[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19283 = state_19247;
state_19247 = G__19283;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_19247){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_19247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___19271,out))
})();
var state__7570__auto__ = (function (){var statearr_19270 = f__7569__auto__.call(null);
(statearr_19270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___19271);

return statearr_19270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___19271,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7568__auto___19376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___19376,out){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___19376,out){
return (function (state_19353){
var state_val_19354 = (state_19353[(1)]);
if((state_val_19354 === (7))){
var inst_19335 = (state_19353[(7)]);
var inst_19335__$1 = (state_19353[(2)]);
var inst_19336 = (inst_19335__$1 == null);
var inst_19337 = cljs.core.not.call(null,inst_19336);
var state_19353__$1 = (function (){var statearr_19355 = state_19353;
(statearr_19355[(7)] = inst_19335__$1);

return statearr_19355;
})();
if(inst_19337){
var statearr_19356_19377 = state_19353__$1;
(statearr_19356_19377[(1)] = (8));

} else {
var statearr_19357_19378 = state_19353__$1;
(statearr_19357_19378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (1))){
var inst_19330 = (0);
var state_19353__$1 = (function (){var statearr_19358 = state_19353;
(statearr_19358[(8)] = inst_19330);

return statearr_19358;
})();
var statearr_19359_19379 = state_19353__$1;
(statearr_19359_19379[(2)] = null);

(statearr_19359_19379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (4))){
var state_19353__$1 = state_19353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19353__$1,(7),ch);
} else {
if((state_val_19354 === (6))){
var inst_19348 = (state_19353[(2)]);
var state_19353__$1 = state_19353;
var statearr_19360_19380 = state_19353__$1;
(statearr_19360_19380[(2)] = inst_19348);

(statearr_19360_19380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (3))){
var inst_19350 = (state_19353[(2)]);
var inst_19351 = cljs.core.async.close_BANG_.call(null,out);
var state_19353__$1 = (function (){var statearr_19361 = state_19353;
(statearr_19361[(9)] = inst_19350);

return statearr_19361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19353__$1,inst_19351);
} else {
if((state_val_19354 === (2))){
var inst_19330 = (state_19353[(8)]);
var inst_19332 = (inst_19330 < n);
var state_19353__$1 = state_19353;
if(cljs.core.truth_(inst_19332)){
var statearr_19362_19381 = state_19353__$1;
(statearr_19362_19381[(1)] = (4));

} else {
var statearr_19363_19382 = state_19353__$1;
(statearr_19363_19382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (11))){
var inst_19330 = (state_19353[(8)]);
var inst_19340 = (state_19353[(2)]);
var inst_19341 = (inst_19330 + (1));
var inst_19330__$1 = inst_19341;
var state_19353__$1 = (function (){var statearr_19364 = state_19353;
(statearr_19364[(8)] = inst_19330__$1);

(statearr_19364[(10)] = inst_19340);

return statearr_19364;
})();
var statearr_19365_19383 = state_19353__$1;
(statearr_19365_19383[(2)] = null);

(statearr_19365_19383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (9))){
var state_19353__$1 = state_19353;
var statearr_19366_19384 = state_19353__$1;
(statearr_19366_19384[(2)] = null);

(statearr_19366_19384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (5))){
var state_19353__$1 = state_19353;
var statearr_19367_19385 = state_19353__$1;
(statearr_19367_19385[(2)] = null);

(statearr_19367_19385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (10))){
var inst_19345 = (state_19353[(2)]);
var state_19353__$1 = state_19353;
var statearr_19368_19386 = state_19353__$1;
(statearr_19368_19386[(2)] = inst_19345);

(statearr_19368_19386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19354 === (8))){
var inst_19335 = (state_19353[(7)]);
var state_19353__$1 = state_19353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19353__$1,(11),out,inst_19335);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7568__auto___19376,out))
;
return ((function (switch__7553__auto__,c__7568__auto___19376,out){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_19372 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19372[(0)] = state_machine__7554__auto__);

(statearr_19372[(1)] = (1));

return statearr_19372;
});
var state_machine__7554__auto____1 = (function (state_19353){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_19353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e19373){if((e19373 instanceof Object)){
var ex__7557__auto__ = e19373;
var statearr_19374_19387 = state_19353;
(statearr_19374_19387[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19388 = state_19353;
state_19353 = G__19388;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_19353){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_19353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___19376,out))
})();
var state__7570__auto__ = (function (){var statearr_19375 = f__7569__auto__.call(null);
(statearr_19375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___19376);

return statearr_19375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___19376,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t19396 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19396 = (function (ch,f,map_LT_,meta19397){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19397 = meta19397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19396.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19396.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19396.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19396.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19399 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19399 = (function (fn1,_,meta19397,map_LT_,f,ch,meta19400){
this.fn1 = fn1;
this._ = _;
this.meta19397 = meta19397;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19400 = meta19400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19399.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19389_SHARP_){
return f1.call(null,(((p1__19389_SHARP_ == null))?null:self__.f.call(null,p1__19389_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19401){
var self__ = this;
var _19401__$1 = this;
return self__.meta19400;
});})(___$1))
;

cljs.core.async.t19399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19401,meta19400__$1){
var self__ = this;
var _19401__$1 = this;
return (new cljs.core.async.t19399(self__.fn1,self__._,self__.meta19397,self__.map_LT_,self__.f,self__.ch,meta19400__$1));
});})(___$1))
;

cljs.core.async.t19399.cljs$lang$type = true;

cljs.core.async.t19399.cljs$lang$ctorStr = "cljs.core.async/t19399";

cljs.core.async.t19399.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t19399");
});})(___$1))
;

cljs.core.async.__GT_t19399 = ((function (___$1){
return (function __GT_t19399(fn1__$1,___$2,meta19397__$1,map_LT___$1,f__$1,ch__$1,meta19400){
return (new cljs.core.async.t19399(fn1__$1,___$2,meta19397__$1,map_LT___$1,f__$1,ch__$1,meta19400));
});})(___$1))
;

}

return (new cljs.core.async.t19399(fn1,___$1,self__.meta19397,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3969__auto__ = ret;
if(cljs.core.truth_(and__3969__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3969__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t19396.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19396.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19396.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19398){
var self__ = this;
var _19398__$1 = this;
return self__.meta19397;
});

cljs.core.async.t19396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19398,meta19397__$1){
var self__ = this;
var _19398__$1 = this;
return (new cljs.core.async.t19396(self__.ch,self__.f,self__.map_LT_,meta19397__$1));
});

cljs.core.async.t19396.cljs$lang$type = true;

cljs.core.async.t19396.cljs$lang$ctorStr = "cljs.core.async/t19396";

cljs.core.async.t19396.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t19396");
});

cljs.core.async.__GT_t19396 = (function __GT_t19396(ch__$1,f__$1,map_LT___$1,meta19397){
return (new cljs.core.async.t19396(ch__$1,f__$1,map_LT___$1,meta19397));
});

}

return (new cljs.core.async.t19396(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19405 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19405 = (function (ch,f,map_GT_,meta19406){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19406 = meta19406;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19405.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19405.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19405.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19407){
var self__ = this;
var _19407__$1 = this;
return self__.meta19406;
});

cljs.core.async.t19405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19407,meta19406__$1){
var self__ = this;
var _19407__$1 = this;
return (new cljs.core.async.t19405(self__.ch,self__.f,self__.map_GT_,meta19406__$1));
});

cljs.core.async.t19405.cljs$lang$type = true;

cljs.core.async.t19405.cljs$lang$ctorStr = "cljs.core.async/t19405";

cljs.core.async.t19405.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t19405");
});

cljs.core.async.__GT_t19405 = (function __GT_t19405(ch__$1,f__$1,map_GT___$1,meta19406){
return (new cljs.core.async.t19405(ch__$1,f__$1,map_GT___$1,meta19406));
});

}

return (new cljs.core.async.t19405(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19411 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19411 = (function (ch,p,filter_GT_,meta19412){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19412 = meta19412;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19411.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19411.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19411.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19411.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19411.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19411.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19411.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19413){
var self__ = this;
var _19413__$1 = this;
return self__.meta19412;
});

cljs.core.async.t19411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19413,meta19412__$1){
var self__ = this;
var _19413__$1 = this;
return (new cljs.core.async.t19411(self__.ch,self__.p,self__.filter_GT_,meta19412__$1));
});

cljs.core.async.t19411.cljs$lang$type = true;

cljs.core.async.t19411.cljs$lang$ctorStr = "cljs.core.async/t19411";

cljs.core.async.t19411.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t19411");
});

cljs.core.async.__GT_t19411 = (function __GT_t19411(ch__$1,p__$1,filter_GT___$1,meta19412){
return (new cljs.core.async.t19411(ch__$1,p__$1,filter_GT___$1,meta19412));
});

}

return (new cljs.core.async.t19411(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7568__auto___19496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___19496,out){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___19496,out){
return (function (state_19475){
var state_val_19476 = (state_19475[(1)]);
if((state_val_19476 === (7))){
var inst_19471 = (state_19475[(2)]);
var state_19475__$1 = state_19475;
var statearr_19477_19497 = state_19475__$1;
(statearr_19477_19497[(2)] = inst_19471);

(statearr_19477_19497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19476 === (1))){
var state_19475__$1 = state_19475;
var statearr_19478_19498 = state_19475__$1;
(statearr_19478_19498[(2)] = null);

(statearr_19478_19498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19476 === (4))){
var inst_19457 = (state_19475[(7)]);
var inst_19457__$1 = (state_19475[(2)]);
var inst_19458 = (inst_19457__$1 == null);
var state_19475__$1 = (function (){var statearr_19479 = state_19475;
(statearr_19479[(7)] = inst_19457__$1);

return statearr_19479;
})();
if(cljs.core.truth_(inst_19458)){
var statearr_19480_19499 = state_19475__$1;
(statearr_19480_19499[(1)] = (5));

} else {
var statearr_19481_19500 = state_19475__$1;
(statearr_19481_19500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19476 === (6))){
var inst_19457 = (state_19475[(7)]);
var inst_19462 = p.call(null,inst_19457);
var state_19475__$1 = state_19475;
if(cljs.core.truth_(inst_19462)){
var statearr_19482_19501 = state_19475__$1;
(statearr_19482_19501[(1)] = (8));

} else {
var statearr_19483_19502 = state_19475__$1;
(statearr_19483_19502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19476 === (3))){
var inst_19473 = (state_19475[(2)]);
var state_19475__$1 = state_19475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19475__$1,inst_19473);
} else {
if((state_val_19476 === (2))){
var state_19475__$1 = state_19475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19475__$1,(4),ch);
} else {
if((state_val_19476 === (11))){
var inst_19465 = (state_19475[(2)]);
var state_19475__$1 = state_19475;
var statearr_19484_19503 = state_19475__$1;
(statearr_19484_19503[(2)] = inst_19465);

(statearr_19484_19503[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19476 === (9))){
var state_19475__$1 = state_19475;
var statearr_19485_19504 = state_19475__$1;
(statearr_19485_19504[(2)] = null);

(statearr_19485_19504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19476 === (5))){
var inst_19460 = cljs.core.async.close_BANG_.call(null,out);
var state_19475__$1 = state_19475;
var statearr_19486_19505 = state_19475__$1;
(statearr_19486_19505[(2)] = inst_19460);

(statearr_19486_19505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19476 === (10))){
var inst_19468 = (state_19475[(2)]);
var state_19475__$1 = (function (){var statearr_19487 = state_19475;
(statearr_19487[(8)] = inst_19468);

return statearr_19487;
})();
var statearr_19488_19506 = state_19475__$1;
(statearr_19488_19506[(2)] = null);

(statearr_19488_19506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19476 === (8))){
var inst_19457 = (state_19475[(7)]);
var state_19475__$1 = state_19475;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19475__$1,(11),out,inst_19457);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7568__auto___19496,out))
;
return ((function (switch__7553__auto__,c__7568__auto___19496,out){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_19492 = [null,null,null,null,null,null,null,null,null];
(statearr_19492[(0)] = state_machine__7554__auto__);

(statearr_19492[(1)] = (1));

return statearr_19492;
});
var state_machine__7554__auto____1 = (function (state_19475){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_19475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e19493){if((e19493 instanceof Object)){
var ex__7557__auto__ = e19493;
var statearr_19494_19507 = state_19475;
(statearr_19494_19507[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19508 = state_19475;
state_19475 = G__19508;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_19475){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_19475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___19496,out))
})();
var state__7570__auto__ = (function (){var statearr_19495 = f__7569__auto__.call(null);
(statearr_19495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___19496);

return statearr_19495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___19496,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__7568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto__){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto__){
return (function (state_19674){
var state_val_19675 = (state_19674[(1)]);
if((state_val_19675 === (7))){
var inst_19670 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19676_19717 = state_19674__$1;
(statearr_19676_19717[(2)] = inst_19670);

(statearr_19676_19717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (20))){
var inst_19640 = (state_19674[(7)]);
var inst_19651 = (state_19674[(2)]);
var inst_19652 = cljs.core.next.call(null,inst_19640);
var inst_19626 = inst_19652;
var inst_19627 = null;
var inst_19628 = (0);
var inst_19629 = (0);
var state_19674__$1 = (function (){var statearr_19677 = state_19674;
(statearr_19677[(8)] = inst_19626);

(statearr_19677[(9)] = inst_19629);

(statearr_19677[(10)] = inst_19651);

(statearr_19677[(11)] = inst_19628);

(statearr_19677[(12)] = inst_19627);

return statearr_19677;
})();
var statearr_19678_19718 = state_19674__$1;
(statearr_19678_19718[(2)] = null);

(statearr_19678_19718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (1))){
var state_19674__$1 = state_19674;
var statearr_19679_19719 = state_19674__$1;
(statearr_19679_19719[(2)] = null);

(statearr_19679_19719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (4))){
var inst_19615 = (state_19674[(13)]);
var inst_19615__$1 = (state_19674[(2)]);
var inst_19616 = (inst_19615__$1 == null);
var state_19674__$1 = (function (){var statearr_19680 = state_19674;
(statearr_19680[(13)] = inst_19615__$1);

return statearr_19680;
})();
if(cljs.core.truth_(inst_19616)){
var statearr_19681_19720 = state_19674__$1;
(statearr_19681_19720[(1)] = (5));

} else {
var statearr_19682_19721 = state_19674__$1;
(statearr_19682_19721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (15))){
var state_19674__$1 = state_19674;
var statearr_19686_19722 = state_19674__$1;
(statearr_19686_19722[(2)] = null);

(statearr_19686_19722[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (21))){
var state_19674__$1 = state_19674;
var statearr_19687_19723 = state_19674__$1;
(statearr_19687_19723[(2)] = null);

(statearr_19687_19723[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (13))){
var inst_19626 = (state_19674[(8)]);
var inst_19629 = (state_19674[(9)]);
var inst_19628 = (state_19674[(11)]);
var inst_19627 = (state_19674[(12)]);
var inst_19636 = (state_19674[(2)]);
var inst_19637 = (inst_19629 + (1));
var tmp19683 = inst_19626;
var tmp19684 = inst_19628;
var tmp19685 = inst_19627;
var inst_19626__$1 = tmp19683;
var inst_19627__$1 = tmp19685;
var inst_19628__$1 = tmp19684;
var inst_19629__$1 = inst_19637;
var state_19674__$1 = (function (){var statearr_19688 = state_19674;
(statearr_19688[(8)] = inst_19626__$1);

(statearr_19688[(9)] = inst_19629__$1);

(statearr_19688[(11)] = inst_19628__$1);

(statearr_19688[(14)] = inst_19636);

(statearr_19688[(12)] = inst_19627__$1);

return statearr_19688;
})();
var statearr_19689_19724 = state_19674__$1;
(statearr_19689_19724[(2)] = null);

(statearr_19689_19724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (22))){
var state_19674__$1 = state_19674;
var statearr_19690_19725 = state_19674__$1;
(statearr_19690_19725[(2)] = null);

(statearr_19690_19725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (6))){
var inst_19615 = (state_19674[(13)]);
var inst_19624 = f.call(null,inst_19615);
var inst_19625 = cljs.core.seq.call(null,inst_19624);
var inst_19626 = inst_19625;
var inst_19627 = null;
var inst_19628 = (0);
var inst_19629 = (0);
var state_19674__$1 = (function (){var statearr_19691 = state_19674;
(statearr_19691[(8)] = inst_19626);

(statearr_19691[(9)] = inst_19629);

(statearr_19691[(11)] = inst_19628);

(statearr_19691[(12)] = inst_19627);

return statearr_19691;
})();
var statearr_19692_19726 = state_19674__$1;
(statearr_19692_19726[(2)] = null);

(statearr_19692_19726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (17))){
var inst_19640 = (state_19674[(7)]);
var inst_19644 = cljs.core.chunk_first.call(null,inst_19640);
var inst_19645 = cljs.core.chunk_rest.call(null,inst_19640);
var inst_19646 = cljs.core.count.call(null,inst_19644);
var inst_19626 = inst_19645;
var inst_19627 = inst_19644;
var inst_19628 = inst_19646;
var inst_19629 = (0);
var state_19674__$1 = (function (){var statearr_19693 = state_19674;
(statearr_19693[(8)] = inst_19626);

(statearr_19693[(9)] = inst_19629);

(statearr_19693[(11)] = inst_19628);

(statearr_19693[(12)] = inst_19627);

return statearr_19693;
})();
var statearr_19694_19727 = state_19674__$1;
(statearr_19694_19727[(2)] = null);

(statearr_19694_19727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (3))){
var inst_19672 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19674__$1,inst_19672);
} else {
if((state_val_19675 === (12))){
var inst_19660 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19695_19728 = state_19674__$1;
(statearr_19695_19728[(2)] = inst_19660);

(statearr_19695_19728[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (2))){
var state_19674__$1 = state_19674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19674__$1,(4),in$);
} else {
if((state_val_19675 === (23))){
var inst_19668 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19696_19729 = state_19674__$1;
(statearr_19696_19729[(2)] = inst_19668);

(statearr_19696_19729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (19))){
var inst_19655 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19697_19730 = state_19674__$1;
(statearr_19697_19730[(2)] = inst_19655);

(statearr_19697_19730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (11))){
var inst_19626 = (state_19674[(8)]);
var inst_19640 = (state_19674[(7)]);
var inst_19640__$1 = cljs.core.seq.call(null,inst_19626);
var state_19674__$1 = (function (){var statearr_19698 = state_19674;
(statearr_19698[(7)] = inst_19640__$1);

return statearr_19698;
})();
if(inst_19640__$1){
var statearr_19699_19731 = state_19674__$1;
(statearr_19699_19731[(1)] = (14));

} else {
var statearr_19700_19732 = state_19674__$1;
(statearr_19700_19732[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (9))){
var inst_19662 = (state_19674[(2)]);
var inst_19663 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19674__$1 = (function (){var statearr_19701 = state_19674;
(statearr_19701[(15)] = inst_19662);

return statearr_19701;
})();
if(cljs.core.truth_(inst_19663)){
var statearr_19702_19733 = state_19674__$1;
(statearr_19702_19733[(1)] = (21));

} else {
var statearr_19703_19734 = state_19674__$1;
(statearr_19703_19734[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (5))){
var inst_19618 = cljs.core.async.close_BANG_.call(null,out);
var state_19674__$1 = state_19674;
var statearr_19704_19735 = state_19674__$1;
(statearr_19704_19735[(2)] = inst_19618);

(statearr_19704_19735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (14))){
var inst_19640 = (state_19674[(7)]);
var inst_19642 = cljs.core.chunked_seq_QMARK_.call(null,inst_19640);
var state_19674__$1 = state_19674;
if(inst_19642){
var statearr_19705_19736 = state_19674__$1;
(statearr_19705_19736[(1)] = (17));

} else {
var statearr_19706_19737 = state_19674__$1;
(statearr_19706_19737[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (16))){
var inst_19658 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19707_19738 = state_19674__$1;
(statearr_19707_19738[(2)] = inst_19658);

(statearr_19707_19738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (10))){
var inst_19629 = (state_19674[(9)]);
var inst_19627 = (state_19674[(12)]);
var inst_19634 = cljs.core._nth.call(null,inst_19627,inst_19629);
var state_19674__$1 = state_19674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19674__$1,(13),out,inst_19634);
} else {
if((state_val_19675 === (18))){
var inst_19640 = (state_19674[(7)]);
var inst_19649 = cljs.core.first.call(null,inst_19640);
var state_19674__$1 = state_19674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19674__$1,(20),out,inst_19649);
} else {
if((state_val_19675 === (8))){
var inst_19629 = (state_19674[(9)]);
var inst_19628 = (state_19674[(11)]);
var inst_19631 = (inst_19629 < inst_19628);
var inst_19632 = inst_19631;
var state_19674__$1 = state_19674;
if(cljs.core.truth_(inst_19632)){
var statearr_19708_19739 = state_19674__$1;
(statearr_19708_19739[(1)] = (10));

} else {
var statearr_19709_19740 = state_19674__$1;
(statearr_19709_19740[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var statearr_19713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19713[(0)] = state_machine__7554__auto__);

(statearr_19713[(1)] = (1));

return statearr_19713;
});
var state_machine__7554__auto____1 = (function (state_19674){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_19674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e19714){if((e19714 instanceof Object)){
var ex__7557__auto__ = e19714;
var statearr_19715_19741 = state_19674;
(statearr_19715_19741[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19742 = state_19674;
state_19674 = G__19742;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_19674){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_19674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto__))
})();
var state__7570__auto__ = (function (){var statearr_19716 = f__7569__auto__.call(null);
(statearr_19716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto__);

return statearr_19716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto__))
);

return c__7568__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7568__auto___19839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___19839,out){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___19839,out){
return (function (state_19814){
var state_val_19815 = (state_19814[(1)]);
if((state_val_19815 === (7))){
var inst_19809 = (state_19814[(2)]);
var state_19814__$1 = state_19814;
var statearr_19816_19840 = state_19814__$1;
(statearr_19816_19840[(2)] = inst_19809);

(statearr_19816_19840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (1))){
var inst_19791 = null;
var state_19814__$1 = (function (){var statearr_19817 = state_19814;
(statearr_19817[(7)] = inst_19791);

return statearr_19817;
})();
var statearr_19818_19841 = state_19814__$1;
(statearr_19818_19841[(2)] = null);

(statearr_19818_19841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (4))){
var inst_19794 = (state_19814[(8)]);
var inst_19794__$1 = (state_19814[(2)]);
var inst_19795 = (inst_19794__$1 == null);
var inst_19796 = cljs.core.not.call(null,inst_19795);
var state_19814__$1 = (function (){var statearr_19819 = state_19814;
(statearr_19819[(8)] = inst_19794__$1);

return statearr_19819;
})();
if(inst_19796){
var statearr_19820_19842 = state_19814__$1;
(statearr_19820_19842[(1)] = (5));

} else {
var statearr_19821_19843 = state_19814__$1;
(statearr_19821_19843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (6))){
var state_19814__$1 = state_19814;
var statearr_19822_19844 = state_19814__$1;
(statearr_19822_19844[(2)] = null);

(statearr_19822_19844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (3))){
var inst_19811 = (state_19814[(2)]);
var inst_19812 = cljs.core.async.close_BANG_.call(null,out);
var state_19814__$1 = (function (){var statearr_19823 = state_19814;
(statearr_19823[(9)] = inst_19811);

return statearr_19823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19814__$1,inst_19812);
} else {
if((state_val_19815 === (2))){
var state_19814__$1 = state_19814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19814__$1,(4),ch);
} else {
if((state_val_19815 === (11))){
var inst_19794 = (state_19814[(8)]);
var inst_19803 = (state_19814[(2)]);
var inst_19791 = inst_19794;
var state_19814__$1 = (function (){var statearr_19824 = state_19814;
(statearr_19824[(7)] = inst_19791);

(statearr_19824[(10)] = inst_19803);

return statearr_19824;
})();
var statearr_19825_19845 = state_19814__$1;
(statearr_19825_19845[(2)] = null);

(statearr_19825_19845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (9))){
var inst_19794 = (state_19814[(8)]);
var state_19814__$1 = state_19814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19814__$1,(11),out,inst_19794);
} else {
if((state_val_19815 === (5))){
var inst_19794 = (state_19814[(8)]);
var inst_19791 = (state_19814[(7)]);
var inst_19798 = cljs.core._EQ_.call(null,inst_19794,inst_19791);
var state_19814__$1 = state_19814;
if(inst_19798){
var statearr_19827_19846 = state_19814__$1;
(statearr_19827_19846[(1)] = (8));

} else {
var statearr_19828_19847 = state_19814__$1;
(statearr_19828_19847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (10))){
var inst_19806 = (state_19814[(2)]);
var state_19814__$1 = state_19814;
var statearr_19829_19848 = state_19814__$1;
(statearr_19829_19848[(2)] = inst_19806);

(statearr_19829_19848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (8))){
var inst_19791 = (state_19814[(7)]);
var tmp19826 = inst_19791;
var inst_19791__$1 = tmp19826;
var state_19814__$1 = (function (){var statearr_19830 = state_19814;
(statearr_19830[(7)] = inst_19791__$1);

return statearr_19830;
})();
var statearr_19831_19849 = state_19814__$1;
(statearr_19831_19849[(2)] = null);

(statearr_19831_19849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7568__auto___19839,out))
;
return ((function (switch__7553__auto__,c__7568__auto___19839,out){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_19835 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19835[(0)] = state_machine__7554__auto__);

(statearr_19835[(1)] = (1));

return statearr_19835;
});
var state_machine__7554__auto____1 = (function (state_19814){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_19814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e19836){if((e19836 instanceof Object)){
var ex__7557__auto__ = e19836;
var statearr_19837_19850 = state_19814;
(statearr_19837_19850[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19851 = state_19814;
state_19814 = G__19851;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_19814){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_19814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___19839,out))
})();
var state__7570__auto__ = (function (){var statearr_19838 = f__7569__auto__.call(null);
(statearr_19838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___19839);

return statearr_19838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___19839,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7568__auto___19986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___19986,out){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___19986,out){
return (function (state_19956){
var state_val_19957 = (state_19956[(1)]);
if((state_val_19957 === (7))){
var inst_19952 = (state_19956[(2)]);
var state_19956__$1 = state_19956;
var statearr_19958_19987 = state_19956__$1;
(statearr_19958_19987[(2)] = inst_19952);

(statearr_19958_19987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19957 === (1))){
var inst_19919 = (new Array(n));
var inst_19920 = inst_19919;
var inst_19921 = (0);
var state_19956__$1 = (function (){var statearr_19959 = state_19956;
(statearr_19959[(7)] = inst_19921);

(statearr_19959[(8)] = inst_19920);

return statearr_19959;
})();
var statearr_19960_19988 = state_19956__$1;
(statearr_19960_19988[(2)] = null);

(statearr_19960_19988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19957 === (4))){
var inst_19924 = (state_19956[(9)]);
var inst_19924__$1 = (state_19956[(2)]);
var inst_19925 = (inst_19924__$1 == null);
var inst_19926 = cljs.core.not.call(null,inst_19925);
var state_19956__$1 = (function (){var statearr_19961 = state_19956;
(statearr_19961[(9)] = inst_19924__$1);

return statearr_19961;
})();
if(inst_19926){
var statearr_19962_19989 = state_19956__$1;
(statearr_19962_19989[(1)] = (5));

} else {
var statearr_19963_19990 = state_19956__$1;
(statearr_19963_19990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19957 === (15))){
var inst_19946 = (state_19956[(2)]);
var state_19956__$1 = state_19956;
var statearr_19964_19991 = state_19956__$1;
(statearr_19964_19991[(2)] = inst_19946);

(statearr_19964_19991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19957 === (13))){
var state_19956__$1 = state_19956;
var statearr_19965_19992 = state_19956__$1;
(statearr_19965_19992[(2)] = null);

(statearr_19965_19992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19957 === (6))){
var inst_19921 = (state_19956[(7)]);
var inst_19942 = (inst_19921 > (0));
var state_19956__$1 = state_19956;
if(cljs.core.truth_(inst_19942)){
var statearr_19966_19993 = state_19956__$1;
(statearr_19966_19993[(1)] = (12));

} else {
var statearr_19967_19994 = state_19956__$1;
(statearr_19967_19994[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19957 === (3))){
var inst_19954 = (state_19956[(2)]);
var state_19956__$1 = state_19956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19956__$1,inst_19954);
} else {
if((state_val_19957 === (12))){
var inst_19920 = (state_19956[(8)]);
var inst_19944 = cljs.core.vec.call(null,inst_19920);
var state_19956__$1 = state_19956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19956__$1,(15),out,inst_19944);
} else {
if((state_val_19957 === (2))){
var state_19956__$1 = state_19956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19956__$1,(4),ch);
} else {
if((state_val_19957 === (11))){
var inst_19936 = (state_19956[(2)]);
var inst_19937 = (new Array(n));
var inst_19920 = inst_19937;
var inst_19921 = (0);
var state_19956__$1 = (function (){var statearr_19968 = state_19956;
(statearr_19968[(10)] = inst_19936);

(statearr_19968[(7)] = inst_19921);

(statearr_19968[(8)] = inst_19920);

return statearr_19968;
})();
var statearr_19969_19995 = state_19956__$1;
(statearr_19969_19995[(2)] = null);

(statearr_19969_19995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19957 === (9))){
var inst_19920 = (state_19956[(8)]);
var inst_19934 = cljs.core.vec.call(null,inst_19920);
var state_19956__$1 = state_19956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19956__$1,(11),out,inst_19934);
} else {
if((state_val_19957 === (5))){
var inst_19921 = (state_19956[(7)]);
var inst_19924 = (state_19956[(9)]);
var inst_19929 = (state_19956[(11)]);
var inst_19920 = (state_19956[(8)]);
var inst_19928 = (inst_19920[inst_19921] = inst_19924);
var inst_19929__$1 = (inst_19921 + (1));
var inst_19930 = (inst_19929__$1 < n);
var state_19956__$1 = (function (){var statearr_19970 = state_19956;
(statearr_19970[(11)] = inst_19929__$1);

(statearr_19970[(12)] = inst_19928);

return statearr_19970;
})();
if(cljs.core.truth_(inst_19930)){
var statearr_19971_19996 = state_19956__$1;
(statearr_19971_19996[(1)] = (8));

} else {
var statearr_19972_19997 = state_19956__$1;
(statearr_19972_19997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19957 === (14))){
var inst_19949 = (state_19956[(2)]);
var inst_19950 = cljs.core.async.close_BANG_.call(null,out);
var state_19956__$1 = (function (){var statearr_19974 = state_19956;
(statearr_19974[(13)] = inst_19949);

return statearr_19974;
})();
var statearr_19975_19998 = state_19956__$1;
(statearr_19975_19998[(2)] = inst_19950);

(statearr_19975_19998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19957 === (10))){
var inst_19940 = (state_19956[(2)]);
var state_19956__$1 = state_19956;
var statearr_19976_19999 = state_19956__$1;
(statearr_19976_19999[(2)] = inst_19940);

(statearr_19976_19999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19957 === (8))){
var inst_19929 = (state_19956[(11)]);
var inst_19920 = (state_19956[(8)]);
var tmp19973 = inst_19920;
var inst_19920__$1 = tmp19973;
var inst_19921 = inst_19929;
var state_19956__$1 = (function (){var statearr_19977 = state_19956;
(statearr_19977[(7)] = inst_19921);

(statearr_19977[(8)] = inst_19920__$1);

return statearr_19977;
})();
var statearr_19978_20000 = state_19956__$1;
(statearr_19978_20000[(2)] = null);

(statearr_19978_20000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7568__auto___19986,out))
;
return ((function (switch__7553__auto__,c__7568__auto___19986,out){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_19982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19982[(0)] = state_machine__7554__auto__);

(statearr_19982[(1)] = (1));

return statearr_19982;
});
var state_machine__7554__auto____1 = (function (state_19956){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_19956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e19983){if((e19983 instanceof Object)){
var ex__7557__auto__ = e19983;
var statearr_19984_20001 = state_19956;
(statearr_19984_20001[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20002 = state_19956;
state_19956 = G__20002;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_19956){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_19956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___19986,out))
})();
var state__7570__auto__ = (function (){var statearr_19985 = f__7569__auto__.call(null);
(statearr_19985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___19986);

return statearr_19985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___19986,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7568__auto___20145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___20145,out){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___20145,out){
return (function (state_20115){
var state_val_20116 = (state_20115[(1)]);
if((state_val_20116 === (7))){
var inst_20111 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
var statearr_20117_20146 = state_20115__$1;
(statearr_20117_20146[(2)] = inst_20111);

(statearr_20117_20146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (1))){
var inst_20074 = [];
var inst_20075 = inst_20074;
var inst_20076 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20115__$1 = (function (){var statearr_20118 = state_20115;
(statearr_20118[(7)] = inst_20076);

(statearr_20118[(8)] = inst_20075);

return statearr_20118;
})();
var statearr_20119_20147 = state_20115__$1;
(statearr_20119_20147[(2)] = null);

(statearr_20119_20147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (4))){
var inst_20079 = (state_20115[(9)]);
var inst_20079__$1 = (state_20115[(2)]);
var inst_20080 = (inst_20079__$1 == null);
var inst_20081 = cljs.core.not.call(null,inst_20080);
var state_20115__$1 = (function (){var statearr_20120 = state_20115;
(statearr_20120[(9)] = inst_20079__$1);

return statearr_20120;
})();
if(inst_20081){
var statearr_20121_20148 = state_20115__$1;
(statearr_20121_20148[(1)] = (5));

} else {
var statearr_20122_20149 = state_20115__$1;
(statearr_20122_20149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (15))){
var inst_20105 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
var statearr_20123_20150 = state_20115__$1;
(statearr_20123_20150[(2)] = inst_20105);

(statearr_20123_20150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (13))){
var state_20115__$1 = state_20115;
var statearr_20124_20151 = state_20115__$1;
(statearr_20124_20151[(2)] = null);

(statearr_20124_20151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (6))){
var inst_20075 = (state_20115[(8)]);
var inst_20100 = inst_20075.length;
var inst_20101 = (inst_20100 > (0));
var state_20115__$1 = state_20115;
if(cljs.core.truth_(inst_20101)){
var statearr_20125_20152 = state_20115__$1;
(statearr_20125_20152[(1)] = (12));

} else {
var statearr_20126_20153 = state_20115__$1;
(statearr_20126_20153[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (3))){
var inst_20113 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20115__$1,inst_20113);
} else {
if((state_val_20116 === (12))){
var inst_20075 = (state_20115[(8)]);
var inst_20103 = cljs.core.vec.call(null,inst_20075);
var state_20115__$1 = state_20115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20115__$1,(15),out,inst_20103);
} else {
if((state_val_20116 === (2))){
var state_20115__$1 = state_20115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20115__$1,(4),ch);
} else {
if((state_val_20116 === (11))){
var inst_20083 = (state_20115[(10)]);
var inst_20079 = (state_20115[(9)]);
var inst_20093 = (state_20115[(2)]);
var inst_20094 = [];
var inst_20095 = inst_20094.push(inst_20079);
var inst_20075 = inst_20094;
var inst_20076 = inst_20083;
var state_20115__$1 = (function (){var statearr_20127 = state_20115;
(statearr_20127[(11)] = inst_20093);

(statearr_20127[(7)] = inst_20076);

(statearr_20127[(8)] = inst_20075);

(statearr_20127[(12)] = inst_20095);

return statearr_20127;
})();
var statearr_20128_20154 = state_20115__$1;
(statearr_20128_20154[(2)] = null);

(statearr_20128_20154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (9))){
var inst_20075 = (state_20115[(8)]);
var inst_20091 = cljs.core.vec.call(null,inst_20075);
var state_20115__$1 = state_20115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20115__$1,(11),out,inst_20091);
} else {
if((state_val_20116 === (5))){
var inst_20083 = (state_20115[(10)]);
var inst_20076 = (state_20115[(7)]);
var inst_20079 = (state_20115[(9)]);
var inst_20083__$1 = f.call(null,inst_20079);
var inst_20084 = cljs.core._EQ_.call(null,inst_20083__$1,inst_20076);
var inst_20085 = cljs.core.keyword_identical_QMARK_.call(null,inst_20076,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_20086 = (inst_20084) || (inst_20085);
var state_20115__$1 = (function (){var statearr_20129 = state_20115;
(statearr_20129[(10)] = inst_20083__$1);

return statearr_20129;
})();
if(cljs.core.truth_(inst_20086)){
var statearr_20130_20155 = state_20115__$1;
(statearr_20130_20155[(1)] = (8));

} else {
var statearr_20131_20156 = state_20115__$1;
(statearr_20131_20156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (14))){
var inst_20108 = (state_20115[(2)]);
var inst_20109 = cljs.core.async.close_BANG_.call(null,out);
var state_20115__$1 = (function (){var statearr_20133 = state_20115;
(statearr_20133[(13)] = inst_20108);

return statearr_20133;
})();
var statearr_20134_20157 = state_20115__$1;
(statearr_20134_20157[(2)] = inst_20109);

(statearr_20134_20157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (10))){
var inst_20098 = (state_20115[(2)]);
var state_20115__$1 = state_20115;
var statearr_20135_20158 = state_20115__$1;
(statearr_20135_20158[(2)] = inst_20098);

(statearr_20135_20158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20116 === (8))){
var inst_20083 = (state_20115[(10)]);
var inst_20079 = (state_20115[(9)]);
var inst_20075 = (state_20115[(8)]);
var inst_20088 = inst_20075.push(inst_20079);
var tmp20132 = inst_20075;
var inst_20075__$1 = tmp20132;
var inst_20076 = inst_20083;
var state_20115__$1 = (function (){var statearr_20136 = state_20115;
(statearr_20136[(14)] = inst_20088);

(statearr_20136[(7)] = inst_20076);

(statearr_20136[(8)] = inst_20075__$1);

return statearr_20136;
})();
var statearr_20137_20159 = state_20115__$1;
(statearr_20137_20159[(2)] = null);

(statearr_20137_20159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7568__auto___20145,out))
;
return ((function (switch__7553__auto__,c__7568__auto___20145,out){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_20141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20141[(0)] = state_machine__7554__auto__);

(statearr_20141[(1)] = (1));

return statearr_20141;
});
var state_machine__7554__auto____1 = (function (state_20115){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_20115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e20142){if((e20142 instanceof Object)){
var ex__7557__auto__ = e20142;
var statearr_20143_20160 = state_20115;
(statearr_20143_20160[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20161 = state_20115;
state_20115 = G__20161;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_20115){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_20115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___20145,out))
})();
var state__7570__auto__ = (function (){var statearr_20144 = f__7569__auto__.call(null);
(statearr_20144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___20145);

return statearr_20144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___20145,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
