var express = require('express');
var app = express();

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static('app'));
app.use('/slides', express.static('slides'));

var cards = [
    { 
        id: '1', 
        title: 'Card improvement',
        description: 'Cards needs to be improved...some day, maybe', 
        cardStatus: 'TODO',
        severity: 'trivial',
        user: 'davidg@tid.es',
        date: new Date('2013-10-09')
    },
    {
        id: '2', 
        title: 'Card Super bug',
        description: 'Very important bug CAUTION!!', 
        cardStatus: 'TODO',
        severity: 'critical',
        user: 'jjmr@tid.es',
        date: new Date('2013-10-10')
    },
    {
        id: '3',
        title: 'Write some tests',
        description: 'Some tests need to be written',
        cardStatus: 'DOING',
        severity: 'minor',
        user: 'pjm@tid.es',
        date: new Date('2013-10-13')
    }
];

function getCard(id) {
    var cardMatch; 
    cards.forEach(function(card) {
        if (card.id === id) {
            cardMatch = card;
        }
    });
    return cardMatch;
}

app.get('/api/cards', function(req, res) {
    res.write(JSON.stringify(cards));
    res.end();
});

app.get('/api/cards/:id', function(req, res, next) {
    var card = getIssue(req.params.id);
    if (card) {
        res.write(JSON.stringify(card));
        res.end();
    } else {
        next();
    }
});

app.post('/api/cards', function(req, res) {
    cards.push(req.body);
    res.write(req.body);
    res.end();
});

app.delete('/api/cards/:id', function(req, res, next) {
    var card = getCard(req.params.id);
    if (card) {
        cards.splice(cards.indexOf(card), 1);
        res.end()
    } else {
        next();
    }
});

app.listen(8000);
