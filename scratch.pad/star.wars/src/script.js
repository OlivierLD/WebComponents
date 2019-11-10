// The text 3D affect, and animation is pure CSS.  Only Javascript here is to play music and create stars. 

// Created by Darryl Huffman




//////////////// STAR BACKGROUND
window.onload = function(){
		// Creating the Canvas
		var canvas = document.createElement("canvas"), 
			c = canvas.getContext("2d"),
			particles = {},
			particleIndex = 0,
			particleNum = 4;
		
		canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
		canvas.id = "motion";
		document.body.appendChild(canvas);
		// Finished Creating Canvas
		
		// Setting color which is just one big square
		c.fillStyle = "black";
		c.fillRect(0,0,canvas.width,canvas.height);
		// Finished Color
		
		function Particle(){
			var random_x = Math.floor(Math.random() * (canvas.width - 1 + 1)) + 1;
			var random_y = Math.floor(Math.random() * (canvas.height - 1 + 1)) + 1;
			this.x = random_x;
			this.y = random_y;
			this.vx = 0;
			this.vy = 0;
			this.gravity = 0;
			particleIndex++;
			particles[particleIndex] = this;
			this.id = particleIndex;
			this.life = 0;
        this.size = Math.random() * 6 - 2;
			this.maxlife = Math.random() * 80 + 20; // Stars are set to have a random life length right now, but you can shorten this or make it longer
			this.color = "#FFF"; // Change color being displayed here
		}

		Particle.prototype.draw = function(){
			this.x += this.vx;
			this.y += this.vy;
			
			this.vy += this.gravity;
			this.life++;
			if(this.life >= this.maxlife){
				delete particles[this.id];
			}
			c.fillStyle = this.color;
			c.fillRect(this.x, this.y, this.size, this.size);
		};
		
		setInterval(function(){
			c.fillStyle = "black";
			c.clearRect(0,0,canvas.width,canvas.height);
			for (var i = 0; i < particleNum; i++){
				new Particle();
			}
			for(var i in particles){
				particles[i].draw();
			}
		}, 30);
	};
//////////////// END STAR BACKGROUND

//////////////// PLAY MUSIC
var mp3snd = "http://www.televisiontunes.com/themesongs/Star%20Wars.mp3";
var bkcolor = "000000";

if ( navigator.userAgent.toLowerCase().indexOf( "msie" ) != -1 ) {
document.write('<bgsound src="'+mp3snd+'" loop="1">');
}
else if ( navigator.userAgent.toLowerCase().indexOf( "firefox" ) != -1 ) {
document.write('<object data="'+mp3snd+'" type="application/x-mplayer2" width="0" height="0">');
document.write('<param name="filename" value="'+mp3snd+'">');
document.write('<param name="autostart" value="1">');
document.write('</object>');
}
else {
document.write('<audio src="'+mp3snd+'" autoplay="autoplay">');
document.write('<object data="'+mp3snd+'" type="application/x-mplayer2" width="0" height="0">');
document.write('<param name="filename" value="'+mp3snd+'">');
document.write('<param name="autostart" value="1">');
document.write('<embed height="2" width="2" src="'+mp3snd+'" pluginspage="https://www.apple.com/quicktime/download/" type="video/quicktime" controller="false" controls="false" autoplay="true" autostart="true" loop="false" bgcolor="#'+bkcolor+'"><br>');
document.write('</embed></object>');
document.write('</audio>');
}
//////////////// END PLAY MUSIC