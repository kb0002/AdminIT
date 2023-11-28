// src/SecurityTool.js
import React from 'react';
import { Paper, Typography } from '@mui/material';
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
  import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
const SecurityTool = () => {
  return (
    <Paper elevation={3} style={{ borderRadius: 16, padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h5" component="div" gutterBottom>
        Security Tool
      </Typography>
      <Typography>
        Description: Implement and manage security measures to protect systems and data. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      {/* Add more details or customization as needed */}
    </Paper>
  );
};

export default SecurityTool;
