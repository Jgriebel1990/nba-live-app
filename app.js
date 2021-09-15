const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.set('views', path.join(__dirnam, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'Todd',
        comment: 'hahah funny !'
    },
    {
        username: 'Bodi',
        comment: 'hahah not unfunny !'
    },
    {
        username: 'Godd',
        comment: 'hahah super duper funny !'
    },
    {
        username: 'Ddot',
        comment: 'hahah pretty heckin funny !'
    }
]

app.get('/', (req, res) => {
    res.send('Splash Page')
})

app.get('/playerstats', (req, res) => {
    res.send('Stats for players')
})

app.listen(3000, () => {
    console.log('Listening on PORT 3000')
})

const arr = []