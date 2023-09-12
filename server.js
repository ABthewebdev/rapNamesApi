const express = require('express');
const app = express();
const PORT = 7000;
const cors = require('cors')
app.use(cors())
const rappers = {
    '21 savage': {
        'age': 29,
        'Birth Name': 'Sheyaa Bin Abraham-Lincoln',
        'Birth Place': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'Birth Name': 'Chancelor Bennett',
        'Birth Place': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'Birth Name': 'Dylan',
        'Birth Place': 'Dylan'
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
app.listen(process.env.PORT || PORT, () => {
    console.log('on 7000')
})