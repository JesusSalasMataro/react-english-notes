import Dictionary from "../domain/Dictionary";

export default class NavigatorStorage {
    
    loadTranslations() {
        const dictionary = new Dictionary()
        Object.keys(localStorage )
            .forEach(k => dictionary.addEntry(localStorage.getItem(k)))
        
        return dictionary.getEntries()
    }

    saveTranslation(entry) {
        const key = JSON.stringify(entry.key)
        const value = JSON.stringify(entry)
        localStorage.setItem(key, value)
    }

    loadTranslation(key) {
        return localStorage.getItem(JSON.stringify(key))
    }

}