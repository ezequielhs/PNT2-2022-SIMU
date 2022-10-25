import React, { useState, useEffect } from "react";
import Peliculas from "./Peliculas";

const url = "http://127.0.0.1:3001/api/movies";

const Paginas = (props) => {
    let trueUrl = `${url}?pageSize=${props.pageSize}&page=${props.page}`;
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch (trueUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: sessionStorage.getItem("Token"),
                    "Access-Control-Allow-Origin": "*",
                },
            });
                
            response.json().then((data) => {
                setPeliculas(data);
            });
        }

        fetchData();
    }, []);

    return <Peliculas items={peliculas}></Peliculas>
};

export default Paginas;