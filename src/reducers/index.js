import { KEY_PRESSED } from '../constants/actionTypes';

const word = (state = [], action) => {
    switch (action.type) {
        case KEY_PRESSED: {
            const currentLetter = state.find(letter => letter.status === undefined);

            if (!currentLetter) {
                // completed lesson
                return state;
            }

            return state.map(letter =>
                (letter.id === currentLetter.id)
                    ? {
                        ...letter,
                        status: (action.key === letter.text) ? 'right' : 'wrong'
                    } : letter);
        }
        default:
            return state;
    }
}

export default word;