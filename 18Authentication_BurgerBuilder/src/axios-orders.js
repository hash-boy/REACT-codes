import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-f1ab7-default-rtdb.firebaseio.com/'
});

export default instance;