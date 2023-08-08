import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NeedusLogo from "../assets/NeedusLogo.png"
import menuBar from "../assets/menuBar.png"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ borderBottom: "1px solid #E9E9E9", boxShadow: "none !important" }} color='transparent' position="static">
                <Toolbar sx={{ px: "5% !important", backgroundColor: "#2F333A", color: "white" }}>
                    <Box sx={{display:'flex', gap:"20px"}}>

                    <img src={menuBar} alt="menuBar" />
                    <img src={NeedusLogo} alt="NeedusLogo" />
                    </Box>
                    <Box sx={{ flexDirection: "row", display: "flex", gap: "40px", flexGrow: 2, px: "15%" }}>
                        <Typography>
                            Home
                        </Typography>
                        <Typography>
                            About
                        </Typography>
                        <Typography>
                            Product
                        </Typography>
                        <Typography>
                            Pages
                        </Typography>
                        <Typography>
                            Contact
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "120px", borderRight: "1px solid white" }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <SearchIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{paddingLeft:"10px"}}>
                        <Typography>
                            Login | Signup
                        </Typography>
                    </Box>
                    <Box>

                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <FavoriteBorderOutlinedIcon />

                            <ShoppingCartOutlinedIcon sx={{marginLeft:"20px"}} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
