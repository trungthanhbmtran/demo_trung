'use client'

import {Grid} from "@mui/material";
import Image from "next/image";
import { Colors } from "../../../mui/theme";


const BannerHeader = () => {
    return (
        // <BoxImageHeader src="./banner_aChieu3.png"/>
            <Grid container
                justifyContent="center"
                alignItems="center"
                sx={{ backgroundColor: Colors.background }}>
                <Grid item >
                    <Image src="/Logo/logo-moi-3.png" alt="logo" width={420} height={100} />
                </Grid>
                <Grid item >
                    <Image src="/Logo/header-image-3.png" alt="logo" width={450} height={100} />
                </Grid>
            </Grid>
    )
}

export default BannerHeader