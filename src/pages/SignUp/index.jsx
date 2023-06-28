import { Background, Container, Form } from './style.js'

import { FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Input } from '../../components/Input/index.jsx'
import { Button } from '../../components/Button/index.jsx'

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie Sua Conta</h2>

        <Input type="text" placeholder="Nome" icon={FiUser}/>
        <Input type="text" placeholder="E-Mail" icon={FiMail}/>
        <Input type="password" placeholder="Senha" icon={FiLock}/>

        <Button title="Cadastrar"/>

        <a href="#">
          Voltar para o Login
        </a>
      </Form>
    </Container>
  )
}