import React, { Component } from 'react'

const Context = React.createContext()

export class Provider extends Component {
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
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer