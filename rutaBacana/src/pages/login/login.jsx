import React from 'react';
import './login.scss'
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (values, { setSubmitting }) => {
    // Aquí iría la lógica de autenticación, por ahora simplemente redireccionamos
    navigate('/');
  };

  return (
    <div className='loginBody'>
      <main className='loginMain'>
        <section className='loginSectionContainer'>

          <figure className='logoContainer'>
            <img className='logoImage' src="src\assets\images\rutaBacanaLogo.png" alt="" />
            <p className='loginTitle'>Login</p>
          </figure>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleLogin}
          >
            <Form className='loginInputsContainer'>
              <article className='inputContainer'>
                <label htmlFor='email'>Correo Electrónico</label>
                <Field type='text' name='email' />
              </article>
              <article className='inputContainer'>
                <label htmlFor='password'>Contraseña</label>
                <Field type='password' name='password' />
              </article>
            </Form>
          </Formik>

          <article className='interactionsContianer'>
            <button type='submit' className='loginButton'>Ingresar</button>
            <p className='registerButton'>Si aún no estás registrado da click aquí</p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Login;
