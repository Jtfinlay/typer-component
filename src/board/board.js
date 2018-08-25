import React, { Component } from 'react';
import Letter from '../letter';

import './board.css';

class Board extends Component {

    constructor(props) {
        super(props);

        this.bound_onKeyDown = this.handleKeyboardEvent.bind(this);
    }

    componentDidMount() {
        window.addEventListener('keydown', this.bound_onKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.bound_onKeyDown);
    }

    render() {
        return (
            <div className='board'>
                {this.props.letters.map(letter => 
                    <Letter
                        key={letter.id}
                        text={letter.text}
                        status={letter.status}
                    />
                )}
            </div>
        );
    }

    handleKeyboardEvent(event) {
        if (event.key.length === 1 && /^[a-zA-Z]*$/.test(event.key)) {
            this.props.keyPressed(event.key);
        }
    }
}

export default Board;