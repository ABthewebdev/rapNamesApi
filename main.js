const rappers = require('./server')
const inputValue = document.querySelector('input').value.toLowerCase();
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('h2').textContent = `Birth Name: ${rappers[inputValue]['Birth Name']}`
})