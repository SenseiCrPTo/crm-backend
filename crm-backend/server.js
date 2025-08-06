const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World! The server is running correctly.');
});

app.listen(PORT, () => {
  console.log(`Minimal server started successfully on port ${PORT}`);
});
