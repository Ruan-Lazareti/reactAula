import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 12.4rem;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
    }
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -10rem auto 6.4rem;
  width: 18.6rem;
  height: 18.6rem;
  
  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    right: 7px;
    bottom: 7px;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;

    cursor: pointer;

    svg {
      width: 2.0rem;
      height: 2.0rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    input {
      display: none;
    }
  }
  `

export const Form = styled.form`
  width: 340px;
  margin: 0 auto;

  div:nth-child(3) {
    margin-top: 2.4rem;
  }
`