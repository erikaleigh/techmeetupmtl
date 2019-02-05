const express = require('express');
const app = express();
const dotenv = require('dotenv');
const apiKey = process.env.MEETUP_APIKEY;
const token = process.env.SLACK_BOT_USER_0AUTH_TOKEN;
const meetupApi = require('./apis/meetup-api');
const slackApi = require('./apis/slack-api');

app.get('/events', async (req, res) => {
  const events = await meetupApi.getEvents(apiKey);
  const slackResponse = await slackApi.sendEvents(events, token);

// TODO: add error handling, add response
});

// 🛎 Testing testing 🛎
app.get('/ping', (req, res) => res.send('pong'));

app.listen(3002, () => console.log('app listening on port 3002'));