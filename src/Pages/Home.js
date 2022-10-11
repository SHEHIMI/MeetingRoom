import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Typography } from "@mui/material";
import Logo from "../Assets/images/icon.png";
import "../Styles/Pages.css";
import { useNavigate } from "react-router-dom";
import background from "../Assets/images/background.jpg";

const Home = () => {
  //variables
  const navigate = useNavigate();

  //functions
  const reloadPage = () => {
    window.location.reload();
  };

  const OpenProfile = () => {
    navigate("/Profile");
  };

  const OpenReservation = () => {
    navigate("/Reservation");
  };

  //JSX
  return (
    <div
      className="HomeBG"
      style={{ backgroundImage: `url(${background})`, height: "110vh" }}
    >
      <Navbar
        variant="dark"
        className="color-nav  gap-3 px-3"
        expand="lg"
        collapseOnSelect
        fixed="sticky"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={Logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="flex-grow-1 justify-content-evenly ">
              <Nav.Item>
                <Button variant="outlined" onClick={reloadPage}>
                  HOME
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button variant="outlined" onClick={OpenReservation}>
                  Reservations
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button variant="outlined" onClick={OpenProfile}>
                  Profile
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <div className="divHome">
        <Typography
          variant="h1"
          fontFamily={"Inter,sans-serif"}
          textAlign={"left"}
          fontWeight={"bold"}
          color={"black"}
          fontSize={"7em"}
        >
          Book Rooms
        </Typography>
        <br />
        <span className="span-textColor">
          <Typography
            variant="h1"
            fontFamily={"Inter,sans-serif"}
            textAlign={"left"}
            fontWeight={"bold"}
            fontSize={"7em"}
          >
            Online
          </Typography>
        </span>
      </div>
    </div>
  );
};
export default Home;
