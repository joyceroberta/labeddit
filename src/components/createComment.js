import React from "react"
import { useForm } from "../hooks/useForm"
import {createComments} from "../constants/user"
import {Buttons} from "../styled/styled"

function CreateComment(props){
    const {form, onChange, resetForm} = useForm({text: ""})

    const handleSubmit = (event) =>{
        event.preventDefault()
        createComments(form, props.id)
        resetForm()
    }

    const handleInputChange = (event) => {
      const { value, name } = event.target;

      onChange(value, name);
    };


    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Insira aqui o seu comentário"
            onChange={handleInputChange}
            value={form.text}
            name="text"
          ></input>
          <Buttons>Comentar</Buttons>
        </form>
      </div>
    );
}

export default CreateComment;