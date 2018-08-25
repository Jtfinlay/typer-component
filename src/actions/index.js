import { KEY_PRESSED } from '../constants/actionTypes';

export const keyPressed = key => ({
    type: KEY_PRESSED,
    key
});