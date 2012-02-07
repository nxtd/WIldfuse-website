/* Author: Nicolas Dancie

*/

$(document).ready(function(){

	/*function hideSlide1(delay, callbacks){
		setTimeout(function(){	
			move('.carousel .slide:nth-child(1) .rotates:nth-child(1)')			
				.duration(700)
				.ease('in')
				.rotate(90)		
				.to(0,00)
				.then()
					.duration(900)					
					.ease('linear')	
					.set('opacity', 0.0)
					.to(0, 1000)
				.pop()
			.end(function(){});
			
			move('.carousel .slide:nth-child(1) .slides:nth-child(2)')
				.duration(600)
				.delay(100)		
				.ease('in')	
				.to(0, 400)
				.then()
					.duration(190)					
					.ease('linear')			
					.delay(0)
					.to(0, 100)			
					.set('opacity', 0.0)			
				.pop()
			.end();
			
			move('.carousel .slide:nth-child(1) .rotates:nth-child(3)')			
				.duration(700)	
				.ease('in')
				.rotate(-90)
				.to(0,0)
				.then()
					.duration(900)					
					.ease('linear')			
					.set('opacity', 1.0)	
					.to(0, 1000)
				.pop()
			.end(function(){
				move('.carousel .slide:nth-child(1) .text')
					.duration(500)
					.to(1000,0)
					.set('opacity', 0.0)
				.end(function(){
					var callback = callbacks.shift();
					callback(callbacks);
				});			
			});
		}, delay);
	}*/
	
	/*function showSlide2(callback){		
		$('.carousel .slide:nth-child(1)').hide();
		move('.carousel .slide:nth-child(2) .text')
			.duration(1000)
			.to(0,100)
			.set('opacity', 1.0)
		.end(function(){
	
			recurseRefs(1);
			
			function recurseRefs(index, duration){
				var _duration = duration || 500;
				setTimeout(function(){
					$('.carousel .slide:nth-child(2) .illustration img:nth-child('+ index +')').css('z-index', 100+index);
					try{
						move('.carousel .slide:nth-child(2) .illustration img:nth-child('+ index +')')
							.duration(500)
							.to(2000, 0)
						.end(recurseRefs(++index));
					}
					catch(e){}
				}, _duration);
			}
		});		
	}*/
	
	/*function showSlide2b(callbacks){

		$('.carousel .slide:nth-child(1)').hide();

		move('.carousel .slide:nth-child(2) .text')
			.duration(700)
			.to(0,100)
			.set('opacity', 1.0)
		.end(function(){
			$('.rotator .front').text('W');
			$('.rotator').fadeIn(500, function(){
				var randy = Math.pow(Math.floor(Math.random()*20),2);
				console.log(randy);
				$(this).delay(randy).queue('fx', function(){
					$(this).addClass('flip');	
					
					var callback = callbacks.shift();
					callback(callbacks);
				});
			});
		});

	*/	
		
/*		var i=1;
		for(; i<=length; i++){
			move('.carousel .slide:nth-child(2) .illustration .rotator:nth-child('+ i +')')
				.set('opacity', 1.0)
				.delay(Math.floor(Math.random()*1001))
				.duration(1000)
			.end(function(){
				console.log(this.el);
				$(this.el).addClass('flip');		
			});
		}*/
/*		var displayedItems = new Array();
		for(var i=1; i<=$('.carousel .slide:nth-child(2) .illustration img').length; i++) displayedItems[i-1] = i;

		while(displayedItems.length){			

			var index = Math.floor(Math.random()*(displayedItems.length));
			console.log('--------\narray length: ' + displayedItems.length);
			console.log('index: ' + index);
			console.log('img: ' +displayedItems[index]);
			$('.carousel .slide:nth-child(2) .illustration img:nth-child('+ displayedItems[index] +')').css('border', 'red 1px solid');
			displayedItems.splice(index,1);
		}
*/		
	//}
	
	/*function hideSlide2(){
		var translationsX = [-100, -50, 50, 100];
		var translationsY = [150, 200, 200, 150];		
		for(var i=0; i<8; i++){
			move('.carousel .slide:nth-child(2) .rotator:nth-child('+(i+1)+')')
				.delay(5000)
				.duration(200)
				.to(translationsX[((i>3)?i-4:i)],((i<4)?-50:0))
				.scale((i%2==0)?((i%4!=0)?4.0:3.0):((Math.floor(i/3)%3==0)?4.0:3.0))
				.set('opacity', 0.0)
			.end();
			
			i++;
			console.log('i: ' + i + '\nscale: ' + ((i%2==0)?((i%4!=0)?2.0:1.6):(((i!=1) && (i!=5))?2.0:1.6)));
			i--;
		}
		move('.carousel .slide:nth-child(2) .text')
			.delay(5000)
			.duration(300)
			.to(0,240)
		.end();
	}*/
	
	//hideSlide1(5000, [showSlide2b,hideSlide2]);
	

	$(document).slideShow({
		slides: [
			{
				_in: {startAtTime:0, run:function(){}}, 
				_main: {startAtTime:0, run:function(){}}, 
				_out: {startAtTime:2000, run:function(){
					
					var phones = {
						left: $('.carousel .slide:nth-child(1) .rotates:nth-child(1)'),
						middle: $('.carousel .slide:nth-child(1) .slides:nth-child(2)'),
						right: $('.carousel .slide:nth-child(1) .rotates:nth-child(3)')
					};

					phones.left.css({
						'-webkit-animation': 'slide1-out-phone-left-p1 700ms ease-in forwards, slide1-out-phone-left-p2 900ms linear 700ms forwards'
					});
					phones.middle.css({
						'-webkit-animation': 'slide1-out-phone-middle-p1 600ms ease-in forwards, slide1-out-phone-middle-p2 190ms linear 600ms forwards'
					});
					phones.right.css({
						'-webkit-animation': 'slide1-out-phone-right-p1 700ms ease-in forwards, slide1-out-phone-right-p2 900ms linear 700ms forwards'
					});
					
					$('.carousel .slide:nth-child(1) .text').css({
						'-webkit-animation': 'slide1-out-text 500ms 700ms forwards'
					});					
				}}
			},
			{
				_in: {startAtTime:5300, run:function(){
				
					$('.carousel .slide:nth-child(1)').hide();
					$('.carousel .slide:nth-child(2)').show();
					
					$('.carousel .slide:nth-child(2) .text').css({
						'-webkit-animation': 'slide2-in-text 700ms forwards'
					})/*.delay(700).queue(function(){
						$('.rotator .front').text('W');
						$('.rotator').fadeIn(500, function(){
							var randy = Math.pow(Math.floor(Math.random()*20),2);
							console.log(randy);
							$(this).delay(randy).queue('fx', function(){
								$(this).addClass('flip');									
							});
						}).dequeue();
					})*/;	
			/*
					move('.carousel .slide:nth-child(2) .text')
						.duration(700)
						.to(0,100)
						.set('opacity', 1.0)
					.end(function(){
						$('.rotator .front').text('W');
						$('.rotator').fadeIn(500, function(){
							var randy = Math.pow(Math.floor(Math.random()*20),2);
							console.log(randy);
							$(this).delay(randy).queue('fx', function(){
								$(this).addClass('flip');	
								
								var callback = callbacks.shift();
								callback(callbacks);
							});
						});
					});*/				
				}}, 
				_main: {delay:0, run:function(){}}, 
				_out: {delay:2000, run:function(){
				
					var translationsX = [-100, -50, 50, 100];
					var translationsY = [150, 200, 200, 150];		
					for(var i=0; i<8; i++){
						move('.carousel .slide:nth-child(2) .rotator:nth-child('+(i+1)+')')
							.delay(5000)
							.duration(200)
							.to(translationsX[((i>3)?i-4:i)],((i<4)?-50:0))
							.scale((i%2==0)?((i%4!=0)?4.0:3.0):((Math.floor(i/3)%3==0)?4.0:3.0))
							.set('opacity', 0.0)
						.end();						
					}
					move('.carousel .slide:nth-child(2) .text')
						.delay(5000)
						.duration(300)
						.to(0,240)
					.end();
				}}
			}
		]
	});
});






















