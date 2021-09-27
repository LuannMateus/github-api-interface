import { SearchContainer, SearchInput } from './styled';
import { Button } from '../index';

const Search = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder="Account name..." />
      <Button>Search</Button>
    </SearchContainer>
  );
};

export { Search };
