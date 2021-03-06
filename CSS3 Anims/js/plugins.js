
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/*
 CSSAnimation v0.2
 Provides 'cssAnimationKeyframe' events for keyframe animations.
 http://www.joelambert.co.uk/cssa

 Copyright 2011, Joe Lambert. All rights reserved
 Free to use under the MIT license.
 http://www.opensource.org/licenses/mit-license.php
*/
var CSSAnimation={version:"0.2"};CSSAnimation.find=function(a){for(var i=document.styleSheets,g=i.length-1;g>=0;g--)try{for(var d=i[g],e=d.cssRules?d.cssRules:d.rules?d.rules:[],c=e.length-1;c>=0;c--)if((e[c].type===window.CSSRule.WEBKIT_KEYFRAMES_RULE||e[c].type===window.CSSRule.MOZ_KEYFRAMES_RULE)&&e[c].name==a)return e[c]}catch(l){}return null};
CSSAnimation.trigger=function(a,i,g,d){var e={},c={},l=null,o=0,q=0,j={base:5,easing:"linear",iterationCount:1},k=["Webkit","Moz"],h;for(h in d)j[h]=d[h];if(!a.isPlaying){l=CSSAnimation.find(i);if(!l)return false;e={};for(var b=0;b<l.cssRules.length;b++){d=l.cssRules[b];h=d.keyText;var m=0;h=="from"?m=0:h=="to"?m=1:m=h.replace("%","")/100;e[m*100+"%"]=d}o=(new Date).getTime();var p=m=roundedKey=keyframe=null,s=function(f,u){var n=document.createEvent("Event");n.initEvent("cssAnimationKeyframe",true,
true);n.animationName=i;n.keyText=f;n.elapsedTime=u;a.dispatchEvent(n)};b=0;var r=false,t=function(f){r=false;for(b=0;b<k.length&&!r;b++)if(a.style[k[b]+"AnimationName"]!==undefined){a.style[k[b]+"AnimationDuration"]=f.duration;a.style[k[b]+"AnimationTimingFunction"]=f.timingFunction;a.style[k[b]+"AnimationIterationCount"]=f.iterationCount;a.style[k[b]+"AnimationName"]=f.name;r=true}};t({name:i,duration:g+"ms",timingFunction:j.easing,iterationCount:j.iterationCount});a.isPlaying=true;(function f(){p=
(new Date).getTime();percent=Math.floor((p-(o+q*g))/g*100);key=percent-percent%j.base+"%";if((keyframe=e[key])&&!c[key]){c[key]=true;s(key,(p-o)/1E3)}if(percent<100)requestAnimFrame(f,a);else{c["100%"]||s("100%",(p-o)/1E3);q++;if(q<j.iterationCount||j.iterationCount=="infinite"){c={};requestAnimFrame(f,a)}else{t({name:null,duration:null,timingFunction:null,iterationCount:0});a.isPlaying=false}}})()}};
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();

(function(){$.fn.cssanimation=function(a,b,c){return this.each(function(e,d){CSSAnimation.trigger(d,a,b,c)})}})();

///////////////////// OWN SCRIPTS //////////////////////////

