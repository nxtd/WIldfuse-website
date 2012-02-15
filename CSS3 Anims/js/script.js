/* Author: Nicolas Dancie

*/

$(document).ready(function(){	

	var Timeline = new AnimationTimeline({
		delay: 5000,
		animations:[
			/* SLIDE 1 */
			{// Phone on the left
				element: $('.carousel .slide:nth-child(1) .rotates:nth-child(1)')[0],
				animations: [
					{name: 'slide1-out-phone-left-p1', duration: '500ms', timingFunction: 'ease-in', fillMode: 'backwards'}, 
					{name: 'slide1-out-phone-left-p2', duration: '500ms', delay: '500ms', timingFunction: 'linear', fillMode: 'forwards'}
				]
			},
			{// Phone in the middle
				element: $('.carousel .slide:nth-child(1) .slides:nth-child(2)')[0],
				animations:[
					{name: 'slide1-out-phone-middle-p1', duration: '500ms', timingFunction: 'ease-in', fillMode: 'backwards'}, 
					{name: 'slide1-out-phone-middle-p2', duration: '190ms', delay: '500ms', timingFunction: 'linear', fillMode: 'forwards'}
				]
			},
			{// Phone on the right
				element: $('.carousel .slide:nth-child(1) .rotates:nth-child(3)')[0],
				animations: [
					{name: 'slide1-out-phone-right-p1', duration: '500ms', timingFunction: 'ease-in', fillMode: 'backwards'}, 
					{name: 'slide1-out-phone-right-p2', duration: '500ms', delay: '500ms', timingFunction: 'linear', fillMode: 'forwards'}
				]
			},
			{
				element: $('.carousel .slide:nth-child(1) .text')[0],
				animations: [
					{
						name: 'slide1-out-text', duration: '300ms', delay: '700ms', fillMode: 'forwards',
						onEnd: function(){
							/* SLIDE 2 */							
							$('.carousel .slide:nth-child(1)').css('display', 'none');
							$('.carousel .slide:nth-child(2)').css('display', 'block');
							
							var slide2Animations = [
								new Animation({
									element: $('.carousel .slide:nth-child(2) .text')[0],
									animations: [
										{name: 'slide2-in-text', duration: '700ms', fillMode: 'backwards', onEnd: function(e){
											$(e.originalEvent.srcElement).css('opacity', 1.0);
										}},
										{name: 'slide2-out-text', duration: '300ms', delay: '6000ms', fillMode: 'forwards'},
										//{name: 'flip-vertical-front-face', duration: '300ms', delay: '7400ms', fillMode: 'forwards'}
									]
								})
							];
							
			 
							
											 
							
							var rotators = $('.rotator');							
							var maxDelayForRotatorsToFlip = 0;	
							
							for(var i=0; i<rotators.length; i++){
								
								var delaysForRotatorsToFlip = Math.pow(Math.floor(Math.random()*25),2);
								maxDelayForRotatorsToFlip = delaysForRotatorsToFlip > maxDelayForRotatorsToFlip ? delaysForRotatorsToFlip : maxDelayForRotatorsToFlip;
								
								var rfi = 800;								
								slide2Animations.push(
									new Animation({
										element: $(rotators[i]).find('.front').html('W'),
										animations:[
											{name: 'fade-in', duration: rfi*3, fillMode: 'forwards'},
											{name: 'flip-horizontal-front', duration: '2000ms', delay: rfi +  delaysForRotatorsToFlip, fillMode: 'forwards'}
										]
									})
								);
								
								slide2Animations.push(
									new Animation({
										element: $(rotators[i]).find('.back'),
										animations:[
											{name: 'fade-in', duration: rfi*3, fillMode: 'forwards'},
											{name: 'flip-horizontal-back', duration: '2000ms', delay: rfi + delaysForRotatorsToFlip, fillMode: 'forwards'}
										]
									})
								);
							};
																		
							for(var i=0; i<8; i++){
								slide2Animations.push(new Animation({
									element: $('.carousel .slide:nth-child(2) .rotator:nth-child('+(i+1)+')'),
									animations: [
										{
											name: 'slide2-out-explode-ref-' + i+1,
											duration: '300ms',
											delay: 6000,
											fillMode: 'forwards',									
										},
										{
											name:  ((((i+1)%4) == 0)||(i+4)%4==0) ? 'growByHalf' : 'growByOne',
											duration: '300ms',
											delay: 6000,
											fillMode: 'forwards',									
										},
										{
											name: 'fade-out',
											duration: '300ms',
											delay: 6000,
											fillMode: 'forwards',									
										}
									]
								}));
							}							
							
							
							
							var Timeline2 = new AnimationTimeline({delay: 0}, slide2Animations);
							Timeline2.play();
						}
					}					
				]			
			}		
		]
	});
	//Timeline.play();
	/*$('<div></div>').slideShow({
		slides: [
			{
				
				_out: {startAtTime:17000, run:function(){
				
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
	});*/
	
});






















