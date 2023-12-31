const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Express Demo App</h1> <h4>Message: Deployment Success</h4> <p>Version 1.4</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '1',
      price: 10000
    },
    {
      productId: '102',
      price: 15000
    }
  ])
})

app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
