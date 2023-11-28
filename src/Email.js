// src/App.js
import React from 'react';
import {
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Paper,
  CssBaseline,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdminTools from './AdminTools';
import EmailTool from './EmailTool';
import MonitoringTool from './MonitoringTool';
import BackupTool from './BackupTool';
import SecurityTool from './SecurityTool';

const drawerWidth = 240;

const useStyles = () => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: (theme) => theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: '20px',
  },
});

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

  const menuItems = [
    'Profile',
    'Task Scheduler',
    'Navigation',
    'Maps',
    'Department',
    'Building location',
    'Social Media',
  ];

  const adminToolsData = [
    { name: 'Email', description: 'Manage company emails efficiently.' },
    { name: 'Phone', description: 'Handle company phone systems.' },
    { name: 'External Tools', description: 'Integration with external IT tools.' },
  ];

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
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
              alt="Logo"
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
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          {menuItems.map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <main className={classes.content}>
        <header className="text-center my-5">
          <Typography variant="h1" component="div" gutterBottom>
            Welcome to My Landing Page
          </Typography>
          <Typography variant="h4" component="div" paragraph>
            A simple and responsive landing page built with React, Material-UI, and Bootstrap.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </header>

        <section className="my-5">
          <AdminTools tools={adminToolsData} />
          <EmailTool />
          <MonitoringTool />
          <BackupTool />
          <SecurityTool />
        </section>
      </main>

      <footer className="text-center my-5">
        <Typography variant="h6" component="div" gutterBottom>
          © 2023 My Landing Page. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}

export default App;
