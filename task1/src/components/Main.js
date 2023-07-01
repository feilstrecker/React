import { React, Component } from "react";
import './Main.css'
import Form from './Form'
import Tarefas from './Tarefas'

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: []
  }

  componentDidMount() {
    let tarefas = JSON.parse(localStorage.getItem('tarefas'))
    
    if(!tarefas) {
      tarefas = [
        'Beber água',
        'Aprender React',
        'Fazer café'
      ]
    }
    this.setState({
      tarefas
    })
  }


  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state
    console.log(tarefas === prevState.tarefas)
    if(tarefas === prevState.tarefas) return 

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { novaTarefa } = this.state
    const { tarefas } = this.state
    const indice = tarefas.findIndex((tarefa) => tarefa === novaTarefa)
    if(indice === -1 && novaTarefa !== '') {
      tarefas.push(novaTarefa)
      document.querySelector('input').value = ''
      this.setState({
        tarefas: [...tarefas]
      })
    }
    
  }

  handleEdit = (e) => {
    const toEdit = e.target.closest('li')
    document.querySelector('input').value = toEdit.innerText
    this.setState({
      novaTarefa: toEdit.innerText
    })
    this.handleDelete(e)
  }

  handleDelete = (e) => {
    const { tarefas } = this.state
    const toDelete = e.target.closest('li')
    
    const indice = tarefas.findIndex((tarefa) => tarefa === toDelete.innerText)

    tarefas.splice(indice, 1)

    this.setState({
      tarefas: [...tarefas]
    })
  }


  render() {
    const { tarefas } = this.state
    return (
      <div className="main">
        <Form 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}
