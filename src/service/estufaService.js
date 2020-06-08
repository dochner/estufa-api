const axios = require('axios')

const pool = require('../config/db')

module.exports = {


    async getInfo() {
        const response = await axios.get('http://www.mocky.io/v2/5ed44c8b3300006f00f7a0fc')
        return response.data
    },

    async save(data) {
        const { temperature, humidity, lightness, soil, level } = data.variables

        const dateImport = new Date();

        pool.query('INSERT INTO estufa (temperature, humidity, lightness, water_level, soil_humidity, created_at) VALUES ($1, $2, $3, $4, $5, $6)', [temperature, humidity, lightness, level, soil, dateImport], (err, results) => {
            if (err) {
                throw err
            }
        })
    },

    async getAll() {
        return await pool
            .query('SELECT * FROM estufa ORDER BY created_at DESC limit 1')
            .then(res => res.rows)
            .catch(err => console.log(err))

    }

}