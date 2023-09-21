document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://rap-names-api-472e02e1c89f.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#birthName').innerText = data['Birth Name']
        document.querySelector('#age').innerText = data['age']
        document.querySelector('#birthPlace').innerText = data['Birth Place']
    }catch(error){
        console.log(error)
    }
}