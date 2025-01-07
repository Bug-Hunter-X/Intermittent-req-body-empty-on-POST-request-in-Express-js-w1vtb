const express = require('express');
const app = express();
//Increased limit to handle larger request bodies
app.use(express.json({limit: '50mb'}));
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));