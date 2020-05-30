const axios = require('axios')

const pool = require('../config/db')

module.exports = {


    async getInfo() {
        const response = await axios.get('http://192.168.1.7:80/variables')
        return response.data
    },

    async save(data) {
        const { temperature, humidity, lightness, level, soil } = data.variables

        const dateImport = new Date();

        pool.query('INSERT INTO estufa (temperature, humidity, lightness, water_level, soil_humidity, created_at) VALUES ($1, $2, $3, $4, $5, $6)', [temperature, humidity, lightness, level, soil, dateImport], (error, results) => {
            if (error) {
                throw error
            }
        })
    },

    async getAll() {
        return await pool
            .query('SELECT * FROM estufa ORDER BY created_at DESC limit 5')
            .then(res => res.rows)
            .catch(error => console.log(error))

    }

}