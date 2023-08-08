import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import mainImage from '../assets/mainImage.png'
import ratingStars from '../assets/ratingStars.png'
import sizeImage from '../assets/sizeImage.png'
import cardsFrame from '../assets/cardsFrame.png'
function MainComponent() {
    const data = { price: 600.72, imageUrl:"https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U", heading: "LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR" }
    const apiData = {
        name: "George",
        email: "george@email.com",
        projectId: "video-on-demand"
    }
    const handleClick = async () => {
        try {
            const response = await fetch("https://pay-by-crypto-api-v1-w7dfh.ondigitalocean.app/api/v2/checkout", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiData)
            });
            if (response) {
                const responseData = await response.json();
                const sessionId = responseData.sessionId;
                const token = responseData.token;
                const status = responseData.status
                const projectId = responseData.projectId;
                const projectName = "lg-oled"
                if (sessionId) {
                    const newData = { ...data, sessionId, token, status, projectId, projectName }
                    console.log("newdata", newData)
                    console.log("responseData", responseData)
                    const url = new URL("https://payment-gateway-crypto.paybycrypto.ch/");
                    for (const [key, value] of Object.entries(newData)) {
                        url.searchParams.set(key, value)
                    }
                    window.location.href = url.toString();
                }
            } else {
                console.error("No session ID")
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <Box sx={{ padding: "5%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Box mb="5%">
                <Typography fontSize={42} variant='overline'>
                    TV Collection
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    Home / Product / Tv Collection
                </Box>
            </Box>
            <Box sx={{ width: '100%', display: "flex", gap: "20px" }}>
                <Box>
                    <img style={{ width: "100%" }} src={mainImage} alt="mainImage" />
                </Box>
                <Box>
                    <Box>
                        Brand: LG
                        <br></br>
                        Model: OLED42C2PSA
                        <br></br>
                        Availability: Only 2 in Stock
                    </Box>
                    <Typography variant='h5'>
                        {data.heading}
                    </Typography>
                    <Box>
                        <img src={ratingStars} alt="ratingStars" />
                    </Box>
                    <Box sx={{ borderBottom: "1px solid #E9E9E9" }}>
                        <ul>
                            <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
                            <li>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</li>
                            <li>Hands-free Voice Control, Always Ready</li>
                            <li>Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode</li>
                            <li>Eye Comfort Display: Low-Blue Light, Flicker-Free</li>
                        </ul>
                    </Box>
                    <Box>
                        <img src={sizeImage} alt="sizeImage" />
                    </Box>
                    <Box>
                        <Typography>
                            USD(incl. of all taxes)
                        </Typography>
                        <Typography variant='h4'>
                            {data.price}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <Button sx={{ padding: "2% 8%", display: 'flex', border: "1px solid lightGray", color: "black", gap: "20px" }} size='large' variant='outlined'>
                            <Typography>-</Typography>
                            <Typography>1</Typography>
                            <Typography>+</Typography>
                        </Button>
                        <Button onClick={handleClick} sx={{ color: 'white', background: "#E73C17", border: 'none', padding: "2% 8%" }}>
                            Buy Now
                        </Button>
                        <Button sx={{ color: 'white', background: "#white", border: '1px solid #e73c17', color: '#e73c17', padding: "2% 8%" }}>
                            Add to Cart
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: "50px", padding: "5% 5%" }}>
                <Typography>Description</Typography>
                <Typography>Specifications</Typography>
                <Typography>Reviews</Typography>
            </Box>

            <Box px="20%">
                <p>The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamer</p>
                <p>*Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
                    **65C2 Stand model is at a minimum 39% lighter than the C1 series.
                    ***The 'Reducing CO2' footprint label applies to 65C2 only. All other C2 models feature a 'CO2 Measured' label.
                    ****UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size.More</p>
            </Box>
            <Typography py="5%" variant='h6'>
                Related Products
            </Typography >
            <Box px="0%">
                <img style={{ width: "100%" }} src={cardsFrame} alt="cardsFrame" />
            </Box>
        </Box>
    )
}

export default MainComponent