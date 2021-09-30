import { FC } from 'react';
import { ProfileStatusContainer } from './styled';

type ProfileStatusProps = {
  followers: number;
  followings: number;
  gits: number;
  repos: number;
};

const ProfileStatus: FC<ProfileStatusProps> = ({
  followers,
  followings,
  gits,
  repos,
}) => {
  return (
    <ProfileStatusContainer>
      <div className="profile-status">
        <p>Followers</p>
        <span>{followers}</span>
      </div>
      <div className="profile-status">
        <p>Followings</p>
        <span>{followings}</span>
      </div>
      <div className="profile-status">
        <p>Gits</p>
        <span>{gits}</span>
      </div>
      <div className="profile-status">
        <p>Repos</p>
        <span>{repos}</span>
      </div>
    </ProfileStatusContainer>
  );
};

export { ProfileStatus };
