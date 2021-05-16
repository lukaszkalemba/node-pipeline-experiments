const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('lorem ipsum dolor sit amet'));

const PORT = 8080;

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
