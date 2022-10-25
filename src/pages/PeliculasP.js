//import React, { useState } from "react";
import Paginas from "../components/Pagina";

const Peliculas = (props) => {
    return (
        <div>
            <h1>Listado de Peliculas</h1>
            <Paginas pageSize={props.pageSize} page={props.page}></Paginas>
        </div>       
    );
};

export default Peliculas;