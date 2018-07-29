import React, { Component } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../common/App';

const app = document.getElementById('app');

hydrate(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    app
)
