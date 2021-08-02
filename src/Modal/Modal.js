
import React from 'react'

import './Modal.css'

export default class Modal extends React.Component {

	state = {
		isOpen: false
	}

	render() {
		return (
			<React.Fragment>

				<button onClick={() => this.setState({ isOpen: true })} style={{ marginBottom: '10px' }}>Open modal</button>

				{this.state.isOpen && (
					< div className='modal'>
						<div className='modal-body'>
							<h1>Modal</h1>
							<p>**text**</p>
							<button onClick={() => this.setState({ isOpen: false })}>Close modal</button>
						</div>
					</div>)}

			</React.Fragment >
		)
	}
}