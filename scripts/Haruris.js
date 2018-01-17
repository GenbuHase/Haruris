class Haruris {
	static get rootId () { return "Haruris" };



	constructor () {
		let rootSize = this.rootSize = Math.min(DOM.width, DOM.height);

		let root = this.root = new DOM("Canvas", {
			id: Haruris.rootId,

			attributes: {
				Width: rootSize,
				Height: rootSize
			}
		});	document.body.appendChild(root);

		let ctx = this.ctx = root.getContext("2d");
	}
}