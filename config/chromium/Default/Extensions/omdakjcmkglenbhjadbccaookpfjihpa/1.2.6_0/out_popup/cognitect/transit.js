// Compiled by ClojureScript 0.0-2913 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__10712_10716 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__10713_10717 = null;
var count__10714_10718 = (0);
var i__10715_10719 = (0);
while(true){
if((i__10715_10719 < count__10714_10718)){
var k_10720 = cljs.core._nth.call(null,chunk__10713_10717,i__10715_10719);
var v_10721 = (b[k_10720]);
(a[k_10720] = v_10721);

var G__10722 = seq__10712_10716;
var G__10723 = chunk__10713_10717;
var G__10724 = count__10714_10718;
var G__10725 = (i__10715_10719 + (1));
seq__10712_10716 = G__10722;
chunk__10713_10717 = G__10723;
count__10714_10718 = G__10724;
i__10715_10719 = G__10725;
continue;
} else {
var temp__4126__auto___10726 = cljs.core.seq.call(null,seq__10712_10716);
if(temp__4126__auto___10726){
var seq__10712_10727__$1 = temp__4126__auto___10726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10712_10727__$1)){
var c__4768__auto___10728 = cljs.core.chunk_first.call(null,seq__10712_10727__$1);
var G__10729 = cljs.core.chunk_rest.call(null,seq__10712_10727__$1);
var G__10730 = c__4768__auto___10728;
var G__10731 = cljs.core.count.call(null,c__4768__auto___10728);
var G__10732 = (0);
seq__10712_10716 = G__10729;
chunk__10713_10717 = G__10730;
count__10714_10718 = G__10731;
i__10715_10719 = G__10732;
continue;
} else {
var k_10733 = cljs.core.first.call(null,seq__10712_10727__$1);
var v_10734 = (b[k_10733]);
(a[k_10733] = v_10734);

var G__10735 = cljs.core.next.call(null,seq__10712_10727__$1);
var G__10736 = null;
var G__10737 = (0);
var G__10738 = (0);
seq__10712_10716 = G__10735;
chunk__10713_10717 = G__10736;
count__10714_10718 = G__10737;
i__10715_10719 = G__10738;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__10739 = (i + (2));
var G__10740 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__10739;
ret = G__10740;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__10741_10745 = cljs.core.seq.call(null,v);
var chunk__10742_10746 = null;
var count__10743_10747 = (0);
var i__10744_10748 = (0);
while(true){
if((i__10744_10748 < count__10743_10747)){
var x_10749 = cljs.core._nth.call(null,chunk__10742_10746,i__10744_10748);
ret.push(x_10749);

var G__10750 = seq__10741_10745;
var G__10751 = chunk__10742_10746;
var G__10752 = count__10743_10747;
var G__10753 = (i__10744_10748 + (1));
seq__10741_10745 = G__10750;
chunk__10742_10746 = G__10751;
count__10743_10747 = G__10752;
i__10744_10748 = G__10753;
continue;
} else {
var temp__4126__auto___10754 = cljs.core.seq.call(null,seq__10741_10745);
if(temp__4126__auto___10754){
var seq__10741_10755__$1 = temp__4126__auto___10754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10741_10755__$1)){
var c__4768__auto___10756 = cljs.core.chunk_first.call(null,seq__10741_10755__$1);
var G__10757 = cljs.core.chunk_rest.call(null,seq__10741_10755__$1);
var G__10758 = c__4768__auto___10756;
var G__10759 = cljs.core.count.call(null,c__4768__auto___10756);
var G__10760 = (0);
seq__10741_10745 = G__10757;
chunk__10742_10746 = G__10758;
count__10743_10747 = G__10759;
i__10744_10748 = G__10760;
continue;
} else {
var x_10761 = cljs.core.first.call(null,seq__10741_10755__$1);
ret.push(x_10761);

var G__10762 = cljs.core.next.call(null,seq__10741_10755__$1);
var G__10763 = null;
var G__10764 = (0);
var G__10765 = (0);
seq__10741_10745 = G__10762;
chunk__10742_10746 = G__10763;
count__10743_10747 = G__10764;
i__10744_10748 = G__10765;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__10766_10770 = cljs.core.seq.call(null,v);
var chunk__10767_10771 = null;
var count__10768_10772 = (0);
var i__10769_10773 = (0);
while(true){
if((i__10769_10773 < count__10768_10772)){
var x_10774 = cljs.core._nth.call(null,chunk__10767_10771,i__10769_10773);
ret.push(x_10774);

var G__10775 = seq__10766_10770;
var G__10776 = chunk__10767_10771;
var G__10777 = count__10768_10772;
var G__10778 = (i__10769_10773 + (1));
seq__10766_10770 = G__10775;
chunk__10767_10771 = G__10776;
count__10768_10772 = G__10777;
i__10769_10773 = G__10778;
continue;
} else {
var temp__4126__auto___10779 = cljs.core.seq.call(null,seq__10766_10770);
if(temp__4126__auto___10779){
var seq__10766_10780__$1 = temp__4126__auto___10779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10766_10780__$1)){
var c__4768__auto___10781 = cljs.core.chunk_first.call(null,seq__10766_10780__$1);
var G__10782 = cljs.core.chunk_rest.call(null,seq__10766_10780__$1);
var G__10783 = c__4768__auto___10781;
var G__10784 = cljs.core.count.call(null,c__4768__auto___10781);
var G__10785 = (0);
seq__10766_10770 = G__10782;
chunk__10767_10771 = G__10783;
count__10768_10772 = G__10784;
i__10769_10773 = G__10785;
continue;
} else {
var x_10786 = cljs.core.first.call(null,seq__10766_10780__$1);
ret.push(x_10786);

var G__10787 = cljs.core.next.call(null,seq__10766_10780__$1);
var G__10788 = null;
var G__10789 = (0);
var G__10790 = (0);
seq__10766_10770 = G__10787;
chunk__10767_10771 = G__10788;
count__10768_10772 = G__10789;
i__10769_10773 = G__10790;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__10791_10795 = cljs.core.seq.call(null,v);
var chunk__10792_10796 = null;
var count__10793_10797 = (0);
var i__10794_10798 = (0);
while(true){
if((i__10794_10798 < count__10793_10797)){
var x_10799 = cljs.core._nth.call(null,chunk__10792_10796,i__10794_10798);
ret.push(x_10799);

var G__10800 = seq__10791_10795;
var G__10801 = chunk__10792_10796;
var G__10802 = count__10793_10797;
var G__10803 = (i__10794_10798 + (1));
seq__10791_10795 = G__10800;
chunk__10792_10796 = G__10801;
count__10793_10797 = G__10802;
i__10794_10798 = G__10803;
continue;
} else {
var temp__4126__auto___10804 = cljs.core.seq.call(null,seq__10791_10795);
if(temp__4126__auto___10804){
var seq__10791_10805__$1 = temp__4126__auto___10804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10791_10805__$1)){
var c__4768__auto___10806 = cljs.core.chunk_first.call(null,seq__10791_10805__$1);
var G__10807 = cljs.core.chunk_rest.call(null,seq__10791_10805__$1);
var G__10808 = c__4768__auto___10806;
var G__10809 = cljs.core.count.call(null,c__4768__auto___10806);
var G__10810 = (0);
seq__10791_10795 = G__10807;
chunk__10792_10796 = G__10808;
count__10793_10797 = G__10809;
i__10794_10798 = G__10810;
continue;
} else {
var x_10811 = cljs.core.first.call(null,seq__10791_10805__$1);
ret.push(x_10811);

var G__10812 = cljs.core.next.call(null,seq__10791_10805__$1);
var G__10813 = null;
var G__10814 = (0);
var G__10815 = (0);
seq__10791_10795 = G__10812;
chunk__10792_10796 = G__10813;
count__10793_10797 = G__10814;
i__10794_10798 = G__10815;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x10825 = cljs.core.clone.call(null,handlers);
x10825.forEach = ((function (x10825,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__10826 = cljs.core.seq.call(null,coll);
var chunk__10827 = null;
var count__10828 = (0);
var i__10829 = (0);
while(true){
if((i__10829 < count__10828)){
var vec__10830 = cljs.core._nth.call(null,chunk__10827,i__10829);
var k = cljs.core.nth.call(null,vec__10830,(0),null);
var v = cljs.core.nth.call(null,vec__10830,(1),null);
f.call(null,v,k);

var G__10832 = seq__10826;
var G__10833 = chunk__10827;
var G__10834 = count__10828;
var G__10835 = (i__10829 + (1));
seq__10826 = G__10832;
chunk__10827 = G__10833;
count__10828 = G__10834;
i__10829 = G__10835;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10826);
if(temp__4126__auto__){
var seq__10826__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10826__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__10826__$1);
var G__10836 = cljs.core.chunk_rest.call(null,seq__10826__$1);
var G__10837 = c__4768__auto__;
var G__10838 = cljs.core.count.call(null,c__4768__auto__);
var G__10839 = (0);
seq__10826 = G__10836;
chunk__10827 = G__10837;
count__10828 = G__10838;
i__10829 = G__10839;
continue;
} else {
var vec__10831 = cljs.core.first.call(null,seq__10826__$1);
var k = cljs.core.nth.call(null,vec__10831,(0),null);
var v = cljs.core.nth.call(null,vec__10831,(1),null);
f.call(null,v,k);

var G__10840 = cljs.core.next.call(null,seq__10826__$1);
var G__10841 = null;
var G__10842 = (0);
var G__10843 = (0);
seq__10826 = G__10840;
chunk__10827 = G__10841;
count__10828 = G__10842;
i__10829 = G__10843;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10825,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x10825;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__10824 = obj;
G__10824.push(kfn.call(null,k),vfn.call(null,v));

return G__10824;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t10847 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t10847 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta10848){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta10848 = meta10848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t10847.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t10847.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t10847.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t10847.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t10847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10849){
var self__ = this;
var _10849__$1 = this;
return self__.meta10848;
});

cognitect.transit.t10847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10849,meta10848__$1){
var self__ = this;
var _10849__$1 = this;
return (new cognitect.transit.t10847(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta10848__$1));
});

cognitect.transit.t10847.cljs$lang$type = true;

cognitect.transit.t10847.cljs$lang$ctorStr = "cognitect.transit/t10847";

cognitect.transit.t10847.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/t10847");
});

cognitect.transit.__GT_t10847 = (function __GT_t10847(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta10848){
return (new cognitect.transit.t10847(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta10848));
});

}

return (new cognitect.transit.t10847(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,cljs.core.PersistentArrayMap.EMPTY));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
