import styled from 'styled-components';

const ProfileStatusContainer = styled.section`
  width: 100vw;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .profile-status {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .profile-status:first-child {
    margin-left: 8px;
  }

  .profile-status:last-child {
    margin-right: 8px;
  }

  p {
    font-weight: bold;
  }

  span {
    color: ${({ theme }) => theme.text__primary};
  }

  @media screen and (min-width: 1000px) {
    width: 100%;

    justify-content: flex-start;

    .profile-status {
      margin: 0 4px;
    }
  }
`;

export { ProfileStatusContainer };
