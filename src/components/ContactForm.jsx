import { Component } from 'react'

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(`name: ${this.state.name}`)
    console.log(`email: ${this.state.email}`)
  }

  render() {
    return (
      <>
        <form>
          <input
            type="text"
            name="name"
            placeholder="имя"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={this.handleInputChange}
            required
          />
          <input type="submit" onClick={this.handleSubmit} />
        </form>
      </>
    )
  }
}
