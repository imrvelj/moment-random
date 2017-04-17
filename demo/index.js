const random = require('../src/index');

const btn = document.getElementById('btn');
const element = document.getElementById('element');

btn.addEventListener('click', () => {
    const el = document.createElement('div');
    el.innerHTML = random().format('LLL');
    element.appendChild(el);
});
