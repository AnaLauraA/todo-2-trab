import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import CarList from './carList'
import CarForm from './carForm'
/*export default class Todo extends Component {
    render() {
        return (
            /*<div>
                <h1>Todo</h1>
            </div>*/
/*
        <div>
            <PageHeader titulo='Tarefas' subtitulo='Cadastro'></PageHeader>
            <TodoForm />
            <TodoList />
        </div>
    )
}
}*/
/*export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd() {
        console.log("Evento funcionou")
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}*/
/*export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { marca: '', list: [] }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleChange(e) {
        this.setState({ ...this.state, marca: e.target.value })
    }
    handleAdd() {
        console.log("Descrição" + this.state.marca)
    }
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm marca={this.state.marca}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}*/

import axios from 'axios'
const URL = 'http://localhost:3003/api/cars'
export default class Car extends Component {
    constructor(props) {
        super(props)
        this.state = { marca: '', modelo: '', ano: '', flex: '', list: [] }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleChange(e) {
        this.setState({ ...this.state, marca: e.target.value })
        this.setState({ ...this.state, modelo: e.target.value })
        this.setState({ ...this.state, ano: e.target.value })
        this.setState({ ...this.state, flex: e.target.value })
        
    }
    handleAdd() {
        const marca = this.state.marca
        const modelo = this.state.modelo
        const ano = this.state.ano
        const flex = this.state.flex
        axios.post(URL, { marca, modelo, ano, flex })
            .then(resp => console.log('Funcionou!'))
    }
    
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <CarForm 
                    marca={this.state.marca}
                    modelo={this.state.modelo}
                    ano={this.state.ano}
                    flex={this.state.flex}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <CarList />
            </div>
        )
    }
}