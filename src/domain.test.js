import React from 'react'
import ReactDOM from 'react-dom'
import Diccionario from './domain/Diccionario'
import Entrada from './domain/Entrada'

describe('dado un diccionario', () => {
    const _crearDiccionario = () => {
        const d = new Diccionario()
        
        let entrada = new Entrada()
        entrada.entrada.clave = 'car'
        entrada.traduccion = 'coche'
        d.anadirEntrada(entrada)
    
        entrada = new Entrada()
        entrada.entrada.clave = 'window'
        entrada.traduccion = 'ventana'
        d.anadirEntrada(entrada)
    
        return d
    }

    const _diccionario = _crearDiccionario()

    it('devuelve una entrada dada una clave', () => {
        const entrada = _diccionario.getEntrada('window')
        assert.equal('ventana', entrada.traduccion)
    })
       
})







