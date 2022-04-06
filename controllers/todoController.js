module.exports = function(app){

// const path = require('path')  not working
app.get('/todo',function ( req,res ){
    // res.render( path.join(__dirname, 'todo.ejs')  ); not working
    res.render('todo')  ;
});

app.post('/todo',function ( req,res ){
        
});

app.delete('/todo',function ( req,res ){
        
})

};