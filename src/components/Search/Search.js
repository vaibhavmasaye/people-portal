import { Container, SearchBox, SearchIcon } from "./Search.style";
import { HiSearch } from "react-icons/hi";
import { useState } from "react";

const Search = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <SearchBox type="text" placeholder="Search for anything"></SearchBox>
      <SearchIcon opacity={show}>
        <HiSearch />
      </SearchIcon>
    </Container>
  );
};

export default Search;
