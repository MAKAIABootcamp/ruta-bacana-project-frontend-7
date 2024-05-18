import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import "./insertCode.scss";
import { actionLoginWithCode } from "../../redux/userAuth/userAuthActions";
import Cargando from "../../componentes/cargando/Cargando";
import Swal from "sweetalert2";
import { logout } from "../../redux/userAuth/userAuthSlice";

const InsertCode = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isAuth, isLoading, error } = useSelector(
    (store) => store.userAuth
  );

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .required("Por favor ingrese el código de verificación")
        .max(6, "El código de verificación debe tener 6 dígitos")
        .min(6, "El código de verificación debe tener 6 dígitos"),
    }),
    onSubmit: async (values) => {
      dispatch(actionLoginWithCode(values.code));
    },
  });

  if (isLoading) return <Cargando />;

  if (error) {
    Swal.fire({
      title: "Oops!",
      text: "Ha ocurrido un error en el inicio de sesión, por favor verifica tus credenciales",
      icon: "error",
    }).then((result) => {
      if (result.isConfirmed) dispatch(logout());
    });
  }

  if (isAuth && user) {
    Swal.fire({
      title: `${user.name ? `¡Hola ${user.name}!` : "¡Hola!"}`,
      text: "Has iniciado sesión exitosamente",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) navigate("/");
    });
  }

  return (

    <div className="codeLoginContainer">
      <main className="codeLogin">
        <h1>Ingrese el código de verificación</h1>
        <form onSubmit={formik.handleSubmit}>
          <label
            htmlFor="code"
            className={formik.touched.code && formik.errors.code ? "error" : ""}
          >
            <input
              type="text"
              placeholder="Ingrese su código de verificación"
              id="code"
              {...formik.getFieldProps("code")}
            />
          </label>
          {formik.touched.code && formik.errors.code ? (
            <div className="errorText">{formik.errors.code}</div>
          ) : null}

          <button type="submit">Iniciar Sesión</button>
          <button
            className="goToRegister"
            type="button"
            //   onClick={() => navigate(-1)}
            onClick={() => navigate("/phone")}
          >
            Ir a inicio de sesión con celular
          </button>
        </form>
      </main>
    </div>

  );
};

export default InsertCode;