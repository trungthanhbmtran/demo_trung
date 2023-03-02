'use client'
import { Description } from './Deskktop/Description';
// import { AppBarMui } from './Deskktop';
// import { Grid } from '@mui/material';
import AppBar from './Appbar';
import BannerHeader from './Banner';
import Drawer from './Drawer';
import {
    Grid,
    Button,
    IconButton,
    Toolbar,
    Typography,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
    Divider,
    Link,
    Breadcrumbs, 
    Box
  } from "@mui/material";


export const Header = ({children}) =>{
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    return(
        <Box>
            <BannerHeader/>
            <AppBar/>
            {children}
            <h1> this is footer</h1>
            {/* <Drawer/> */}
        </Box>
        // <Grid container justifyContent="center" alignItems="center" spacing={2}>
        //     <Grid item xs={12}>
        //      Cổng thông tin điện tử Chính phủ
        //     </Grid>
        //     <Grid item xs={12}  >
        //     </Grid>
        //     <Grid item xs={12}  >
        //         <Description/>
        //     </Grid>
        //     <Grid item xs={12} >
        //         Animation slide
        //     </Grid>
        //     <Grid item xs={12} >
        //     <Breadcrumbs aria-label="breadcrumb">
        //             <Link underline="hover" color="inherit" href="/">
        //             Trang chu
        //             </Link>
        //             <Link
        //             underline="hover"
        //             color="inherit"
        //             href="/material-ui/getting-started/installation/"
        //             >
        //             Sub menu
        //             </Link>
        //             <Typography color="text.primary">current</Typography>
        //         </Breadcrumbs>
        //     </Grid>
        // </Grid>
           
        
    )
}