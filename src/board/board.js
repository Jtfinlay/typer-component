import React, { Component } from 'react';
import Letter from '../letter';

import './board.css';

class Board extends Component {

    render() {
        const chars = [
            { id: '0', text: 'h', status: 'right' },
            { id: '1', text: 'e', status: 'wrong' },
            { id: '2', text: 'l', status: 'right' },
            { id: '3', text: 'l', status: 'active' },
            { id: '4', text: 'o' }
        ];

        return (
            <div className='board'>
                {chars.map(letter => 
                    <Letter
                        key={letter.id}
                        text={letter.text}
                        status={letter.status}
                    />
                )}
            </div>
        );
    }
}

export default Board;