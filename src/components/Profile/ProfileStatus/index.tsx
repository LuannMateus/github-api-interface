import { FC } from 'react';
import { ProfileStatusContainer } from './styled';

type ProfileStatusProps = {
  followers: number;
  followings: number;
  gits: number;
  repos: number;
};

const ProfileStatus: FC<ProfileStatusProps> = ({ followers }) => {
  return (
    <ProfileStatusContainer>
      <div className="profile-status">
        <p>Followers</p>
        <span>0</span>
      </div>
      <div className="profile-status">
        <p>Followings</p>
        <span>0</span>
      </div>
      <div className="profile-status">
        <p>Gits</p>
        <span>0</span>
      </div>
      <div className="profile-status">
        <p>Repos</p>
        <span>0</span>
      </div>
    </ProfileStatusContainer>
  );
};

export { ProfileStatus };
