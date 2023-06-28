import { FiPlus } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js';
import { Header } from '../../components/Header/index.jsx'
import { Input } from '../../components/Input/index.jsx'
import { Section } from '../../components/Section/index.jsx'
import { Note } from '../../components/Note/index.jsx'
import { ButtonText } from "../../components/ButtonText/index.jsx"

export function Home() {
  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" isActive/></li>
        <li><ButtonText title="Frontend"/></li>
        <li><ButtonText title="Node"/></li>
        <li><ButtonText title="React"/></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título"/>
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{ 
            title: 'React Modal',
            tags: [{id: 1, name: 'React'}]
           }}>
          </Note>

          <Note data={{ 
            title: 'Exemplo de Middleware',
            tags: [{id: 1, name: 'express'}, {id: 2, name: 'nodejs'}]
           }}>
          </Note>

        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  )
}