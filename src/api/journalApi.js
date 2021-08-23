

import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-journalapp-default-rtdb.firebaseio.com'
})

export default journalApi;