import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const taskList = [];

app.get('/', (req, res, next)=>{
    res.render('index', { taskList })
})

app.post('/', (req, res, next)=> {    
    const task = req.body.task;
    taskList.push(task);
    res.redirect('/')
});

app.listen(port, ()=>{
    console.log(`Server Running on Port ${port}`);
})