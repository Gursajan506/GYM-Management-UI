import React, {Dispatch, useContext} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {AppDispatchContext, AppStateContext} from "../App";
import UserAPIs from "../apis/user/user.apis";
import {iStoreAction} from "../reducer";
import {useHistory} from "react-router-dom";

export default function Header() {

    const {loggedInUser, is_admin} = useContext(AppStateContext);

    const dispatch: Dispatch<iStoreAction> = useContext(AppDispatchContext);
    const history = useHistory();
    console.log(loggedInUser)
    console.log(is_admin)
    return <div className="app-header-wrapper">
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand href="/">GYM AND FITNESS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {
                            is_admin && <Nav.Link href="/admin/dashboard">Home</Nav.Link>
                        }
                        {
                            !is_admin && <Nav.Link href="/">Home</Nav.Link>
                        }
                        <Nav.Link href="/about">About</Nav.Link>
                        {
                            !loggedInUser && <Nav.Link href="/user/login">Login</Nav.Link>
                        }
                        {
                            loggedInUser && <Nav.Link href="/"
                                                      onClick={() => {
                                                          new UserAPIs().logout().then((response) => {

                                                              if (!UserAPIs.hasError(response)) {
                                                                  dispatch({
                                                                      type: "logout",
                                                                  })
                                                                  history.push("/user/login");
                                                              }

                                                          });
                                                      }}>Logout</Nav.Link>
                        }
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </div>
}