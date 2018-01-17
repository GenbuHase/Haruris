class Haruris {
	static get rootId () { return "Haruris" }
	static get rootSeparateX () { return 12 }
	static get rootSeparateY () { return 20 }



	constructor () {
		const { rootSeparateX, rootSeparateY } = Haruris;

		let rootMaxSize = Math.min(DOM.width, DOM.height);
		let rootWidth = this.rootWidth = rootMaxSize / Math.max(rootSeparateX, rootSeparateY) * rootSeparateX,
			rootHeight = this.rootHeight = rootMaxSize / Math.max(rootSeparateX, rootSeparateY) * rootSeparateY;

		let root = this.root = new DOM("Canvas", {
			id: Haruris.rootId,

			attributes: {
				Width: rootWidth,
				Height: rootHeight
			}
		});	document.body.appendChild(root);

		let ctx = this.ctx = root.getContext("2d");



		this.init();
	}

	init () {
		let ctx = this.ctx;
			for (let x = 0; x <= Haruris.rootSeparateX; x++) {
				ctx.beginPath();
				ctx.moveTo(this.rootWidth / Haruris.rootSeparateX * x, 0);
				ctx.lineTo(this.rootWidth / Haruris.rootSeparateX * x, this.rootHeight);
				ctx.closePath();

				ctx.stroke();
			}

			for (let y = 0; y <= Haruris.rootSeparateY; y++) {
				ctx.beginPath();
				ctx.moveTo(0, this.rootHeight / Haruris.rootSeparateY * y);
				ctx.lineTo(this.rootWidth, this.rootHeight / Haruris.rootSeparateY * y);
				ctx.closePath();

				ctx.stroke();
			}
	}
}