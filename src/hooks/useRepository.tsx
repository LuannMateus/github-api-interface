import { useContext } from 'react';
import { RepositoryContext } from '../providers/repositoryProvider';

export const useRepository = () => {
  const useRepository = useContext(RepositoryContext);

  return useRepository;
};
