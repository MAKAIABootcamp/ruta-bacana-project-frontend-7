import React, { useState } from "react";
import { actionFilterDestinos } from "../../redux/Destinos/destinosActions";
import { useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";
import "./filtros.scss";

const Filtros = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Realizando búsqueda con término:", searchTerm);
    dispatch(actionFilterDestinos("nombre", searchTerm.toLowerCase()));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    console.log("Se presionó la tecla Enter");
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="containerBusqueda">
      <span>Qué destino buscas?</span>
      <div className="inputWithIcon">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown} // onKeyPress en camelCase
          placeholder="Buscar destino"
        />
        <BsSearch className="searchIcon" onClick={handleSearch} />
      </div>
    </div>
  );
};

export default Filtros;

// import React from "react";
// import {actionFilterDestinos} from "../../redux/Destinos/destinosActions";
// import { useDispatch } from "react-redux";
// import "./filtros.scss";

// const Filtros = () => {

//   const dispatch = useDispatch();

//   const handleSearch = (e) => {
//     const fieldValue = e.target.value.toLowerCase();
//     // Aquí debes ajustar el nombre del campo en tu base de datos
//     dispatch(actionFilterDestinos("destinos", fieldValue));
//   };

//   return (
//     <>
//       <div className="containerBusqueda">
//         <span>Qué destino buscas?</span>
//         <input type="text" onChange={handleSearch}></input>
//       </div>
//       {/* <div className="containerFiltros">
//         <button type="button">Playas</button>
//         <button type="button">Pueblos</button>
//         <button type="button">Bosques</button>
//         <button type="button">Atracciones</button>
//       </div> */}
//     </>
//   );
// };
// export default Filtros;
