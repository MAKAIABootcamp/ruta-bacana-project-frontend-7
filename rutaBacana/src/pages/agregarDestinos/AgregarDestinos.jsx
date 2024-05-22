import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import imageUpload from "../../assets/images/subiri.png";
import { useFormik } from "formik";
import "./agregarDestinos.scss";
import fileUpload from "../../services/fileUpload";
import { actionAddDestinos, actionEditDestinos, } from "../../redux/Destinos/destinosActions";
import Cargando from "../../componentes/cargando/Cargando";
import Swal from "sweetalert2";
import { setSuccessRequest } from "../../redux/Destinos/destinosSlice";
//import { categoria } from "../../data/destinosOptions";
import 'animate.css';
import { GoArrowLeft } from "react-icons/go";

const AgregarDestinos = () => {
  const { idDestino } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState(
    "https://www.lacoladerata.co/wp-content/uploads/2016/03/Desierto-y-Grises-I.jpg"
  );
  const [file, setFile] = useState(null);
  const [initalState, setInitialState] = useState({});
  const { successRequest, errorDestinos, isLoadingDestinos, destinos } = useSelector(
    (store) => store.destinos
  );
  

  useEffect(() => {
    if (idDestino) {
      const editDestino = destinos.find((item) => item.id === idDestino);
      if (editDestino) {
        setInitialState(editDestino);
        setImage(editDestino.imagen);
        formik.values.nombre = editDestino.nombre;
        formik.values.categoria = editDestino.categoria;
        formik.values.descripcion = editDestino.descripcion;
      }
    }
  }, [idDestino, destinos]);

  const getInitialValues = () => ({
    nombre: initalState.nombre || "",
    categoria: initalState.categoria || "",
    descripcion: initalState.descripcion || "",
  });

  const handleChangeFile = (event) => {
    const fileItem = event.target.files[0];
    setFile(fileItem);
    setImage(URL.createObjectURL(fileItem));
  };

  const formik = useFormik({
    initialValues: getInitialValues(),
    onSubmit: async (values) => {
      const avatar = file ? await fileUpload(file) : image;
      values.imagen = avatar;
      if (idDestino) {
        //Vamos a editar
        dispatch(actionEditDestinos(idDestino, values));
      } else {
        //Vamos a agregar
        // values.idTenedor = id;
      dispatch(actionAddDestinos(values));
    }
  },
  });

  if (isLoadingDestinos) return <Cargando />;

  if (errorDestinos) {
    Swal.fire({
      title: "Oops!",
      text: idDestino
      ? "Ha ocurrido un error en la edición de los datos del destino"
      :"Ha ocurrido un error en la creación del nuevo destino",
      icon: "error",
      iconColor: "#f50400",
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      }
    });
  }

  if (successRequest === "addDestinos" || successRequest === "editDestinos") {
    Swal.fire({
      title: "Excelente!",
      text: idDestino 
      ? "Has editado con éxito los datos del destino"
      : "Has guardado con éxito un nuevo destino",
      icon: "success",
      confirmButtonColor: " #0ced53b0",
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setSuccessRequest());
        navigate("/");
      }
    });
  }
  return (
    <main className="form">
      <GoArrowLeft className="back" onClick={() => navigate(-1)} type="button"/>
      {/* <button className="back" onClick={() => navigate(-1)} type="button">
        Ir atrás
      </button> */}
      <h1>{idDestino ? "Editar Destino" : "Agregar Destino"}</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="nombre">
          <span>Nombre Destino</span>
          <input
            id="nombre"
            type="text"
            placeholder="Piedra del peñon"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            {...formik.getFieldProps("nombre")}
          />
        </label>
        <label htmlFor="categoria">
          <span>Categoria</span>
          <input
            id="categoria"
            type="text"
            placeholder="Pueblos"
            {...formik.getFieldProps("categoria")}
          />
        </label>
        <label htmlFor="descripcion">
          <span>Descripción</span>
          <input id="descripcion" type="text" placeholder="" {...formik.getFieldProps("descripcion")}/>
        </label>
        <label htmlFor="imagen" className="imagenContainer">
          {/* <span>Foto</span> */}
          <figure className="upload">
            <img  src={imageUpload} alt="upload" />
            <figcaption>Cargar imagen</figcaption>
          </figure>
          <img className="image" src={image} alt="pet" />
          <input id="imagen" type="file" onChange={handleChangeFile} />
        </label>
        <button type="submit">{idDestino ? "Guardar cambios" : "Guardar Destino"}</button>
      </form>
    </main>
  );
};

export default AgregarDestinos;