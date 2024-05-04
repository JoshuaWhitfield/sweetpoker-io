class Cache {
    constructor(size = undefined) {
        this.body = [];
        this.size = size;
    };

    add = (elem) => {
        if (this.size === undefined || (this.size !== undefined && this.body.length <= this.size)) {
            this.body.push(elem)
        }
    }
    hasIndex(index) {
        if (typeof(this.body[index]) === undefined) return false
        return true;
    }
    getIndex(index) {
        if (!this.hasIndex(index)) return;
        return this.body[index];
    }
    has(elem) {
        if (this.body.indexOf(elem) > -1) return true;
        return false
    }

    getBody = () => this.body;
    reset = () => { this.body = [] };
}

export const createCache = (size = undefined) => {
    return new Cache(size)
}