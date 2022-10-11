import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdminLogo from "../Assets/images/AdminLogo.jpg";
import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

const theme = createTheme();

function Admins() {

  let navigate = useNavigate();

  const [Adminusername, setAdminUsername] = useState("");
  const [Adminpassword, setAdminPassword] = useState("");

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (Adminusername === "" || Adminpassword === "") {
      setMessage("Please fill all the fields");
      setOpen(true);
    }
    setOpen(true);
  };

  useEffect(() => {}, []);
  
  const url = `https://localhost:7216/api/Admin/${Adminusername}/${Adminpassword}`;
  const fetchData = async (e) => {
    e.preventDefault();

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
        crossDomain: true,
        "Access-Control-Allow-Origin": "*",
      },
    });
    let Data = null;

    try {
      Data = await response.json();
      console.log(Data);
      localStorage.setItem("Adminusername", Data.username);
      navigate("/AdminDashboard");
    } catch (error) {
      setMessage("Email/Password is incorrect");
      handleClick();
      throw new Error("Email/password incorrect");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="Meeting Room App"
            src={AdminLogo}
          />
          <Box component="form" onSubmit={fetchData} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="Username"
              autoComplete="Username"
              autoFocus
              onChange={(e) => setAdminUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setAdminPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Admin Login
            </Button>
            <Snackbar
              open={open}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Alert severity="error">{message}</Alert>
            </Snackbar>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Admins;
