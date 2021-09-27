import { ProfileContainer, ProfileImage, ProfileInformation } from './styled';

import { ProfileStatus } from './ProfileStatus';
import { FC } from 'react';
import { User } from '../../models/User';

const Profile: FC<User> = ({
  name,
  login,
  company,
  location,
  blog,
  avatar_url,
}) => {
  return (
    <ProfileContainer>
      <ProfileImage src={avatar_url} alt="Profile Picture" />
      <ProfileInformation>
        <h1 className="profile__title">{name}</h1>
        <p>
          <span className="profile__field">Username:</span> {login}
        </p>
        <p>
          <span className="profile__field">Company:</span> {company}
        </p>
        <p>
          <span className="profile__field">Location:</span> {location}
        </p>
        <p>
          <span className="profile__field">Blog:</span> {blog}
        </p>
        <ProfileStatus followers={0} followings={0} gits={0} repos={0} />
      </ProfileInformation>
    </ProfileContainer>
  );
};

export { Profile };
