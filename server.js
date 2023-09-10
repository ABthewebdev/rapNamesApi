const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors')
app.use(cors())
const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Lincoln',
        'birthPlace': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthPlace': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthPlace': 'Dylan'
    },
}
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:rapperName', (req, res) => {
    const rappersName = req.params.rapperName.toLowerCase();
    if(rappers[rappersName]) {
        res.json(rappers[rappersName])
    }
    else {
        res.json(rappers['dylan'])
    }
    console.log(req.params.rapperName)
})
app.listen(PORT, () => {
    console.log(`server is running on ${PORT} you better go catch it`)
})