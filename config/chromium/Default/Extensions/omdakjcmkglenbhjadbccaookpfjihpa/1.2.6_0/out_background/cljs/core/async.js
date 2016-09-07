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
if(typeof cljs.core.async.t30678 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30678 = (function (f,fn_handler,meta30679){
this.f = f;
this.fn_handler = fn_handler;
this.meta30679 = meta30679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30678.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t30678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t30678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30680){
var self__ = this;
var _30680__$1 = this;
return self__.meta30679;
});

cljs.core.async.t30678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30680,meta30679__$1){
var self__ = this;
var _30680__$1 = this;
return (new cljs.core.async.t30678(self__.f,self__.fn_handler,meta30679__$1));
});

cljs.core.async.t30678.cljs$lang$type = true;

cljs.core.async.t30678.cljs$lang$ctorStr = "cljs.core.async/t30678";

cljs.core.async.t30678.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t30678");
});

cljs.core.async.__GT_t30678 = (function __GT_t30678(f__$1,fn_handler__$1,meta30679){
return (new cljs.core.async.t30678(f__$1,fn_handler__$1,meta30679));
});

}

return (new cljs.core.async.t30678(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30682 = buff;
if(G__30682){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__30682.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__30682.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30682);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30682);
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
var val_30683 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30683);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30683,ret){
return (function (){
return fn1.call(null,val_30683);
});})(val_30683,ret))
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
var n__4868__auto___30684 = n;
var x_30685 = (0);
while(true){
if((x_30685 < n__4868__auto___30684)){
(a[x_30685] = (0));

var G__30686 = (x_30685 + (1));
x_30685 = G__30686;
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

var G__30687 = (i + (1));
i = G__30687;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t30691 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30691 = (function (flag,alt_flag,meta30692){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30692 = meta30692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30691.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t30691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t30691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30693){
var self__ = this;
var _30693__$1 = this;
return self__.meta30692;
});})(flag))
;

cljs.core.async.t30691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30693,meta30692__$1){
var self__ = this;
var _30693__$1 = this;
return (new cljs.core.async.t30691(self__.flag,self__.alt_flag,meta30692__$1));
});})(flag))
;

cljs.core.async.t30691.cljs$lang$type = true;

cljs.core.async.t30691.cljs$lang$ctorStr = "cljs.core.async/t30691";

cljs.core.async.t30691.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t30691");
});})(flag))
;

cljs.core.async.__GT_t30691 = ((function (flag){
return (function __GT_t30691(flag__$1,alt_flag__$1,meta30692){
return (new cljs.core.async.t30691(flag__$1,alt_flag__$1,meta30692));
});})(flag))
;

}

return (new cljs.core.async.t30691(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t30697 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30697 = (function (cb,flag,alt_handler,meta30698){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30698 = meta30698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30697.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t30697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t30697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30699){
var self__ = this;
var _30699__$1 = this;
return self__.meta30698;
});

cljs.core.async.t30697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30699,meta30698__$1){
var self__ = this;
var _30699__$1 = this;
return (new cljs.core.async.t30697(self__.cb,self__.flag,self__.alt_handler,meta30698__$1));
});

cljs.core.async.t30697.cljs$lang$type = true;

cljs.core.async.t30697.cljs$lang$ctorStr = "cljs.core.async/t30697";

cljs.core.async.t30697.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t30697");
});

cljs.core.async.__GT_t30697 = (function __GT_t30697(cb__$1,flag__$1,alt_handler__$1,meta30698){
return (new cljs.core.async.t30697(cb__$1,flag__$1,alt_handler__$1,meta30698));
});

}

