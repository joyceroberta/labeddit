import React from 'react';
import { useHistory } from 'react-router-dom';
import { login, logout } from '../constants/user';
import {goToSignUp} from '../routers/coordinator'
import {useForm} from '../hooks/useForm'
import { ButtonSignUp, Buttons, CardLogin } from "../styled/styled";
import { useUnProtectPage} from "../hooks/useUnProtectPage"



function LoginPage() {
  useUnProtectPage();
  const history = useHistory()
  const {form, onChange} = useForm({email: "", password: ""})

  const handleInputChange = (event) => {
    const {value, name} = event.target

    onChange(value, name)
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    login(form, history)
    
  } 

  

 


  return (
    <CardLogin>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="E-mail"
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={handleInputChange}
        />

        <Buttons> Login </Buttons>
        
      </form>

      <ButtonSignUp onClick={() => goToSignUp(history)}>
        {" "}
        Ainda não faz parte do LabEddit? Cadastre-se!
      </ButtonSignUp>
    </CardLogin>
  );
}

export default LoginPage;