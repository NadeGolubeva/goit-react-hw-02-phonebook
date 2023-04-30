import React, { Component } from 'react';
import { FormContact } from './FormContact/FormContact';
import { ContactsDatas } from './Contacts/Contacts';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '111-11-11' },
      { id: nanoid(), name: 'Hermione Kline', number: '222-22-22' },
      { id: nanoid(), name: 'Eden Clements', number: '333-33-33' },
      { id: nanoid(), name: 'Annie Copeland', number: '444-44-44' },
    ],
    filter: '',
  }

  addContact = ({ name, number }) => {
  if (this.state.contacts.some(
    value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  ))
  {
    alert(`${name} is already in contacts`);
  } else {
  
    this.setState(prevState => {
      const list = [...prevState.contacts];
      list.push({
        id: nanoid(), 
        name: name,
        number: number,
      });
      return { contacts: list };
    })
    }
    // )   //--
  }
  render() {
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 24,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <FormContact onSave={this.addContact}
          
        />
        <br />
        <h2>Contacts</h2>
          <ContactsDatas contactsInfo={this.state.contacts}/>
      
      </div>
    );
  }
};
