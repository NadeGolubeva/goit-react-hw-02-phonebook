import PropTypes from 'prop-types';
import { Component } from 'react';
// import { Formik } from 'formik';
import { Label, Btn, Input } from './FormContact.styled';

export class FormContact extends Component {
  state = {
    name: '',
    number: '',
  };
  onChangeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.addContact(this.state);
            this.setState({ name: '', number: '' });
          }}
        >
          <Label name="name">
            Name
            <Input
              type="text"
              name="name"
              onChange={this.onChangeInput}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              required
            />
          </Label>{' '}
          <br />
          <Label name="number">
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.onChangeInput}
              value={this.state.number}
              required
            />
          </Label>
          <br />
          <Btn type="submit">Add contact</Btn>
        </form>
      </>
    );
  }
}

FormContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};
