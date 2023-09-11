const rappers = require('./rappers')
const inputValue = document.querySelector('input').value;
document.querySelector('button').addEventListener('click', () => {
    document.querySelector('h2').textContent = rappers[inputValue]
})
console.log(rappers['dylan'])