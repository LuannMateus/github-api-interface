import styled from 'styled-components';

const Button = styled.button`
  width: 120px;
  background-color: ${({ theme }) => theme.btn__primary};
  font-size: 1rem;

  border: none;
  border-radius: 4px;

  cursor: pointer;

  transition: ease-in 0.2s background-color;

  &:hover {
    background-color: ${({ theme }) => theme.btn__primary_hover};
  }
`;

export { Button };
