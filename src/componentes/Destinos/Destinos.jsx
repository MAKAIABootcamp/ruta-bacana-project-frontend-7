import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionGetDestinos } from "../../redux/Destinos/destinosActions";
import "./destinos.scss";
import { useNavigate } from "react-router-dom";

const Destinos = ({ categoria }) => {
  const dispatch = useDispatch();
  const { destinos } = useSelector((store) => store.destinos);
  const navigate = useNavigate();

  useEffect(() => {
    if (destinos.length === 0) {
      dispatch(actionGetDestinos());
    }
  }, [dispatch, destinos.length]);

  const destinosFiltrados = destinos.filter(
    (destino) => destino.categoria === categoria
  );

  return (
    <>
      <div className="contenedorRelacionados">
        <h1 className="principal">Destinos Relacionados</h1>
        <div className="relacionadosContainer">
          {destinosFiltrados.map((destino) => (
            <div key={destino.id} className="destinoItem">
              <img 
              onClick={() => navigate(`/DetailsPage/${destino.id}`)}
              src={destino.imagen} alt={destino.nombre} />
              <h1>{destino.nombre}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Destinos;
