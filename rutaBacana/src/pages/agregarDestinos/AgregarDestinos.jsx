import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import MultipleSelectChip from "../../components/MultipleSelectChip/MultipleSelectChip";
// import {
//   personalidades,
//   genero,
//   tipoMascota,
// } from "../../data/mascotasOptions";
import imageUpload from "../../assets/images/ImagenHome/upload_9427985.png";
// import RadioButtonsGroup from "../../components/RadioButtonsGroup/RadioButtonsGroup";
import { useFormik } from "formik";
import "./agregarDestinos.scss";
import fileUpload from "../../services/fileUpload";
import { actionAddDestinos } from "../../redux/Destinos/destinosActions";
import Cargando from "../../componentes/cargando/Cargando";
import Swal from "sweetalert2";
import { setSuccessRequest } from "../../redux/Destinos/destinosSlice";
import { categoria } from "../../data/destinosOptions";

const AgregarDestinos = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState(
    "https://www.shutterstock.com/shutterstock/photos/2252183671/display_1500/stock-photo-colombian-flag-in-the-national-park-2252183671.jpg"
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
      nombre: "",
      categoria: "",
      descripcion: "",
      // personalidad1: "",
      // personalidad2: [],
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
      text: "Ha ocurrido un error en la creación del nuevo destino",
      icon: "error",
    });
  }

  if (successRequest) {
    Swal.fire({
      title: "Excelente!",
      text: "Has guardado con éxito un nuevo destino",
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
        <label htmlFor="nombre">
          <span>Nombre Destino</span>
          <input
            id="nombre"
            type="text"
            placeholder="Piedra del peñon"
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
        <label htmlFor="imagen">
          <span>Foto</span>
          <figure className="upload">
            <img src={imageUpload} alt="upload" />
            <figcaption>Cargar imagen</figcaption>
          </figure>
          <img className="image" src={image} alt="pet" />
          <input id="imagen" type="file" onChange={handleChangeFile} />
        </label>
        {/* <label htmlFor="personalidad">
          <span>Personalidad</span>
          <select
            name=""
            id="personalidad1"
            {...formik.getFieldProps("personalidad1")}
          >
            <option value={""} disabled>
              Seleccione una opción
            </option>
            {personalidades.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label> */}
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
        <button type="submit">Guardar Destino</button>
      </form>
    </main>
  );
};

export default AgregarDestinos;