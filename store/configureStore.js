import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import movieReducer from '../reducers/movieReducer';

const configureStore = () => {
    return createStore(
        movieReducer,
        applyMiddleware(thunkMiddleware)
    );
};

export default configureStore;