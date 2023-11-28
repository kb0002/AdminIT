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
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon

// Simplified styles
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
    width: '300px',
    padding: '30px',
    borderRadius: '10px',
    border: '2px solid black',
    marginBottom: '200px',
  },
  responsiveButton: {
    width: '200px',
    marginBottom: '10px',
  },
  footer: {
    background: '#333',
    color: 'white',
    padding: '10px',
    width: '100%',
    marginTop: 'auto',
  },
  drawer: {
    width: '240px',
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '8px',
  },
};

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      ((event.key === 'Tab' && event.shiftKey) || event.key === 'Escape')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const menuItems = ['Profile', 'Account', 'Bank Link', 'Work Update', 'Task Scheduler', 'Appointments', 'Help Me'];

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
          <Button color="inherit">HOME</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">API DOCS</Button>
          <Button color="inherit">SIGN UP</Button>
          <Button color="inherit">LOGIN</Button>
        </Toolbar>
      </AppBar>

      <Drawer
        className="drawer"
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{
          paper: styles.drawer,
        }}
      >
        <div style={styles.drawerHeader}>
          {/* Close button */}
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        {/* Menu items */}
        <List>
          {menuItems.map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <main style={styles.content}>
        {/* Centered and Rounded Box */}
        <Box style={styles.centeredBox}>
          {/* Header */}
          <Typography variant="h3" component="div" gutterBottom>
            Tools For Every Use
          </Typography>

          {/* Your main content goes here */}
          {/* Responsive Buttons */}
          <Button
            variant="contained"
            color="primary"
            style={styles.responsiveButton}
          >
            Email Support
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.responsiveButton}
          >
            Phone Support
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.responsiveButton}
          >
            Task Scheduler
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.responsiveButton}
          >
            Hack Tools
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.responsiveButton}
          >
            Calendar
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.responsiveButton}
          >
            Maps
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.responsiveButton}
          >
            AI Generators
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={styles.responsiveButton}
          >
            Social Media
          </Button>
        </Box>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <Typography variant="body2" align="center">
          © 2023 Your Company. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default App;
