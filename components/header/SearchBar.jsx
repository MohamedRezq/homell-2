import {
  InputGroup,
  FormControl,
  Button
} from "react-bootstrap";

const SearchBar = ({size}) => {
  return (
    <InputGroup size={size}>
      <FormControl
        placeholder="Search by address, Zip Code, City, Type (villa, apartment, etc..)"
        aria-label="SearchBar"
        aria-describedby="basic-addon2"
      />
      <Button variant="success" id="button-addon2" className="px-4">
        Search
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
