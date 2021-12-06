import React, { useState } from "react";
import InputGroup from "../../common/InputGroup";
// import {useActions} from '../../../hooks/useActions';
import {IRegisterModel} from './types';



const RegisterPage = () => {

  // const {registerUser} = useActions();

  const [model, setModel] = useState<IRegisterModel>({
    name: "",
    email: "",
  } as IRegisterModel);

  const hadleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // registerUser(model);
    console.log("submit data", model);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Реєстрація</h1>
          <form onSubmit={handleSubmit}>
            <InputGroup
              label="Ім'я"
              value={model.name}
              field="name"
              type="text"
              onChange={hadleChange}
            />

            <InputGroup
              label="Пошта"
              value={model.email}
              field="email"
              type="email"
              onChange={hadleChange}
            />

            <InputGroup
              label="Пароль"
              value={model.password}
              field="password"
              type="password"
              onChange={hadleChange}
            /> 

            <InputGroup
              label="Підтвердження пароля"
              value={model.password_confirmation}
              field="password_confirmation"
              type="password"
              onChange={hadleChange}
            /> 

            <button type="submit" className="btn btn-primary">
              Реєстрація
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
