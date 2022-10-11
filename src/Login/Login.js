import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import websiteLogo from "../Assets/images/websiteLogo.png";
import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Meeting Room App</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    if (email === "" || password === "") {
      setMessage("Please fill all the fields");
      setOpen(true);
    }
    setOpen(true);
  };
  useEffect(() => {}, []);

  const url = `https://localhost:7216/api/Users/${email}/${password}`;
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
      localStorage.setItem("username", Data.name);
      localStorage.setItem("email", Data.email);
      localStorage.setItem("company", Data.companyId);
      localStorage.setItem("DOB", Data.dateOfBirth);

      navigate("/Home");
    } catch (error) {
      setMessage("Email/Password is incorrect");
      handleClick();
      throw new Error("Email/password incorrect");
    }
  };

  const OpenAdmins = () => {
    navigate("/Admins");
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
            src={websiteLogo}
          />
          <Box component="form" onSubmit={fetchData} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
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
        <Copyright sx={{ mt: 8, mb: 4 }} />
        <Button onClick={OpenAdmins}>ADMINS</Button>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
