import styled from 'styled-components';

const SearchContainer = styled.section`
  display: flex;

  padding: 0 20px;
  padding-top: 14px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 0;
  padding-left: 12px;

  border: none;
  border-radius: 4px;

  margin-right: 12px;

  font-size: 1rem;
`;

export { SearchContainer, SearchInput };
