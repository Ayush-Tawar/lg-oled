import React from 'react'
import { Box, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import DockOutlinedIcon from '@mui/icons-material/DockOutlined';
function Footer() {
    return (
        <>
            <Box style={{
                backgroundImage: `url('../assets/footerBackground.png')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: "100%",
                height: "200px"
            }}>
            </Box>
            <Box p="5%" sx={{ background: "#2F333A", color: "white" }}>
                <Box sx={{ display: "flex", gap: "5%", }}>
                    <Box sx={{ width: "30%" }}>
                        <Typography variant='h5'>
                            ABOUT US
                        </Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, corrupti!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nobis laudantium labore magni nesciunt iste assumenda excepturi optio et temporibus, perspiciatis tenetur quasi?
                        </Typography>
                        <Box sx={{ display: "flex", gap: "20px" }} mt={10}>
                            <FacebookOutlinedIcon />
                            <TwitterIcon />
                            <InstagramIcon />
                            <YouTubeIcon />
                        </Box>
                    </Box>
                    <Box sx={{ width: "30%" }}>
                        <Typography variant='h5'>
                            INFORMATION
                        </Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>About</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>Delivery Information</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>Privacy Policy</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>Sales</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>Terms And Conditions</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>EMI Payment</Typography>
                    </Box>
                    <Box sx={{ width: "30%" }}>
                        <Typography variant='h5'>
                            ACCOUNT
                        </Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>My Accounts</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>My orders</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>Returns</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>Shipping</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>Wishlist</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>Account Details</Typography>
                    </Box>
                    <Box sx={{ width: "30%" }}>
                        <Typography variant='h5'>
                            STORE
                        </Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>Affiliate</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>Discounts</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>Sale</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>Contact</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>All Collections</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>Account Details</Typography>
                    </Box>
                    <Box sx={{ width: "30%" }}>
                        <Typography variant='h5'>
                            CONTACT US
                        </Typography>
                        <Typography sx={{ lineHeight: "2rem" }}>If you have any query, please contact us
                            needus24@gmail.com </Typography>
                        <Typography sx={{ lineHeight: "2rem" }}> <PlaceOutlinedIcon /> California, USA</Typography>
                        <Typography sx={{ lineHeight: "2rem" }}> <DockOutlinedIcon />	+12012987481</Typography>

                    </Box>
                </Box>
                <br />
                <br />
                <br />
                <hr />
                <Typography pt="5%" sx={{marginLeft:"39%",}} >
                    Copyright.2022.All Right Reserved
                </Typography>
            </Box>
        </>

    )
}

export default Footer