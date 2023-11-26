'use strict';

// // Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameInput = document.getElementById('name-input');

const addName = event => {
  const nameOutput = document.getElementById('name-output');
  const targetName = (nameOutput.textContent =
    event.currentTarget.value.trim());
  nameOutput.textContent = targetName !== '' ? targetName : 'Anonymous';
};

nameInput.addEventListener('input', addName);
