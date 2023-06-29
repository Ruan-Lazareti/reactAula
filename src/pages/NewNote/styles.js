import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: "content";
    overflow-y: auto;
  }
`

export const Form = styled.form`
  width: 55.0rem;
  margin: 3.8rem auto 0;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.6rem;

    h1 {
      font-size: 3.6rem;
      font-weight: 500;
    }

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.0rem;
    }
  }

  .tags {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`