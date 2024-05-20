import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { actionRegisterWithEmailAndPassword } from "../../redux/userAuth/userAuthActions";
import { useDispatch } from "react-redux";
import Header from "../../componentes/Header/Header";
import "./register.scss";

import { useNavigate } from "react-router-dom";
import FooterMinimo from "../../componentes/FooterMinimo/FooterMinimo";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue("profilePicture", file);
  };

  return (
    <div className="container">
      <Header />
      {/* Contenedor con imagen de fondo */}
      <h1 className="rutaBacanaTitle">Ruta Bacana</h1>
      <div className="form-container">
        {/* Contenedor del formulario */}
        <h1 className="registroTitle">Registro</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "", profilePicture: null }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("El nombre es requerido"),
            email: Yup.string()
              .email("Correo electrónico inválido")
              .required("El correo electrónico es requerido"),
            password: Yup.string()
              .min(6, "La contraseña debe tener al menos 6 caracteres")
              .required("La contraseña es requerida"),
          })}
          onSubmit={(values, actions) => {
            console.log(values); // Aquí puedes enviar los datos al servidor
            dispatch(actionRegisterWithEmailAndPassword(values));
            actions.setSubmitting(false);
            navigate("/");
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <div>
                <label htmlFor="name">Nombre:</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="email">Correo electrónico:</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="password">Contraseña:</label>
                <Field type="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <div>
                <label htmlFor="profilePicture">Foto de Perfil:</label>
                <input
                  type="file"
                  id="profilePicture"
                  name="profilePicture"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setFieldValue)}
                />
                <ErrorMessage name="profilePicture" component="div" className="error" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                Registrarse
              </button>
            </Form>
          )}
        </Formik>

      
      </div>
      
      <div className="arrow-to-home">
          <a href="/">
            <img src="../../assets/images/arro.png" alt="home" />
          </a>
        </div>
      <FooterMinimo/>
    </div>
  );
};

export default Register;
