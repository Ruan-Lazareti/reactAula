import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 15.0rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  color: ${({theme}) => theme.COLORS.WHITE};


  border-radius: 10px;
  border: none;
  resize: none;

  padding: 16px;

  &::placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }
`