import { Breadcrumbs, Button, Grid, Link, Toolbar, Typography } from "@mui/material"

const Breadcrumb = () =>{
    return(
        <Toolbar>
        <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">
                            MUI
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/material-ui/getting-started/installation/"
                        >
                            Core
                        </Link>
                        <Typography color="text.primary">Breadcrumbs</Typography>
                    </Breadcrumbs>
        </Toolbar>
           
    )
}

export default Breadcrumb