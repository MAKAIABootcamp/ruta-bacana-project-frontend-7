import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { filterDestinos } from "../../redux/Destinos/destinosSlice";
import { dataBase } from "../../firebase/firebaseconfig";
import { collection, getDocs } from "firebase/firestore";
import "./filtros.scss";

function Filtros() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Si el campo de búsqueda está vacío, muestra todos los destinos
    if (!value.trim()) {
      fetchDestinos();
      return;
    }

    // Realiza la búsqueda con el término actual
    searchDestinos(value);
  };

  const fetchDestinos = async () => {
    const destinosRef = collection(dataBase, "destinos");
    const querySnapshot = await getDocs(destinosRef);

    let resultados = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      resultados.push(data);
    });

    dispatch(filterDestinos(resultados));
    setNoResults(false);
  };

  const searchDestinos = async () => {
    const destinosRef = collection(dataBase, "destinos");
    const querySnapshot = await getDocs(destinosRef);

    let resultados = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (
        (data.categoria && // Verifica que 'categoria' esté definido
          data.categoria.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (data.descripcion && // Verifica que 'descripcion' esté definido
          data.descripcion.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (data.nombre && // Verifica que 'nombre' esté definido
          data.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
      ) {
        resultados.push(data);
      }
    });

    if (resultados.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }

    dispatch(filterDestinos(resultados));
  };

  return (
    <>
      <div className="containerBusqueda">
        <span>Qué destino buscas?</span>
        <div className="inputWithIcon">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Buscar destino"
          />
          <BsSearch className="searchIcon" onClick={searchDestinos} />
        </div>
      </div>
      <span>
        {noResults && (
          <p className="noResultsMessage">No se encontraron resultados</p>
        )}
      </span>
    </>
  );
}

export default Filtros;