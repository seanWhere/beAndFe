const express = require('express');
const route = express.Router();
const Book = require('../mvc/models/Book');

route.get('/', (req, res)=>{
    Book.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ error: err});
        });
});
    
route.post('/', (req, res)=>{
    const newBook = new Book({
        title: req.body.title,
        description: req.body.description,
    });

    newBook.save()
        .then(data => {
            res.json(data);
        })
        .catch(e => {
            res.json({ error: e });
        });

});
    
route.delete('/:id', (req, res)=>{
    Book.deleteOne({_id: req.params.id})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ error: err });
        }); 
});
    
route.patch('/:id', (req, res)=>{
    Book.updateOne({_id: req.params.id}, 
    {
        $set: {description: req.body.description}
    })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ error: err });
        });
});

module.exports = route;