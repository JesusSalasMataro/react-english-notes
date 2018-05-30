import React, { Component } from 'react'
import NavigatorStorage from '../repository/NavigatorStorage';
import Entry from '../domain/Entry';

export default class TranslationsForm extends Component {

    state = {
        word: '',
        option: 'translation',
        translation: ''
    }

    updateWord = (event) => {
        this.setState({
            word: event.target.value
        })
    }

    updateTranslation = (event) => {
        this.setState({
            translation: event.target.value
        })
    }

    save = () => {
        const repository = new NavigatorStorage()

        if (this.state.option === 'translation') {
            const entry = new Entry()
            entry.setKey({
                entry: this.state.word,
                type: 'translation'
            })
            entry.setTranslation(this.state.translation)
            repository.saveTranslation(entry)
            this.resetState()
            this.props.reloadTranslations()
        }
    }

    resetState = () => {
        this.setState({
            word: '',
            translation: ''
        })        
    }

    render() {

        return (
            <div>
                <p>
                    <button>Translation</button>
                </p>
                <p>
                    <input type="text" placeholder="Word..." onBlur={this.updateWord} />
                    <input type="text" placeholder="Translation..." onBlur={this.updateTranslation} />
                </p>
                <p>
                    <button onClick={this.save}>Save</button>
                    <button onClick={this.delete}>Delete</button>
                </p>
            </div>
        )
    }
}