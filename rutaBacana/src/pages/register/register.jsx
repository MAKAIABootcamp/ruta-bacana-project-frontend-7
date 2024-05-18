import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { actionRegisterWithEmailAndPassword } from "../../redux/userAuth/userAuthActions";
import { useDispatch } from "react-redux";
import "./register.scss";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="container">
      {" "}
      {/* Contenedor con imagen de fondo */}
      <h1>Ruta Bacana</h1>
      <div className="form-container">
        {" "}
        {/* Contenedor del formulario */}
        <h1>Registro</h1>
        <Formik
          initialValues={{ name: "", email: "", password: "", ciudad: "" }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("El nombre es requerido"),
            email: Yup.string()
              .email("Correo electrónico inválido")
              .required("El correo electrónico es requerido"),
            password: Yup.string()
              .min(6, "La contraseña debe tener al menos 6 caracteres")
              .required("La contraseña es requerida"),
            // ciudad: Yup.string().required('La ciudad es requerida'),
          })}
          onSubmit={(values, actions) => {
            console.log(values); // Aquí puedes enviar los datos al servidor
            dispatch(actionRegisterWithEmailAndPassword(values));
            actions.setSubmitting(false);
            navigate("/");
          }}
        >
          {({ isSubmitting }) => (
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
                <label htmlFor="ciudad">Ciudad:</label>
                <Field type="text" name="ciudad" />
                <ErrorMessage name="ciudad" component="div" className="error" />
              </div>

              <button type="submit" disabled={isSubmitting}>
                Registrarse
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
