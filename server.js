const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/products', async (req, res) => {
  try {
    const { data } = await axios.get('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e');
    res.send({ express: data });
  } catch ({ response }) {
    console.log(response);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
