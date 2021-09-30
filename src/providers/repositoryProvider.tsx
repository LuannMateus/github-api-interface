import { createContext, FC, ReactNode, useState } from 'react';
import { Repository } from '../models/Repository';
import { RepositoryService } from '../service/repositoryService';

interface RepositoryProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  repository: Repository[];
  handleUserRepositories: (user: string) => void;
}

const initialRepositoryState = [
  {
    name: '',
    full_name: '',
    description: '',
    html_url: '',
  },
];

export const RepositoryContext = createContext<UserContextProps>({
  repository: initialRepositoryState,
  handleUserRepositories: () => {},
});

export const RepositoryProvider: FC<RepositoryProviderProps> = ({
  children,
}) => {
  const repositoryServicer = new RepositoryService();

  const [repository, setRepository] = useState(initialRepositoryState);

  const handleUserRepositories = async (user: string): Promise<void> => {
    const repositories = await repositoryServicer.findUserRepositories(user);

    setRepository(repositories);
  };

  return (
    <RepositoryContext.Provider
      value={{
        repository,
        handleUserRepositories,
      }}
    >
      {children}
    </RepositoryContext.Provider>
  );
};
