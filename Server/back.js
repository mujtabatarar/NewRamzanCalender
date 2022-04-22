const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./dbConnect');

//middlewares
app.use(express.json());
app.use(cors());

// this method return date string in (20 Apr 2022) form
const returnDateString= ()=>{
    const d = new Date();


    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    const finalDate = `${da} ${mo} ${ye}`;
    return finalDate;
    
};
console.log("heyyyyyyy");
console.log(returnDateString());
// get all entries in database
app.get('/', async (req, res)=>{
    try{
        const response = await pool.query('SELECT * FROM todo');
        res.json(await response.rows);
    }catch(err){
        res.send(err.message);
    }
});

// get current day data
app.get('/today', async (req, res )=>{
    try {
        const response = await pool.query('SELECT * FROM todo WHERE date=$1', [returnDateString()]);
        res.json(response.rows[0]);
    } catch (error) {
        res.send(error.message);
    }
});

app.listen(5100);