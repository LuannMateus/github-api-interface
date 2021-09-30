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
  handleUser: (username: string) => void;
  handleUserRepositories: (username: string) => void;
  handleUserAndRepository: (username: string) => void;
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
};

export const UserContext = createContext<UserContextProps>({
  user: initialUserState,
  repository: initialRepositoryState,
  handleUser: () => {},
  handleUserRepositories: () => {},
  handleUserAndRepository: () => {},
});

const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const userService = new UserService();
  const repositoryServicer = new RepositoryService();

  const [user, setUser] = useState(initialUserState);
  const [repository, setRepository] = useState(initialRepositoryState);

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

  const handleUserAndRepository = async (username: string) => {
    await handleUser(username);
    await handleUserRepositories(username);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        repository,
        handleUser,
        handleUserRepositories,
        handleUserAndRepository,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
