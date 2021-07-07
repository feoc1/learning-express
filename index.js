const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger')
const members = require('./Members')

const app = express()

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// Initialize middleware:
// app.use(logger)

// Handlebars middleware:
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Body parser middleware:
app.use(express.json()) // Allow to handle raw JSON.
app.use(express.urlencoded({ extended: false }))

// Homepage route:
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
)

// Set static folder:
app.use(express.static(path.join(__dirname, 'public')))

// Members API Routes
app.use('/api/members', require('./routes/api/members'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
)
