import { createStore } from 'redux';
import { reducer } from '../store/reducers/reducer_1';

const store = createStore(reducer);

export default store;