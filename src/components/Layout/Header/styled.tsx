import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.bg__primary};

  @media screen and (min-width: 1000px) {
    width: 100%;
  }
`;

export { Header };
