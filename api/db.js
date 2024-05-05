import mysql from 'mysql';

// Create a MySQL connection
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "blog"
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});
