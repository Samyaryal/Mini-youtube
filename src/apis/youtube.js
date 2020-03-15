import axios from 'axios';
const KEY = 'AIzaSyAU-froHOGt19CA-7U-Y4zDU2ETEBInfRE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});

