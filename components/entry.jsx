import Root from './root';
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  ReactDOM.render(<Root />, rootElement);
});