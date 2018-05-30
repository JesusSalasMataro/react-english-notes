import React, { Component } from 'react'
import './App.css'
import TranslationsList from './components/TranslationsList'
import TranslationsForm from './components/TranslationsForm'
import { Title } from './components/Title'
import NavigatorStorage from './repository/NavigatorStorage';

export default class App extends Component {

    state = {
        translations: []
    }

    reloadTranslations = () => {
        const repository = new NavigatorStorage()

        this.setState({
            translations: repository.loadTranslations()
        })        
    }

    componentDidMount() {
        const repository = new NavigatorStorage()

        this.setState({
            translations: repository.loadTranslations()
        })
    }

    render() {
        return (
            <div>
                <Title>English notes</Title>
                <TranslationsForm reloadTranslations={this.reloadTranslations} />
                <TranslationsList translations={this.state.translations} />
            </div>
        )
    }

}

