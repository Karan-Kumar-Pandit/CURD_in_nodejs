const mongoose = require('mongoose');
const app = require('./src/app');
const env = require('dotenv');

env.config({ path: './.env' });

// Connect to MongoDB
mongoose
     .connect(process.env.DATABASE_LOCAL, {
          useNewUrlParser: true,
          useUnifiedTopology: true
     })
     .then(() => {
          console.log('Connected to MongoDB Successfully!..');
     })
     .catch((error) => {
          console.error('Error connecting to MongoDB:', error);
     });

// Start Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
     console.log(`App running on port ${port}...`);
});
