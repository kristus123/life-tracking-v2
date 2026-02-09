import { Diet } from './Diet.js';
import { Macrogoals } from './MacroGoals.js';

for (const [key, value] of Object.entries(Diet)) {
	const li = document.createElement('p');
	li.textContent = `${key}: ${value.toFixed(2)}`;
	document.body.appendChild(li);
}

document.body.append('__')

for (const [key, value] of Object.entries(Macrogoals)) {
	const li = document.createElement('p');
	li.textContent = `${key}: ${value.toFixed(2)}`;
	document.body.appendChild(li);
}

fetch('Diet.js')
  .then(res => res.text())
  .then(code => {
    const pre = document.createElement('pre');
    pre.textContent = code;
    document.body.appendChild(pre);
  });
