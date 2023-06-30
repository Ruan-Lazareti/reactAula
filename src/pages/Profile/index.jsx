import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles.js";
import { Input } from "../../components/Input/index.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Link } from "react-router-dom";


export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </ Link>
      </header>

      <Avatar>
        <img src="https://github.com/ruan-lazareti.png" alt="Imagem do Usuário"/>

        <label htmlFor="user">
        <FiCamera/>
        <input type="file" id="user" />

        </label>
      </Avatar>

      <Form>
        <Input
            type="text" 
            placeholder="Nome"
            icon={FiUser}
          />

          <Input
            type="text" 
            placeholder="E-mail"
            icon={FiMail}
          />

          <Input
            type="password" 
            placeholder="Senha Atual"
            icon={FiLock}
          />

          <Input
            type="password" 
            placeholder="Nova Senha"
            icon={FiLock}
          />

          <Button title="Salvar"/>
      </Form>
    </Container>
  )
}