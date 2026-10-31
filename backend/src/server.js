const express = require('express');
const cors = require('cors');
const app = express();
const cyberRoutes = require('./API/cyberRoutes');
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(cyberRoutes);

app.listen(port, () => {
  console.log(`Server is running on port 3000 ${port}`);
});