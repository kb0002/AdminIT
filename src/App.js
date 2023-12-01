// src/App.js
import React from 'react';
import {
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
  Box,
  Modal,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  appBar: {
    width: '100%',
    zIndex: 1101,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
  },
  centeredBox: {
    width: '700px',
    padding: '50px',
    borderRadius: '10px',
    border: '2px solid black',
    marginBottom: '200px',
  },
  responsiveButton: {
    width: '250px',
    height: '100px',
    margin: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    background: '#333',
    color: 'white',
    padding: '10px',
    width: '100%',
    marginTop: '300px',
    fontSize: '100%',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    width: '400px',
    backgroundColor: 'white',
    borderRadius: '10px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  textField: {
    margin: '10px',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  avatar: {
    width: '60px',
    height: '60px',
    margin: '10px auto',
  },
  uploadButton: {
    width: '100%',
  },
  signUpLogin: {
    marginRight: '10px', // Aligns to the right
  },
  closeButton: {
    marginLeft: 'auto', // Pushes the 'X' icon to the right
  },
  aboutUsModal: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '10px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  navButton: {
    marginLeft: '10px', // Add margin between buttons
  },
};

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedApi, setSelectedApi] = React.useState('');
  const [aboutUsModalOpen, setAboutUsModalOpen] = React.useState(false); 

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      ((event.key === 'Tab' && event.shiftKey) || event.key === 'Escape')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const toggleModal = (api) => {
    setSelectedApi(api);
    setModalOpen(!modalOpen);
  };


  const toggleAboutUsModal = () => {  // Add this function
    setAboutUsModalOpen(!aboutUsModalOpen);
  };

  const menuOptions = [
    'Profile',
    'Guide',
    'Home',
    'API',
    'Docs',
    'Settings',
    'Pricing',
    'References',
    'More...',
  ];

  const apiButtons = [
    'Video Call API',
    'OAuth 2.0 Gmail/Facebook Signup',
    'Stock Market API',
    'Email Integration API',
    'Video Streaming API',
    'Live Video Streaming API',
  ];

  return (
    <div style={styles.root}>
      <CssBaseline />
      <AppBar position="fixed" style={styles.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            <img
              src="/path/to/your/logo.png"
              alt=""
              style={{ marginRight: '10px' }}
            />
            AdminIT
          </Typography>
          
          
          <Box style={styles.signUpLogin}>
            <Button color="inherit" style={styles.navButton} onClick={toggleAboutUsModal}>
              About Us
            </Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">Signup</Button>
            <Button color="inherit">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    
        {/* About Us Modal */}
      <Modal
        open={aboutUsModalOpen}
        onClose={toggleAboutUsModal}
        aria-labelledby="aboutus-modal-title"
        aria-describedby="aboutus-modal-description"
        style={styles.modal}
      >
        <Paper style={styles.aboutUsModal}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="close"
            onClick={toggleAboutUsModal}
            style={styles.closeButton}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" id="aboutus-modal-title" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" id="aboutus-modal-description" style={{ margin: '10px 0' }}>
            1)Our Product:
              Is a powerful tool designed to facilitate the seamless integration of APIs into both web and mobile applications. It serves as a central hub for developers and businesses looking to enhance their applications with external services, functionalities, and data.
            {/* Add detailed information here */}
          </Typography>
          <Typography variant="body1" id="aboutus-modal-description" style={{ margin: '10px 0' }}>
            2) How to use it: 
               To leverage the capabilities of our tool, users need to register and obtain a specific peace code along with an API key. The peace code acts as a unique identifier, allowing users to access and enable specific APIs within their web applications. This registration process ensures a secure and tailored integration experience.
            {/* Add detailed information here */}
          </Typography>
          <Typography variant="body1" id="aboutus-modal-description" style={{ margin: '10px 0' }}>
            3) Advantages Over Manual API Building:
               Our tool offers a streamlined alternative to the manual process of building and integrating APIs. By using our product, developers can significantly reduce the time and effort traditionally required for API integration. This approach eliminates the need for extensive coding and testing, providing a more efficient and user-friendly experience. Additionally, our tool centralizes API management, making it easier to maintain and update integrations.
                        {/* Add detailed information here */}
          </Typography>
          <Typography variant="body1" id="aboutus-modal-description" style={{ margin: '10px 0' }}>
            4) Enabling Features in Web Applications:
               Enabling features in web applications is a straightforward process with our tool. After obtaining the necessary peace code and API key, users can navigate to the intuitive dashboard. Here, they can select the desired API from a catalog of available options. With a few simple clicks, the chosen API is seamlessly integrated into the web application, ready to enhance its functionality. Our tool provides detailed documentation and support to guide users through the integration process, ensuring a smooth and successful implementation.
          </Typography>
        </Paper>
      </Modal>
      <Drawer
        className={styles.drawer}
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{
          paper: styles.drawerPaper,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            Admin IT
          </Typography>
          <IconButton
            color="inherit"
            aria-label="close"
            onClick={toggleDrawer(false)}
            style={styles.drawerCloseButton}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <List>
          <ListItem>
            <Avatar
              src="/path/to/your/profile-photo.jpg"
              alt="Profile"
              style={styles.avatar}
            />
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              color="primary"
              style={styles.uploadButton}
            >
              Upload Photo
            </Button>
          </ListItem>
          {menuOptions.map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <main style={styles.content}>
        <Box style={styles.centeredBox}>
          <Typography variant="h4" component="div" gutterBottom>
            Integrat APIs Seamlessly In Your Apps
          </Typography>
          <Box display="flex" flexDirection="row" flexWrap="wrap">
            {apiButtons.map((text, index) => (
              <Button
                key={text}
                variant="contained"
                color="primary"
                style={styles.responsiveButton}
                onClick={() => toggleModal(text)}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Box>
      </main>

      <footer style={styles.footer}>
        <Typography variant="body2" align="center" style={{ fontSize: '25px' }}>
          Designed and Developed by Kumar B. Copyright © 2023. All rights reserved.
        </Typography>
      </footer>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={toggleModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={styles.modal}
      >
        <Paper style={styles.paper}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="close"
            onClick={toggleModal}
            style={styles.closeButton}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" id="modal-title" gutterBottom>
            {selectedApi}
          </Typography>
          <Typography variant="subtitle1" id="modal-description" gutterBottom>
            Sign up or Login to Use This Tool
          </Typography>
          <Box style={styles.buttonContainer}>
            <Button
              variant="outlined"
              color="primary"
              style={styles.responsiveButton}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              color="primary"
              style={styles.responsiveButton}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Modal>
    </div>
  );
}

export default App;
