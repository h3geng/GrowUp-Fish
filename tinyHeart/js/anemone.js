var aneObj = function()
{
	//start point. control points, end points(sin)
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = [];
	this.alpha = 0;

}
aneObj.prototype.num = 50;

aneObj.prototype.init = function()
{
	// go though each anemone
	for (var i = 0; i < this.num; i++) 
	{
		//set each ane x and height
		this.rootx[i] = i * 16 + Math.random() * 20;    //Bug was here
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 170 + Math.random() * 50;
		this.amp[i] = Math.random() * 40 + 30; 
	}

}

aneObj.prototype.draw = function()
{
	this.alpha += deltaTime * 0.001;
	var l = Math.sin(this.alpha);		// [-1,1]
	ctx2.save();
	ctx2.globalAlpha = 0.5;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	for (var i = 0; i < this.num; i++)
	{
		//beginPath, moveTo, lineTo, stroke, strokeStyle, linewidth, lineCap, globalAlpha
		if (i < 7){
			ctx2.strokeStyle = "#3b154e";
			ctx2.beginPath();
			ctx2.moveTo(this.rootx[i], canHeight);
			this.headx[i] = this.rootx[i] + l * this.amp[i];
			ctx2.quadraticCurveTo(this.rootx[i], canHeight - 90, this.headx[i], this.heady[i]);
			ctx2.stroke();
		}else if (i < 15){
			ctx2.strokeStyle = "plum";
			ctx2.beginPath();
			ctx2.moveTo(this.rootx[i], canHeight);
			this.headx[i] = this.rootx[i] + l * this.amp[i];
			ctx2.quadraticCurveTo(this.rootx[i], canHeight - 90, this.headx[i], this.heady[i]);
			ctx2.stroke();
		}else if (i < 24){
			ctx2.strokeStyle = "slateblue";
			ctx2.beginPath();
			ctx2.moveTo(this.rootx[i], canHeight);
			this.headx[i] = this.rootx[i] + l * this.amp[i];
			ctx2.quadraticCurveTo(this.rootx[i], canHeight - 90, this.headx[i], this.heady[i]);
			ctx2.stroke();
		}else if (i < 33){
			ctx2.strokeStyle = "#3b154e";
			ctx2.beginPath();
			ctx2.moveTo(this.rootx[i], canHeight);
			this.headx[i] = this.rootx[i] + l * this.amp[i];
			ctx2.quadraticCurveTo(this.rootx[i], canHeight - 90, this.headx[i], this.heady[i]);
			ctx2.stroke();
		}else if (i < 42){
			ctx2.strokeStyle = "slateblue";
			ctx2.beginPath();
			ctx2.moveTo(this.rootx[i], canHeight);
			this.headx[i] = this.rootx[i] + l * this.amp[i];
			ctx2.quadraticCurveTo(this.rootx[i], canHeight - 90, this.headx[i], this.heady[i]);
			ctx2.stroke();
		}else{
			ctx2.strokeStyle = "plum";
			ctx2.beginPath();
			ctx2.moveTo(this.rootx[i], canHeight);
			this.headx[i] = this.rootx[i] + l * this.amp[i];
			ctx2.quadraticCurveTo(this.rootx[i], canHeight - 90, this.headx[i], this.heady[i]);
			ctx2.stroke();
		}
	}
	ctx2.restore();
}