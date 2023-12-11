import React, { useState } from "react";
import {AppBar,Box,Divider,Drawer,IconButton,Toolbar,Typography,styled,Menu, MenuItem} from "@mui/material"; 
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded'; 
import { signOut, getAuth } from "firebase/auth"; 
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";


import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";



const Navbar = () => { 

  const [mobileOpen, setMobileOpen] = useState(false); 
  const [anchorEl, setAnchorEl] = useState(null);
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


  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };    


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }; 

  const [error, setError] = useState(""); 
  const [currentU, setCurrentU] = useState(""); //user who is currently signed in 
  let navigate = useNavigate();  



  const logOut = async (e) => {   
    e.preventDefault(); //so page doesn't reload after submission 
    setError("");
        
    signOut(auth).then(() => { 
        //success
        navigate("/") 
    }).catch((error) => { //error
        setError(error.message);
    });  
  }



  





 
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 1, my: 2 }} ></Typography>   
      <Divider />
      <MobileNavigation>
          <MobileNavItem>
            <MobileNavLink to={"/Home"}>Home</MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink to={"/MySensorsPage"}>My Sensors</MobileNavLink>
          </MobileNavItem>
      </MobileNavigation>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{ mr: 2, display: { sm: "none" }, }} onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography color={"goldenrod"} variant="h6" component="div" sx={{ flexGrow: 1 }} ></Typography> 

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <NavigationMenu>
                  <NavMenuItem>
                    <NavMenuLink to={"/Home"}>Home</NavMenuLink>
                  </NavMenuItem>
                  <NavMenuItem>
                    <NavMenuLink to={"/MySensorsPage"}>My Hubs</NavMenuLink>
                  </NavMenuItem>
              </NavigationMenu> 
            </Box> 
            <div>
              <IconButton
                id="demo-positioned-button" aria-controls={open ? 'demo-positioned-menu' : undefined} aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                <AccountBoxRoundedIcon sx={{color: 'white'}}/>
              </IconButton> 
              
              <Menu
                id="demo-positioned-menu" aria-labelledby="demo-positioned-button" anchorEl={anchorEl} open={open}
                onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'left', }}
                transformOrigin={{ vertical: 'top', horizontal: 'left',}}> 
                <MenuItem onClick={logOut}>Log Out</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px",}, }} >
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

export default Navbar;
