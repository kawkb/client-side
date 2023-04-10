// import Cookies from "js-cookie"
import api from "./api"

const authService = {
    setToken: () => {
        // const token = Cookies.get("access_token");
        // if (token) {
        //     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        // }
    },
    logout: () => {
        // Cookies.remove("access_token");
        delete api.defaults.headers.common["Authorization"];
    },
    login: () => {
		console.log(process.env.REACT_APP_API_URL); 
        window.location.href = `${process.env.REACT_APP_API_URL}auth/login`;
    }
}
export default authService;