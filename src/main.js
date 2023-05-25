import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const passwordButton = document.querySelector('button');
const displayPassword = document.querySelector('h2');

passwordButton.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPassword.innerHTML = randomPassword;
});

displayPassword.addEventListener('click', () => {
  copy(displayPassword.innerHTML);
  alert('Copiou a senha!');
});
