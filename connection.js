const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "ramees",
    port: 5432,
    password: "Rameesck@3029",
    database: "users"
})

module.exports = client