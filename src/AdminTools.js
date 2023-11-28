// src/AdminTools.js
import React from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const AdminTools = ({ tools }) => {
  return (
    <TableContainer component={Paper} elevation={3} style={{ borderRadius: 16, margin: '20px auto', maxWidth: 600 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tool Name</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tools.map((tool) => (
            <TableRow key={tool.name}>
              <TableCell>{tool.name}</TableCell>
              <TableCell>{tool.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminTools;
