import { Container } from "./style"
import { Button } from "../../components/Button/index.jsx"

export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <span>Ruan Lazareti</span>
      <Button title="Login" loading/>
      <Button title="Cadastre-se"/>
    </Container>
  )
}