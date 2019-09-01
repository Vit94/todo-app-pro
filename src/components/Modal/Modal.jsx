import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.openModal = this.openModal.bind(this)
    }

    state = {
        isOpened: false
    }

    openModal() {
        this.setState(prevState => {
            return {isOpened: !prevState.isOpened}
        })
    }
    render() {
        return(
            <React.Fragment>
                <button onClick={this.openModal}>Open modal</button>
                {this.state.isOpened && <div className="modal">
                    <div className="modal-body">
                        <h1>Modal title</h1>
                        <p>I am awesome modal</p>
                        <button onClick={this.openModal}>Close modal</button>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}