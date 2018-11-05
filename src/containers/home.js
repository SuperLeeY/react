import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider, connect } from 'react-redux';
import 'babel-polyfill';

//中间件
import thunk from 'redux-thunk';
const createStoreWithMW = applyMiddleware(thunk)(createStore);

//reducer
import reducer from '../reducers/home';

//store
const store = createStoreWithMW(reducer);

// //css
import '../css/common';
import '../css/home';

// //component
import Home from '../components/home';

render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.querySelector('#root')
);

