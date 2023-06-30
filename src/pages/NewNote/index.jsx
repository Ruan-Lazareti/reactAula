import { Container, Form } from "./styles.js";
import { Link } from 'react-router-dom'
import { Header } from "../../components/Header/index.jsx"
import { Input } from "../../components/Input/index.jsx"
import { TextArea } from "../../components/TextArea/index.jsx";
import { Section } from "../../components/Section/index.jsx"
import { NoteItem } from "../../components/NoteItem/index.jsx"
import { Button } from "../../components/Button/index.jsx"

export function NewNote() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input type="text" placeholder="Título"/>
          <TextArea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem value="https://www.rocketseat.com.br"/>
            <NoteItem placeholder="Novo Link" isNew/>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React"/>
              <NoteItem placeholder="Novo marcador" isNew/>
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}