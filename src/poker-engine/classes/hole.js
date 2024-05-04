class Hole {
    constructor(size=2) {
        this.meta = {
            length: size,
        }
        this.body = [];
    }

    getHole = () => this.body
    getLength = () => this.meta.length;
    cleanHole = () => {
        this.body = this.body.filter(card => card !== undefined)
    }

    deal(deck, targets) {
        this.body = deck.map((card) => {
            if (targets.indexOf(card.getName()) > -1) return card;
        })
        this.cleanHole()
    }
}

export const createHole = (size=2) => {
    const hole = new Hole(size);
    return hole;
}
