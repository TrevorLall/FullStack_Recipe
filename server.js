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
            tempCont.query("select r.recipeId, r.title, r.description, r.typeOf, r.image, r.slug, n.servings, n.cooktime, n.prepTime from recipe r, nutrition n where  r.nutritionId = n.nutritionId", function (error, rows, fields) {
                tempCont.release();
                if (error)
                    console.log('Error in query');
                else
                    res.json(rows);
            });

        }
    });
});
app.get('/api/recipes/get', (req, res) => {
    // sql code
    connection.getConnection((error, tempCont) => {
        if (error) {
            tempCont.release();
            console.log('Error');
        }
        else {
            console.log('Connected!');
            console.log(req.query);

            tempCont.query("select r.recipeId, r.title, r.description, r.typeOf, r.image, r.slug, n.servings, n.cooktime, n.prepTime from recipe r, nutrition n where  r.nutritionId = n.nutritionId AND r.slug = '" + req.query.slug + "'", function (error, rows, fields) {
                tempCont.release();
                if (error)
                    console.log('Error in query');
                else
                    res.json(rows);
            });

        }
    });
});

app.get('/api/carousel/get', (req, res) => {
    // sql code
    connection.getConnection((error, tempCont) => {
        if (error) {
            tempCont.release();
            console.log('Error');
        }
        else {
            console.log('Connected!');
            console.log(req.query);

            tempCont.query("select r.title, r.image, r.description, r.slug from recipe r order by r.recipeId desc LIMIT 3", function (error, rows, fields) {
                tempCont.release();
                if (error)
                    console.log('Error in query');
                else
                    res.json(rows);
            });

        }
    });
});

app.get('/api/notes/get', (req, res) => {
    // sql code
    connection.getConnection((error, tempCont) => {
        if (error) {
            tempCont.release();
            console.log('Error');
        }
        else {
            console.log('Connected!');
            console.log(req.query);

            tempCont.query("select r.chefnotes from recipe r where  r.slug = '" + req.query.slug + "'", function (error, rows, fields) {
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

app.get('/api/directions/get', (req, res) => {
    // sql code
    connection.getConnection((error, tempCont) => {
        if (error) {
            tempCont.release();
            console.log('Error');
        }
        else {
            console.log('Connected!');
            tempCont.query("SELECT d.stepNum, d.description FROM direction d, recipe r where r.recipeId = d.recipeId AND r.slug = '" + req.query.slug + "' order by d.stepNum", function (error, rows, fields) {
                tempCont.release();
                if (error)
                    console.log('Error in query');
                else
                    res.json(rows);
            });

        }
    });
});

app.get('/api/ingredients/get', (req, res) => {
    // sql code
    connection.getConnection((error, tempCont) => {
        if (error) {
            tempCont.release();
            console.log('Error');
        }
        else {
            console.log('Connected!');
            tempCont.query("SELECT i.ingredientName, i.ingredientAmount, i.ingredientMeasurement FROM ingredient i, recipe r where r.recipeId = i.recipeId AND r.slug = '" + req.query.slug + "'", function (error, rows, fields) {
                tempCont.release();
                if (error)
                    console.log('Error in query');
                else
                    res.json(rows);
            });

        }
    });
});

var PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));