import axios from "axios";



export default axios.create({
    baseURL : 'https://api.rawg.io/api' ,
    params : {
        key : '1d137f6245044bd5ad0739711f5689d8'
    }
});