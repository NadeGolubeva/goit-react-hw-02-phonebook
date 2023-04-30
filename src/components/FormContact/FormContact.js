import PropTypes from 'prop-types';
import { Component } from 'react';

export class FormContact extends Component {
  state = {
    name: '',
    number: '',
  };
  onChangeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.onSave(this.state);
          }}
        >
          <label name="name">
            Name
            <input name="name" onChange={this.onChangeInput} />
          </label>
          <label name="number">
            Number
            <input name="number" onChange={this.onChangeInput} />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

FormContact.propTypes = {
  onSave: PropTypes.string.isRequired,
};
