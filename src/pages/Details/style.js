import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;

  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

export const Content = styled.div`
  max-width: 55.0rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 3.6rem;
    font-weight: 500;
    margin: 64px 0 16px;
  }

  p {
    text-align: justify;
    margin-bottom: 26px;
  }
`