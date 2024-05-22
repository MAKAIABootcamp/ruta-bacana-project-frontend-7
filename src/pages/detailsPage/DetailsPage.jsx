// src/pages/DetailsPage.jsx
import React, { useEffect, useState } from "react";
import Details from "../../componentes/Details/Details";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionGetDestinos } from "../../redux/Destinos/destinosActions";
import Footer from "../../componentes/Footer/Footer";
import Slider from "../../componentes/Slider/Slider";
import MapComponent from "../../componentes/MapComponent/MapComponent";
import deleteImage from "../../assets/delete_3405244.png";
import editImage from "../../assets/edit_1159633.png";
import { actionDeleteDestinos } from "../../redux/Destinos/destinosActions";
import { useNavigate } from "react-router-dom";
import MenuDesplegable from "../../componentes/MenuDesplegable/MenuDesplegable";
import "./details.scss";
import Swal from "sweetalert2";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { destinos } = useSelector((store) => store.destinos);
  const { user } = useSelector((store) => store.userAuth);

  const isAdminEmail = user && user.email === "rutabacana@gmail.com";

  useEffect(() => {
    dispatch(actionGetDestinos());
  }, [dispatch]);

  const destinoSeleccionado = destinos.filter((destino) => destino.id === id);
  const destino = destinos.find((destino) => destino.id === id);

  //AGREGE Y LA IMPORTACION

  const [menuDesplegable, setmenuDesplegable] = useState(false);

  const toggleDesplegable = () => {
    setmenuDesplegable(!menuDesplegable);
  };

  const handleDelete = () => {
    if (!destino) return;
    Swal.fire({
      title: "¿Quieres elminarlo?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#75c7ff",
      cancelButtonColor: "#f86f6f",
      confirmButtonText: "Sí, eliminarlo!",
      cancelButtonText: "Cancelar",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      customClass: {
        popup: "animate__fadeInDown",
        actions: "swal2-button-container",
        confirmButton: "swal2-custom-confirm",
        cancelButton: "swal2-custom-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(actionDeleteDestinos(destino.id));
        toggleDesplegable();
        navigate("/");
      }
    });
  };

  return (
    <div className="fondoDegradado">
      {destino && (
        <>
          <div className="actionButtons">
            {isAdminEmail && (
              <MenuDesplegable
                onDelete={handleDelete}
                onEdit={() => navigate(`/edit/${destino.id}`)}
              />
            )}
          </div>

          {/* <div className="actionButtons">
        {isAdminEmail && (
          <>
            <img src={deleteImage} alt="eliminar" onClick={handleDelete} />
            <img
              onClick={() => navigate(`/edit/${destino.id}`)}
              src={editImage}
              alt="editar"
            />
          </>
        )}
      </div> */}
          <Details destinoSeleccionado={destinoSeleccionado} />
          <MapComponent id={id} />
          {/*<InfoInteres />*/}
          <div className="infoInteresDiv">
            <p className="infoInteres">Información de interés</p>
          </div>
          <Slider destinoId={id} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default DetailsPage;
