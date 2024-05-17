// import { join } from 'lodash'
import './style.css'
import print from './print';

function component() {
  const element = document.createElement('div') as HTMLDivElement;
  const button = document.createElement('button')

  button.innerHTML = 'Click me'
  button.addEventListener('click', print)

  element.innerHTML = ['Hello', 'webpack'].join('?');
  element.classList.add('hello');

  element.appendChild(button)

  return element;
}

document.body.appendChild(component());