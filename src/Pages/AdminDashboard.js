import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Meeting Room
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function AdminDashboard() {
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState("");
  const [select, setSelect] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [companyId, setCompanyid] = React.useState("");

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // function convert(str) {
  //   var date = new Date(str),
  //     mnth = ("0" + (date.getMonth() + 1)).slice(-2),
  //     day = ("0" + date.getDate()).slice(-2);
  //   return [date.getFullYear(), mnth, day].join("-");
  // }

  // function formatDate(date) {
  //   convert(date);

  //   var d = new Date(date);

  //   return [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/");
  // }
  let Users = {
    name: { name },
    dateOfBirth: { value },
    gender: { select },
    email: { email },
    password: { password },
    companyId: { companyId },
  };
  const url = `https://localhost:7216/api/${Users}/`;
  // const insertData = async (e) => {
  //   if (name === "" || email === "" || password === "" || companyId === "") {
  //     alert("please fill all the fields");
  //   }

  //   if (select === "male") {
  //     setSelect("m");
  //   } else {
  //     setSelect("f");
  //   }
  //   e.preventDefault();
  //   console.log(User);
  //   let response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
  //       crossDomain: true,
  //       async: true,
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   });
  //   let Data = null;

  //   try {
  //     Data = await response.text();
  //     console.log(Data);
  //     alert("user Inserted Successfully");
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  const insertData = async (e) => {
    e.preventDefault();
    console.log(Users);
    const res = await axios.post(url, Users);
    console.log(res);
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add User
          </Typography>
          <Box component="form" noValidate onSubmit={insertData} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="date"
                  label="Date Of birth"
                  type="text"
                  id="text"
                  hinttext="MM/DD/YYYY"
                  autoComplete="new-text"
                  onChange={(e) => setValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Email"
                  label="Email"
                  type="Email"
                  id="Email"
                  autoComplete="new-password"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Company"
                  label="CompanyId"
                  type="number"
                  id="CompanyId"
                  autoComplete="ID"
                  onChange={(e) => setCompanyid(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <select
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option>Select gender</option>
                  <option value="m">Male</option>
                  <option value="f">Female</option>
                </select>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add User
            </Button>
            <Grid container justifyContent="flex-end"></Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
