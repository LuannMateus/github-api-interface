import styled from 'styled-components';

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;

  background-color: ${({ theme }) => theme.bg__primary};

  @media screen and (min-width: 1000px) {
    width: 100%;
  }
`;

export { Layout };
