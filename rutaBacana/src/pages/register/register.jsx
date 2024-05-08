import React from "react";
import "./register.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../redux/UserAuth/userAuthActions";
import {useDispatch} from 'react-redux'

import { useNavigate } from "react-router-dom"

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="container"> {/* Contenedor con imagen de fondo */}
    <h1>Ruta Bacana</h1>
      <div className="form-container"> {/* Contenedor del formulario */}
        <h1>Registro</h1>
        <Formik
          initialValues={{ nombre: '', correo: '', contraseña: '', ciudad: '' }}
          validationSchema={Yup.object().shape({
            nombre: Yup.string().required('El nombre es requerido'),
            correo: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
            contraseña: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
            ciudad: Yup.string().required('La ciudad es requerida'),
          })}
          onSubmit={(values, actions) => {
            console.log(values); // Aquí puedes enviar los datos al servidor
            try {
              dispatch(registerUser(values))
              actions.setSubmitting(false);
              navigate("/login")
            } catch (error) {
              // sacar alerta de error
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="nombre">Nombre:</label>
                <Field type="text" name="nombre" />
                <ErrorMessage name="nombre" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="correo">Correo electrónico:</label>
                <Field type="email" name="correo" />
                <ErrorMessage name="correo" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="contraseña">Contraseña:</label>
                <Field type="password" name="contraseña" />
                <ErrorMessage name="contraseña" component="div" className="error" />
              </div>

              <div>
                <label htmlFor="ciudad">Ciudad:</label>
                <Field type="text" name="ciudad" />
                <ErrorMessage name="ciudad" component="div" className="error" />
              </div>

              <button type="submit" disabled={isSubmitting}>Registrarse</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;