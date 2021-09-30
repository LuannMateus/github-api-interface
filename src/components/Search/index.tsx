import { SearchContainer, SearchInput } from './styled';
import { Button } from '../index';
import { FC, useState } from 'react';

type SearchProps = {
  handleClick: (username: string) => void;
};

const Search: FC<SearchProps> = ({ handleClick }) => {
  const [userInput, setUserInput] = useState('');

  return (
    <SearchContainer>
      <SearchInput
        placeholder="Account name..."
        onChange={event => setUserInput(event.target.value)}
      />
      <Button onClick={() => handleClick(userInput)}>Search</Button>
    </SearchContainer>
  );
};

export { Search };
