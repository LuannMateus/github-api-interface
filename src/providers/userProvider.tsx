import { createContext, FC, ReactNode, useState } from 'react';
import { Repository } from '../models/Repository';
import { User } from '../models/User';
import { RepositoryService } from '../service/repositoryService';
import { UserService } from '../service/userService';

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  user: User;
  repository: Repository[];
  starredRepository: Repository[];
  handleUser: (username: string) => void;
  handleUserRepositories: (username: string) => void;
  handleUserAndRepositories: (username: string) => void;
}

const initialRepositoryState = [
  {
    name: '',
    full_name: '',
    description: '',
    html_url: '',
  },
];

const initialUserState = {
  avatar_url: '',
  blog: '',
  company: '',
  location: '',
  login: '',
  name: '',
  followers: 0,
  following: 0,
  public_gists: 0,
  public_repos: 0,
};

export const UserContext = createContext<UserContextProps>({
  user: initialUserState,
  repository: initialRepositoryState,
  starredRepository: initialRepositoryState,
  handleUser: () => {},
  handleUserRepositories: () => {},
  handleUserAndRepositories: () => {},
});

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const userService = new UserService();
  const repositoryServicer = new RepositoryService();

  const [user, setUser] = useState(initialUserState);
  const [repository, setRepository] = useState(initialRepositoryState);
  const [starredRepository, setStarredRepository] = useState(
    initialRepositoryState,
  );

  const handleUser = async (username: string): Promise<void> => {
    const userPayload = await userService.findUser(username);

    setUser(userPayload);
  };

  const handleUserRepositories = async (username: string): Promise<void> => {
    const repositoriesPayload = await repositoryServicer.findUserRepositories(
      username,
    );

    setRepository(repositoriesPayload);
  };

  const handleUserStarredRepositories = async (
    username: string,
  ): Promise<void> => {
    const starredRepositoriesPayload =
      await repositoryServicer.findUserStarredRepositories(username);

    setStarredRepository(starredRepositoriesPayload);
  };

  const handleUserAndRepositories = async (username: string): Promise<void> => {
    Promise.all([
      handleUser(username),
      handleUserRepositories(username),
      handleUserStarredRepositories(username),
    ]);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        repository,
        starredRepository,
        handleUser,
        handleUserRepositories,
        handleUserAndRepositories,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
