import { Box, Typography } from "@mui/material";
import Copyright from "./Copyright";

function Footer(){
    return (
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        Building Link
        </Typography>
        <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
        >
        Text Reader
        </Typography>
        <Copyright />
  </Box>
  );
}

export default Footer;