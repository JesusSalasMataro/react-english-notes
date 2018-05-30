export default class Dictionary {
    constructor() {
        this.entries = []
    }

    getEntries() {
        return this.entries
    }

    getEntry(key) {
        return this.entries.find((e) => e.entry.key.entry === key)
    }

    addEntry(entry) {
        entry = JSON.parse(entry)
        this.entries.push(entry)
    }

    removeEntry(key) {
        this.entries = this.entries.filter((e) => e.entry.key.entry !== key)     
    }
}

