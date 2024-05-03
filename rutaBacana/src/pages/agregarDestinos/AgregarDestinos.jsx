import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import MultipleSelectChip from "../../components/MultipleSelectChip/MultipleSelectChip";
// import {
//   personalidades,
//   genero,
//   tipoMascota,
// } from "../../data/mascotasOptions";
// import imageUpload from "../../assets/upload_9427985.png";
// import RadioButtonsGroup from "../../components/RadioButtonsGroup/RadioButtonsGroup";
import { useFormik } from "formik";
import "./agregarDestinos.scss";
import fileUpload from "../../services/fileUpload";
import { actionAddDestinos } from "../../redux/Destinos/destinosActions";
import Cargando from "../../componentes/cargando/Cargando";
import Swal from "sweetalert2";
import { setSuccessRequest } from "../../redux/Destinos/destinosSlice";

const AgregarDestinos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState(
    "https://www.shutterstock.com/image-photo/portrait-cat-dog-front-bright-260nw-1927527212.jpg"
  );
  const [file, setFile] = useState(null);
  const { successRequest, errorDestinos, isLoadingDestinos } = useSelector(
    (store) => store.destinos
  );

  const handleChangeFile = (event) => {
    const fileItem = event.target.files[0];
    setFile(fileItem);
    setImage(URL.createObjectURL(fileItem));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      edad: "",
      personalidad1: "",
      personalidad2: [],
      // genero: genero[0],
      // tipoMascota: tipoMascota[0],
    },
    onSubmit: async (values) => {
      const avatar = await fileUpload(file);
      values.imagen = avatar;
      dispatch(actionAddDestinos(values));
    },
  });

  if (isLoadingDestinos) return <Cargando />;

  if (errorDestinos) {
    Swal.fire({
      title: "Oops!",
      text: "Ha ocurrido un error en la creación de la mascota",
      icon: "error",
    });
  }

  if (successRequest) {
    Swal.fire({
      title: "Excelente!",
      text: "Has guardado con éxito una mascota para adoptar",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setSuccessRequest());
        navigate("/");
      }
    });
  }
  return (
    <main className="form">
      <button className="back" onClick={() => navigate(-1)} type="button">
        Ir atrás
      </button>
      <h1>Agregar Destino</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">
          <span>Nombre</span>
          <input
            id="name"
            type="text"
            placeholder="Loki"
            {...formik.getFieldProps("name")}
          />
        </label>
        <label htmlFor="edad">
          <span>Edad en meses</span>
          <input
            id="edad"
            type="text"
            placeholder="18"
            {...formik.getFieldProps("edad")}
          />
        </label>
        <label htmlFor="raza">
          <span>Raza</span>
          <input id="raza" type="text" placeholder="Labrador" />
        </label>
        <label htmlFor="imagen">
          <span>Foto</span>
          {/* <figure className="upload">
            <img src={imageUpload} alt="upload" />
            <figcaption>Cargar imagen</figcaption>
          </figure> */}
          <img className="image" src={image} alt="pet" />
          <input id="imagen" type="file" onChange={handleChangeFile} />
        </label>
        <label htmlFor="personalidad">
          <span>Personalidad</span>
          <select
            name=""
            id="personalidad1"
            {...formik.getFieldProps("personalidad1")}
          >
            {/* <option value={""} disabled>
              Seleccione una opción
            </option>
            {personalidades.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))} */}
          </select>
        </label>
        {/* <MultipleSelectChip
          personalidades={personalidades}
          labelName="Personalidad"
          label={"personalidad2"}
          value={formik.values.personalidad2}
          handleChange={formik.handleChange}
        /> */}
        {/* <RadioButtonsGroup
          options={genero}
          label="Género"
          labelName={"genero"}
          value={formik.values.genero}
          handleChange={formik.handleChange}
        /> */}
        {/* <RadioButtonsGroup
          options={tipoMascota}
          label="Tipo de Mascota"
          labelName="tipoMascota"
          value={formik.values.tipoMascota}
          handleChange={formik.handleChange}
        /> */}
        <button type="submit">Guardar Mascota</button>
      </form>
    </main>
  );
};

export default AgregarDestinos;