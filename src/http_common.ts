import axios from "axios";

export default axios.create({
    baseURL: "http://local.laravel.pv915.com:100/",
    headers: {
        "Content-type": "application/json"
    }
});