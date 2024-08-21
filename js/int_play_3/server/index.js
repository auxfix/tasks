const express = require('express');
const app = express();

const port = 3000; // Configure your port
let rejectionCount = 0;

// Set how many times requests will be rejected before returning 200
const maxRejections = 4;
const responseTimeout = 2000; // Set your response timeout in milliseconds

app.use((req, res, next) => {
  // Implement response timeout


  next();
});

app.get('/', (req, res) => {
  if (rejectionCount < maxRejections) {
    rejectionCount++;
    console.log('reject');
    res.status(503).send('Service Unavailable');
  } else {
    res.setTimeout(responseTimeout, () => {
        console.log('ok');
        res.status(200).send('ок');
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Configured to reject the first ${maxRejections} requests`);
});