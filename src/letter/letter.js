import React from 'react';
import classNames from 'classnames';

import './letter.css';

const Letter = ( { text, status } ) => (
    <div className={ classNames({
        letter: true,
        'is-right': status === 'right',
        'is-wrong': status === 'wrong',
        'is-active': status === 'active'
    }) }>
        { text }
    </div>
);

export default Letter;