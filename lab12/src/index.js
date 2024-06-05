import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>hello world</h1>
    <ClassComponent/>
    <FunctionComponent/>
  </>
);