const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'homecooking'
})
app.get('/api/ingredients', (req, res) => {
    // sql code
    connection.getConnection((error, tempCont) => {
        if (error) {
            tempCont.release();
            console.log('Error');
        }
        else {
            console.log('Connected!');
            tempCont.query("select * from ingredient", function (error, rows, fields) {
                tempCont.release();
                if (error)
                    console.log('Error in query');
                else
                    res.json(rows);
            });

        }
    });
});
app.get('/api/recipes', (req, res) => {
    // sql code
    connection.getConnection((error, tempCont) => {
        if (error) {
            tempCont.release();
            console.log('Error');
        }
        else {
            console.log('Connected!');
            tempCont.query("select r.recipeId, r.title, r.description, r.typeOf, r.image, n.servings, n.cooktime, n.prepTime from recipe r, nutrition n where  r.nutritionId = n.nutritionId", function (error, rows, fields) {
                tempCont.release();
                if (error)
                    console.log('Error in query');
                else
                    res.json(rows);
            });

        }
    });
});

app.get('/api/directions', (req, res) => {
    // sql code
    connection.getConnection((error, tempCont) => {
        if (error) {
            tempCont.release();
            console.log('Error');
        }
        else {
            console.log('Connected!');
            tempCont.query("select * from direction", function (error, rows, fields) {
                tempCont.release();
                if (error)
                    console.log('Error in query');
                else
                    res.json(rows);
            });

        }
    });
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));