const inputValue = document.querySelector('input').value;
document.querySelector('button').addEventListener('submit', () => {
    // document.querySelector('#birthName').innerText = rappers[inputValue]['Birth Name']
    console.log(rappers[inputValue]['Birth Name'])
})
import rappers from "./server";