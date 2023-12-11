import React, { useState } from "react";
import {AppBar,Box,Divider,Drawer,IconButton,Toolbar,Typography,styled,} from "@mui/material";


import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";



const Work = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const NavigationMenu = styled("ul")({
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  
  const NavMenuItem = styled("li")({
    margin: "0px 20px",
  });
  
  const NavMenuLink = styled(NavLink)({
    textDecoration: "none",
    color: "white",
  });
  
  // const StyledActiveLink = styled("span")({
  //   color: "goldenrod !important",
  //   fontWeight: "bold !important",
  // });
  
  const MobileNavigation = styled("ul")({
    listStyle: "none",
  });
  
  const MobileNavItem = styled("li")({
    marginTop: "20px",
  });
  
  const MobileNavLink = styled(NavLink)({
    textDecoration: "none",
    fontSize: "1.4rem",
    color: "black",
  });




  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >

      </Typography>
      <Divider />
      <MobileNavigation>
        <MobileNavItem>
          <MobileNavLink to={"/Home"}>Home</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to={"/MySensorsPage"}>My Sensors</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to={"/AccountPage"}>My Account</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to={"/HelpPage"}>Help</MobileNavLink>
        </MobileNavItem>
        <MobileNavItem>
          <MobileNavLink to={"/MissionPage"}>Our Mission</MobileNavLink>
        </MobileNavItem>
      </MobileNavigation>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >

            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <NavigationMenu>
                <NavMenuItem>
                  <NavMenuLink to={"/Home"}>Home</NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                  <NavMenuLink to={"/MySensorsPage"}>My Sensors</NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                  <NavMenuLink to={"/AccountPage"}>My Account</NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                  <NavMenuLink to={"/HelpPage"}>Help</NavMenuLink>
                </NavMenuItem>
                <NavMenuItem>
                  <NavMenuLink to={"/MissionPage"}>Our Mission</NavMenuLink>
                </NavMenuItem>
              </NavigationMenu>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Work;
