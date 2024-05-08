import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
//import phoneImage from "../../assets/phone-call_3059446.png";
import "./phoneLogin.scss";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/firebaseconfig";
import Swal from "sweetalert2";

const PhoneLogin = () => {
  const navigate = useNavigate();

  const generateRecaptcha = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {},
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  //Función que envía el código de verificación
  const sendSms = (number, recaptchaVerifier) => {
    signInWithPhoneNumber(auth, `+57${number}`, recaptchaVerifier)
      .then((response) => {
        window.confirmationResult = response;
        console.log(response);
        Swal.fire(
          "Excelente",
          `Te enviaremos un mensaje para confirmar a ${number}`,
          "success"
        );
      })
      .then(() => {
        navigate(`insertCode/+57${number}`);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Oops!",
          `Ocurrió un error al realizar tu solicitud ${error.message}`,
          "error"
        );
      });
  };

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .required("Por favor ingrese un número celular")
        .max(10, "El número celular debe tener 10 dígitos")
        .min(10, "El número celular debe tener 10 dígitos"),
    }),
    onSubmit: async (values) => {
      generateRecaptcha(values.phone);
      const appVerifier = window.recaptchaVerifier;
      sendSms(values.phone, appVerifier);
    },
  });

  return (
    <main className="phoneLogin">
      <h1>Iniciar sesión con número celular</h1>
      <form onSubmit={formik.handleSubmit}>
        <label
          htmlFor="phone"
          className={formik.touched.phone && formik.errors.phone ? "error" : ""}
        >
          <input
            type="text"
            placeholder="Ingrese un número celular"
            id="phone"
            {...formik.getFieldProps("phone")}
          />
        </label>
        {formik.touched.phone && formik.errors.phone ? (
          <div className="errorText">{formik.errors.phone}</div>
        ) : null}

        <button type="submit">Enviar código</button>
        <button
          className="goToRegister"
          type="button"
          onClick={() => navigate("/login")}
        >
          Ir a inicio de sesión
        </button>
      </form>
      <div id="recaptcha-container"></div>
    </main>
  );
};

export default PhoneLogin;