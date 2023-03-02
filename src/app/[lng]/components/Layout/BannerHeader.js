'use client'

import { Box } from "@mui/material"
import Image from "next/image"

const BannerHeader = () =>{
    return(
        // <Image src="/static/Banner/DJI_0086.JPG" width={1060} height={350} ></Image> 
        <img
        src="static/Banner/DJI_0086.JPG"
        style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
        }}
    />
        )
}

export default BannerHeader
