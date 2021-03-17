import React from "react";
import { useHistory } from "react-router-dom";
import { signUp } from "../constants/user";
import { useForm } from "../hooks/useForm";
import { useUnProtectPage } from "../hooks/useUnProtectPage";
import { goToLogin } from "../routers/coordinator";
import { Buttons, CardRegister, InfoLabel } from "../styled/styled";

function RegisterPage() {
  useUnProtectPage();
  const history = useHistory();
  const { form, onChange } = useForm({ email: "", password: "", username: "" });

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(form, history);
  };

  return (
    <CardRegister>
      <Buttons onClick={() => goToLogin(history)}> Voltar pro Login</Buttons>
      <form onSubmit={handleSubmit}>
        <InfoLabel>Nome: </InfoLabel>
        <input
          type="text"
          placeholder="Nome"
          name="username"
          value={form.username}
          onChange={handleInputChange}
        />

        <InfoLabel>E-mail: </InfoLabel>
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />

        <InfoLabel>Senha: </InfoLabel>
        <input
          type="password"
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={handleInputChange}
        />

        <Buttons> Login </Buttons>
      </form>
    </CardRegister>
  );
}

export default RegisterPage;
