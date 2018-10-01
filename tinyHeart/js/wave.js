var waveObj = function()
{
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
	this.waveType =[];

}
waveObj.prototype.num = 10;

waveObj.prototype.init = function()
{
	for (var i = 0; i < this.num; i++){
		this.alive[i] = false;
		this.r[i] = 0;
	}
}

waveObj.prototype.draw = function()
{
	ctx1.save();
	ctx1.lineWidth = 2;
	ctx1.shadowBlur = 10;
	ctx1.showColor = 5;
	for(var i = 0; i < this.num; i++){
		// if alive
		if(this.alive[i]){
			if (this.waveType[i] == "blue"){
				// increase radius
				this.r[i] += deltaTime * 0.04;
				//until radius reach 60
				if(this.r[i] > 50){
					this.alive[i] = false;
					break;
				}
				// inverse
				var alpha = 1 - this.r[i] / 50;
				//api
				ctx1.beginPath();
				ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
				ctx1.closePath();
				ctx1.strokeStyle = "rgba(0,191,255," + alpha + ")";

				ctx1.stroke();
				//draw
			}else{
				this.r[i] += deltaTime * 0.04;
				//until radius reach 60
				if(this.r[i] > 50){
					this.alive[i] = false;
					break;
				}
				// inverse
				var alpha = 1 - this.r[i] / 50;
				//api
				ctx1.beginPath();
				ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
				ctx1.closePath();
				ctx1.strokeStyle = "rgba(255,199,115," + alpha + ")";

				ctx1.stroke();
			}

		}
	}
	ctx1.restore();
}

waveObj.prototype.born = function(x, y, waveType)
{
	for(var i = 0; i < this.num; i++){
		if(!this.alive[i]){
			//born
			this.alive[i] = true;
			this.r[i] = 10
			this.x[i] = x;
			this.y[i] = y;
			this.waveType[i] = waveType;
			return;
		}
	}
}