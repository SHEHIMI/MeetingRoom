import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import pic from "../Assets/COMPANY_IMAGES/4.png";
import Logo from "../Assets/images/icon.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Typography } from "@mui/material";
// Language: javascript

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit">Meeting Room App</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Profile = () => {
  const name = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const company = localStorage.getItem("company");
  const dob = localStorage.getItem("DOB");

  const [CompanyName, SetCompanyName] = useState("");
  const [Companyemail, SetCompanyEmail] = useState("");
  const [CompanyDescription, SetCompanyDescription] = useState("");

  //request url
  const url = `https://localhost:7216/api/Company/${company}/companyId`;
  let CompanyData = null;

  useEffect(() => {
    fetchCompany();
    // eslint-disable-next-line
  }, []);

  //company data variables

  const fetchCompany = async () => {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
        crossDomain: true,
        "Access-Control-Allow-Origin": "*",
      },
    });

    try {
      CompanyData = await response.json();
      SetCompanyName(CompanyData.name);
      SetCompanyEmail(CompanyData.email);
      SetCompanyDescription(CompanyData.description);
    } catch (error) {
      throw new Error("Unable to fetch company data");
    }
  };

  return (
    <div style={{ backgroundColor: "#151719", height: "120vh" }}>
      <Container fluid>
        <Row>
          <Link to="/Home">
            <img
              alt="logo"
              src={Logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{" "}
          </Link>
        </Row>
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-black"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <MDBCardImage
                    src={pic}
                    alt="Avatar"
                    className="my-5"
                    style={{ width: "80px" }}
                    fluid
                  />
                  <MDBTypography tag="h5">{name}</MDBTypography>
                  <br />
                  <MDBTypography tag="h4">{CompanyName}</MDBTypography>
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6"> User Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          {email}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Date Of Birth</MDBTypography>
                        <MDBCardText className="text-muted">{dob}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBTypography tag="h6">Company Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          {Companyemail}
                        </MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Details</MDBTypography>
                        <MDBCardText className="text-muted">
                          {CompanyDescription}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-start">
                      <a href="#!">
                        <MDBIcon fab icon="facebook me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="twitter me-3" size="lg" />
                      </a>
                      <a href="#!">
                        <MDBIcon fab icon="instagram me-3" size="lg" />
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </Container>

      <Copyright sx={{ mt: 8, mb: 4 }} />
    </div>
  );
};

export default Profile;
