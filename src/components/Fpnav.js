import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import SettingsIcon from '@mui/icons-material/Settings';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import './Navbar.css';

const pages = [];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [openFooter, setOpenFooter] = useState(false);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    switch (page) {
      case 'Circulars':
        navigate('/staffcircular');
        break;
      case 'Jobs Alloted':
        navigate('/allotedjobs');
        break;
      case 'Help':
        navigate('/staffhelp');
        break;
      default:
        break;
    }
  };

  const handlePendingActionsClick = () => {
    navigate('/staffdash');
  };

  const handleFooterOpen = () => setOpenFooter(true);
  const handleFooterClose = () => setOpenFooter(false);

  const handleSignIn = () => {
    navigate('/role'); // Navigate to the sign-in page or handle sign-in logic
  };

  return (
    <div className='entirebody-of-inside-app'>
      <AppBar position="static" className='navbartop'sx={{backgroundColor:'gainsboro', color:'black'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <PendingActionsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} onClick={handlePendingActionsClick} />

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'default'
              }}
            >
              MANAGEMATE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={() => handleCloseNavMenu(null)}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* PendingActionsIcon for mobile view */}
            <PendingActionsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} onClick={handlePendingActionsClick} />

            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'default'
              }}
            >
              MANAGEMATE
            </Typography>

            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              {/* Place pages buttons on the right side */}
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, ml: 2 }}>
              {/* Sign In button */}
              <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', '&:hover': {backgroundColor:'black' ,color: 'white' } }} onClick={handleSignIn}>
                Sign In
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box className="footer-trigger">
        <Fab sx={{backgroundColor:'gainsboro'}} onClick={handleFooterOpen}>
          <InfoIcon className="footer-info-icon" />
        </Fab>
      </Box>

      <Modal
        open={openFooter}
        onClose={handleFooterClose}
        className="footer-modal"
        BackdropProps={{ className: 'footer-backdrop' }}
      >
        <Box className="footer-content">
          <Box className="footer-section">
            <Typography variant="body1">
              Thank you for your support in making our operations smooth and efficient!
            </Typography>
          </Box>
          <Box className="footer-section">
            <Typography variant="body1">
              <EmailIcon className="footer-icon" /> forhelp@managemate.com
            </Typography>
            <Typography variant="body1">
              <PhoneIcon className="footer-icon" /> +91 6381624210
            </Typography>
          </Box>
          <Box className="footer-section">
            <IconButton onClick={() => navigate('https://instagram.com')} target="_blank" rel="noopener" className="footer-icon-button">
              <InstagramIcon className="footer-icon" />
            </IconButton>
            <IconButton onClick={() => navigate('https://facebook.com')} target="_blank" rel="noopener" className="footer-icon-button">
              <FacebookIcon className="footer-icon" />
            </IconButton>
            <IconButton onClick={() => navigate('https://twitter.com')} target="_blank" rel="noopener" className="footer-icon-button">
              <TwitterIcon className="footer-icon" />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default ResponsiveAppBar;
