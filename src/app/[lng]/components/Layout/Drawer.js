'use client'
import { useDispatch, useSelector } from 'react-redux'
import DrawerMui from '@mui/material/Drawer'
import { DrawerWidth,Colors } from '../../../mui/theme'
import { menu } from '../../lib/menu/menu'
import * as Actions from '../../../redux/Actions'
import MenuItem from './MenuItems'

const Drawer = ({ window }) => {
    // console.log('DrawerState', DrawerState)
    const dispatch = useDispatch()
    const isDrawerOpen  = useSelector(state => state.drawerOpen)

    const container = window?.().document.body;
    
    return (
        <DrawerMui
            container={container}
            sx={{
                display: { xs: 'block' },
                '& .MuiDrawer-paper': 
                { 
                    boxSizing: 'border-box', 
                    width: DrawerWidth ,
                    backgroundColor: Colors.primary, 
                    backgroundImage : "linear-gradient(to right,#980d05,#71030c, #b20000,#71030c, #b20000)" 
                },
            }}
            open={isDrawerOpen}
            anchor="left"
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            onClose={() => dispatch(Actions.default.set_drawerOpen(false))}
        >
            {menu.map((item,key)=> <MenuItem key={key} item={item}/>)}
        </DrawerMui>
    )
}

export default Drawer