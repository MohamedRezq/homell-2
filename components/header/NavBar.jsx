import { Container, Navbar, Nav, NavDropdown, ButtonGroup, DropdownButton, Button, Dropdown } from "react-bootstrap";
import DropDownContent from "./DropDownContent";
import SearchBar from "./SearchBar";
const NavBar = () => {
  return (
    <div className="position-sticky" style={{zIndex: "100", top: 0}}>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" className="py-3">
        <Container>
          <Navbar.Brand href="#home" className="logoText">
            <h4>HOMELL</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="d-flex flex-column-reverse flex-lg-row align-items-start align-items-lg-center justify-content-between"
          >
            <div></div>
            <div className="d-flex">
              <ButtonGroup className="">
              <DropdownButton
                  as={ButtonGroup}
                  title="Buy"
                  id="bg-nested-dropdown"
                  variant="info"
                  size="lg"
                >
                  <DropDownContent />
                </DropdownButton>
                <DropdownButton
                  as={ButtonGroup}
                  title="Rent"
                  id="bg-nested-dropdown"
                  variant="info"
                  size="lg"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                  as={ButtonGroup}
                  title="Sell"
                  id="bg-nested-dropdown"
                  variant="info"
                  size="lg"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </div>
            <div className="d-flex align-items-center h-100">
              <div>Login</div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
