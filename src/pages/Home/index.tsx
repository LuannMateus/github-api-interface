import { useEffect } from 'react';
import * as S from '../../components/';
import { useUser } from '../../hooks/useUser';
import { HomeContainer } from './styled';

const Home = () => {
  const { user, repository, handleUserAndRepository } = useUser();

  useEffect(() => {
    handleUserAndRepository('luannmateus');
  }, []);

  return (
    <HomeContainer>
      <S.Header>
        <S.Search handleClick={handleUserAndRepository} />
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
