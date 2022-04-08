import React from "react";
import { useForm } from "react-hook-form";
import "../App.css";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function App(props) {
  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  };
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        // register({ name: 'address', value: data.logradouro })
        setValue("Nome");
        setValue("Email");
        setValue("password");
        setValue("address", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("uf", data.uf);
        setFocus("addressNumber");
      });
  };

  return (
    <div align="center">
      <br />
      <h1> Cadastro </h1>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>

        <Form.Group className="mb-3" controlId="formGroupEmail">

          <Form.Label>Primeiro Passo</Form.Label>

          <label>
            Nome :
            <input type="text" {...register("nome")} />
          </label>

          <label>
            Email :
            <input type="email" {...register("email")} />
          </label>

          <label>
            Senha :
            <input type="text" {...register("password")} />
          </label>
        </Form.Group>

        <Form.Group className="mb-6" controlId="formGroupEmail">

          <Form.Label>Endereço</Form.Label>

          <label>
            CEP :
            <input type="text" {...register("cep")} onBlur={checkCEP} />
          </label>

          <label>
            Rua :
            <input type="text" {...register("address")} />
          </label>

          <label>
            Número :
            <input type="text" {...register("addressNumber")} />
          </label>

          <label>
            Bairro :
            <input type="text" {...register("neighborhood")} />
          </label>

          <label>
            Cidade :
            <input type="text" {...register("city")} />
          </label>

          <label>
            Estado :
            <input type="text" {...register("uf")} />
          </label>

        </Form.Group>

        <div align="center">
          <Button type="submit">Pesquisar Endereço</Button>
        </div>

      </form>
    </div>
  );
}
export default App;
