import { createStore, combineReducers }from 'redux';
import { counterReducer, SidebarReducer } from '../Reducers/Index';
import { composeEnhancers } from '../window';

const store = createStore(combineReducers({
    counter: counterReducer,
    sidebar: SidebarReducer
}), composeEnhancers()
)

export default store
