import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import useAxios from "../utils/useAxios";

const Dashboard = () => {
    const [data, setData] = React.useState({});
    const navigate = useNavigate();
    const axiosInstance = useAxios();

    async function fetchData() {
        const response = await axiosInstance.get('/dashboard');
        return setData(response.data.data);
    }

    React.useEffect(() => {
        if (localStorage.getItem("access") === null || localStorage.getItem("refresh") === null)
            return navigate('/login');
        (async () => await fetchData())()
    }, [])

    return (
        <div className="Dashboard">
            <h1>User's info:</h1>
            <br></br>
            {data ? Object.entries(data).map((e: any) => {
                return <div className="pairInfo">
                    <label>{e[0]}:</label>
                    <p>{e[1]}</p>
                </div>
            }) : ""}
        </div>
    );
}

export default Dashboard;