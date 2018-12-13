var Celebs=[]
var Hit=[]

function preload(){
	Celebs[0]=loadImage('D-Wayne.jpg')
	Celebs[1]=loadImage('AnneNottheway.jpg')
	Celebs[2]=loadImage('JimmyFallin.jpg')
	Celebs[3]=loadImage('Lavatoot.jpg')
	Celebs[4]=loadImage('Ma-tea-oo.jpg')
	Celebs[5]=loadImage('KimCrydashian.jpg')
	Hit[0]=loadImage('Pow.jpg')
	Hit[1]=loadImage('Bam.jpg')
	Hit[2]=loadImage('Zonk.png')
	Hit[3]=loadImage('Bang.png')

}

function setup(){
	createCanvas(windowWidth,windowHeight)
	background(random(255),random(255),random(255))
	
	text(["CLICK THROUGH"],300,300)
	
	for(var i=0; i<Celebs.length; i++){
		Celebs[i].resize(200,0)
	}
	for(var i=0; i<Hit.length;i++){
		Hit[i].resize(100,0)
	}
}

function mouseClicked(){
	background(random(255),random(255),random(255))
	image(random(Celebs),500+random(400),200+random(100))
	image(random(Celebs),700-random(400),200+random(100))
	image(random(Hit),600+random(300),100+random(100))
	image(random(Hit),800+random(100),100+random(500))
	image(random(Hit),200+random(700),100+random(100))
}
