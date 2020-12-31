import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './public-path';

function render(props) {
  let container = document.getElementById('root');
  if (props && props.container) {
    container = props.container.querySelector('#root');
  }
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container,
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('ReactMicroApp bootstrapped');
}

export async function mount(props) {
  console.log('ReactMicroApp mount', props);
  render(props);
}

export async function unmount(props) {
  console.log('ReactMicroApp unmount', props);
  ReactDOM.unmountComponentAtNode(props.container ? props.container.querySelector('#root') : document.getElementById('root'));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();