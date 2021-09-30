import styled from 'styled-components';

const RepositoryContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  padding: 24px 20px;
  margin: 0;

  background-color: ${({ theme }) => theme.bg__primary};

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);

    gap: 12px;

    padding-right: 200px;
  }
`;

const RepositoryItem = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin: 24px 0;

  padding: 12px 0;

  border: 1px solid ${({ theme }) => theme.border__primary};

  overflow: hidden;

  .repository__item {
    margin: 0;
    margin-left: 2px;
    padding: 2px;

    font-size: 1rem;
    font-weight: bold;
  }

  .item__name {
    overflow: hidden;
  }

  .item__url {
    font-size: 0.8rem;

    overflow: hidden;
  }
`;

export { RepositoryContainer, RepositoryItem };
