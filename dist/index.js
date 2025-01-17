"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=u(function(G,w){
var k=require('@stdlib/complex-float64-ctor/dist'),g=require('@stdlib/complex-float64-real/dist'),l=require('@stdlib/complex-float64-imag/dist');function o(e,r){var i=g(e),a=g(r),s=l(e),n=l(r),v=i*a-s*n,t=i*n+s*a;return new k(v,t)}w.exports=o
});var R=u(function(H,C){
function A(e,r,i,a,s,n,v){return s[v]=e*i-r*a,s[v+n]=e*a+r*i,s}C.exports=A
});var h=u(function(I,b){
function B(e,r,i,a,s,n,v,t,d){var m=e[i],q=e[i+r],p=a[n],x=a[n+s];return v[d]=m*p-q*x,v[d+t]=m*x+q*p,v}b.exports=B
});var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=y(),D=R(),E=h();j(c,"assign",D);j(c,"strided",E);module.exports=c;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
