const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const drink = response.data.drinks[0];
    res.render('index', { drink });
  } catch (err) {
    console.error(err);
    res.render('index', { drink: null, error: 'Failed to fetch drink. Try again!' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});