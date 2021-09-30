import styled from 'styled-components';

const FooterContainer = styled.footer`
  height: 10vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.bg__primary};

  margin: 0;
`;

export { FooterContainer };
