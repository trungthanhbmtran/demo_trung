import { Box, Button, Divider, Grid, Typography } from "@mui/material"
import {Noti} from '../../lib/dataNotification'
import DownloadIcon from '@mui/icons-material/Download';

const Content = ({children}) => {
    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center" paddingTop={3} >
            <Grid item md={6} >
                {children}
            </Grid>
            <Grid item container spacing={2} md={6} >
                <Grid item xs={12} >
                    <Typography sx={{backgroundColor : "red"}}>Thông báo</Typography>
                    <Box border={1}>
                        {Noti.map((e,i) =>
                        <Box padding={2}>
                            <Typography>{e.tittle}</Typography>
                        </Box> 
                        )}
                    </Box>
                </Grid>
                <Grid item xs={12} >
                   <Typography align="center"  sx = {{backgroundColor:"blue"}}>Danh mục</Typography> 
                    <Box border={1}>
                       {Noti.map((e,i)=>
                       <Box paddingLeft={1}>
                        <Typography>
                            {e.tittle}
                        </Typography>
                        <Divider></Divider>
                       </Box>
                       )}
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" fullWidth startIcon={<DownloadIcon/>}>
                        Tra cứu văn bản
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    Video
                </Grid>
                <Grid item xs={12}>
                    Hỏi đáp
                </Grid>
                <Grid item xs={12}>
                    Thư viện ảnh
                </Grid>
                <Grid item xs={12}>
                    Liên kết website
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Content