import PropTypes from "prop-types";
import NextLink from "next/link";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { Logo } from "src/components/logo";

// TODO: Change subtitle text

export const Layout = (props) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}
    >
      <Grid container sx={{ flex: "1 1 auto" }}>
        <Grid
          style={{
            width: "100%",
            height: "60%",
            marginTop: "30px",
          }}
          xs={12}
          lg={6}
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            component="header"
            sx={{
              left: 50,
              p: 3,
              position: "fixed",
              top: 0,
              width: "100%",
            }}
          >
            <Box
              component={NextLink}
              href="/"
              sx={{
                display: "inline-flex",
                height: 32,
                width: 32,
              }}
            >
              <Logo />
            </Box>
          </Box>
          {children}
        </Grid>
        {/* <Grid
          xs={{12}}
          lg={6}
          sx={{
            alignItems: "center",
            background: "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            "& img": {
              maxWidth: "100%",
            },
          }}
        >
          <img
            style={{ width: "100%", height: "100%", position: "relative" }}
            alt="bg"
            src="/assets/logos/wp9424127.webp"
          />
          <Typography
            align="center"
            color="inherit"
            sx={{
              fontSize: "24px",
              lineHeight: "32px",
              mb: 1,
            }}
            variant="h1"
            style={{
              width: "auto",
              position: "absolute",
              top: "45%",
              left: "71%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            Welcome to{" "}
            <Box component="a" sx={{ color: "#15B79E" }} target="_blank">
              Phuong
            </Box>
          </Typography>
        </Grid> */}
      </Grid>
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node,
};
