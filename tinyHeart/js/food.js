var fruitObj = function()
{
	this.alive = []; // bool
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
	this.aneNum = [];
	this.difficult = 0
}

fruitObj.prototype.num = 30;

fruitObj.prototype.init = function()
{
	for(var i = 0; i < this.num; i++)
	{
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random() * 0.01 + 0.005; //(0.005,0.015) make sure the food are not static 
		this.fruitType[i] = "";        // it was bug []
		this.aneNum[i] = 0;
		//this.born(i);
	}

	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
}

fruitObj.prototype.dead = function(i)
{
	this.alive[i] = false;
}

fruitObj.prototype.draw = function()
{
	for(var i = 0; i < this.num; i++)
	{
		//draw
		//find an ane, grow, fly
		// foods grow
		if (this.alive[i]){
			if(this.fruitType[i] == "blue"){
				var pic = this.blue;
			}else{
				var pic = this.orange;
			}

			if (this.l[i] <= 14){
				this.l[i] += this.spd[i] * deltaTime;
				this.x[i] = ane.headx[this.aneNum[i]];
				this.y[i] = ane.heady[this.aneNum[i]];
			}else{
				// foods float
				this.y[i] -= this.spd[i] * 5 * this.difficult * 0.03;
			}
			ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
			if (this.y[i] < 10)
			{
				this.alive[i] = false
			}
		}
	}
}
fruitObj.prototype.born = function(i)
{
	this.difficult += deltaTime * 1;
	//where the food should born
	var aneId = Math.floor(Math.random() * ane.num);
	this.aneNum[i] = aneId;
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if(ran < 0.2){
		this.fruitType[i] =  "blue";//orange blue
	}else{
		this.fruitType[i] = "orange"//orange blue
	}
}

// see how many foods we have
function fruitMonitor()
{
	var num = 0;
	for(var i = 0; i < fruit.num; i++){
		if (fruit.alive[i]) num++
	}
	if(num < 15){
		// create new food
		sendFruit()
		return;
	}
}

function sendFruit()
{
	for(var i = 0; i < fruit.num; i++){
		if(!fruit.alive[i]){
			fruit.born(i)
			return;
		}
	}
}






