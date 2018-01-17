class Block {
	static get defaultSize () { return 16 }



	constructor (ctx, blockSize = Block.defaultSize) {
		this.ctx = ctx,
		this.width = this.height = blockSize;
	}
}