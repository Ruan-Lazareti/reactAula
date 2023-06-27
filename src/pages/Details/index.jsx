import { Container, Links } from "./style"

import { Header } from "../../components/Header/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button/index.jsx"

export function Details() {
  return (
    <Container>
      <Header />

      <ButtonText title="Excluir a nota"/>

      <Section title="Links Úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag  title="express" />
        <Tag  title="nodejs" />
      </Section>
      <Button title="Voltar"/>
    </Container>
  )
}