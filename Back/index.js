require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
