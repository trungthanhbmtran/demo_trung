'use client'

import DrawerMui from '@mui/material/Drawer'
import { DrawerWidth,Colors } from '../../../mui/theme'
import { menu } from '../../lib/menu/menu'
import MenuItem from './MenuItems'

const Drawer = ({ window }) => {
    // console.log('DrawerState', DrawerState)
    const container = window !== undefined ? () => window().document.body : undefined;
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
            anchor="left"
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
        >
            {menu.map((item,key)=> <MenuItem key={key} item={item}/>)}
        </DrawerMui>
    )
}

export default Drawer