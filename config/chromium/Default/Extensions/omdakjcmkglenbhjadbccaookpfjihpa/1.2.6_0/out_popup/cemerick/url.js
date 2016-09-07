// Compiled by ClojureScript 0.0-2913 {}
goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.string');
goog.require('pathetic.core');
cemerick.url.url_encode = (function url_encode(string){
var G__20288 = string;
var G__20288__$1 = (((G__20288 == null))?null:[cljs.core.str(G__20288)].join(''));
var G__20288__$2 = (((G__20288__$1 == null))?null:encodeURIComponent(G__20288__$1));
var G__20288__$3 = (((G__20288__$2 == null))?null:G__20288__$2.replace("+","%20"));
return G__20288__$3;
});
cemerick.url.url_decode = (function url_decode(string){
var G__20290 = string;
var G__20290__$1 = (((G__20290 == null))?null:[cljs.core.str(G__20290)].join(''));
var G__20290__$2 = (((G__20290__$1 == null))?null:decodeURIComponent(G__20290__$1));
return G__20290__$2;
});
cemerick.url.map__GT_query = (function map__GT_query(m){
var G__20294 = cljs.core.seq.call(null,m);
var G__20294__$1 = (((G__20294 == null))?null:cljs.core.sort.call(null,G__20294));
var G__20294__$2 = (((G__20294__$1 == null))?null:cljs.core.map.call(null,((function (G__20294,G__20294__$1){
return (function (p__20295){
var vec__20296 = p__20295;
var k = cljs.core.nth.call(null,vec__20296,(0),null);
var v = cljs.core.nth.call(null,vec__20296,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode.call(null,cljs.core.name.call(null,k)),"=",cemerick.url.url_encode.call(null,[cljs.core.str(v)].join(''))], null);
});})(G__20294,G__20294__$1))
,G__20294__$1));
var G__20294__$3 = (((G__20294__$2 == null))?null:cljs.core.interpose.call(null,"&",G__20294__$2));
var G__20294__$4 = (((G__20294__$3 == null))?null:cljs.core.flatten.call(null,G__20294__$3));
var G__20294__$5 = (((G__20294__$4 == null))?null:cljs.core.apply.call(null,cljs.core.str,G__20294__$4));
return G__20294__$5;
});
cemerick.url.split_param = (function split_param(param){
return cljs.core.take.call(null,(2),cljs.core.concat.call(null,clojure.string.split.call(null,param,/=/),cljs.core.repeat.call(null,"")));
});
cemerick.url.query__GT_map = (function query__GT_map(qstr){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,qstr))){
var G__20298 = clojure.string.split.call(null,qstr,/&/);
var G__20298__$1 = (((G__20298 == null))?null:cljs.core.seq.call(null,G__20298));
var G__20298__$2 = (((G__20298__$1 == null))?null:cljs.core.mapcat.call(null,cemerick.url.split_param,G__20298__$1));
var G__20298__$3 = (((G__20298__$2 == null))?null:cljs.core.map.call(null,cemerick.url.url_decode,G__20298__$2));
var G__20298__$4 = (((G__20298__$3 == null))?null:cljs.core.apply.call(null,cljs.core.hash_map,G__20298__$3));
return G__20298__$4;
} else {
return null;
}
});
cemerick.url.port_str = (function port_str(protocol,port){
if((cljs.core.not_EQ_.call(null,null,port)) && (cljs.core.not_EQ_.call(null,(-1),port)) && (!(((port === (80))) && (cljs.core._EQ_.call(null,protocol,"http")))) && (!(((port === (443))) && (cljs.core._EQ_.call(null,protocol,"https"))))){
return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else {
return null;
}
});
cemerick.url.url_creds = (function url_creds(username,password){
if(cljs.core.truth_(username)){
return [cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join('');
} else {
return null;
}
});

/**
* @constructor
* @param {*} protocol
* @param {*} username
* @param {*} password
* @param {*} host
* @param {*} port
* @param {*} path
* @param {*} query
* @param {*} anchor
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cemerick.url.URL = (function (protocol,username,password,host,port,path,query,anchor,__meta,__extmap,__hash){
this.protocol = protocol;
this.username = username;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.anchor = anchor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cemerick.url.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var creds = cemerick.url.url_creds.call(null,self__.username,self__.password);
return [cljs.core.str(self__.protocol),cljs.core.str("://"),cljs.core.str(creds),cljs.core.str((cljs.core.truth_(creds)?"@":null)),cljs.core.str(self__.host),cljs.core.str(cemerick.url.port_str.call(null,self__.protocol,self__.port)),cljs.core.str(self__.path),cljs.core.str(((cljs.core.seq.call(null,self__.query))?[cljs.core.str("?"),cljs.core.str(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query.call(null,self__.query)))].join(''):null)),cljs.core.str((cljs.core.truth_(self__.anchor)?[cljs.core.str("#"),cljs.core.str(self__.anchor)].join(''):null))].join('');
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4584__auto__,k__4585__auto__){
var self__ = this;
var this__4584__auto____$1 = this;
return cljs.core._lookup.call(null,this__4584__auto____$1,k__4585__auto__,null);
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4586__auto__,k20300,else__4587__auto__){
var self__ = this;
var this__4586__auto____$1 = this;
var G__20302 = (((k20300 instanceof cljs.core.Keyword))?k20300.fqn:null);
switch (G__20302) {
case "anchor":
return self__.anchor;

break;
case "query":
return self__.query;

break;
case "path":
return self__.path;

break;
case "port":
return self__.port;

break;
case "host":
return self__.host;

break;
case "password":
return self__.password;

break;
case "username":
return self__.username;

break;
case "protocol":
return self__.protocol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20300,else__4587__auto__);

}
});

cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4598__auto__,writer__4599__auto__,opts__4600__auto__){
var self__ = this;
var this__4598__auto____$1 = this;
var pr_pair__4601__auto__ = ((function (this__4598__auto____$1){
return (function (keyval__4602__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4599__auto__,cljs.core.pr_writer,""," ","",opts__4600__auto__,keyval__4602__auto__);
});})(this__4598__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4599__auto__,pr_pair__4601__auto__,"#cemerick.url.URL{",", ","}",opts__4600__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4582__auto__){
var self__ = this;
var this__4582__auto____$1 = this;
return self__.__meta;
});

cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4578__auto__){
var self__ = this;
var this__4578__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4588__auto__){
var self__ = this;
var this__4588__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4579__auto__){
var self__ = this;
var this__4579__auto____$1 = this;
var h__4402__auto__ = self__.__hash;
if(!((h__4402__auto__ == null))){
return h__4402__auto__;
} else {
var h__4402__auto____$1 = cljs.core.hash_imap.call(null,this__4579__auto____$1);
self__.__hash = h__4402__auto____$1;

return h__4402__auto____$1;
}
});

cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4580__auto__,other__4581__auto__){
var self__ = this;
var this__4580__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3969__auto__ = other__4581__auto__;
if(cljs.core.truth_(and__3969__auto__)){
return ((this__4580__auto____$1.constructor === other__4581__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4580__auto____$1,other__4581__auto__));
} else {
return and__3969__auto__;
}
})())){
return true;
} else {
return false;
}
});

cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4593__auto__,k__4594__auto__){
var self__ = this;
var this__4593__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"protocol","protocol",652470118),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null),k__4594__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4593__auto____$1),self__.__meta),k__4594__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4594__auto__)),null));
}
});

cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4591__auto__,k__4592__auto__,G__20299){
var self__ = this;
var this__4591__auto____$1 = this;
var pred__20303 = cljs.core.keyword_identical_QMARK_;
var expr__20304 = k__4592__auto__;
if(cljs.core.truth_(pred__20303.call(null,new cljs.core.Keyword(null,"protocol","protocol",652470118),expr__20304))){
return (new cemerick.url.URL(G__20299,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20303.call(null,new cljs.core.Keyword(null,"username","username",1605666410),expr__20304))){
return (new cemerick.url.URL(self__.protocol,G__20299,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20303.call(null,new cljs.core.Keyword(null,"password","password",417022471),expr__20304))){
return (new cemerick.url.URL(self__.protocol,self__.username,G__20299,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20303.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__20304))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__20299,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20303.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__20304))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__20299,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20303.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__20304))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__20299,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20303.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),expr__20304))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__20299,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20303.call(null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),expr__20304))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__20299,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4592__auto__,G__20299),null));
}
}
}
}
}
}
}
}
});

cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4596__auto__){
var self__ = this;
var this__4596__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4583__auto__,G__20299){
var self__ = this;
var this__4583__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__20299,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4589__auto__,entry__4590__auto__){
var self__ = this;
var this__4589__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4590__auto__)){
return cljs.core._assoc.call(null,this__4589__auto____$1,cljs.core._nth.call(null,entry__4590__auto__,(0)),cljs.core._nth.call(null,entry__4590__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4589__auto____$1,entry__4590__auto__);
}
});

cemerick.url.URL.cljs$lang$type = true;

cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__4618__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.url/URL");
});

cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__4618__auto__,writer__4619__auto__){
return cljs.core._write.call(null,writer__4619__auto__,"cemerick.url/URL");
});

cemerick.url.__GT_URL = (function __GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

cemerick.url.map__GT_URL = (function map__GT_URL(G__20301){
return (new cemerick.url.URL(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(G__20301),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(G__20301),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__20301),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__20301),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__20301),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__20301),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__20301),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(G__20301),null,cljs.core.dissoc.call(null,G__20301,new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)),null));
});

cemerick.url.translate_default = (function translate_default(s,old_default,new_default){
if(cljs.core._EQ_.call(null,s,old_default)){
return new_default;
} else {
return s;
}
});
cemerick.url.url_STAR_ = (function url_STAR_(url){
var url__$1 = (new goog.Uri(url));
var vec__20308 = clojure.string.split.call(null,(function (){var or__3981__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.call(null,vec__20308,(0),null);
var pass = cljs.core.nth.call(null,vec__20308,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__3969__auto__ = cljs.core.seq.call(null,user);
if(and__3969__auto__){
return user;
} else {
return and__3969__auto__;
}
})(),(function (){var and__3969__auto__ = cljs.core.seq.call(null,pass);
if(and__3969__auto__){
return pass;
} else {
return and__3969__auto__;
}
})(),url__$1.getDomain(),cemerick.url.translate_default.call(null,url__$1.getPort(),null,(-1)),pathetic.core.normalize.call(null,url__$1.getPath()),cemerick.url.query__GT_map.call(null,cemerick.url.translate_default.call(null,url__$1.getQuery(),"",null)),cemerick.url.translate_default.call(null,url__$1.getFragment(),"",null),null,null,null));
});
/**
* Returns a new URL record for the given url string(s).
* 
* The first argument must be a base url — either a complete url string, or
* a pre-existing URL record instance that will serve as the basis for the new
* URL.  Any additional arguments must be strings, which are interpreted as
* relative paths that are successively resolved against the base url's path
* to construct the final :path in the returned URL record.
* 
* This function does not perform any url-encoding.  Use `url-encode` to encode
* URL path segments as desired before passing them into this fn.
* @param {...*} var_args
*/
cemerick.url.url = (function() {
var url = null;
var url__1 = (function (url__$1){
if((url__$1 instanceof cemerick.url.URL)){
return url__$1;
} else {
return cemerick.url.url_STAR_.call(null,url__$1);
}
});
var url__2 = (function() { 
var G__20309__delegate = function (base_url,path_segments){
var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:url.call(null,base_url));
return cljs.core.assoc.call(null,base_url__$1,new cljs.core.Keyword(null,"path","path",-188191168),pathetic.core.normalize.call(null,cljs.core.reduce.call(null,pathetic.core.resolve,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base_url__$1),path_segments)));
};
var G__20309 = function (base_url,var_args){
var path_segments = null;
if (arguments.length > 1) {
var G__20310__i = 0, G__20310__a = new Array(arguments.length -  1);
while (G__20310__i < G__20310__a.length) {G__20310__a[G__20310__i] = arguments[G__20310__i + 1]; ++G__20310__i;}
  path_segments = new cljs.core.IndexedSeq(G__20310__a,0);
} 
return G__20309__delegate.call(this,base_url,path_segments);};
G__20309.cljs$lang$maxFixedArity = 1;
G__20309.cljs$lang$applyTo = (function (arglist__20311){
var base_url = cljs.core.first(arglist__20311);
var path_segments = cljs.core.rest(arglist__20311);
return G__20309__delegate(base_url,path_segments);
});
G__20309.cljs$core$IFn$_invoke$arity$variadic = G__20309__delegate;
return G__20309;
})()
;
url = function(base_url,var_args){
var path_segments = var_args;
switch(arguments.length){
case 1:
return url__1.call(this,base_url);
default:
var G__20312 = null;
if (arguments.length > 1) {
var G__20313__i = 0, G__20313__a = new Array(arguments.length -  1);
while (G__20313__i < G__20313__a.length) {G__20313__a[G__20313__i] = arguments[G__20313__i + 1]; ++G__20313__i;}
G__20312 = new cljs.core.IndexedSeq(G__20313__a,0);
}
return url__2.cljs$core$IFn$_invoke$arity$variadic(base_url, G__20312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url.cljs$lang$maxFixedArity = 1;
url.cljs$lang$applyTo = url__2.cljs$lang$applyTo;
url.cljs$core$IFn$_invoke$arity$1 = url__1;
url.cljs$core$IFn$_invoke$arity$variadic = url__2.cljs$core$IFn$_invoke$arity$variadic;
return url;
})()
;
