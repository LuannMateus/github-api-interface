import { useEffect } from 'react';
import * as S from '../../components/';
import { useRepository } from '../../hooks/useRepository';
import { useUser } from '../../hooks/useUser';
import { HomeContainer } from './styled';

const Home = () => {
  const { user, handleUser } = useUser();
  const { repository, handleUserRepositories } = useRepository();

  useEffect(() => {
    handleUser('luannmateus');
    handleUserRepositories('luannmateus');
  }, []);

  return (
    <HomeContainer>
      <S.Header>
        <S.Search
          handleClick={handleUser}
          handleRepository={handleUserRepositories}
        />
        <S.Profile {...user} />
      </S.Header>
      <S.Layout>
        <S.Repository repositories={repository} />
      </S.Layout>
      <S.Footer />
    </HomeContainer>
  );
};

export default Home;