return (new cljs.core.async.t30697(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30700_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30700_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30701_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30701_SHARP_,port], null));
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
var G__30702 = (i + (1));
i = G__30702;
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
var alts_BANG___delegate = function (ports,p__30703){
var map__30705 = p__30703;
var map__30705__$1 = ((cljs.core.seq_QMARK_.call(null,map__30705))?cljs.core.apply.call(null,cljs.core.hash_map,map__30705):map__30705);
var opts = map__30705__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__30703 = null;
if (arguments.length > 1) {
var G__30706__i = 0, G__30706__a = new Array(arguments.length -  1);
while (G__30706__i < G__30706__a.length) {G__30706__a[G__30706__i] = arguments[G__30706__i + 1]; ++G__30706__i;}
  p__30703 = new cljs.core.IndexedSeq(G__30706__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__30703);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30707){
var ports = cljs.core.first(arglist__30707);
var p__30703 = cljs.core.rest(arglist__30707);
return alts_BANG___delegate(ports,p__30703);
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
var c__7568__auto___30802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___30802){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___30802){
return (function (state_30778){
var state_val_30779 = (state_30778[(1)]);
if((state_val_30779 === (7))){
var inst_30774 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30780_30803 = state_30778__$1;
(statearr_30780_30803[(2)] = inst_30774);

(statearr_30780_30803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (1))){
var state_30778__$1 = state_30778;
var statearr_30781_30804 = state_30778__$1;
(statearr_30781_30804[(2)] = null);

(statearr_30781_30804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (4))){
var inst_30757 = (state_30778[(7)]);
var inst_30757__$1 = (state_30778[(2)]);
var inst_30758 = (inst_30757__$1 == null);
var state_30778__$1 = (function (){var statearr_30782 = state_30778;
(statearr_30782[(7)] = inst_30757__$1);

return statearr_30782;
})();
if(cljs.core.truth_(inst_30758)){
var statearr_30783_30805 = state_30778__$1;
(statearr_30783_30805[(1)] = (5));

} else {
var statearr_30784_30806 = state_30778__$1;
(statearr_30784_30806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (13))){
var state_30778__$1 = state_30778;
var statearr_30785_30807 = state_30778__$1;
(statearr_30785_30807[(2)] = null);

(statearr_30785_30807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (6))){
var inst_30757 = (state_30778[(7)]);
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30778__$1,(11),to,inst_30757);
} else {
if((state_val_30779 === (3))){
var inst_30776 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30778__$1,inst_30776);
} else {
if((state_val_30779 === (12))){
var state_30778__$1 = state_30778;
var statearr_30786_30808 = state_30778__$1;
(statearr_30786_30808[(2)] = null);

(statearr_30786_30808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (2))){
var state_30778__$1 = state_30778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30778__$1,(4),from);
} else {
if((state_val_30779 === (11))){
var inst_30767 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
if(cljs.core.truth_(inst_30767)){
var statearr_30787_30809 = state_30778__$1;
(statearr_30787_30809[(1)] = (12));

} else {
var statearr_30788_30810 = state_30778__$1;
(statearr_30788_30810[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (9))){
var state_30778__$1 = state_30778;
var statearr_30789_30811 = state_30778__$1;
(statearr_30789_30811[(2)] = null);

(statearr_30789_30811[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (5))){
var state_30778__$1 = state_30778;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30790_30812 = state_30778__$1;
(statearr_30790_30812[(1)] = (8));

} else {
var statearr_30791_30813 = state_30778__$1;
(statearr_30791_30813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (14))){
var inst_30772 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30792_30814 = state_30778__$1;
(statearr_30792_30814[(2)] = inst_30772);

(statearr_30792_30814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (10))){
var inst_30764 = (state_30778[(2)]);
var state_30778__$1 = state_30778;
var statearr_30793_30815 = state_30778__$1;
(statearr_30793_30815[(2)] = inst_30764);

(statearr_30793_30815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30779 === (8))){
var inst_30761 = cljs.core.async.close_BANG_.call(null,to);
var state_30778__$1 = state_30778;
var statearr_30794_30816 = state_30778__$1;
(statearr_30794_30816[(2)] = inst_30761);

(statearr_30794_30816[(1)] = (10));


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
});})(c__7568__auto___30802))
;
return ((function (switch__7553__auto__,c__7568__auto___30802){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_30798 = [null,null,null,null,null,null,null,null];
(statearr_30798[(0)] = state_machine__7554__auto__);

(statearr_30798[(1)] = (1));

return statearr_30798;
});
var state_machine__7554__auto____1 = (function (state_30778){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_30778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e30799){if((e30799 instanceof Object)){
var ex__7557__auto__ = e30799;
var statearr_30800_30817 = state_30778;
(statearr_30800_30817[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30818 = state_30778;
state_30778 = G__30818;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_30778){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_30778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___30802))
})();
var state__7570__auto__ = (function (){var statearr_30801 = f__7569__auto__.call(null);
(statearr_30801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___30802);

return statearr_30801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___30802))
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
return (function (p__31002){
var vec__31003 = p__31002;
var v = cljs.core.nth.call(null,vec__31003,(0),null);
var p = cljs.core.nth.call(null,vec__31003,(1),null);
var job = vec__31003;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7568__auto___31185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___31185,res,vec__31003,v,p,job,jobs,results){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___31185,res,vec__31003,v,p,job,jobs,results){
return (function (state_31008){
var state_val_31009 = (state_31008[(1)]);
if((state_val_31009 === (2))){
var inst_31005 = (state_31008[(2)]);
var inst_31006 = cljs.core.async.close_BANG_.call(null,res);
var state_31008__$1 = (function (){var statearr_31010 = state_31008;
(statearr_31010[(7)] = inst_31005);

return statearr_31010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31008__$1,inst_31006);
} else {
if((state_val_31009 === (1))){
var state_31008__$1 = state_31008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31008__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7568__auto___31185,res,vec__31003,v,p,job,jobs,results))
;
return ((function (switch__7553__auto__,c__7568__auto___31185,res,vec__31003,v,p,job,jobs,results){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_31014 = [null,null,null,null,null,null,null,null];
(statearr_31014[(0)] = state_machine__7554__auto__);

(statearr_31014[(1)] = (1));

return statearr_31014;
});
var state_machine__7554__auto____1 = (function (state_31008){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_31008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e31015){if((e31015 instanceof Object)){
var ex__7557__auto__ = e31015;
var statearr_31016_31186 = state_31008;
(statearr_31016_31186[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31187 = state_31008;
state_31008 = G__31187;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_31008){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_31008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___31185,res,vec__31003,v,p,job,jobs,results))
})();
var state__7570__auto__ = (function (){var statearr_31017 = f__7569__auto__.call(null);
(statearr_31017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___31185);

return statearr_31017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___31185,res,vec__31003,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31018){
var vec__31019 = p__31018;
var v = cljs.core.nth.call(null,vec__31019,(0),null);
var p = cljs.core.nth.call(null,vec__31019,(1),null);
var job = vec__31019;
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
var n__4868__auto___31188 = n;
var __31189 = (0);
while(true){
if((__31189 < n__4868__auto___31188)){
var G__31020_31190 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31020_31190) {
case "async":
var c__7568__auto___31192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31189,c__7568__auto___31192,G__31020_31190,n__4868__auto___31188,jobs,results,process,async){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (__31189,c__7568__auto___31192,G__31020_31190,n__4868__auto___31188,jobs,results,process,async){
return (function (state_31033){
var state_val_31034 = (state_31033[(1)]);
if((state_val_31034 === (7))){
var inst_31029 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
var statearr_31035_31193 = state_31033__$1;
(statearr_31035_31193[(2)] = inst_31029);

(statearr_31035_31193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (6))){
var state_31033__$1 = state_31033;
var statearr_31036_31194 = state_31033__$1;
(statearr_31036_31194[(2)] = null);

(statearr_31036_31194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (5))){
var state_31033__$1 = state_31033;
var statearr_31037_31195 = state_31033__$1;
(statearr_31037_31195[(2)] = null);

(statearr_31037_31195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (4))){
var inst_31023 = (state_31033[(2)]);
var inst_31024 = async.call(null,inst_31023);
var state_31033__$1 = state_31033;
if(cljs.core.truth_(inst_31024)){
var statearr_31038_31196 = state_31033__$1;
(statearr_31038_31196[(1)] = (5));

} else {
var statearr_31039_31197 = state_31033__$1;
(statearr_31039_31197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31034 === (3))){
var inst_31031 = (state_31033[(2)]);
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31033__$1,inst_31031);
} else {
if((state_val_31034 === (2))){
var state_31033__$1 = state_31033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31033__$1,(4),jobs);
} else {
if((state_val_31034 === (1))){
var state_31033__$1 = state_31033;
var statearr_31040_31198 = state_31033__$1;
(statearr_31040_31198[(2)] = null);

(statearr_31040_31198[(1)] = (2));


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
});})(__31189,c__7568__auto___31192,G__31020_31190,n__4868__auto___31188,jobs,results,process,async))
;
return ((function (__31189,switch__7553__auto__,c__7568__auto___31192,G__31020_31190,n__4868__auto___31188,jobs,results,process,async){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_31044 = [null,null,null,null,null,null,null];
(statearr_31044[(0)] = state_machine__7554__auto__);

(statearr_31044[(1)] = (1));

return statearr_31044;
});
var state_machine__7554__auto____1 = (function (state_31033){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_31033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e31045){if((e31045 instanceof Object)){
var ex__7557__auto__ = e31045;
var statearr_31046_31199 = state_31033;
(statearr_31046_31199[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31200 = state_31033;
state_31033 = G__31200;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_31033){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_31033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(__31189,switch__7553__auto__,c__7568__auto___31192,G__31020_31190,n__4868__auto___31188,jobs,results,process,async))
})();
var state__7570__auto__ = (function (){var statearr_31047 = f__7569__auto__.call(null);
(statearr_31047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___31192);

return statearr_31047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(__31189,c__7568__auto___31192,G__31020_31190,n__4868__auto___31188,jobs,results,process,async))
);


break;
case "compute":
var c__7568__auto___31201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31189,c__7568__auto___31201,G__31020_31190,n__4868__auto___31188,jobs,results,process,async){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (__31189,c__7568__auto___31201,G__31020_31190,n__4868__auto___31188,jobs,results,process,async){
return (function (state_31060){
var state_val_31061 = (state_31060[(1)]);
if((state_val_31061 === (7))){
var inst_31056 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31062_31202 = state_31060__$1;
(statearr_31062_31202[(2)] = inst_31056);

(statearr_31062_31202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (6))){
var state_31060__$1 = state_31060;
var statearr_31063_31203 = state_31060__$1;
(statearr_31063_31203[(2)] = null);

(statearr_31063_31203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (5))){
var state_31060__$1 = state_31060;
var statearr_31064_31204 = state_31060__$1;
(statearr_31064_31204[(2)] = null);

(statearr_31064_31204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (4))){
var inst_31050 = (state_31060[(2)]);
var inst_31051 = process.call(null,inst_31050);
var state_31060__$1 = state_31060;
if(cljs.core.truth_(inst_31051)){
var statearr_31065_31205 = state_31060__$1;
(statearr_31065_31205[(1)] = (5));

} else {
var statearr_31066_31206 = state_31060__$1;
(statearr_31066_31206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (3))){
var inst_31058 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31060__$1,inst_31058);
} else {
if((state_val_31061 === (2))){
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(4),jobs);
} else {
if((state_val_31061 === (1))){
var state_31060__$1 = state_31060;
var statearr_31067_31207 = state_31060__$1;
(statearr_31067_31207[(2)] = null);

(statearr_31067_31207[(1)] = (2));


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
});})(__31189,c__7568__auto___31201,G__31020_31190,n__4868__auto___31188,jobs,results,process,async))
;
return ((function (__31189,switch__7553__auto__,c__7568__auto___31201,G__31020_31190,n__4868__auto___31188,jobs,results,process,async){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_31071 = [null,null,null,null,null,null,null];
(statearr_31071[(0)] = state_machine__7554__auto__);

(statearr_31071[(1)] = (1));

return statearr_31071;
});
var state_machine__7554__auto____1 = (function (state_31060){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_31060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e31072){if((e31072 instanceof Object)){
var ex__7557__auto__ = e31072;
var statearr_31073_31208 = state_31060;
(statearr_31073_31208[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31209 = state_31060;
state_31060 = G__31209;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_31060){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_31060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(__31189,switch__7553__auto__,c__7568__auto___31201,G__31020_31190,n__4868__auto___31188,jobs,results,process,async))
})();
var state__7570__auto__ = (function (){var statearr_31074 = f__7569__auto__.call(null);
(statearr_31074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___31201);

return statearr_31074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(__31189,c__7568__auto___31201,G__31020_31190,n__4868__auto___31188,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31210 = (__31189 + (1));
__31189 = G__31210;
continue;
} else {
}
break;
}

var c__7568__auto___31211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___31211,jobs,results,process,async){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___31211,jobs,results,process,async){
return (function (state_31096){
var state_val_31097 = (state_31096[(1)]);
if((state_val_31097 === (9))){
var inst_31089 = (state_31096[(2)]);
var state_31096__$1 = (function (){var statearr_31098 = state_31096;
(statearr_31098[(7)] = inst_31089);

return statearr_31098;
})();
var statearr_31099_31212 = state_31096__$1;
(statearr_31099_31212[(2)] = null);

(statearr_31099_31212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (8))){
var inst_31082 = (state_31096[(8)]);
var inst_31087 = (state_31096[(2)]);
var state_31096__$1 = (function (){var statearr_31100 = state_31096;
(statearr_31100[(9)] = inst_31087);

return statearr_31100;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31096__$1,(9),results,inst_31082);
} else {
if((state_val_31097 === (7))){
var inst_31092 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
var statearr_31101_31213 = state_31096__$1;
(statearr_31101_31213[(2)] = inst_31092);

(statearr_31101_31213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (6))){
var inst_31077 = (state_31096[(10)]);
var inst_31082 = (state_31096[(8)]);
var inst_31082__$1 = cljs.core.async.chan.call(null,(1));
var inst_31083 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31084 = [inst_31077,inst_31082__$1];
var inst_31085 = (new cljs.core.PersistentVector(null,2,(5),inst_31083,inst_31084,null));
var state_31096__$1 = (function (){var statearr_31102 = state_31096;
(statearr_31102[(8)] = inst_31082__$1);

return statearr_31102;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31096__$1,(8),jobs,inst_31085);
} else {
if((state_val_31097 === (5))){
var inst_31080 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31096__$1 = state_31096;
var statearr_31103_31214 = state_31096__$1;
(statearr_31103_31214[(2)] = inst_31080);

(statearr_31103_31214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (4))){
var inst_31077 = (state_31096[(10)]);
var inst_31077__$1 = (state_31096[(2)]);
var inst_31078 = (inst_31077__$1 == null);
var state_31096__$1 = (function (){var statearr_31104 = state_31096;
(statearr_31104[(10)] = inst_31077__$1);

return statearr_31104;
})();
if(cljs.core.truth_(inst_31078)){
var statearr_31105_31215 = state_31096__$1;
(statearr_31105_31215[(1)] = (5));

} else {
var statearr_31106_31216 = state_31096__$1;
(statearr_31106_31216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31097 === (3))){
var inst_31094 = (state_31096[(2)]);
var state_31096__$1 = state_31096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31096__$1,inst_31094);
} else {
if((state_val_31097 === (2))){
var state_31096__$1 = state_31096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31096__$1,(4),from);
} else {
if((state_val_31097 === (1))){
var state_31096__$1 = state_31096;
var statearr_31107_31217 = state_31096__$1;
(statearr_31107_31217[(2)] = null);

(statearr_31107_31217[(1)] = (2));


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
});})(c__7568__auto___31211,jobs,results,process,async))
;
return ((function (switch__7553__auto__,c__7568__auto___31211,jobs,results,process,async){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_31111 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31111[(0)] = state_machine__7554__auto__);

(statearr_31111[(1)] = (1));

return statearr_31111;
});
var state_machine__7554__auto____1 = (function (state_31096){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_31096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e31112){if((e31112 instanceof Object)){
var ex__7557__auto__ = e31112;
var statearr_31113_31218 = state_31096;
(statearr_31113_31218[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31219 = state_31096;
state_31096 = G__31219;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_31096){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_31096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___31211,jobs,results,process,async))
})();
var state__7570__auto__ = (function (){var statearr_31114 = f__7569__auto__.call(null);
(statearr_31114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___31211);

return statearr_31114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___31211,jobs,results,process,async))
);


var c__7568__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto__,jobs,results,process,async){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto__,jobs,results,process,async){
return (function (state_31152){
var state_val_31153 = (state_31152[(1)]);
if((state_val_31153 === (7))){
var inst_31148 = (state_31152[(2)]);
var state_31152__$1 = state_31152;
var statearr_31154_31220 = state_31152__$1;
(statearr_31154_31220[(2)] = inst_31148);

(statearr_31154_31220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (20))){
var state_31152__$1 = state_31152;
var statearr_31155_31221 = state_31152__$1;
(statearr_31155_31221[(2)] = null);

(statearr_31155_31221[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (1))){
var state_31152__$1 = state_31152;
var statearr_31156_31222 = state_31152__$1;
(statearr_31156_31222[(2)] = null);

(statearr_31156_31222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (4))){
var inst_31117 = (state_31152[(7)]);
var inst_31117__$1 = (state_31152[(2)]);
var inst_31118 = (inst_31117__$1 == null);
var state_31152__$1 = (function (){var statearr_31157 = state_31152;
(statearr_31157[(7)] = inst_31117__$1);

return statearr_31157;
})();
if(cljs.core.truth_(inst_31118)){
var statearr_31158_31223 = state_31152__$1;
(statearr_31158_31223[(1)] = (5));

} else {
var statearr_31159_31224 = state_31152__$1;
(statearr_31159_31224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (15))){
var inst_31130 = (state_31152[(8)]);
var state_31152__$1 = state_31152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31152__$1,(18),to,inst_31130);
} else {
if((state_val_31153 === (21))){
var inst_31143 = (state_31152[(2)]);
var state_31152__$1 = state_31152;
var statearr_31160_31225 = state_31152__$1;
(statearr_31160_31225[(2)] = inst_31143);

(statearr_31160_31225[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (13))){
var inst_31145 = (state_31152[(2)]);
var state_31152__$1 = (function (){var statearr_31161 = state_31152;
(statearr_31161[(9)] = inst_31145);

return statearr_31161;
})();
var statearr_31162_31226 = state_31152__$1;
(statearr_31162_31226[(2)] = null);

(statearr_31162_31226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (6))){
var inst_31117 = (state_31152[(7)]);
var state_31152__$1 = state_31152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31152__$1,(11),inst_31117);
} else {
if((state_val_31153 === (17))){
var inst_31138 = (state_31152[(2)]);
var state_31152__$1 = state_31152;
if(cljs.core.truth_(inst_31138)){
var statearr_31163_31227 = state_31152__$1;
(statearr_31163_31227[(1)] = (19));

} else {
var statearr_31164_31228 = state_31152__$1;
(statearr_31164_31228[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (3))){
var inst_31150 = (state_31152[(2)]);
var state_31152__$1 = state_31152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31152__$1,inst_31150);
} else {
if((state_val_31153 === (12))){
var inst_31127 = (state_31152[(10)]);
var state_31152__$1 = state_31152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31152__$1,(14),inst_31127);
} else {
if((state_val_31153 === (2))){
var state_31152__$1 = state_31152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31152__$1,(4),results);
} else {
if((state_val_31153 === (19))){
var state_31152__$1 = state_31152;
var statearr_31165_31229 = state_31152__$1;
(statearr_31165_31229[(2)] = null);

(statearr_31165_31229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (11))){
var inst_31127 = (state_31152[(2)]);
var state_31152__$1 = (function (){var statearr_31166 = state_31152;
(statearr_31166[(10)] = inst_31127);

return statearr_31166;
})();
var statearr_31167_31230 = state_31152__$1;
(statearr_31167_31230[(2)] = null);

(statearr_31167_31230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (9))){
var state_31152__$1 = state_31152;
var statearr_31168_31231 = state_31152__$1;
(statearr_31168_31231[(2)] = null);

(statearr_31168_31231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (5))){
var state_31152__$1 = state_31152;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31169_31232 = state_31152__$1;
(statearr_31169_31232[(1)] = (8));

} else {
var statearr_31170_31233 = state_31152__$1;
(statearr_31170_31233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (14))){
var inst_31130 = (state_31152[(8)]);
var inst_31132 = (state_31152[(11)]);
var inst_31130__$1 = (state_31152[(2)]);
var inst_31131 = (inst_31130__$1 == null);
var inst_31132__$1 = cljs.core.not.call(null,inst_31131);
var state_31152__$1 = (function (){var statearr_31171 = state_31152;
(statearr_31171[(8)] = inst_31130__$1);

(statearr_31171[(11)] = inst_31132__$1);

return statearr_31171;
})();
if(inst_31132__$1){
var statearr_31172_31234 = state_31152__$1;
(statearr_31172_31234[(1)] = (15));

} else {
var statearr_31173_31235 = state_31152__$1;
(statearr_31173_31235[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (16))){
var inst_31132 = (state_31152[(11)]);
var state_31152__$1 = state_31152;
var statearr_31174_31236 = state_31152__$1;
(statearr_31174_31236[(2)] = inst_31132);

(statearr_31174_31236[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (10))){
var inst_31124 = (state_31152[(2)]);
var state_31152__$1 = state_31152;
var statearr_31175_31237 = state_31152__$1;
(statearr_31175_31237[(2)] = inst_31124);

(statearr_31175_31237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (18))){
var inst_31135 = (state_31152[(2)]);
var state_31152__$1 = state_31152;
var statearr_31176_31238 = state_31152__$1;
(statearr_31176_31238[(2)] = inst_31135);

(statearr_31176_31238[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31153 === (8))){
var inst_31121 = cljs.core.async.close_BANG_.call(null,to);
var state_31152__$1 = state_31152;
var statearr_31177_31239 = state_31152__$1;
(statearr_31177_31239[(2)] = inst_31121);

(statearr_31177_31239[(1)] = (10));


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
var statearr_31181 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31181[(0)] = state_machine__7554__auto__);

(statearr_31181[(1)] = (1));

return statearr_31181;
});
var state_machine__7554__auto____1 = (function (state_31152){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_31152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e31182){if((e31182 instanceof Object)){
var ex__7557__auto__ = e31182;
var statearr_31183_31240 = state_31152;
(statearr_31183_31240[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31241 = state_31152;
state_31152 = G__31241;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_31152){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_31152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto__,jobs,results,process,async))
})();
var state__7570__auto__ = (function (){var statearr_31184 = f__7569__auto__.call(null);
(statearr_31184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto__);

return statearr_31184;
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
var c__7568__auto___31342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___31342,tc,fc){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___31342,tc,fc){
return (function (state_31317){
var state_val_31318 = (state_31317[(1)]);
if((state_val_31318 === (7))){
var inst_31313 = (state_31317[(2)]);
var state_31317__$1 = state_31317;
var statearr_31319_31343 = state_31317__$1;
(statearr_31319_31343[(2)] = inst_31313);

(statearr_31319_31343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (1))){
var state_31317__$1 = state_31317;
var statearr_31320_31344 = state_31317__$1;
(statearr_31320_31344[(2)] = null);

(statearr_31320_31344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (4))){
var inst_31294 = (state_31317[(7)]);
var inst_31294__$1 = (state_31317[(2)]);
var inst_31295 = (inst_31294__$1 == null);
var state_31317__$1 = (function (){var statearr_31321 = state_31317;
(statearr_31321[(7)] = inst_31294__$1);

return statearr_31321;
})();
if(cljs.core.truth_(inst_31295)){
var statearr_31322_31345 = state_31317__$1;
(statearr_31322_31345[(1)] = (5));

} else {
var statearr_31323_31346 = state_31317__$1;
(statearr_31323_31346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (13))){
var state_31317__$1 = state_31317;
var statearr_31324_31347 = state_31317__$1;
(statearr_31324_31347[(2)] = null);

(statearr_31324_31347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (6))){
var inst_31294 = (state_31317[(7)]);
var inst_31300 = p.call(null,inst_31294);
var state_31317__$1 = state_31317;
if(cljs.core.truth_(inst_31300)){
var statearr_31325_31348 = state_31317__$1;
(statearr_31325_31348[(1)] = (9));

} else {
var statearr_31326_31349 = state_31317__$1;
(statearr_31326_31349[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (3))){
var inst_31315 = (state_31317[(2)]);
var state_31317__$1 = state_31317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31317__$1,inst_31315);
} else {
if((state_val_31318 === (12))){
var state_31317__$1 = state_31317;
var statearr_31327_31350 = state_31317__$1;
(statearr_31327_31350[(2)] = null);

(statearr_31327_31350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (2))){
var state_31317__$1 = state_31317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31317__$1,(4),ch);
} else {
if((state_val_31318 === (11))){
var inst_31294 = (state_31317[(7)]);
var inst_31304 = (state_31317[(2)]);
var state_31317__$1 = state_31317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31317__$1,(8),inst_31304,inst_31294);
} else {
if((state_val_31318 === (9))){
var state_31317__$1 = state_31317;
var statearr_31328_31351 = state_31317__$1;
(statearr_31328_31351[(2)] = tc);

(statearr_31328_31351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (5))){
var inst_31297 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31298 = cljs.core.async.close_BANG_.call(null,fc);
var state_31317__$1 = (function (){var statearr_31329 = state_31317;
(statearr_31329[(8)] = inst_31297);

return statearr_31329;
})();
var statearr_31330_31352 = state_31317__$1;
(statearr_31330_31352[(2)] = inst_31298);

(statearr_31330_31352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (14))){
var inst_31311 = (state_31317[(2)]);
var state_31317__$1 = state_31317;
var statearr_31331_31353 = state_31317__$1;
(statearr_31331_31353[(2)] = inst_31311);

(statearr_31331_31353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (10))){
var state_31317__$1 = state_31317;
var statearr_31332_31354 = state_31317__$1;
(statearr_31332_31354[(2)] = fc);

(statearr_31332_31354[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31318 === (8))){
var inst_31306 = (state_31317[(2)]);
var state_31317__$1 = state_31317;
if(cljs.core.truth_(inst_31306)){
var statearr_31333_31355 = state_31317__$1;
(statearr_31333_31355[(1)] = (12));

} else {
var statearr_31334_31356 = state_31317__$1;
(statearr_31334_31356[(1)] = (13));

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
});})(c__7568__auto___31342,tc,fc))
;
return ((function (switch__7553__auto__,c__7568__auto___31342,tc,fc){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_31338 = [null,null,null,null,null,null,null,null,null];
(statearr_31338[(0)] = state_machine__7554__auto__);

(statearr_31338[(1)] = (1));

return statearr_31338;
});
var state_machine__7554__auto____1 = (function (state_31317){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_31317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e31339){if((e31339 instanceof Object)){
var ex__7557__auto__ = e31339;
var statearr_31340_31357 = state_31317;
(statearr_31340_31357[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31358 = state_31317;
state_31317 = G__31358;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_31317){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_31317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___31342,tc,fc))
})();
var state__7570__auto__ = (function (){var statearr_31341 = f__7569__auto__.call(null);
(statearr_31341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___31342);

return statearr_31341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___31342,tc,fc))
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
return (function (state_31405){
var state_val_31406 = (state_31405[(1)]);
if((state_val_31406 === (7))){
var inst_31401 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
var statearr_31407_31423 = state_31405__$1;
(statearr_31407_31423[(2)] = inst_31401);

(statearr_31407_31423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (6))){
var inst_31394 = (state_31405[(7)]);
var inst_31391 = (state_31405[(8)]);
var inst_31398 = f.call(null,inst_31391,inst_31394);
var inst_31391__$1 = inst_31398;
var state_31405__$1 = (function (){var statearr_31408 = state_31405;
(statearr_31408[(8)] = inst_31391__$1);

return statearr_31408;
})();
var statearr_31409_31424 = state_31405__$1;
(statearr_31409_31424[(2)] = null);

(statearr_31409_31424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (5))){
var inst_31391 = (state_31405[(8)]);
var state_31405__$1 = state_31405;
var statearr_31410_31425 = state_31405__$1;
(statearr_31410_31425[(2)] = inst_31391);

(statearr_31410_31425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (4))){
var inst_31394 = (state_31405[(7)]);
var inst_31394__$1 = (state_31405[(2)]);
var inst_31395 = (inst_31394__$1 == null);
var state_31405__$1 = (function (){var statearr_31411 = state_31405;
(statearr_31411[(7)] = inst_31394__$1);

return statearr_31411;
})();
if(cljs.core.truth_(inst_31395)){
var statearr_31412_31426 = state_31405__$1;
(statearr_31412_31426[(1)] = (5));

} else {
var statearr_31413_31427 = state_31405__$1;
(statearr_31413_31427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31406 === (3))){
var inst_31403 = (state_31405[(2)]);
var state_31405__$1 = state_31405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31405__$1,inst_31403);
} else {
if((state_val_31406 === (2))){
var state_31405__$1 = state_31405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31405__$1,(4),ch);
} else {
if((state_val_31406 === (1))){
var inst_31391 = init;
var state_31405__$1 = (function (){var statearr_31414 = state_31405;
(statearr_31414[(8)] = inst_31391);

return statearr_31414;
})();
var statearr_31415_31428 = state_31405__$1;
(statearr_31415_31428[(2)] = null);

(statearr_31415_31428[(1)] = (2));


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
var statearr_31419 = [null,null,null,null,null,null,null,null,null];
(statearr_31419[(0)] = state_machine__7554__auto__);

(statearr_31419[(1)] = (1));

return statearr_31419;
});
var state_machine__7554__auto____1 = (function (state_31405){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_31405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e31420){if((e31420 instanceof Object)){
var ex__7557__auto__ = e31420;
var statearr_31421_31429 = state_31405;
(statearr_31421_31429[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31430 = state_31405;
state_31405 = G__31430;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_31405){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_31405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto__))
})();
var state__7570__auto__ = (function (){var statearr_31422 = f__7569__auto__.call(null);
(statearr_31422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto__);

return statearr_31422;
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
return (function (state_31504){
var state_val_31505 = (state_31504[(1)]);
if((state_val_31505 === (7))){
var inst_31486 = (state_31504[(2)]);
var state_31504__$1 = state_31504;
var statearr_31506_31529 = state_31504__$1;
(statearr_31506_31529[(2)] = inst_31486);

(statearr_31506_31529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (1))){
var inst_31480 = cljs.core.seq.call(null,coll);
var inst_31481 = inst_31480;
var state_31504__$1 = (function (){var statearr_31507 = state_31504;
(statearr_31507[(7)] = inst_31481);

return statearr_31507;
})();
var statearr_31508_31530 = state_31504__$1;
(statearr_31508_31530[(2)] = null);

(statearr_31508_31530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (4))){
var inst_31481 = (state_31504[(7)]);
var inst_31484 = cljs.core.first.call(null,inst_31481);
var state_31504__$1 = state_31504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31504__$1,(7),ch,inst_31484);
} else {
if((state_val_31505 === (13))){
var inst_31498 = (state_31504[(2)]);
var state_31504__$1 = state_31504;
var statearr_31509_31531 = state_31504__$1;
(statearr_31509_31531[(2)] = inst_31498);

(statearr_31509_31531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (6))){
var inst_31489 = (state_31504[(2)]);
var state_31504__$1 = state_31504;
if(cljs.core.truth_(inst_31489)){
var statearr_31510_31532 = state_31504__$1;
(statearr_31510_31532[(1)] = (8));

} else {
var statearr_31511_31533 = state_31504__$1;
(statearr_31511_31533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (3))){
var inst_31502 = (state_31504[(2)]);
var state_31504__$1 = state_31504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31504__$1,inst_31502);
} else {
if((state_val_31505 === (12))){
var state_31504__$1 = state_31504;
var statearr_31512_31534 = state_31504__$1;
(statearr_31512_31534[(2)] = null);

(statearr_31512_31534[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (2))){
var inst_31481 = (state_31504[(7)]);
var state_31504__$1 = state_31504;
if(cljs.core.truth_(inst_31481)){
var statearr_31513_31535 = state_31504__$1;
(statearr_31513_31535[(1)] = (4));

} else {
var statearr_31514_31536 = state_31504__$1;
(statearr_31514_31536[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (11))){
var inst_31495 = cljs.core.async.close_BANG_.call(null,ch);
var state_31504__$1 = state_31504;
var statearr_31515_31537 = state_31504__$1;
(statearr_31515_31537[(2)] = inst_31495);

(statearr_31515_31537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (9))){
var state_31504__$1 = state_31504;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31516_31538 = state_31504__$1;
(statearr_31516_31538[(1)] = (11));

} else {
var statearr_31517_31539 = state_31504__$1;
(statearr_31517_31539[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (5))){
var inst_31481 = (state_31504[(7)]);
var state_31504__$1 = state_31504;
var statearr_31518_31540 = state_31504__$1;
(statearr_31518_31540[(2)] = inst_31481);

(statearr_31518_31540[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (10))){
var inst_31500 = (state_31504[(2)]);
var state_31504__$1 = state_31504;
var statearr_31519_31541 = state_31504__$1;
(statearr_31519_31541[(2)] = inst_31500);

(statearr_31519_31541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31505 === (8))){
var inst_31481 = (state_31504[(7)]);
var inst_31491 = cljs.core.next.call(null,inst_31481);
var inst_31481__$1 = inst_31491;
var state_31504__$1 = (function (){var statearr_31520 = state_31504;
(statearr_31520[(7)] = inst_31481__$1);

return statearr_31520;
})();
var statearr_31521_31542 = state_31504__$1;
(statearr_31521_31542[(2)] = null);

(statearr_31521_31542[(1)] = (2));


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
var statearr_31525 = [null,null,null,null,null,null,null,null];
(statearr_31525[(0)] = state_machine__7554__auto__);

(statearr_31525[(1)] = (1));

return statearr_31525;
});
var state_machine__7554__auto____1 = (function (state_31504){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_31504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e31526){if((e31526 instanceof Object)){
var ex__7557__auto__ = e31526;
var statearr_31527_31543 = state_31504;
(statearr_31527_31543[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31544 = state_31504;
state_31504 = G__31544;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_31504){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_31504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto__))
})();
var state__7570__auto__ = (function (){var statearr_31528 = f__7569__auto__.call(null);
(statearr_31528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto__);

return statearr_31528;
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

cljs.core.async.Mux = (function (){var obj31546 = {};
return obj31546;
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


cljs.core.async.Mult = (function (){var obj31548 = {};
return obj31548;
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
if(typeof cljs.core.async.t31770 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31770 = (function (cs,ch,mult,meta31771){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31771 = meta31771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31770.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t31770.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t31770.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t31770.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t31770.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31770.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t31770.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31772){
var self__ = this;
var _31772__$1 = this;
return self__.meta31771;
});})(cs))
;

cljs.core.async.t31770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31772,meta31771__$1){
var self__ = this;
var _31772__$1 = this;
return (new cljs.core.async.t31770(self__.cs,self__.ch,self__.mult,meta31771__$1));
});})(cs))
;

cljs.core.async.t31770.cljs$lang$type = true;

cljs.core.async.t31770.cljs$lang$ctorStr = "cljs.core.async/t31770";

cljs.core.async.t31770.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t31770");
});})(cs))
;

cljs.core.async.__GT_t31770 = ((function (cs){
return (function __GT_t31770(cs__$1,ch__$1,mult__$1,meta31771){
return (new cljs.core.async.t31770(cs__$1,ch__$1,mult__$1,meta31771));
});})(cs))
;

}

return (new cljs.core.async.t31770(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7568__auto___31991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___31991,cs,m,dchan,dctr,done){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___31991,cs,m,dchan,dctr,done){
return (function (state_31903){
var state_val_31904 = (state_31903[(1)]);
if((state_val_31904 === (7))){
var inst_31899 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31905_31992 = state_31903__$1;
(statearr_31905_31992[(2)] = inst_31899);

(statearr_31905_31992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (20))){
var inst_31804 = (state_31903[(7)]);
var inst_31814 = cljs.core.first.call(null,inst_31804);
var inst_31815 = cljs.core.nth.call(null,inst_31814,(0),null);
var inst_31816 = cljs.core.nth.call(null,inst_31814,(1),null);
var state_31903__$1 = (function (){var statearr_31906 = state_31903;
(statearr_31906[(8)] = inst_31815);

return statearr_31906;
})();
if(cljs.core.truth_(inst_31816)){
var statearr_31907_31993 = state_31903__$1;
(statearr_31907_31993[(1)] = (22));

} else {
var statearr_31908_31994 = state_31903__$1;
(statearr_31908_31994[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (27))){
var inst_31851 = (state_31903[(9)]);
var inst_31846 = (state_31903[(10)]);
var inst_31844 = (state_31903[(11)]);
var inst_31775 = (state_31903[(12)]);
var inst_31851__$1 = cljs.core._nth.call(null,inst_31844,inst_31846);
var inst_31852 = cljs.core.async.put_BANG_.call(null,inst_31851__$1,inst_31775,done);
var state_31903__$1 = (function (){var statearr_31909 = state_31903;
(statearr_31909[(9)] = inst_31851__$1);

return statearr_31909;
})();
if(cljs.core.truth_(inst_31852)){
var statearr_31910_31995 = state_31903__$1;
(statearr_31910_31995[(1)] = (30));

} else {
var statearr_31911_31996 = state_31903__$1;
(statearr_31911_31996[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (1))){
var state_31903__$1 = state_31903;
var statearr_31912_31997 = state_31903__$1;
(statearr_31912_31997[(2)] = null);

(statearr_31912_31997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (24))){
var inst_31804 = (state_31903[(7)]);
var inst_31821 = (state_31903[(2)]);
var inst_31822 = cljs.core.next.call(null,inst_31804);
var inst_31784 = inst_31822;
var inst_31785 = null;
var inst_31786 = (0);
var inst_31787 = (0);
var state_31903__$1 = (function (){var statearr_31913 = state_31903;
(statearr_31913[(13)] = inst_31786);

(statearr_31913[(14)] = inst_31785);

(statearr_31913[(15)] = inst_31784);

(statearr_31913[(16)] = inst_31821);

(statearr_31913[(17)] = inst_31787);

return statearr_31913;
})();
var statearr_31914_31998 = state_31903__$1;
(statearr_31914_31998[(2)] = null);

(statearr_31914_31998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (39))){
var state_31903__$1 = state_31903;
var statearr_31918_31999 = state_31903__$1;
(statearr_31918_31999[(2)] = null);

(statearr_31918_31999[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (4))){
var inst_31775 = (state_31903[(12)]);
var inst_31775__$1 = (state_31903[(2)]);
var inst_31776 = (inst_31775__$1 == null);
var state_31903__$1 = (function (){var statearr_31919 = state_31903;
(statearr_31919[(12)] = inst_31775__$1);

return statearr_31919;
})();
if(cljs.core.truth_(inst_31776)){
var statearr_31920_32000 = state_31903__$1;
(statearr_31920_32000[(1)] = (5));

} else {
var statearr_31921_32001 = state_31903__$1;
(statearr_31921_32001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (15))){
var inst_31786 = (state_31903[(13)]);
var inst_31785 = (state_31903[(14)]);
var inst_31784 = (state_31903[(15)]);
var inst_31787 = (state_31903[(17)]);
var inst_31800 = (state_31903[(2)]);
var inst_31801 = (inst_31787 + (1));
var tmp31915 = inst_31786;
var tmp31916 = inst_31785;
var tmp31917 = inst_31784;
var inst_31784__$1 = tmp31917;
var inst_31785__$1 = tmp31916;
var inst_31786__$1 = tmp31915;
var inst_31787__$1 = inst_31801;
var state_31903__$1 = (function (){var statearr_31922 = state_31903;
(statearr_31922[(13)] = inst_31786__$1);

(statearr_31922[(18)] = inst_31800);

(statearr_31922[(14)] = inst_31785__$1);

(statearr_31922[(15)] = inst_31784__$1);

(statearr_31922[(17)] = inst_31787__$1);

return statearr_31922;
})();
var statearr_31923_32002 = state_31903__$1;
(statearr_31923_32002[(2)] = null);

(statearr_31923_32002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (21))){
var inst_31825 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31927_32003 = state_31903__$1;
(statearr_31927_32003[(2)] = inst_31825);

(statearr_31927_32003[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (31))){
var inst_31851 = (state_31903[(9)]);
var inst_31855 = done.call(null,null);
var inst_31856 = cljs.core.async.untap_STAR_.call(null,m,inst_31851);
var state_31903__$1 = (function (){var statearr_31928 = state_31903;
(statearr_31928[(19)] = inst_31855);

return statearr_31928;
})();
var statearr_31929_32004 = state_31903__$1;
(statearr_31929_32004[(2)] = inst_31856);

(statearr_31929_32004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (32))){
var inst_31846 = (state_31903[(10)]);
var inst_31844 = (state_31903[(11)]);
var inst_31845 = (state_31903[(20)]);
var inst_31843 = (state_31903[(21)]);
var inst_31858 = (state_31903[(2)]);
var inst_31859 = (inst_31846 + (1));
var tmp31924 = inst_31844;
var tmp31925 = inst_31845;
var tmp31926 = inst_31843;
var inst_31843__$1 = tmp31926;
var inst_31844__$1 = tmp31924;
var inst_31845__$1 = tmp31925;
var inst_31846__$1 = inst_31859;
var state_31903__$1 = (function (){var statearr_31930 = state_31903;
(statearr_31930[(10)] = inst_31846__$1);

(statearr_31930[(11)] = inst_31844__$1);

(statearr_31930[(20)] = inst_31845__$1);

(statearr_31930[(21)] = inst_31843__$1);

(statearr_31930[(22)] = inst_31858);

return statearr_31930;
})();
var statearr_31931_32005 = state_31903__$1;
(statearr_31931_32005[(2)] = null);

(statearr_31931_32005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (40))){
var inst_31871 = (state_31903[(23)]);
var inst_31875 = done.call(null,null);
var inst_31876 = cljs.core.async.untap_STAR_.call(null,m,inst_31871);
var state_31903__$1 = (function (){var statearr_31932 = state_31903;
(statearr_31932[(24)] = inst_31875);

return statearr_31932;
})();
var statearr_31933_32006 = state_31903__$1;
(statearr_31933_32006[(2)] = inst_31876);

(statearr_31933_32006[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (33))){
var inst_31862 = (state_31903[(25)]);
var inst_31864 = cljs.core.chunked_seq_QMARK_.call(null,inst_31862);
var state_31903__$1 = state_31903;
if(inst_31864){
var statearr_31934_32007 = state_31903__$1;
(statearr_31934_32007[(1)] = (36));

} else {
var statearr_31935_32008 = state_31903__$1;
(statearr_31935_32008[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (13))){
var inst_31794 = (state_31903[(26)]);
var inst_31797 = cljs.core.async.close_BANG_.call(null,inst_31794);
var state_31903__$1 = state_31903;
var statearr_31936_32009 = state_31903__$1;
(statearr_31936_32009[(2)] = inst_31797);

(statearr_31936_32009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (22))){
var inst_31815 = (state_31903[(8)]);
var inst_31818 = cljs.core.async.close_BANG_.call(null,inst_31815);
var state_31903__$1 = state_31903;
var statearr_31937_32010 = state_31903__$1;
(statearr_31937_32010[(2)] = inst_31818);

(statearr_31937_32010[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (36))){
var inst_31862 = (state_31903[(25)]);
var inst_31866 = cljs.core.chunk_first.call(null,inst_31862);
var inst_31867 = cljs.core.chunk_rest.call(null,inst_31862);
var inst_31868 = cljs.core.count.call(null,inst_31866);
var inst_31843 = inst_31867;
var inst_31844 = inst_31866;
var inst_31845 = inst_31868;
var inst_31846 = (0);
var state_31903__$1 = (function (){var statearr_31938 = state_31903;
(statearr_31938[(10)] = inst_31846);

(statearr_31938[(11)] = inst_31844);

(statearr_31938[(20)] = inst_31845);

(statearr_31938[(21)] = inst_31843);

return statearr_31938;
})();
var statearr_31939_32011 = state_31903__$1;
(statearr_31939_32011[(2)] = null);

(statearr_31939_32011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (41))){
var inst_31862 = (state_31903[(25)]);
var inst_31878 = (state_31903[(2)]);
var inst_31879 = cljs.core.next.call(null,inst_31862);
var inst_31843 = inst_31879;
var inst_31844 = null;
var inst_31845 = (0);
var inst_31846 = (0);
var state_31903__$1 = (function (){var statearr_31940 = state_31903;
(statearr_31940[(10)] = inst_31846);

(statearr_31940[(27)] = inst_31878);

(statearr_31940[(11)] = inst_31844);

(statearr_31940[(20)] = inst_31845);

(statearr_31940[(21)] = inst_31843);

return statearr_31940;
})();
var statearr_31941_32012 = state_31903__$1;
(statearr_31941_32012[(2)] = null);

(statearr_31941_32012[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (43))){
var state_31903__$1 = state_31903;
var statearr_31942_32013 = state_31903__$1;
(statearr_31942_32013[(2)] = null);

(statearr_31942_32013[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (29))){
var inst_31887 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31943_32014 = state_31903__$1;
(statearr_31943_32014[(2)] = inst_31887);

(statearr_31943_32014[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (44))){
var inst_31896 = (state_31903[(2)]);
var state_31903__$1 = (function (){var statearr_31944 = state_31903;
(statearr_31944[(28)] = inst_31896);

return statearr_31944;
})();
var statearr_31945_32015 = state_31903__$1;
(statearr_31945_32015[(2)] = null);

(statearr_31945_32015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (6))){
var inst_31835 = (state_31903[(29)]);
var inst_31834 = cljs.core.deref.call(null,cs);
var inst_31835__$1 = cljs.core.keys.call(null,inst_31834);
var inst_31836 = cljs.core.count.call(null,inst_31835__$1);
var inst_31837 = cljs.core.reset_BANG_.call(null,dctr,inst_31836);
var inst_31842 = cljs.core.seq.call(null,inst_31835__$1);
var inst_31843 = inst_31842;
var inst_31844 = null;
var inst_31845 = (0);
var inst_31846 = (0);
var state_31903__$1 = (function (){var statearr_31946 = state_31903;
(statearr_31946[(10)] = inst_31846);

(statearr_31946[(11)] = inst_31844);

(statearr_31946[(20)] = inst_31845);

(statearr_31946[(21)] = inst_31843);

(statearr_31946[(30)] = inst_31837);

(statearr_31946[(29)] = inst_31835__$1);

return statearr_31946;
})();
var statearr_31947_32016 = state_31903__$1;
(statearr_31947_32016[(2)] = null);

(statearr_31947_32016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (28))){
var inst_31862 = (state_31903[(25)]);
var inst_31843 = (state_31903[(21)]);
var inst_31862__$1 = cljs.core.seq.call(null,inst_31843);
var state_31903__$1 = (function (){var statearr_31948 = state_31903;
(statearr_31948[(25)] = inst_31862__$1);

return statearr_31948;
})();
if(inst_31862__$1){
var statearr_31949_32017 = state_31903__$1;
(statearr_31949_32017[(1)] = (33));

} else {
var statearr_31950_32018 = state_31903__$1;
(statearr_31950_32018[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (25))){
var inst_31846 = (state_31903[(10)]);
var inst_31845 = (state_31903[(20)]);
var inst_31848 = (inst_31846 < inst_31845);
var inst_31849 = inst_31848;
var state_31903__$1 = state_31903;
if(cljs.core.truth_(inst_31849)){
var statearr_31951_32019 = state_31903__$1;
(statearr_31951_32019[(1)] = (27));

} else {
var statearr_31952_32020 = state_31903__$1;
(statearr_31952_32020[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (34))){
var state_31903__$1 = state_31903;
var statearr_31953_32021 = state_31903__$1;
(statearr_31953_32021[(2)] = null);

(statearr_31953_32021[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (17))){
var state_31903__$1 = state_31903;
var statearr_31954_32022 = state_31903__$1;
(statearr_31954_32022[(2)] = null);

(statearr_31954_32022[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (3))){
var inst_31901 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31903__$1,inst_31901);
} else {
if((state_val_31904 === (12))){
var inst_31830 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31955_32023 = state_31903__$1;
(statearr_31955_32023[(2)] = inst_31830);

(statearr_31955_32023[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (2))){
var state_31903__$1 = state_31903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31903__$1,(4),ch);
} else {
if((state_val_31904 === (23))){
var state_31903__$1 = state_31903;
var statearr_31956_32024 = state_31903__$1;
(statearr_31956_32024[(2)] = null);

(statearr_31956_32024[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (35))){
var inst_31885 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31957_32025 = state_31903__$1;
(statearr_31957_32025[(2)] = inst_31885);

(statearr_31957_32025[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (19))){
var inst_31804 = (state_31903[(7)]);
var inst_31808 = cljs.core.chunk_first.call(null,inst_31804);
var inst_31809 = cljs.core.chunk_rest.call(null,inst_31804);
var inst_31810 = cljs.core.count.call(null,inst_31808);
var inst_31784 = inst_31809;
var inst_31785 = inst_31808;
var inst_31786 = inst_31810;
var inst_31787 = (0);
var state_31903__$1 = (function (){var statearr_31958 = state_31903;
(statearr_31958[(13)] = inst_31786);

(statearr_31958[(14)] = inst_31785);

(statearr_31958[(15)] = inst_31784);

(statearr_31958[(17)] = inst_31787);

return statearr_31958;
})();
var statearr_31959_32026 = state_31903__$1;
(statearr_31959_32026[(2)] = null);

(statearr_31959_32026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (11))){
var inst_31804 = (state_31903[(7)]);
var inst_31784 = (state_31903[(15)]);
var inst_31804__$1 = cljs.core.seq.call(null,inst_31784);
var state_31903__$1 = (function (){var statearr_31960 = state_31903;
(statearr_31960[(7)] = inst_31804__$1);

return statearr_31960;
})();
if(inst_31804__$1){
var statearr_31961_32027 = state_31903__$1;
(statearr_31961_32027[(1)] = (16));

} else {
var statearr_31962_32028 = state_31903__$1;
(statearr_31962_32028[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (9))){
var inst_31832 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31963_32029 = state_31903__$1;
(statearr_31963_32029[(2)] = inst_31832);

(statearr_31963_32029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (5))){
var inst_31782 = cljs.core.deref.call(null,cs);
var inst_31783 = cljs.core.seq.call(null,inst_31782);
var inst_31784 = inst_31783;
var inst_31785 = null;
var inst_31786 = (0);
var inst_31787 = (0);
var state_31903__$1 = (function (){var statearr_31964 = state_31903;
(statearr_31964[(13)] = inst_31786);

(statearr_31964[(14)] = inst_31785);

(statearr_31964[(15)] = inst_31784);

(statearr_31964[(17)] = inst_31787);

return statearr_31964;
})();
var statearr_31965_32030 = state_31903__$1;
(statearr_31965_32030[(2)] = null);

(statearr_31965_32030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (14))){
var state_31903__$1 = state_31903;
var statearr_31966_32031 = state_31903__$1;
(statearr_31966_32031[(2)] = null);

(statearr_31966_32031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (45))){
var inst_31893 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31967_32032 = state_31903__$1;
(statearr_31967_32032[(2)] = inst_31893);

(statearr_31967_32032[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (26))){
var inst_31835 = (state_31903[(29)]);
var inst_31889 = (state_31903[(2)]);
var inst_31890 = cljs.core.seq.call(null,inst_31835);
var state_31903__$1 = (function (){var statearr_31968 = state_31903;
(statearr_31968[(31)] = inst_31889);

return statearr_31968;
})();
if(inst_31890){
var statearr_31969_32033 = state_31903__$1;
(statearr_31969_32033[(1)] = (42));

} else {
var statearr_31970_32034 = state_31903__$1;
(statearr_31970_32034[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (16))){
var inst_31804 = (state_31903[(7)]);
var inst_31806 = cljs.core.chunked_seq_QMARK_.call(null,inst_31804);
var state_31903__$1 = state_31903;
if(inst_31806){
var statearr_31971_32035 = state_31903__$1;
(statearr_31971_32035[(1)] = (19));

} else {
var statearr_31972_32036 = state_31903__$1;
(statearr_31972_32036[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (38))){
var inst_31882 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31973_32037 = state_31903__$1;
(statearr_31973_32037[(2)] = inst_31882);

(statearr_31973_32037[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (30))){
var state_31903__$1 = state_31903;
var statearr_31974_32038 = state_31903__$1;
(statearr_31974_32038[(2)] = null);

(statearr_31974_32038[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (10))){
var inst_31785 = (state_31903[(14)]);
var inst_31787 = (state_31903[(17)]);
var inst_31793 = cljs.core._nth.call(null,inst_31785,inst_31787);
var inst_31794 = cljs.core.nth.call(null,inst_31793,(0),null);
var inst_31795 = cljs.core.nth.call(null,inst_31793,(1),null);
var state_31903__$1 = (function (){var statearr_31975 = state_31903;
(statearr_31975[(26)] = inst_31794);

return statearr_31975;
})();
if(cljs.core.truth_(inst_31795)){
var statearr_31976_32039 = state_31903__$1;
(statearr_31976_32039[(1)] = (13));

} else {
var statearr_31977_32040 = state_31903__$1;
(statearr_31977_32040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (18))){
var inst_31828 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31978_32041 = state_31903__$1;
(statearr_31978_32041[(2)] = inst_31828);

(statearr_31978_32041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (42))){
var state_31903__$1 = state_31903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31903__$1,(45),dchan);
} else {
if((state_val_31904 === (37))){
var inst_31862 = (state_31903[(25)]);
var inst_31871 = (state_31903[(23)]);
var inst_31775 = (state_31903[(12)]);
var inst_31871__$1 = cljs.core.first.call(null,inst_31862);
var inst_31872 = cljs.core.async.put_BANG_.call(null,inst_31871__$1,inst_31775,done);
var state_31903__$1 = (function (){var statearr_31979 = state_31903;
(statearr_31979[(23)] = inst_31871__$1);

return statearr_31979;
})();
if(cljs.core.truth_(inst_31872)){
var statearr_31980_32042 = state_31903__$1;
(statearr_31980_32042[(1)] = (39));

} else {
var statearr_31981_32043 = state_31903__$1;
(statearr_31981_32043[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (8))){
var inst_31786 = (state_31903[(13)]);
var inst_31787 = (state_31903[(17)]);
var inst_31789 = (inst_31787 < inst_31786);
var inst_31790 = inst_31789;
var state_31903__$1 = state_31903;
if(cljs.core.truth_(inst_31790)){
var statearr_31982_32044 = state_31903__$1;
(statearr_31982_32044[(1)] = (10));

} else {
var statearr_31983_32045 = state_31903__$1;
(statearr_31983_32045[(1)] = (11));

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
});})(c__7568__auto___31991,cs,m,dchan,dctr,done))
;
return ((function (switch__7553__auto__,c__7568__auto___31991,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_31987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31987[(0)] = state_machine__7554__auto__);

(statearr_31987[(1)] = (1));

return statearr_31987;
});
var state_machine__7554__auto____1 = (function (state_31903){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_31903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e31988){if((e31988 instanceof Object)){
var ex__7557__auto__ = e31988;
var statearr_31989_32046 = state_31903;
(statearr_31989_32046[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32047 = state_31903;
state_31903 = G__32047;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_31903){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_31903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___31991,cs,m,dchan,dctr,done))
})();
var state__7570__auto__ = (function (){var statearr_31990 = f__7569__auto__.call(null);
(statearr_31990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___31991);

return statearr_31990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___31991,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj32049 = {};
return obj32049;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32050){
var map__32055 = p__32050;
var map__32055__$1 = ((cljs.core.seq_QMARK_.call(null,map__32055))?cljs.core.apply.call(null,cljs.core.hash_map,map__32055):map__32055);
var opts = map__32055__$1;
var statearr_32056_32059 = state;
(statearr_32056_32059[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__32055,map__32055__$1,opts){
return (function (val){
var statearr_32057_32060 = state;
(statearr_32057_32060[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32055,map__32055__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32058_32061 = state;
(statearr_32058_32061[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32050 = null;
if (arguments.length > 3) {
var G__32062__i = 0, G__32062__a = new Array(arguments.length -  3);
while (G__32062__i < G__32062__a.length) {G__32062__a[G__32062__i] = arguments[G__32062__i + 3]; ++G__32062__i;}
  p__32050 = new cljs.core.IndexedSeq(G__32062__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32050);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32063){
var state = cljs.core.first(arglist__32063);
arglist__32063 = cljs.core.next(arglist__32063);
var cont_block = cljs.core.first(arglist__32063);
arglist__32063 = cljs.core.next(arglist__32063);
var ports = cljs.core.first(arglist__32063);
var p__32050 = cljs.core.rest(arglist__32063);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__32050);
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
if(typeof cljs.core.async.t32183 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32183 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32184){
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
this.meta32184 = meta32184;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32183.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32183.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32183.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32183.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32183.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32183.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t32183.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32183.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32185){
var self__ = this;
var _32185__$1 = this;
return self__.meta32184;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32185,meta32184__$1){
var self__ = this;
var _32185__$1 = this;
return (new cljs.core.async.t32183(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32184__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32183.cljs$lang$type = true;

cljs.core.async.t32183.cljs$lang$ctorStr = "cljs.core.async/t32183";

cljs.core.async.t32183.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t32183");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32183 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32183(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32184){
return (new cljs.core.async.t32183(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32184));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32183(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7568__auto___32302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___32302,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___32302,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32255){
var state_val_32256 = (state_32255[(1)]);
if((state_val_32256 === (7))){
var inst_32199 = (state_32255[(7)]);
var inst_32204 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32199);
var state_32255__$1 = state_32255;
var statearr_32257_32303 = state_32255__$1;
(statearr_32257_32303[(2)] = inst_32204);

(statearr_32257_32303[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (20))){
var inst_32214 = (state_32255[(8)]);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32255__$1,(23),out,inst_32214);
} else {
if((state_val_32256 === (1))){
var inst_32189 = (state_32255[(9)]);
var inst_32189__$1 = calc_state.call(null);
var inst_32190 = cljs.core.seq_QMARK_.call(null,inst_32189__$1);
var state_32255__$1 = (function (){var statearr_32258 = state_32255;
(statearr_32258[(9)] = inst_32189__$1);

return statearr_32258;
})();
if(inst_32190){
var statearr_32259_32304 = state_32255__$1;
(statearr_32259_32304[(1)] = (2));

} else {
var statearr_32260_32305 = state_32255__$1;
(statearr_32260_32305[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (24))){
var inst_32207 = (state_32255[(10)]);
var inst_32199 = inst_32207;
var state_32255__$1 = (function (){var statearr_32261 = state_32255;
(statearr_32261[(7)] = inst_32199);

return statearr_32261;
})();
var statearr_32262_32306 = state_32255__$1;
(statearr_32262_32306[(2)] = null);

(statearr_32262_32306[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (4))){
var inst_32189 = (state_32255[(9)]);
var inst_32195 = (state_32255[(2)]);
var inst_32196 = cljs.core.get.call(null,inst_32195,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32197 = cljs.core.get.call(null,inst_32195,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32198 = cljs.core.get.call(null,inst_32195,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32199 = inst_32189;
var state_32255__$1 = (function (){var statearr_32263 = state_32255;
(statearr_32263[(7)] = inst_32199);

(statearr_32263[(11)] = inst_32197);

(statearr_32263[(12)] = inst_32196);

(statearr_32263[(13)] = inst_32198);

return statearr_32263;
})();
var statearr_32264_32307 = state_32255__$1;
(statearr_32264_32307[(2)] = null);

(statearr_32264_32307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (15))){
var state_32255__$1 = state_32255;
var statearr_32265_32308 = state_32255__$1;
(statearr_32265_32308[(2)] = null);

(statearr_32265_32308[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (21))){
var inst_32207 = (state_32255[(10)]);
var inst_32199 = inst_32207;
var state_32255__$1 = (function (){var statearr_32266 = state_32255;
(statearr_32266[(7)] = inst_32199);

return statearr_32266;
})();
var statearr_32267_32309 = state_32255__$1;
(statearr_32267_32309[(2)] = null);

(statearr_32267_32309[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (13))){
var inst_32251 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32268_32310 = state_32255__$1;
(statearr_32268_32310[(2)] = inst_32251);

(statearr_32268_32310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (22))){
var inst_32249 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32269_32311 = state_32255__$1;
(statearr_32269_32311[(2)] = inst_32249);

(statearr_32269_32311[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (6))){
var inst_32253 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32255__$1,inst_32253);
} else {
if((state_val_32256 === (25))){
var state_32255__$1 = state_32255;
var statearr_32270_32312 = state_32255__$1;
(statearr_32270_32312[(2)] = null);

(statearr_32270_32312[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (17))){
var inst_32229 = (state_32255[(14)]);
var state_32255__$1 = state_32255;
var statearr_32271_32313 = state_32255__$1;
(statearr_32271_32313[(2)] = inst_32229);

(statearr_32271_32313[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (3))){
var inst_32189 = (state_32255[(9)]);
var state_32255__$1 = state_32255;
var statearr_32272_32314 = state_32255__$1;
(statearr_32272_32314[(2)] = inst_32189);

(statearr_32272_32314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (12))){
var inst_32229 = (state_32255[(14)]);
var inst_32210 = (state_32255[(15)]);
var inst_32215 = (state_32255[(16)]);
var inst_32229__$1 = inst_32210.call(null,inst_32215);
var state_32255__$1 = (function (){var statearr_32273 = state_32255;
(statearr_32273[(14)] = inst_32229__$1);

return statearr_32273;
})();
if(cljs.core.truth_(inst_32229__$1)){
var statearr_32274_32315 = state_32255__$1;
(statearr_32274_32315[(1)] = (17));

} else {
var statearr_32275_32316 = state_32255__$1;
(statearr_32275_32316[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (2))){
var inst_32189 = (state_32255[(9)]);
var inst_32192 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32189);
var state_32255__$1 = state_32255;
var statearr_32276_32317 = state_32255__$1;
(statearr_32276_32317[(2)] = inst_32192);

(statearr_32276_32317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (23))){
var inst_32240 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
if(cljs.core.truth_(inst_32240)){
var statearr_32277_32318 = state_32255__$1;
(statearr_32277_32318[(1)] = (24));

} else {
var statearr_32278_32319 = state_32255__$1;
(statearr_32278_32319[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (19))){
var inst_32237 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
if(cljs.core.truth_(inst_32237)){
var statearr_32279_32320 = state_32255__$1;
(statearr_32279_32320[(1)] = (20));

} else {
var statearr_32280_32321 = state_32255__$1;
(statearr_32280_32321[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (11))){
var inst_32214 = (state_32255[(8)]);
var inst_32220 = (inst_32214 == null);
var state_32255__$1 = state_32255;
if(cljs.core.truth_(inst_32220)){
var statearr_32281_32322 = state_32255__$1;
(statearr_32281_32322[(1)] = (14));

} else {
var statearr_32282_32323 = state_32255__$1;
(statearr_32282_32323[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (9))){
var inst_32207 = (state_32255[(10)]);
var inst_32207__$1 = (state_32255[(2)]);
var inst_32208 = cljs.core.get.call(null,inst_32207__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32209 = cljs.core.get.call(null,inst_32207__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32210 = cljs.core.get.call(null,inst_32207__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_32255__$1 = (function (){var statearr_32283 = state_32255;
(statearr_32283[(15)] = inst_32210);

(statearr_32283[(10)] = inst_32207__$1);

(statearr_32283[(17)] = inst_32209);

return statearr_32283;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32255__$1,(10),inst_32208);
} else {
if((state_val_32256 === (5))){
var inst_32199 = (state_32255[(7)]);
var inst_32202 = cljs.core.seq_QMARK_.call(null,inst_32199);
var state_32255__$1 = state_32255;
if(inst_32202){
var statearr_32284_32324 = state_32255__$1;
(statearr_32284_32324[(1)] = (7));

} else {
var statearr_32285_32325 = state_32255__$1;
(statearr_32285_32325[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (14))){
var inst_32215 = (state_32255[(16)]);
var inst_32222 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32215);
var state_32255__$1 = state_32255;
var statearr_32286_32326 = state_32255__$1;
(statearr_32286_32326[(2)] = inst_32222);

(statearr_32286_32326[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (26))){
var inst_32245 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32287_32327 = state_32255__$1;
(statearr_32287_32327[(2)] = inst_32245);

(statearr_32287_32327[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (16))){
var inst_32225 = (state_32255[(2)]);
var inst_32226 = calc_state.call(null);
var inst_32199 = inst_32226;
var state_32255__$1 = (function (){var statearr_32288 = state_32255;
(statearr_32288[(7)] = inst_32199);

(statearr_32288[(18)] = inst_32225);

return statearr_32288;
})();
var statearr_32289_32328 = state_32255__$1;
(statearr_32289_32328[(2)] = null);

(statearr_32289_32328[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (10))){
var inst_32214 = (state_32255[(8)]);
var inst_32215 = (state_32255[(16)]);
var inst_32213 = (state_32255[(2)]);
var inst_32214__$1 = cljs.core.nth.call(null,inst_32213,(0),null);
var inst_32215__$1 = cljs.core.nth.call(null,inst_32213,(1),null);
var inst_32216 = (inst_32214__$1 == null);
var inst_32217 = cljs.core._EQ_.call(null,inst_32215__$1,change);
var inst_32218 = (inst_32216) || (inst_32217);
var state_32255__$1 = (function (){var statearr_32290 = state_32255;
(statearr_32290[(8)] = inst_32214__$1);

(statearr_32290[(16)] = inst_32215__$1);

return statearr_32290;
})();
if(cljs.core.truth_(inst_32218)){
var statearr_32291_32329 = state_32255__$1;
(statearr_32291_32329[(1)] = (11));

} else {
var statearr_32292_32330 = state_32255__$1;
(statearr_32292_32330[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (18))){
var inst_32210 = (state_32255[(15)]);
var inst_32215 = (state_32255[(16)]);
var inst_32209 = (state_32255[(17)]);
var inst_32232 = cljs.core.empty_QMARK_.call(null,inst_32210);
var inst_32233 = inst_32209.call(null,inst_32215);
var inst_32234 = cljs.core.not.call(null,inst_32233);
var inst_32235 = (inst_32232) && (inst_32234);
var state_32255__$1 = state_32255;
var statearr_32293_32331 = state_32255__$1;
(statearr_32293_32331[(2)] = inst_32235);

(statearr_32293_32331[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (8))){
var inst_32199 = (state_32255[(7)]);
var state_32255__$1 = state_32255;
var statearr_32294_32332 = state_32255__$1;
(statearr_32294_32332[(2)] = inst_32199);

(statearr_32294_32332[(1)] = (9));


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
});})(c__7568__auto___32302,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7553__auto__,c__7568__auto___32302,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_32298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32298[(0)] = state_machine__7554__auto__);

(statearr_32298[(1)] = (1));

return statearr_32298;
});
var state_machine__7554__auto____1 = (function (state_32255){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_32255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e32299){if((e32299 instanceof Object)){
var ex__7557__auto__ = e32299;
var statearr_32300_32333 = state_32255;
(statearr_32300_32333[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32334 = state_32255;
state_32255 = G__32334;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_32255){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_32255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___32302,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7570__auto__ = (function (){var statearr_32301 = f__7569__auto__.call(null);
(statearr_32301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___32302);

return statearr_32301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___32302,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj32336 = {};
return obj32336;
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
return (function (p1__32337_SHARP_){
if(cljs.core.truth_(p1__32337_SHARP_.call(null,topic))){
return p1__32337_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32337_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3981__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t32460 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32460 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32461){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32461 = meta32461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32460.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t32460.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t32460.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t32460.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t32460.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t32460.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32460.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t32460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32462){
var self__ = this;
var _32462__$1 = this;
return self__.meta32461;
});})(mults,ensure_mult))
;

cljs.core.async.t32460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32462,meta32461__$1){
var self__ = this;
var _32462__$1 = this;
return (new cljs.core.async.t32460(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32461__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t32460.cljs$lang$type = true;

cljs.core.async.t32460.cljs$lang$ctorStr = "cljs.core.async/t32460";

cljs.core.async.t32460.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t32460");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t32460 = ((function (mults,ensure_mult){
return (function __GT_t32460(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32461){
return (new cljs.core.async.t32460(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32461));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t32460(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7568__auto___32582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___32582,mults,ensure_mult,p){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___32582,mults,ensure_mult,p){
return (function (state_32534){
var state_val_32535 = (state_32534[(1)]);
if((state_val_32535 === (7))){
var inst_32530 = (state_32534[(2)]);
var state_32534__$1 = state_32534;
var statearr_32536_32583 = state_32534__$1;
(statearr_32536_32583[(2)] = inst_32530);

(statearr_32536_32583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (20))){
var state_32534__$1 = state_32534;
var statearr_32537_32584 = state_32534__$1;
(statearr_32537_32584[(2)] = null);

(statearr_32537_32584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (1))){
var state_32534__$1 = state_32534;
var statearr_32538_32585 = state_32534__$1;
(statearr_32538_32585[(2)] = null);

(statearr_32538_32585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (24))){
var inst_32513 = (state_32534[(7)]);
var inst_32522 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32513);
var state_32534__$1 = state_32534;
var statearr_32539_32586 = state_32534__$1;
(statearr_32539_32586[(2)] = inst_32522);

(statearr_32539_32586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (4))){
var inst_32465 = (state_32534[(8)]);
var inst_32465__$1 = (state_32534[(2)]);
var inst_32466 = (inst_32465__$1 == null);
var state_32534__$1 = (function (){var statearr_32540 = state_32534;
(statearr_32540[(8)] = inst_32465__$1);

return statearr_32540;
})();
if(cljs.core.truth_(inst_32466)){
var statearr_32541_32587 = state_32534__$1;
(statearr_32541_32587[(1)] = (5));

} else {
var statearr_32542_32588 = state_32534__$1;
(statearr_32542_32588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (15))){
var inst_32507 = (state_32534[(2)]);
var state_32534__$1 = state_32534;
var statearr_32543_32589 = state_32534__$1;
(statearr_32543_32589[(2)] = inst_32507);

(statearr_32543_32589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (21))){
var inst_32527 = (state_32534[(2)]);
var state_32534__$1 = (function (){var statearr_32544 = state_32534;
(statearr_32544[(9)] = inst_32527);

return statearr_32544;
})();
var statearr_32545_32590 = state_32534__$1;
(statearr_32545_32590[(2)] = null);

(statearr_32545_32590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (13))){
var inst_32489 = (state_32534[(10)]);
var inst_32491 = cljs.core.chunked_seq_QMARK_.call(null,inst_32489);
var state_32534__$1 = state_32534;
if(inst_32491){
var statearr_32546_32591 = state_32534__$1;
(statearr_32546_32591[(1)] = (16));

} else {
var statearr_32547_32592 = state_32534__$1;
(statearr_32547_32592[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (22))){
var inst_32519 = (state_32534[(2)]);
var state_32534__$1 = state_32534;
if(cljs.core.truth_(inst_32519)){
var statearr_32548_32593 = state_32534__$1;
(statearr_32548_32593[(1)] = (23));

} else {
var statearr_32549_32594 = state_32534__$1;
(statearr_32549_32594[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (6))){
var inst_32465 = (state_32534[(8)]);
var inst_32515 = (state_32534[(11)]);
var inst_32513 = (state_32534[(7)]);
var inst_32513__$1 = topic_fn.call(null,inst_32465);
var inst_32514 = cljs.core.deref.call(null,mults);
var inst_32515__$1 = cljs.core.get.call(null,inst_32514,inst_32513__$1);
var state_32534__$1 = (function (){var statearr_32550 = state_32534;
(statearr_32550[(11)] = inst_32515__$1);

(statearr_32550[(7)] = inst_32513__$1);

return statearr_32550;
})();
if(cljs.core.truth_(inst_32515__$1)){
var statearr_32551_32595 = state_32534__$1;
(statearr_32551_32595[(1)] = (19));

} else {
var statearr_32552_32596 = state_32534__$1;
(statearr_32552_32596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (25))){
var inst_32524 = (state_32534[(2)]);
var state_32534__$1 = state_32534;
var statearr_32553_32597 = state_32534__$1;
(statearr_32553_32597[(2)] = inst_32524);

(statearr_32553_32597[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (17))){
var inst_32489 = (state_32534[(10)]);
var inst_32498 = cljs.core.first.call(null,inst_32489);
var inst_32499 = cljs.core.async.muxch_STAR_.call(null,inst_32498);
var inst_32500 = cljs.core.async.close_BANG_.call(null,inst_32499);
var inst_32501 = cljs.core.next.call(null,inst_32489);
var inst_32475 = inst_32501;
var inst_32476 = null;
var inst_32477 = (0);
var inst_32478 = (0);
var state_32534__$1 = (function (){var statearr_32554 = state_32534;
(statearr_32554[(12)] = inst_32478);

(statearr_32554[(13)] = inst_32475);

(statearr_32554[(14)] = inst_32500);

(statearr_32554[(15)] = inst_32477);

(statearr_32554[(16)] = inst_32476);

return statearr_32554;
})();
var statearr_32555_32598 = state_32534__$1;
(statearr_32555_32598[(2)] = null);

(statearr_32555_32598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (3))){
var inst_32532 = (state_32534[(2)]);
var state_32534__$1 = state_32534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32534__$1,inst_32532);
} else {
if((state_val_32535 === (12))){
var inst_32509 = (state_32534[(2)]);
var state_32534__$1 = state_32534;
var statearr_32556_32599 = state_32534__$1;
(statearr_32556_32599[(2)] = inst_32509);

(statearr_32556_32599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (2))){
var state_32534__$1 = state_32534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32534__$1,(4),ch);
} else {
if((state_val_32535 === (23))){
var state_32534__$1 = state_32534;
var statearr_32557_32600 = state_32534__$1;
(statearr_32557_32600[(2)] = null);

(statearr_32557_32600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (19))){
var inst_32465 = (state_32534[(8)]);
var inst_32515 = (state_32534[(11)]);
var inst_32517 = cljs.core.async.muxch_STAR_.call(null,inst_32515);
var state_32534__$1 = state_32534;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32534__$1,(22),inst_32517,inst_32465);
} else {
if((state_val_32535 === (11))){
var inst_32475 = (state_32534[(13)]);
var inst_32489 = (state_32534[(10)]);
var inst_32489__$1 = cljs.core.seq.call(null,inst_32475);
var state_32534__$1 = (function (){var statearr_32558 = state_32534;
(statearr_32558[(10)] = inst_32489__$1);

return statearr_32558;
})();
if(inst_32489__$1){
var statearr_32559_32601 = state_32534__$1;
(statearr_32559_32601[(1)] = (13));

} else {
var statearr_32560_32602 = state_32534__$1;
(statearr_32560_32602[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (9))){
var inst_32511 = (state_32534[(2)]);
var state_32534__$1 = state_32534;
var statearr_32561_32603 = state_32534__$1;
(statearr_32561_32603[(2)] = inst_32511);

(statearr_32561_32603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (5))){
var inst_32472 = cljs.core.deref.call(null,mults);
var inst_32473 = cljs.core.vals.call(null,inst_32472);
var inst_32474 = cljs.core.seq.call(null,inst_32473);
var inst_32475 = inst_32474;
var inst_32476 = null;
var inst_32477 = (0);
var inst_32478 = (0);
var state_32534__$1 = (function (){var statearr_32562 = state_32534;
(statearr_32562[(12)] = inst_32478);

(statearr_32562[(13)] = inst_32475);

(statearr_32562[(15)] = inst_32477);

(statearr_32562[(16)] = inst_32476);

return statearr_32562;
})();
var statearr_32563_32604 = state_32534__$1;
(statearr_32563_32604[(2)] = null);

(statearr_32563_32604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (14))){
var state_32534__$1 = state_32534;
var statearr_32567_32605 = state_32534__$1;
(statearr_32567_32605[(2)] = null);

(statearr_32567_32605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (16))){
var inst_32489 = (state_32534[(10)]);
var inst_32493 = cljs.core.chunk_first.call(null,inst_32489);
var inst_32494 = cljs.core.chunk_rest.call(null,inst_32489);
var inst_32495 = cljs.core.count.call(null,inst_32493);
var inst_32475 = inst_32494;
var inst_32476 = inst_32493;
var inst_32477 = inst_32495;
var inst_32478 = (0);
var state_32534__$1 = (function (){var statearr_32568 = state_32534;
(statearr_32568[(12)] = inst_32478);

(statearr_32568[(13)] = inst_32475);

(statearr_32568[(15)] = inst_32477);

(statearr_32568[(16)] = inst_32476);

return statearr_32568;
})();
var statearr_32569_32606 = state_32534__$1;
(statearr_32569_32606[(2)] = null);

(statearr_32569_32606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (10))){
var inst_32478 = (state_32534[(12)]);
var inst_32475 = (state_32534[(13)]);
var inst_32477 = (state_32534[(15)]);
var inst_32476 = (state_32534[(16)]);
var inst_32483 = cljs.core._nth.call(null,inst_32476,inst_32478);
var inst_32484 = cljs.core.async.muxch_STAR_.call(null,inst_32483);
var inst_32485 = cljs.core.async.close_BANG_.call(null,inst_32484);
var inst_32486 = (inst_32478 + (1));
var tmp32564 = inst_32475;
var tmp32565 = inst_32477;
var tmp32566 = inst_32476;
var inst_32475__$1 = tmp32564;
var inst_32476__$1 = tmp32566;
var inst_32477__$1 = tmp32565;
var inst_32478__$1 = inst_32486;
var state_32534__$1 = (function (){var statearr_32570 = state_32534;
(statearr_32570[(12)] = inst_32478__$1);

(statearr_32570[(17)] = inst_32485);

(statearr_32570[(13)] = inst_32475__$1);

(statearr_32570[(15)] = inst_32477__$1);

(statearr_32570[(16)] = inst_32476__$1);

return statearr_32570;
})();
var statearr_32571_32607 = state_32534__$1;
(statearr_32571_32607[(2)] = null);

(statearr_32571_32607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (18))){
var inst_32504 = (state_32534[(2)]);
var state_32534__$1 = state_32534;
var statearr_32572_32608 = state_32534__$1;
(statearr_32572_32608[(2)] = inst_32504);

(statearr_32572_32608[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32535 === (8))){
var inst_32478 = (state_32534[(12)]);
var inst_32477 = (state_32534[(15)]);
var inst_32480 = (inst_32478 < inst_32477);
var inst_32481 = inst_32480;
var state_32534__$1 = state_32534;
if(cljs.core.truth_(inst_32481)){
var statearr_32573_32609 = state_32534__$1;
(statearr_32573_32609[(1)] = (10));

} else {
var statearr_32574_32610 = state_32534__$1;
(statearr_32574_32610[(1)] = (11));

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
});})(c__7568__auto___32582,mults,ensure_mult,p))
;
return ((function (switch__7553__auto__,c__7568__auto___32582,mults,ensure_mult,p){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_32578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32578[(0)] = state_machine__7554__auto__);

(statearr_32578[(1)] = (1));

return statearr_32578;
});
var state_machine__7554__auto____1 = (function (state_32534){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_32534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e32579){if((e32579 instanceof Object)){
var ex__7557__auto__ = e32579;
var statearr_32580_32611 = state_32534;
(statearr_32580_32611[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32612 = state_32534;
state_32534 = G__32612;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_32534){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_32534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___32582,mults,ensure_mult,p))
})();
var state__7570__auto__ = (function (){var statearr_32581 = f__7569__auto__.call(null);
(statearr_32581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___32582);

return statearr_32581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___32582,mults,ensure_mult,p))
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
var c__7568__auto___32749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___32749,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___32749,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32719){
var state_val_32720 = (state_32719[(1)]);
if((state_val_32720 === (7))){
var state_32719__$1 = state_32719;
var statearr_32721_32750 = state_32719__$1;
(statearr_32721_32750[(2)] = null);

(statearr_32721_32750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (1))){
var state_32719__$1 = state_32719;
var statearr_32722_32751 = state_32719__$1;
(statearr_32722_32751[(2)] = null);

(statearr_32722_32751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (4))){
var inst_32683 = (state_32719[(7)]);
var inst_32685 = (inst_32683 < cnt);
var state_32719__$1 = state_32719;
if(cljs.core.truth_(inst_32685)){
var statearr_32723_32752 = state_32719__$1;
(statearr_32723_32752[(1)] = (6));

} else {
var statearr_32724_32753 = state_32719__$1;
(statearr_32724_32753[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (15))){
var inst_32715 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32725_32754 = state_32719__$1;
(statearr_32725_32754[(2)] = inst_32715);

(statearr_32725_32754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (13))){
var inst_32708 = cljs.core.async.close_BANG_.call(null,out);
var state_32719__$1 = state_32719;
var statearr_32726_32755 = state_32719__$1;
(statearr_32726_32755[(2)] = inst_32708);

(statearr_32726_32755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (6))){
var state_32719__$1 = state_32719;
var statearr_32727_32756 = state_32719__$1;
(statearr_32727_32756[(2)] = null);

(statearr_32727_32756[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (3))){
var inst_32717 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32719__$1,inst_32717);
} else {
if((state_val_32720 === (12))){
var inst_32705 = (state_32719[(8)]);
var inst_32705__$1 = (state_32719[(2)]);
var inst_32706 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32705__$1);
var state_32719__$1 = (function (){var statearr_32728 = state_32719;
(statearr_32728[(8)] = inst_32705__$1);

return statearr_32728;
})();
if(cljs.core.truth_(inst_32706)){
var statearr_32729_32757 = state_32719__$1;
(statearr_32729_32757[(1)] = (13));

} else {
var statearr_32730_32758 = state_32719__$1;
(statearr_32730_32758[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (2))){
var inst_32682 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32683 = (0);
var state_32719__$1 = (function (){var statearr_32731 = state_32719;
(statearr_32731[(7)] = inst_32683);

(statearr_32731[(9)] = inst_32682);

return statearr_32731;
})();
var statearr_32732_32759 = state_32719__$1;
(statearr_32732_32759[(2)] = null);

(statearr_32732_32759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (11))){
var inst_32683 = (state_32719[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32719,(10),Object,null,(9));
var inst_32692 = chs__$1.call(null,inst_32683);
var inst_32693 = done.call(null,inst_32683);
var inst_32694 = cljs.core.async.take_BANG_.call(null,inst_32692,inst_32693);
var state_32719__$1 = state_32719;
var statearr_32733_32760 = state_32719__$1;
(statearr_32733_32760[(2)] = inst_32694);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32719__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (9))){
var inst_32683 = (state_32719[(7)]);
var inst_32696 = (state_32719[(2)]);
var inst_32697 = (inst_32683 + (1));
var inst_32683__$1 = inst_32697;
var state_32719__$1 = (function (){var statearr_32734 = state_32719;
(statearr_32734[(7)] = inst_32683__$1);

(statearr_32734[(10)] = inst_32696);

return statearr_32734;
})();
var statearr_32735_32761 = state_32719__$1;
(statearr_32735_32761[(2)] = null);

(statearr_32735_32761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (5))){
var inst_32703 = (state_32719[(2)]);
var state_32719__$1 = (function (){var statearr_32736 = state_32719;
(statearr_32736[(11)] = inst_32703);

return statearr_32736;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32719__$1,(12),dchan);
} else {
if((state_val_32720 === (14))){
var inst_32705 = (state_32719[(8)]);
var inst_32710 = cljs.core.apply.call(null,f,inst_32705);
var state_32719__$1 = state_32719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32719__$1,(16),out,inst_32710);
} else {
if((state_val_32720 === (16))){
var inst_32712 = (state_32719[(2)]);
var state_32719__$1 = (function (){var statearr_32737 = state_32719;
(statearr_32737[(12)] = inst_32712);

return statearr_32737;
})();
var statearr_32738_32762 = state_32719__$1;
(statearr_32738_32762[(2)] = null);

(statearr_32738_32762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (10))){
var inst_32687 = (state_32719[(2)]);
var inst_32688 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32719__$1 = (function (){var statearr_32739 = state_32719;
(statearr_32739[(13)] = inst_32687);

return statearr_32739;
})();
var statearr_32740_32763 = state_32719__$1;
(statearr_32740_32763[(2)] = inst_32688);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32719__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32720 === (8))){
var inst_32701 = (state_32719[(2)]);
var state_32719__$1 = state_32719;
var statearr_32741_32764 = state_32719__$1;
(statearr_32741_32764[(2)] = inst_32701);

(statearr_32741_32764[(1)] = (5));


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
});})(c__7568__auto___32749,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7553__auto__,c__7568__auto___32749,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_32745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32745[(0)] = state_machine__7554__auto__);

(statearr_32745[(1)] = (1));

return statearr_32745;
});
var state_machine__7554__auto____1 = (function (state_32719){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_32719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e32746){if((e32746 instanceof Object)){
var ex__7557__auto__ = e32746;
var statearr_32747_32765 = state_32719;
(statearr_32747_32765[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32766 = state_32719;
state_32719 = G__32766;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_32719){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_32719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___32749,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7570__auto__ = (function (){var statearr_32748 = f__7569__auto__.call(null);
(statearr_32748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___32749);

return statearr_32748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___32749,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7568__auto___32874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___32874,out){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___32874,out){
return (function (state_32850){
var state_val_32851 = (state_32850[(1)]);
if((state_val_32851 === (7))){
var inst_32830 = (state_32850[(7)]);
var inst_32829 = (state_32850[(8)]);
var inst_32829__$1 = (state_32850[(2)]);
var inst_32830__$1 = cljs.core.nth.call(null,inst_32829__$1,(0),null);
var inst_32831 = cljs.core.nth.call(null,inst_32829__$1,(1),null);
var inst_32832 = (inst_32830__$1 == null);
var state_32850__$1 = (function (){var statearr_32852 = state_32850;
(statearr_32852[(9)] = inst_32831);

(statearr_32852[(7)] = inst_32830__$1);

(statearr_32852[(8)] = inst_32829__$1);

return statearr_32852;
})();
if(cljs.core.truth_(inst_32832)){
var statearr_32853_32875 = state_32850__$1;
(statearr_32853_32875[(1)] = (8));

} else {
var statearr_32854_32876 = state_32850__$1;
(statearr_32854_32876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (1))){
var inst_32821 = cljs.core.vec.call(null,chs);
var inst_32822 = inst_32821;
var state_32850__$1 = (function (){var statearr_32855 = state_32850;
(statearr_32855[(10)] = inst_32822);

return statearr_32855;
})();
var statearr_32856_32877 = state_32850__$1;
(statearr_32856_32877[(2)] = null);

(statearr_32856_32877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (4))){
var inst_32822 = (state_32850[(10)]);
var state_32850__$1 = state_32850;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32850__$1,(7),inst_32822);
} else {
if((state_val_32851 === (6))){
var inst_32846 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
var statearr_32857_32878 = state_32850__$1;
(statearr_32857_32878[(2)] = inst_32846);

(statearr_32857_32878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (3))){
var inst_32848 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32850__$1,inst_32848);
} else {
if((state_val_32851 === (2))){
var inst_32822 = (state_32850[(10)]);
var inst_32824 = cljs.core.count.call(null,inst_32822);
var inst_32825 = (inst_32824 > (0));
var state_32850__$1 = state_32850;
if(cljs.core.truth_(inst_32825)){
var statearr_32859_32879 = state_32850__$1;
(statearr_32859_32879[(1)] = (4));

} else {
var statearr_32860_32880 = state_32850__$1;
(statearr_32860_32880[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (11))){
var inst_32822 = (state_32850[(10)]);
var inst_32839 = (state_32850[(2)]);
var tmp32858 = inst_32822;
var inst_32822__$1 = tmp32858;
var state_32850__$1 = (function (){var statearr_32861 = state_32850;
(statearr_32861[(10)] = inst_32822__$1);

(statearr_32861[(11)] = inst_32839);

return statearr_32861;
})();
var statearr_32862_32881 = state_32850__$1;
(statearr_32862_32881[(2)] = null);

(statearr_32862_32881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (9))){
var inst_32830 = (state_32850[(7)]);
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32850__$1,(11),out,inst_32830);
} else {
if((state_val_32851 === (5))){
var inst_32844 = cljs.core.async.close_BANG_.call(null,out);
var state_32850__$1 = state_32850;
var statearr_32863_32882 = state_32850__$1;
(statearr_32863_32882[(2)] = inst_32844);

(statearr_32863_32882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (10))){
var inst_32842 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
var statearr_32864_32883 = state_32850__$1;
(statearr_32864_32883[(2)] = inst_32842);

(statearr_32864_32883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (8))){
var inst_32831 = (state_32850[(9)]);
var inst_32830 = (state_32850[(7)]);
var inst_32829 = (state_32850[(8)]);
var inst_32822 = (state_32850[(10)]);
var inst_32834 = (function (){var c = inst_32831;
var v = inst_32830;
var vec__32827 = inst_32829;
var cs = inst_32822;
return ((function (c,v,vec__32827,cs,inst_32831,inst_32830,inst_32829,inst_32822,state_val_32851,c__7568__auto___32874,out){
return (function (p1__32767_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32767_SHARP_);
});
;})(c,v,vec__32827,cs,inst_32831,inst_32830,inst_32829,inst_32822,state_val_32851,c__7568__auto___32874,out))
})();
var inst_32835 = cljs.core.filterv.call(null,inst_32834,inst_32822);
var inst_32822__$1 = inst_32835;
var state_32850__$1 = (function (){var statearr_32865 = state_32850;
(statearr_32865[(10)] = inst_32822__$1);

return statearr_32865;
})();
var statearr_32866_32884 = state_32850__$1;
(statearr_32866_32884[(2)] = null);

(statearr_32866_32884[(1)] = (2));


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
});})(c__7568__auto___32874,out))
;
return ((function (switch__7553__auto__,c__7568__auto___32874,out){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_32870 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32870[(0)] = state_machine__7554__auto__);

(statearr_32870[(1)] = (1));

return statearr_32870;
});
var state_machine__7554__auto____1 = (function (state_32850){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_32850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e32871){if((e32871 instanceof Object)){
var ex__7557__auto__ = e32871;
var statearr_32872_32885 = state_32850;
(statearr_32872_32885[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32886 = state_32850;
state_32850 = G__32886;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_32850){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_32850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___32874,out))
})();
var state__7570__auto__ = (function (){var statearr_32873 = f__7569__auto__.call(null);
(statearr_32873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___32874);

return statearr_32873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___32874,out))
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
var c__7568__auto___32979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___32979,out){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___32979,out){
return (function (state_32956){
var state_val_32957 = (state_32956[(1)]);
if((state_val_32957 === (7))){
var inst_32938 = (state_32956[(7)]);
var inst_32938__$1 = (state_32956[(2)]);
var inst_32939 = (inst_32938__$1 == null);
var inst_32940 = cljs.core.not.call(null,inst_32939);
var state_32956__$1 = (function (){var statearr_32958 = state_32956;
(statearr_32958[(7)] = inst_32938__$1);

return statearr_32958;
})();
if(inst_32940){
var statearr_32959_32980 = state_32956__$1;
(statearr_32959_32980[(1)] = (8));

} else {
var statearr_32960_32981 = state_32956__$1;
(statearr_32960_32981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (1))){
var inst_32933 = (0);
var state_32956__$1 = (function (){var statearr_32961 = state_32956;
(statearr_32961[(8)] = inst_32933);

return statearr_32961;
})();
var statearr_32962_32982 = state_32956__$1;
(statearr_32962_32982[(2)] = null);

(statearr_32962_32982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (4))){
var state_32956__$1 = state_32956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32956__$1,(7),ch);
} else {
if((state_val_32957 === (6))){
var inst_32951 = (state_32956[(2)]);
var state_32956__$1 = state_32956;
var statearr_32963_32983 = state_32956__$1;
(statearr_32963_32983[(2)] = inst_32951);

(statearr_32963_32983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (3))){
var inst_32953 = (state_32956[(2)]);
var inst_32954 = cljs.core.async.close_BANG_.call(null,out);
var state_32956__$1 = (function (){var statearr_32964 = state_32956;
(statearr_32964[(9)] = inst_32953);

return statearr_32964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32956__$1,inst_32954);
} else {
if((state_val_32957 === (2))){
var inst_32933 = (state_32956[(8)]);
var inst_32935 = (inst_32933 < n);
var state_32956__$1 = state_32956;
if(cljs.core.truth_(inst_32935)){
var statearr_32965_32984 = state_32956__$1;
(statearr_32965_32984[(1)] = (4));

} else {
var statearr_32966_32985 = state_32956__$1;
(statearr_32966_32985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (11))){
var inst_32933 = (state_32956[(8)]);
var inst_32943 = (state_32956[(2)]);
var inst_32944 = (inst_32933 + (1));
var inst_32933__$1 = inst_32944;
var state_32956__$1 = (function (){var statearr_32967 = state_32956;
(statearr_32967[(10)] = inst_32943);

(statearr_32967[(8)] = inst_32933__$1);

return statearr_32967;
})();
var statearr_32968_32986 = state_32956__$1;
(statearr_32968_32986[(2)] = null);

(statearr_32968_32986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (9))){
var state_32956__$1 = state_32956;
var statearr_32969_32987 = state_32956__$1;
(statearr_32969_32987[(2)] = null);

(statearr_32969_32987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (5))){
var state_32956__$1 = state_32956;
var statearr_32970_32988 = state_32956__$1;
(statearr_32970_32988[(2)] = null);

(statearr_32970_32988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (10))){
var inst_32948 = (state_32956[(2)]);
var state_32956__$1 = state_32956;
var statearr_32971_32989 = state_32956__$1;
(statearr_32971_32989[(2)] = inst_32948);

(statearr_32971_32989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32957 === (8))){
var inst_32938 = (state_32956[(7)]);
var state_32956__$1 = state_32956;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32956__$1,(11),out,inst_32938);
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
});})(c__7568__auto___32979,out))
;
return ((function (switch__7553__auto__,c__7568__auto___32979,out){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_32975 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32975[(0)] = state_machine__7554__auto__);

(statearr_32975[(1)] = (1));

return statearr_32975;
});
var state_machine__7554__auto____1 = (function (state_32956){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_32956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e32976){if((e32976 instanceof Object)){
var ex__7557__auto__ = e32976;
var statearr_32977_32990 = state_32956;
(statearr_32977_32990[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32991 = state_32956;
state_32956 = G__32991;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_32956){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_32956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___32979,out))
})();
var state__7570__auto__ = (function (){var statearr_32978 = f__7569__auto__.call(null);
(statearr_32978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___32979);

return statearr_32978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___32979,out))
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
if(typeof cljs.core.async.t32999 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32999 = (function (ch,f,map_LT_,meta33000){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33000 = meta33000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32999.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t32999.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t32999.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t32999.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t33002 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33002 = (function (fn1,_,meta33000,map_LT_,f,ch,meta33003){
this.fn1 = fn1;
this._ = _;
this.meta33000 = meta33000;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33003 = meta33003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33002.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t33002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32992_SHARP_){
return f1.call(null,(((p1__32992_SHARP_ == null))?null:self__.f.call(null,p1__32992_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33002.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33004){
var self__ = this;
var _33004__$1 = this;
return self__.meta33003;
});})(___$1))
;

cljs.core.async.t33002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33004,meta33003__$1){
var self__ = this;
var _33004__$1 = this;
return (new cljs.core.async.t33002(self__.fn1,self__._,self__.meta33000,self__.map_LT_,self__.f,self__.ch,meta33003__$1));
});})(___$1))
;

cljs.core.async.t33002.cljs$lang$type = true;

cljs.core.async.t33002.cljs$lang$ctorStr = "cljs.core.async/t33002";

cljs.core.async.t33002.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t33002");
});})(___$1))
;

cljs.core.async.__GT_t33002 = ((function (___$1){
return (function __GT_t33002(fn1__$1,___$2,meta33000__$1,map_LT___$1,f__$1,ch__$1,meta33003){
return (new cljs.core.async.t33002(fn1__$1,___$2,meta33000__$1,map_LT___$1,f__$1,ch__$1,meta33003));
});})(___$1))
;

}

return (new cljs.core.async.t33002(fn1,___$1,self__.meta33000,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t32999.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t32999.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t32999.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t32999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33001){
var self__ = this;
var _33001__$1 = this;
return self__.meta33000;
});

cljs.core.async.t32999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33001,meta33000__$1){
var self__ = this;
var _33001__$1 = this;
return (new cljs.core.async.t32999(self__.ch,self__.f,self__.map_LT_,meta33000__$1));
});

cljs.core.async.t32999.cljs$lang$type = true;

cljs.core.async.t32999.cljs$lang$ctorStr = "cljs.core.async/t32999";

cljs.core.async.t32999.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t32999");
});

cljs.core.async.__GT_t32999 = (function __GT_t32999(ch__$1,f__$1,map_LT___$1,meta33000){
return (new cljs.core.async.t32999(ch__$1,f__$1,map_LT___$1,meta33000));
});

}

return (new cljs.core.async.t32999(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t33008 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33008 = (function (ch,f,map_GT_,meta33009){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33009 = meta33009;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33008.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33008.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t33008.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33008.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33008.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33008.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33010){
var self__ = this;
var _33010__$1 = this;
return self__.meta33009;
});

cljs.core.async.t33008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33010,meta33009__$1){
var self__ = this;
var _33010__$1 = this;
return (new cljs.core.async.t33008(self__.ch,self__.f,self__.map_GT_,meta33009__$1));
});

cljs.core.async.t33008.cljs$lang$type = true;

cljs.core.async.t33008.cljs$lang$ctorStr = "cljs.core.async/t33008";

cljs.core.async.t33008.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t33008");
});

cljs.core.async.__GT_t33008 = (function __GT_t33008(ch__$1,f__$1,map_GT___$1,meta33009){
return (new cljs.core.async.t33008(ch__$1,f__$1,map_GT___$1,meta33009));
});

}

return (new cljs.core.async.t33008(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t33014 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33014 = (function (ch,p,filter_GT_,meta33015){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33015 = meta33015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33014.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t33014.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33014.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33014.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33016){
var self__ = this;
var _33016__$1 = this;
return self__.meta33015;
});

cljs.core.async.t33014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33016,meta33015__$1){
var self__ = this;
var _33016__$1 = this;
return (new cljs.core.async.t33014(self__.ch,self__.p,self__.filter_GT_,meta33015__$1));
});

cljs.core.async.t33014.cljs$lang$type = true;

cljs.core.async.t33014.cljs$lang$ctorStr = "cljs.core.async/t33014";

cljs.core.async.t33014.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cljs.core.async/t33014");
});

cljs.core.async.__GT_t33014 = (function __GT_t33014(ch__$1,p__$1,filter_GT___$1,meta33015){
return (new cljs.core.async.t33014(ch__$1,p__$1,filter_GT___$1,meta33015));
});

}

return (new cljs.core.async.t33014(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7568__auto___33099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___33099,out){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___33099,out){
return (function (state_33078){
var state_val_33079 = (state_33078[(1)]);
if((state_val_33079 === (7))){
var inst_33074 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33080_33100 = state_33078__$1;
(statearr_33080_33100[(2)] = inst_33074);

(statearr_33080_33100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (1))){
var state_33078__$1 = state_33078;
var statearr_33081_33101 = state_33078__$1;
(statearr_33081_33101[(2)] = null);

(statearr_33081_33101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (4))){
var inst_33060 = (state_33078[(7)]);
var inst_33060__$1 = (state_33078[(2)]);
var inst_33061 = (inst_33060__$1 == null);
var state_33078__$1 = (function (){var statearr_33082 = state_33078;
(statearr_33082[(7)] = inst_33060__$1);

return statearr_33082;
})();
if(cljs.core.truth_(inst_33061)){
var statearr_33083_33102 = state_33078__$1;
(statearr_33083_33102[(1)] = (5));

} else {
var statearr_33084_33103 = state_33078__$1;
(statearr_33084_33103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (6))){
var inst_33060 = (state_33078[(7)]);
var inst_33065 = p.call(null,inst_33060);
var state_33078__$1 = state_33078;
if(cljs.core.truth_(inst_33065)){
var statearr_33085_33104 = state_33078__$1;
(statearr_33085_33104[(1)] = (8));

} else {
var statearr_33086_33105 = state_33078__$1;
(statearr_33086_33105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (3))){
var inst_33076 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33078__$1,inst_33076);
} else {
if((state_val_33079 === (2))){
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33078__$1,(4),ch);
} else {
if((state_val_33079 === (11))){
var inst_33068 = (state_33078[(2)]);
var state_33078__$1 = state_33078;
var statearr_33087_33106 = state_33078__$1;
(statearr_33087_33106[(2)] = inst_33068);

(statearr_33087_33106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (9))){
var state_33078__$1 = state_33078;
var statearr_33088_33107 = state_33078__$1;
(statearr_33088_33107[(2)] = null);

(statearr_33088_33107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (5))){
var inst_33063 = cljs.core.async.close_BANG_.call(null,out);
var state_33078__$1 = state_33078;
var statearr_33089_33108 = state_33078__$1;
(statearr_33089_33108[(2)] = inst_33063);

(statearr_33089_33108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (10))){
var inst_33071 = (state_33078[(2)]);
var state_33078__$1 = (function (){var statearr_33090 = state_33078;
(statearr_33090[(8)] = inst_33071);

return statearr_33090;
})();
var statearr_33091_33109 = state_33078__$1;
(statearr_33091_33109[(2)] = null);

(statearr_33091_33109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33079 === (8))){
var inst_33060 = (state_33078[(7)]);
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33078__$1,(11),out,inst_33060);
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
});})(c__7568__auto___33099,out))
;
return ((function (switch__7553__auto__,c__7568__auto___33099,out){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_33095 = [null,null,null,null,null,null,null,null,null];
(statearr_33095[(0)] = state_machine__7554__auto__);

(statearr_33095[(1)] = (1));

return statearr_33095;
});
var state_machine__7554__auto____1 = (function (state_33078){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_33078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e33096){if((e33096 instanceof Object)){
var ex__7557__auto__ = e33096;
var statearr_33097_33110 = state_33078;
(statearr_33097_33110[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33111 = state_33078;
state_33078 = G__33111;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_33078){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_33078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___33099,out))
})();
var state__7570__auto__ = (function (){var statearr_33098 = f__7569__auto__.call(null);
(statearr_33098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___33099);

return statearr_33098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___33099,out))
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
return (function (state_33277){
var state_val_33278 = (state_33277[(1)]);
if((state_val_33278 === (7))){
var inst_33273 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33279_33320 = state_33277__$1;
(statearr_33279_33320[(2)] = inst_33273);

(statearr_33279_33320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (20))){
var inst_33243 = (state_33277[(7)]);
var inst_33254 = (state_33277[(2)]);
var inst_33255 = cljs.core.next.call(null,inst_33243);
var inst_33229 = inst_33255;
var inst_33230 = null;
var inst_33231 = (0);
var inst_33232 = (0);
var state_33277__$1 = (function (){var statearr_33280 = state_33277;
(statearr_33280[(8)] = inst_33229);

(statearr_33280[(9)] = inst_33230);

(statearr_33280[(10)] = inst_33231);

(statearr_33280[(11)] = inst_33254);

(statearr_33280[(12)] = inst_33232);

return statearr_33280;
})();
var statearr_33281_33321 = state_33277__$1;
(statearr_33281_33321[(2)] = null);

(statearr_33281_33321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (1))){
var state_33277__$1 = state_33277;
var statearr_33282_33322 = state_33277__$1;
(statearr_33282_33322[(2)] = null);

(statearr_33282_33322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (4))){
var inst_33218 = (state_33277[(13)]);
var inst_33218__$1 = (state_33277[(2)]);
var inst_33219 = (inst_33218__$1 == null);
var state_33277__$1 = (function (){var statearr_33283 = state_33277;
(statearr_33283[(13)] = inst_33218__$1);

return statearr_33283;
})();
if(cljs.core.truth_(inst_33219)){
var statearr_33284_33323 = state_33277__$1;
(statearr_33284_33323[(1)] = (5));

} else {
var statearr_33285_33324 = state_33277__$1;
(statearr_33285_33324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (15))){
var state_33277__$1 = state_33277;
var statearr_33289_33325 = state_33277__$1;
(statearr_33289_33325[(2)] = null);

(statearr_33289_33325[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (21))){
var state_33277__$1 = state_33277;
var statearr_33290_33326 = state_33277__$1;
(statearr_33290_33326[(2)] = null);

(statearr_33290_33326[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (13))){
var inst_33229 = (state_33277[(8)]);
var inst_33230 = (state_33277[(9)]);
var inst_33231 = (state_33277[(10)]);
var inst_33232 = (state_33277[(12)]);
var inst_33239 = (state_33277[(2)]);
var inst_33240 = (inst_33232 + (1));
var tmp33286 = inst_33229;
var tmp33287 = inst_33230;
var tmp33288 = inst_33231;
var inst_33229__$1 = tmp33286;
var inst_33230__$1 = tmp33287;
var inst_33231__$1 = tmp33288;
var inst_33232__$1 = inst_33240;
var state_33277__$1 = (function (){var statearr_33291 = state_33277;
(statearr_33291[(8)] = inst_33229__$1);

(statearr_33291[(9)] = inst_33230__$1);

(statearr_33291[(10)] = inst_33231__$1);

(statearr_33291[(14)] = inst_33239);

(statearr_33291[(12)] = inst_33232__$1);

return statearr_33291;
})();
var statearr_33292_33327 = state_33277__$1;
(statearr_33292_33327[(2)] = null);

(statearr_33292_33327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (22))){
var state_33277__$1 = state_33277;
var statearr_33293_33328 = state_33277__$1;
(statearr_33293_33328[(2)] = null);

(statearr_33293_33328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (6))){
var inst_33218 = (state_33277[(13)]);
var inst_33227 = f.call(null,inst_33218);
var inst_33228 = cljs.core.seq.call(null,inst_33227);
var inst_33229 = inst_33228;
var inst_33230 = null;
var inst_33231 = (0);
var inst_33232 = (0);
var state_33277__$1 = (function (){var statearr_33294 = state_33277;
(statearr_33294[(8)] = inst_33229);

(statearr_33294[(9)] = inst_33230);

(statearr_33294[(10)] = inst_33231);

(statearr_33294[(12)] = inst_33232);

return statearr_33294;
})();
var statearr_33295_33329 = state_33277__$1;
(statearr_33295_33329[(2)] = null);

(statearr_33295_33329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (17))){
var inst_33243 = (state_33277[(7)]);
var inst_33247 = cljs.core.chunk_first.call(null,inst_33243);
var inst_33248 = cljs.core.chunk_rest.call(null,inst_33243);
var inst_33249 = cljs.core.count.call(null,inst_33247);
var inst_33229 = inst_33248;
var inst_33230 = inst_33247;
var inst_33231 = inst_33249;
var inst_33232 = (0);
var state_33277__$1 = (function (){var statearr_33296 = state_33277;
(statearr_33296[(8)] = inst_33229);

(statearr_33296[(9)] = inst_33230);

(statearr_33296[(10)] = inst_33231);

(statearr_33296[(12)] = inst_33232);

return statearr_33296;
})();
var statearr_33297_33330 = state_33277__$1;
(statearr_33297_33330[(2)] = null);

(statearr_33297_33330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (3))){
var inst_33275 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33277__$1,inst_33275);
} else {
if((state_val_33278 === (12))){
var inst_33263 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33298_33331 = state_33277__$1;
(statearr_33298_33331[(2)] = inst_33263);

(statearr_33298_33331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (2))){
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33277__$1,(4),in$);
} else {
if((state_val_33278 === (23))){
var inst_33271 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33299_33332 = state_33277__$1;
(statearr_33299_33332[(2)] = inst_33271);

(statearr_33299_33332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (19))){
var inst_33258 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33300_33333 = state_33277__$1;
(statearr_33300_33333[(2)] = inst_33258);

(statearr_33300_33333[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (11))){
var inst_33229 = (state_33277[(8)]);
var inst_33243 = (state_33277[(7)]);
var inst_33243__$1 = cljs.core.seq.call(null,inst_33229);
var state_33277__$1 = (function (){var statearr_33301 = state_33277;
(statearr_33301[(7)] = inst_33243__$1);

return statearr_33301;
})();
if(inst_33243__$1){
var statearr_33302_33334 = state_33277__$1;
(statearr_33302_33334[(1)] = (14));

} else {
var statearr_33303_33335 = state_33277__$1;
(statearr_33303_33335[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (9))){
var inst_33265 = (state_33277[(2)]);
var inst_33266 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33277__$1 = (function (){var statearr_33304 = state_33277;
(statearr_33304[(15)] = inst_33265);

return statearr_33304;
})();
if(cljs.core.truth_(inst_33266)){
var statearr_33305_33336 = state_33277__$1;
(statearr_33305_33336[(1)] = (21));

} else {
var statearr_33306_33337 = state_33277__$1;
(statearr_33306_33337[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (5))){
var inst_33221 = cljs.core.async.close_BANG_.call(null,out);
var state_33277__$1 = state_33277;
var statearr_33307_33338 = state_33277__$1;
(statearr_33307_33338[(2)] = inst_33221);

(statearr_33307_33338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (14))){
var inst_33243 = (state_33277[(7)]);
var inst_33245 = cljs.core.chunked_seq_QMARK_.call(null,inst_33243);
var state_33277__$1 = state_33277;
if(inst_33245){
var statearr_33308_33339 = state_33277__$1;
(statearr_33308_33339[(1)] = (17));

} else {
var statearr_33309_33340 = state_33277__$1;
(statearr_33309_33340[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (16))){
var inst_33261 = (state_33277[(2)]);
var state_33277__$1 = state_33277;
var statearr_33310_33341 = state_33277__$1;
(statearr_33310_33341[(2)] = inst_33261);

(statearr_33310_33341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33278 === (10))){
var inst_33230 = (state_33277[(9)]);
var inst_33232 = (state_33277[(12)]);
var inst_33237 = cljs.core._nth.call(null,inst_33230,inst_33232);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33277__$1,(13),out,inst_33237);
} else {
if((state_val_33278 === (18))){
var inst_33243 = (state_33277[(7)]);
var inst_33252 = cljs.core.first.call(null,inst_33243);
var state_33277__$1 = state_33277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33277__$1,(20),out,inst_33252);
} else {
if((state_val_33278 === (8))){
var inst_33231 = (state_33277[(10)]);
var inst_33232 = (state_33277[(12)]);
var inst_33234 = (inst_33232 < inst_33231);
var inst_33235 = inst_33234;
var state_33277__$1 = state_33277;
if(cljs.core.truth_(inst_33235)){
var statearr_33311_33342 = state_33277__$1;
(statearr_33311_33342[(1)] = (10));

} else {
var statearr_33312_33343 = state_33277__$1;
(statearr_33312_33343[(1)] = (11));

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
var statearr_33316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33316[(0)] = state_machine__7554__auto__);

(statearr_33316[(1)] = (1));

return statearr_33316;
});
var state_machine__7554__auto____1 = (function (state_33277){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_33277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e33317){if((e33317 instanceof Object)){
var ex__7557__auto__ = e33317;
var statearr_33318_33344 = state_33277;
(statearr_33318_33344[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33345 = state_33277;
state_33277 = G__33345;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_33277){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_33277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto__))
})();
var state__7570__auto__ = (function (){var statearr_33319 = f__7569__auto__.call(null);
(statearr_33319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto__);

return statearr_33319;
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
var c__7568__auto___33442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___33442,out){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___33442,out){
return (function (state_33417){
var state_val_33418 = (state_33417[(1)]);
if((state_val_33418 === (7))){
var inst_33412 = (state_33417[(2)]);
var state_33417__$1 = state_33417;
var statearr_33419_33443 = state_33417__$1;
(statearr_33419_33443[(2)] = inst_33412);

(statearr_33419_33443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33418 === (1))){
var inst_33394 = null;
var state_33417__$1 = (function (){var statearr_33420 = state_33417;
(statearr_33420[(7)] = inst_33394);

return statearr_33420;
})();
var statearr_33421_33444 = state_33417__$1;
(statearr_33421_33444[(2)] = null);

(statearr_33421_33444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33418 === (4))){
var inst_33397 = (state_33417[(8)]);
var inst_33397__$1 = (state_33417[(2)]);
var inst_33398 = (inst_33397__$1 == null);
var inst_33399 = cljs.core.not.call(null,inst_33398);
var state_33417__$1 = (function (){var statearr_33422 = state_33417;
(statearr_33422[(8)] = inst_33397__$1);

return statearr_33422;
})();
if(inst_33399){
var statearr_33423_33445 = state_33417__$1;
(statearr_33423_33445[(1)] = (5));

} else {
var statearr_33424_33446 = state_33417__$1;
(statearr_33424_33446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33418 === (6))){
var state_33417__$1 = state_33417;
var statearr_33425_33447 = state_33417__$1;
(statearr_33425_33447[(2)] = null);

(statearr_33425_33447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33418 === (3))){
var inst_33414 = (state_33417[(2)]);
var inst_33415 = cljs.core.async.close_BANG_.call(null,out);
var state_33417__$1 = (function (){var statearr_33426 = state_33417;
(statearr_33426[(9)] = inst_33414);

return statearr_33426;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33417__$1,inst_33415);
} else {
if((state_val_33418 === (2))){
var state_33417__$1 = state_33417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33417__$1,(4),ch);
} else {
if((state_val_33418 === (11))){
var inst_33397 = (state_33417[(8)]);
var inst_33406 = (state_33417[(2)]);
var inst_33394 = inst_33397;
var state_33417__$1 = (function (){var statearr_33427 = state_33417;
(statearr_33427[(10)] = inst_33406);

(statearr_33427[(7)] = inst_33394);

return statearr_33427;
})();
var statearr_33428_33448 = state_33417__$1;
(statearr_33428_33448[(2)] = null);

(statearr_33428_33448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33418 === (9))){
var inst_33397 = (state_33417[(8)]);
var state_33417__$1 = state_33417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33417__$1,(11),out,inst_33397);
} else {
if((state_val_33418 === (5))){
var inst_33397 = (state_33417[(8)]);
var inst_33394 = (state_33417[(7)]);
var inst_33401 = cljs.core._EQ_.call(null,inst_33397,inst_33394);
var state_33417__$1 = state_33417;
if(inst_33401){
var statearr_33430_33449 = state_33417__$1;
(statearr_33430_33449[(1)] = (8));

} else {
var statearr_33431_33450 = state_33417__$1;
(statearr_33431_33450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33418 === (10))){
var inst_33409 = (state_33417[(2)]);
var state_33417__$1 = state_33417;
var statearr_33432_33451 = state_33417__$1;
(statearr_33432_33451[(2)] = inst_33409);

(statearr_33432_33451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33418 === (8))){
var inst_33394 = (state_33417[(7)]);
var tmp33429 = inst_33394;
var inst_33394__$1 = tmp33429;
var state_33417__$1 = (function (){var statearr_33433 = state_33417;
(statearr_33433[(7)] = inst_33394__$1);

return statearr_33433;
})();
var statearr_33434_33452 = state_33417__$1;
(statearr_33434_33452[(2)] = null);

(statearr_33434_33452[(1)] = (2));


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
});})(c__7568__auto___33442,out))
;
return ((function (switch__7553__auto__,c__7568__auto___33442,out){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_33438 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33438[(0)] = state_machine__7554__auto__);

(statearr_33438[(1)] = (1));

return statearr_33438;
});
var state_machine__7554__auto____1 = (function (state_33417){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_33417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e33439){if((e33439 instanceof Object)){
var ex__7557__auto__ = e33439;
var statearr_33440_33453 = state_33417;
(statearr_33440_33453[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33454 = state_33417;
state_33417 = G__33454;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_33417){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_33417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___33442,out))
})();
var state__7570__auto__ = (function (){var statearr_33441 = f__7569__auto__.call(null);
(statearr_33441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___33442);

return statearr_33441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___33442,out))
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
var c__7568__auto___33589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___33589,out){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___33589,out){
return (function (state_33559){
var state_val_33560 = (state_33559[(1)]);
if((state_val_33560 === (7))){
var inst_33555 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
var statearr_33561_33590 = state_33559__$1;
(statearr_33561_33590[(2)] = inst_33555);

(statearr_33561_33590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (1))){
var inst_33522 = (new Array(n));
var inst_33523 = inst_33522;
var inst_33524 = (0);
var state_33559__$1 = (function (){var statearr_33562 = state_33559;
(statearr_33562[(7)] = inst_33524);

(statearr_33562[(8)] = inst_33523);

return statearr_33562;
})();
var statearr_33563_33591 = state_33559__$1;
(statearr_33563_33591[(2)] = null);

(statearr_33563_33591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (4))){
var inst_33527 = (state_33559[(9)]);
var inst_33527__$1 = (state_33559[(2)]);
var inst_33528 = (inst_33527__$1 == null);
var inst_33529 = cljs.core.not.call(null,inst_33528);
var state_33559__$1 = (function (){var statearr_33564 = state_33559;
(statearr_33564[(9)] = inst_33527__$1);

return statearr_33564;
})();
if(inst_33529){
var statearr_33565_33592 = state_33559__$1;
(statearr_33565_33592[(1)] = (5));

} else {
var statearr_33566_33593 = state_33559__$1;
(statearr_33566_33593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (15))){
var inst_33549 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
var statearr_33567_33594 = state_33559__$1;
(statearr_33567_33594[(2)] = inst_33549);

(statearr_33567_33594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (13))){
var state_33559__$1 = state_33559;
var statearr_33568_33595 = state_33559__$1;
(statearr_33568_33595[(2)] = null);

(statearr_33568_33595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (6))){
var inst_33524 = (state_33559[(7)]);
var inst_33545 = (inst_33524 > (0));
var state_33559__$1 = state_33559;
if(cljs.core.truth_(inst_33545)){
var statearr_33569_33596 = state_33559__$1;
(statearr_33569_33596[(1)] = (12));

} else {
var statearr_33570_33597 = state_33559__$1;
(statearr_33570_33597[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (3))){
var inst_33557 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33559__$1,inst_33557);
} else {
if((state_val_33560 === (12))){
var inst_33523 = (state_33559[(8)]);
var inst_33547 = cljs.core.vec.call(null,inst_33523);
var state_33559__$1 = state_33559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33559__$1,(15),out,inst_33547);
} else {
if((state_val_33560 === (2))){
var state_33559__$1 = state_33559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33559__$1,(4),ch);
} else {
if((state_val_33560 === (11))){
var inst_33539 = (state_33559[(2)]);
var inst_33540 = (new Array(n));
var inst_33523 = inst_33540;
var inst_33524 = (0);
var state_33559__$1 = (function (){var statearr_33571 = state_33559;
(statearr_33571[(7)] = inst_33524);

(statearr_33571[(10)] = inst_33539);

(statearr_33571[(8)] = inst_33523);

return statearr_33571;
})();
var statearr_33572_33598 = state_33559__$1;
(statearr_33572_33598[(2)] = null);

(statearr_33572_33598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (9))){
var inst_33523 = (state_33559[(8)]);
var inst_33537 = cljs.core.vec.call(null,inst_33523);
var state_33559__$1 = state_33559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33559__$1,(11),out,inst_33537);
} else {
if((state_val_33560 === (5))){
var inst_33524 = (state_33559[(7)]);
var inst_33523 = (state_33559[(8)]);
var inst_33527 = (state_33559[(9)]);
var inst_33532 = (state_33559[(11)]);
var inst_33531 = (inst_33523[inst_33524] = inst_33527);
var inst_33532__$1 = (inst_33524 + (1));
var inst_33533 = (inst_33532__$1 < n);
var state_33559__$1 = (function (){var statearr_33573 = state_33559;
(statearr_33573[(12)] = inst_33531);

(statearr_33573[(11)] = inst_33532__$1);

return statearr_33573;
})();
if(cljs.core.truth_(inst_33533)){
var statearr_33574_33599 = state_33559__$1;
(statearr_33574_33599[(1)] = (8));

} else {
var statearr_33575_33600 = state_33559__$1;
(statearr_33575_33600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (14))){
var inst_33552 = (state_33559[(2)]);
var inst_33553 = cljs.core.async.close_BANG_.call(null,out);
var state_33559__$1 = (function (){var statearr_33577 = state_33559;
(statearr_33577[(13)] = inst_33552);

return statearr_33577;
})();
var statearr_33578_33601 = state_33559__$1;
(statearr_33578_33601[(2)] = inst_33553);

(statearr_33578_33601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (10))){
var inst_33543 = (state_33559[(2)]);
var state_33559__$1 = state_33559;
var statearr_33579_33602 = state_33559__$1;
(statearr_33579_33602[(2)] = inst_33543);

(statearr_33579_33602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33560 === (8))){
var inst_33523 = (state_33559[(8)]);
var inst_33532 = (state_33559[(11)]);
var tmp33576 = inst_33523;
var inst_33523__$1 = tmp33576;
var inst_33524 = inst_33532;
var state_33559__$1 = (function (){var statearr_33580 = state_33559;
(statearr_33580[(7)] = inst_33524);

(statearr_33580[(8)] = inst_33523__$1);

return statearr_33580;
})();
var statearr_33581_33603 = state_33559__$1;
(statearr_33581_33603[(2)] = null);

(statearr_33581_33603[(1)] = (2));


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
});})(c__7568__auto___33589,out))
;
return ((function (switch__7553__auto__,c__7568__auto___33589,out){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_33585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33585[(0)] = state_machine__7554__auto__);

(statearr_33585[(1)] = (1));

return statearr_33585;
});
var state_machine__7554__auto____1 = (function (state_33559){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_33559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e33586){if((e33586 instanceof Object)){
var ex__7557__auto__ = e33586;
var statearr_33587_33604 = state_33559;
(statearr_33587_33604[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33605 = state_33559;
state_33559 = G__33605;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_33559){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_33559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___33589,out))
})();
var state__7570__auto__ = (function (){var statearr_33588 = f__7569__auto__.call(null);
(statearr_33588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___33589);

return statearr_33588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___33589,out))
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
var c__7568__auto___33748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7568__auto___33748,out){
return (function (){
var f__7569__auto__ = (function (){var switch__7553__auto__ = ((function (c__7568__auto___33748,out){
return (function (state_33718){
var state_val_33719 = (state_33718[(1)]);
if((state_val_33719 === (7))){
var inst_33714 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33720_33749 = state_33718__$1;
(statearr_33720_33749[(2)] = inst_33714);

(statearr_33720_33749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (1))){
var inst_33677 = [];
var inst_33678 = inst_33677;
var inst_33679 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33718__$1 = (function (){var statearr_33721 = state_33718;
(statearr_33721[(7)] = inst_33679);

(statearr_33721[(8)] = inst_33678);

return statearr_33721;
})();
var statearr_33722_33750 = state_33718__$1;
(statearr_33722_33750[(2)] = null);

(statearr_33722_33750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (4))){
var inst_33682 = (state_33718[(9)]);
var inst_33682__$1 = (state_33718[(2)]);
var inst_33683 = (inst_33682__$1 == null);
var inst_33684 = cljs.core.not.call(null,inst_33683);
var state_33718__$1 = (function (){var statearr_33723 = state_33718;
(statearr_33723[(9)] = inst_33682__$1);

return statearr_33723;
})();
if(inst_33684){
var statearr_33724_33751 = state_33718__$1;
(statearr_33724_33751[(1)] = (5));

} else {
var statearr_33725_33752 = state_33718__$1;
(statearr_33725_33752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (15))){
var inst_33708 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33726_33753 = state_33718__$1;
(statearr_33726_33753[(2)] = inst_33708);

(statearr_33726_33753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (13))){
var state_33718__$1 = state_33718;
var statearr_33727_33754 = state_33718__$1;
(statearr_33727_33754[(2)] = null);

(statearr_33727_33754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (6))){
var inst_33678 = (state_33718[(8)]);
var inst_33703 = inst_33678.length;
var inst_33704 = (inst_33703 > (0));
var state_33718__$1 = state_33718;
if(cljs.core.truth_(inst_33704)){
var statearr_33728_33755 = state_33718__$1;
(statearr_33728_33755[(1)] = (12));

} else {
var statearr_33729_33756 = state_33718__$1;
(statearr_33729_33756[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (3))){
var inst_33716 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33718__$1,inst_33716);
} else {
if((state_val_33719 === (12))){
var inst_33678 = (state_33718[(8)]);
var inst_33706 = cljs.core.vec.call(null,inst_33678);
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33718__$1,(15),out,inst_33706);
} else {
if((state_val_33719 === (2))){
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33718__$1,(4),ch);
} else {
if((state_val_33719 === (11))){
var inst_33682 = (state_33718[(9)]);
var inst_33686 = (state_33718[(10)]);
var inst_33696 = (state_33718[(2)]);
var inst_33697 = [];
var inst_33698 = inst_33697.push(inst_33682);
var inst_33678 = inst_33697;
var inst_33679 = inst_33686;
var state_33718__$1 = (function (){var statearr_33730 = state_33718;
(statearr_33730[(7)] = inst_33679);

(statearr_33730[(11)] = inst_33696);

(statearr_33730[(12)] = inst_33698);

(statearr_33730[(8)] = inst_33678);

return statearr_33730;
})();
var statearr_33731_33757 = state_33718__$1;
(statearr_33731_33757[(2)] = null);

(statearr_33731_33757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (9))){
var inst_33678 = (state_33718[(8)]);
var inst_33694 = cljs.core.vec.call(null,inst_33678);
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33718__$1,(11),out,inst_33694);
} else {
if((state_val_33719 === (5))){
var inst_33679 = (state_33718[(7)]);
var inst_33682 = (state_33718[(9)]);
var inst_33686 = (state_33718[(10)]);
var inst_33686__$1 = f.call(null,inst_33682);
var inst_33687 = cljs.core._EQ_.call(null,inst_33686__$1,inst_33679);
var inst_33688 = cljs.core.keyword_identical_QMARK_.call(null,inst_33679,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33689 = (inst_33687) || (inst_33688);
var state_33718__$1 = (function (){var statearr_33732 = state_33718;
(statearr_33732[(10)] = inst_33686__$1);

return statearr_33732;
})();
if(cljs.core.truth_(inst_33689)){
var statearr_33733_33758 = state_33718__$1;
(statearr_33733_33758[(1)] = (8));

} else {
var statearr_33734_33759 = state_33718__$1;
(statearr_33734_33759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (14))){
var inst_33711 = (state_33718[(2)]);
var inst_33712 = cljs.core.async.close_BANG_.call(null,out);
var state_33718__$1 = (function (){var statearr_33736 = state_33718;
(statearr_33736[(13)] = inst_33711);

return statearr_33736;
})();
var statearr_33737_33760 = state_33718__$1;
(statearr_33737_33760[(2)] = inst_33712);

(statearr_33737_33760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (10))){
var inst_33701 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33738_33761 = state_33718__$1;
(statearr_33738_33761[(2)] = inst_33701);

(statearr_33738_33761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (8))){
var inst_33682 = (state_33718[(9)]);
var inst_33678 = (state_33718[(8)]);
var inst_33686 = (state_33718[(10)]);
var inst_33691 = inst_33678.push(inst_33682);
var tmp33735 = inst_33678;
var inst_33678__$1 = tmp33735;
var inst_33679 = inst_33686;
var state_33718__$1 = (function (){var statearr_33739 = state_33718;
(statearr_33739[(7)] = inst_33679);

(statearr_33739[(14)] = inst_33691);

(statearr_33739[(8)] = inst_33678__$1);

return statearr_33739;
})();
var statearr_33740_33762 = state_33718__$1;
(statearr_33740_33762[(2)] = null);

(statearr_33740_33762[(1)] = (2));


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
});})(c__7568__auto___33748,out))
;
return ((function (switch__7553__auto__,c__7568__auto___33748,out){
return (function() {
var state_machine__7554__auto__ = null;
var state_machine__7554__auto____0 = (function (){
var statearr_33744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33744[(0)] = state_machine__7554__auto__);

(statearr_33744[(1)] = (1));

return statearr_33744;
});
var state_machine__7554__auto____1 = (function (state_33718){
while(true){
var ret_value__7555__auto__ = (function (){try{while(true){
var result__7556__auto__ = switch__7553__auto__.call(null,state_33718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7556__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7556__auto__;
}
break;
}
}catch (e33745){if((e33745 instanceof Object)){
var ex__7557__auto__ = e33745;
var statearr_33746_33763 = state_33718;
(statearr_33746_33763[(5)] = ex__7557__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33764 = state_33718;
state_33718 = G__33764;
continue;
} else {
return ret_value__7555__auto__;
}
break;
}
});
state_machine__7554__auto__ = function(state_33718){
switch(arguments.length){
case 0:
return state_machine__7554__auto____0.call(this);
case 1:
return state_machine__7554__auto____1.call(this,state_33718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7554__auto____0;
state_machine__7554__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7554__auto____1;
return state_machine__7554__auto__;
})()
;})(switch__7553__auto__,c__7568__auto___33748,out))
})();
var state__7570__auto__ = (function (){var statearr_33747 = f__7569__auto__.call(null);
(statearr_33747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7568__auto___33748);

return statearr_33747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7570__auto__);
});})(c__7568__auto___33748,out))
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
