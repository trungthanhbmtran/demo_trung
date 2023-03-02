'use client'
import { Box, Button, Container, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AppBarMui from '@mui/material/AppBar';
import MenuItems from './MenuItems';
import { menu } from '../../lib/menu/menu'
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import * as Actions from '../../../redux/Actions'
import { useDispatch } from 'react-redux';

const AppBar = () => {
    const dispatch = useDispatch()
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    return (
        <AppBarMui
            position="sticky"
            color='inherit'
        >
            <Toolbar sx={{justifyContent : "space-between" }}>
                <IconButton
                    color='inherit'
                    aria-label='open drawer'
                    edge='start'
                    onClick={() => dispatch(Actions.default.set_drawerOpen(true))}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Box/>
                {matches ? menu.map((item,key)=> <MenuItems key={key} item={item} />) : null}
                {/* <IconButton color='inherit'>
                    <SearchIcon />
                </IconButton> */}
            </Toolbar>
        </AppBarMui>
    )
}

export default AppBar