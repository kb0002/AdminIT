// src/MonitoringTool.js
import React from 'react';
import { Paper, Typography } from '@mui/material';

const MonitoringTool = () => {
  return (
    <Paper elevation={3} style={{ borderRadius: 16, padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h5" component="div" gutterBottom>
        Monitoring Tool
      </Typography>
      <Typography>
        Description: Monitor and analyze system performance and health. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      {/* Add more details or customization as needed */}
    </Paper>
  );
};

export default MonitoringTool;
