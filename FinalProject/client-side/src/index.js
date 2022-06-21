import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {signInUpReducer} from './Redux/Reducers/signInUpReducer.js';
import {caloriesReducer} from './Redux/Reducers/caloriesReducer.js';
import {recipesReducer} from './Redux/Reducers/recipesReducer.js';
import {calendarReducer} from './Redux/Reducers/calendarReducer.js';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({signInUpReducer, caloriesReducer, recipesReducer, calendarReducer});
const store = createStore(rootReducer, applyMiddleware(thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
