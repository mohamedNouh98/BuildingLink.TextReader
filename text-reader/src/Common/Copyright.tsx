import { Link, Typography } from '@mui/material';
import React from 'react';

function Copyright(props: any) {
	return (
	  <Typography variant="body2" color="text.secondary" align="center" {...props}>
		{'Copyright © '}
		<Link color="inherit" href="https://mui.com/">
		  Mohamed Nouh's
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
  }
			
export default Copyright;