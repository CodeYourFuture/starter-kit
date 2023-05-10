import React from 'react';
import { Box, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';


 function Security() {
  // const primary = purple[black]; // #f44336

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'linear-gradient(330deg,#00ff9e,#01bbff)',
      }}
    >
      <Typography variant="p" style={{ color: '' }}>
        Page Not Fund...
      </Typography>
        <br />
      <Typography variant="h1" style={{ color: '' }}>
        404
      </Typography>
    </Box>
  );
}

export default Security;