import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import * as S from '../../components/';
import { useUser } from '../../hooks/useUser';

import { HomeContainer } from './styled';
import '../../common/styles/tabComponent.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user, repository, starredRepository, handleUserAndRepositories } =
    useUser();

  useEffect(() => {
    handleUserAndRepositories('luannmateus');
    setIsLoading(false);
  }, []);

  return (
    <HomeContainer>
      <S.Header>
        <S.Search handleClick={handleUserAndRepositories} />
        <S.Profile {...user} />
      </S.Header>
      <S.Layout>
        {isLoading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80vh',
            }}
          >
            <ClipLoader color="purple" />
          </div>
        ) : (
          <Tabs>
            <TabList className="tab-list-container">
              <Tab className="tab-list__item">Repositories</Tab>
              <Tab className="tab-list__item">Starred</Tab>
            </TabList>

            <TabPanel>
              <S.Repository repositories={repository} />
            </TabPanel>
            <TabPanel>
              <S.Repository repositories={starredRepository} />
            </TabPanel>
          </Tabs>
        )}
      </S.Layout>
      <S.Footer />
    </HomeContainer>
  );
};

export default Home;
