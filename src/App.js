import React, { Component } from 'react';
import ListContacts from './ListContacts'



// class ContactList extends React.Component {
//   render() {
//     const people = this.props.contacts;
//     // return <div> Hello World </div>

//     return <ol>
//       {people.map(person => (
//         <li key={person.id}>{person.name}</li>
//       ))}
//     </ol>
//   }
// }

class App extends Component {
  state = {
    contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }
  removeContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter(c => c.id !== contact.id)
    }))
  }
  render() {
    return (
      <div>
       <ListContacts 
          onDeleteContact={this.removeContact} 
          contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
