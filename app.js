const express = require('express');
const app = express();
const meetupApi = require('./meetup-api');
const slackApi = require('./slack-api');

app.get('/events', async (req, res) => {
  const events = await meetupApi.getEvents();
  const slackResponse = await slackApi.sendEvents(events);

// TODO: add error handling, add response
});

// 🛎 Testing testing 🛎
app.get('/ping', (req, res) => res.send('pong'));

app.listen(3002, () => console.log('app listening on port 3002'));