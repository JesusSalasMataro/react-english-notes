export default class Entry {
    constructor() {
        this.key = {
            entry: '',
            type: ''
        }
        this.synonims = []
        this.translation = ''
    }

    serialize() {
        return JSON.stringify(this)
    }

    getKey() {
        return this.key
    }

    setKey(key) {
        this.key = key
    }

    getSynonims() {
        return this.synonims
    }

    setSynonims(synonims) {
        this.synonims = synonims
    }

    getTranslation() {
        return this.translation
    }

    setTranslation(translation) {
        this.translation = translation
    }
}
