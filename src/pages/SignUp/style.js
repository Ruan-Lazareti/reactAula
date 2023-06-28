import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  > h1 {
    color: ${({theme}) => theme.COLORS.ORANGE};
    font-size: 4.8rem;
    font-weight: 700;
  }

  > p {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
  }

  > h2 {
    color: ${({theme}) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 2.4rem;

    margin: 4.8rem 0;
  }

  > a {
    color: ${({theme}) => theme.COLORS.ORANGE};
    margin-top: 12.4rem;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: opacity(80%) grayscale(40%) contrast(110%);
`