import axios from 'axios';

const KEY = 'AIzaSyDppk4x62hWo4cxWp7DZ-4vrQeYh4ll-iE';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY
   }
});