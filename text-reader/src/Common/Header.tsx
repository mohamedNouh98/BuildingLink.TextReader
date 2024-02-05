import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";

function Header(){
    return(
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Text Reader
                </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}
export default Header;