module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        // Create notes here
        res.send('Hello')
    })
}