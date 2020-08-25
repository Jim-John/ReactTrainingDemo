import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";
import CurrentDateDisplay from "./CurrentDateDisplay.jsx";

class HeaderLogin extends React.Component {
  render() {
    const userName = sessionStorage.getItem("UserName");
    console.log("User Name is :" + userName);
    return (
      <header>
        <Navbar expand="lg" variant="dark" bg="dark">
          <div className="col-4"></div>
          <div className="col-6">
            <Navbar.Brand>Claims Managment System</Navbar.Brand>
          </div>
          {userName ? (
            <div>
              <div id="loggedInUser" className="text-success">
                Logged In:{userName}
              </div>
              <div id="datetime" className="text-success">
                <CurrentDateDisplay />
              </div>
            </div>
          ) : (
            ""
          )}
        </Navbar>
      </header>
    );
  }
}

export default HeaderLogin;
