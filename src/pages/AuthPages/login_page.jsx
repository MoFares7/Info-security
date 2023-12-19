import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper, Box, Grid } from "@mui/material";
import background from "../../assets/images/F7dPYn.jpg";
import loginside from "../../assets/images/loginside.png";
import Login from "../../compomets/login";
const defaultTheme = createTheme();
function LoginPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        style={{
          backgroundImage: `url(${background})`,
          width: "100%",
          justifyContent: "center",
          minHeight: "100%",
          backgroundSize: "cover",
          backgroundColor: "#1bbd7e",
          padding: 20,
        }}
      >
        <Grid
          spacing={0}
          container
          direction="row"
          elevation={10}
          sx={{
            padding: 10,
          }}
        >
          <Grid item xs={5}>
            <Paper
              sx={{
                padding: 8,
              }}
            >
              <Login></Login>
            </Paper>
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              width: "80vh",
              backgroundImage: `url(${loginside})`,
              backgroundSize: "cover",
            }}
          ></Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
export default LoginPage;
