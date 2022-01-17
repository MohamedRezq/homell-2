import {
  Container,
  Navbar,
  ButtonGroup,
  DropdownButton,
  Button,
} from "react-bootstrap";
import DropDownContent from "./DropDownContent";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();
  return (
    <div className="NavBar">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="info"
        variant="dark"
        className="py-3"
      >
        <Container>
          <Navbar.Brand href="/" className="logoText">
            <h4>HOMELL</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="w-100 d-flex flex-column-reverse flex-lg-row align-items-start align-items-lg-center justify-content-between">
              <div className=""></div>
              <div className="d-flex mx-auto">
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
                    <DropDownContent forWhat="Rent" />
                  </DropdownButton>
                  <DropdownButton
                    as={ButtonGroup}
                    title="Sell"
                    id="bg-nested-dropdown"
                    variant="info"
                    size="lg"
                  ></DropdownButton>
                </ButtonGroup>
              </div>
              <div className="d-flex align-items-center h-100">
                {session ? (
                  <>
                    <Link href="api/auth/signout">
                      <a>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            signOut();
                          }}
                        >
                          Sign Out
                        </button>
                      </a>
                    </Link>
                  </>
                ) : (
                  <div className="d-flex">
                    <div className="px-2 my-auto">
                      <Link href="">
                        <a
                          className="text-white"
                          style={{ textDecoration: "none" }}
                        >
                          Log In
                        </a>
                      </Link>
                    </div>
                    <Link href="">
                      <a>
                        <Button variant="dark">Register</Button>
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
