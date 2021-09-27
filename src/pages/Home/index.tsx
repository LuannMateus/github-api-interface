import { useEffect } from 'react';
import * as S from '../../components/';
import { useUser } from '../../hooks/useUser';

const Home = () => {
  const { user, handleUser } = useUser();

  useEffect(() => {
    handleUser('luannmateus');
  }, []);

  return (
    <S.Layout>
      <S.Search handleClick={handleUser} />
      <S.Profile {...user} />
    </S.Layout>
  );
};

export default Home;
