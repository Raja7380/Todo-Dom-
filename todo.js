const express=require('express')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.json())

let todos = [];
var c=0;
  
  app.get('/todos', (req, res) => {
    res.send(todos);
  });

  app.post('/todos', (req, res) => {
    const newTodo = {
      id:c,
      title: req.body.title,
      description: req.body.description,
    };
    c=c+1;
    todos.push(newTodo);
    res.status(201).json(newTodo);
  });
  app.delete('/todos/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      todos.splice(todoIndex, 1);
      res.status(200).send();
    }
  });

  app.use(function(req,res,next){
    res.status(498).send("bhag")
  })
app.listen(3000)