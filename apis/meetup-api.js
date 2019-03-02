const moment = require('moment');
const axios = require('axios');
const MEETUP_BASE_URL = "https://api.meetup.com/find/upcoming_events";
const MEETUP_TOPIC_CATEGORY = '292';
const END_DATE_RANGE = moment().endOf('week');

const getEvents = async (apiKey) => {
  try {
    const meetupEventsResponse = await axios.get(MEETUP_BASE_URL, {
      params: {
        key: apiKey,
        topic_category: MEETUP_TOPIC_CATEGORY,
        end_date_range: END_DATE_RANGE
      }
    });

    return meetupEventsResponse;
  }
  catch (err) {
    // TODO: Add error handling
  }
}

module.exports = getEvents;