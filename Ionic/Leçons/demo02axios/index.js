import axios from './utils/axiosConfig.js'

async function getOneById(id) {
    const result = await axios.get(`/posts/${id}`);
    console.log(result);
}

getOneById(1);