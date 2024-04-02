console.log("this will be the server");
const express = require('express')
const app = express()
// const port = 3000

const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});

// homepage
// notes page
// get /api/notes
// get /api/notes/:id
// post /api/notes
// delete /api/notes