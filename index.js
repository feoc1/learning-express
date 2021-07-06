const express = require('express')
const path = require('path')
const logger = require('./middleware/logger')

const app = express()

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// Initialize middleware:
// app.use(logger)

// Body parser middleware:
app.use(express.json()) // Allow to handle raw JSON.
app.use(express.urlencoded({ extended: false }))

// Set static folder:
app.use(express.static(path.join(__dirname, 'public')))

// Members API Routes
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
)
