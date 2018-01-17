class Block {
	static get defaultSize () { return 16 }



	constructor (ctx, blockSize = Block.defaultSize) {
		this.ctx = ctx,
		this.width = this.height = blockSize;
	}

	get textureUrl () { return this._textureUrl }
	set textureUrl (url = "") {
		this._textureUrl = url;

		let texture = this.texture = new Image();
			texture.src = url;
	}

	draw (x = 0, y = 0) {
		let ctx = this.ctx;
			ctx.drawImage(this.texture, x, y, this.width, this.height);
	}
}