import React, { Component } from 'react'
import './translationsList.css'

export default class TranslationsList extends Component {
    
    render() {
        function checkType(entry) {
            return entry.key.type === 'translation'
        }

        const translations = this.props.translations
            .filter(checkType)
            .map(t =>
                <p key={t.key.entry}>
                    <span className="column">
                        <b>Entry:</b> {t.key.entry}
                    </span>
                    <span className="column">
                        <b>Translation:</b> {t.translation}
                    </span>
                </p>
        )

        return (
            <div>
                <h4>Translations list</h4>
                {translations}
            </div>
        )
    }
}