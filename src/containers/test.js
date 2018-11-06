import React, { Component } from 'react';
import { render } from 'react-dom';

//css
import '../css/common';
import '../css/test';

render(
    <h2>Hello React!</h2>,
    document.querySelector('#root')
);