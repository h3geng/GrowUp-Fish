var can1;
var can2;

var canWidth;
var canHeight;

var ctx1;
var ctx2;

var lastTime;		
var deltaTime;			//time between two frame

var bgPic = new Image();		//background pic

var ane;               //anemone var
var fruit; 				// food

var mom; 				//big fish
var baby;				//baby fish

var mx;					// mouse x
var my;					// mouse y


// baby information
var babyTail = [];
var babyEye = [];	
var babyBody = [];	

// mom informtion
var momTail = [];
var momEye = [];
var momBodyOrange = [];
var momBodyBlue = [];

//data
var data;

// wave;
var wave;
var halo;

var dust;
var dustpic = [];

document.body.onload = game;

// music
var bgMusic;
var bigFishEat;
var smallFishEnergy;
var gameOver;


// game start
function game()
{
	init();
	bgMusic.play();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

// game init
function init()
{
	//access canvas context
	can1 = document.getElementById("canvas1"); //fishes, dust, UI, circle
	ctx1 = can1.getContext('2d');				// get pen
	can2 = document.getElementById("canvas2"); // background, 
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove', onMouseMove, false);

	bgPic.src = "./src/background.jpg"
	canWidth = can1.width;
	canHeight = can1.height;

	//create ane instance
	ane = new aneObj;
	ane.init()

	//create foods
	fruit = new fruitObj;
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	// load img for baby
	for (var i = 0; i < 8; i++){
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail" + i + ".png";
	}

	for (var i = 0; i < 2; i++){
		babyEye[i] = new Image();
		babyEye[i].src = "./src/babyEye" + i + ".png";    //here was bug
	}

	for (var i = 0; i < 20; i++){
		babyBody[i] = new Image();
		babyBody[i].src = "./src/babyFade" + i + ".png";  //here was bug
	}

	// load img for mom
	for (var i = 0; i < 8; i++){
		momTail[i] = new Image();
		momTail[i].src = "./src/bigTail" + i + ".png";  
	}

	for (var i = 0; i < 2; i++){
		momEye[i] = new Image();
		momEye[i].src = "./src/babyEye" + i + ".png";
	}

	for (var i = 0; i < 8; i++){
		momBodyOrange[i] = new Image();
		momBodyBlue[i] = new Image();
		momBodyOrange[i].src = "./src/bigSwim" + i + ".png";		//was bug
		momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";
	}

	// data
	data = new dataObj();

	ctx1.font = "30px Verdana";
	ctx1.textAlign = "center";  					//left, center, right

	wave = new waveObj();
	wave.init();

	halo = new haloObj();
	halo.init();

	//dust
	for(var i = 0; i < 7; i++){
		dustpic[i] = new Image();
		dustpic[i].src = "./src/dust" + i + ".png";
	}
	dust = new dustObj();
	dust.init();

	//bg music
	bgMusic = document.createElement("audio");
	bgMusic.src = "./src/fishBg.mp3";

	//big fish eat
	bigFishEat = document.createElement("audio");
	bigFishEat.src = "./src/bigFishEat.mp3";

	//small fish energy
	smallFishEnergy = document.createElement("audio");
	smallFishEnergy.src = "./src/smallFishEnergy.wav";

	gameOver = document.createElement("audio");
	gameOver.src = "./src/gameOver.mp3";

}

function gameloop()
{
	// loop inorder to have animation
	//console.log("111111")
	window.requestAnimFrame(gameloop); //setInterval, setTimeout
	//console.log("loop");
	var now = Date.now();
	deltaTime = now - lastTime;
	if (deltaTime > 40) deltaTime = 40;
	lastTime = now;
	//console.log(deltaTime);
	drawBackground();

	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
	baby.draw();
	momFruitsCollision();
	momBabyCollision();

	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
	if(bgMusic.currentTime > 103){
		bgMusic.currentTime = 0;
		bgMusic.play();
	}
}

function onMouseMove(e)
{
	if(!data.gameOver){
		if (e.offSetX || e.layerX){
			mx = e.offSetX == undefined? e.layerX : e.offSetX;
			my = e.offSetY == undefined? e.layerY : e.offSetY;
		}
	}
}






