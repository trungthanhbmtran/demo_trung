'use client'
import { Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBarMui from '@mui/material/AppBar';
import MenuItems from './MenuItems';
import { menu } from '../../lib/menu/menu'
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';

const AppBar = () => {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    return (
        <AppBarMui
            position='sticky'
            color='inherit'
            sx={{
                backgroundImage: 'linear-gradient(to right, #980d05, #71030c, #b20000, #71030c, #b20000)',
            }}
        >
            <Toolbar sx={{justifyContent : "space-between"}}>
                <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    edge='start'
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Box/>
                <IconButton color='inherit'>
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </AppBarMui>
    )
}

export default AppBar