var momObj = function()
{
	this.x;
	this.y;
	this.angle;

	// mom tail
	this.momTailTimer = 0;
	this.momTailCount = 0;

	// mom eyes
	this.momEyeTimer = 0;
	this.momEyeInterval = 800;
	this.momEyeCount = 0;

	//mom body
	this.momBodyCount = 0;

}

momObj.prototype.init = function()
{
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;


}

momObj.prototype.draw = function()
{
	//mom tail
	this.momTailTimer += deltaTime;
	if (this.momTailTimer > 50){
		this.momTailCount = (this.momTailCount + 1) % 8;	//[0,8]
		this.momTailTimer %= 50;						// was
	}

	// mom eyes
	this.momEyeTimer += deltaTime;
	if (this.momEyeTimer > this.momEyeInterval){
		this.momEyeCount = (this.momEyeCount + 1) % 2;     // [0,2]	was bug
		this.momEyeTimer %= this.momEyeInterval;
		if (this.momEyeCount == 1){
			this.momEyeInterval = 150;
		}else{
			this.momEyeInterval = Math.random() * 1500 + 2000;
		}
	}

	//lerp x,y
	this.x = lerpDistance(mx, this.x, 0.98);
	this.y = lerpDistance(my, this.y, 0.98);

	//delta angle
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI//rad

	//access angle
	this.angle = lerpAngle(beta, this.angle, 0.6);

	// rotate canvas
	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	var tailCount = this.momTailCount;
	ctx1.drawImage(momTail[tailCount], -momTail[tailCount].width * 0.5 + 30, -momTail[tailCount].height * 0.5);
	var momBodyCount = this.momBodyCount;
	//blue or orange
	if(data.double == 1){
		ctx1.drawImage(momBodyOrange[momBodyCount], -momBodyOrange[momBodyCount].width * 0.5, -momBodyOrange[momBodyCount].height * 0.5);
	}else{
		ctx1.drawImage(momBodyBlue[momBodyCount], -momBodyBlue[momBodyCount].width * 0.5, -momBodyBlue[momBodyCount].height * 0.5);
	}

	var eyesCount = this.momEyeCount;
	ctx1.drawImage(momEye[eyesCount], -momEye[eyesCount].width * 0.5, -momEye[eyesCount].height * 0.5);

	ctx1.restore();
}