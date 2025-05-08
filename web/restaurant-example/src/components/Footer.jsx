import React from "react";
import logo from "../assets/chimmys.png"; // Make sure this is the correct path
import { Stack, Grid, Box } from '@mui/material';
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import BeaverBroTypography from "./BeaverBro";


const navLinkStyle = {
  fontWeight: "bold",
  color: "#e2ded3",
  padding: "8px 16px",
  borderRadius: "5px",
  transition: "0.3s",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "#cc9f4e",
    color: "#e2ded3",
    transform: "scale(1.05)"
  }
};


function Footer () {
    return (
        <Box sx={{position:"relative", bottom:0, width: '100%'}}>
            <Grid container spacing={2} sx={{ backgroundColor: '#1a1a1a',color: '#e2ded3', padding: 1, height:"auto" }}>
                <Grid size={12} sx={{ display: "flex", backgroundColor: 'none', paddingTop: 2, justifyContent:'center', alignItems:'center'}}>
                    <Stack sx={{ display: "flex", backgroundColor: 'none', paddingTop: 2, justifyContent:'center', alignItems:'center'}}>
                    <img src={logo} style={{ width: '30vw', height: 'auto' }} alt="Chimmy's Logo"/>

                    </Stack>
                </Grid>
                <Grid size={12} sx={{ display: "flex", backgroundColor: 'none', paddingTop: 0, justifyContent:'center', alignItems:'center'}}>
                    <Stack spacing={4} direction="row" sx={{ display: "flex", backgroundColor: 'none', paddingTop: 1, justifyContent:'center', alignItems:'center'}}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <Box sx={navLinkStyle}>HOME</Box>
                    </Link>

                    <Link to="/menu" style={{ textDecoration: "none" }}>
                    <Box sx={navLinkStyle}>MENU</Box>
                    </Link>

                    <Link to="/drinks" style={{ textDecoration: "none" }}>
                    <Box sx={navLinkStyle}>DRINKS</Box>
                    </Link>

                    <Link to="/catering" style={{ textDecoration: "none" }}>
                    <Box sx={navLinkStyle}>CATERING</Box>
                    </Link>
             
                    </Stack>
                </Grid>
                <Grid size={12} sx={{ display: "flex", backgroundColor: 'none', paddingBottom:2, justifyContent:'center', alignItems:'center'}}>
                    <Stack spacing={4} direction="row" sx={{ display: "flex", backgroundColor: 'none', paddingTop: 2, justifyContent:'center', alignItems:'center'}}>
                        <Link to="https://instagram.com/Chimmys">
                        <InstagramIcon sx={{
                            borderRadius: '50%', // Circular shape
                            padding: 1,
                            width: 50,
                            height: 'auto',
                            transition: '0.3s',
                            '&:hover': {
                            backgroundColor: '#ff4081', // Instagram color
                            transform: 'scale(1.1)' // Slight zoom on hover
                            }
                        }}/>
                        </Link>
                        <Link to="https://x.com/Chimmys">
                        <XIcon sx={{
                            borderRadius: '50%', // Circular shape
                            padding: 1,
                            width: 50,
                            height: 'auto',
                            transition: '0.3s',
                            '&:hover': {
                            backgroundColor: '#1DA1F2', 
                            transform: 'scale(1.1)'
                            }
                        }}/>
                        </Link>

                        <Link to="https://facebook.com/Chimmys">
                        <FacebookIcon sx={{
                            borderRadius: '50%',
                            padding: 1,
                            width: 50,
                            height: 'auto',
                            transition: '0.3s',
                            '&:hover': {
                            backgroundColor: '#1877F2', // Facebook brand color
                            transform: 'scale(1.1)'
                            }
                        }}/>
                        </Link>

                        <Link to="https://pinterest.com/Chimmys">
                        <PinterestIcon sx={{
                            borderRadius: '50%',
                            padding: 1,
                            width: 50,
                            height: 'auto',
                            transition: '0.3s',
                            '&:hover': {
                            backgroundColor: '#E60023', // Pinterest brand color
                            transform: 'scale(1.1)'
                            }
                        }}/>
                        </Link>
                                   
                    </Stack>
               
                </Grid>
                <Grid size={12}>
                    <BeaverBroTypography/>
                </Grid>
            </Grid>
        </Box>


     
    )
};

export default Footer;