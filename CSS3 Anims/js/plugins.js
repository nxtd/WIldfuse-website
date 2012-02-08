
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

;(function($){
    $.fn.extend({
        slideShow: function(options) {
            this.defaultOptions = {
            	slides: [
            		/*{
            			_in: {startAtTime:0, run:function(){}}, 
            			_main: {startAtTime:0, run:function(){}}, 
            			_out: {startAtTime:0, run:function(){}}
            		}*/
            	],
            	slideQueue: 'slideQueue'
            };

            var settings = $.extend({}, this.defaultOptions, options);                    

            return this.each(function() {

                var $this = $(this);
                
                for(var slideIndex=0; slideIndex<settings.slides.length; slideIndex++){

					$this.queue(settings.slideQueue, function(){

						var curSlide = settings.slides[slideIndex];
						
						setTimeout(function(){

							curSlide._in.run();
						}, curSlide._in.startAtTime);
					}).dequeue(settings.slideQueue)
					.queue(settings.slideQueue, function(){

						var curSlide = settings.slides[slideIndex];
						
						setTimeout(function(){

							curSlide._main.run();
						}, curSlide._main.startAtTime);
					}).dequeue(settings.slideQueue)
					.queue(settings.slideQueue, function(){

						var curSlide = settings.slides[slideIndex];					
						setTimeout(function(){

							curSlide._out.run();             								
						}, curSlide._out.startAtTime);
					}).dequeue(settings.slideQueue);						

				}						
            });
        }
    });
})(jQuery);



;(function($){
    $.fn.extend({
        cssAnimated: function(options) {
            this.defaultOptions = {
            	property: 'all', 
            	duration: '1s', 
            	timingFunction: 'ease-in-out',
            	delay: '',
            	fillMode: ''
            };

            var settings = $.extend({}, this.defaultOptions, options);

            return this.each(function() {
                var $this = $(this);
                
                $this.css({
                	'-webkit-transition': settings.property + ' ' + settings.duration + ' ' + settings.timingFunction + ' ' + settings.delay + ' ' + settings.fillMode,
					'-moz-transition': settings.property + ' ' + settings.duration + ' ' + settings.timingFunction + ' ' + settings.delay + ' ' + settings.fillMode,
					'-o-transition': settings.property + ' ' + settings.duration + ' ' + settings.timingFunction + ' ' + settings.delay + ' ' + settings.fillMode,
					'-ms-transition': settings.property + ' ' + settings.duration + ' ' + settings.timingFunction + ' ' + settings.delay + ' ' + settings.fillMode,
					'transition': settings.property + ' ' + settings.duration + ' ' + settings.timingFunction + ' ' + settings.delay + ' ' + settings.fillMode
                });
            });
        }
    });
})(jQuery);