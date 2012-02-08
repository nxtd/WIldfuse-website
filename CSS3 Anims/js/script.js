/* Author: Nicolas Dancie

*/

$(document).ready(function(){

	$('<div></div>').slideShow({
		slides: [
			{
				_in: {startAtTime:0, run:function(){}}, 
				_main: {startAtTime:0, run:function(){}}, 
				_out: {startAtTime:/*5*/000, run:function(){
					
					var phones = {
						left: $('.carousel .slide:nth-child(1) .rotates:nth-child(1)'),
						middle: $('.carousel .slide:nth-child(1) .slides:nth-child(2)'),
						right: $('.carousel .slide:nth-child(1) .rotates:nth-child(3)')
					};

					phones.left.css({
						'-webkit-animation': 'slide1-out-phone-left-p1 500ms ease-in, slide1-out-phone-left-p2 500ms linear 500ms forwards'
					});
					phones.middle.css({
						'-webkit-animation': 'slide1-out-phone-middle-p1 500ms ease-in, slide1-out-phone-middle-p2 190ms linear 500ms forwards'
					});
					phones.right.css({
						'-webkit-animation': 'slide1-out-phone-right-p1 500ms ease-in, slide1-out-phone-right-p2 500ms linear 500ms forwards'
					});
					
					$('.carousel .slide:nth-child(1) .text').css({
						'-webkit-animation': 'slide1-out-text 300ms 1000ms forwards'
					});					
				}}
			},
			{
				_in: {startAtTime:3000, run:function(){
				
					$('.carousel .slide:nth-child(1)').hide();
					$('.carousel .slide:nth-child(2)').show();
					
					$('.carousel .slide:nth-child(2) .text').css({
						'-webkit-animation': 'slide2-in-text 700ms forwards'
					});
					
					/*var rotators = $('.rotator');
					var rotatorFronts = rotators.find('.front').text('W');
					var rotatorBacks = rotators.find('.back');					
					
					setTimeout(function(){
						rotatorFronts.css({
							'-webkit-animation': 'fade-in 1000ms both'
						});
						rotatorBacks.css({
							'-webkit-animation': 'fade-in 1000ms both'
						});
						
						setTimeout(function(){
							var maxDelayForRotatorsToFlip = 0;
							var delaysForRotatorsToFlip = [];
							
							for(var i=0; i<rotators.length; i++){
								delaysForRotatorsToFlip[i] = Math.pow(Math.floor(Math.random()*20),2) + 700;
								//(maxDelayForRotatorsToFlip < delaysForRotatorsToFlip[i]) ? {maxDelayForRotatorsToFlip = delaysForRotatorsToFlip[i]}:{};
								
								flipRotator(i);
							}								
							
							function flipRotator(index){
								var i = index;
								setTimeout(function(){
									rotators.eq(i).find('.front').css({
										'-webkit-animation': 'flip-horizontal-front 2000ms both'
									});
									rotators.eq(i).find('.back').css({
										'-webkit-animation': 'flip-horizontal-back 2000ms both'
									});	
								}, delaysForRotatorsToFlip[i]);
							}						
						}, 1000);	
					}, 700);	*/				
																							
				}}, 
				_main: {startAtTime:0, run:function(){}}, 
				_out: {startAtTime:7000, run:function(){
				
					var translationsX = [-100, -50, 50, 100];
					var translationsY = [150, 200, 200, 150];
					function splashRotator(index){
						var i = index;
						var obj = $('.carousel .slide:nth-child(2) .rotator:nth-child('+(i+1)+')');
						obj.cssAnimated({
							duration: '300ms',
							delay: ''
						});
						
						obj.css({
							'opacity': 0.0,
							'-webkit-transform': 'translate(' + translationsX[((i>3)?i-4:i)] + 'px,' + ((i<4)?-50:0) + 'px) scale(' + ((i%2==0)?((i%4!=0)?'4.0':'3.0'):((Math.floor(i/3)%3==0)?'4.0':'3.0')) + ')'
						});
					}
					for(var i=0; i<8; i++){
						splashRotator(i);
					}
					$('.carousel .slide:nth-child(2) .text').cssAnimated({
						duration: '300ms',
						delay: ''
					}).css({'-webkit-transform': 'translate(0, 240px)'});
				}}
			}
		]
	});
});






















