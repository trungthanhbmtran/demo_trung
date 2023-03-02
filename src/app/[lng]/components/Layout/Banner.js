'use client'

import {Button, Divider, Grid, Stack} from "@mui/material";
import Image from "next/image";
import { Colors } from "../../../mui/theme";


const BannerHeader = () => {
    return (
        // <BoxImageHeader src="./banner_aChieu3.png"/>
            <Grid 
            container
            justifyContent="space-between"
            alignItems="center"
                >
              <Grid item >
                      <Button>Đăng nhập</Button>
                      <Button>Đăng ký</Button>      
              </Grid>
              <Grid item  > 
           
                      <Button>Sơ đồ website</Button>
                      <Button>Liên hệ</Button>      
              </Grid>
            </Grid>
    )
}

export default BannerHeader