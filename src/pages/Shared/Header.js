import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/world.png";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/home">
            <div className="d-flex">
              <img
                style={{ width: "50px" }}
                className="me-2"
                src={logo}
                alt=""
              />
              <div>
                <span className="ms-2 mb-0">Tour.</span>
                <p className="mb-0 lh-1 text-color">Ranger</p>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/package">
                Tour Package
              </Nav.Link>
              {user.email && (
                <>
                  <Nav.Link as={NavLink} to="/myOrder">
                    My Order
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/manageOrder">
                    Manage Order
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/addNewPackage">
                    Add New Package
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            {user?.displayName && (
              <Navbar.Text>
                Hi,{" "}
                <span className="fw-bold text-white me-2">
                  {user?.displayName}
                </span>
              </Navbar.Text>
            )}
            {user?.displayName ? (
              <button
                onClick={logOut}
                className="btn bg-orange text-white py-1"
              >
                LogOut
              </button>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">
                  <button className="btn bg-orange text-white">LogIn</button>
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                  <button className="btn bg-orange text-white">Register</button>
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
