const rappers = require('./server')
const inputValue = document.querySelector('input').value;
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('h2').innerText = `Birth Name: ${rappers[inputValue]['birthName']}`
})