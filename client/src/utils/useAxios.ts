import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";

const useAxios = () => {
    const navigate = useNavigate();

    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

    const baseURL = 'http://localhost:5000'

    const axiosInstance = axios.create({
        baseURL,
        headers: { Authorization: `Bearer ${accessToken}` }
    })

    axiosInstance.interceptors.request.use(async (req: any) => {
        if (accessToken === null || refreshToken === null) {
            navigate('/login');
            return req;
        }
        const decoded: any = jwt_decode(accessToken);
        const isExpired = dayjs.unix(decoded.exp).diff(dayjs()) < 1;

        if (!isExpired)
            return req;

        let response = await (await fetch(`${baseURL}/refresh`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${refreshToken}` }
        })).json();

        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);

        req.headers.Authorization = `Bearer ${response.data.access}`;
        return req;
    })

    return axiosInstance;
}

export default useAxios;