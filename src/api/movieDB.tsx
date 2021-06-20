import axios from 'axios';

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'1ab9cba09f3eac7456b7326193fd830c',
        language:'es-ES'
    }
})

export default movieDB;