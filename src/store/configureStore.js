import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

let middlewares = [];

const isProd = process.env.NODE_ENV === 'production';

if (!isProd) {
    middlewares = [ ...middlewares, logger ]
}

const createStoreWithMiddlewares = applyMiddleware(
    ...middlewares
)( createStore );

export default function configureStore(initialState) {
    return createStoreWithMiddlewares(
        a => a, 
        initialState,
        (!isProd && window.devToolsExtension) ? window.devToolsExtension() : f => f
    );
}