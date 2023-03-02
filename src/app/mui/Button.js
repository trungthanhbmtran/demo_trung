import { Button } from "@mui/material"

const MuiButton =({children, variant = "contained" , url = null}) =>{
    return(
         <Button variant={variant} onClick={url}>
            {children}
        </Button>
    )
}

export default MuiButton