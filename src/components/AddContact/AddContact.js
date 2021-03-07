import React, { Component } from 'react';
// import styles from '../AddContact/AddContact.module.css';
// import PropTypes from 'prop-types';
import shortid from 'shortid';
class AddContact extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();
  handleChange = e => {
    const { name, number, value } = e.currentTarget;
    this.setState({
      [name]: value,
      [number]: value,
    });
  };
  handleSubmit = e => {
    e.preventSefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  addContact = name => {
    const contact = {
      id: shortid.generate(),
      name,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          ></input>
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          ></input>
        </label>
        <button type="submit" onSubmit={this.addContact}>
          Add contact
        </button>
      </form>
    );
  }
}

export default AddContact;
