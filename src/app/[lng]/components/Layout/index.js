'use client'

// import { AppBarMui } from './Deskktop';
// import { Grid } from '@mui/material';
import AppBar from './Appbar';
import Banner from './Banner';
import BannerHeader from './BannerHeader';
import Content  from './Content';
import Drawer from './Drawer';
import Carousel from '../../lib/carousel';

import {
    useMediaQuery,
    useTheme,
    Box
  } from "@mui/material";
import ToolBar from './ToolBar';
import Breadcrumb from './(CategoryBox)/Breadcrumb';


export const Layout = ({children}) =>{
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    return(
        <Box>
            {/* <Banner/>
            <BannerHeader/> */}
            <AppBar/>
            <ToolBar/>
            <Breadcrumb/>
            <Drawer/>
            {/* <Content> */}
                {children}
            {/* </Content> */}
            {/* <Carousel/> */}
        </Box>
    )
}