import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './reducers/index';

import {createStore} from 'redux'; 
import {Provider} from 'react-redux'

// Lets import an action
import {addCharacterById} from './actions/index';

// Create a redux store 
const store = createStore(rootReducer);

/*
    Adds a change listener. It will be called any time an action is dispatched, 
    and some part of the state tree may potentially have changed. You may then 
    call getState() to read the current state tree inside the callback.
*/
store.subscribe( () => console.log('Subscribe Called', store.getState()));

/*
    Dispatches an action. This is the only way to trigger a state change.
*/
store.dispatch(addCharacterById(2));

ReactDOM.render(
<Provider store = {store}>
    <App/>
</Provider>
,document.getElementById('root'));