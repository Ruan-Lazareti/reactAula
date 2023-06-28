import { Background, Container, Form } from './style.js'

import { FiMail, FiLock} from 'react-icons/fi'
import { Input } from '../../components/Input/index.jsx'
import { Button } from '../../components/Button/index.jsx'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input type="text" placeholder="E-Mail" icon={FiMail}/>
        <Input type="password" placeholder="Senha" icon={FiLock}/>

        <Button title="Entrar"/>

        <a href="#">
          Criar Conta
        </a>
      </Form>

      <Background />
    </Container>
  )
}