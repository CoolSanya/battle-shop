import { useState, useRef } from "react";
import { useNavigate } from 'react-router';
import InputGroupFormik from "../../common/InputGroup";
import {useActions} from '../../../hooks/useActions';
import {IRegisterModel} from './types';
import { Formik, Form, FormikProps } from "formik";
import { validationFields } from "./validation";



const RegisterPage = () => {

  const {registerUser} = useActions();

  const { loginUser } = useActions();
  const navigator = useNavigate();

  const refFormik = useRef<FormikProps<IRegisterModel>>(null);

  const initialState: IRegisterModel = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const [invalid, setInvalid] = useState<string>("");

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Реєстрація</h1>
          {invalid && <div className="alert alert-danger">{invalid}</div>}
        <Formik
          innerRef={refFormik}
          initialValues={initialState}
          validationSchema={validationFields}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <InputGroupFormik
                label="Назва"
                error={errors.email}
                onChange={handleChange}
                type="name"
                field="name"
                touched={touched.name}
                value={values.name}
              />

              <InputGroupFormik
                label="Пошта"
                error={errors.email}
                onChange={handleChange}
                type="email"
                field="email"
                touched={touched.email}
                value={values.email}
              />

              <InputGroupFormik
                label="Пароль"
                error={errors.password}
                onChange={handleChange}
                type="password"
                field="password"
                touched={touched.password}
                value={values.password}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                Вхід
              </button>
            </form>
          )}
        </Formik>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
