class Haruris {
	static get rootId () { return "Haruris" };

	constructor () {
		this.cvs = new DOM("Canvas", { id: Haruris.rootId });
		this.cvsSize = Math.min(DOM.width, DOM.height);

		document.body.appendChild(this.cvs);
	}

	get cvsSize () { return this.cvs.getAttribute("Width") || this.cvs.getAttribute("Height") }
	set cvsSize (size = 0) {
		this.cvs.applyProperties({
			attributes: {
				Width: size,
				height: size
			}
		});
	}
}