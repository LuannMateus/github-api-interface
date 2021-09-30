import { FC } from 'react';
import { Repository as RepositoryModel } from '../../models/Repository';
import { RepositoryContainer, RepositoryItem } from './styled';

type RepositoryProps = {
  repositories: RepositoryModel[];
};

const Repository: FC<RepositoryProps> = ({ repositories }) => {
  const renderRepositories = () => {
    return repositories.map((repository: RepositoryModel, index) => {
      return (
        <RepositoryItem key={`repository_item_${index}`}>
          <p className="repository__item item__name">{repository.name}</p>
          <p className="repository__item item__url">{repository.full_name}</p>
        </RepositoryItem>
      );
    });
  };

  return <RepositoryContainer>{renderRepositories()}</RepositoryContainer>;
};

export { Repository };
