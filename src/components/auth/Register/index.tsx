import { useState, useRef } from "react"
import InputGroup from "../../common/InputGroup"
import { useActions } from "../../../hooks/useActions"
import { IRegisterModel } from "./types"
import { RegisterActionTypes, RegisterError } from "./types"
import { useNavigate } from "react-router";

import {RegisterAction} from "./types"

import {validationFields} from "./validation"
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';
import InputGroupFormik from "../../common/InputGroupFormik"

interface IRegisterFormProps {
    handleSubmit: (e: React.FormEvent) => void
}
interface OtherProps {
    title?: string;
}



const RegisterPage = () => {

  const initialValues: IRegisterModel = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const initialErrors: RegisterError  = {
    name: [],
    email: [],
    password: [],
    error: "",
  };

  const {loginUser}  = useActions();
  const navigator = useNavigate();
  const refFormik = useRef<FormikProps<IRegisterModel>>(null);

  const [invalid, setInvalid] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [serverErrors, setServerErrors] = useState<RegisterError>(initialErrors);
  const handleSubmit = async (values: IRegisterModel, actions: any) => {
    setIsSubmitted(true);

    try {
      console.log("Register begin");
      await loginUser(values);
      console.log("Register end");
      setIsSubmitted(false);
      navigator("/login")
    } catch (ex) {
      const serverErrors = ex as RegisterError;
      Object.entries(serverErrors).forEach(([key,value]) => {
        if (Array.isArray(value)) {
          let message = '';
          value.forEach((item) => {
            message += `${item}`;
          });
          refFormik.current?.setFieldError(key,message);
        }
      });
      if (serverErrors.error) {
        setInvalid(serverErrors.error);
      }
      setIsSubmitted(false);
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Реєстрація</h1>
          {invalid && <div className="alert alert-danger">{invalid}</div>}
        <Formik
          innerRef={refFormik}
          initialValues={initialValues}
          validationSchema={validationFields}
          onSubmit={handleSubmit}
        >
          {(props: FormikProps<IRegisterModel>) => {
            const {
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            } = props
            /* and other goodies */
            return (
            <Form onSubmit={handleSubmit}>
              <InputGroupFormik
                label="Ім'я"
                field="name"
                type="text"
                value={values.name}
                touched = {touched.name}
                error={errors.name}
                onChange={handleChange}
              />

              <InputGroupFormik
                label="Пошта"
                type="email"
                field="email"
                value={values.email}
                touched={touched.email}
                error={errors.email}
                onChange={handleChange}
              />

              <InputGroupFormik
                label="Пароль"
                type="password"
                field="password"
                value={values.password}
                touched={touched.password}
                error={errors.password}
                onChange={handleChange}
              />

              <InputGroupFormik
                label="Підтвердження паролю"
                type="password"
                field="password_confirmation"
                value={values.password_confirmation}
                touched={touched.password_confirmation}
                error={errors.password_confirmation}
                onChange={handleChange}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                Зареєструватись
              </button>
            </Form>
          )}};
        </Formik>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
