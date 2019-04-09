module.exports = function(app, db) {
    // Notes
    app.post('/notes', (req, res) => {
        // Create notes here
        console.log(req.body)
        res.send('Hello')
    })
}