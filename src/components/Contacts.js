import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "jdoe@gmail.com",
                phone: "555-555-5555"
            },
            {
                id: 2,
                name: "Marco Polo",
                email: "mpolo@gmail.com",
                phone: "666-666-6666"
            },
            {
                id: 3,
                name: "Tom Riddle",
                email: "triddle@gmail.com",
                phone: "777-777-7777"
            }
        ]
    }

    render() {
        const { contacts } = this.state
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default Contacts