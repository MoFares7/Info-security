import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Button, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import loginLogo from "../../../assets/images/si.png";
import background from "../../../assets/images/F7dPYn.jpg";

import { CircularProgress } from "@mui/material";

const defaultTheme = createTheme();

export default function SignUpTeacherPage() {
  const [fieldsName, setfieldsName] = useState("");
  const [fieldsNameError, setfieldsNameError] = useState(false);
  const [loading] = useState(false);

  const handelFillFields = () => {
    // Perform validation
    if (fieldsName.trim() === "") {
      setfieldsNameError(true);
    } else {
      setfieldsNameError(false);
    }
  };
  const handleSubmit = async (event) => {};
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        style={{
          backgroundImage: `url(${background})`,
          width: "100%",
          justifyContent: "center",
          minHeight: "100%",
          height: "70vh",
          backgroundSize: "cover",
          backgroundColor: "#1bbd7e",
          padding: 50,
        }}
      >
        <Grid
          container
          elevation={10}
          spacing={0}
          component="main"
          direction="row"
          sx={{
            p: 8,
          }}
        >
          <Grid item xs={5}>
            <Paper
              sx={{
                padding: 3,
              }}
            >
              <Grid align="center">
                <Avatar sx={{ m: 1, bgcolor: "#1d2634" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Cairo",
                  }}
                >
                  create an account
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="user name"
                    name="username"
                    autoFocus
                    error={fieldsNameError}
                    helperText={fieldsNameError ? " الحقل مطلوب" : ""}
                    onChange={(e) => {
                      setfieldsName(e.target.value);
                      if (e.target.value.trim() !== "") {
                        setfieldsNameError(false);
                      }
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: "Cairo",
                        fontSize: "12px",
                      },
                    }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="البريد الالكتروني "
                    name="username"
                    autoFocus
                    error={fieldsNameError}
                    helperText={fieldsNameError ? " الحقل مطلوب" : ""}
                    onChange={(e) => {
                      setfieldsName(e.target.value);
                      if (e.target.value.trim() !== "") {
                        setfieldsNameError(false);
                      }
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: "Cairo",
                        fontSize: "12px",
                      },
                    }}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="كلمة المرور"
                    type="password"
                    id="password"
                    error={fieldsNameError}
                    helperText={fieldsNameError ? " الحقل مطلوب" : ""}
                    onChange={(e) => {
                      setfieldsName(e.target.value);
                      if (e.target.value.trim() !== "") {
                        setfieldsNameError(false);
                      }
                    }}
                    InputLabelProps={{
                      style: {
                        fontFamily: "Cairo",
                        fontSize: "12px",
                      },
                    }}
                  />
                  {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <CircularProgress />
                    </Box>
                  ) : (
                    <Button
                      onClick={handelFillFields}
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        mt: 3,
                        mb: 2,
                        backgroundColor: "#1d2634",
                        fontFamily: "Cairo",
                        "&:hover": {
                          backgroundColor: "#000",
                        },
                      }}
                    >
                      submit
                    </Button>
                  )}
                </Box>
              </Grid>
            </Paper>
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              backgroundImage: `url(${loginLogo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
