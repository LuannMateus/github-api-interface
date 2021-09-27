import styled from 'styled-components';

const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 24px;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 0 20px;
  }

  /*
    *sm @media screen and (max-width: 569px) {
    }
    * md @media screen and (max-width: 799px) {
    }
    * lg @media screen and (max-width: 999px) {
    }
    * xl @media screen and (min-width: 1000px) {
    }
  */
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;

  border-radius: 100%;
`;

const ProfileInformation = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .profile__title {
    margin-top: 14px;
    font-size: 2rem;
    font-weight: 400;
  }

  p {
    color: ${({ theme }) => theme.text__primary};
  }

  .profile__field {
    color: #fff;
    font-weight: bold;
  }

  @media screen and (min-width: 1000px) {
    align-items: flex-start;

    margin-left: 14px;

    p {
      margin: 8px 0;
    }
  }
`;

export { ProfileContainer, ProfileImage, ProfileInformation };
