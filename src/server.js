const express = require('express');
const booksRouter = require('./routes');

const app = express();
const port = 9000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Bookshelf API is running',
  });
});

// Route Books
app.use('/books', booksRouter);

app.listen(port, () => {
  console.log(`Bookshelf API berjalan pada http://localhost:${port}`);
});
