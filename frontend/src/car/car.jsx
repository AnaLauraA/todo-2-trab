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

        this.handleChangeMarca = this.handleChangeMarca.bind(this)
        this.handleChangeModelo = this.handleChangeModelo.bind(this)
        this.handleChangeAno = this.handleChangeAno.bind(this)
        this.handleChangeFlex = this.handleChangeFlex.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.Search = this.handleSearch.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.refresh()
    }
    refresh(description = '') {
        const search = marca ? `&description__regex=/${marca}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({
                ...this.state, marca, list:
                    resp.data
            }))
    } F
    handleSearch() {
        this.refresh(this.state.marca)
        this.refresh(this.state.modelo)
        this.refresh(this.state.ano)
        this.refresh(this.state.marca)
    }
    handleRemove(car) {
        axios
            .delete(`${URL}/${car._id}`)
            .then(resp => this.refresh())
    }
    handleMarkAsDone(car) {
        axios
            .put(`${URL}/${car._id}`, { ...car, done: true })
            .then(resp => this.refresh())
    }
    handleMarkAsPending(car) {
        axios
            .put(`${URL}/${car._id}`, { ...car, done: false })
            .then(resp => this.refresh())
    }
    handleChangeMarca(e) {
        this.setState({ ...this.state, marca: e.target.value })

    }
    handleChangeModelo(e) {
        this.setState({ ...this.state, modelo: e.target.value })

    }
    handleChangeAno(e) {
        this.setState({ ...this.state, ano: e.target.value })

    }
    handleChangeFlex(e) {
        this.setState({ ...this.state, flex: e.target.value })

    }

    handleAdd() {
        const marca = this.state.marca
        const modelo = this.state.modelo
        const ano = this.state.ano
        const flex = this.state.flex
        axios.post(URL, { marca, modelo, ano, flex })
            .then(resp => this.refresh());
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

                    handleChangeMarca={this.handleChangeMarca}
                    handleChangeModelo={this.handleChangeModelo}
                    handleChangeAno={this.handleChangeAno}
                    handleChangeFlex={this.handleChangeFlex}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch} />
                <CarList
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
}