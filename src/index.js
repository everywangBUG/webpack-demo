import { join } from 'lodash'
import './style.css'
import print from './print';

function component() {
  const element = document.createElement('div');
  const button = document.createElement('button')

  button.innerHTML = 'Click me'
  button.addEventListener('click', print)

  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  element.appendChild(button)

  return element;
}

document.body.appendChild(component());