import "./login.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import ProvidersLogin from "../../componentes/ProvidersLogin/ProvidersLogin";
import { loginProviders } from "../../data/loginProvider";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { actionLoginWithEmailAndPassword } from "../../redux/userAuth/userAuthActions";
import Cargando from "../../componentes/cargando/Cargando";
import { logout } from "../../redux/userAuth/userAuthSlice";
import { GoArrowLeft } from "react-icons/go";
import FooterMinimo from "../../componentes/FooterMinimo/FooterMinimo";
import 'animate.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuth, isLoading, error } = useSelector(
    (store) => store.userAuth
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Por ingrese un correo válido")
        .required("Debe digitar su correo electrónico"),
      password: Yup.string().required("Debe digitar una contraseña"),
    }),
    onSubmit: async (values) => {
      dispatch(actionLoginWithEmailAndPassword(values));
    },
  });

  if (isLoading) return <Cargando />;
  if (error) {
    Swal.fire({
      title: "Oops!",
      text: "Ha ocurrido un error en el inicio de sesión, por favor verifica tus credenciales",
      icon: "error",
      iconColor: "#f50400",
      position: "center",
      confirmButtonColor: " #4fa8fb",
      width: "30%",
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      // hideClass: {
      //   popup: 'swal2-backdrop-hide',
      // },
      customClass: {
        //title: "swal2-title",
        //content: "swal2-content",
        //icon: "swal2-icon-error",
        //confirmButton: "swal2-confirm",
      },
      timer: 4000,
      timerProgressBar: true, 
    }).then((result) => {
      // if (result.dismiss === Swal.DismissReason.timer) {
      //   console.log("La alerta se cerró automáticamente");
        dispatch(logout());
      }
    );
  }

  if (isAuth && user.name) {
    Swal.fire({
      title: `¡Hola ${user.name}!`,
      text: "Has iniciado sesión exitosamente",
      icon: "success",
      confirmButtonColor: " #4fa8fb",
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      customClass: {
        //popup: "swal2-popup",
        //title: "swal2-title",
        //content: "swal2-content",
        //icon: "swal2-icon-success",
        //confirmButton: "swal2-confirm",
      },
    }).then((result) => {
      if (result.isConfirmed) navigate("/");
    });
  }

  return (
    <>
      <div className="loginBody">
        <main className="loginMain">
          <section className="loginSectionContainer">
            <figure className="logoContainer">
              <img
                className="logoImage"
                src="src\assets\images\rutaBacanaLogo.png"
                alt=""
              />
            </figure>
            <form
              className="loginInputsContainer"
              onSubmit={formik.handleSubmit}
            >
              <article className="inputContainer">
                <label
                  htmlFor="email"
                  className={
                    formik.touched.email && formik.errors.email ? "error" : ""
                  }
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  placeholder="ejemplo@email.com"
                  id="email"
                  {...formik.getFieldProps("email")}
                />
              </article>
              {formik.touched.email && formik.errors.email ? (
                <div className="errorText">{formik.errors.email}</div>
              ) : null}
              <article className="inputContainer">
                <label
                  htmlFor="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "error"
                      : ""
                  }
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  id="password"
                  {...formik.getFieldProps("password")}
                />
              </article>
              {formik.touched.password && formik.errors.password ? (
                <div className="errorText">{formik.errors.password}</div>
              ) : null}
              <button className="loginButton" type="submit">
                Ingresar
              </button>
              {loginProviders.map((item, index) => (
                <ProvidersLogin
                  key={index}
                  name={item.name}
                  image={item.image}
                  colorButton={item.colorButton}
                  provider={item.provider}
                />
              ))}
            </form>
            <article className="interactionsContianer">
              <p
                className="registerButton"
                type="text"
                onClick={() => navigate("/register")}
              >
                Si aún no estás registrado da click aquí
              </p>
            </article>
          </section>
          <div className="contenedorFlechaAtras">
            <GoArrowLeft
              className="flechaAtras"
              onClick={() => navigate("/")}
            />
          </div>
        </main>
      </div>

      <FooterMinimo />
    </>
  );
};

export default Login;
